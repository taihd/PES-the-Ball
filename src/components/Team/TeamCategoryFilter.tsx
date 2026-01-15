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
          className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
            selectedCategories.includes(key)
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
