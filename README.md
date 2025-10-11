# 🎲 Initiative Tracker

A modern, free D&D 5e initiative tracker built with Astro, React, and Tailwind CSS. Streamline your combat encounters with AI-powered generation, drag-and-drop management, and 300+ monsters from the SRD.

## ✨ Features

### Core Functionality
- **📊 Initiative Tracking** - Automatic sorting, turn highlighting, and round counter
- **🎯 Drag & Drop** - Intuitive row reordering for initiative changes
- **⚡ Quick Adjustments** - Incrementable number inputs for fast HP/damage tracking
- **💾 Encounter Management** - Save, load, and organize unlimited encounters
- **📤 Export/Import** - Share encounters via JSON export/import

### Combat Tools
- **👹 Monster Database** - 300+ D&D 5e SRD monsters with autocomplete
- **💀 Death Saves** - Visual death saving throw tracking
- **🎭 Status Conditions** - Track all D&D 5e conditions (prone, stunned, etc.)
- **📝 Notes & Actions** - Store monster abilities and combat notes

### AI Integration
- **🤖 AI Encounter Generator** - Generate balanced encounters with GPT-4o-mini
- **🎲 20 Uses/Day** - Free AI generation with daily rate limiting
- **🚀 No Setup Required** - Works out of the box, no API keys needed

### Design
- **🌙 Dark Blue Fantasy Theme** - Professional esoteric aesthetic
- **📱 Mobile Responsive** - Works on desktop, tablet, and phone
- **⚡ Lightning Fast** - Built on Astro for instant page loads

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or pnpm

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/initiative-tracker.git
   cd initiative-tracker
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Fetch monster data:**
   ```bash
   npm run fetch-monsters
   ```

4. **Start development server:**
   ```bash
   npm run dev
   ```

5. **Open in browser:**
   ```
   http://localhost:4321
   ```

## 🎮 Usage Guide

### Basic Workflow

1. **Add Creatures** - Click "+ Add Row" to add combatants
2. **Roll Initiative** - Enter initiative values (auto-sorts)
3. **Use Monster Database** - Type in Name field for autocomplete suggestions
4. **Manage Combat** - Click "Next Turn" to advance through combat
5. **Save Encounter** - Name and save your encounter for reuse

### Quick HP Adjustments

Click any number field to reveal increment controls:
1. Focus on HP field (click or tab)
2. Set increment value (e.g., "12" for 12 damage)
3. Click `-12` or `+12` to adjust
4. Works on all numeric fields (HP, AC, Initiative, etc.)

### AI Encounter Generation

1. Click "AI Assistant" button
2. Describe your encounter (e.g., "Medium difficulty forest ambush for 4 level 3 players")
3. Click "Generate Encounter"
4. Review and adjust generated creatures
5. *Note: Limited to 20 generations per day*

### Export/Import Encounters

**Export:**
- Click "Encounters" → "Export All" to download all encounters
- Or click download icon on individual encounters

**Import:**
- Click "Encounters" → "Import"
- Select your JSON file
- Encounters are added to your library

## 🛠️ Development

### Available Scripts

```bash
npm run dev              # Start dev server (localhost:4321)
npm run build            # Build for production
npm run preview          # Preview production build
npm run fetch-monsters   # Update monster database from D&D 5e API
```

### Tech Stack

- **[Astro](https://astro.build)** - Static site framework with partial hydration
- **[React 19](https://react.dev)** - UI component library
- **[Tailwind CSS v4](https://tailwindcss.com)** - Utility-first styling
- **[@dnd-kit](https://dndkit.com)** - Drag and drop functionality
- **[Zod](https://zod.dev)** - Runtime type validation
- **[Supabase Functions](https://supabase.com/docs/guides/functions)** - Edge functions for AI proxy

### Project Structure

```
initiative-tracker/
├── src/
│   ├── components/
│   │   ├── ui/                      # Shadcn UI components
│   │   ├── InitiativeTracker.tsx   # Main tracker component
│   │   ├── IncrementableNumberInput.tsx  # Custom number input
│   │   ├── MonsterAutocomplete.tsx # Monster search component
│   │   ├── AIAssistant.tsx         # AI generation interface
│   │   ├── EncounterDrawer.tsx     # Save/load encounters
│   │   └── Footer.astro            # Site footer
│   ├── hooks/
│   │   ├── useEncounters.ts        # Encounter management
│   │   ├── useSettings.ts          # App settings
│   │   └── useKeyPress.tsx         # Keyboard shortcuts
│   ├── lib/
│   │   ├── ai-service.ts           # AI API integration
│   │   ├── encounters.ts           # Encounter utilities
│   │   └── utils.ts                # Helper functions
│   ├── pages/
│   │   ├── index.astro             # Main app page
│   │   ├── features.astro          # Features page (SEO)
│   │   ├── guide.astro             # Usage guide (SEO)
│   │   ├── faq.astro               # FAQ page (SEO)
│   │   └── about.astro             # About page (SEO)
│   ├── data/
│   │   └── monsters.json           # D&D 5e monster database
│   └── styles/
│       └── global.css              # Global styles & theme
├── public/
│   └── robots.txt                  # SEO crawler rules
├── scripts/
│   └── fetch-monsters.js           # Monster data fetcher
└── astro.config.mjs                # Astro configuration
```

## 🚀 Deployment

### Recommended: Vercel

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy automatically on push to main

### Alternative: Netlify

1. Connect your GitHub repo to [Netlify](https://netlify.com)
2. Build command: `npm run build`
3. Publish directory: `dist`

### Other Static Hosts

The app is a static site and works with any static host:
- GitHub Pages
- Cloudflare Pages
- AWS S3 + CloudFront
- Firebase Hosting

## 🔧 Configuration

### Monster Database

Monster data is fetched from the [D&D 5e API](https://www.dnd5eapi.co/). To update:

```bash
npm run fetch-monsters
```

This downloads the latest SRD monsters and saves to `src/data/monsters.json`.

### AI Integration

The app uses Supabase Edge Functions to proxy OpenAI API calls. This provides:
- No API key management for users
- Built-in rate limiting (20 requests/day)
- Free tier availability

To modify AI settings, see `src/lib/ai-service.ts`.

### Site URL

Update the site URL in `astro.config.mjs` for proper SEO:

```js
export default defineConfig({
  site: 'https://your-domain.com',
  // ...
});
```

## 📊 SEO & Content

The app includes SEO-optimized content pages:
- `/` - Main tracker with on-page content
- `/features` - Detailed feature descriptions
- `/guide` - Complete usage guide
- `/faq` - Frequently asked questions
- `/about` - Project information

All pages include:
- Proper meta tags
- Open Graph tags
- JSON-LD structured data
- Semantic HTML
- Sitemap generation

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## ⚖️ Legal

Initiative Tracker is an independent project and is not affiliated with, endorsed by, or sponsored by Wizards of the Coast.

Dungeons & Dragons, D&D, their respective logos, and Wizards of the Coast are trademarks of Wizards of the Coast LLC.

Monster data is sourced from the D&D 5e System Reference Document (SRD) under the Open Gaming License (OGL).

## 🙏 Acknowledgments

- **[D&D 5e API](https://www.dnd5eapi.co/)** - Free, open-source monster database
- **[Shadcn UI](https://ui.shadcn.com/)** - Beautiful component library
- **[OpenAI](https://openai.com)** - GPT-4o-mini for encounter generation
- **[Astro](https://astro.build)** - Amazing web framework

---

Built with ❤️ for Dungeon Masters everywhere
