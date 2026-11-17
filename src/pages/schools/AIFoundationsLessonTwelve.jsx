import { useState } from "react";
import { Link } from "react-router-dom";
import CodingAndLumineryLab from "../../components/learning/CodingAndLumineryLab.jsx";

// Unpublished lesson draft: no route or course metadata until regression and
// Supabase progress-ID migration checks are complete.
const folds = [0, 1, 2, 3, 4];
const scores = [0.90, 0.85, 0.95, 0.90, 0.80];
const questions = [
  { prompt: "What is the mean of 0.90, 0.85, 0.95, 0.90, and 0.80?", options: ["0.88", "0.90", "0.80"], correct: 0, why: "Their sum is 4.40; dividing by five gives 0.88." },
  { prompt: "What is data leakage?", options: ["Using a held-out test set only once", "Letting evaluation data influence training or model selection", "Shuffling training rows"], correct: 1, why: "Information from evaluation examples must not influence the fitting or tuning steps." },
  { prompt: "Where should a scaler be fitted during cross-validation?", options: ["On all 150 Iris records first", "On the final test set", "Inside each training fold, using a Pipeline"], correct: 2, why: "The pipeline fits its scaler only on the training portion of each fold." },
  { prompt: "When should the final held-out test set be evaluated?", options: ["After choosing k using training-only cross-validation", "After every trial of k", "Before splitting the data"], correct: 0, why: "Protect the test set until model selection is complete." },
];
const python = `from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split, StratifiedKFold, cross_val_score
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.neighbors import KNeighborsClassifier

iris = load_iris()
X, y = iris.data[:, [0, 2]], iris.target
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)
cv = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)
means = {}
for k in (1, 3, 5, 9, 15):
    pipeline = make_pipeline(StandardScaler(), KNeighborsClassifier(n_neighbors=k))
    means[k] = cross_val_score(pipeline, X_train, y_train, cv=cv).mean()
best_k = max(means, key=means.get)
model = make_pipeline(StandardScaler(), KNeighborsClassifier(n_neighbors=best_k))
model.fit(X_train, y_train)
print("Selected k:", best_k)
print("Held-out test accuracy:", round(model.score(X_test, y_test), 3))`;

export default function AIFoundationsLessonTwelve() {
  const [fold, setFold] = useState(0);
  const [answers, setAnswers] = useState({});
  const [checked, setChecked] = useState(false);
  const complete = questions.every((_, i) => answers[i] !== undefined);
  const score = questions.reduce((n, q, i) => n + (answers[i] === q.correct ? 1 : 0), 0);
  return (
    <main className="academy-modern min-h-screen bg-slate-50 pb-20 text-slate-800">
      <div className="mx-auto max-w-5xl space-y-8 px-5 py-10">
        <nav aria-label="Course navigation" className="text-sm font-semibold text-indigo-700">
          <Link to="/schools/artificial-intelligence/ai-foundations">AI Foundations</Link> / Module 1 / Lesson 12
        </nav>
        <header className="rounded-3xl bg-indigo-950 p-8 text-white">
          <p className="text-sm font-bold uppercase tracking-widest text-cyan-200">KingNigUs Academy · Mathematics × AI × Robotics</p>
          <h1 className="mt-3 text-3xl font-black md:text-5xl">Cross-Validation and Data Leakage</h1>
          <p className="mt-4 leading-8 text-indigo-100">Choose a model without allowing the final exam to become part of the practice.</p>
        </header>
        <section className="academy-lesson-section space-y-4 p-7">
          <h2 className="text-2xl font-black">Why separate training, validation, and testing?</h2>
          <p className="leading-8">Training examples teach the model. Validation examples help compare choices such as the number of neighbors, k. The held-out test set provides a final estimate after those choices are fixed. If we repeatedly choose k based on test accuracy, the test set no longer measures genuinely unseen performance.</p>
          <p className="leading-8">In five-fold cross-validation, each training-derived fold takes one turn as validation data. The other four folds train the model. The separate final test partition never enters these folds.</p>
        </section>
        <section className="academy-lesson-section space-y-5 p-7" aria-labelledby="fold-title">
          <h2 id="fold-title" className="text-2xl font-black">Interactive five-fold mathematics lab</h2>
          <p>Choose a validation fold. All other folds represent training data. The final test set stays untouched.</p>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Choose validation fold">
            {folds.map(i => <button key={i} type="button" aria-pressed={fold === i} onClick={() => setFold(i)}
              className={`rounded-xl border px-4 py-2 font-bold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${fold === i ? "bg-indigo-800 text-white" : "bg-white text-indigo-900"}`}>Fold {i + 1}</button>)}
          </div>
          <div className="grid grid-cols-5 gap-2" aria-label="Training and validation folds">
            {folds.map(i => <div key={i} className={`rounded-xl p-3 text-center text-sm font-bold ${fold === i ? "bg-amber-200 text-amber-950" : "bg-emerald-100 text-emerald-950"}`}>
              <span className="block">Fold {i + 1}</span><span>{fold === i ? "Validation" : "Training"}</span>
            </div>)}
          </div>
          <div className="rounded-xl border-2 border-dashed border-slate-400 p-4 text-center font-semibold">Separate final test partition — never used to select k</div>
          <p role="status" aria-live="polite">Fold {fold + 1} is held out for validation; illustrative fold accuracy: {(scores[fold] * 100).toFixed(0)}%.</p>
          <p className="text-sm text-slate-600">These five scores are an arithmetic teaching example, not measured Iris model results.</p>
          <p className="rounded-xl bg-slate-950 p-4 font-mono text-cyan-100">Mean = (0.90 + 0.85 + 0.95 + 0.90 + 0.80) / 5 = 0.88</p>
          <p>Changing which fold is highlighted does not change the mean. In real cross-validation, each fold's accuracy comes from fitting a new model using only its four training folds.</p>
        </section>
        <section className="academy-lesson-section space-y-4 p-7">
          <h2 className="text-2xl font-black">Robotics connection</h2>
          <p className="leading-8">A robot's obstacle sensor may be calibrated in one room but tested in another. Tuning its threshold against every future test reading makes the result less trustworthy. Use training-derived validation readings to choose settings, then evaluate against a separate set of readings. This is a conceptual transfer example, not a hardware test.</p>
        </section>
        <CodingAndLumineryLab
          title="Choose k without test-set leakage"
          introduction="Study a reproducible Python 3 workflow using the real Iris dataset. Run it in your own environment with scikit-learn installed; this page does not execute Python."
          code={python}
          expectedOutput="Two printed lines: Selected k: [one candidate] and Held-out test accuracy: [a value between 0 and 1]. Exact values require running the script."
          challenges={["Explain why fitting StandardScaler on all 150 records before cross-validation would leak information.", "Change the candidate k values, rerun training-only validation, and explain why the final test set must still be protected."]}
          hints={["Which examples are allowed to influence model selection?", "Follow the scaler's fit operation through each training fold.", "Describe how using the final test set repeatedly would bias the final claim."]}
          reflection="What independent sensor readings would you reserve to evaluate a robot before deploying it in a new room?"
        />
        <section className="academy-lesson-section space-y-5 p-7">
          <h2 className="text-2xl font-black">Knowledge check</h2>
          <p>Answer all four questions and check your reasoning. This unpublished draft does not save account progress.</p>
          {questions.map((q, i) => <fieldset key={i} className="space-y-3 border-b border-slate-200 pb-5">
            <legend className="font-bold">{i + 1}. {q.prompt}</legend>
            {q.options.map((option, j) => <label key={j} className="flex cursor-pointer gap-3 rounded-xl border p-3">
              <input type="radio" name={`cv-question-${i}`} checked={answers[i] === j}
                onChange={() => { setAnswers(old => ({ ...old, [i]: j })); setChecked(false); }} />
              <span>{option}</span>
            </label>)}
            {checked && <p role="status" className="text-sm font-semibold">{answers[i] === q.correct ? "Correct. " : "Review. "}{q.why}</p>}
          </fieldset>)}
          <div className="flex flex-wrap gap-3">
            <button type="button" disabled={!complete} onClick={() => setChecked(true)}
              className="rounded-xl bg-indigo-700 px-5 py-3 font-bold text-white disabled:opacity-40">Check answers</button>
            <button type="button" onClick={() => { setAnswers({}); setChecked(false); }}
              className="rounded-xl border border-indigo-300 px-5 py-3 font-bold text-indigo-800">Try again</button>
          </div>
          {checked && <p role="status" className="font-bold">Score: {score}/4 — {score >= 3 ? "Knowledge-check target met" : "Review and retry"}. Not saved.</p>}
        </section>
        <Link to="/schools/artificial-intelligence/ai-foundations/module-1/lesson-11" className="inline-block font-bold text-indigo-700 underline">Return to Lesson 11</Link>
      </div>
    </main>
  );
}
