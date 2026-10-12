import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

export default function ProtectedRoute({
  children,
  allowedRoles = [],
}) {
  const { user, profile, loading, profileError, signOut } = useAuth();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <h2 className="text-xl font-bold">
          Loading account...
        </h2>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (!profile || !["student", "instructor", "admin"].includes(profile.role)) {
    return <section className="mx-auto max-w-xl p-10" role="alert">
      <h1 className="text-2xl font-bold">Account access unavailable</h1>
      <p className="mt-4">{profileError || "Your account role could not be verified. Please contact the academy."}</p>
      <button className="mt-6 rounded-xl bg-blue-600 px-5 py-3 text-white" onClick={signOut}>Sign out and try again</button>
    </section>;
  }

  if (
    allowedRoles.length > 0 &&
    !allowedRoles.includes(profile?.role)
  ) {
    if (profile?.role === "admin") {
      return <Navigate to="/admin" replace />;
    }

    if (profile?.role === "instructor") {
      return <Navigate to="/instructor" replace />;
    }

    return <Navigate to="/dashboard" replace />;
  }

  return children;
}