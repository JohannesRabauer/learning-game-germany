import type { AnswerRecord, GameConfig } from '../types/game';

const BASE_XP = 10;
const STREAK_BONUS = 2;
const SPEED_BONUS = 5;
const SPEED_THRESHOLD_MS = 3000;
const PERFECT_ROUND_BONUS = 50;
const DAILY_CHALLENGE_BONUS = 100;

export function calculateXPForAnswer(correct: boolean, combo: number, timeSpentMs: number): number {
  if (!correct) return 0;
  let xp = BASE_XP;
  xp += combo * STREAK_BONUS;
  if (timeSpentMs < SPEED_THRESHOLD_MS) {
    xp += SPEED_BONUS;
  }
  return xp;
}

export function calculateRoundXP(answers: AnswerRecord[], config: GameConfig): number {
  let totalXP = 0;
  let combo = 0;

  for (const answer of answers) {
    if (answer.correct) {
      totalXP += calculateXPForAnswer(true, combo, answer.timeSpent);
      combo++;
    } else {
      combo = 0;
    }
  }

  const totalCorrect = answers.filter((a) => a.correct).length;
  if (totalCorrect === answers.length && answers.length > 0) {
    totalXP += PERFECT_ROUND_BONUS;
  }

  if (config.mode === 'daily_challenge') {
    totalXP += DAILY_CHALLENGE_BONUS;
  }

  return totalXP;
}

export function calculateStars(correct: number, total: number): 1 | 2 | 3 {
  const ratio = total > 0 ? correct / total : 0;
  if (ratio >= 0.9) return 3;
  if (ratio >= 0.6) return 2;
  return 1;
}
