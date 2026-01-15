interface TeamSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export function TeamSearch({ value, onChange }: TeamSearchProps) {
  return (
    <div className="relative">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search teams..."
        className="w-full px-4 py-3 pl-11 border border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all bg-slate-700/50 backdrop-blur-sm text-white placeholder-gray-400"
      />
      <svg
        className="absolute left-3 top-3.5 h-5 w-5 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
  );
}
