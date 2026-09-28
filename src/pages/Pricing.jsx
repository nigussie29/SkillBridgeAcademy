import {
  ArrowRight,
  BadgeCheck,
  BookOpenCheck,
  Check,
  GraduationCap,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

import {
  courseBundles,
  formatPrice,
  individualCoursePrices,
  membershipPrices,
} from "../data/coursePricing.js";

export default function Pricing() {
  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      <section className="overflow-hidden bg-gradient-to-br from-blue-950 via-indigo-900 to-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-blue-100">
            <Sparkles size={17} className="text-amber-300" />
            Founding learner pricing
          </div>

          <h1 className="mt-6 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
            Clear prices for every learning path.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            Start free, purchase one course for lifetime access, or choose an
            all-access plan. Paid courses include mastery assessments,
            portfolio projects, and an eligible certificate after completion.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#courses"
              className="inline-flex items-center gap-2 rounded-xl bg-amber-400 px-5 py-3 font-black text-slate-950 transition hover:bg-amber-300"
            >
              Compare course prices
              <ArrowRight size={18} />
            </a>
            <a
              href="#memberships"
              className="rounded-xl border border-white/25 bg-white/10 px-5 py-3 font-bold transition hover:bg-white/20"
            >
              View memberships
            </a>
          </div>
        </div>
      </section>

      <section id="memberships" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-14">
        <p className="text-sm font-bold uppercase tracking-widest text-blue-700">
          Membership options
        </p>
        <h2 className="mt-2 text-3xl font-black text-slate-950">
          Choose how you want to learn
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {membershipPrices.map((plan) => (
            <article
              key={plan.id}
              className={`relative flex flex-col rounded-3xl border bg-white p-6 shadow-sm ${
                plan.featured
                  ? "border-blue-500 ring-4 ring-blue-100"
                  : "border-slate-200"
              }`}
            >
              {plan.featured && (
                <span className="absolute right-5 top-5 rounded-full bg-blue-100 px-3 py-1 text-xs font-black uppercase tracking-wide text-blue-700">
                  Most flexible
                </span>
              )}

              <h3 className="pr-24 text-xl font-black text-slate-950">
                {plan.name}
              </h3>
              <div className="mt-5 flex items-end gap-2">
                <span className="text-4xl font-black text-slate-950">
                  {formatPrice(plan.price)}
                </span>
                <span className="pb-1 text-sm font-bold text-slate-500">
                  / {plan.cadence}
                </span>
              </div>
              <p className="mt-4 min-h-20 leading-7 text-slate-600">
                {plan.description}
              </p>
              <ul className="mt-5 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-2 text-sm font-semibold text-slate-700">
                    <Check size={18} className="mt-0.5 shrink-0 text-emerald-600" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                to="/courses"
                className={`mt-auto block rounded-xl px-4 py-3 pt-3 text-center font-black transition ${
                  plan.featured
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-slate-100 text-slate-800 hover:bg-slate-200"
                }`}
              >
                Explore courses
              </Link>
            </article>
          ))}
        </div>

        <p className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm font-semibold leading-6 text-amber-900">
          Pricing is published for planning and founding enrollment. Secure
          online payment is not active yet, so no charge will occur on this page.
        </p>
      </section>

      <section id="courses" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
              Individual courses
            </p>
            <h2 className="mt-2 text-3xl font-black text-slate-950">
              One price for complete course access
            </h2>
          </div>
          <div className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-black text-emerald-800">
            Certificate included when earned
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {individualCoursePrices.map((course) => (
            <article
              key={course.id}
              className={`flex flex-col rounded-3xl border bg-white p-6 shadow-sm ${
                course.featured
                  ? "border-amber-400 ring-4 ring-amber-100"
                  : "border-slate-200"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-black uppercase tracking-wide text-blue-700">
                  {course.school}
                </span>
                {course.developing ? (
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
                    In development
                  </span>
                ) : (
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700">
                    Available
                  </span>
                )}
              </div>

              <h3 className="mt-5 text-xl font-black text-slate-950">
                {course.title}
              </h3>
              <p className="mt-3 flex-1 leading-7 text-slate-600">
                {course.description}
              </p>

              <div className="mt-6 flex items-end justify-between gap-4 border-t border-slate-200 pt-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-emerald-700">
                    Founding price
                  </p>
                  <p className="mt-1 text-3xl font-black text-slate-950">
                    {formatPrice(course.launchPrice)}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                    Regular
                  </p>
                  <p className="mt-1 text-lg font-bold text-slate-400 line-through">
                    {formatPrice(course.regularPrice)}
                  </p>
                </div>
              </div>

              {course.note && (
                <p className="mt-3 text-xs font-semibold text-amber-700">
                  {course.note}
                </p>
              )}

              <Link
                to={course.path}
                className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-4 py-3 font-black text-white transition hover:bg-blue-700"
              >
                {course.developing ? "View learning area" : "Explore course"}
                <ArrowRight size={17} />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="rounded-3xl bg-slate-950 p-8 text-white md:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <div className="inline-flex rounded-2xl bg-amber-400 p-3 text-slate-950">
                <BookOpenCheck size={27} />
              </div>
              <h2 className="mt-5 text-3xl font-black">Career and subject bundles</h2>
              <p className="mt-4 leading-7 text-slate-300">
                Bundles provide lifetime access to the included individual courses
                at a lower combined founding price.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {courseBundles.map((bundle) => (
                <article key={bundle.name} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <h3 className="font-black text-amber-300">{bundle.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{bundle.courses}</p>
                  <p className="mt-4 text-2xl font-black">{formatPrice(bundle.price)}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-6">
        <div className="grid gap-5 md:grid-cols-3">
          <ValueCard
            icon={BadgeCheck}
            title="Earned certificates"
            description="Certificates require completed lessons, the required project, and at least 80% mastery."
          />
          <ValueCard
            icon={ShieldCheck}
            title="Transparent access"
            description="Individual purchases include lifetime access to that course and future corrections."
          />
          <ValueCard
            icon={Users}
            title="Access support"
            description="Student, teacher, family, community, and financial-need discounts will be available."
          />
        </div>

        <div className="mt-8 rounded-3xl border border-blue-200 bg-blue-50 p-7 md:p-8">
          <div className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-center">
            <div>
              <div className="flex items-center gap-2 text-blue-700">
                <GraduationCap size={22} />
                <p className="text-sm font-black uppercase tracking-widest">Founding learners</p>
              </div>
              <h2 className="mt-3 text-2xl font-black text-blue-950">
                Start learning now while enrollment tools are being completed.
              </h2>
              <p className="mt-2 max-w-3xl leading-7 text-blue-800">
                Explore the available library, complete open lessons, and build progress without entering payment information.
              </p>
            </div>
            <Link to="/library" className="shrink-0 rounded-xl bg-blue-700 px-5 py-3 font-black text-white hover:bg-blue-800">
              Open the library
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function ValueCard({ icon: Icon, title, description }) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="inline-flex rounded-2xl bg-emerald-50 p-3 text-emerald-700">
        <Icon size={24} />
      </div>
      <h3 className="mt-4 text-xl font-black text-slate-950">{title}</h3>
      <p className="mt-3 leading-7 text-slate-600">{description}</p>
    </article>
  );
}
