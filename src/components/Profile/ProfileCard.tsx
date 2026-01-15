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
    <div className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-white/50 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 hover:border-indigo-200/50 flex flex-col h-full">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">{profile.name}</h3>
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
      
      <div className="space-y-3 text-sm mb-6 flex-1">
        <div className="flex items-center gap-2 text-gray-700">
          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 font-semibold text-xs">
            {profile.teams.length}
          </span>
          <span className="font-medium">Teams</span>
        </div>
        {profile.useFormations ? (
          <div className="flex items-center gap-2 text-gray-700">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-600 font-semibold text-xs">
              {profile.formations.length}
            </span>
            <span className="font-medium">Formations</span>
          </div>
        ) : (
          <div className="flex items-center gap-2 text-gray-400">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 text-gray-400 font-semibold text-xs">
              —
            </span>
            {/* <span className="font-medium">Formations</span> */}
            {/* <span className="text-xs text-gray-400 ml-1">(not configured)</span> */}
          </div>
        )}
        {profile.useHandicaps ? (
          <div className="flex items-center gap-2 text-gray-700">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-orange-100 text-orange-600 font-semibold text-xs">
              {profile.handicaps.length}
            </span>
            <span className="font-medium">Handicaps (max {profile.handicapCount})</span>
          </div>
        ) : (
          <div className="flex items-center gap-2 text-gray-400">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 text-gray-400 font-semibold text-xs">
              —
            </span>
            {/* <span className="font-medium">Handicaps</span>
            <span className="text-xs text-gray-400 ml-1">(not configured)</span> */}
          </div>
        )}
      </div>
      
      <div className="flex gap-3 mt-auto">
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
