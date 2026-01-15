export interface Profile {
  id: string;
  name: string;
  teams: string[]; // Team IDs
  formations: string[]; // Formation IDs
  handicaps: string[]; // Handicap IDs
  useFormations: boolean;
  useHandicaps: boolean;
  handicapCount: number; // 0, 1, or 2
}

export interface Team {
  id: string;
  name: string;
  category: string[]; // ['premier-league', 'strong', etc.]
  type: 'club' | 'national' | 'legendary';
}

export interface Formation {
  id: string;
  name: string;
  code: string; // e.g., "4-4-2"
}

export interface Handicap {
  id: string;
  name: string;
  description: string;
}

export interface MatchResult {
  team: Team;
  formation?: Formation;
  handicaps: Handicap[];
}
