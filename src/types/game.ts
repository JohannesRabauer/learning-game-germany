import type { Subject, Klasse, Question } from './question';
import type { ChestTier, ChestReward } from './reward';

export type GameMode = 'quick_round' | 'sort_game' | 'math_flash' | 'word_builder' | 'daily_challenge';

export interface GameConfig {
  mode: GameMode;
  subject: Subject;
  klasse: Klasse;
  questionCount: number;
  timeLimit?: number;
}

export interface GameState {
  config: GameConfig;
  questions: Question[];
  currentQuestionIndex: number;
  answers: AnswerRecord[];
  combo: number;
  maxCombo: number;
  startTime: number;
  isActive: boolean;
  isPaused: boolean;
}

export interface AnswerRecord {
  questionId: string;
  correct: boolean;
  timeSpent: number;
  answer: string;
}

export interface GameResult {
  config: GameConfig;
  answers: AnswerRecord[];
  totalCorrect: number;
  totalQuestions: number;
  maxCombo: number;
  totalTime: number;
  xpEarned: number;
  stars: 1 | 2 | 3;
  newBadges: string[];
  leveledUp: boolean;
  previousLevel: number;
  newLevel: number;
  chestTier: ChestTier;
  chestReward: ChestReward | null;
}
