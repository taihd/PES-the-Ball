import { handicaps } from '../../data/handicaps';

interface HandicapSelectorProps {
  selectedHandicapIds: string[];
  onSelectionChange: (handicapIds: string[]) => void;
  handicapCount?: number; // Number of handicaps to randomly select per match (for display only)
}

export function HandicapSelector({ 
  selectedHandicapIds, 
  onSelectionChange,
  handicapCount 
}: HandicapSelectorProps) {
  const handleToggleHandicap = (handicapId: string) => {
    if (selectedHandicapIds.includes(handicapId)) {
      onSelectionChange(selectedHandicapIds.filter(id => id !== handicapId));
    } else {
      onSelectionChange([...selectedHandicapIds, handicapId]);
    }
  };

  const handleSelectAll = () => {
    onSelectionChange(handicaps.map(h => h.id));
  };

  const handleDeselectAll = () => {
    onSelectionChange([]);
  };

  const allSelected = handicaps.length > 0 && 
    handicaps.every(h => selectedHandicapIds.includes(h.id));

  return (
    <div className="space-y-4">
      {handicapCount && (
        <div className="text-sm text-gray-600 bg-blue-50 p-3 rounded-lg">
          {handicapCount} handicap{handicapCount !== 1 ? 's' : ''} will be randomly selected from your pool per match
        </div>
      )}
      
      <div className="flex justify-between items-center">
        <div className="text-sm text-gray-600">
          {selectedHandicapIds.length} of {handicaps.length} handicaps in pool
          {handicapCount && ` (${handicapCount} will be randomly selected per match)`}
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
            disabled={selectedHandicapIds.length === 0}
            className="px-3 py-1.5 text-sm font-medium text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Deselect All
          </button>
        </div>
      </div>

      <div className="border border-gray-200 rounded-lg max-h-96 overflow-y-auto">
        <div className="divide-y divide-gray-200">
          {handicaps.map(handicap => {
            const isSelected = selectedHandicapIds.includes(handicap.id);
            
            return (
              <label
                key={handicap.id}
                className="flex items-start px-4 py-3 hover:bg-gray-50 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={isSelected}
                  onChange={() => handleToggleHandicap(handicap.id)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-0.5"
                />
                <div className="ml-3 flex-1">
                  <div className="text-sm font-medium text-gray-900">{handicap.name}</div>
                  <div className="text-xs text-gray-500 mt-1">{handicap.description}</div>
                </div>
              </label>
            );
          })}
        </div>
      </div>
    </div>
  );
}
