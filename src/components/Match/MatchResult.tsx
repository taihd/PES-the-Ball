import type { MatchResult as MatchResultType } from '../../types';
import { Button } from '../Shared/Button';

interface MatchResultProps {
  result: MatchResultType;
  onReroll: () => void;
}

export function MatchResult({ result, onReroll }: MatchResultProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 border-2 border-blue-500">
      <div className="text-center space-y-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Your Match Settings</h2>
        </div>
        
        <div className="bg-blue-50 rounded-lg p-4 sm:p-6">
          <div className="text-xs sm:text-sm text-gray-600 mb-1">Team</div>
          <div className="text-2xl sm:text-3xl font-bold text-blue-600 break-words">{result.team.name}</div>
        </div>

        {result.formation && (
          <div className="bg-green-50 rounded-lg p-4 sm:p-6">
            <div className="text-xs sm:text-sm text-gray-600 mb-1">Formation</div>
            <div className="text-xl sm:text-2xl font-bold text-green-600">{result.formation.name}</div>
          </div>
        )}

        {result.handicaps.length > 0 && (
          <div className="bg-orange-50 rounded-lg p-4 sm:p-6">
            <div className="text-xs sm:text-sm text-gray-600 mb-3">Handicaps</div>
            <div className="space-y-2">
              {result.handicaps.map(handicap => (
                <div key={handicap.id} className="text-base sm:text-lg font-semibold text-orange-600 break-words">
                  {handicap.name}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="pt-4">
          <Button
            variant="primary"
            size="lg"
            onClick={onReroll}
            className="w-full"
          >
            Roll Again
          </Button>
        </div>
      </div>
    </div>
  );
}
