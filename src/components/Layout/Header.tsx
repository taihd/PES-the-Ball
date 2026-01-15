export function Header() {
  return (
    <header className="relative bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 text-white shadow-2xl border-b border-emerald-500/20 backdrop-blur-sm overflow-hidden">
      {/* Stadium lighting effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent animate-pulse"></div>
      <div className="absolute top-0 left-1/4 w-1 h-full bg-emerald-400/30 blur-sm"></div>
      <div className="absolute top-0 right-1/4 w-1 h-full bg-cyan-400/30 blur-sm"></div>
      
      <div className="container mx-auto px-4 py-6 relative z-10">
        <div className="flex items-center justify-center">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent drop-shadow-lg">
            PES the Ball
          </h1>
        </div>
      </div>
    </header>
  );
}
