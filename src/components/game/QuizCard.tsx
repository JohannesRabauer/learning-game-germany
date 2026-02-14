import { useState } from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import type { MultipleChoiceQuestion } from '../../types/question';

interface QuizCardProps {
  question: MultipleChoiceQuestion;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (value: string, correct: boolean) => void;
}

export default function QuizCard({ question, questionNumber, totalQuestions, onAnswer }: QuizCardProps) {
  const { t, i18n } = useTranslation('game');
  const lang = i18n.language?.startsWith('de') ? 'de' : 'en';
  const [selected, setSelected] = useState<string | null>(null);
  const [answered, setAnswered] = useState(false);

  const handleSelect = (value: string) => {
    if (answered) return;
    setSelected(value);
    setAnswered(true);
    const correct = value === question.correctAnswer;
    setTimeout(() => {
      onAnswer(value, correct);
      setSelected(null);
      setAnswered(false);
    }, 800);
  };

  const getOptionStyle = (value: string) => {
    if (!answered) {
      return 'bg-white text-gray-800 border-2 border-gray-200 hover:border-primary/40 hover:bg-primary/5';
    }
    if (value === question.correctAnswer) {
      return 'bg-correct/10 text-correct border-2 border-correct';
    }
    if (value === selected) {
      return 'bg-wrong/10 text-wrong border-2 border-wrong';
    }
    return 'bg-white text-gray-400 border-2 border-gray-200 opacity-60';
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="w-full max-w-lg mx-auto"
    >
      <p className="text-sm font-semibold text-gray-400 mb-2 text-center">
        {t('quiz.question', { current: questionNumber, total: totalQuestions })}
      </p>
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 mb-5">
        <p className="text-2xl font-bold text-center text-gray-800">
          {question.prompt[lang]}
        </p>
        {question.explanation && answered && selected !== question.correctAnswer && (
          <p className="text-sm text-gray-500 text-center mt-3">
            {question.explanation[lang]}
          </p>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {question.options.map((option, idx) => (
          <motion.button
            key={option.value}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.08 }}
            whileTap={answered ? undefined : { scale: 0.96 }}
            onClick={() => handleSelect(option.value)}
            disabled={answered}
            className={`rounded-2xl font-bold text-lg px-5 py-4 min-h-[56px] shadow-sm transition-all cursor-pointer ${getOptionStyle(option.value)} ${answered ? 'cursor-default' : ''}`}
          >
            {option.label[lang]}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}
