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
  category: 'subject' | 'streak' | 'performance' | 'exploration' | 'dedication';
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
  | { type: 'total_xp'; amount: number }
  | { type: 'total_questions'; count: number }
  | { type: 'play_time'; minutes: number }
  | { type: 'chests_opened'; count: number };

export type ChestTier = 'bronze' | 'silver' | 'gold' | 'diamond';

export interface ChestReward {
  xpBonus: number;
  title?: string;
  cosmetic?: string;
}

export interface ChestDefinition {
  tier: ChestTier;
  name: BilingualText;
  icon: string;
  xpRange: [number, number];
  titleChance: number;
  cosmeticChance: number;
}

export interface Title {
  id: string;
  name: BilingualText;
  icon: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
}

export interface Cosmetic {
  id: string;
  name: BilingualText;
  icon: string;
  type: 'frame' | 'background';
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  cssClass: string;
}
