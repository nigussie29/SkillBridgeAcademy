import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Loader2, MessageCircle, ShieldCheck } from 'lucide-react';
import { checkTutoringIntake, getTutoringConfig, GRADE_OPTIONS, loadTurnstile, submitTutoringInquiry } from '../services/tutoringInquiry.mjs';

function Verification({ sitekey, onToken }) {
  const container = useRef(null);
  const [error, setError] = useState('');
  const [retry, setRetry] = useState(0);
  useEffect(() => {
    let active = true, widget, api;
    setError('');
    onToken('');
    loadTurnstile().then(turnstile => {
      if (!active) return;
      api = turnstile;
      widget = api.render(container.current, {
        sitekey, action: 'inquiry', theme: 'light', size: 'flexible',
        callback: token => { if (active) { setError(''); onToken(token); } },
        'expired-callback': () => { if (active) onToken(''); },
        'error-callback': () => { if (active) { onToken(''); setError('Verification needs another try.'); } },
      });
    }).catch(e => { if (active) setError(e.message); });
    return () => { active = false; if (widget !== undefined) api?.remove(widget); };
  }, [sitekey, retry, onToken]);
  return <div><div ref={container} aria-label="Verify your inquiry" />{error && <div role="alert" className="mt-2 text-sm text-amber-800"><p>{error}</p><button type="button" onClick={() => setRetry(v => v + 1)} className="mt-2 font-bold underline">Try verification again</button></div>}</div>;
}

export default function RequestTutoring() {
  const config = useRef(getTutoringConfig()).current;
  const submissionKey = useRef(crypto.randomUUID());
  const [readiness, setReadiness] = useState(config ? 'loading' : 'unavailable');
  const [center, setCenter] = useState('KingsNigus Academy');
  const [error, setError] = useState('');
  const [token, setToken] = useState('');
  const [busy, setBusy] = useState(false);
  const [received, setReceived] = useState(false);
  const [retry, setRetry] = useState(0);
  const [verificationVersion, setVerificationVersion] = useState(0);
  const sending = useRef(false);

  useEffect(() => {
    if (!config) return;
    const controller = new AbortController();
    setReadiness('loading');
    checkTutoringIntake(config, { signal: controller.signal }).then(result => {
      if (!controller.signal.aborted) { setCenter(result.name); setReadiness(result.enabled ? 'ready' : 'unavailable'); }
    }).catch(() => { if (!controller.signal.aborted) setReadiness('error'); });
    return () => controller.abort();
  }, [config, retry]);

  async function submit(event) {
    event.preventDefault();
    if (sending.current) return;
    const form = new FormData(event.currentTarget);
    const fields = Object.fromEntries(form.entries());
    fields.consent = form.get('consent') === 'on';
    sending.current = true;
    setBusy(true);
    setError('');
    try {
      await submitTutoringInquiry(config, fields, token, submissionKey.current);
      setReceived(true);
    } catch (e) {
      setError(e.message || 'We could not confirm your request. Please try again.');
      setToken('');
      setVerificationVersion(v => v + 1);
    } finally { sending.current = false; setBusy(false); }
  }

  const fieldClass = 'mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100';
  return (
    <section className="bg-gradient-to-br from-emerald-50 via-white to-amber-50 py-12 md:py-20">
      <div className="section mx-auto max-w-5xl">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">KingsNigus Academy · Learning support</p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">Tell us where you want to grow.</h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">Share the subject, learning level, and kind of support you are looking for. Our team reviews each request before confirming services, prices, or an appointment.</p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="h-fit rounded-3xl bg-emerald-950 p-7 text-emerald-50">
            <MessageCircle size={30} className="text-amber-200" aria-hidden="true" />
            <h2 className="mt-5 text-2xl font-bold">A clear next step, together.</h2>
            <ol className="mt-6 space-y-5 text-sm leading-7 text-emerald-100">
              <li><strong className="text-amber-200">1.</strong> Tell us your learning needs.</li>
              <li><strong className="text-amber-200">2.</strong> The academy team reviews your request.</li>
              <li><strong className="text-amber-200">3.</strong> We clarify details and agree on a next step.</li>
            </ol>
            <div className="mt-7 flex gap-3 border-t border-emerald-800 pt-5 text-xs leading-6 text-emerald-100"><ShieldCheck size={20} className="shrink-0" aria-hidden="true" /><p>Use a parent or guardian’s contact information, or your own details if you are an adult learner. Please keep sensitive student records out of this form.</p></div>
          </aside>

          <div className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-lg shadow-emerald-950/5 md:p-8">
            {readiness === 'loading' && <div role="status" className="flex items-center gap-3 py-12 text-slate-600"><Loader2 size={20} className="animate-spin" aria-hidden="true" />Opening the inquiry form…</div>}
            {readiness === 'unavailable' && <div className="py-8"><h2 className="text-2xl font-bold text-slate-900">Online tutoring requests are not open yet.</h2><p className="mt-4 leading-7 text-slate-600">Please check back later. You can explore the academy’s courses in the meantime.</p><Link to="/courses" className="btn-primary mt-6 inline-flex items-center gap-2">Explore Courses<ArrowRight size={17} aria-hidden="true" /></Link></div>}
            {readiness === 'error' && <div role="alert" className="py-8"><h2 className="text-xl font-bold text-slate-900">The inquiry form is temporarily unavailable.</h2><p className="mt-4 text-slate-600">Please try loading it again.</p><button type="button" onClick={() => setRetry(v => v + 1)} className="btn-primary mt-6">Try again</button></div>}
            {readiness === 'ready' && received && <div role="status" className="py-10 text-center"><CheckCircle2 size={46} className="mx-auto text-emerald-600" aria-hidden="true" /><h2 className="mt-5 text-2xl font-bold text-slate-900">Your request has been received.</h2><p className="mt-4 leading-7 text-slate-600">The {center} team will review your learning needs. A response or appointment has not been confirmed yet.</p><Link to="/courses" className="mt-6 inline-flex items-center gap-2 font-bold text-emerald-800">Explore Courses<ArrowRight size={17} aria-hidden="true" /></Link></div>}
            {readiness === 'ready' && !received && <form onSubmit={submit} className="space-y-5">
              <div><h2 className="text-2xl font-bold text-slate-900">Request Tutoring</h2><p className="mt-2 text-sm text-slate-600">Your request will be reviewed by {center}.</p></div>
              <fieldset disabled={busy} className="space-y-5">
                <div><label htmlFor="tutoring-name" className="text-sm font-semibold text-slate-700">Parent, guardian, or adult learner name</label><input id="tutoring-name" name="name" required minLength={2} maxLength={100} autoComplete="name" className={fieldClass} /></div>
                <div><label htmlFor="tutoring-email" className="text-sm font-semibold text-slate-700">Email address</label><input id="tutoring-email" name="email" type="email" required maxLength={254} autoComplete="email" className={fieldClass} /></div>
                <div className="grid gap-5 sm:grid-cols-2"><div><label htmlFor="tutoring-subject" className="text-sm font-semibold text-slate-700">Subject</label><input id="tutoring-subject" name="subject" required maxLength={80} placeholder="e.g. Algebra I" className={fieldClass} /></div><div><label htmlFor="tutoring-grade" className="text-sm font-semibold text-slate-700">Grade or learning level</label><select id="tutoring-grade" name="grade" required defaultValue="" className={fieldClass}><option value="" disabled>Choose a level</option>{GRADE_OPTIONS.map(grade => <option key={grade} value={grade}>{/^\d+$/.test(grade) ? `Grade ${grade}` : grade === 'K' ? 'Kindergarten' : grade}</option>)}</select></div></div>
                <div><label htmlFor="tutoring-support" className="text-sm font-semibold text-slate-700">Preferred support, if known</label><input id="tutoring-support" name="support" maxLength={100} placeholder="e.g. Individual tutoring, or help choosing" className={fieldClass} /></div>
                <div><label htmlFor="tutoring-message" className="text-sm font-semibold text-slate-700">What would you like help with?</label><textarea id="tutoring-message" name="message" rows={5} required minLength={10} maxLength={3000} placeholder="Describe the learning goal. You may mention preferred times; the team will confirm availability." className={fieldClass} /></div>
                <div hidden aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
                <label className="flex items-start gap-3 text-sm leading-6 text-slate-600"><input type="checkbox" name="consent" required className="mt-1 h-4 w-4 shrink-0 accent-emerald-700" />I am the parent or guardian, or an adult learner, and agree that the academy may contact me about this request.</label>
                <Verification key={verificationVersion} sitekey={config.sitekey} onToken={setToken} />
                {error && <div role="alert" className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900">{error} If a previous attempt was received, retrying this form will not create a second inquiry.</div>}
                <button type="submit" disabled={busy || !token} className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-800 px-6 py-3 font-bold text-white transition hover:bg-emerald-900 disabled:cursor-not-allowed disabled:opacity-50">{busy ? <><Loader2 size={18} className="animate-spin" aria-hidden="true" />Sending your request…</> : <>Send tutoring request<ArrowRight size={18} aria-hidden="true" /></>}</button>
                <p className="text-xs leading-6 text-slate-500">Submitting a request does not confirm a booking, price, or service availability.</p>
              </fieldset>
            </form>}
          </div>
        </div>
      </div>
    </section>
  );
}
