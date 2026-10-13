import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { sensorsLessons as lessons, courseBase, roboticsSources, sensorLab, dividerVoltage } from '../../data/robotics/electronicsSensors';

const STORAGE = 'kingnigus-electronics-sensors-v1';
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

export default function ElectronicsSensors() {
  const {lessonSlug} = useParams();
  return <CourseView key={lessonSlug || 'overview'} slug={lessonSlug} />;
}
function CourseView({slug}) {
  const [progress,save,error] = useProgress();
  const lesson=lessons.find(x=>x.slug===slug);
  if (slug && !lesson && slug!=='completion') return <main className="mx-auto max-w-4xl p-10"><h1 className="text-3xl font-bold">Lesson not found</h1><Link to={courseBase}>Return to Electronics and Sensors</Link></main>;
  const count=lessons.filter(l=>complete(progress,l)).length;
  return <main className="min-h-screen bg-slate-50 pb-16 text-lg leading-8 text-slate-700">
    <header className="bg-gradient-to-br from-slate-950 via-orange-950 to-amber-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <Link to="/library/robotics" className="font-bold text-amber-200">← Robotics Library</Link>
        <p className="mt-6 text-sm font-black uppercase tracking-widest text-amber-300">KingNigus Academy · Electronics and Sensors</p>
        <h1 className="mt-3 text-3xl font-black leading-tight md:text-5xl">{lesson?.title || (slug==='completion'?'Learning Completion Record':'Electronics and Sensors')}</h1>
        <p className="mt-5 max-w-4xl text-xl text-amber-50">{lesson?`Lesson ${lessons.indexOf(lesson)+1} of 8 · ${lesson.duration}`:'A complete sensor-design and data-quality course. Start with simulations; hardware activities require a reviewed sensor-only plan.'}</p>
        <div className="mt-6 flex flex-wrap items-center gap-5"><span>{count}/8 lessons mastered on this browser</span><Link className="font-bold text-amber-200 underline" to={courseBase}>Course overview</Link><Link className="font-bold text-amber-200 underline" to={`${courseBase}/completion`}>Completion record</Link></div>
      </div>
    </header>
    {error && <p role="alert" className="mx-auto max-w-7xl bg-rose-100 p-5 text-rose-900">{error}</p>}
    {!slug && <div className="mx-auto max-w-7xl px-6 py-10">
      <Box title="Start here"><p>Build reliable measurements through electrical contracts, logic-level checks, calibration, sampling and fault-aware logging. Prerequisites: Robotics Foundations, basic arithmetic and reading Python functions. Allow 12–15 hours including the portfolio project. Paper and simulation activities provide a hardware-free path; optional powered work needs appropriate supervision.</p><p className="mt-4">Each lesson has instruction, vocabulary, formulas, three worked examples, practice, a guided activity and a five-question quiz. Earn at least 80% and confirm the activity to record mastery. The final project uses a 100-point rubric.</p></Box>
      <p className="my-6 rounded-xl bg-amber-100 p-5">Progress is stored only in this browser/device. It is self-recorded learning evidence; instructor approval and physical hardware validation are separate.</p>
      <div className="grid gap-5 md:grid-cols-2">{lessons.map((l,i)=><article key={l.slug} className="rounded-2xl border border-slate-200 bg-white p-7"><p className="text-sm font-bold uppercase text-amber-800">Lesson {i+1} · {l.duration}</p><h2 className="mt-2 text-2xl font-black text-slate-950">{l.title}</h2><p className="my-4">{l.objectives[0]}</p><p className="mb-4 font-semibold">{complete(progress,l)?'Mastered':progress.lessons[l.slug]?`Quiz: ${progress.lessons[l.slug].score}% · Activity ${progress.lessons[l.slug].lab?'confirmed':'pending'}`:'Ready to start'}</p><Link className={btn} to={`${courseBase}/lesson/${l.slug}`}>{complete(progress,l)?'Review lesson':'Open lesson'} →</Link></article>)}</div>
      <Box title="After this course"><Link className="font-bold text-amber-800 underline" to="/library/robotics/python-and-raspberry-pi">Open Python and Raspberry Pi →</Link><p>Next: Python and Raspberry Pi is now available. Intelligent Robotics remains in development. This course’s portfolio is a sensor measurement-station dossier with reproducible data and quality evidence.</p></Box>
      <Sources />
    </div>}
    {lesson && <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 lg:grid-cols-[280px_minmax(0,1fr)]">
      <aside className="space-y-6"><Box title="Vocabulary">{lesson.vocabulary.map(([term,meaning])=><p key={term} className="mb-5"><strong className="block text-slate-950">{term}</strong>{meaning}</p>)}</Box><Box title="Key formulas">{lesson.formulas.map(f=><p key={f} className="mb-4 break-words rounded-xl bg-amber-50 p-3 font-mono text-base text-slate-950">{f}</p>)}</Box><nav aria-label="Robotics lesson list" className="rounded-2xl border bg-white p-5">{lessons.map((l,i)=><Link key={l.slug} aria-current={l.slug===slug?'page':undefined} className={`mb-3 block text-base ${l.slug===slug?'font-black text-amber-800':'text-slate-700 underline'}`} to={`${courseBase}/lesson/${l.slug}`}>{i+1}. {l.title}</Link>)}</nav></aside>
      <article className="min-w-0"><Box title="Learning objectives"><ul className="list-disc space-y-2 pl-6">{lesson.objectives.map(x=><li key={x}>{x}</li>)}</ul></Box>
        {lesson.sections.map(([title,body])=><Box key={title} title={title}><p>{body}</p></Box>)}
        <Diagram data={lesson.diagram} />
        {lesson.graph && <DistanceGraph />}
        <Box title="Worked examples">{lesson.examples.map(([title,body],i)=><div key={title} className="mb-6 rounded-xl bg-slate-50 p-5"><h3 className="mb-2 text-xl font-bold text-slate-950">{i+1}. {title}</h3><p>{body}</p></div>)}</Box>
        {lesson.divider && <><DividerSchematic /><DividerCalculator /></>}
        {lesson.code && <><Box title="Python sensor logger — simulation only"><p className="mb-5">Copy into sensor_station.py and run with Python 3 in a writable folder. It uses only the standard library and controls no hardware. Expected: 18 contract tests pass; 10 rows, 5 accepted and 5 rejected; sensor_readings.csv and sensor_summary.json are created.</p><pre className="overflow-x-auto rounded-xl bg-slate-950 p-5 text-sm leading-6 text-slate-100"><code>{sensorLab}</code></pre></Box></>}
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
const readings=[60,59,null,null,null,null,25,26,24,null];
const qualities=['accepted','accepted','missing','range','stale','non-finite','accepted','accepted','accepted','non-numeric'];
function DistanceGraph() {return <Box title="Sensor log graph — accepted raw measurements"><figure><svg role="img" aria-label="Ten simulated samples: accepted distances60,59,25,26,24 centimetres; five rejected readings remain gaps." viewBox="0 0 620 300" className="w-full"><title>Accepted raw distances with fault gaps</title><path d="M55 25 V235 H590" fill="none" stroke="#475569" strokeWidth="2"/>{[0,20,40,60].map(v=><g key={v}><text x="45" y={240-v*3} textAnchor="end" fontSize="14">{v}</text><path d={`M55 ${235-v*3} H590`} stroke="#e2e8f0"/></g>)}{[[0,1],[6,7,8]].map(group=><polyline key={group[0]} points={group.map(i=>`${75+i*52},${235-readings[i]*3}`).join(' ')} fill="none" stroke="#0369a1" strokeWidth="3"/>)}{readings.map((v,i)=><g key={i}><text x={75+i*52} y="257" textAnchor="middle" fontSize="14">{i+1}</text>{v!==null?<circle cx={75+i*52} cy={235-v*3} r="5" fill="#0369a1"/>:<text x={75+i*52} y="220" textAnchor="middle" fill="#b91c1c" fontSize="14">×</text>}</g>)}<text x="55" y="18" fontSize="14">Distance (cm)</text><text x="265" y="283" fontSize="14">Synthetic sample number</text></svg><figcaption>Blue points are accepted raw values. Red × marks rejected samples, not zero-distance readings. Lines never bridge a fault gap.</figcaption></figure><table className="mt-4 w-full text-base"><caption className="font-bold">Accessible log graph data</caption><thead><tr><th scope="col">Sample</th><th scope="col">Accepted raw (cm)</th><th scope="col">Status</th></tr></thead><tbody>{readings.map((v,i)=><tr key={i} className="border-t"><th scope="row">{i+1}</th><td className="text-center">{v===null?'Not plotted':v}</td><td className="text-center">{qualities[i]}</td></tr>)}</tbody></table></Box>;}
function DividerSchematic() {return <Box title="Two-resistor level divider — circuit schematic"><figure><svg role="img" aria-label="5V echo passes through2200ohm top resistor to output junction.3300ohm bottom resistor connects junction to ground. Junction is the proposed protected GPIO signal after verification." viewBox="0 0 640 430" className="w-full"><title>Resistor divider schematic</title><path d="M160 40 V75 M160 145 V190 H380 M160 190 V230 M160 300 V345" stroke="#0f172a" strokeWidth="3" fill="none"/><rect x="143" y="75" width="34" height="70" fill="#fff7ed" stroke="#b45309" strokeWidth="3"/><rect x="143" y="230" width="34" height="70" fill="#fff7ed" stroke="#b45309" strokeWidth="3"/><circle cx="160" cy="190" r="6" fill="#0f172a"/><path d="M130 345 H190 M140 355 H180 M150 365 H170" stroke="#0f172a" strokeWidth="3"/><text x="100" y="25" fontSize="19">5 V echo input</text><text x="200" y="110" fontSize="19">Rtop =2.2 kΩ</text><text x="200" y="267" fontSize="19">Rbottom =3.3 kΩ</text><text x="390" y="188" fontSize="19">Vout ≈3.0 V nominal</text><text x="390" y="216" fontSize="17">Proposed GPIO input</text><text x="390" y="244" fontSize="17">after voltage verification</text><text x="75" y="400" fontSize="19">Common signal ground reference</text></svg><figcaption>The output is the junction, not the5V input. This circuit diagram does not specify header positions; confirm the exact sensor, tolerances, ground and signal levels before connection.</figcaption></figure></Box>;}
function DividerCalculator() {
 const [vin,setVin]=useState('5'),[top,setTop]=useState('2200'),[bottom,setBottom]=useState('3300'),[tolerance,setTolerance]=useState('5');
 const v=Number(vin),t=Number(top),b=Number(bottom),tol=Number(tolerance)/100;
 const valid=vin!==''&&top!==''&&bottom!==''&&[v,t,b].every(Number.isFinite)&&v>0&&v<=12&&t>=100&&t<=100000&&b>=100&&b<=100000;
 const nominal=valid?dividerVoltage(v,t,b):null;
 const worst=valid?dividerVoltage(v*1.05,t*(1-tol),b*(1+tol)):null;
 return <Box title="Interactive divider investigation"><p className="mb-5">Nominal arithmetic plus a worst-case illustration with a +5% input supply and the selected resistor tolerance. This is a design investigation, not wiring approval; loaded voltage, component limits and valid logic-high thresholds still need verification.</p>
 <label className="mb-4 block">Input voltage (0–12 V)<input type="number" min="0.1" max="12" step="0.1" className="ml-4 w-28 rounded border p-2" value={vin} onChange={e=>setVin(e.target.value)}/></label>
 <label className="mb-4 block">Top resistance (100–100000 Ω)<input type="number" min="100" max="100000" step="100" className="ml-4 w-32 rounded border p-2" value={top} onChange={e=>setTop(e.target.value)}/></label>
 <label className="mb-4 block">Bottom resistance (100–100000 Ω)<input type="number" min="100" max="100000" step="100" className="ml-4 w-32 rounded border p-2" value={bottom} onChange={e=>setBottom(e.target.value)}/></label>
 <label className="mb-5 block">Resistor tolerance<select className="ml-4 rounded border p-2" value={tolerance} onChange={e=>setTolerance(e.target.value)}><option value="1">1%</option><option value="5">5%</option></select></label>
 <p role="status" className="rounded-xl bg-amber-50 p-5 font-bold">{valid?`Nominal output: ${nominal.toFixed(3)} V. Worst-case example: ${worst.toFixed(3)} V. ${worst>3.3?'Exceeds 3.3 V: this design must not feed a Pi GPIO input.':'Below 3.3 V in this simplified model; hardware verification is still required.'}`:'Enter finite values within the displayed ranges.'}</p>
 </Box>;
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
 return <div className="mx-auto max-w-5xl px-6 py-10"><Box title="Your learning record"><label className="mb-5 block">Learner name (for this printout)<input className="mt-2 block w-full rounded border p-3" value={name} maxLength="100" onChange={e=>setName(e.target.value)}/></label><p className="font-bold">{mastered}/8 lessons mastered · Portfolio {progress.project?'self-confirmed':'pending'}</p><p className="mt-3">This record is stored on this browser only. Quiz results and project confirmation are not instructor-verified credentials.</p><ul className="mt-5 space-y-3">{lessons.map(l=><li key={l.slug}><Link className="text-amber-800 underline" to={`${courseBase}/lesson/${l.slug}`}>{l.title}</Link> — {complete(progress,l)?'Mastered':`Pending${progress.lessons[l.slug]?` (${progress.lessons[l.slug].score}%)`:''}`}</li>)}</ul></Box><Box title="Portfolio evidence checklist"><p className="mb-4">Use Lesson 8’s rubric: requirements 20, electrical/interface architecture 20, calculations/calibration 20, logging and fault tests 30, limitations 10. Keep your seven deliverables and a score of at least 80/100. Fix all critical electrical or control defects before requesting instructor approval.</p><label className="flex items-start gap-3"><input className="mt-2" type="checkbox" checked={progress.project} onChange={e=>save({...progress,project:e.target.checked})}/>I completed the seven sensor-station deliverables, passed the logger tests, reached 80/100 on the rubric, labeled simulated/measured evidence, and documented unresolved hardware assumptions.</label></Box><Box title={eligible?'Sensor learning requirements recorded':'Completion requirements pending'}><p>{eligible?`${name || 'Learner'} has recorded all eight lesson mastery checks and the portfolio self-confirmation.`:'Complete each lesson quiz at 80% or above, confirm each guided activity, and finish the portfolio checklist.'}</p><p className="mt-4">Physical wiring, sensor calibration and instructor approval remain separate milestones. Motors stay disconnected for sensor-only experiments. Continue with the available Python and Raspberry Pi course.</p><button className={`${btn} mt-5 print:hidden`} onClick={()=>window.print()}>Print learning record</button></Box></div>;
}
