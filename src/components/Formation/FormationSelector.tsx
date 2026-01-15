import { formations } from '../../data/formations';

interface FormationSelectorProps {
  selectedFormationIds: string[];
  onSelectionChange: (formationIds: string[]) => void;
}

export function FormationSelector({ selectedFormationIds, onSelectionChange }: FormationSelectorProps) {
  const handleToggleFormation = (formationId: string) => {
    if (selectedFormationIds.includes(formationId)) {
      onSelectionChange(selectedFormationIds.filter(id => id !== formationId));
    } else {
      onSelectionChange([...selectedFormationIds, formationId]);
    }
  };

  const handleSelectAll = () => {
    onSelectionChange(formations.map(f => f.id));
  };

  const handleDeselectAll = () => {
    onSelectionChange([]);
  };

  const allSelected = formations.length > 0 && 
    formations.every(f => selectedFormationIds.includes(f.id));

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div className="text-sm text-gray-600">
          {selectedFormationIds.length} of {formations.length} formations selected
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={handleSelectAll}
            disabled={allSelected}
            className="px-3 py-1.5 text-sm font-medium text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Select All
          </button>
          <button
            type="button"
            onClick={handleDeselectAll}
            disabled={selectedFormationIds.length === 0}
            className="px-3 py-1.5 text-sm font-medium text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Deselect All
          </button>
        </div>
      </div>

      <div className="border border-gray-200 rounded-lg max-h-64 overflow-y-auto">
        <div className="divide-y divide-gray-200">
          {formations.map(formation => (
            <label
              key={formation.id}
              className="flex items-center px-4 py-3 hover:bg-gray-50 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={selectedFormationIds.includes(formation.id)}
                onChange={() => handleToggleFormation(formation.id)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <span className="ml-3 text-sm text-gray-900">{formation.name}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
