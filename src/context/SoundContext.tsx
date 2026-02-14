import { createContext, useContext, useCallback, useRef, type ReactNode } from 'react';
import { Howl } from 'howler';
import { useUser } from './UserContext';

type SoundName = 'correct' | 'wrong' | 'click' | 'levelup' | 'streak' | 'tick';

const SOUND_PATHS: Record<SoundName, string> = {
  correct: '/learning-game-germany/sounds/correct.mp3',
  wrong: '/learning-game-germany/sounds/wrong.mp3',
  click: '/learning-game-germany/sounds/click.mp3',
  levelup: '/learning-game-germany/sounds/levelup.mp3',
  streak: '/learning-game-germany/sounds/streak.mp3',
  tick: '/learning-game-germany/sounds/tick.mp3',
};

interface SoundContextType {
  playSound: (name: SoundName) => void;
}

const SoundContext = createContext<SoundContextType | null>(null);

export function SoundProvider({ children }: { children: ReactNode }) {
  const { settings } = useUser();
  const soundCache = useRef<Map<SoundName, Howl>>(new Map());

  const playSound = useCallback(
    (name: SoundName) => {
      if (!settings.soundEnabled) return;

      let howl = soundCache.current.get(name);
      if (!howl) {
        howl = new Howl({
          src: [SOUND_PATHS[name]],
          volume: settings.soundVolume,
          preload: true,
        });
        soundCache.current.set(name, howl);
      } else {
        howl.volume(settings.soundVolume);
      }
      howl.play();
    },
    [settings.soundEnabled, settings.soundVolume],
  );

  return <SoundContext.Provider value={{ playSound }}>{children}</SoundContext.Provider>;
}

export function useSound(): SoundContextType {
  const ctx = useContext(SoundContext);
  if (!ctx) throw new Error('useSound must be used within SoundProvider');
  return ctx;
}
