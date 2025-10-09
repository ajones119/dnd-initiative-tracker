# 🎲 Initiative Tracker

A modern, AI-powered D&D initiative tracker built with Astro, React, and Tailwind CSS.

## ✨ Features

- **📊 Initiative Tracking** - Drag-and-drop row reordering, turn management
- **🤖 AI Integration** - Generate encounters with OpenAI GPT-4o-mini (always available!)
- **👹 Monster Database** - 500+ D&D monsters with autocomplete search
- **💾 Encounter Management** - Save and load encounters locally
- **📱 Responsive Design** - Works on desktop and mobile
- **🎨 Cyberpunk Theme** - Beautiful dark UI with neon accents
- **🚀 No Setup Required** - AI features work out of the box with rate limiting

## 🚀 Quick Start

1. **Clone and install:**

   ```bash
   git clone <your-repo>
   cd initiative-tracker
   npm install
   ```

2. **Generate monster data:**

   ```bash
   npm run fetch-monsters
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

## 🤖 AI Features

AI encounter generation is **always available** with no setup required! The app uses a Supabase edge function to provide OpenAI GPT-4o-mini integration with built-in rate limiting for fair usage.

## 🎮 Usage

### Basic Initiative Tracking

1. Add creatures to the table
2. Set initiative rolls
3. Click "Next Turn" to advance combat
4. Use "Reset Combat" to start over

### AI Encounter Generation

1. Describe your encounter in the textarea (no setup required!)
2. Click "Generate Encounter"
3. Review generated creatures and combat mechanics
4. AI Assistant button for quick creature additions

### Monster Search

- Type in the Name column to search 500+ D&D monsters
- Select from autocomplete to auto-fill stats
- View monster actions in the Notes popup

### Encounter Management

- Name your encounter above the table
- Click "Encounters" to save/load encounters
- All data stored locally in your browser

## 🛠️ Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run fetch-monsters # Update monster database
```

### Tech Stack

- **Astro** - Static site generator
- **React** - UI components
- **Tailwind CSS** - Styling
- **TanStack Table** - Data table
- **@dnd-kit** - Drag and drop
- **Zod** - Schema validation
- **Supabase Functions** - AI integration via OpenAI

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # ShadCN UI components
│   ├── InitiativeTracker.tsx
│   ├── MonsterAutocomplete.tsx
│   ├── AIAssistant.tsx
│   └── SettingsDrawer.tsx
├── lib/                # Utilities and services
│   ├── encryption.ts   # Local storage encryption
│   ├── ai-service.ts   # AI API integration
│   └── settings.ts     # Settings schemas
├── hooks/              # Custom React hooks
├── data/               # Static monster data
└── pages/              # Astro pages
```

## 🔧 Configuration

### Monster Data

Monster data is fetched from the D&D 5e API and cached locally. Run `npm run fetch-monsters` to update.

## 🚀 Deployment

### Static Hosting (Recommended)

Deploy to any static hosting service:

- **Vercel** - `vercel --prod`
- **Netlify** - `netlify deploy --prod`
- **GitHub Pages** - Configure in repository settings

### Supabase Edge Functions

The app uses Supabase edge functions for AI integration. Make sure to deploy the `openai-chat-proxy` function to your Supabase project.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details.

## 🙏 Acknowledgments

- **D&D 5e API** - Monster data source
- **ShadCN UI** - Beautiful component library
- **OpenAI** - AI capabilities via Supabase edge functions
- **Astro Team** - Amazing framework
