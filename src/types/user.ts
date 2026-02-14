import type { Klasse } from './question';

export interface AvatarConfig {
  hairStyle: number;
  hairColor: number;
  eyeStyle: number;
  skinColor: number;
  shirtColor: number;
}

export interface UserProfile {
  name: string;
  klasse: Klasse;
  avatarConfig: AvatarConfig;
  language: 'de' | 'en';
  createdAt: string;
}

export interface StreakData {
  current: number;
  longest: number;
  lastPlayDate: string;
  freezesRemaining: number;
  lastFreezeReset: string;
}

export interface SubjectTopicProgress {
  questionsAnswered: number;
  correctAnswers: number;
  currentDifficulty: number;
  highScore: number;
}

export interface DailyChallengeResult {
  completed: boolean;
  score: number;
}

export interface GameProgress {
  xp: number;
  level: number;
  badges: string[];
  streak: StreakData;
  subjectProgress: Record<string, Record<string, SubjectTopicProgress>>;
  dailyChallenges: Record<string, DailyChallengeResult>;
  stats: {
    totalQuestionsAnswered: number;
    totalCorrect: number;
    totalPlayTimeMinutes: number;
    longestCombo: number;
    perfectRounds: number;
    chestsOpened: number;
  };
  unlockedTitles: string[];
  unlockedCosmetics: string[];
  activeTitle: string;
  activeFrame: string;
}

export interface Settings {
  soundEnabled: boolean;
  soundVolume: number;
  timerMode: 'relaxed' | 'standard' | 'challenge';
  reducedMotion: boolean;
}

export const DEFAULT_AVATAR: AvatarConfig = {
  hairStyle: 0,
  hairColor: 0,
  eyeStyle: 0,
  skinColor: 0,
  shirtColor: 0,
};

export const DEFAULT_SETTINGS: Settings = {
  soundEnabled: true,
  soundVolume: 0.7,
  timerMode: 'standard',
  reducedMotion: false,
};

export const DEFAULT_PROGRESS: GameProgress = {
  xp: 0,
  level: 1,
  badges: [],
  streak: {
    current: 0,
    longest: 0,
    lastPlayDate: '',
    freezesRemaining: 1,
    lastFreezeReset: new Date().toISOString().slice(0, 10),
  },
  subjectProgress: {},
  dailyChallenges: {},
  stats: {
    totalQuestionsAnswered: 0,
    totalCorrect: 0,
    totalPlayTimeMinutes: 0,
    longestCombo: 0,
    perfectRounds: 0,
    chestsOpened: 0,
  },
  unlockedTitles: [],
  unlockedCosmetics: [],
  activeTitle: '',
  activeFrame: 'default',
};
