# CLAUDE.md

## Project Overview

**Kluge Eule** (Clever Owl) is a gamified educational web application for German elementary school (Grundschule) students. It covers Math, German Language, and Science across grades 1-4 with game mechanics including XP, badges, streaks, and levels.

**Live URL:** https://johannesrabauer.github.io/learning-game-germany/

## Tech Stack

- **Framework:** React 19 with TypeScript ~5.9 (strict mode)
- **Build:** Vite 7 with `@vitejs/plugin-react`
- **Styling:** Tailwind CSS 4 via `@tailwindcss/vite` plugin
- **Routing:** React Router v7 (`react-router-dom`)
- **State:** React Context + `useReducer` (no external state library)
- **i18n:** i18next with German (de) and English (en) locales
- **Animations:** Motion (Framer Motion) 12, react-canvas-confetti
- **Audio:** Howler.js
- **Drag & Drop:** @dnd-kit (core + sortable)
- **Icons:** Lucide React
- **Deployment:** GitHub Pages via GitHub Actions

## Commands

```bash
npm run dev       # Start Vite dev server
npm run build     # TypeScript type-check (tsc -b) then Vite build
npm run lint      # ESLint across the project
npm run preview   # Preview production build locally
```

The `postbuild` script copies `dist/index.html` to `dist/404.html` for SPA routing on GitHub Pages.

## Project Structure

```
src/
├── main.tsx                    # React entry point
├── App.tsx                     # Router setup, context providers
├── index.css                   # Global styles (Tailwind imports)
├── pages/                      # Route-level page components
│   ├── HomePage.tsx            # Dashboard / main menu
│   ├── SubjectPage.tsx         # Subject & game mode selection
│   ├── GamePage.tsx            # Core game logic
│   ├── OnboardingPage.tsx      # First-run setup wizard
│   ├── ProfilePage.tsx         # User stats display
│   ├── TrophyRoomPage.tsx      # Badge/trophy showcase
│   ├── DailyChallengePage.tsx  # Daily challenge mode
│   └── SettingsPage.tsx        # App preferences
├── components/
│   ├── layout/                 # AppShell, Navbar, BottomNav
│   ├── common/                 # Reusable UI (Modal, BigButton, Timer, etc.)
│   ├── game/                   # Game components (QuizCard, MathFlash, WordBuilder, DragDropArea, etc.)
│   └── rewards/                # LevelUpModal, BadgeUnlock, BadgeGrid
├── context/                    # React Context providers
│   ├── UserContext.tsx          # Profile, settings, onboarding state
│   ├── GameContext.tsx          # XP, level, badges, streaks, progress
│   └── SoundContext.tsx         # Audio playback management
├── hooks/                      # Custom hooks (useTimer, useConfetti)
├── types/                      # TypeScript type definitions
│   ├── question.ts             # 7 question type variants
│   ├── user.ts                 # Profile, progress, settings types
│   ├── game.ts                 # Game state, mode, result types
│   └── reward.ts               # Badge and level types
├── utils/                      # Utility modules
│   ├── storage.ts              # localStorage persistence
│   ├── scoring.ts              # XP and star calculations
│   ├── questionGenerator.ts    # Dynamic math question generation
│   ├── dateUtils.ts            # Date/streak helpers
│   ├── exportImport.ts         # Data export/import as JSON
│   └── shuffle.ts              # Array shuffling
├── content/                    # Static game content
│   ├── levels.ts               # 15 progression levels
│   ├── badges.ts               # 21 achievement badges
│   └── questions/              # Question banks by subject & grade
│       ├── math/               # klasse1.ts through klasse4.ts
│       ├── deutsch/            # klasse1.ts through klasse4.ts
│       └── sachunterricht/     # klasse1-2.ts, klasse3-4.ts, index.ts
└── i18n/
    ├── config.ts               # i18next setup with language detection
    └── locales/
        ├── de/                 # German: common, game, subjects, rewards
        └── en/                 # English: common, game, subjects, rewards
```

## Architecture

### Routing

Routes are defined in `App.tsx` using React Router. The app uses `BrowserRouter` with `basename="/learning-game-germany"`.

| Path | Page | Description |
|------|------|-------------|
| `/` | HomePage | Dashboard with subject cards |
| `/subject/:subject` | SubjectPage | Game mode selection for a subject |
| `/game/:subject/:mode` | GamePage | Active game session |
| `/profile` | ProfilePage | User statistics |
| `/trophies` | TrophyRoomPage | Badge collection |
| `/daily` | DailyChallengePage | Daily challenge |
| `/settings` | SettingsPage | Preferences |

Unonboarded users see `OnboardingPage` instead of routes.

### State Management

Three context providers wrap the app in `App.tsx`:

1. **UserProvider** (`UserContext.tsx`) - User profile (name, class, avatar, language) and settings. Actions: `SET_PROFILE`, `UPDATE_PROFILE`, `UPDATE_SETTINGS`, `CLEAR_USER`.
2. **GameProvider** (`GameContext.tsx`) - Game progress (XP, level, badges, streaks, per-subject stats). Uses `useReducer` with 10+ action types. State is debounce-saved to localStorage (500ms).
3. **SoundProvider** (`SoundContext.tsx`) - Howler.js audio playback. Sound effects: correct, wrong, click, levelup, streak, tick.

### Data Persistence

All state is stored in localStorage under these keys:
- `kluge_eule_user_profile`
- `kluge_eule_game_progress`
- `kluge_eule_settings`
- `kluge_eule_language`
- `kluge_eule_data_version`

Users can export/import their data as JSON via `utils/exportImport.ts`.

### Game Content

**Subjects:** `math`, `deutsch`, `sachunterricht`
**Grades (Klasse):** 1, 2, 3, 4
**Difficulty levels:** 1, 2, 3

**Question types (7):** `multiple_choice`, `true_false`, `number_input`, `drag_sort`, `word_build`, `fill_blank`, `match_pairs`

**Game modes (5):** `quick_round`, `sort_game`, `math_flash`, `word_builder`, `daily_challenge`

Math questions can be dynamically generated via `utils/questionGenerator.ts`. Static questions are in `content/questions/`.

### Internationalization

Configured in `src/i18n/config.ts`. Four translation namespaces: `common`, `game`, `subjects`, `rewards`. Language auto-detected from browser, stored in localStorage. All user-facing strings should use `useTranslation()` from `react-i18next`.

## Code Conventions

### TypeScript

- Strict mode enabled with `noUnusedLocals`, `noUnusedParameters`, `noFallthroughCasesInSwitch`
- Target: ES2022, Module: ESNext
- All types defined in `src/types/` - use the existing type system, don't create ad-hoc types
- Use discriminated unions for question types (discriminant: `type` field)

### Components

- Functional components only (no class components)
- Pages in `src/pages/`, reusable components in `src/components/` organized by domain
- Layout components (AppShell, Navbar, BottomNav) wrap page content
- Use Motion (`motion` package) for animations, not CSS transitions
- Use Lucide React for icons

### Styling

- Tailwind CSS utility classes exclusively - no CSS modules or styled-components
- Custom subject-related color classes: `text-math`/`bg-math`, `text-deutsch`/`bg-deutsch`, `text-sachunterricht`/`bg-sachunterricht`, `bg-xp`
- Mobile-first responsive design using Tailwind breakpoints (`md:`, `lg:`)
- Font: Nunito (loaded from Google Fonts in `index.html`)

### Linting

- ESLint 9 flat config (`eslint.config.js`)
- Extends: `js.configs.recommended`, `tseslint.configs.recommended`, `reactHooks.configs.flat.recommended`, `reactRefresh.configs.vite`
- Files: `**/*.{ts,tsx}`
- Ignores: `dist/`

### State Patterns

- Use React Context + `useReducer` for shared state, not prop drilling
- Custom context hooks provide type-safe access (e.g., `useUser()`, `useGame()`)
- Side effects (localStorage sync) handled in `useEffect` within providers
- No external state management libraries

## Build & Deployment

The GitHub Actions workflow (`.github/workflows/deploy.yml`) deploys to GitHub Pages on pushes to `main`.

Pipeline: checkout -> Node 22 setup -> `npm ci` -> `npm run build` -> upload `dist/` artifact -> deploy to Pages.

The Vite config sets `base: '/learning-game-germany/'` for correct asset paths on GitHub Pages.

## Adding Content

### New Questions

Add question objects to the appropriate file in `src/content/questions/<subject>/klasse<N>.ts`. Each question must conform to one of the 7 types defined in `src/types/question.ts` and include: `id`, `type`, `subject`, `klasse`, `difficulty`, `topic`, plus type-specific fields.

### New Badges

Add to `src/content/badges.ts`. Each badge needs: `id`, `name` (de/en), `description` (de/en), `icon` (emoji), `category`, and an unlock `condition` matching the `BadgeCondition` type in `src/types/reward.ts`.

### New Levels

Add to `src/content/levels.ts`. Each level has a `level` number, bilingual `title`, and `xpRequired` threshold.

### New Translations

Add keys to both `src/i18n/locales/de/<namespace>.json` and `src/i18n/locales/en/<namespace>.json`. Always provide both German and English translations.
