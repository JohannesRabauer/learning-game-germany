import type { Badge } from '../types/reward';

export const BADGES: Badge[] = [
  // Subject mastery
  {
    id: 'math_beginner',
    name: { de: 'Mathe-Starter', en: 'Math Starter' },
    description: { de: '50 Matheaufgaben richtig', en: '50 math questions correct' },
    icon: '🔢',
    category: 'subject',
    condition: { type: 'questions_correct', subject: 'math', count: 50 },
  },
  {
    id: 'math_pro',
    name: { de: 'Mathe-König', en: 'Math King' },
    description: { de: '200 Matheaufgaben richtig', en: '200 math questions correct' },
    icon: '👑',
    category: 'subject',
    condition: { type: 'questions_correct', subject: 'math', count: 200 },
  },
  {
    id: 'deutsch_beginner',
    name: { de: 'Wort-Entdecker', en: 'Word Explorer' },
    description: { de: '50 Deutschaufgaben richtig', en: '50 German questions correct' },
    icon: '📖',
    category: 'subject',
    condition: { type: 'questions_correct', subject: 'deutsch', count: 50 },
  },
  {
    id: 'deutsch_pro',
    name: { de: 'Wort-Zauberer', en: 'Word Wizard' },
    description: { de: '200 Deutschaufgaben richtig', en: '200 German questions correct' },
    icon: '🪄',
    category: 'subject',
    condition: { type: 'questions_correct', subject: 'deutsch', count: 200 },
  },
  {
    id: 'sachunterricht_beginner',
    name: { de: 'Natur-Forscher', en: 'Nature Explorer' },
    description: { de: '50 Sachunterricht-Aufgaben richtig', en: '50 science questions correct' },
    icon: '🌿',
    category: 'subject',
    condition: { type: 'questions_correct', subject: 'sachunterricht', count: 50 },
  },
  {
    id: 'sachunterricht_pro',
    name: { de: 'Natur-Experte', en: 'Nature Expert' },
    description: { de: '200 Sachunterricht-Aufgaben richtig', en: '200 science questions correct' },
    icon: '🔬',
    category: 'subject',
    condition: { type: 'questions_correct', subject: 'sachunterricht', count: 200 },
  },

  // Streak badges
  {
    id: 'streak_3',
    name: { de: '3-Tage-Flamme', en: '3-Day Flame' },
    description: { de: '3 Tage hintereinander gelernt', en: '3 days learning in a row' },
    icon: '🔥',
    category: 'streak',
    condition: { type: 'streak_days', days: 3 },
  },
  {
    id: 'streak_7',
    name: { de: '7-Tage-Stern', en: '7-Day Star' },
    description: { de: '7 Tage hintereinander gelernt', en: '7 days learning in a row' },
    icon: '⭐',
    category: 'streak',
    condition: { type: 'streak_days', days: 7 },
  },
  {
    id: 'streak_14',
    name: { de: '14-Tage-Held', en: '14-Day Hero' },
    description: { de: '14 Tage hintereinander gelernt', en: '14 days learning in a row' },
    icon: '🦸',
    category: 'streak',
    condition: { type: 'streak_days', days: 14 },
  },
  {
    id: 'streak_30',
    name: { de: '30-Tage-Legende', en: '30-Day Legend' },
    description: { de: '30 Tage hintereinander gelernt', en: '30 days learning in a row' },
    icon: '🏆',
    category: 'streak',
    condition: { type: 'streak_days', days: 30 },
  },

  // Performance badges
  {
    id: 'perfect_1',
    name: { de: 'Perfektionist', en: 'Perfectionist' },
    description: { de: 'Erste perfekte Runde (10/10)', en: 'First perfect round (10/10)' },
    icon: '💯',
    category: 'performance',
    condition: { type: 'perfect_rounds', count: 1 },
  },
  {
    id: 'perfect_5',
    name: { de: 'Super-Perfektionist', en: 'Super Perfectionist' },
    description: { de: '5 perfekte Runden', en: '5 perfect rounds' },
    icon: '🌟',
    category: 'performance',
    condition: { type: 'perfect_rounds', count: 5 },
  },
  {
    id: 'combo_10',
    name: { de: 'Blitzschnell', en: 'Lightning Fast' },
    description: { de: '10 richtige Antworten hintereinander', en: '10 correct answers in a row' },
    icon: '⚡',
    category: 'performance',
    condition: { type: 'combo', count: 10 },
  },
  {
    id: 'combo_20',
    name: { de: 'Unaufhaltsam', en: 'Unstoppable' },
    description: { de: '20 richtige Antworten hintereinander', en: '20 correct answers in a row' },
    icon: '🚀',
    category: 'performance',
    condition: { type: 'combo', count: 20 },
  },

  // Exploration badges
  {
    id: 'all_subjects',
    name: { de: 'Weltreisender', en: 'World Traveler' },
    description: { de: 'Alle drei Fächer gespielt', en: 'Played all three subjects' },
    icon: '🌍',
    category: 'exploration',
    condition: { type: 'subjects_played', count: 3 },
  },
  {
    id: 'daily_7',
    name: { de: 'Tagesaufgaben-Fan', en: 'Daily Challenge Fan' },
    description: { de: '7 Tagesaufgaben geschafft', en: '7 daily challenges completed' },
    icon: '📅',
    category: 'exploration',
    condition: { type: 'daily_challenges', count: 7 },
  },
  {
    id: 'xp_1000',
    name: { de: 'XP-Sammler', en: 'XP Collector' },
    description: { de: '1000 XP gesammelt', en: 'Collected 1000 XP' },
    icon: '💰',
    category: 'exploration',
    condition: { type: 'total_xp', amount: 1000 },
  },
  {
    id: 'xp_10000',
    name: { de: 'XP-Meister', en: 'XP Master' },
    description: { de: '10.000 XP gesammelt', en: 'Collected 10,000 XP' },
    icon: '💎',
    category: 'exploration',
    condition: { type: 'total_xp', amount: 10000 },
  },
];

export function checkBadgeEarned(badge: Badge, stats: {
  correctBySubject: Record<string, number>;
  streakDays: number;
  perfectRounds: number;
  longestCombo: number;
  subjectsPlayed: number;
  dailyChallengesCompleted: number;
  totalXP: number;
}): boolean {
  const c = badge.condition;
  switch (c.type) {
    case 'questions_correct':
      return (stats.correctBySubject[c.subject ?? ''] ?? 0) >= c.count;
    case 'streak_days':
      return stats.streakDays >= c.days;
    case 'perfect_rounds':
      return stats.perfectRounds >= c.count;
    case 'combo':
      return stats.longestCombo >= c.count;
    case 'subjects_played':
      return stats.subjectsPlayed >= c.count;
    case 'daily_challenges':
      return stats.dailyChallengesCompleted >= c.count;
    case 'total_xp':
      return stats.totalXP >= c.amount;
    default:
      return false;
  }
}
