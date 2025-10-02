# 🎲 Initiative Tracker

A modern, AI-powered D&D initiative tracker built with Astro, React, and Tailwind CSS.

## ✨ Features

- **📊 Initiative Tracking** - Drag-and-drop row reordering, turn management
- **🤖 AI Integration** - Generate encounters with OpenAI GPT-4 or Google Gemini
- **👹 Monster Database** - 500+ D&D monsters with autocomplete search
- **💾 Encounter Management** - Save and load encounters locally
- **🔐 Encrypted Storage** - Secure API key storage
- **📱 Responsive Design** - Works on desktop and mobile
- **🎨 Cyberpunk Theme** - Beautiful dark UI with neon accents

## 🚀 Quick Start

1. **Clone and install:**

   ```bash
   git clone <your-repo>
   cd initiative-tracker
   npm install
   ```

2. **Set up environment variables:**

   ```bash
   cp .env.example .env.local
   ```

   Edit `.env.local` and add your encryption key:

   ```bash
   VITE_ENCRYPTION_KEY=your-super-secret-encryption-key-change-this-in-production
   ```

3. **Generate monster data:**

   ```bash
   npm run fetch-monsters
   ```

4. **Start development server:**
   ```bash
   npm run dev
   ```

## 🔐 Security Setup

### AES-256 Encryption (Required)

The app encrypts user API keys in localStorage using military-grade AES-256 encryption:

```bash
# Generate a secure random key (32+ characters recommended)
VITE_ENCRYPTION_KEY=your-super-secret-encryption-key-change-this-in-production
```

**Security Features:**

- 🔐 **AES-256-CBC encryption** - Military-grade encryption standard
- 🛡️ **PBKDF2 key derivation** - 10,000 iterations for key security
- 🔒 **Random IV per encryption** - Prevents pattern analysis
- ✅ **API keys encrypted before storage**
- ✅ **Encryption key not accessible to users**
- ✅ **XSS protection** - encrypted data useless without key
- ✅ **Browser extension safe** - can't read encrypted data

### API Keys (Optional)

Users can add their own API keys in Settings:

- **OpenAI API Key** - For GPT-4o-mini
- **Google Gemini API Key** - For Gemini 1.5 Flash

## 🎮 Usage

### Basic Initiative Tracking

1. Add creatures to the table
2. Set initiative rolls
3. Click "Next Turn" to advance combat
4. Use "Reset Combat" to start over

### AI Encounter Generation

1. Configure AI model in Settings
2. Describe your encounter in the textarea
3. Click "Generate Encounter"
4. Review generated creatures and combat mechanics

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
- **OpenAI/Gemini** - AI integration

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

### Environment Variables

```bash
# Required
VITE_ENCRYPTION_KEY=your-encryption-key

# Optional (for demo mode)
VITE_DEMO_OPENAI_KEY=your-demo-openai-key
VITE_DEMO_GEMINI_KEY=your-demo-gemini-key
```

### Monster Data

Monster data is fetched from the D&D 5e API and cached locally. Run `npm run fetch-monsters` to update.

## 🚀 Deployment

### Static Hosting (Recommended)

Deploy to any static hosting service:

- **Vercel** - `vercel --prod`
- **Netlify** - `netlify deploy --prod`
- **GitHub Pages** - Configure in repository settings

### Environment Variables in Production

Set `VITE_ENCRYPTION_KEY` in your hosting platform's environment variables.

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
- **OpenAI & Google** - AI capabilities
- **Astro Team** - Amazing framework
