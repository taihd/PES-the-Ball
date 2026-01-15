# PES Match Balancer

A web application to help balance PES (Pro Evolution Soccer) matches between players of different skill levels by randomly selecting teams, formations, and handicaps.

## Features

- **Profile Management**: Create and save multiple profiles with different team selections, formations, and handicap configurations
- **Team Selection**: Choose from a comprehensive list of teams including:
  - Premier League, La Liga, Serie A, Bundesliga, Ligue 1 clubs
  - National teams
  - Legendary teams
- **Search & Filter**: Quickly find teams using search and category filters
- **Formation Selection**: Randomly select tactical formations (4-4-2, 4-3-3, etc.)
- **Handicap System**: Balance matches with handicaps like:
  - No left-footed players
  - No substitutions
  - No sprint when attacking/defending
  - And many more options
- **Random Match Generation**: Generate random team, formation, and handicap combinations with re-roll capability
- **Responsive Design**: Works seamlessly on both desktop and mobile devices

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd PES
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Building for Production

To build the application for production:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Deployment to GitHub Pages

The application is configured to be deployed to GitHub Pages. Follow these steps:

1. **Initial Setup** (one-time):
   - Make sure your repository is named `PES` (or update the `base` path in `vite.config.ts`)
   - The `base` path in `vite.config.ts` is set to `/PES/` to match the repository name

2. **Deploy**:
   ```bash
   npm run deploy
   ```

   This will:
   - Build the application
   - Deploy it to the `gh-pages` branch
   - Make it available at `https://<username>.github.io/PES/`

3. **Enable GitHub Pages**:
   - Go to your repository settings on GitHub
   - Navigate to "Pages" in the sidebar
   - Under "Source", select the `gh-pages` branch
   - Save the changes

4. **Access Your App**:
   - Your app will be available at `https://<username>.github.io/PES/`

## Manual Deployment (Alternative)

If you prefer to deploy manually:

1. Build the application:
   ```bash
   npm run build
   ```

2. Copy the contents of the `dist` folder to your GitHub Pages branch or hosting service

## Project Structure

```
/
├── src/
│   ├── components/      # React components
│   │   ├── Layout/      # Header, Footer
│   │   ├── Profile/      # Profile management components
│   │   ├── Team/         # Team selection components
│   │   ├── Formation/   # Formation selection
│   │   ├── Handicap/     # Handicap selection
│   │   ├── Match/        # Match generation components
│   │   └── Shared/       # Reusable components
│   ├── data/             # Static data (teams, formations, handicaps)
│   ├── hooks/            # Custom React hooks
│   ├── pages/            # Page components
│   ├── types/            # TypeScript type definitions
│   └── utils/            # Utility functions
├── public/               # Static assets
└── dist/                 # Build output (generated)
```

## Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **React Router** - Client-side routing
- **localStorage** - Data persistence

## Usage

1. **Create a Profile**:
   - Go to the "Profiles" page
   - Click "Create New Profile"
   - Enter a profile name
   - Select teams, formations (optional), and handicaps (optional)
   - Save the profile

2. **Generate a Match**:
   - Go to the home page
   - Select a profile from the dropdown
   - Click "Generate Match"
   - View your randomly selected team, formation, and handicaps
   - Click "Roll Again" to generate a new combination

3. **Manage Profiles**:
   - Edit profiles to update team selections or settings
   - Delete profiles you no longer need

## License

This project is open source and available under the MIT License.
