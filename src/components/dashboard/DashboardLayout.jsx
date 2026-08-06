export default function DashboardLayout({ children }) {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10">
      <div className="mx-auto max-w-[1600px]">
        <div className="space-y-8">
          {children}
        </div>
      </div>
    </main>
  );
}