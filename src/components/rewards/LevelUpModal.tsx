import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import Modal from '../common/Modal';
import { motion } from 'motion/react';
import { LEVELS } from '../../content/levels';
import ReactCanvasConfetti from 'react-canvas-confetti';
import { useConfetti } from '../../hooks/useConfetti';

interface LevelUpModalProps {
  isOpen: boolean;
  onClose: () => void;
  newLevel: number;
}

export default function LevelUpModal({ isOpen, onClose, newLevel }: LevelUpModalProps) {
  const { t, i18n } = useTranslation('rewards');
  const lang = i18n.language?.startsWith('de') ? 'de' : 'en';
  const { getInstance, fireBig } = useConfetti();
  const levelData = LEVELS.find((l) => l.level === newLevel);

  useEffect(() => {
    if (isOpen) setTimeout(fireBig, 300);
  }, [isOpen, fireBig]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} showClose={false}>
      <ReactCanvasConfetti
        onInit={({ confetti }) => getInstance(confetti)}
        style={{ position: 'fixed', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 100 }}
      />
      <div className="text-center py-4">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
          className="text-7xl mb-4"
        >
          🎉
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-3xl font-extrabold text-primary mb-2"
        >
          {t('level.up')}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-xl text-gray-700 mb-1"
        >
          {t('level.newLevel', { number: newLevel })}
        </motion.p>
        {levelData && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-lg font-bold text-xp"
          >
            "{levelData.title[lang]}"
          </motion.p>
        )}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          onClick={onClose}
          className="mt-6 bg-primary text-white font-bold px-8 py-3 rounded-2xl text-lg hover:bg-primary-dark transition-colors cursor-pointer"
        >
          🎊 Wow!
        </motion.button>
      </div>
    </Modal>
  );
}
