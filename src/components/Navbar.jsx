import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Menu, X, GraduationCap } from 'lucide-react';
import { useState } from 'react';
import { useAuth } from "../context/AuthContext.jsx";
import { supabase } from "../lib/supabase";

const links = [
  { to: "/", label: "Home" },
  { to: "/courses", label: "Courses" },
  { to: "/library", label: "Library" },
  { to: "/projects", label: "Projects" },
  { to: "/resources", label: "Resources" },
  { to: "/about", label: "About" },
];
function getDashboardLink(role) {
  switch (role) {
    case "admin":
      return "/admin";

    case "instructor":
      return "/instructor";

    default:
      return "/dashboard";
  }
}
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { user, profile, signOut } = useAuth();
  const navigate = useNavigate();

 

  const navClass = ({ isActive }) =>
    isActive ? 'text-brand-700 font-semibold' : 'text-slate-700 hover:text-brand-700';

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <nav className="section flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-slate-900">
          <span className="rounded-xl bg-brand-600 p-2 text-white">
            <GraduationCap size={22} />
          </span>
          <span>SkillBridge Academy</span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={navClass}>
              {link.label}
            </NavLink>
          ))}
          {profile?.role === 'admin' && (
            <NavLink to="/admin" className={navClass}>Admin</NavLink>
          )}
          {user ? (
            <>
              <NavLink
  to={getDashboardLink(profile?.role)}
  className={navClass}
>
  Dashboard
</NavLink>

<div className="flex items-center gap-3 rounded-full border border-slate-200 bg-slate-50 px-3 py-2">
  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
    {profile?.full_name?.charAt(0)?.toUpperCase() || "U"}
  </div>

  <div className="hidden lg:block">
    <p className="text-sm font-semibold text-slate-900">
      {profile?.full_name}
    </p>

    <p className="text-xs capitalize text-slate-500">
      {profile?.role}
    </p>
  </div>
</div>
              <button onClick={signOut} className="btn-secondary py-2">Logout</button>
            </>
          ) : (
            <Link to="/login" className="btn-primary py-2">Login</Link>
          )}
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Open menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="section flex flex-col gap-4 py-4">
            {links.map((link) => (
              <NavLink key={link.to} to={link.to} onClick={() => setOpen(false)} className={navClass}>
                {link.label}
              </NavLink>
            ))}
            {profile?.role === 'admin' && <Link to="/admin">Admin</Link>}
            {session ? (
              <>
                <Link to="/dashboard" onClick={() => setOpen(false)}>Dashboard</Link>
                <button onClick={signOut} className="text-left">Logout</button>
              </>
            ) : (
              <Link to="/login" className="btn-primary" onClick={() => setOpen(false)}>Login</Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
