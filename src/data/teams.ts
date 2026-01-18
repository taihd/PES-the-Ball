import type { Team } from '../types';

export const teams: Team[] = [
  // Premier League - Strong
  { id: 'man-city', name: 'Manchester City', category: ['premier-league', 'strong'], type: 'club' },
  { id: 'liverpool', name: 'Liverpool', category: ['premier-league', 'strong'], type: 'club' },
  { id: 'arsenal', name: 'Arsenal', category: ['premier-league', 'strong'], type: 'club' },
  { id: 'chelsea', name: 'Chelsea', category: ['premier-league', 'strong'], type: 'club' },
  { id: 'man-utd', name: 'Manchester United', category: ['premier-league', 'strong'], type: 'club' },
  { id: 'tottenham', name: 'Tottenham Hotspur', category: ['premier-league', 'strong'], type: 'club' },
  { id: 'newcastle', name: 'Newcastle United', category: ['premier-league', 'strong'], type: 'club' },
  { id: 'aston-villa', name: 'Aston Villa', category: ['premier-league', 'strong'], type: 'club' },
  
  // Premier League - Average
  { id: 'brighton', name: 'Brighton & Hove Albion', category: ['premier-league', 'average'], type: 'club' },
  { id: 'west-ham', name: 'West Ham United', category: ['premier-league', 'average'], type: 'club' },
  { id: 'crystal-palace', name: 'Crystal Palace', category: ['premier-league', 'average'], type: 'club' },
  { id: 'fulham', name: 'Fulham', category: ['premier-league', 'average'], type: 'club' },
  { id: 'wolves', name: 'Wolverhampton Wanderers', category: ['premier-league', 'average'], type: 'club' },
  { id: 'everton', name: 'Everton', category: ['premier-league', 'average'], type: 'club' },
  { id: 'brentford', name: 'Brentford', category: ['premier-league', 'average'], type: 'club' },
  { id: 'bournemouth', name: 'Bournemouth', category: ['premier-league', 'average'], type: 'club' },
  { id: 'nottingham', name: 'Nottingham Forest', category: ['premier-league', 'average'], type: 'club' },
  
  // Premier League - Weak
  { id: 'burnley', name: 'Burnley', category: ['premier-league', 'weak'], type: 'club' },
  { id: 'sheffield-utd', name: 'Sheffield United', category: ['premier-league', 'weak'], type: 'club' },
  { id: 'luton', name: 'Luton Town', category: ['premier-league', 'weak'], type: 'club' },
  { id: 'ipswich', name: 'Ipswich Town', category: ['premier-league', 'weak'], type: 'club' },
  { id: 'leicester', name: 'Leicester City', category: ['premier-league', 'weak'], type: 'club' },
  { id: 'southampton', name: 'Southampton', category: ['premier-league', 'weak'], type: 'club' },
  
  // La Liga - Strong
  { id: 'real-madrid', name: 'Real Madrid', category: ['la-liga', 'strong'], type: 'club' },
  { id: 'barcelona', name: 'Barcelona', category: ['la-liga', 'strong'], type: 'club' },
  { id: 'atletico-madrid', name: 'Atlético Madrid', category: ['la-liga', 'strong'], type: 'club' },
  
  // La Liga - Average
  { id: 'athletic-bilbao', name: 'Athletic Bilbao', category: ['la-liga', 'average'], type: 'club' },
  { id: 'valencia', name: 'Valencia', category: ['la-liga', 'average'], type: 'club' },
  { id: 'villarreal', name: 'Villarreal', category: ['la-liga', 'average'], type: 'club' },
  { id: 'sevilla', name: 'Sevilla', category: ['la-liga', 'average'], type: 'club' },
  { id: 'real-sociedad', name: 'Real Sociedad', category: ['la-liga', 'average'], type: 'club' },
  
  // La Liga - Weak
  { id: 'las-palmas', name: 'Las Palmas', category: ['la-liga', 'average'], type: 'club' },
  { id: 'rayo-vallecano', name: 'Rayo Vallecano', category: ['la-liga', 'average'], type: 'club' },
  { id: 'osasuna', name: 'Osasuna', category: ['la-liga', 'average'], type: 'club' },
  { id: 'getafe', name: 'Getafe', category: ['la-liga', 'average'], type: 'club' },
  { id: 'betis', name: 'Real Betis', category: ['la-liga', 'average'], type: 'club' },
  { id: 'girona', name: 'Girona', category: ['la-liga', 'weak'], type: 'club' },
  { id: 'mallorca', name: 'Mallorca', category: ['la-liga', 'weak'], type: 'club' },
  { id: 'celta-vigo', name: 'Celta Vigo', category: ['la-liga', 'weak'], type: 'club' },
  { id: 'cadiz', name: 'Cádiz', category: ['la-liga', 'weak'], type: 'club' },
  { id: 'alaves', name: 'Deportivo Alavés', category: ['la-liga', 'weak'], type: 'club' },
  { id: 'granada', name: 'Granada', category: ['la-liga', 'weak'], type: 'club' },
  { id: 'almeria', name: 'Almería', category: ['la-liga', 'weak'], type: 'club' },
  
  // Serie A - Strong
  { id: 'inter', name: 'Inter Milan', category: ['serie-a', 'strong'], type: 'club' },
  { id: 'juventus', name: 'Juventus', category: ['serie-a', 'strong'], type: 'club' },
  { id: 'ac-milan', name: 'AC Milan', category: ['serie-a', 'strong'], type: 'club' },
  
  // Serie A - Average
  { id: 'roma', name: 'AS Roma', category: ['serie-a', 'average'], type: 'club' },
  { id: 'atalanta', name: 'Atalanta', category: ['serie-a', 'average'], type: 'club' },
  { id: 'lazio', name: 'Lazio', category: ['serie-a', 'average'], type: 'club' },
  { id: 'napoli', name: 'Napoli', category: ['serie-a', 'average'], type: 'club' },
  { id: 'fiorentina', name: 'Fiorentina', category: ['serie-a', 'average'], type: 'club' },
  
  // Serie A - Weak
  { id: 'bologna', name: 'Bologna', category: ['serie-a', 'weak'], type: 'club' },
  { id: 'torino', name: 'Torino', category: ['serie-a', 'weak'], type: 'club' },
  { id: 'genoa', name: 'Genoa', category: ['serie-a', 'weak'], type: 'club' },
  { id: 'monza', name: 'Monza', category: ['serie-a', 'weak'], type: 'club' },
  { id: 'lecce', name: 'Lecce', category: ['serie-a', 'weak'], type: 'club' },
  { id: 'sassuolo', name: 'Sassuolo', category: ['serie-a', 'weak'], type: 'club' },
  { id: 'udinese', name: 'Udinese', category: ['serie-a', 'weak'], type: 'club' },
  { id: 'cagliari', name: 'Cagliari', category: ['serie-a', 'weak'], type: 'club' },
  { id: 'verona', name: 'Hellas Verona', category: ['serie-a', 'weak'], type: 'club' },
  { id: 'empoli', name: 'Empoli', category: ['serie-a', 'weak'], type: 'club' },
  { id: 'frosinone', name: 'Frosinone', category: ['serie-a', 'weak'], type: 'club' },
  { id: 'salernitana', name: 'Salernitana', category: ['serie-a', 'weak'], type: 'club' },
  
  // Bundesliga - Strong
  { id: 'bayern', name: 'Bayern Munich', category: ['bundesliga', 'strong'], type: 'club' },
  { id: 'leverkusen', name: 'Bayer Leverkusen', category: ['bundesliga', 'strong'], type: 'club' },
  { id: 'dortmund', name: 'Borussia Dortmund', category: ['bundesliga', 'strong'], type: 'club' },
  
  // Bundesliga - Average
  { id: 'rb-leipzig', name: 'RB Leipzig', category: ['bundesliga', 'average'], type: 'club' },
  
  // Bundesliga - Weak
  { id: 'frankfurt', name: 'Eintracht Frankfurt', category: ['bundesliga', 'weak'], type: 'club' },
  { id: 'hoffenheim', name: 'TSG Hoffenheim', category: ['bundesliga', 'weak'], type: 'club' },
  { id: 'wolfsburg', name: 'VfL Wolfsburg', category: ['bundesliga', 'weak'], type: 'club' },
  { id: 'freiburg', name: 'SC Freiburg', category: ['bundesliga', 'weak'], type: 'club' },
  { id: 'werder-bremen', name: 'Werder Bremen', category: ['bundesliga', 'weak'], type: 'club' },
  { id: 'heidenheim', name: '1. FC Heidenheim', category: ['bundesliga', 'weak'], type: 'club' },
  { id: 'augsburg', name: 'FC Augsburg', category: ['bundesliga', 'weak'], type: 'club' },
  { id: 'stuttgart', name: 'VfB Stuttgart', category: ['bundesliga', 'weak'], type: 'club' },
  { id: 'bochum', name: 'VfL Bochum', category: ['bundesliga', 'weak'], type: 'club' },
  { id: 'mainz', name: '1. FSV Mainz 05', category: ['bundesliga', 'weak'], type: 'club' },
  { id: 'union-berlin', name: '1. FC Union Berlin', category: ['bundesliga', 'weak'], type: 'club' },
  { id: 'darmstadt', name: 'SV Darmstadt 98', category: ['bundesliga', 'weak'], type: 'club' },
  { id: 'koln', name: '1. FC Köln', category: ['bundesliga', 'weak'], type: 'club' },
  
  // Ligue 1 - Strong
  { id: 'psg', name: 'Paris Saint-Germain', category: ['ligue-1', 'strong'], type: 'club' },
  
  // Ligue 1 - Average
  { id: 'monaco', name: 'AS Monaco', category: ['ligue-1', 'average'], type: 'club' },
  { id: 'marseille', name: 'Olympique Marseille', category: ['ligue-1', 'average'], type: 'club' },
  
  // Ligue 1 - Weak
  { id: 'lyon', name: 'Olympique Lyon', category: ['ligue-1', 'weak'], type: 'club' },
  { id: 'lille', name: 'Lille', category: ['ligue-1', 'weak'], type: 'club' },
  { id: 'nice', name: 'OGC Nice', category: ['ligue-1', 'weak'], type: 'club' },
  { id: 'rennes', name: 'Stade Rennais', category: ['ligue-1', 'weak'], type: 'club' },
  { id: 'lens', name: 'RC Lens', category: ['ligue-1', 'weak'], type: 'club' },
  { id: 'toulouse', name: 'Toulouse', category: ['ligue-1', 'weak'], type: 'club' },
  { id: 'reims', name: 'Stade de Reims', category: ['ligue-1', 'weak'], type: 'club' },
  { id: 'montpellier', name: 'Montpellier', category: ['ligue-1', 'weak'], type: 'club' },
  { id: 'strasbourg', name: 'Strasbourg', category: ['ligue-1', 'weak'], type: 'club' },
  { id: 'nantes', name: 'FC Nantes', category: ['ligue-1', 'weak'], type: 'club' },
  { id: 'metz', name: 'FC Metz', category: ['ligue-1', 'weak'], type: 'club' },
  { id: 'lorient', name: 'FC Lorient', category: ['ligue-1', 'weak'], type: 'club' },
  { id: 'clermont', name: 'Clermont Foot', category: ['ligue-1', 'weak'], type: 'club' },
  { id: 'le-havre', name: 'Le Havre', category: ['ligue-1', 'weak'], type: 'club' },
  { id: 'troyes', name: 'Troyes', category: ['ligue-1', 'weak'], type: 'club' },
  
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
  { id: 'serbia', name: 'Serbia', category: ['national', 'average'], type: 'national' },
  { id: 'switzerland', name: 'Switzerland', category: ['national', 'average'], type: 'national' },
  { id: 'uruguay', name: 'Uruguay', category: ['national', 'average'], type: 'national' },
  { id: 'mexico', name: 'Mexico', category: ['national', 'average'], type: 'national' },
  { id: 'usa', name: 'USA', category: ['national', 'average'], type: 'national' },
  { id: 'japan', name: 'Japan', category: ['national', 'average'], type: 'national' },
  { id: 'poland', name: 'Poland', category: ['national', 'average'], type: 'national' },
  { id: 'denmark', name: 'Denmark', category: ['national', 'average'], type: 'national' },
  { id: 'turkey', name: 'Turkey', category: ['national', 'average'], type: 'national' },
  { id: 'sweden', name: 'Sweden', category: ['national', 'average'], type: 'national' },
  { id: 'norway', name: 'Norway', category: ['national', 'average'], type: 'national' },
  { id: 'ukraine', name: 'Ukraine', category: ['national', 'average'], type: 'national' },
  
  // National Teams - Weak
  { id: 'austria', name: 'Austria', category: ['national', 'weak'], type: 'national' },
  { id: 'hungary', name: 'Hungary', category: ['national', 'weak'], type: 'national' },
  { id: 'czech-republic', name: 'Czech Republic', category: ['weak', 'average'], type: 'national' },
  { id: 'romania', name: 'Romania', category: ['national', 'weak'], type: 'national' },
  { id: 'finland', name: 'Finland', category: ['national', 'weak'], type: 'national' },
  { id: 'bulgaria', name: 'Bulgaria', category: ['national', 'weak'], type: 'national' },
  { id: 'greece', name: 'Greece', category: ['national', 'weak'], type: 'national' },
  { id: 'slovakia', name: 'Slovakia', category: ['national', 'weak'], type: 'national' },
  { id: 'slovenia', name: 'Slovenia', category: ['national', 'weak'], type: 'national' },
  { id: 'south-korea', name: 'South Korea', category: ['national', 'weak'], type: 'national' },
  { id: 'iceland', name: 'Iceland', category: ['national', 'weak'], type: 'national' },
  { id: 'wales', name: 'Wales', category: ['national', 'weak'], type: 'national' },
  { id: 'ireland', name: 'Republic of Ireland', category: ['national', 'weak'], type: 'national' },
  { id: 'scotland', name: 'Scotland', category: ['national', 'weak'], type: 'national' },
  { id: 'georgia', name: 'Georgia', category: ['national', 'weak'], type: 'national' },
  { id: 'albania', name: 'Albania', category: ['national', 'weak'], type: 'national' },
  { id: 'estonia', name: 'Estonia', category: ['national', 'weak'], type: 'national' },
  { id: 'latvia', name: 'Latvia', category: ['national', 'weak'], type: 'national' },
  { id: 'lithuania', name: 'Lithuania', category: ['national', 'weak'], type: 'national' },
  { id: 'luxembourg', name: 'Luxembourg', category: ['national', 'weak'], type: 'national' },
  { id: 'north-macedonia', name: 'North Macedonia', category: ['national', 'weak'], type: 'national' },
  { id: 'kosovo', name: 'Kosovo', category: ['national', 'weak'], type: 'national' },
  { id: 'moldova', name: 'Moldova', category: ['national', 'weak'], type: 'national' },
  { id: 'montenegro', name: 'Montenegro', category: ['national', 'weak'], type: 'national' },
  { id: 'armenia', name: 'Armenia', category: ['national', 'weak'], type: 'national' },
  { id: 'azerbaijan', name: 'Azerbaijan', category: ['national', 'weak'], type: 'national' },
  
  // Legendary National Teams
  { id: 'legendary-brazil', name: 'Brazil (Legendary)', category: ['legendary'], type: 'legendary' },
  { id: 'legendary-argentina', name: 'Argentina (Legendary)', category: ['legendary'], type: 'legendary' },
  { id: 'legendary-france', name: 'France (Legendary)', category: ['legendary'], type: 'legendary' },
  { id: 'legendary-italy', name: 'Italy (Legendary)', category: ['legendary'], type: 'legendary' },
  { id: 'legendary-germany', name: 'Germany (Legendary)', category: ['legendary'], type: 'legendary' },
  { id: 'legendary-netherlands', name: 'Netherlands (Legendary)', category: ['legendary'], type: 'legendary' },
  { id: 'legendary-spain', name: 'Spain (Legendary)', category: ['legendary'], type: 'legendary' },
  { id: 'legendary-england', name: 'England (Legendary)', category: ['legendary'], type: 'legendary' },
  { id: 'legendary-portugal', name: 'Portugal (Legendary)', category: ['legendary'], type: 'legendary' },
  
  // Legendary Club Teams
  { id: 'legendary-real-madrid', name: 'Real Madrid (Legendary)', category: ['legendary'], type: 'legendary' },
  { id: 'legendary-barcelona', name: 'Barcelona (Legendary)', category: ['legendary'], type: 'legendary' },
  { id: 'legendary-man-utd', name: 'Manchester United (Legendary)', category: ['legendary'], type: 'legendary' },
  { id: 'legendary-ac-milan', name: 'AC Milan (Legendary)', category: ['legendary'], type: 'legendary' },
  { id: 'legendary-bayern', name: 'Bayern Munich (Legendary)', category: ['legendary'], type: 'legendary' },
  { id: 'legendary-liverpool', name: 'Liverpool (Legendary)', category: ['legendary'], type: 'legendary' },
  { id: 'legendary-juventus', name: 'Juventus (Legendary)', category: ['legendary'], type: 'legendary' },
  { id: 'legendary-inter', name: 'Inter Milan (Legendary)', category: ['legendary'], type: 'legendary' },
  { id: 'legendary-arsenal', name: 'Arsenal (Legendary)', category: ['legendary'], type: 'legendary' },
  { id: 'legendary-chelsea', name: 'Chelsea (Legendary)', category: ['legendary'], type: 'legendary' },
  { id: 'legendary-atletico', name: 'Atlético Madrid (Legendary)', category: ['legendary'], type: 'legendary' },
  { id: 'legendary-dortmund', name: 'Borussia Dortmund (Legendary)', category: ['legendary'], type: 'legendary' },
  { id: 'legendary-roma', name: 'AS Roma (Legendary)', category: ['legendary'], type: 'legendary' },
  { id: 'legendary-napoli', name: 'Napoli (Legendary)', category: ['legendary'], type: 'legendary' },
  { id: 'legendary-psg', name: 'Paris Saint-Germain (Legendary)', category: ['legendary'], type: 'legendary' },
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
