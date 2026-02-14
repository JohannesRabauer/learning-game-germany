import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { BADGES } from '../../content/badges';
import { Lock } from 'lucide-react';

interface BadgeGridProps {
  earnedBadges: string[];
}

export default function BadgeGrid({ earnedBadges }: BadgeGridProps) {
  const { i18n } = useTranslation();
  const lang = i18n.language?.startsWith('de') ? 'de' : 'en';

  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
      {BADGES.map((badge, idx) => {
        const earned = earnedBadges.includes(badge.id);
        return (
          <motion.div
            key={badge.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.04 }}
            className={`flex flex-col items-center gap-1.5 p-3 rounded-2xl border transition-all ${
              earned
                ? 'bg-white shadow-sm border-gray-100'
                : 'bg-gray-50 border-gray-100 opacity-50'
            }`}
          >
            <div className="w-12 h-12 flex items-center justify-center">
              {earned ? (
                <span className="text-4xl">{badge.icon}</span>
              ) : (
                <Lock size={28} className="text-gray-300" />
              )}
            </div>
            <span className={`text-xs font-bold text-center leading-tight ${earned ? 'text-gray-700' : 'text-gray-400'}`}>
              {badge.name[lang]}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
}
