import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

const AuthContext = createContext();
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside AuthProvider");
  return context;
}
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [profileError, setProfileError] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let active = true;
    let revision = 0;
    async function refresh(session) {
      const request = ++revision;
      if (!active) return;
      setUser(session?.user ?? null);
      setProfile(null);
      setProfileError("");
      setLoading(true);
      try {
        if (session?.user) {
          const { data, error } = await supabase.from("profiles")
            .select("*").eq("id", session.user.id).single();
          if (error || !data) throw new Error("Your account profile could not be loaded. Please try signing in again.");
          if (active && request === revision) setProfile(data);
        }
      } catch (error) {
        if (active && request === revision) setProfileError(error.message);
      } finally {
        if (active && request === revision) setLoading(false);
      }
    }
    // Never await another Supabase request inside its auth-event callback.
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_, session) => {
      setTimeout(() => { if (active) void refresh(session); }, 0);
    });
    const initialRevision = revision;
    supabase.auth.getSession().then(({ data, error }) => {
      if (!active || revision !== initialRevision) return;
      if (error) {
        setProfileError("Your session could not be loaded. Please sign in again.");
        setLoading(false);
      } else void refresh(data.session);
    }).catch(() => { if (active) setLoading(false); });
    return () => { active = false; subscription.unsubscribe(); };
  }, []);
  async function signOut() {
    const { error } = await supabase.auth.signOut();
    if (error) { setProfileError("Sign out failed. Please try again."); return; }
    setUser(null); setProfile(null); setProfileError("");
  }
  return <AuthContext.Provider value={{ user, profile, loading, profileError, signOut }}>
    {children}
  </AuthContext.Provider>;
}
