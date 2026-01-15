import { useState } from 'react';
import type { Profile, MatchResult as MatchResultType } from '../../types';
import { generateMatch } from '../../utils/randomizer';
import { MatchResult } from './MatchResult';
import { Button } from '../Shared/Button';

interface MatchGeneratorProps {
  profiles: Profile[];
}

export function MatchGenerator({ profiles }: MatchGeneratorProps) {
  const [selectedProfileId, setSelectedProfileId] = useState<string>('');
  const [matchResult, setMatchResult] = useState<MatchResultType | null>(null);

  const selectedProfile = profiles.find(p => p.id === selectedProfileId);

  const handleGenerate = () => {
    if (!selectedProfile) {
      alert('Please select a profile first');
      return;
    }

    const result = generateMatch(selectedProfile);
    if (!result) {
      alert('Selected profile has no teams. Please add teams to the profile.');
      return;
    }

    setMatchResult(result);
  };

  const handleReroll = () => {
    handleGenerate();
  };

  if (profiles.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg mb-4">
          No profiles available. Create a profile first to generate matches.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Generate Match</h2>
        
        <div className="space-y-4">
          <div>
            <label htmlFor="profile-select" className="block text-sm font-medium text-gray-700 mb-2">
              Select Profile
            </label>
            <select
              id="profile-select"
              value={selectedProfileId}
              onChange={(e) => {
                setSelectedProfileId(e.target.value);
                setMatchResult(null);
              }}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Choose a profile...</option>
              {profiles.map(profile => (
                <option key={profile.id} value={profile.id}>
                  {profile.name}
                </option>
              ))}
            </select>
          </div>

          <Button
            variant="primary"
            size="lg"
            onClick={handleGenerate}
            disabled={!selectedProfileId}
            className="w-full"
          >
            Generate Match
          </Button>
        </div>
      </div>

      {matchResult && (
        <MatchResult result={matchResult} onReroll={handleReroll} />
      )}
    </div>
  );
}
