import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { supabase } from "../lib/supabase";

function getRoleDestination(role) {
  switch (role) {
    case "admin":
      return "/admin";

    case "instructor":
      return "/instructor";

    case "student":
    default:
      return "/dashboard";
  }
}

export default function Auth() {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function redirectUserByRole(userId) {
    const { data: profile, error } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", userId)
      .single();

    if (error) {
      throw new Error(
        "Your account was authenticated, but your profile could not be loaded."
      );
    }

    navigate(getRoleDestination(profile.role), {
      replace: true,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setLoading(true);
    setMessage("");
    setErrorMessage("");

    try {
      if (isLogin) {
        const { data, error } =
          await supabase.auth.signInWithPassword({
            email: email.trim(),
            password,
          });

        if (error) {
          throw error;
        }

        if (!data.user) {
          throw new Error("Unable to load the signed-in user.");
        }

        await redirectUserByRole(data.user.id);
        return;
      }

      const { data, error } = await supabase.auth.signUp({
        email: email.trim(),
        password,
        options: {
          data: {
            full_name: fullName.trim(),
          },
          emailRedirectTo: `${window.location.origin}/auth`,
        },
      });

      if (error) {
        throw error;
      }

      if (data.session && data.user) {
        await redirectUserByRole(data.user.id);
        return;
      }

      setMessage(
        "Your student account was created. Check your email and confirm your account before logging in."
      );

      setIsLogin(true);
      setPassword("");
    } catch (error) {
      console.error("Authentication error:", error);

      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Authentication failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  function switchMode() {
    setIsLogin((previous) => !previous);
    setFullName("");
    setPassword("");
    setMessage("");
    setErrorMessage("");
  }

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16">
      <div className="mx-auto max-w-md rounded-3xl bg-white p-8 shadow-sm">
        <p className="text-sm font-bold uppercase tracking-wide text-blue-600">
          KingsNigus Academy
        </p>

        <h1 className="text-3xl font-bold text-slate-950">
  Welcome to KingsNigus Academy
</h1>

<div className="mt-3">
  <p className="font-semibold text-blue-600">
    Learn. Create. Teach. Innovate.
  </p>

  <p className="mt-1 text-slate-600">
    Sign in to continue your personalized AI-powered learning experience.
  </p>
</div>
        

        {errorMessage && (
          <div className="mt-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-semibold text-red-700">
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          {!isLogin && (
            <div>
              <label
                htmlFor="full-name"
                className="mb-2 block text-sm font-bold text-slate-700"
              >
                Full name
              </label>

              <input
                id="full-name"
                type="text"
                autoComplete="name"
                placeholder="Enter your full name"
                value={fullName}
                onChange={(event) =>
                  setFullName(event.target.value)
                }
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
                required
              />
            </div>
          )}

          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-bold text-slate-700"
            >
              Email address
            </label>

            <input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="name@example.com"
              value={email}
              onChange={(event) =>
                setEmail(event.target.value)
              }
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-bold text-slate-700"
            >
              Password
            </label>

            <input
              id="password"
              type="password"
              autoComplete={
                isLogin ? "current-password" : "new-password"
              }
              placeholder="Enter your password"
              value={password}
              onChange={(event) =>
                setPassword(event.target.value)
              }
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
              required
              minLength={6}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-blue-600 py-3 font-bold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-400"
          >
            {loading
              ? "Please wait..."
              : isLogin
                ? "Login"
                : "Create Student Account"}
          </button>
        </form>

        <button
          type="button"
          onClick={switchMode}
          disabled={loading}
          className="mt-6 w-full text-center font-bold text-blue-600 disabled:text-slate-400"
        >
          {isLogin
            ? "Need an account? Register as a student"
            : "Already have an account? Login"}
        </button>
      </div>
    </main>
  );
}