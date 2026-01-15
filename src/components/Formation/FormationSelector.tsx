import { formations } from '../../data/formations';
import { Button } from '../Shared/Button';

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
        <div className="text-sm font-semibold text-gray-300">
          <span className="text-green-400">{selectedFormationIds.length}</span> of <span className="text-white">{formations.length}</span> formations selected
        </div>
        <div className="flex gap-2">
          <Button
            variant="secondary"
            size="sm"
            onClick={handleSelectAll}
            disabled={allSelected}
          >
            Select All
          </Button>
          <Button
            variant="secondary"
            size="sm"
            onClick={handleDeselectAll}
            disabled={selectedFormationIds.length === 0}
          >
            Deselect All
          </Button>
        </div>
      </div>

      <div className="border border-slate-600 rounded-xl max-h-64 overflow-y-auto bg-slate-800/50 backdrop-blur-sm shadow-inner">
        <div className="divide-y divide-slate-700">
          {formations.map(formation => (
            <label
              key={formation.id}
              className="flex items-center px-4 py-3 hover:bg-green-500/10 cursor-pointer transition-colors group"
            >
              <input
                type="checkbox"
                checked={selectedFormationIds.includes(formation.id)}
                onChange={() => handleToggleFormation(formation.id)}
                className="h-5 w-5 text-green-500 focus:ring-green-500 border-slate-600 rounded-lg cursor-pointer transition-all bg-slate-700/50"
              />
              <span className="ml-3 text-sm font-medium text-gray-300 group-hover:text-green-400 transition-colors">{formation.name}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
