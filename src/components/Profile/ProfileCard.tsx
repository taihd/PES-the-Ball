import type { Profile } from '../../types';
import { Button } from '../Shared/Button';

interface ProfileCardProps {
  profile: Profile;
  onEdit: (profile: Profile) => void;
  onDelete: (id: string) => void;
  onSelect?: (profile: Profile) => void;
}

export function ProfileCard({ profile, onEdit, onDelete, onSelect }: ProfileCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-semibold text-gray-900">{profile.name}</h3>
        <div className="flex gap-2">
          <Button
            variant="secondary"
            size="sm"
            onClick={() => onEdit(profile)}
          >
            Edit
          </Button>
          <Button
            variant="danger"
            size="sm"
            onClick={() => onDelete(profile.id)}
          >
            Delete
          </Button>
        </div>
      </div>
      
      <div className="space-y-2 text-sm text-gray-600">
        <div>
          <span className="font-medium">Teams:</span> {profile.teams.length}
        </div>
        {profile.useFormations && (
          <div>
            <span className="font-medium">Formations:</span> {profile.formations.length}
          </div>
        )}
        {profile.useHandicaps && (
          <div>
            <span className="font-medium">Handicaps:</span> {profile.handicaps.length} (max {profile.handicapCount})
          </div>
        )}
      </div>
      
      {onSelect && (
        <div className="mt-4">
          <Button
            variant="primary"
            size="sm"
            className="w-full"
            onClick={() => onSelect(profile)}
          >
            Use This Profile
          </Button>
        </div>
      )}
    </div>
  );
}
