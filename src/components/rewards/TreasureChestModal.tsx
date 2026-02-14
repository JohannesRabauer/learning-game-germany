import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'motion/react';
import Modal from '../common/Modal';
import ReactCanvasConfetti from 'react-canvas-confetti';
import { useConfetti } from '../../hooks/useConfetti';
import { CHEST_DEFINITIONS } from '../../content/chests';
import { TITLES, RARITY_COLORS, RARITY_LABELS } from '../../content/titles';
import { COSMETICS } from '../../content/cosmetics';
import type { ChestTier, ChestReward } from '../../types/reward';

interface TreasureChestModalProps {
  isOpen: boolean;
  onClose: () => void;
  tier: ChestTier;
  reward: ChestReward | null;
}

export default function TreasureChestModal({ isOpen, onClose, tier, reward }: TreasureChestModalProps) {
  const { t, i18n } = useTranslation('rewards');
  const lang = i18n.language?.startsWith('de') ? 'de' : 'en';
  const { getInstance, fireBig } = useConfetti();
  const [phase, setPhase] = useState<'closed' | 'shaking' | 'opening' | 'revealed'>('closed');

  const chest = CHEST_DEFINITIONS[tier];
  const title = reward?.title ? TITLES.find((t) => t.id === reward.title) : null;
  const cosmetic = reward?.cosmetic ? COSMETICS.find((c) => c.id === reward.cosmetic) : null;

  useEffect(() => {
    if (!isOpen) {
      // Reset phase when modal closes so it's ready for next open
      const resetTimeout = setTimeout(() => setPhase('closed'), 300);
      return () => clearTimeout(resetTimeout);
    }
    // Kick off chest opening sequence via timeouts
    const t1 = setTimeout(() => setPhase('shaking'), 400);
    const t2 = setTimeout(() => setPhase('opening'), 1400);
    const t3 = setTimeout(() => {
      setPhase('revealed');
      if (tier === 'gold' || tier === 'diamond') {
        fireBig();
      }
    }, 2200);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [isOpen, tier, fireBig]);

  const chestEmoji = phase === 'revealed' ? '🎁' : chest.icon;

  const tierGlow: Record<ChestTier, string> = {
    bronze: 'shadow-orange-300',
    silver: 'shadow-gray-400',
    gold: 'shadow-yellow-400',
    diamond: 'shadow-sky-400',
  };

  return (
    <Modal isOpen={isOpen} onClose={phase === 'revealed' ? onClose : () => {}} showClose={false}>
      <ReactCanvasConfetti
        onInit={({ confetti }) => getInstance(confetti)}
        style={{ position: 'fixed', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 100 }}
      />
      <div className="text-center py-4">
        {/* Chest title */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-lg font-bold text-gray-600 mb-3"
        >
          {chest.name[lang]}
        </motion.p>

        {/* Chest animation */}
        <motion.div
          className={`text-8xl mb-6 inline-block ${phase === 'revealed' ? '' : `drop-shadow-xl`}`}
          animate={
            phase === 'shaking'
              ? { rotate: [-5, 5, -5, 5, -8, 8, -8, 8, 0], scale: [1, 1.05, 1, 1.05, 1.1, 1, 1.1, 1, 1] }
              : phase === 'opening'
                ? { scale: [1, 1.5, 0], rotate: [0, 0, 180] }
                : phase === 'revealed'
                  ? { scale: [0, 1.3, 1] }
                  : { scale: 1 }
          }
          transition={
            phase === 'shaking'
              ? { duration: 1, ease: 'easeInOut' }
              : phase === 'opening'
                ? { duration: 0.8, ease: 'easeIn' }
                : phase === 'revealed'
                  ? { duration: 0.5, type: 'spring', stiffness: 200 }
                  : { duration: 0.3 }
          }
        >
          <div className={`inline-block ${phase !== 'revealed' ? `shadow-2xl ${tierGlow[tier]} rounded-full` : ''}`}>
            {chestEmoji}
          </div>
        </motion.div>

        {/* Revealed rewards */}
        <AnimatePresence>
          {phase === 'revealed' && reward && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-3"
            >
              {/* XP Bonus */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: 'spring' }}
                className="inline-block bg-gradient-to-r from-yellow-50 to-amber-50 border-2 border-yellow-200 rounded-2xl px-6 py-3"
              >
                <span className="text-2xl font-extrabold text-xp">+{reward.xpBonus} XP</span>
              </motion.div>

              {/* Title reward */}
              {title && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.6, type: 'spring' }}
                  className="bg-white border-2 border-purple-200 rounded-2xl p-4"
                >
                  <p className="text-sm font-bold text-purple-500 mb-1">{t('chest.newTitle')}</p>
                  <p className="text-2xl mb-1">{title.icon}</p>
                  <p className="text-lg font-extrabold text-gray-800">{title.name[lang]}</p>
                  <p className={`text-xs font-bold ${RARITY_COLORS[title.rarity]}`}>
                    {RARITY_LABELS[title.rarity][lang]}
                  </p>
                </motion.div>
              )}

              {/* Cosmetic reward */}
              {cosmetic && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: title ? 0.9 : 0.6, type: 'spring' }}
                  className="bg-white border-2 border-cyan-200 rounded-2xl p-4"
                >
                  <p className="text-sm font-bold text-cyan-500 mb-1">{t('chest.newCosmetic')}</p>
                  <p className="text-2xl mb-1">{cosmetic.icon}</p>
                  <p className="text-lg font-extrabold text-gray-800">{cosmetic.name[lang]}</p>
                  <p className={`text-xs font-bold ${RARITY_COLORS[cosmetic.rarity]}`}>
                    {RARITY_LABELS[cosmetic.rarity][lang]}
                  </p>
                </motion.div>
              )}

              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                onClick={onClose}
                className="mt-4 bg-primary text-white font-bold px-8 py-3 rounded-2xl text-lg hover:bg-primary-dark transition-colors cursor-pointer"
              >
                {t('chest.collect')}
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Modal>
  );
}
