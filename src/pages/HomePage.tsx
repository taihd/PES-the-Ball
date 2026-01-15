import { useProfiles } from '../hooks/useProfiles';
import { MatchGenerator } from '../components/Match/MatchGenerator';

export function HomePage() {
  const { profiles, loading } = useProfiles();

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="text-gray-500">Loading...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Generate Your Match</h1>
      <MatchGenerator profiles={profiles} />
    </div>
  );
}
