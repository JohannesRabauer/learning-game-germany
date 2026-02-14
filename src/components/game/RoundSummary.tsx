import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import type { GameResult } from '../../types/game';
import StarRating from '../common/StarRating';
import BigButton from '../common/BigButton';
import ReactCanvasConfetti from 'react-canvas-confetti';
import { useConfetti } from '../../hooks/useConfetti';
import { useEffect } from 'react';

interface RoundSummaryProps {
  result: GameResult;
  onPlayAgain: () => void;
  onHome: () => void;
}

export default function RoundSummary({ result, onPlayAgain, onHome }: RoundSummaryProps) {
  const { t } = useTranslation('game');
  const { getInstance, fireBig } = useConfetti();

  useEffect(() => {
    if (result.stars === 3) {
      setTimeout(fireBig, 300);
    }
  }, [result.stars, fireBig]);

  const getMessage = () => {
    if (result.stars === 3) return t('results.perfect');
    if (result.stars === 2) return t('results.great');
    return t('results.tryHarder');
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center py-8"
    >
      <ReactCanvasConfetti
        onInit={({ confetti }) => getInstance(confetti)}
        style={{ position: 'fixed', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 100 }}
      />

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', delay: 0.2 }}
        className="text-6xl mb-4"
      >
        {result.stars === 3 ? '🏆' : result.stars === 2 ? '🌟' : '💪'}
      </motion.div>

      <h2 className="text-3xl font-extrabold text-gray-800 mb-4">{getMessage()}</h2>

      <StarRating stars={result.stars} size={48} />

      <div className="mt-6 space-y-2">
        <p className="text-xl text-gray-700">
          {t('results.score', { correct: result.totalCorrect, total: result.totalQuestions })}
        </p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-2xl font-bold text-xp"
        >
          {t('results.xpEarned', { xp: result.xpEarned })}
        </motion.p>
        {result.maxCombo > 2 && (
          <p className="text-gray-500">
            Max combo: {result.maxCombo}x
          </p>
        )}
      </div>

      <div className="flex gap-4 justify-center mt-8">
        <BigButton onClick={onPlayAgain} color="primary">{t('results.playAgain')}</BigButton>
        <BigButton onClick={onHome} color="gray">{t('results.backHome')}</BigButton>
      </div>
    </motion.div>
  );
}
