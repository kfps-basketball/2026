# KFPS Basketball Tournament Website 2026

A modern basketball tournament website built with React, TypeScript, and Tailwind CSS.

## Features

- 📱 Responsive design (mobile-friendly)
- 🎯 Clean navigation with `/2026` base path for yearly tournaments
- 🏀 Team management with filterable divisions
- 👥 Player roster with search functionality
- 📅 Interactive schedule with daily tabs
- 📊 Live standings and results
- 📄 Document downloads section

## Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **React Router v6** - Client-side routing (browser mode, not hash)
- **Tailwind CSS** - Styling
- **GitHub Pages** - Hosting

## Project Structure

```
kfps-basketball/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages deployment
├── src/
│   ├── components/
│   │   ├── Header.tsx          # Navigation header
│   │   ├── Footer.tsx          # Footer component
│   │   └── Layout.tsx          # Main layout wrapper
│   ├── pages/
│   │   ├── Home.tsx            # Home page
│   │   ├── EventInfo.tsx       # Event information
│   │   ├── Teams.tsx           # Teams listing
│   │   ├── Players.tsx         # Player roster
│   │   ├── Schedule.tsx        # Match schedule
│   │   ├── Results.tsx         # Results and standings
│   │   └── Contact.tsx         # Contact page
│   ├── data/
│   │   ├── teams.json          # Team data
│   │   ├── players.json        # Player data
│   │   ├── schedule.json       # Schedule data
│   │   └── results.json        # Results data
│   ├── App.tsx                 # Main app component
│   ├── main.tsx                # Entry point
│   └── index.css               # Global styles
├── public/                     # Static assets (PDFs, images)
├── index.html
├── vite.config.ts
├── tailwind.config.js
└── package.json
```

## Routes

All routes are under `/2026`:

- `/2026/` - Home page
- `/2026/event-info` - Tournament information
- `/2026/teams` - Participating teams
- `/2026/players` - Player roster
- `/2026/schedule` - Match schedule
- `/2026/results` - Results and standings
- `/2026/contact` - Contact information

## Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## Data Management

All tournament data is stored in JSON files under `src/data/`:

- **teams.json** - Team information (name, school, division, logo)
- **players.json** - Player roster (name, number, team, position, grade)
- **schedule.json** - Match schedule (time, venue, teams)
- **results.json** - Standings and match results

To update content, simply edit these JSON files. The structure is self-explanatory.

## Deployment

The site automatically deploys to GitHub Pages when you push to the `main` branch.

**Setup GitHub Pages:**

1. Go to repository Settings → Pages
2. Source: GitHub Actions
3. The workflow will automatically build and deploy

**Live URL:** `https://kfps-basketball.github.io/2026`

## Customization

### Changing Colors

Edit [tailwind.config.js](tailwind.config.js:9-11):

```js
theme: {
  extend: {
    colors: {
      primary: '#4254f4', // Change this color
    },
  },
},
```

### Adding Images

Place images in the `public/` folder and reference them as `/image-name.png` in your code.

### Adding PDFs

Place PDF files in the `public/` folder and link to them in [EventInfo.tsx](src/pages/EventInfo.tsx).

## Future Years

For future tournaments (e.g., 2027), simply:
1. Update the `basename` in [main.tsx](src/main.tsx:9) to `/2027`
2. Update data files with new tournament information
3. The URL structure will be `https://kfps-basketball.github.io/2027/*`

## License

© 2026 KFPS Basketball Tournament. All rights reserved.
