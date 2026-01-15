import type { Team } from '../types';

export const teams: Team[] = [
  // Premier League - Strong
  { id: 'man-city', name: 'Manchester City', category: ['premier-league', 'strong'], type: 'club' },
  { id: 'liverpool', name: 'Liverpool', category: ['premier-league', 'strong'], type: 'club' },
  { id: 'arsenal', name: 'Arsenal', category: ['premier-league', 'strong'], type: 'club' },
  { id: 'chelsea', name: 'Chelsea', category: ['premier-league', 'strong'], type: 'club' },
  { id: 'man-utd', name: 'Manchester United', category: ['premier-league', 'strong'], type: 'club' },
  { id: 'tottenham', name: 'Tottenham Hotspur', category: ['premier-league', 'strong'], type: 'club' },
  
  // Premier League - Average
  { id: 'newcastle', name: 'Newcastle United', category: ['premier-league', 'average'], type: 'club' },
  { id: 'brighton', name: 'Brighton & Hove Albion', category: ['premier-league', 'average'], type: 'club' },
  { id: 'west-ham', name: 'West Ham United', category: ['premier-league', 'average'], type: 'club' },
  { id: 'aston-villa', name: 'Aston Villa', category: ['premier-league', 'average'], type: 'club' },
  { id: 'crystal-palace', name: 'Crystal Palace', category: ['premier-league', 'average'], type: 'club' },
  { id: 'fulham', name: 'Fulham', category: ['premier-league', 'average'], type: 'club' },
  { id: 'wolves', name: 'Wolverhampton Wanderers', category: ['premier-league', 'average'], type: 'club' },
  { id: 'everton', name: 'Everton', category: ['premier-league', 'average'], type: 'club' },
  
  // Premier League - Weak
  { id: 'burnley', name: 'Burnley', category: ['premier-league', 'weak'], type: 'club' },
  { id: 'sheffield-utd', name: 'Sheffield United', category: ['premier-league', 'weak'], type: 'club' },
  { id: 'luton', name: 'Luton Town', category: ['premier-league', 'weak'], type: 'club' },
  { id: 'nottingham', name: 'Nottingham Forest', category: ['premier-league', 'weak'], type: 'club' },
  { id: 'bournemouth', name: 'Bournemouth', category: ['premier-league', 'weak'], type: 'club' },
  
  // La Liga - Strong
  { id: 'real-madrid', name: 'Real Madrid', category: ['la-liga', 'strong'], type: 'club' },
  { id: 'barcelona', name: 'Barcelona', category: ['la-liga', 'strong'], type: 'club' },
  { id: 'atletico-madrid', name: 'Atlético Madrid', category: ['la-liga', 'strong'], type: 'club' },
  { id: 'sevilla', name: 'Sevilla', category: ['la-liga', 'strong'], type: 'club' },
  
  // La Liga - Average
  { id: 'valencia', name: 'Valencia', category: ['la-liga', 'average'], type: 'club' },
  { id: 'real-sociedad', name: 'Real Sociedad', category: ['la-liga', 'average'], type: 'club' },
  { id: 'villarreal', name: 'Villarreal', category: ['la-liga', 'average'], type: 'club' },
  { id: 'athletic-bilbao', name: 'Athletic Bilbao', category: ['la-liga', 'average'], type: 'club' },
  { id: 'betis', name: 'Real Betis', category: ['la-liga', 'average'], type: 'club' },
  
  // La Liga - Weak
  { id: 'getafe', name: 'Getafe', category: ['la-liga', 'weak'], type: 'club' },
  { id: 'alaves', name: 'Deportivo Alavés', category: ['la-liga', 'weak'], type: 'club' },
  { id: 'cadiz', name: 'Cádiz', category: ['la-liga', 'weak'], type: 'club' },
  
  // Serie A - Strong
  { id: 'inter', name: 'Inter Milan', category: ['serie-a', 'strong'], type: 'club' },
  { id: 'juventus', name: 'Juventus', category: ['serie-a', 'strong'], type: 'club' },
  { id: 'ac-milan', name: 'AC Milan', category: ['serie-a', 'strong'], type: 'club' },
  { id: 'napoli', name: 'Napoli', category: ['serie-a', 'strong'], type: 'club' },
  { id: 'roma', name: 'AS Roma', category: ['serie-a', 'strong'], type: 'club' },
  
  // Serie A - Average
  { id: 'atalanta', name: 'Atalanta', category: ['serie-a', 'average'], type: 'club' },
  { id: 'lazio', name: 'Lazio', category: ['serie-a', 'average'], type: 'club' },
  { id: 'fiorentina', name: 'Fiorentina', category: ['serie-a', 'average'], type: 'club' },
  { id: 'bologna', name: 'Bologna', category: ['serie-a', 'average'], type: 'club' },
  
  // Serie A - Weak
  { id: 'empoli', name: 'Empoli', category: ['serie-a', 'weak'], type: 'club' },
  { id: 'salernitana', name: 'Salernitana', category: ['serie-a', 'weak'], type: 'club' },
  
  // Bundesliga - Strong
  { id: 'bayern', name: 'Bayern Munich', category: ['bundesliga', 'strong'], type: 'club' },
  { id: 'dortmund', name: 'Borussia Dortmund', category: ['bundesliga', 'strong'], type: 'club' },
  { id: 'rb-leipzig', name: 'RB Leipzig', category: ['bundesliga', 'strong'], type: 'club' },
  { id: 'leverkusen', name: 'Bayer Leverkusen', category: ['bundesliga', 'strong'], type: 'club' },
  
  // Bundesliga - Average
  { id: 'frankfurt', name: 'Eintracht Frankfurt', category: ['bundesliga', 'average'], type: 'club' },
  { id: 'wolfsburg', name: 'VfL Wolfsburg', category: ['bundesliga', 'average'], type: 'club' },
  { id: 'hoffenheim', name: 'TSG Hoffenheim', category: ['bundesliga', 'average'], type: 'club' },
  
  // Bundesliga - Weak
  { id: 'bochum', name: 'VfL Bochum', category: ['bundesliga', 'weak'], type: 'club' },
  { id: 'darmstadt', name: 'SV Darmstadt 98', category: ['bundesliga', 'weak'], type: 'club' },
  
  // Ligue 1 - Strong
  { id: 'psg', name: 'Paris Saint-Germain', category: ['ligue-1', 'strong'], type: 'club' },
  { id: 'monaco', name: 'AS Monaco', category: ['ligue-1', 'strong'], type: 'club' },
  { id: 'marseille', name: 'Olympique Marseille', category: ['ligue-1', 'strong'], type: 'club' },
  { id: 'lyon', name: 'Olympique Lyon', category: ['ligue-1', 'strong'], type: 'club' },
  
  // Ligue 1 - Average
  { id: 'lille', name: 'Lille', category: ['ligue-1', 'average'], type: 'club' },
  { id: 'nice', name: 'OGC Nice', category: ['ligue-1', 'average'], type: 'club' },
  { id: 'rennes', name: 'Stade Rennais', category: ['ligue-1', 'average'], type: 'club' },
  
  // Ligue 1 - Weak
  { id: 'clermont', name: 'Clermont Foot', category: ['ligue-1', 'weak'], type: 'club' },
  { id: 'lorient', name: 'FC Lorient', category: ['ligue-1', 'weak'], type: 'club' },
  
  // National Teams - Strong
  { id: 'brazil', name: 'Brazil', category: ['national', 'strong'], type: 'national' },
  { id: 'argentina', name: 'Argentina', category: ['national', 'strong'], type: 'national' },
  { id: 'france', name: 'France', category: ['national', 'strong'], type: 'national' },
  { id: 'spain', name: 'Spain', category: ['national', 'strong'], type: 'national' },
  { id: 'england', name: 'England', category: ['national', 'strong'], type: 'national' },
  { id: 'germany', name: 'Germany', category: ['national', 'strong'], type: 'national' },
  { id: 'portugal', name: 'Portugal', category: ['national', 'strong'], type: 'national' },
  { id: 'italy', name: 'Italy', category: ['national', 'strong'], type: 'national' },
  { id: 'netherlands', name: 'Netherlands', category: ['national', 'strong'], type: 'national' },
  { id: 'belgium', name: 'Belgium', category: ['national', 'strong'], type: 'national' },
  
  // National Teams - Average
  { id: 'croatia', name: 'Croatia', category: ['national', 'average'], type: 'national' },
  { id: 'uruguay', name: 'Uruguay', category: ['national', 'average'], type: 'national' },
  { id: 'mexico', name: 'Mexico', category: ['national', 'average'], type: 'national' },
  { id: 'japan', name: 'Japan', category: ['national', 'average'], type: 'national' },
  { id: 'south-korea', name: 'South Korea', category: ['national', 'average'], type: 'national' },
  { id: 'poland', name: 'Poland', category: ['national', 'average'], type: 'national' },
  { id: 'switzerland', name: 'Switzerland', category: ['national', 'average'], type: 'national' },
  { id: 'denmark', name: 'Denmark', category: ['national', 'average'], type: 'national' },
  
  // National Teams - Weak
  { id: 'iceland', name: 'Iceland', category: ['national', 'weak'], type: 'national' },
  { id: 'wales', name: 'Wales', category: ['national', 'weak'], type: 'national' },
  { id: 'ireland', name: 'Republic of Ireland', category: ['national', 'weak'], type: 'national' },
  { id: 'scotland', name: 'Scotland', category: ['national', 'weak'], type: 'national' },
  
  // Legendary Teams
  { id: 'legendary-brazil', name: 'Brazil (Legendary)', category: ['legendary'], type: 'legendary' },
  { id: 'legendary-argentina', name: 'Argentina (Legendary)', category: ['legendary'], type: 'legendary' },
  { id: 'legendary-france', name: 'France (Legendary)', category: ['legendary'], type: 'legendary' },
  { id: 'legendary-italy', name: 'Italy (Legendary)', category: ['legendary'], type: 'legendary' },
  { id: 'legendary-germany', name: 'Germany (Legendary)', category: ['legendary'], type: 'legendary' },
  { id: 'legendary-netherlands', name: 'Netherlands (Legendary)', category: ['legendary'], type: 'legendary' },
  { id: 'legendary-spain', name: 'Spain (Legendary)', category: ['legendary'], type: 'legendary' },
  { id: 'legendary-england', name: 'England (Legendary)', category: ['legendary'], type: 'legendary' },
];

// Category definitions for filtering
export const teamCategories = {
  'premier-league': 'Premier League',
  'la-liga': 'La Liga',
  'serie-a': 'Serie A',
  'bundesliga': 'Bundesliga',
  'ligue-1': 'Ligue 1',
  'national': 'National Teams',
  'legendary': 'Legendary Teams',
  'strong': 'Strong Teams',
  'average': 'Average Teams',
  'weak': 'Weak Teams',
  'club': 'Clubs',
};
