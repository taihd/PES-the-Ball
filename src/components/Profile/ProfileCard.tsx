import type { Profile } from '../../types';
import { Button } from '../Shared/Button';

interface ProfileCardProps {
  profile: Profile;
  onEdit: (profile: Profile) => void;
  onDelete: (id: string) => void;
  onGenerateMatch: (profile: Profile) => void;
}

export function ProfileCard({ profile, onEdit, onDelete, onGenerateMatch }: ProfileCardProps) {
  return (
    <div className="group relative bg-slate-800/60 backdrop-blur-md rounded-2xl shadow-2xl p-6 border border-emerald-500/20 hover:border-emerald-500/40 hover:shadow-emerald-500/20 hover:scale-[1.02] transition-all duration-300 flex flex-col h-full overflow-hidden">
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-cyan-500/0 to-emerald-500/0 group-hover:from-emerald-500/5 group-hover:via-cyan-500/5 group-hover:to-emerald-500/5 transition-all duration-300 rounded-2xl"></div>
      
      <div className="flex justify-between items-start mb-4 relative z-10">
        <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">{profile.name}</h3>
        <Button
          variant="danger"
          size="sm"
          onClick={() => onDelete(profile.id)}
          className="opacity-70 hover:opacity-100 transition-opacity"
          aria-label={`Delete ${profile.name}`}
        >
          Delete
        </Button>
      </div>
      
      <div className="space-y-3 text-sm mb-6 flex-1 relative z-10">
        <div className="flex items-center gap-2 text-gray-300">
          <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-400/30 text-emerald-400 font-bold text-xs shadow-lg shadow-emerald-500/20">
            {profile.teams.length}
          </span>
          <span className="font-medium text-gray-300">Teams</span>
        </div>
        {profile.useFormations ? (
          <div className="flex items-center gap-2 text-gray-300">
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-400/30 text-green-400 font-bold text-xs shadow-lg shadow-green-500/20">
              {profile.formations.length}
            </span>
            <span className="font-medium text-gray-300">Formations</span>
          </div>
        ) : (
          <div className="flex items-center gap-2 text-gray-500">
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-slate-700/50 border border-slate-600/50 text-gray-500 font-semibold text-xs">
              —
            </span>
          </div>
        )}
        {profile.useHandicaps ? (
          <div className="flex items-center gap-2 text-gray-300">
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br from-orange-500/20 to-amber-500/20 border border-orange-400/30 text-orange-400 font-bold text-xs shadow-lg shadow-orange-500/20">
              {profile.handicaps.length}
            </span>
            <span className="font-medium text-gray-300">Handicaps (max {profile.handicapCount})</span>
          </div>
        ) : (
          <div className="flex items-center gap-2 text-gray-500">
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-slate-700/50 border border-slate-600/50 text-gray-500 font-semibold text-xs">
              —
            </span>
          </div>
        )}
      </div>
      
      <div className="flex gap-3 mt-auto relative z-10">
        <Button
          variant="secondary"
          size="sm"
          className="flex-1"
          onClick={() => onEdit(profile)}
        >
          Edit
        </Button>
        <Button
          variant="primary"
          size="sm"
          className="flex-1"
          onClick={() => onGenerateMatch(profile)}
        >
          Generate Match
        </Button>
      </div>
    </div>
  );
}
