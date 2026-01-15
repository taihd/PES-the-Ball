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
              ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-md shadow-indigo-500/30'
              : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-gray-50 border border-gray-200 shadow-sm'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
