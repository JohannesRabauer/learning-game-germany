import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { TITLES, RARITY_COLORS, RARITY_BG, RARITY_LABELS } from '../../content/titles';
import { Lock, Check } from 'lucide-react';

interface TitleSelectorProps {
  unlockedTitles: string[];
  activeTitle: string;
  onSelect: (titleId: string) => void;
}

export default function TitleSelector({ unlockedTitles, activeTitle, onSelect }: TitleSelectorProps) {
  const { i18n } = useTranslation();
  const lang = i18n.language?.startsWith('de') ? 'de' : 'en';

  return (
    <div className="space-y-2">
      {/* No title option */}
      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={() => onSelect('')}
        className={`w-full flex items-center gap-3 p-3 rounded-xl border-2 transition-all cursor-pointer ${
          activeTitle === '' ? 'border-primary bg-primary/5' : 'border-gray-100 bg-white hover:bg-gray-50'
        }`}
      >
        <span className="text-xl">🚫</span>
        <span className="font-bold text-gray-600 text-sm flex-1 text-left">
          {lang === 'de' ? 'Kein Titel' : 'No title'}
        </span>
        {activeTitle === '' && <Check size={18} className="text-primary" />}
      </motion.button>

      {TITLES.map((title, idx) => {
        const owned = unlockedTitles.includes(title.id);
        const isActive = activeTitle === title.id;
        return (
          <motion.button
            key={title.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.03 }}
            whileTap={owned ? { scale: 0.97 } : undefined}
            onClick={() => owned && onSelect(title.id)}
            disabled={!owned}
            className={`w-full flex items-center gap-3 p-3 rounded-xl border-2 transition-all ${
              !owned
                ? 'opacity-40 border-gray-100 bg-gray-50 cursor-not-allowed'
                : isActive
                  ? `border-primary ${RARITY_BG[title.rarity]} cursor-pointer`
                  : `${RARITY_BG[title.rarity]} cursor-pointer hover:shadow-sm`
            }`}
          >
            <span className="text-xl">{owned ? title.icon : ''}</span>
            {!owned && <Lock size={18} className="text-gray-300" />}
            <div className="flex-1 text-left">
              <p className={`font-bold text-sm ${owned ? 'text-gray-800' : 'text-gray-400'}`}>
                {title.name[lang]}
              </p>
              <p className={`text-xs font-semibold ${RARITY_COLORS[title.rarity]}`}>
                {RARITY_LABELS[title.rarity][lang]}
              </p>
            </div>
            {isActive && <Check size={18} className="text-primary" />}
          </motion.button>
        );
      })}
    </div>
  );
}
