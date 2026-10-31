import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, LibraryBig } from "lucide-react";

/**
 * Contextual links between a structured school lesson and existing library notes.
 * No duplicate lessons and no changes to assessment or account progress.
 */
export default function RelatedLibraryResources({ title = "Explore deeper knowledge", description, resources = [] }) {
  return (
    <section className="overflow-hidden rounded-3xl border border-cyan-200 bg-white shadow-sm" aria-label="Related Data and AI knowledge library resources">
      <div className="bg-gradient-to-r from-indigo-950 to-cyan-900 px-6 py-6 text-white">
        <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-cyan-200"><LibraryBig size={18}/> School × Knowledge Library</div>
        <h2 className="mt-3 text-2xl font-black">{title}</h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-cyan-50">{description || "Strengthen this lesson with complementary explanations and worked resources from our Data & AI Library."}</p>
      </div>
      <div className="grid gap-3 p-5 md:grid-cols-2">
        {resources.map((resource) => (
          <Link key={resource.path} to={resource.path} className="group flex flex-col rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-indigo-300 hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-600">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-indigo-700"><BookOpen size={16}/>{resource.topic || "Supporting lesson"}</div>
            <h3 className="mt-3 font-black leading-6 text-slate-950">{resource.title}</h3>
            <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">{resource.why}</p>
            <span className="mt-4 inline-flex items-center gap-2 text-sm font-black text-indigo-700">Open library lesson <ArrowRight size={16} className="transition group-hover:translate-x-1"/></span>
          </Link>
        ))}
      </div>
      <div className="border-t border-slate-200 bg-slate-50 px-5 py-4">
        <Link to="/library/data-ai" className="inline-flex items-center gap-2 text-sm font-bold text-indigo-800 hover:underline">Browse the full Data & AI Knowledge Library <ArrowRight size={16}/></Link>
      </div>
    </section>
  );
}
