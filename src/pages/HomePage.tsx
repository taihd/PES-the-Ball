import { useState } from 'react';
import type { Profile, MatchResult as MatchResultType } from '../types';
import { useProfiles } from '../hooks/useProfiles';
import { ProfileList } from '../components/Profile/ProfileList';
import { ProfileForm } from '../components/Profile/ProfileForm';
import { MatchResult } from '../components/Match/MatchResult';
import { Modal } from '../components/Shared/Modal';
import { Button } from '../components/Shared/Button';
import { generateMatch } from '../utils/randomizer';

export function HomePage() {
  const { profiles, addProfile, updateProfile, deleteProfile, loading } = useProfiles();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProfile, setEditingProfile] = useState<Profile | undefined>();
  const [matchResult, setMatchResult] = useState<MatchResultType | null>(null);
  const [showMatchResult, setShowMatchResult] = useState(false);
  const [selectedProfileForMatch, setSelectedProfileForMatch] = useState<Profile | null>(null);

  const handleCreate = () => {
    setEditingProfile(undefined);
    setIsModalOpen(true);
  };

  const handleEdit = (profile: Profile) => {
    setEditingProfile(profile);
    setIsModalOpen(true);
  };

  const handleSave = (profile: Profile) => {
    if (editingProfile) {
      updateProfile(profile);
    } else {
      addProfile(profile);
    }
    setIsModalOpen(false);
    setEditingProfile(undefined);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setEditingProfile(undefined);
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this profile?')) {
      deleteProfile(id);
    }
  };

  const handleGenerateMatch = (profile: Profile) => {
    const result = generateMatch(profile);
    if (!result) {
      alert('Selected profile has no teams. Please add teams to the profile.');
      return;
    }
    setMatchResult(result);
    setSelectedProfileForMatch(profile);
    setShowMatchResult(true);
  };

  const handleReroll = () => {
    if (selectedProfileForMatch) {
      const result = generateMatch(selectedProfileForMatch);
      if (result) {
        setMatchResult(result);
      }
    }
  };

  const handleCloseMatchResult = () => {
    setShowMatchResult(false);
    setMatchResult(null);
    setSelectedProfileForMatch(null);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
          <div className="text-gray-500 font-medium">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="flex justify-between items-center mb-8">
        <Button variant="primary" onClick={handleCreate} className="shadow-lg">
          + Create New Profile
        </Button>
      </div>

      <ProfileList
        profiles={profiles}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onGenerateMatch={handleGenerateMatch}
      />

      <Modal
        isOpen={isModalOpen}
        onClose={handleCancel}
        title={editingProfile ? 'Edit Profile' : 'Create New Profile'}
      >
        <ProfileForm
          profile={editingProfile}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      </Modal>

      {showMatchResult && matchResult && (
        <Modal
          isOpen={showMatchResult}
          onClose={handleCloseMatchResult}
          title="Match Configuration"
        >
          <MatchResult 
            result={matchResult} 
            onReroll={handleReroll} 
          />
        </Modal>
      )}
    </div>
  );
}
