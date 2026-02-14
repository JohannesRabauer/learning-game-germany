import { useState, useCallback, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { useTimer } from '../../hooks/useTimer';
import Timer from '../common/Timer';
import { generateMathFlashQuestion } from '../../utils/questionGenerator';
import type { Klasse, Difficulty } from '../../types/question';

interface MathFlashProps {
  klasse: Klasse;
  difficulty: Difficulty;
  onComplete: (score: number, correctCount: number, totalCount: number) => void;
}

const TIME_LIMIT = 60;

export default function MathFlash({ klasse, difficulty, onComplete }: MathFlashProps) {
  const { t, i18n } = useTranslation('game');
  const lang = i18n.language?.startsWith('de') ? 'de' : 'en';
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [answer, setAnswer] = useState('');
  const [question, setQuestion] = useState(() => generateMathFlashQuestion(klasse, difficulty));
  const [totalAnswered, setTotalAnswered] = useState(0);
  const [totalCorrect, setTotalCorrect] = useState(0);
  const [flash, setFlash] = useState<'correct' | 'wrong' | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleTimeUp = useCallback(() => {
    onComplete(score, totalCorrect, totalAnswered);
  }, [score, totalCorrect, totalAnswered, onComplete]);

  const { seconds } = useTimer({ initialSeconds: TIME_LIMIT, onComplete: handleTimeUp, autoStart: true });

  useEffect(() => {
    inputRef.current?.focus();
  }, [question]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!answer.trim()) return;

    const isCorrect = parseInt(answer) === question.correctAnswer;
    setTotalAnswered((prev) => prev + 1);

    if (isCorrect) {
      const points = 10 + combo * 2;
      setScore((prev) => prev + points);
      setCombo((prev) => prev + 1);
      setTotalCorrect((prev) => prev + 1);
      setFlash('correct');
    } else {
      setCombo(0);
      setFlash('wrong');
    }

    setTimeout(() => setFlash(null), 300);
    setAnswer('');
    setQuestion(generateMathFlashQuestion(klasse, difficulty));
  };

  return (
    <div className="max-w-md mx-auto">
      <Timer seconds={seconds} totalSeconds={TIME_LIMIT} />

      <div className="flex justify-between items-center mt-4 mb-6">
        <span className="font-bold text-lg text-gray-700">{t('mathFlash.score', { score })}</span>
        {combo > 1 && (
          <motion.span
            key={combo}
            initial={{ scale: 1.5 }}
            animate={{ scale: 1 }}
            className="font-bold text-lg text-streak"
          >
            {t('mathFlash.combo', { combo })}
          </motion.span>
        )}
      </div>

      <motion.div
        animate={flash === 'correct' ? { backgroundColor: ['#dcfce7', '#ffffff'] } : flash === 'wrong' ? { x: [0, -10, 10, 0] } : {}}
        className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center mb-6"
      >
        <p className="text-4xl font-extrabold text-gray-800">{question.prompt[lang]}</p>
      </motion.div>

      <form onSubmit={handleSubmit} className="flex gap-3">
        <input
          ref={inputRef}
          type="number"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder={t('mathFlash.type_answer')}
          className="flex-1 text-2xl font-bold text-center border-2 border-gray-200 rounded-2xl p-4 focus:border-primary focus:outline-none bg-white"
          autoFocus
        />
        <button
          type="submit"
          className="bg-primary text-white font-bold text-2xl px-8 rounded-2xl hover:bg-primary-dark transition-colors cursor-pointer shadow-md"
        >
          →
        </button>
      </form>
    </div>
  );
}
