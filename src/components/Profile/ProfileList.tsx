import type { Profile } from '../../types';
import { ProfileCard } from './ProfileCard';

interface ProfileListProps {
  profiles: Profile[];
  onEdit: (profile: Profile) => void;
  onDelete: (id: string) => void;
  onSelect?: (profile: Profile) => void;
}

export function ProfileList({ profiles, onEdit, onDelete, onSelect }: ProfileListProps) {
  if (profiles.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">No profiles yet. Create your first profile to get started!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {profiles.map(profile => (
        <ProfileCard
          key={profile.id}
          profile={profile}
          onEdit={onEdit}
          onDelete={onDelete}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}
