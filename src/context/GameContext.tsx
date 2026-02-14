import { createContext, useContext, useReducer, useEffect, useCallback, type ReactNode } from 'react';
import type { GameProgress } from '../types/user';
import { DEFAULT_PROGRESS } from '../types/user';
import { saveProgress, loadProgress } from '../utils/storage';
import { getLevelForXP } from '../content/levels';
import { BADGES, checkBadgeEarned } from '../content/badges';
import { getToday, isYesterday, isToday } from '../utils/dateUtils';

type GameAction =
  | { type: 'ADD_XP'; amount: number }
  | { type: 'RECORD_ANSWER'; subject: string; topic: string; correct: boolean }
  | { type: 'RECORD_PERFECT_ROUND' }
  | { type: 'UPDATE_COMBO'; combo: number }
  | { type: 'COMPLETE_DAILY_CHALLENGE'; score: number }
  | { type: 'UPDATE_PLAY_TIME'; minutes: number }
  | { type: 'UPDATE_STREAK' }
  | { type: 'USE_STREAK_FREEZE' }
  | { type: 'SET_PROGRESS'; progress: GameProgress }
  | { type: 'RESET_PROGRESS' };

function gameReducer(state: GameProgress, action: GameAction): GameProgress {
  switch (action.type) {
    case 'ADD_XP': {
      const newXP = state.xp + action.amount;
      const newLevel = getLevelForXP(newXP);
      return { ...state, xp: newXP, level: newLevel };
    }
    case 'RECORD_ANSWER': {
      const { subject, topic, correct } = action;
      const subjectProgress = { ...state.subjectProgress };
      if (!subjectProgress[subject]) subjectProgress[subject] = {};
      const topicProgress = subjectProgress[subject][topic] ?? {
        questionsAnswered: 0,
        correctAnswers: 0,
        currentDifficulty: 1,
        highScore: 0,
      };
      subjectProgress[subject] = {
        ...subjectProgress[subject],
        [topic]: {
          ...topicProgress,
          questionsAnswered: topicProgress.questionsAnswered + 1,
          correctAnswers: topicProgress.correctAnswers + (correct ? 1 : 0),
        },
      };
      return {
        ...state,
        subjectProgress,
        stats: {
          ...state.stats,
          totalQuestionsAnswered: state.stats.totalQuestionsAnswered + 1,
          totalCorrect: state.stats.totalCorrect + (correct ? 1 : 0),
        },
      };
    }
    case 'RECORD_PERFECT_ROUND':
      return {
        ...state,
        stats: { ...state.stats, perfectRounds: state.stats.perfectRounds + 1 },
      };
    case 'UPDATE_COMBO': {
      const longestCombo = Math.max(state.stats.longestCombo, action.combo);
      return { ...state, stats: { ...state.stats, longestCombo } };
    }
    case 'COMPLETE_DAILY_CHALLENGE': {
      const today = getToday();
      return {
        ...state,
        dailyChallenges: {
          ...state.dailyChallenges,
          [today]: { completed: true, score: action.score },
        },
      };
    }
    case 'UPDATE_PLAY_TIME':
      return {
        ...state,
        stats: {
          ...state.stats,
          totalPlayTimeMinutes: state.stats.totalPlayTimeMinutes + action.minutes,
        },
      };
    case 'UPDATE_STREAK': {
      const today = getToday();
      const { lastPlayDate, current, longest, freezesRemaining, lastFreezeReset } = state.streak;

      if (isToday(lastPlayDate)) return state;

      let newCurrent: number;
      if (isYesterday(lastPlayDate)) {
        newCurrent = current + 1;
      } else if (lastPlayDate && !isYesterday(lastPlayDate) && freezesRemaining > 0) {
        newCurrent = current + 1;
        return {
          ...state,
          streak: {
            current: newCurrent,
            longest: Math.max(longest, newCurrent),
            lastPlayDate: today,
            freezesRemaining: freezesRemaining - 1,
            lastFreezeReset,
          },
        };
      } else {
        newCurrent = 1;
      }

      return {
        ...state,
        streak: {
          current: newCurrent,
          longest: Math.max(longest, newCurrent),
          lastPlayDate: today,
          freezesRemaining,
          lastFreezeReset,
        },
      };
    }
    case 'USE_STREAK_FREEZE':
      if (state.streak.freezesRemaining <= 0) return state;
      return {
        ...state,
        streak: {
          ...state.streak,
          freezesRemaining: state.streak.freezesRemaining - 1,
        },
      };
    case 'SET_PROGRESS':
      return action.progress;
    case 'RESET_PROGRESS':
      return DEFAULT_PROGRESS;
    default:
      return state;
  }
}

interface GameContextType {
  progress: GameProgress;
  addXP: (amount: number) => void;
  recordAnswer: (subject: string, topic: string, correct: boolean) => void;
  recordPerfectRound: () => void;
  updateCombo: (combo: number) => void;
  completeDailyChallenge: (score: number) => void;
  updatePlayTime: (minutes: number) => void;
  updateStreak: () => void;
  checkNewBadges: () => string[];
  resetProgress: () => void;
}

const GameContext = createContext<GameContextType | null>(null);

export function GameProvider({ children }: { children: ReactNode }) {
  const [progress, dispatch] = useReducer(gameReducer, null, () => loadProgress());

  useEffect(() => {
    const timeout = setTimeout(() => saveProgress(progress), 500);
    return () => clearTimeout(timeout);
  }, [progress]);

  const checkNewBadges = useCallback((): string[] => {
    const correctBySubject: Record<string, number> = {};
    for (const [subject, topics] of Object.entries(progress.subjectProgress)) {
      let total = 0;
      for (const topic of Object.values(topics)) {
        total += topic.correctAnswers;
      }
      correctBySubject[subject] = total;
    }

    const subjectsPlayed = Object.keys(progress.subjectProgress).length;
    const dailyChallengesCompleted = Object.values(progress.dailyChallenges).filter((d) => d.completed).length;

    const stats = {
      correctBySubject,
      streakDays: progress.streak.current,
      perfectRounds: progress.stats.perfectRounds,
      longestCombo: progress.stats.longestCombo,
      subjectsPlayed,
      dailyChallengesCompleted,
      totalXP: progress.xp,
    };

    const newBadges: string[] = [];
    for (const badge of BADGES) {
      if (!progress.badges.includes(badge.id) && checkBadgeEarned(badge, stats)) {
        newBadges.push(badge.id);
      }
    }

    if (newBadges.length > 0) {
      dispatch({
        type: 'SET_PROGRESS',
        progress: { ...progress, badges: [...progress.badges, ...newBadges] },
      });
    }

    return newBadges;
  }, [progress]);

  const value: GameContextType = {
    progress,
    addXP: (amount) => dispatch({ type: 'ADD_XP', amount }),
    recordAnswer: (subject, topic, correct) => dispatch({ type: 'RECORD_ANSWER', subject, topic, correct }),
    recordPerfectRound: () => dispatch({ type: 'RECORD_PERFECT_ROUND' }),
    updateCombo: (combo) => dispatch({ type: 'UPDATE_COMBO', combo }),
    completeDailyChallenge: (score) => dispatch({ type: 'COMPLETE_DAILY_CHALLENGE', score }),
    updatePlayTime: (minutes) => dispatch({ type: 'UPDATE_PLAY_TIME', minutes }),
    updateStreak: () => dispatch({ type: 'UPDATE_STREAK' }),
    checkNewBadges,
    resetProgress: () => dispatch({ type: 'RESET_PROGRESS' }),
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

export function useGame(): GameContextType {
  const ctx = useContext(GameContext);
  if (!ctx) throw new Error('useGame must be used within GameProvider');
  return ctx;
}
