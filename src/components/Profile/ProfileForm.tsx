import { useState, useEffect } from 'react';
import type { Profile } from '../../types';
import { TeamSelector } from '../Team/TeamSelector';
import { FormationSelector } from '../Formation/FormationSelector';
import { HandicapSelector } from '../Handicap/HandicapSelector';
import { Button } from '../Shared/Button';

interface ProfileFormProps {
  profile?: Profile;
  onSave: (profile: Profile) => void;
  onCancel: () => void;
}

export function ProfileForm({ profile, onSave, onCancel }: ProfileFormProps) {
  const [name, setName] = useState(profile?.name || '');
  const [teams, setTeams] = useState<string[]>(profile?.teams || []);
  const [useFormations, setUseFormations] = useState(profile?.useFormations ?? false);
  const [formations, setFormations] = useState<string[]>(profile?.formations || []);
  const [useHandicaps, setUseHandicaps] = useState(profile?.useHandicaps ?? false);
  const [handicapCount, setHandicapCount] = useState(profile?.handicapCount ?? 1);
  const [handicaps, setHandicaps] = useState<string[]>(profile?.handicaps || []);

  useEffect(() => {
    if (profile) {
      setName(profile.name);
      setTeams(profile.teams);
      setUseFormations(profile.useFormations);
      setFormations(profile.formations);
      setUseHandicaps(profile.useHandicaps);
      setHandicapCount(profile.handicapCount);
      setHandicaps(profile.handicaps);
    }
  }, [profile]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim()) {
      alert('Please enter a profile name');
      return;
    }

    if (teams.length === 0) {
      alert('Please select at least one team');
      return;
    }

    if (useFormations && formations.length === 0) {
      alert('Please select at least one formation');
      return;
    }

    if (useHandicaps && handicaps.length === 0) {
      alert('Please select at least one handicap');
      return;
    }

    const newProfile: Profile = {
      id: profile?.id || `profile-${Date.now()}`,
      name: name.trim(),
      teams,
      formations: useFormations ? formations : [],
      handicaps: useHandicaps ? handicaps : [],
      useFormations,
      useHandicaps,
      handicapCount: useHandicaps ? handicapCount : 0,
    };

    onSave(newProfile);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
          Profile Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter profile name"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Teams
        </label>
        <TeamSelector
          selectedTeamIds={teams}
          onSelectionChange={setTeams}
        />
      </div>

      <div>
        <label className="flex items-center mb-2">
          <input
            type="checkbox"
            checked={useFormations}
            onChange={(e) => setUseFormations(e.target.checked)}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <span className="ml-2 text-sm font-medium text-gray-700">
            Use Random Formation Selection
          </span>
        </label>
        {useFormations && (
          <div className="mt-3">
            <FormationSelector
              selectedFormationIds={formations}
              onSelectionChange={setFormations}
            />
          </div>
        )}
      </div>

      <div>
        <label className="flex items-center mb-2">
          <input
            type="checkbox"
            checked={useHandicaps}
            onChange={(e) => setUseHandicaps(e.target.checked)}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <span className="ml-2 text-sm font-medium text-gray-700">
            Use Handicaps
          </span>
        </label>
        {useHandicaps && (
          <div className="mt-3 space-y-3">
            <div>
              <label htmlFor="handicapCount" className="block text-sm font-medium text-gray-700 mb-2">
                Number of Handicaps per Match
              </label>
              <select
                id="handicapCount"
                value={handicapCount}
                onChange={(e) => setHandicapCount(Number(e.target.value))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
              </select>
            </div>
            <HandicapSelector
              selectedHandicapIds={handicaps}
              onSelectionChange={setHandicaps}
              handicapCount={handicapCount}
            />
          </div>
        )}
      </div>

      <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
        <Button
          type="button"
          variant="secondary"
          onClick={onCancel}
        >
          Cancel
        </Button>
        <Button
          type="submit"
          variant="primary"
        >
          {profile ? 'Update Profile' : 'Create Profile'}
        </Button>
      </div>
    </form>
  );
}
