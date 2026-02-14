import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Home, CalendarDays, User, Settings } from 'lucide-react';

const navItems = [
  { path: '/', icon: Home, labelKey: 'nav.home' },
  { path: '/daily', icon: CalendarDays, labelKey: 'nav.daily' },
  { path: '/profile', icon: User, labelKey: 'nav.profile' },
  { path: '/settings', icon: Settings, labelKey: 'nav.settings' },
] as const;

export default function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200/60 md:hidden z-40 pb-[env(safe-area-inset-bottom)]">
      <div className="flex justify-around items-center py-1.5 px-2">
        {navItems.map(({ path, icon: Icon, labelKey }) => {
          const isActive = location.pathname === path;
          return (
            <button
              key={path}
              onClick={() => navigate(path)}
              className={`flex flex-col items-center gap-0.5 py-1.5 px-3 min-w-[60px] rounded-xl transition-colors cursor-pointer ${
                isActive
                  ? 'text-primary bg-primary/8'
                  : 'text-gray-400 active:bg-gray-100'
              }`}
            >
              <Icon size={22} strokeWidth={isActive ? 2.5 : 2} />
              <span className={`text-[10px] font-semibold ${isActive ? 'font-bold' : ''}`}>{t(labelKey)}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
