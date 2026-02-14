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
    <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
      {BADGES.map((badge, idx) => {
        const earned = earnedBadges.includes(badge.id);
        return (
          <motion.div
            key={badge.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            className={`flex flex-col items-center gap-1 p-3 rounded-2xl ${
              earned ? 'bg-white shadow-md' : 'bg-gray-100 opacity-60'
            }`}
          >
            <span className="text-4xl">{earned ? badge.icon : ''}</span>
            {!earned && <Lock size={32} className="text-gray-400" />}
            <span className={`text-xs font-bold text-center ${earned ? 'text-gray-700' : 'text-gray-400'}`}>
              {badge.name[lang]}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
}
