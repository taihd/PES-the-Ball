import type { MatchResult as MatchResultType } from '../../types';
import { Button } from '../Shared/Button';

interface MatchResultProps {
  result: MatchResultType;
  onReroll: () => void;
}

export function MatchResult({ result, onReroll }: MatchResultProps) {
  return (
    <div className="text-center space-y-6">
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Your Match Settings</h2>
        <p className="text-gray-500 text-sm">Ready to play!</p>
      </div>
      
      <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-6 sm:p-8 border border-indigo-100 shadow-lg">
        <div className="text-xs sm:text-sm text-gray-500 mb-2 font-semibold uppercase tracking-wide">Team</div>
        <div className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent break-words">
          {result.team.name}
        </div>
      </div>

      {result.formation && (
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 sm:p-8 border border-green-100 shadow-lg">
          <div className="text-xs sm:text-sm text-gray-500 mb-2 font-semibold uppercase tracking-wide">Formation</div>
          <div className="text-xl sm:text-3xl font-bold text-green-600">{result.formation.name}</div>
        </div>
      )}

      {result.handicaps.length > 0 && (
        <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 sm:p-8 border border-orange-100 shadow-lg">
          <div className="text-xs sm:text-sm text-gray-500 mb-4 font-semibold uppercase tracking-wide">Handicaps</div>
          <div className="space-y-3">
            {result.handicaps.map(handicap => (
              <div key={handicap.id} className="inline-block px-4 py-2 bg-white/80 backdrop-blur-sm rounded-xl border border-orange-200 shadow-sm">
                <span className="text-base sm:text-lg font-semibold text-orange-600 break-words">
                  {handicap.name}
                </span>
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
          🎲 Roll Again
        </Button>
      </div>
    </div>
  );
}
