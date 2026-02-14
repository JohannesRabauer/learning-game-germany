import type { ChestDefinition, ChestTier, ChestReward } from '../types/reward';
import { TITLES } from './titles';
import { COSMETICS } from './cosmetics';

export const CHEST_DEFINITIONS: Record<ChestTier, ChestDefinition> = {
  bronze: {
    tier: 'bronze',
    name: { de: 'Bronzetruhe', en: 'Bronze Chest' },
    icon: '🪙',
    xpRange: [5, 15],
    titleChance: 0.05,
    cosmeticChance: 0.05,
  },
  silver: {
    tier: 'silver',
    name: { de: 'Silbertruhe', en: 'Silver Chest' },
    icon: '🥈',
    xpRange: [15, 35],
    titleChance: 0.12,
    cosmeticChance: 0.12,
  },
  gold: {
    tier: 'gold',
    name: { de: 'Goldtruhe', en: 'Gold Chest' },
    icon: '🥇',
    xpRange: [30, 60],
    titleChance: 0.25,
    cosmeticChance: 0.25,
  },
  diamond: {
    tier: 'diamond',
    name: { de: 'Diamanttruhe', en: 'Diamond Chest' },
    icon: '💠',
    xpRange: [50, 100],
    titleChance: 0.5,
    cosmeticChance: 0.5,
  },
};

export function getChestTier(stars: 1 | 2 | 3, isPerfect: boolean): ChestTier {
  if (isPerfect) return 'diamond';
  if (stars === 3) return 'gold';
  if (stars === 2) return 'silver';
  return 'bronze';
}

function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function rollChestReward(
  tier: ChestTier,
  ownedTitles: string[],
  ownedCosmetics: string[],
): ChestReward {
  const def = CHEST_DEFINITIONS[tier];
  const reward: ChestReward = {
    xpBonus: randomInt(def.xpRange[0], def.xpRange[1]),
  };

  const availableTitles = TITLES.filter((t) => !ownedTitles.includes(t.id));
  if (availableTitles.length > 0 && Math.random() < def.titleChance) {
    const rarityWeights: Record<string, number> = {
      common: tier === 'bronze' ? 0.8 : tier === 'silver' ? 0.5 : 0.2,
      rare: tier === 'bronze' ? 0.15 : tier === 'silver' ? 0.35 : 0.3,
      epic: tier === 'bronze' ? 0.04 : tier === 'silver' ? 0.12 : 0.3,
      legendary: tier === 'bronze' ? 0.01 : tier === 'silver' ? 0.03 : 0.2,
    };
    const filtered = availableTitles.filter(() => true);
    const weighted = filtered.map((t) => ({
      item: t,
      weight: rarityWeights[t.rarity] ?? 0.1,
    }));
    const totalWeight = weighted.reduce((sum, w) => sum + w.weight, 0);
    let roll = Math.random() * totalWeight;
    for (const w of weighted) {
      roll -= w.weight;
      if (roll <= 0) {
        reward.title = w.item.id;
        break;
      }
    }
    if (!reward.title && weighted.length > 0) {
      reward.title = pickRandom(filtered).id;
    }
  }

  const availableCosmetics = COSMETICS.filter((c) => !ownedCosmetics.includes(c.id));
  if (availableCosmetics.length > 0 && Math.random() < def.cosmeticChance) {
    const rarityWeights: Record<string, number> = {
      common: tier === 'bronze' ? 0.8 : tier === 'silver' ? 0.5 : 0.2,
      rare: tier === 'bronze' ? 0.15 : tier === 'silver' ? 0.35 : 0.3,
      epic: tier === 'bronze' ? 0.04 : tier === 'silver' ? 0.12 : 0.3,
      legendary: tier === 'bronze' ? 0.01 : tier === 'silver' ? 0.03 : 0.2,
    };
    const weighted = availableCosmetics.map((c) => ({
      item: c,
      weight: rarityWeights[c.rarity] ?? 0.1,
    }));
    const totalWeight = weighted.reduce((sum, w) => sum + w.weight, 0);
    let roll = Math.random() * totalWeight;
    for (const w of weighted) {
      roll -= w.weight;
      if (roll <= 0) {
        reward.cosmetic = w.item.id;
        break;
      }
    }
    if (!reward.cosmetic && weighted.length > 0) {
      reward.cosmetic = pickRandom(availableCosmetics).id;
    }
  }

  return reward;
}
