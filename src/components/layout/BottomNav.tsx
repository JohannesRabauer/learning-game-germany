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
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden z-40">
      <div className="flex justify-around items-center py-2">
        {navItems.map(({ path, icon: Icon, labelKey }) => {
          const isActive = location.pathname === path;
          return (
            <button
              key={path}
              onClick={() => navigate(path)}
              className={`flex flex-col items-center gap-0.5 p-2 min-w-[64px] transition-colors cursor-pointer ${
                isActive ? 'text-primary' : 'text-gray-400'
              }`}
            >
              <Icon size={24} />
              <span className="text-xs font-semibold">{t(labelKey)}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
