import { useState, useCallback, useRef, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import { useUser } from '../context/UserContext';
import { useGame } from '../context/GameContext';
import { useSound } from '../context/SoundContext';
import QuizCard from '../components/game/QuizCard';
import MathFlash from '../components/game/MathFlash';
import WordBuilder from '../components/game/WordBuilder';
import DragDropArea from '../components/game/DragDropArea';
import AnswerFeedback from '../components/game/AnswerFeedback';
import RoundSummary from '../components/game/RoundSummary';
import LevelUpModal from '../components/rewards/LevelUpModal';
import BadgeUnlock from '../components/rewards/BadgeUnlock';
import Timer from '../components/common/Timer';
import ProgressBar from '../components/common/ProgressBar';
import { useTimer } from '../hooks/useTimer';
import { getQuestions } from '../content/questions';
import { calculateRoundXP, calculateStars } from '../utils/scoring';
import type { Subject, Question, MultipleChoiceQuestion, WordBuildQuestion, DragSortQuestion } from '../types/question';
import type { GameMode, AnswerRecord, GameResult } from '../types/game';

const TIMER_MODES = { relaxed: 30, standard: 20, challenge: 10 };
const QUESTIONS_PER_ROUND = 10;

export default function GamePage() {
  const { subject, mode } = useParams<{ subject: string; mode: string }>();
  const navigate = useNavigate();
  const { profile, settings } = useUser();
  const { progress, addXP, recordAnswer, recordPerfectRound, updateCombo, updateStreak, checkNewBadges } = useGame();
  const { playSound } = useSound();

  const sub = subject as Subject;
  const gameMode = mode as GameMode;
  const klasse = profile?.klasse ?? 1;

  const [questions] = useState<Question[]>(() =>
    getQuestions({ subject: sub, klasse, limit: QUESTIONS_PER_ROUND })
  );
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);
  const [combo, setCombo] = useState(0);
  const [maxCombo, setMaxCombo] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [lastCorrect, setLastCorrect] = useState(false);
  const [lastCorrectAnswer, setLastCorrectAnswer] = useState('');
  const [result, setResult] = useState<GameResult | null>(null);
  const [showLevelUp, setShowLevelUp] = useState(false);
  const [newLevel, setNewLevel] = useState(0);
  const [showBadge, setShowBadge] = useState(false);
  const [newBadgeId, setNewBadgeId] = useState('');

  const questionStartTime = useRef(Date.now());
  const timerPerQuestion = TIMER_MODES[settings.timerMode];

  const { seconds, restart: restartTimer } = useTimer({
    initialSeconds: timerPerQuestion,
    autoStart: gameMode === 'quick_round',
    onComplete: () => handleAnswer('', false),
  });

  useEffect(() => {
    updateStreak();
  }, []);

  const handleAnswer = useCallback((value: string, correct: boolean) => {
    const timeSpent = Date.now() - questionStartTime.current;
    const record: AnswerRecord = { questionId: questions[currentIdx]?.id ?? '', correct, timeSpent, answer: value };

    if (correct) {
      playSound('correct');
      const newCombo = combo + 1;
      setCombo(newCombo);
      setMaxCombo((prev) => Math.max(prev, newCombo));
      updateCombo(newCombo);
    } else {
      playSound('wrong');
      setCombo(0);
    }

    setLastCorrect(correct);
    setLastCorrectAnswer(
      questions[currentIdx]?.type === 'multiple_choice'
        ? (questions[currentIdx] as MultipleChoiceQuestion).correctAnswer
        : ''
    );

    const newAnswers = [...answers, record];
    setAnswers(newAnswers);
    recordAnswer(sub, questions[currentIdx]?.topic ?? 'mixed', correct);

    setShowFeedback(true);
  }, [currentIdx, combo, answers, questions, sub, playSound, recordAnswer, updateCombo]);

  const handleFeedbackDone = useCallback(() => {
    setShowFeedback(false);
    if (currentIdx + 1 >= questions.length) {
      finishRound([...answers]);
    } else {
      setCurrentIdx((prev) => prev + 1);
      questionStartTime.current = Date.now();
      if (gameMode === 'quick_round') restartTimer();
    }
  }, [currentIdx, questions.length, answers, gameMode, restartTimer]);

  const finishRound = (finalAnswers: AnswerRecord[]) => {
    const config = { mode: gameMode, subject: sub, klasse, questionCount: questions.length };
    const xpEarned = calculateRoundXP(finalAnswers, config);
    const totalCorrect = finalAnswers.filter((a) => a.correct).length;
    const stars = calculateStars(totalCorrect, finalAnswers.length);
    const previousLevel = progress.level;

    addXP(xpEarned);

    if (totalCorrect === finalAnswers.length) {
      recordPerfectRound();
      playSound('streak');
    }

    const newBadges = checkNewBadges();
    const newLevelAfterXP = progress.level;

    const gameResult: GameResult = {
      config,
      answers: finalAnswers,
      totalCorrect,
      totalQuestions: finalAnswers.length,
      maxCombo,
      totalTime: finalAnswers.reduce((sum, a) => sum + a.timeSpent, 0),
      xpEarned,
      stars,
      newBadges,
      leveledUp: newLevelAfterXP > previousLevel,
      previousLevel,
      newLevel: newLevelAfterXP,
    };

    setResult(gameResult);

    if (newLevelAfterXP > previousLevel) {
      playSound('levelup');
      setNewLevel(newLevelAfterXP);
      setShowLevelUp(true);
    } else if (newBadges.length > 0) {
      setNewBadgeId(newBadges[0]);
      setShowBadge(true);
    }
  };

  const handleMathFlashComplete = (_score: number, correctCount: number, totalCount: number) => {
    const mockAnswers: AnswerRecord[] = Array.from({ length: totalCount }, (_, i) => ({
      questionId: `flash-${i}`,
      correct: i < correctCount,
      timeSpent: 2000,
      answer: '',
    }));
    finishRound(mockAnswers);
  };

  if (result) {
    return (
      <>
        <RoundSummary
          result={result}
          onPlayAgain={() => navigate(`/game/${sub}/${gameMode}`)}
          onHome={() => navigate('/')}
        />
        <LevelUpModal isOpen={showLevelUp} onClose={() => setShowLevelUp(false)} newLevel={newLevel} />
        <BadgeUnlock isOpen={showBadge} onClose={() => setShowBadge(false)} badgeId={newBadgeId} />
      </>
    );
  }

  if (gameMode === 'math_flash') {
    return <MathFlash klasse={klasse} difficulty={1} onComplete={handleMathFlashComplete} />;
  }

  const currentQuestion = questions[currentIdx];
  if (!currentQuestion) return (
    <div className="flex items-center justify-center py-20">
      <div className="text-center">
        <div className="text-5xl mb-3 animate-bounce">🦉</div>
        <p className="text-gray-400 font-semibold">Loading...</p>
      </div>
    </div>
  );

  return (
    <div className="py-4">
      {gameMode === 'quick_round' && (
        <div className="mb-4 space-y-2">
          <Timer seconds={seconds} totalSeconds={timerPerQuestion} />
          <ProgressBar value={(currentIdx) / questions.length} color="bg-primary" />
        </div>
      )}

      <AnimatePresence mode="wait">
        {currentQuestion.type === 'multiple_choice' && (
          <QuizCard
            key={currentIdx}
            question={currentQuestion as MultipleChoiceQuestion}
            questionNumber={currentIdx + 1}
            totalQuestions={questions.length}
            onAnswer={handleAnswer}
          />
        )}
        {currentQuestion.type === 'word_build' && (
          <WordBuilder
            key={currentIdx}
            question={currentQuestion as WordBuildQuestion}
            onAnswer={(correct) => handleAnswer(correct ? 'correct' : 'wrong', correct)}
          />
        )}
        {currentQuestion.type === 'drag_sort' && (
          <DragDropArea
            key={currentIdx}
            question={currentQuestion as DragSortQuestion}
            onAnswer={(correct) => handleAnswer(correct ? 'correct' : 'wrong', correct)}
          />
        )}
      </AnimatePresence>

      <AnswerFeedback
        show={showFeedback}
        correct={lastCorrect}
        correctAnswer={lastCorrectAnswer}
        onDone={handleFeedbackDone}
      />
    </div>
  );
}
