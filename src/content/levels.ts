import type { Level } from '../types/reward';

export const LEVELS: Level[] = [
  { level: 1, title: { de: 'Anfänger', en: 'Beginner' }, xpRequired: 0 },
  { level: 2, title: { de: 'Entdecker', en: 'Explorer' }, xpRequired: 200 },
  { level: 3, title: { de: 'Forscher', en: 'Researcher' }, xpRequired: 500 },
  { level: 4, title: { de: 'Lernprofi', en: 'Learning Pro' }, xpRequired: 1000 },
  { level: 5, title: { de: 'Schlaukopf', en: 'Smarty' }, xpRequired: 2000 },
  { level: 6, title: { de: 'Wissensheld', en: 'Knowledge Hero' }, xpRequired: 3500 },
  { level: 7, title: { de: 'Bücherwurm', en: 'Bookworm' }, xpRequired: 5500 },
  { level: 8, title: { de: 'Denker', en: 'Thinker' }, xpRequired: 8000 },
  { level: 9, title: { de: 'Experte', en: 'Expert' }, xpRequired: 11000 },
  { level: 10, title: { de: 'Champion', en: 'Champion' }, xpRequired: 15000 },
  { level: 11, title: { de: 'Genie', en: 'Genius' }, xpRequired: 20000 },
  { level: 12, title: { de: 'Professor', en: 'Professor' }, xpRequired: 27000 },
  { level: 13, title: { de: 'Großmeister', en: 'Grand Master' }, xpRequired: 35000 },
  { level: 14, title: { de: 'Legende', en: 'Legend' }, xpRequired: 45000 },
  { level: 15, title: { de: 'Meister des Wissens', en: 'Master of Knowledge' }, xpRequired: 50000 },
  { level: 16, title: { de: 'Weiser', en: 'Sage' }, xpRequired: 58000 },
  { level: 17, title: { de: 'Gelehrter', en: 'Scholar' }, xpRequired: 67000 },
  { level: 18, title: { de: 'Orakel', en: 'Oracle' }, xpRequired: 77000 },
  { level: 19, title: { de: 'Erleuchteter', en: 'Enlightened' }, xpRequired: 88000 },
  { level: 20, title: { de: 'Titan', en: 'Titan' }, xpRequired: 100000 },
  { level: 21, title: { de: 'Phönix', en: 'Phoenix' }, xpRequired: 115000 },
  { level: 22, title: { de: 'Drache', en: 'Dragon' }, xpRequired: 132000 },
  { level: 23, title: { de: 'Unsterblicher', en: 'Immortal' }, xpRequired: 150000 },
  { level: 24, title: { de: 'Göttergleich', en: 'Godlike' }, xpRequired: 175000 },
  { level: 25, title: { de: 'Ewiger Gelehrter', en: 'Eternal Scholar' }, xpRequired: 200000 },
];

export function getLevelForXP(xp: number): number {
  for (let i = LEVELS.length - 1; i >= 0; i--) {
    if (xp >= LEVELS[i].xpRequired) return LEVELS[i].level;
  }
  return 1;
}

export function getXPForNextLevel(currentLevel: number): number {
  const next = LEVELS.find((l) => l.level === currentLevel + 1);
  return next ? next.xpRequired : LEVELS[LEVELS.length - 1].xpRequired;
}

export function getLevelProgress(xp: number, currentLevel: number): number {
  const currentLevelXP = LEVELS.find((l) => l.level === currentLevel)?.xpRequired ?? 0;
  const nextLevelXP = getXPForNextLevel(currentLevel);
  if (nextLevelXP <= currentLevelXP) return 1;
  return (xp - currentLevelXP) / (nextLevelXP - currentLevelXP);
}
