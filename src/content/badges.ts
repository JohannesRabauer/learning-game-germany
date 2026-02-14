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
    id: 'math_intermediate',
    name: { de: 'Mathe-Held', en: 'Math Hero' },
    description: { de: '100 Matheaufgaben richtig', en: '100 math questions correct' },
    icon: '🧮',
    category: 'subject',
    condition: { type: 'questions_correct', subject: 'math', count: 100 },
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
    id: 'math_master',
    name: { de: 'Mathe-Legende', en: 'Math Legend' },
    description: { de: '500 Matheaufgaben richtig', en: '500 math questions correct' },
    icon: '🏛️',
    category: 'subject',
    condition: { type: 'questions_correct', subject: 'math', count: 500 },
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
    id: 'deutsch_intermediate',
    name: { de: 'Wort-Künstler', en: 'Word Artist' },
    description: { de: '100 Deutschaufgaben richtig', en: '100 German questions correct' },
    icon: '🖋️',
    category: 'subject',
    condition: { type: 'questions_correct', subject: 'deutsch', count: 100 },
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
    id: 'deutsch_master',
    name: { de: 'Wort-Meister', en: 'Word Master' },
    description: { de: '500 Deutschaufgaben richtig', en: '500 German questions correct' },
    icon: '📜',
    category: 'subject',
    condition: { type: 'questions_correct', subject: 'deutsch', count: 500 },
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
    id: 'sachunterricht_intermediate',
    name: { de: 'Natur-Kenner', en: 'Nature Expert' },
    description: { de: '100 Sachunterricht-Aufgaben richtig', en: '100 science questions correct' },
    icon: '🌳',
    category: 'subject',
    condition: { type: 'questions_correct', subject: 'sachunterricht', count: 100 },
  },
  {
    id: 'sachunterricht_pro',
    name: { de: 'Natur-Experte', en: 'Nature Pro' },
    description: { de: '200 Sachunterricht-Aufgaben richtig', en: '200 science questions correct' },
    icon: '🔬',
    category: 'subject',
    condition: { type: 'questions_correct', subject: 'sachunterricht', count: 200 },
  },
  {
    id: 'sachunterricht_master',
    name: { de: 'Natur-Genie', en: 'Nature Genius' },
    description: { de: '500 Sachunterricht-Aufgaben richtig', en: '500 science questions correct' },
    icon: '🧬',
    category: 'subject',
    condition: { type: 'questions_correct', subject: 'sachunterricht', count: 500 },
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
  {
    id: 'streak_60',
    name: { de: '60-Tage-Titan', en: '60-Day Titan' },
    description: { de: '60 Tage hintereinander gelernt', en: '60 days learning in a row' },
    icon: '💫',
    category: 'streak',
    condition: { type: 'streak_days', days: 60 },
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
    id: 'perfect_10',
    name: { de: 'Fehlerfrei', en: 'Flawless' },
    description: { de: '10 perfekte Runden', en: '10 perfect rounds' },
    icon: '✨',
    category: 'performance',
    condition: { type: 'perfect_rounds', count: 10 },
  },
  {
    id: 'perfect_25',
    name: { de: 'Perfektion', en: 'Perfection' },
    description: { de: '25 perfekte Runden', en: '25 perfect rounds' },
    icon: '🎯',
    category: 'performance',
    condition: { type: 'perfect_rounds', count: 25 },
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
  {
    id: 'combo_50',
    name: { de: 'Unbesiegbar', en: 'Invincible' },
    description: { de: '50 richtige Antworten hintereinander', en: '50 correct answers in a row' },
    icon: '🛡️',
    category: 'performance',
    condition: { type: 'combo', count: 50 },
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
    id: 'daily_30',
    name: { de: 'Tagesaufgaben-Profi', en: 'Daily Challenge Pro' },
    description: { de: '30 Tagesaufgaben geschafft', en: '30 daily challenges completed' },
    icon: '🗓️',
    category: 'exploration',
    condition: { type: 'daily_challenges', count: 30 },
  },
  {
    id: 'xp_1000',
    name: { de: 'XP-Sammler', en: 'XP Collector' },
    description: { de: '1.000 XP gesammelt', en: 'Collected 1,000 XP' },
    icon: '💰',
    category: 'exploration',
    condition: { type: 'total_xp', amount: 1000 },
  },
  {
    id: 'xp_5000',
    name: { de: 'XP-Jäger', en: 'XP Hunter' },
    description: { de: '5.000 XP gesammelt', en: 'Collected 5,000 XP' },
    icon: '💎',
    category: 'exploration',
    condition: { type: 'total_xp', amount: 5000 },
  },
  {
    id: 'xp_10000',
    name: { de: 'XP-Meister', en: 'XP Master' },
    description: { de: '10.000 XP gesammelt', en: 'Collected 10,000 XP' },
    icon: '👑',
    category: 'exploration',
    condition: { type: 'total_xp', amount: 10000 },
  },
  {
    id: 'xp_25000',
    name: { de: 'XP-König', en: 'XP King' },
    description: { de: '25.000 XP gesammelt', en: 'Collected 25,000 XP' },
    icon: '🏰',
    category: 'exploration',
    condition: { type: 'total_xp', amount: 25000 },
  },
  {
    id: 'xp_50000',
    name: { de: 'XP-Legende', en: 'XP Legend' },
    description: { de: '50.000 XP gesammelt', en: 'Collected 50,000 XP' },
    icon: '🌠',
    category: 'exploration',
    condition: { type: 'total_xp', amount: 50000 },
  },

  // Dedication badges
  {
    id: 'questions_100',
    name: { de: 'Fleißig', en: 'Diligent' },
    description: { de: '100 Fragen beantwortet', en: '100 questions answered' },
    icon: '📝',
    category: 'dedication',
    condition: { type: 'total_questions', count: 100 },
  },
  {
    id: 'questions_500',
    name: { de: 'Wissensdurstig', en: 'Knowledge Seeker' },
    description: { de: '500 Fragen beantwortet', en: '500 questions answered' },
    icon: '📚',
    category: 'dedication',
    condition: { type: 'total_questions', count: 500 },
  },
  {
    id: 'questions_1000',
    name: { de: 'Lernmaschine', en: 'Learning Machine' },
    description: { de: '1.000 Fragen beantwortet', en: '1,000 questions answered' },
    icon: '🤖',
    category: 'dedication',
    condition: { type: 'total_questions', count: 1000 },
  },
  {
    id: 'time_60',
    name: { de: 'Ausdauernd', en: 'Persistent' },
    description: { de: '1 Stunde gespielt', en: '1 hour of play time' },
    icon: '⏰',
    category: 'dedication',
    condition: { type: 'play_time', minutes: 60 },
  },
  {
    id: 'time_300',
    name: { de: 'Marathonläufer', en: 'Marathon Runner' },
    description: { de: '5 Stunden gespielt', en: '5 hours of play time' },
    icon: '🏃',
    category: 'dedication',
    condition: { type: 'play_time', minutes: 300 },
  },
  {
    id: 'chest_hunter',
    name: { de: 'Schatzjäger', en: 'Treasure Hunter' },
    description: { de: '10 Schatztruhen geöffnet', en: '10 treasure chests opened' },
    icon: '🗝️',
    category: 'dedication',
    condition: { type: 'chests_opened', count: 10 },
  },
  {
    id: 'chest_master',
    name: { de: 'Schatzmeister', en: 'Treasure Master' },
    description: { de: '50 Schatztruhen geöffnet', en: '50 treasure chests opened' },
    icon: '🏴‍☠️',
    category: 'dedication',
    condition: { type: 'chests_opened', count: 50 },
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
  totalQuestions: number;
  playTimeMinutes: number;
  chestsOpened: number;
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
    case 'total_questions':
      return stats.totalQuestions >= c.count;
    case 'play_time':
      return stats.playTimeMinutes >= c.minutes;
    case 'chests_opened':
      return stats.chestsOpened >= c.count;
    default:
      return false;
  }
}
