import { createContext, useContext, useReducer, useEffect, type ReactNode } from 'react';
import type { UserProfile, Settings } from '../types/user';
import { DEFAULT_SETTINGS, DEFAULT_AVATAR } from '../types/user';
import { saveProfile, loadProfile, saveSettings, loadSettings } from '../utils/storage';

type UserAction =
  | { type: 'SET_PROFILE'; profile: UserProfile }
  | { type: 'UPDATE_PROFILE'; updates: Partial<UserProfile> }
  | { type: 'UPDATE_SETTINGS'; updates: Partial<Settings> }
  | { type: 'CLEAR_USER' };

interface UserState {
  profile: UserProfile | null;
  settings: Settings;
  isOnboarded: boolean;
}

function userReducer(state: UserState, action: UserAction): UserState {
  switch (action.type) {
    case 'SET_PROFILE':
      return { ...state, profile: action.profile, isOnboarded: true };
    case 'UPDATE_PROFILE':
      if (!state.profile) return state;
      return { ...state, profile: { ...state.profile, ...action.updates } };
    case 'UPDATE_SETTINGS':
      return { ...state, settings: { ...state.settings, ...action.updates } };
    case 'CLEAR_USER':
      return { profile: null, settings: DEFAULT_SETTINGS, isOnboarded: false };
    default:
      return state;
  }
}

interface UserContextType {
  profile: UserProfile | null;
  settings: Settings;
  isOnboarded: boolean;
  setProfile: (profile: UserProfile) => void;
  updateProfile: (updates: Partial<UserProfile>) => void;
  updateSettings: (updates: Partial<Settings>) => void;
  clearUser: () => void;
}

const UserContext = createContext<UserContextType | null>(null);

export function UserProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(userReducer, null, () => {
    const profile = loadProfile();
    const settings = loadSettings();
    return {
      profile,
      settings,
      isOnboarded: profile !== null,
    };
  });

  useEffect(() => {
    if (state.profile) saveProfile(state.profile);
  }, [state.profile]);

  useEffect(() => {
    saveSettings(state.settings);
  }, [state.settings]);

  const value: UserContextType = {
    profile: state.profile,
    settings: state.settings,
    isOnboarded: state.isOnboarded,
    setProfile: (profile) => dispatch({ type: 'SET_PROFILE', profile }),
    updateProfile: (updates) => dispatch({ type: 'UPDATE_PROFILE', updates }),
    updateSettings: (updates) => dispatch({ type: 'UPDATE_SETTINGS', updates }),
    clearUser: () => {
      dispatch({ type: 'CLEAR_USER' });
      localStorage.clear();
    },
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUser(): UserContextType {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error('useUser must be used within UserProvider');
  return ctx;
}

export function createDefaultProfile(name: string, klasse: 1 | 2 | 3 | 4, language: 'de' | 'en'): UserProfile {
  return {
    name,
    klasse,
    language,
    avatarConfig: DEFAULT_AVATAR,
    createdAt: new Date().toISOString(),
  };
}
