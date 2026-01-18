import type { MatchResult as MatchResultType } from '../../types';
import { Button } from '../Shared/Button';

interface MatchResultProps {
  result: MatchResultType;
  onReroll: () => void;
}

export function MatchResult({ result, onReroll }: MatchResultProps) {
  return (
    <div className="text-center space-y-6">
      <div className="relative bg-gradient-to-br from-emerald-500/20 via-cyan-500/20 to-emerald-500/20 rounded-2xl p-6 sm:p-8 border border-emerald-400/30 shadow-xl shadow-emerald-500/10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent"></div>
        <div className="relative z-10">
          <div className="text-xs sm:text-sm text-gray-400 mb-2 font-semibold uppercase tracking-wide">Team</div>
          <div className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent break-words">
            {result.team.name}
          </div>
        </div>
      </div>

      {result.formation && (
        <div className="relative bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl p-6 sm:p-8 border border-green-400/30 shadow-xl shadow-green-500/10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent"></div>
          <div className="relative z-10">
            <div className="text-xs sm:text-sm text-gray-400 mb-2 font-semibold uppercase tracking-wide">Đội Hình</div>
            <div className="text-xl sm:text-3xl font-bold text-green-400">{result.formation.name}</div>
          </div>
        </div>
      )}

      {result.handicaps.length > 0 && (
        <div className="relative bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-2xl p-6 sm:p-8 border border-orange-400/30 shadow-xl shadow-orange-500/10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent"></div>
          <div className="relative z-10">
            <div className="text-xs sm:text-sm text-gray-400 mb-4 font-semibold uppercase tracking-wide">Yêu Cầu</div>
            <div className="space-y-3">
              {result.handicaps.map(handicap => (
                <div key={handicap.id} className="inline-block px-4 py-2 bg-slate-800/80 backdrop-blur-sm rounded-xl border border-orange-400/30 shadow-lg">
                  <span className="text-base sm:text-lg font-semibold text-orange-400 break-words">
                    {handicap.name}
                  </span>
                </div>
              ))}
            </div>
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
          🎲 Lạiii
        </Button>
      </div>
    </div>
  );
}
