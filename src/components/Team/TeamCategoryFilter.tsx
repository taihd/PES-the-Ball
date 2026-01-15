import { teamCategories } from '../../data/teams';

interface TeamCategoryFilterProps {
  selectedCategories: string[];
  onToggleCategory: (category: string) => void;
}

export function TeamCategoryFilter({ selectedCategories, onToggleCategory }: TeamCategoryFilterProps) {
  const categories = Object.entries(teamCategories);

  return (
    <div className="flex flex-wrap gap-2">
      {categories.map(([key, label]) => (
        <button
          key={key}
          type="button"
          onClick={() => onToggleCategory(key)}
          className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
            selectedCategories.includes(key)
              ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-md shadow-emerald-500/30'
              : 'bg-slate-700/80 backdrop-blur-sm text-gray-300 hover:bg-slate-600/80 border border-slate-600/50 shadow-sm'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
