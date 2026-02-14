import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { COSMETICS } from '../../content/cosmetics';
import { RARITY_COLORS, RARITY_LABELS } from '../../content/titles';
import { Lock, Check } from 'lucide-react';

interface CosmeticGridProps {
  type: 'frame' | 'background';
  unlockedCosmetics: string[];
  activeId: string;
  onSelect: (cosmeticId: string) => void;
}

export default function CosmeticGrid({ type, unlockedCosmetics, activeId, onSelect }: CosmeticGridProps) {
  const { i18n } = useTranslation();
  const lang = i18n.language?.startsWith('de') ? 'de' : 'en';
  const items = COSMETICS.filter((c) => c.type === type);

  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
      {items.map((cosmetic, idx) => {
        const owned = cosmetic.id === 'default' || unlockedCosmetics.includes(cosmetic.id);
        const isActive = activeId === cosmetic.id;
        return (
          <motion.button
            key={cosmetic.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.04 }}
            whileTap={owned ? { scale: 0.95 } : undefined}
            onClick={() => owned && onSelect(cosmetic.id)}
            disabled={!owned}
            className={`flex flex-col items-center justify-center gap-1.5 p-3 rounded-2xl border-2 transition-all aspect-square ${
              !owned
                ? 'opacity-40 border-gray-100 bg-gray-50 cursor-not-allowed'
                : isActive
                  ? 'border-primary bg-primary/5 shadow-md cursor-pointer'
                  : 'border-gray-100 bg-white hover:shadow-sm cursor-pointer'
            }`}
          >
            <div className="w-10 h-10 flex items-center justify-center relative">
              {owned ? (
                <span className="text-3xl">{cosmetic.icon}</span>
              ) : (
                <Lock size={24} className="text-gray-300" />
              )}
              {isActive && (
                <div className="absolute -top-1 -right-1 bg-primary rounded-full p-0.5">
                  <Check size={12} className="text-white" />
                </div>
              )}
            </div>
            <span className={`text-xs font-bold text-center leading-tight ${owned ? 'text-gray-700' : 'text-gray-400'}`}>
              {cosmetic.name[lang]}
            </span>
            <span className={`text-[10px] font-semibold ${RARITY_COLORS[cosmetic.rarity]}`}>
              {RARITY_LABELS[cosmetic.rarity][lang]}
            </span>
          </motion.button>
        );
      })}
    </div>
  );
}
