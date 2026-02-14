import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { useUser } from '../context/UserContext';
import { useGame } from '../context/GameContext';
import { useSound } from '../context/SoundContext';
import QuizCard from '../components/game/QuizCard';
import RoundSummary from '../components/game/RoundSummary';
import MascotSpeech from '../components/common/MascotSpeech';
import BigButton from '../components/common/BigButton';
import ProgressBar from '../components/common/ProgressBar';
import { getQuestions } from '../content/questions';
import { calculateRoundXP, calculateStars } from '../utils/scoring';
import { getToday } from '../utils/dateUtils';
import type { MultipleChoiceQuestion } from '../types/question';
import type { AnswerRecord, GameResult } from '../types/game';
import { AnimatePresence } from 'motion/react';

const DAILY_QUESTIONS = 5;

export default function DailyChallengePage() {
  const { t } = useTranslation('game');
  const { t: tCommon } = useTranslation();
  const navigate = useNavigate();
  const { profile } = useUser();
  const { progress, addXP, recordAnswer, completeDailyChallenge, updateStreak, checkNewBadges } = useGame();
  const { playSound } = useSound();

  const today = getToday();
  const alreadyCompleted = progress.dailyChallenges[today]?.completed;

  const [started, setStarted] = useState(false);
  const [questions] = useState(() =>
    getQuestions({ klasse: profile?.klasse ?? 1, limit: DAILY_QUESTIONS })
  );
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);
  const [result, setResult] = useState<GameResult | null>(null);

  const handleAnswer = (value: string, correct: boolean) => {
    if (correct) playSound('correct');
    else playSound('wrong');

    const record: AnswerRecord = { questionId: questions[currentIdx].id, correct, timeSpent: 3000, answer: value };
    const newAnswers = [...answers, record];
    setAnswers(newAnswers);
    recordAnswer(questions[currentIdx].subject, questions[currentIdx].topic, correct);

    setTimeout(() => {
      if (currentIdx + 1 >= questions.length) {
        const config = { mode: 'daily_challenge' as const, subject: 'math' as const, klasse: profile?.klasse ?? 1, questionCount: questions.length };
        const xpEarned = calculateRoundXP(newAnswers, config);
        const totalCorrect = newAnswers.filter((a) => a.correct).length;
        const stars = calculateStars(totalCorrect, newAnswers.length);

        addXP(xpEarned);
        completeDailyChallenge(totalCorrect);
        updateStreak();
        checkNewBadges();

        setResult({
          config,
          answers: newAnswers,
          totalCorrect,
          totalQuestions: newAnswers.length,
          maxCombo: 0,
          totalTime: 0,
          xpEarned,
          stars,
          newBadges: [],
          leveledUp: false,
          previousLevel: progress.level,
          newLevel: progress.level,
        });
      } else {
        setCurrentIdx((prev) => prev + 1);
      }
    }, 1000);
  };

  if (alreadyCompleted && !started) {
    return (
      <div className="py-6 text-center max-w-md mx-auto">
        <MascotSpeech message={t('daily.completed')} mood="happy" />
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-6">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mb-6">
            <p className="text-xl font-bold text-gray-700 mb-2">{t('daily.comeBackTomorrow')}</p>
            <p className="text-lg text-streak font-bold">{t('daily.streak', { count: progress.streak.current })}</p>
          </div>
          <BigButton onClick={() => navigate('/')} color="primary">{tCommon('actions.back')}</BigButton>
        </motion.div>
      </div>
    );
  }

  if (!started) {
    return (
      <div className="py-6 text-center max-w-md mx-auto">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-7xl mb-6">📅</motion.div>
        <h1 className="text-3xl font-extrabold text-gray-800 mb-3">{t('daily.title')}</h1>
        <p className="text-gray-600 mb-6 font-semibold">{t('daily.streak', { count: progress.streak.current })}</p>
        <MascotSpeech message={t('daily.newChallenge')} mood="excited" />
        <div className="mt-8">
          <BigButton onClick={() => setStarted(true)} size="lg">{tCommon('actions.start')}</BigButton>
        </div>
      </div>
    );
  }

  if (result) {
    return (
      <RoundSummary
        result={result}
        onPlayAgain={() => navigate('/')}
        onHome={() => navigate('/')}
      />
    );
  }

  const currentQuestion = questions[currentIdx];
  if (!currentQuestion || currentQuestion.type !== 'multiple_choice') return null;

  return (
    <div className="py-4">
      <div className="mb-5">
        <ProgressBar value={currentIdx / questions.length} color="bg-purple-500" />
      </div>
      <AnimatePresence mode="wait">
        <QuizCard
          key={currentIdx}
          question={currentQuestion as MultipleChoiceQuestion}
          questionNumber={currentIdx + 1}
          totalQuestions={questions.length}
          onAnswer={handleAnswer}
        />
      </AnimatePresence>
    </div>
  );
}
