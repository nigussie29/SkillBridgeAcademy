import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="section grid gap-8 py-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <h3 className="text-lg font-bold">KingsNigus Academy</h3>
          <p className="mt-3 max-w-xl text-slate-600">
            Learning that transforms knowledge into capability through mathematics, coding, data, AI, research, and real-world creation.
          </p>
        </div>
        <div>
          <h4 className="font-semibold">Platform</h4>
          <div className="mt-3 flex flex-col gap-2 text-slate-600">
            <Link to="/courses">Courses</Link>
            <Link to="/resources">Resources</Link>
            <Link to="/blog">Blog</Link>
          </div>
        </div>
        <div>
          <h4 className="font-semibold">Contact</h4>
          <p className="mt-3 text-slate-600">Online learning for beginners and career changers.</p>
        </div>
      </div>
    </footer>
  );
}
