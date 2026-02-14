import Modal from '../common/Modal';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { BADGES } from '../../content/badges';

interface BadgeUnlockProps {
  isOpen: boolean;
  onClose: () => void;
  badgeId: string;
}

export default function BadgeUnlock({ isOpen, onClose, badgeId }: BadgeUnlockProps) {
  const { t, i18n } = useTranslation('rewards');
  const lang = i18n.language?.startsWith('de') ? 'de' : 'en';
  const badge = BADGES.find((b) => b.id === badgeId);

  if (!badge) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} showClose={false}>
      <div className="text-center py-4">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.3, 1], rotate: [0, 360] }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="text-7xl mb-4"
        >
          {badge.icon}
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-lg text-primary font-bold mb-1"
        >
          {t('badges.earned')}
        </motion.p>
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-2xl font-extrabold text-gray-800 mb-2"
        >
          {badge.name[lang]}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="text-gray-500"
        >
          {badge.description[lang]}
        </motion.p>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          onClick={onClose}
          className="mt-6 bg-primary text-white font-bold px-8 py-3 rounded-2xl hover:bg-primary-dark transition-colors cursor-pointer"
        >
          ✨ Cool!
        </motion.button>
      </div>
    </Modal>
  );
}
