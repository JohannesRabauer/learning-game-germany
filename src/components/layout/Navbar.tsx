import { useGame } from '../../context/GameContext';
import XPCounter from '../common/XPCounter';
import StreakBadge from '../common/StreakBadge';
import LanguageSwitch from '../common/LanguageSwitch';

export default function Navbar() {
  const { progress } = useGame();

  return (
    <nav className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-40">
      <div className="max-w-4xl mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🦉</span>
          <span className="font-extrabold text-xl text-primary hidden sm:inline">Kluge Eule</span>
        </div>
        <div className="flex items-center gap-4">
          <StreakBadge days={progress.streak.current} />
          <XPCounter xp={progress.xp} />
          <LanguageSwitch />
        </div>
      </div>
    </nav>
  );
}
