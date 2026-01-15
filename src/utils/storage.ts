import type { Profile } from '../types';

const PROFILES_KEY = 'pes-profiles';

export function saveProfiles(profiles: Profile[]): void {
  try {
    localStorage.setItem(PROFILES_KEY, JSON.stringify(profiles));
  } catch (error) {
    console.error('Error saving profiles:', error);
    throw error;
  }
}

export function loadProfiles(): Profile[] {
  try {
    const data = localStorage.getItem(PROFILES_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error loading profiles:', error);
    return [];
  }
}

export function getProfileById(id: string): Profile | null {
  const profiles = loadProfiles();
  return profiles.find(p => p.id === id) || null;
}

export function saveProfile(profile: Profile): void {
  const profiles = loadProfiles();
  const index = profiles.findIndex(p => p.id === profile.id);
  
  if (index >= 0) {
    profiles[index] = profile;
  } else {
    profiles.push(profile);
  }
  
  saveProfiles(profiles);
}

export function deleteProfile(id: string): void {
  const profiles = loadProfiles();
  const filtered = profiles.filter(p => p.id !== id);
  saveProfiles(filtered);
}
