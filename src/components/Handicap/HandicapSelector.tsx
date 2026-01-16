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
        <div className="text-sm text-gray-300 bg-gradient-to-r from-orange-500/20 to-amber-500/20 p-4 rounded-xl border border-orange-400/30">
          <span className="font-semibold text-orange-400">{handicapCount}</span> yêu cầu sẽ được chọn ngẫu nhiên
        </div>
      )}
      
      <div className="flex justify-between items-center">
        <div className="text-sm font-semibold text-gray-300">
          <span className="text-orange-400">{selectedHandicapIds.length}</span> trong <span className="text-white">{handicaps.length}</span> yêu cầu trong danh sách
          {handicapCount && (
            <span className="ml-2 text-gray-400 font-normal">
              ({handicapCount} sẽ được chọn ngẫu nhiên)
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
            Chọn Tất Cả
          </Button>
          <Button
            variant="secondary"
            size="sm"
            onClick={handleDeselectAll}
            disabled={selectedHandicapIds.length === 0}
          >
            Bỏ Chọn Tất Cả
          </Button>
        </div>
      </div>

      <div className="border border-slate-600 rounded-xl max-h-96 overflow-y-auto bg-slate-800/50 backdrop-blur-sm shadow-inner">
        <div className="divide-y divide-slate-700">
          {handicaps.map(handicap => {
            const isSelected = selectedHandicapIds.includes(handicap.id);
            
            return (
              <label
                key={handicap.id}
                className="flex items-start px-4 py-3 hover:bg-orange-500/10 cursor-pointer transition-colors group"
              >
                <input
                  type="checkbox"
                  checked={isSelected}
                  onChange={() => handleToggleHandicap(handicap.id)}
                  className="h-5 w-5 text-orange-500 focus:ring-orange-500 border-slate-600 rounded-lg cursor-pointer transition-all mt-0.5 bg-slate-700/50"
                />
                <div className="ml-3 flex-1">
                  <div className="text-sm font-semibold text-gray-300 group-hover:text-orange-400 transition-colors">{handicap.name}</div>
                  <div className="text-xs text-gray-400 mt-1">{handicap.description}</div>
                </div>
              </label>
            );
          })}
        </div>
      </div>
    </div>
  );
}
