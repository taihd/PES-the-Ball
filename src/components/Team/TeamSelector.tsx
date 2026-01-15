import { useState, useMemo } from 'react';
import { teams, teamCategories } from '../../data/teams';
import { TeamSearch } from './TeamSearch';
import { TeamCategoryFilter } from './TeamCategoryFilter';
import { Button } from '../Shared/Button';

interface TeamSelectorProps {
  selectedTeamIds: string[];
  onSelectionChange: (teamIds: string[]) => void;
}

export function TeamSelector({ selectedTeamIds, onSelectionChange }: TeamSelectorProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const filteredTeams = useMemo(() => {
    let filtered = teams;

    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(team =>
        team.name.toLowerCase().includes(query)
      );
    }

    // Apply category filter
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(team =>
        selectedCategories.some(cat =>
          team.category.includes(cat) || team.type === cat
        )
      );
    }

    return filtered;
  }, [searchQuery, selectedCategories]);

  const handleToggleTeam = (teamId: string) => {
    if (selectedTeamIds.includes(teamId)) {
      onSelectionChange(selectedTeamIds.filter(id => id !== teamId));
    } else {
      onSelectionChange([...selectedTeamIds, teamId]);
    }
  };

  const handleSelectAll = () => {
    onSelectionChange(filteredTeams.map(t => t.id));
  };

  const handleDeselectAll = () => {
    const filteredIds = filteredTeams.map(t => t.id);
    onSelectionChange(selectedTeamIds.filter(id => !filteredIds.includes(id)));
  };

  const handleToggleCategory = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const allFilteredSelected = filteredTeams.length > 0 && 
    filteredTeams.every(t => selectedTeamIds.includes(t.id));

  return (
    <div className="space-y-4">
      <TeamSearch value={searchQuery} onChange={setSearchQuery} />
      
      <TeamCategoryFilter
        selectedCategories={selectedCategories}
        onToggleCategory={handleToggleCategory}
      />

      <div className="flex justify-between items-center">
        <div className="text-sm font-semibold text-gray-300">
          <span className="text-emerald-400">{selectedTeamIds.length}</span> of <span className="text-white">{teams.length}</span> teams selected
          {filteredTeams.length !== teams.length && (
            <span className="ml-2 text-gray-400 font-normal">
              ({filteredTeams.length} filtered)
            </span>
          )}
        </div>
        <div className="flex gap-2">
          <Button
            variant="secondary"
            size="sm"
            onClick={handleSelectAll}
            disabled={allFilteredSelected}
          >
            Select All Filtered
          </Button>
          <Button
            variant="secondary"
            size="sm"
            onClick={handleDeselectAll}
            disabled={filteredTeams.length === 0 || !allFilteredSelected}
          >
            Deselect All Filtered
          </Button>
        </div>
      </div>

      <div className="border border-slate-600 rounded-xl max-h-96 overflow-y-auto bg-slate-800/50 backdrop-blur-sm shadow-inner">
        <div className="divide-y divide-slate-700">
          {filteredTeams.map(team => (
            <label
              key={team.id}
              className="flex items-center px-4 py-3 hover:bg-emerald-500/10 cursor-pointer transition-colors group"
            >
              <input
                type="checkbox"
                checked={selectedTeamIds.includes(team.id)}
                onChange={() => handleToggleTeam(team.id)}
                className="h-5 w-5 text-emerald-500 focus:ring-emerald-500 border-slate-600 rounded-lg cursor-pointer transition-all bg-slate-700/50"
              />
              <span className="ml-3 text-sm font-medium text-gray-300 group-hover:text-emerald-400 transition-colors">{team.name}</span>
              <span className="ml-auto text-xs font-medium text-gray-400 bg-slate-700/50 px-2 py-1 rounded-full border border-slate-600">
                {teamCategories[team.category[0] as keyof typeof teamCategories] || team.type}
              </span>
            </label>
          ))}
        </div>
        {filteredTeams.length === 0 && (
          <div className="px-4 py-12 text-center">
            <div className="text-gray-500 mb-2">🔍</div>
            <div className="text-gray-400 font-medium">No teams found matching your filters.</div>
          </div>
        )}
      </div>
    </div>
  );
}
