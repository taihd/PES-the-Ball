import type { Profile, Formation, Handicap, MatchResult } from '../types';
import { teams } from '../data/teams';
import { formations } from '../data/formations';
import { handicaps } from '../data/handicaps';

function getRandomElement<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

function getRandomElements<T>(array: T[], count: number): T[] {
  if (count >= array.length) {
    return [...array];
  }
  
  const shuffled = [...array].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

export function generateMatch(profile: Profile): MatchResult | null {
  // Get selected teams
  const selectedTeams = teams.filter(t => profile.teams.includes(t.id));
  if (selectedTeams.length === 0) {
    return null;
  }

  const team = getRandomElement(selectedTeams);

  // Get formation if enabled
  let formation: Formation | undefined;
  if (profile.useFormations && profile.formations.length > 0) {
    const selectedFormations = formations.filter(f => profile.formations.includes(f.id));
    if (selectedFormations.length > 0) {
      formation = getRandomElement(selectedFormations);
    }
  }

  // Get handicaps if enabled
  let selectedHandicaps: Handicap[] = [];
  if (profile.useHandicaps && profile.handicapCount > 0 && profile.handicaps.length > 0) {
    const availableHandicaps = handicaps.filter(h => profile.handicaps.includes(h.id));
    if (availableHandicaps.length > 0) {
      selectedHandicaps = getRandomElements(availableHandicaps, profile.handicapCount);
    }
  }

  return {
    team,
    formation,
    handicaps: selectedHandicaps,
  };
}
