import type { BilingualText } from './question';

export interface Level {
  level: number;
  title: BilingualText;
  xpRequired: number;
}

export interface Badge {
  id: string;
  name: BilingualText;
  description: BilingualText;
  icon: string;
  category: 'subject' | 'streak' | 'performance' | 'exploration';
  condition: BadgeCondition;
}

export type BadgeCondition =
  | { type: 'questions_correct'; subject?: string; count: number }
  | { type: 'streak_days'; days: number }
  | { type: 'perfect_rounds'; count: number }
  | { type: 'combo'; count: number }
  | { type: 'subjects_played'; count: number }
  | { type: 'daily_challenges'; count: number }
  | { type: 'speed_round'; correctInTime: number; timeSeconds: number }
  | { type: 'total_xp'; amount: number };
