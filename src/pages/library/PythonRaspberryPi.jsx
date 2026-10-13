import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { piLessons as lessons, courseBase, roboticsSources, controllerLab, gpioLab, piDecision } from '../../data/robotics/pythonPi';

const STORAGE = 'kingnigus-python-pi-v1';
function loadProgress() {
  try {
    const raw = JSON.parse(localStorage.getItem(STORAGE) || '{}');
    const records = {};
    for (const lesson of lessons) {
      const item = raw.lessons?.[lesson.slug];
      if (item && Number.isFinite(item.score) && item.score >= 0 && item.score <= 100) records[lesson.slug] = {score: item.score, lab: item.lab === true};
    }
    return {lessons:records, project: raw.project === true};
  } catch { return {lessons:{},project:false}; }
}
function useProgress() {
  const [progress, setProgress] = useState(loadProgress);
  const [error,setError] = useState('');
  function save(next) {
    setProgress(next);
    try {localStorage.setItem(STORAGE, JSON.stringify(next)); setError('');}
    catch {setError('Progress could not be saved on this browser. Keep your results separately before closing this page.');}
  }
  return [progress,save,error];
}
const complete = (progress,lesson) => progress.lessons[lesson.slug]?.score >=80 && progress.lessons[lesson.slug]?.lab;
const btn = 'inline-block rounded-xl bg-amber-400 px-5 py-3 font-bold text-slate-950 hover:bg-amber-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-700';

export default function PythonRaspberryPi() {
  const {lessonSlug} = useParams();
  return <CourseView key={lessonSlug || 'overview'} slug={lessonSlug} />;
}
function CourseView({slug}) {
  const [progress,save,error] = useProgress();
  const lesson=lessons.find(x=>x.slug===slug);
  if (slug && !lesson && slug!=='completion') return <main className="mx-auto max-w-4xl p-10"><h1 className="text-3xl font-bold">Lesson not found</h1><Link to={courseBase}>Return to Python and Raspberry Pi</Link></main>;
  const count=lessons.filter(l=>complete(progress,l)).length;
  return <main className="min-h-screen bg-slate-50 pb-16 text-lg leading-8 text-slate-700">
    <header className="bg-gradient-to-br from-slate-950 via-orange-950 to-amber-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <Link to="/library/robotics" className="font-bold text-amber-200">← Robotics Library</Link>
        <p className="mt-6 text-sm font-black uppercase tracking-widest text-amber-300">KingNigus Academy · Python and Raspberry Pi</p>
        <h1 className="mt-3 text-3xl font-black leading-tight md:text-5xl">{lesson?.title || (slug==='completion'?'Learning Completion Record':'Python and Raspberry Pi')}</h1>
        <p className="mt-5 max-w-4xl text-xl text-amber-50">{lesson?`Lesson ${lessons.indexOf(lesson)+1} of 8 · ${lesson.duration}`:'Build modular Python robot controllers with simulated GPIO, fault handling and repeatable evidence. Physical integration follows separate reviewed gates.'}</p>
        <div className="mt-6 flex flex-wrap items-center gap-5"><span>{count}/8 lessons mastered on this browser</span><Link className="font-bold text-amber-200 underline" to={courseBase}>Course overview</Link><Link className="font-bold text-amber-200 underline" to={`${courseBase}/completion`}>Completion record</Link></div>
      </div>
    </header>
    {error && <p role="alert" className="mx-auto max-w-7xl bg-rose-100 p-5 text-rose-900">{error}</p>}
    {!slug && <div className="mx-auto max-w-7xl px-6 py-10">
      <Box title="Start here"><p>Connect Python software design to Raspberry Pi interfaces through environments, GPIO mock pins, structured measurements, timing, actuator contracts and controller testing. Prerequisites: Robotics Foundations, Electronics and Sensors, and basic Python. Allow 12–15 hours including the project. Both labs can run on a desktop; physical experiments need a reviewed plan and appropriate supervision.</p><p className="mt-4">Each lesson has instruction, vocabulary, formulas, three worked examples, practice, a guided activity and a five-question quiz. Earn at least 80% and confirm the activity to record mastery. The final project uses a 100-point rubric.</p></Box>
      <p className="my-6 rounded-xl bg-amber-100 p-5">Progress is stored only in this browser/device. It is self-recorded learning evidence; instructor approval and physical hardware validation are separate.</p>
      <div className="grid gap-5 md:grid-cols-2">{lessons.map((l,i)=><article key={l.slug} className="rounded-2xl border border-slate-200 bg-white p-7"><p className="text-sm font-bold uppercase text-amber-800">Lesson {i+1} · {l.duration}</p><h2 className="mt-2 text-2xl font-black text-slate-950">{l.title}</h2><p className="my-4">{l.objectives[0]}</p><p className="mb-4 font-semibold">{complete(progress,l)?'Mastered':progress.lessons[l.slug]?`Quiz: ${progress.lessons[l.slug].score}% · Activity ${progress.lessons[l.slug].lab?'confirmed':'pending'}`:'Ready to start'}</p><Link className={btn} to={`${courseBase}/lesson/${l.slug}`}>{complete(progress,l)?'Review lesson':'Open lesson'} →</Link></article>)}</div>
      <Box title="After this course"><p>Next: Intelligent Robotics remains in development. This course’s portfolio is a modular Pi robot-control dossier with simulated GPIO tests, replay and explicit physical integration gates.</p></Box>
      <Sources />
    </div>}
    {lesson && <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 lg:grid-cols-[280px_minmax(0,1fr)]">
      <aside className="space-y-6"><Box title="Vocabulary">{lesson.vocabulary.map(([term,meaning])=><p key={term} className="mb-5"><strong className="block text-slate-950">{term}</strong>{meaning}</p>)}</Box><Box title="Key formulas">{lesson.formulas.map(f=><p key={f} className="mb-4 break-words rounded-xl bg-amber-50 p-3 font-mono text-base text-slate-950">{f}</p>)}</Box><nav aria-label="Robotics lesson list" className="rounded-2xl border bg-white p-5">{lessons.map((l,i)=><Link key={l.slug} aria-current={l.slug===slug?'page':undefined} className={`mb-3 block text-base ${l.slug===slug?'font-black text-amber-800':'text-slate-700 underline'}`} to={`${courseBase}/lesson/${l.slug}`}>{i+1}. {l.title}</Link>)}</nav></aside>
      <article className="min-w-0"><Box title="Learning objectives"><ul className="list-disc space-y-2 pl-6">{lesson.objectives.map(x=><li key={x}>{x}</li>)}</ul></Box>
        {lesson.sections.map(([title,body])=><Box key={title} title={title}><p>{body}</p></Box>)}
        <Diagram data={lesson.diagram} />
        {lesson.graph && <DistanceGraph />}
        <Box title="Worked examples">{lesson.examples.map(([title,body],i)=><div key={title} className="mb-6 rounded-xl bg-slate-50 p-5"><h3 className="mb-2 text-xl font-bold text-slate-950">{i+1}. {title}</h3><p>{body}</p></div>)}</Box>
        {lesson.code === "controller" && <ControllerInvestigation />}
        {lesson.code && <Box title={lesson.code==='gpio'?'GPIO Zero mock lab — no physical pins':'Portable controller lab — simulation only'}><p className="mb-5">{lesson.code==='gpio'?'Run gpio_mock_lab.py with Python 3 and gpiozero installed in your test environment. Tested with gpiozero 2.0.1. Every device uses an explicit MockFactory: expected 10 assertions pass.':'Run controller_lab.py with Python 3 in a writable folder. Standard library only. Expected: 20 policy cases, 4 clock guards, sequence, replay and 2 fault-cleanup tests pass; robot_trace.json contains 8 simulated commands.'}</p><pre className="overflow-x-auto rounded-xl bg-slate-950 p-5 text-sm leading-6 text-slate-100"><code>{lesson.code==='gpio'?gpioLab:controllerLab}</code></pre></Box>}
        <Box title="Guided activity"><ol className="list-decimal space-y-3 pl-6">{lesson.lab.map(x=><li key={x}>{x}</li>)}</ol><p className="mt-6 rounded-xl bg-emerald-50 p-5"><strong>Pass criterion: </strong>{lesson.pass}</p></Box>
        <Box title="Independent practice"><ol className="list-decimal space-y-3 pl-6">{lesson.practice.map(x=><li key={x}>{x}</li>)}</ol></Box>
        <Box title="Common mistake"><p>{lesson.mistake}</p></Box>
        <Quiz lesson={lesson} record={progress.lessons[lesson.slug]} onSave={record=>save({...progress,lessons:{...progress.lessons,[lesson.slug]:record}})} />
        <Sources />
        <nav aria-label="Previous and next lesson" className="mt-8 flex flex-wrap justify-between gap-4">
          {lessons.indexOf(lesson)>0?<Link className={btn} to={`${courseBase}/lesson/${lessons[lessons.indexOf(lesson)-1].slug}`}>← Previous lesson</Link>:<Link className={btn} to={courseBase}>← Course overview</Link>}
          <Link className={btn} to={lessons.indexOf(lesson)<7?`${courseBase}/lesson/${lessons[lessons.indexOf(lesson)+1].slug}`:`${courseBase}/completion`}>{lessons.indexOf(lesson)<7?'Next lesson →':'Completion record →'}</Link>
        </nav>
      </article>
    </div>}
    {slug==='completion' && <Completion progress={progress} save={save} />}
  </main>;
}
function Box({title,children}) { return <section className="mb-6 rounded-2xl border border-slate-200 bg-white p-6 md:p-7"><h2 className="mb-4 text-2xl font-black text-slate-950">{title}</h2>{children}</section>; }
function Sources() {return <Box title="Technical references"><p className="mb-3">Consult the documentation for your exact hardware before connecting anything. Calculations in this course use explicitly stated simplified assumptions.</p><ul className="list-disc pl-6">{roboticsSources.map(([name,url])=><li key={url}><a className="text-amber-800 underline" href={url} target="_blank" rel="noreferrer">{name}</a></li>)}</ul></Box>;}
function Diagram({data}) {return <Box title={data.title}><figure><svg role="img" aria-label={`${data.title}. ${data.nodes.join(' to ')}. ${data.feedback}`} viewBox="0 0 480 390" className="mx-auto w-full max-w-lg"><title>{data.title}</title>{data.nodes.map((n,i)=><g key={n}><rect x="55" y={15+i*85} width="370" height="60" rx="12" fill={i%2?'#fff7ed':'#0f172a'} stroke="#b45309"/><text x="240" y={52+i*85} textAnchor="middle" fill={i%2?'#0f172a':'#fff'} fontSize="19">{n}</text>{i<3&&<><path d={`M240 ${75+i*85} v23`} stroke="#b45309" strokeWidth="3"/><path d={`M234 ${91+i*85} l6 7 l6 -7`} fill="none" stroke="#b45309" strokeWidth="3"/></>}</g>)}</svg><figcaption className="mt-3 rounded-xl bg-amber-50 p-4">{data.feedback}</figcaption><p className="mt-3 text-base">Reading order: {data.nodes.join(' → ')}. Conceptual diagram; not a wiring schematic.</p></figure></Box>;}
const commands=['STOP','FORWARD','FORWARD','STOP','STOP','FORWARD','STOP','STOP'];
function DistanceGraph(){return <Box title="Requested controller state — synthetic trace"><figure><svg role="img" aria-label="Eight requested commands:STOP,FORWARD,FORWARD,STOP,STOP,FORWARD,STOP,STOP. Physical outcomes are not measured." viewBox="0 0 660 270" className="w-full"><title>Simulated command state trace</title><path d="M105 30 V205 H635" stroke="#475569" fill="none" strokeWidth="2"/><text x="12" y="85" fontSize="16">FORWARD</text><text x="45" y="185" fontSize="16">STOP</text><path d="M105 80 H635 M105 180 H635" stroke="#e2e8f0"/>{commands.slice(0,-1).map((state,i)=><path key={i} d={`M${125+i*68} ${state==='STOP'?180:80} H${125+(i+1)*68} V${commands[i+1]==='STOP'?180:80}`} fill="none" stroke="#0369a1" strokeWidth="3"/>)}{commands.map((state,i)=><g key={i}><circle cx={125+i*68} cy={state==='STOP'?180:80} r="5" fill="#0369a1"/><text x={125+i*68} y="230" textAnchor="middle" fontSize="15">{i}</text></g>)}<text x="240" y="258" fontSize="16">Command sequence (not elapsed time)</text></svg><figcaption>Command0 is startup;1–6 are sample decisions;7 is final cleanup. This plot shows requested states, not measured wheel motion.</figcaption></figure><table className="mt-5 w-full text-base"><caption className="font-bold">Accessible command data</caption><thead><tr><th scope="col">Sequence</th><th scope="col">Requested state</th><th scope="col">Physical outcome</th></tr></thead><tbody>{commands.map((state,i)=><tr className="border-t" key={i}><th scope="row">{i}</th><td className="text-center">{state}</td><td className="text-center">Not measured</td></tr>)}</tbody></table></Box>;}
function ControllerInvestigation(){
 const [distance,setDistance]=useState('30'),[age,setAge]=useState('0'),[previous,setPrevious]=useState('STOP'),[missing,setMissing]=useState(false),[emergency,setEmergency]=useState(false);
 const state=piDecision(missing||distance===''?null:Number(distance),age===''?NaN:Number(age),previous,emergency);
 return <Box title="Interactive policy and freshness investigation"><p className="mb-5">A one-step decision, with previous state selected explicitly. Stop at25cm or closer; resume at35cm or farther. Stale, missing, future-dated or out-of-range inputs requestSTOP. These teaching limits do not certify hardware clearance.</p><label className="mb-4 block">Distance (cm)<input type="number" className="ml-4 w-28 rounded border p-2" value={distance} onChange={e=>setDistance(e.target.value)}/></label><label className="mb-4 block">Reading age (seconds)<input type="number" step="0.1" className="ml-4 w-28 rounded border p-2" value={age} onChange={e=>setAge(e.target.value)}/></label><label className="mb-5 block">Previous state<select className="ml-4 rounded border p-2" value={previous} onChange={e=>setPrevious(e.target.value)}><option>STOP</option><option>FORWARD</option></select></label><label className="mb-3 flex gap-3"><input type="checkbox" checked={missing} onChange={e=>setMissing(e.target.checked)}/>Missing reading</label><label className="mb-5 flex gap-3"><input type="checkbox" checked={emergency} onChange={e=>setEmergency(e.target.checked)}/>Emergency stop</label><p role="status" className={`rounded-xl p-5 font-bold ${state==='STOP'?'bg-rose-100 text-rose-900':'bg-emerald-100 text-emerald-900'}`}>Requested state: {state} — simulated, physical outcome not measured.</p></Box>;
}
function Quiz({lesson,record,onSave}) {
 const [answers,setAnswers]=useState({}),[submitted,setSubmitted]=useState(false),[lab,setLab]=useState(record?.lab||false);
 const score=lesson.quiz.reduce((s,q,i)=>s+(answers[i]===q[2]?20:0),0);
 const answered=Object.keys(answers).length===lesson.quiz.length;
 function submit(e){e.preventDefault();if(!answered)return;setSubmitted(true);onSave({score,lab});}
 function toggleLab(value){setLab(value);if(record)onSave({...record,lab:value});}
 return <Box title="Mastery quiz — 100 points"><p className="mb-5">Five questions, 20 points each. Review the explanations after submitting, then retry. An 80% score plus the guided-activity confirmation records mastery.</p><form onSubmit={submit}>{lesson.quiz.map(([question,options,correct,explanation],i)=><fieldset key={question} className="mb-6 rounded-xl border p-5"><legend className="px-2 font-bold text-slate-950">{i+1}. {question}</legend>{options.map((o,j)=><label key={o} className="my-2 flex items-start gap-3"><input className="mt-2" type="radio" name={`q-${i}`} checked={answers[i]===j} onChange={()=>{setAnswers({...answers,[i]:j});setSubmitted(false);}} required/>{o}</label>)}{submitted&&<p className={`mt-4 rounded-lg p-3 ${answers[i]===correct?'bg-emerald-50':'bg-amber-50'}`}>{answers[i]===correct?'Correct.':'Review: '+options[correct]+'.'} {explanation}</p>}</fieldset>)}<label className="mb-6 flex items-start gap-3"><input className="mt-2" type="checkbox" checked={lab} onChange={e=>toggleLab(e.target.checked)}/>I completed the guided activity and checked its pass criterion. This is my own confirmation.</label><button className={btn} type="submit" disabled={!answered}>Submit quiz</button>{submitted&&<p role="status" className="mt-5 font-bold">Score: {score}/100. {score>=80?(lab?'Mastery recorded.':'Confirm the guided activity to finish this lesson.'):'Review the lesson and retry to reach 80%.'}</p>}{!submitted&&record&&<p className="mt-5">Last recorded score: {record.score}/100. Activity: {record.lab?'confirmed':'pending'}.</p>}</form></Box>;
}
function Completion({progress,save}) {
 const mastered=lessons.filter(l=>complete(progress,l)).length;
 const eligible=mastered===8&&progress.project;
 const [name,setName]=useState('');
 return <div className="mx-auto max-w-5xl px-6 py-10"><Box title="Your learning record"><label className="mb-5 block">Learner name (for this printout)<input className="mt-2 block w-full rounded border p-3" value={name} maxLength="100" onChange={e=>setName(e.target.value)}/></label><p className="font-bold">{mastered}/8 lessons mastered · Portfolio {progress.project?'self-confirmed':'pending'}</p><p className="mt-3">This record is stored on this browser only. Quiz results and project confirmation are not instructor-verified credentials.</p><ul className="mt-5 space-y-3">{lessons.map(l=><li key={l.slug}><Link className="text-amber-800 underline" to={`${courseBase}/lesson/${l.slug}`}>{l.title}</Link> — {complete(progress,l)?'Mastered':`Pending${progress.lessons[l.slug]?` (${progress.lessons[l.slug].score}%)`:''}`}</li>)}</ul></Box><Box title="Portfolio evidence checklist"><p className="mb-4">Use Lesson 8’s rubric: requirements 20, architecture/interface review 20, calculations 20, reproducible tests/fault evidence 30, reflection/next milestone 10. Keep your seven deliverables and a score of at least 80/100. Fix all critical electrical or control defects before requesting instructor approval.</p><label className="flex items-start gap-3"><input className="mt-2" type="checkbox" checked={progress.project} onChange={e=>save({...progress,project:e.target.checked})}/>I completed the seven Pi control deliverables, passed the GPIO mock and controller tests, reached 80/100 on the rubric, labeled simulated/measured evidence, and documented unresolved hardware assumptions.</label></Box><Box title={eligible?'Pi control learning requirements recorded':'Completion requirements pending'}><p>{eligible?`${name || 'Learner'} has recorded all eight lesson mastery checks and the portfolio self-confirmation.`:'Complete each lesson quiz at 80% or above, confirm each guided activity, and finish the portfolio checklist.'}</p><p className="mt-4">Physical wiring and motion approval remain separate milestones. Keep motor power disconnected while running the portable labs. Continue with Intelligent Robotics when that track becomes available.</p><button className={`${btn} mt-5 print:hidden`} onClick={()=>window.print()}>Print learning record</button></Box></div>;
}
