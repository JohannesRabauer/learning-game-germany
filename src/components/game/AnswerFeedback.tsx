import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from 'react-i18next';

interface AnswerFeedbackProps {
  show: boolean;
  correct: boolean;
  correctAnswer?: string;
  onDone: () => void;
}

export default function AnswerFeedback({ show, correct, correctAnswer, onDone }: AnswerFeedbackProps) {
  const { t } = useTranslation('game');

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${
            correct ? 'bg-correct/20' : 'bg-wrong/20'
          }`}
          onClick={onDone}
        >
          <motion.div
            className={`bg-white rounded-3xl shadow-2xl p-8 text-center max-w-sm w-full ${
              correct ? 'border-3 border-correct' : 'border-3 border-wrong'
            }`}
            initial={correct ? { scale: 0.8 } : { scale: 0.8 }}
            animate={correct ? { scale: 1, rotate: [0, -2, 2, 0] } : { scale: 1, x: [0, -8, 8, -8, 8, 0] }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <div className="text-6xl mb-4">{correct ? '🎉' : '💪'}</div>
            <p className={`text-2xl font-extrabold mb-2 ${correct ? 'text-correct' : 'text-wrong'}`}>
              {correct ? t('quiz.correct') : t('quiz.wrong')}
            </p>
            {!correct && correctAnswer && (
              <p className="text-gray-600 mt-2">
                {t('quiz.correctAnswer', { answer: correctAnswer })}
              </p>
            )}
            <p className="text-gray-400 text-sm mt-4">
              {t('quiz.tapToContinue')}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
