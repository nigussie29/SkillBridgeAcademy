import VideoPlayer from "../VideoPlayer";

export default function LearnSection({ learn, lessonTitle }) {
  if (!learn) {
    return null;
  }

  const mainContent =
    learn.content ??
    learn.introduction ??
    "";

  const teachingNotes =
    learn.teachingNotes ??
    [];

  const examples =
    learn.examples ??
    [];

  return (
    <section className="rounded-3xl bg-white p-8 shadow-sm">
      <h2 className="text-2xl font-extrabold text-slate-900">
        {learn.title || "Learn"}
      </h2>

      {mainContent && (
        <p className="mt-5 whitespace-pre-line leading-8 text-slate-700">
          {mainContent}
        </p>
      )}

      {learn.formula && (
        <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-5">
          <p className="text-sm font-bold uppercase tracking-wider text-blue-700">
            Formula
          </p>

          <p className="mt-2 text-xl font-semibold text-slate-900">
            {learn.formula}
          </p>
        </div>
      )}

      {learn.video?.url && (
        <div className="mt-6">
          <VideoPlayer
            src={learn.video.url}
            title={learn.video.title || lessonTitle || "Lesson"}
          />
        </div>
      )}

      {learn.notes && (
        <div className="mt-6 rounded-2xl bg-slate-50 p-6">
          <h3 className="text-lg font-bold text-slate-900">
            Lesson Notes
          </h3>

          <p className="mt-3 whitespace-pre-line leading-8 text-slate-700">
            {learn.notes}
          </p>
        </div>
      )}

      {teachingNotes.length > 0 && (
        <div className="mt-6 rounded-2xl bg-slate-50 p-6">
          <h3 className="text-lg font-bold text-slate-900">
            Key Ideas
          </h3>

          <ul className="mt-4 space-y-3 text-slate-700">
            {teachingNotes.map((note, index) => (
              <li
                key={`${note}-${index}`}
                className="flex items-start gap-3"
              >
                <span className="mt-2 h-2 w-2 flex-none rounded-full bg-blue-600" />

                <span className="leading-7">
                  {note}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {learn.sections?.length > 0 && (
        <div className="mt-6 space-y-5">
          {learn.sections.map((section, index) => (
            <article
              key={section.id || section.title || index}
              className="rounded-2xl border border-slate-200 p-6"
            >
              {section.title && (
                <h3 className="text-xl font-bold text-slate-900">
                  {section.title}
                </h3>
              )}

              {section.content && (
                <p className="mt-3 whitespace-pre-line leading-8 text-slate-700">
                  {section.content}
                </p>
              )}
            </article>
          ))}
        </div>
      )}

      {examples.length > 0 && (
        <div className="mt-8">
          <h3 className="text-xl font-bold text-slate-900">
            Worked Examples
          </h3>

          <div className="mt-5 space-y-5">
            {examples.map((example, index) => (
              <article
                key={example.id || example.title || index}
                className="rounded-2xl border border-slate-200 p-6"
              >
                <p className="text-sm font-bold uppercase tracking-wider text-blue-700">
                  Example {index + 1}
                </p>

                {example.title && (
                  <h4 className="mt-2 text-lg font-bold text-slate-900">
                    {example.title}
                  </h4>
                )}

                {example.problem && (
                  <div className="mt-4 rounded-xl bg-slate-50 p-4">
                    <p className="font-semibold text-slate-900">
                      Problem
                    </p>

                    <p className="mt-2 leading-7 text-slate-700">
                      {example.problem}
                    </p>
                  </div>
                )}

                {example.solutionSteps?.length > 0 && (
                  <div className="mt-5">
                    <p className="font-semibold text-slate-900">
                      Solution
                    </p>

                    <ol className="mt-3 space-y-3">
                      {example.solutionSteps.map((step, stepIndex) => (
                        <li
                          key={`${step}-${stepIndex}`}
                          className="flex items-start gap-3 text-slate-700"
                        >
                          <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700">
                            {stepIndex + 1}
                          </span>

                          <span className="leading-7">
                            {step}
                          </span>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}

                {example.answer && (
                  <div className="mt-5 rounded-xl border border-emerald-200 bg-emerald-50 p-4">
                    <p className="font-semibold text-emerald-800">
                      Answer
                    </p>

                    <p className="mt-1 text-slate-800">
                      {example.answer}
                    </p>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}