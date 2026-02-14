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
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${
            correct ? 'bg-correct/20' : 'bg-wrong/20'
          }`}
          onClick={onDone}
        >
          <motion.div
            className={`bg-white rounded-3xl shadow-2xl p-8 text-center max-w-sm ${
              correct ? 'border-4 border-correct' : 'border-4 border-wrong'
            }`}
            initial={correct ? { rotate: 0 } : { x: 0 }}
            animate={correct ? { rotate: [0, -3, 3, 0] } : { x: [0, -10, 10, -10, 10, 0] }}
            transition={{ duration: 0.5 }}
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
              {correct ? '✨' : t('quiz.hint')} — tap to continue
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
