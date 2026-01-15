import type { Profile } from '../../types';
import { ProfileCard } from './ProfileCard';

interface ProfileListProps {
  profiles: Profile[];
  onEdit: (profile: Profile) => void;
  onDelete: (id: string) => void;
  onGenerateMatch: (profile: Profile) => void;
}

export function ProfileList({ profiles, onEdit, onDelete, onGenerateMatch }: ProfileListProps) {
  if (profiles.length === 0) {
    return (
      <div className="text-center py-16 px-4">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-indigo-100 to-blue-100 mb-4">
          <span className="text-4xl">⚽</span>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">No profiles yet</h3>
        <p className="text-gray-500 text-base max-w-md mx-auto">
          Create your first profile to get started with generating matches!
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
      {profiles.map(profile => (
        <ProfileCard
          key={profile.id}
          profile={profile}
          onEdit={onEdit}
          onDelete={onDelete}
          onGenerateMatch={onGenerateMatch}
        />
      ))}
    </div>
  );
}
