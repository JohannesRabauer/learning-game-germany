import { useState } from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import type { MultipleChoiceQuestion } from '../../types/question';
import BigButton from '../common/BigButton';

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

  const getButtonColor = (value: string) => {
    if (!answered) return 'gray' as const;
    if (value === question.correctAnswer) return 'correct' as const;
    if (value === selected) return 'wrong' as const;
    return 'gray' as const;
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="w-full"
    >
      <p className="text-sm text-gray-500 mb-2 text-center">
        {t('quiz.question', { current: questionNumber, total: totalQuestions })}
      </p>
      <div className="bg-white rounded-3xl shadow-lg p-6 mb-6">
        <p className="text-2xl font-bold text-center text-gray-800 mb-2">
          {question.prompt[lang]}
        </p>
        {question.explanation && answered && selected !== question.correctAnswer && (
          <p className="text-sm text-gray-500 text-center mt-1">
            {question.explanation[lang]}
          </p>
        )}
      </div>
      <div className="grid grid-cols-2 gap-3">
        {question.options.map((option, idx) => (
          <motion.div key={option.value} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }}>
            <BigButton
              onClick={() => handleSelect(option.value)}
              color={getButtonColor(option.value)}
              size="lg"
              disabled={answered}
              className="w-full"
            >
              {option.label[lang]}
            </BigButton>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
