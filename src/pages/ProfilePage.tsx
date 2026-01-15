import { useState } from 'react';
import type { Profile } from '../types';
import { useProfiles } from '../hooks/useProfiles';
import { ProfileList } from '../components/Profile/ProfileList';
import { ProfileForm } from '../components/Profile/ProfileForm';
import { Modal } from '../components/Shared/Modal';
import { Button } from '../components/Shared/Button';

export function ProfilePage() {
  const { profiles, addProfile, updateProfile, deleteProfile, loading } = useProfiles();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProfile, setEditingProfile] = useState<Profile | undefined>();

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

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="text-gray-500">Loading...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Profiles</h1>
        <Button variant="primary" onClick={handleCreate}>
          Create New Profile
        </Button>
      </div>

      <ProfileList
        profiles={profiles}
        onEdit={handleEdit}
        onDelete={handleDelete}
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
    </div>
  );
}
