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
        <p className="text-gray-400 text-lg mb-4">
          No profiles available. Create a profile first to generate matches.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="bg-slate-800/60 backdrop-blur-sm rounded-lg shadow-md p-6 border border-emerald-500/20">
        <h2 className="text-xl font-semibold text-white mb-4">Generate Match</h2>
        
        <div className="space-y-4">
          <div>
            <label htmlFor="profile-select" className="block text-sm font-semibold text-gray-300 mb-2">
              Select Profile
            </label>
            <select
              id="profile-select"
              value={selectedProfileId}
              onChange={(e) => {
                setSelectedProfileId(e.target.value);
                setMatchResult(null);
              }}
              className="w-full px-4 py-2 border border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all bg-slate-700/50 backdrop-blur-sm cursor-pointer text-white"
            >
              <option value="" className="bg-slate-800">Choose a profile...</option>
              {profiles.map(profile => (
                <option key={profile.id} value={profile.id} className="bg-slate-800">
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
