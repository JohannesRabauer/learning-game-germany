import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useGame } from '../../context/GameContext';
import XPCounter from '../common/XPCounter';
import StreakBadge from '../common/StreakBadge';
import LanguageSwitch from '../common/LanguageSwitch';
import { Home, CalendarDays, User, Settings } from 'lucide-react';

const navItems = [
  { path: '/', icon: Home, labelKey: 'nav.home' },
  { path: '/daily', icon: CalendarDays, labelKey: 'nav.daily' },
  { path: '/profile', icon: User, labelKey: 'nav.profile' },
  { path: '/settings', icon: Settings, labelKey: 'nav.settings' },
] as const;

export default function Navbar() {
  const { progress } = useGame();
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

  return (
    <nav className="bg-white/90 backdrop-blur-md border-b border-gray-200/60 sticky top-0 z-40">
      <div className="max-w-4xl mx-auto px-4 py-2.5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button onClick={() => navigate('/')} className="flex items-center gap-2 cursor-pointer">
            <span className="text-2xl">🦉</span>
            <span className="font-extrabold text-xl text-primary hidden sm:inline">Kluge Eule</span>
          </button>
        </div>

        {/* Desktop navigation links */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map(({ path, icon: Icon, labelKey }) => {
            const isActive = location.pathname === path;
            return (
              <button
                key={path}
                onClick={() => navigate(path)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-sm font-bold transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-primary/10 text-primary'
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Icon size={18} />
                <span>{t(labelKey)}</span>
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <StreakBadge days={progress.streak.current} />
          <XPCounter xp={progress.xp} />
          <div className="hidden sm:block">
            <LanguageSwitch />
          </div>
        </div>
      </div>
    </nav>
  );
}
