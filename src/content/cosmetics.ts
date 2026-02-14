import type { Cosmetic } from '../types/reward';

export const COSMETICS: Cosmetic[] = [
  // Frames - Common
  {
    id: 'default',
    name: { de: 'Standard', en: 'Default' },
    icon: '⬜',
    type: 'frame',
    rarity: 'common',
    cssClass: 'ring-2 ring-gray-200',
  },
  {
    id: 'frame_blue',
    name: { de: 'Ozeanblau', en: 'Ocean Blue' },
    icon: '🔵',
    type: 'frame',
    rarity: 'common',
    cssClass: 'ring-3 ring-blue-400',
  },
  {
    id: 'frame_green',
    name: { de: 'Waldgrün', en: 'Forest Green' },
    icon: '🟢',
    type: 'frame',
    rarity: 'common',
    cssClass: 'ring-3 ring-green-400',
  },
  {
    id: 'frame_red',
    name: { de: 'Feuerrot', en: 'Fire Red' },
    icon: '🔴',
    type: 'frame',
    rarity: 'common',
    cssClass: 'ring-3 ring-red-400',
  },

  // Frames - Rare
  {
    id: 'frame_gold',
    name: { de: 'Goldrahmen', en: 'Gold Frame' },
    icon: '🟡',
    type: 'frame',
    rarity: 'rare',
    cssClass: 'ring-3 ring-yellow-400 shadow-lg shadow-yellow-200',
  },
  {
    id: 'frame_purple',
    name: { de: 'Mystisches Lila', en: 'Mystic Purple' },
    icon: '🟣',
    type: 'frame',
    rarity: 'rare',
    cssClass: 'ring-3 ring-purple-400 shadow-lg shadow-purple-200',
  },
  {
    id: 'frame_rainbow',
    name: { de: 'Regenbogen', en: 'Rainbow' },
    icon: '🌈',
    type: 'frame',
    rarity: 'rare',
    cssClass: 'ring-3 ring-pink-400 shadow-lg shadow-pink-200',
  },

  // Frames - Epic
  {
    id: 'frame_fire',
    name: { de: 'Flammenrahmen', en: 'Fire Frame' },
    icon: '🔥',
    type: 'frame',
    rarity: 'epic',
    cssClass: 'ring-4 ring-orange-500 shadow-xl shadow-orange-300',
  },
  {
    id: 'frame_ice',
    name: { de: 'Eisrahmen', en: 'Ice Frame' },
    icon: '❄️',
    type: 'frame',
    rarity: 'epic',
    cssClass: 'ring-4 ring-cyan-400 shadow-xl shadow-cyan-200',
  },
  {
    id: 'frame_nature',
    name: { de: 'Naturrahmen', en: 'Nature Frame' },
    icon: '🌿',
    type: 'frame',
    rarity: 'epic',
    cssClass: 'ring-4 ring-emerald-500 shadow-xl shadow-emerald-200',
  },

  // Frames - Legendary
  {
    id: 'frame_diamond',
    name: { de: 'Diamantrahmen', en: 'Diamond Frame' },
    icon: '💎',
    type: 'frame',
    rarity: 'legendary',
    cssClass: 'ring-4 ring-sky-300 shadow-xl shadow-sky-300',
  },
  {
    id: 'frame_cosmic',
    name: { de: 'Kosmisch', en: 'Cosmic' },
    icon: '🌌',
    type: 'frame',
    rarity: 'legendary',
    cssClass: 'ring-4 ring-indigo-500 shadow-xl shadow-indigo-300',
  },
  {
    id: 'frame_royal',
    name: { de: 'Königlich', en: 'Royal' },
    icon: '👑',
    type: 'frame',
    rarity: 'legendary',
    cssClass: 'ring-4 ring-amber-400 shadow-xl shadow-amber-300',
  },

  // Backgrounds - Common
  {
    id: 'bg_sky',
    name: { de: 'Himmelblau', en: 'Sky Blue' },
    icon: '☁️',
    type: 'background',
    rarity: 'common',
    cssClass: 'bg-gradient-to-br from-sky-100 to-blue-50',
  },
  {
    id: 'bg_meadow',
    name: { de: 'Wiese', en: 'Meadow' },
    icon: '🌱',
    type: 'background',
    rarity: 'common',
    cssClass: 'bg-gradient-to-br from-green-100 to-emerald-50',
  },

  // Backgrounds - Rare
  {
    id: 'bg_sunset',
    name: { de: 'Sonnenuntergang', en: 'Sunset' },
    icon: '🌅',
    type: 'background',
    rarity: 'rare',
    cssClass: 'bg-gradient-to-br from-orange-100 to-pink-50',
  },
  {
    id: 'bg_aurora',
    name: { de: 'Nordlicht', en: 'Aurora' },
    icon: '🌌',
    type: 'background',
    rarity: 'rare',
    cssClass: 'bg-gradient-to-br from-teal-100 to-purple-50',
  },

  // Backgrounds - Epic
  {
    id: 'bg_galaxy',
    name: { de: 'Galaxie', en: 'Galaxy' },
    icon: '🌠',
    type: 'background',
    rarity: 'epic',
    cssClass: 'bg-gradient-to-br from-indigo-200 to-purple-100',
  },

  // Backgrounds - Legendary
  {
    id: 'bg_dragon',
    name: { de: 'Drachenhöhle', en: 'Dragon Cave' },
    icon: '🐉',
    type: 'background',
    rarity: 'legendary',
    cssClass: 'bg-gradient-to-br from-red-200 to-amber-100',
  },
];
