import test from 'node:test';
import assert from 'node:assert/strict';
import { createTutoringPayload, getTutoringConfig, checkTutoringIntake, submitTutoringInquiry } from '../src/services/tutoringInquiry.mjs';

const publicKey = `header.${btoa(JSON.stringify({role:'anon'}))}.signature`;
const env = {
  VITE_LUMINARY_INQUIRY_ENABLED:'true', VITE_LUMINARY_SUPABASE_URL:'https://example-project.supabase.co',
  VITE_LUMINARY_ANON_KEY:publicKey, VITE_LUMINARY_WORKSPACE_SLUG:'kingnigus-academy',
  VITE_LUMINARY_TURNSTILE_SITE_KEY:'public-widget-key',
};
const fields = {name:'Test Parent',email:'PARENT@example.com',subject:'Algebra',grade:'8',support:'Individual tutoring',message:'My child needs help with equations.',consent:true};
const key = '10000000-0000-4000-8000-000000000001';

test('connection stays disabled until explicitly enabled with all public settings',()=>{
  assert.equal(getTutoringConfig({}),null);
  assert.equal(getTutoringConfig({...env,VITE_LUMINARY_INQUIRY_ENABLED:'false'}),null);
  assert.equal(getTutoringConfig({...env,VITE_LUMINARY_TURNSTILE_SITE_KEY:''}),null);
  assert.equal(getTutoringConfig({VITE_SUPABASE_URL:env.VITE_LUMINARY_SUPABASE_URL,VITE_SUPABASE_ANON_KEY:publicKey}),null);
  assert.equal(getTutoringConfig(env).slug,'kingnigus-academy');
});
test('a secret/service-role key or unsafe endpoint cannot become browser configuration',()=>{
  assert.equal(getTutoringConfig({...env,VITE_LUMINARY_ANON_KEY:'sb_secret_never-use-in-a-browser'}),null);
  const serviceKey=`header.${btoa(JSON.stringify({role:'service_role'}))}.signature`;
  assert.equal(getTutoringConfig({...env,VITE_LUMINARY_ANON_KEY:serviceKey}),null);
  for(const value of ['http://example-project.supabase.co','https://attacker.example','javascript:alert(1)','https://user:password@example-project.supabase.co','https://example-project.supabase.co/extra'])
    assert.equal(getTutoringConfig({...env,VITE_LUMINARY_SUPABASE_URL:value}),null,value);
});
test('public payload contains learning needs, consent, challenge, and a stable submission ID',()=>{
  const config=getTutoringConfig(env);
  const p=createTutoringPayload(config,{...fields,workspace_id:'attacker-workspace',slug:'other-center'},'challenge',key);
  assert.equal(p.slug,'kingnigus-academy');assert.equal(p.workspace_id,undefined);
  assert.equal(p.email,'parent@example.com');assert.equal(p.submission_key,key);assert.equal(p.captcha_token,'challenge');
  assert.match(p.message,/Subject: Algebra\nGrade 8\nRequested support: Individual tutoring/);
  assert.equal(createTutoringPayload(config,fields,'new-challenge',key).submission_key,key);
});
test('missing consent, verification, invalid fields, and a honeypot fail before submission',()=>{
  const config=getTutoringConfig(env);
  assert.throws(()=>createTutoringPayload(config,{...fields,consent:false},'challenge',key),/Permission/);
  assert.throws(()=>createTutoringPayload(config,fields,'',key),/verification/);
  assert.throws(()=>createTutoringPayload(config,{...fields,email:'invalid'},'challenge',key),/email/);
  assert.throws(()=>createTutoringPayload(config,{...fields,website:'bot.example'},'challenge',key),/refresh/);
  assert.throws(()=>createTutoringPayload(config,{...fields,grade:'99'},'challenge',key),/learning level/);
});
test('uncertain grade stays unspecified rather than being guessed',()=>{
  const p=createTutoringPayload(getTutoringConfig(env),{...fields,grade:'Not sure'},'challenge',key);
  assert.match(p.message,/Grade level: not specified/);
});
test('readiness checks only the minimal public configuration endpoint',async()=>{
  let captured;
  const config=getTutoringConfig(env);
  const result=await checkTutoringIntake(config,{fetcher:async(url,options)=>{captured={url,options};return Response.json({name:'KingsNigus Academy',enabled:true});}});
  assert.equal(result.enabled,true);assert.deepEqual(JSON.parse(captured.options.body),{action:'public_config',slug:'kingnigus-academy'});
  assert.equal(captured.options.credentials,'omit');assert.equal(captured.options.headers.Authorization,undefined);
});
test('submitting sends no academy Auth token and succeeds only after explicit server receipt',async()=>{
  let captured;
  const result=await submitTutoringInquiry(getTutoringConfig(env),fields,'challenge',key,{fetcher:async(url,options)=>{
    captured={url,options};return Response.json({ok:true});
  }});
  assert.equal(result.ok,true);assert.equal(captured.url,env.VITE_LUMINARY_SUPABASE_URL+'/functions/v1/automation');
  assert.equal(captured.options.headers.apikey,publicKey);assert.equal(captured.options.headers.Authorization,undefined);
  assert.equal(captured.options.credentials,'omit');assert.equal(JSON.parse(captured.options.body).action,'public_intake');
});
test('provider/API failures and incomplete replies never produce a false success',async()=>{
  const config=getTutoringConfig(env);
  await assert.rejects(submitTutoringInquiry(config,fields,'challenge',key,{fetcher:async()=>Response.json({ok:false})}),/could not confirm/);
  await assert.rejects(submitTutoringInquiry(config,fields,'challenge',key,{fetcher:async()=>Response.json({error:'Database unavailable'},{status:503})}),/could not confirm/);
  await assert.rejects(submitTutoringInquiry(config,fields,'challenge',key,{fetcher:async()=>new Response('not JSON')}),/could not confirm/);
  await assert.rejects(submitTutoringInquiry(config,fields,'challenge',key,{fetcher:async()=>Response.json({error:'Verification failed'},{status:400})}),/verification again/);
});
