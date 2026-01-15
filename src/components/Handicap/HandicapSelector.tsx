import { handicaps } from '../../data/handicaps';
import { Button } from '../Shared/Button';

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
        <div className="text-sm text-gray-700 bg-gradient-to-r from-orange-50 to-amber-50 p-4 rounded-xl border border-orange-100">
          <span className="font-semibold text-orange-600">{handicapCount}</span> handicap{handicapCount !== 1 ? 's' : ''} will be randomly selected from your pool per match
        </div>
      )}
      
      <div className="flex justify-between items-center">
        <div className="text-sm font-semibold text-gray-700">
          <span className="text-orange-600">{selectedHandicapIds.length}</span> of <span className="text-gray-900">{handicaps.length}</span> handicaps in pool
          {handicapCount && (
            <span className="ml-2 text-gray-500 font-normal">
              ({handicapCount} will be randomly selected per match)
            </span>
          )}
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
            disabled={selectedHandicapIds.length === 0}
          >
            Deselect All
          </Button>
        </div>
      </div>

      <div className="border border-gray-200 rounded-xl max-h-96 overflow-y-auto bg-white/50 backdrop-blur-sm shadow-inner">
        <div className="divide-y divide-gray-100">
          {handicaps.map(handicap => {
            const isSelected = selectedHandicapIds.includes(handicap.id);
            
            return (
              <label
                key={handicap.id}
                className="flex items-start px-4 py-3 hover:bg-orange-50/50 cursor-pointer transition-colors group"
              >
                <input
                  type="checkbox"
                  checked={isSelected}
                  onChange={() => handleToggleHandicap(handicap.id)}
                  className="h-5 w-5 text-orange-600 focus:ring-orange-500 border-gray-300 rounded-lg cursor-pointer transition-all mt-0.5"
                />
                <div className="ml-3 flex-1">
                  <div className="text-sm font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">{handicap.name}</div>
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
