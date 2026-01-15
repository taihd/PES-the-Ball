import { useState, useEffect } from 'react';
import type { Profile } from '../types';
import { loadProfiles, saveProfile, deleteProfile as deleteProfileStorage } from '../utils/storage';

export function useProfiles() {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loaded = loadProfiles();
    setProfiles(loaded);
    setLoading(false);
  }, []);

  const addProfile = (profile: Profile) => {
    saveProfile(profile);
    setProfiles(prev => {
      const index = prev.findIndex(p => p.id === profile.id);
      if (index >= 0) {
        const updated = [...prev];
        updated[index] = profile;
        return updated;
      }
      return [...prev, profile];
    });
  };

  const updateProfile = (profile: Profile) => {
    saveProfile(profile);
    setProfiles(prev => prev.map(p => p.id === profile.id ? profile : p));
  };

  const deleteProfile = (id: string) => {
    deleteProfileStorage(id);
    setProfiles(prev => prev.filter(p => p.id !== id));
  };

  return {
    profiles,
    loading,
    addProfile,
    updateProfile,
    deleteProfile,
  };
}
