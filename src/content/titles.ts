import type { Title } from '../types/reward';

export const TITLES: Title[] = [
  // Common titles
  { id: 'lernheld', name: { de: 'Lernheld', en: 'Learning Hero' }, icon: '🦸', rarity: 'common' },
  { id: 'zahlenkuenstler', name: { de: 'Zahlenkünstler', en: 'Number Artist' }, icon: '🎨', rarity: 'common' },
  { id: 'buecherwurm', name: { de: 'Bücherwurm', en: 'Bookworm' }, icon: '🐛', rarity: 'common' },
  { id: 'wissenssammler', name: { de: 'Wissenssammler', en: 'Knowledge Collector' }, icon: '🧩', rarity: 'common' },
  { id: 'sternenjaeger', name: { de: 'Sternenjäger', en: 'Star Hunter' }, icon: '🌟', rarity: 'common' },
  { id: 'blitzdenker', name: { de: 'Blitzdenker', en: 'Quick Thinker' }, icon: '⚡', rarity: 'common' },

  // Rare titles
  { id: 'meisterschueler', name: { de: 'Meisterschüler', en: 'Master Student' }, icon: '🎓', rarity: 'rare' },
  { id: 'wissenskrieger', name: { de: 'Wissenskrieger', en: 'Knowledge Warrior' }, icon: '⚔️', rarity: 'rare' },
  { id: 'quizchampion', name: { de: 'Quizchampion', en: 'Quiz Champion' }, icon: '🏅', rarity: 'rare' },
  { id: 'raetselkoenig', name: { de: 'Rätselkönig', en: 'Puzzle King' }, icon: '👑', rarity: 'rare' },
  { id: 'gehirnakrobat', name: { de: 'Gehirnakrobat', en: 'Brain Acrobat' }, icon: '🤸', rarity: 'rare' },

  // Epic titles
  { id: 'eulenkoenig', name: { de: 'Eulenkönig', en: 'Owl King' }, icon: '🦉', rarity: 'epic' },
  { id: 'zeitreisender', name: { de: 'Zeitreisender', en: 'Time Traveler' }, icon: '🕰️', rarity: 'epic' },
  { id: 'schatzhüter', name: { de: 'Schatzhüter', en: 'Treasure Guardian' }, icon: '🛡️', rarity: 'epic' },
  { id: 'sternenmage', name: { de: 'Sternenmage', en: 'Star Mage' }, icon: '🔮', rarity: 'epic' },

  // Legendary titles
  { id: 'drachenbezwinger', name: { de: 'Drachenbezwinger', en: 'Dragon Tamer' }, icon: '🐉', rarity: 'legendary' },
  { id: 'kosmischer_gelehrter', name: { de: 'Kosmischer Gelehrter', en: 'Cosmic Scholar' }, icon: '🌌', rarity: 'legendary' },
  { id: 'unsterblicher_weise', name: { de: 'Unsterblicher Weise', en: 'Immortal Sage' }, icon: '🏛️', rarity: 'legendary' },
];

export const RARITY_COLORS: Record<string, string> = {
  common: 'text-gray-600',
  rare: 'text-blue-500',
  epic: 'text-purple-500',
  legendary: 'text-amber-500',
};

export const RARITY_BG: Record<string, string> = {
  common: 'bg-gray-50 border-gray-200',
  rare: 'bg-blue-50 border-blue-200',
  epic: 'bg-purple-50 border-purple-200',
  legendary: 'bg-gradient-to-r from-amber-50 to-yellow-50 border-amber-300',
};

export const RARITY_LABELS: Record<string, { de: string; en: string }> = {
  common: { de: 'Gewöhnlich', en: 'Common' },
  rare: { de: 'Selten', en: 'Rare' },
  epic: { de: 'Episch', en: 'Epic' },
  legendary: { de: 'Legendär', en: 'Legendary' },
};
