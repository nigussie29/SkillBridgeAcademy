export default function About() {
  return (
    <section className="section py-16">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
            About Us
          </p>

          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
            Building confident creators for the AI age.
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            KingsNigus Academy helps beginners build real technology skills through
            practical, step-by-step, mastery-based learning. We focus on math,
            programming, data analytics, Power BI, SQL, Microsoft Fabric, and
            artificial intelligence.
          </p>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            Our goal is not only to help learners watch lessons. Our goal is to help
            learners build real projects, solve real problems, and develop skills they
            can use in school, work, business, and future careers.
          </p>
        </div>

        <div className="card p-8">
          <h2 className="text-2xl font-bold text-slate-900">
            Our Mission
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            Our mission is to help students, adults changing careers, and lifelong
            learners become confident creators in technology. We believe every learner
            deserves clear guidance, practical projects, and support that helps them
            move forward with confidence.
          </p>

          <div className="mt-6 rounded-2xl bg-blue-50 p-5">
            <h3 className="font-bold text-blue-900">
              21st-century skills for real-world careers.
            </h3>
            <p className="mt-2 text-blue-800">
              We teach skills that connect learning to real opportunities: math,
              coding, data, analytics, AI, and problem-solving.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        <div className="card p-6">
          <h3 className="text-xl font-bold">Practical Learning</h3>
          <p className="mt-3 text-slate-600">
            Learners build real projects instead of only watching videos. Every course
            is designed to connect knowledge with action.
          </p>
        </div>

        <div className="card p-6">
          <h3 className="text-xl font-bold">Mastery-Based Growth</h3>
          <p className="mt-3 text-slate-600">
            Students move step by step, practice important skills, and build confidence
            before moving to more advanced topics.
          </p>
        </div>

        <div className="card p-6">
          <h3 className="text-xl font-bold">Career-Ready Skills</h3>
          <p className="mt-3 text-slate-600">
            Our courses focus on useful skills for modern careers, including data,
            automation, business intelligence, and AI.
          </p>
        </div>
      </div>

      <div className="mt-16 rounded-3xl bg-slate-900 p-8 text-white">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-300">
              Luminery AI
            </p>

            <h2 className="mt-3 text-3xl font-extrabold">
              Our intelligent learning mentor.
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              Luminery AI is the intelligent mentor inside KingsNigus Academy.
              It is designed to help learners practice, receive feedback, check their
              understanding, and move forward step by step.
            </p>

            <p className="mt-4 leading-8 text-slate-300">
              As KingsNigus Academy grows, Luminery AI will support guided
              practice, project challenges, progress tracking, AI tutoring, and mentor
              support from expert guides.
            </p>
          </div>

          <div className="rounded-2xl bg-white/10 p-6">
            <h3 className="text-xl font-bold">Our Long-Term Vision</h3>

            <p className="mt-4 leading-7 text-slate-300">
              We are building toward an AI-powered school where learners receive
              personalized support, mastery checks, and guidance from instructors,
              coaches, and learning guides.
            </p>

            <p className="mt-4 leading-7 text-slate-300">
              The future of KingsNigus Academy is a place where students do not just
              consume content. They practice, build, master, and create.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}