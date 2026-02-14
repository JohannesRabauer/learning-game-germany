import type { UserProfile, GameProgress, Settings } from '../types/user';
import { DEFAULT_PROGRESS, DEFAULT_SETTINGS } from '../types/user';

const STORAGE_KEYS = {
  USER_PROFILE: 'kluge_eule_user_profile',
  GAME_PROGRESS: 'kluge_eule_game_progress',
  SETTINGS: 'kluge_eule_settings',
  DATA_VERSION: 'kluge_eule_data_version',
} as const;

const DATA_VERSION = 1;

export function saveProfile(profile: UserProfile): void {
  try {
    localStorage.setItem(STORAGE_KEYS.USER_PROFILE, JSON.stringify(profile));
  } catch (e) {
    console.warn('Failed to save profile:', e);
  }
}

export function loadProfile(): UserProfile | null {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.USER_PROFILE);
    return data ? JSON.parse(data) : null;
  } catch {
    return null;
  }
}

export function saveProgress(progress: GameProgress): void {
  try {
    localStorage.setItem(STORAGE_KEYS.GAME_PROGRESS, JSON.stringify(progress));
  } catch (e) {
    console.warn('Failed to save progress:', e);
  }
}

export function loadProgress(): GameProgress {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.GAME_PROGRESS);
    return data ? JSON.parse(data) : DEFAULT_PROGRESS;
  } catch {
    return DEFAULT_PROGRESS;
  }
}

export function saveSettings(settings: Settings): void {
  try {
    localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
  } catch (e) {
    console.warn('Failed to save settings:', e);
  }
}

export function loadSettings(): Settings {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.SETTINGS);
    return data ? { ...DEFAULT_SETTINGS, ...JSON.parse(data) } : DEFAULT_SETTINGS;
  } catch {
    return DEFAULT_SETTINGS;
  }
}

export function clearAllData(): void {
  Object.values(STORAGE_KEYS).forEach((key) => {
    localStorage.removeItem(key);
  });
}

export function exportAllData(): string {
  return JSON.stringify({
    profile: loadProfile(),
    progress: loadProgress(),
    settings: loadSettings(),
    version: DATA_VERSION,
    exportedAt: new Date().toISOString(),
  }, null, 2);
}

export function importAllData(jsonString: string): boolean {
  try {
    const data = JSON.parse(jsonString);
    if (!data.profile || !data.progress) return false;
    saveProfile(data.profile);
    saveProgress(data.progress);
    if (data.settings) saveSettings(data.settings);
    localStorage.setItem(STORAGE_KEYS.DATA_VERSION, String(data.version || DATA_VERSION));
    return true;
  } catch {
    return false;
  }
}
