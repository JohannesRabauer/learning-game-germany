import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { useUser } from '../context/UserContext';
import { useGame } from '../context/GameContext';
import ProgressBar from '../components/common/ProgressBar';
import StreakBadge from '../components/common/StreakBadge';
import { getLevelProgress, LEVELS } from '../content/levels';
import { Trophy, Target, Zap, Clock } from 'lucide-react';

export default function ProfilePage() {
  const { t, i18n } = useTranslation();
  const { profile } = useUser();
  const { progress } = useGame();
  const navigate = useNavigate();
  const lang = i18n.language?.startsWith('de') ? 'de' : 'en';

  const levelTitle = LEVELS.find((l) => l.level === progress.level)?.title[lang] ?? '';
  const levelProgress = getLevelProgress(progress.xp, progress.level);
  const accuracy = progress.stats.totalQuestionsAnswered > 0
    ? Math.round((progress.stats.totalCorrect / progress.stats.totalQuestionsAnswered) * 100)
    : 0;

  const stats = [
    { icon: Target, label: lang === 'de' ? 'Genauigkeit' : 'Accuracy', value: `${accuracy}%` },
    { icon: Zap, label: lang === 'de' ? 'Bester Combo' : 'Best Combo', value: `${progress.stats.longestCombo}x` },
    { icon: Trophy, label: lang === 'de' ? 'Perfekte Runden' : 'Perfect Rounds', value: `${progress.stats.perfectRounds}` },
    { icon: Clock, label: lang === 'de' ? 'Fragen beantwortet' : 'Questions Answered', value: `${progress.stats.totalQuestionsAnswered}` },
  ];

  return (
    <div className="space-y-6 py-4">
      {/* Profile header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-3xl shadow-lg p-6 text-center"
      >
        <div className="text-6xl mb-3">🦉</div>
        <h1 className="text-2xl font-extrabold text-gray-800">{profile?.name}</h1>
        <p className="text-primary font-bold">Level {progress.level} — {levelTitle}</p>
        <div className="mt-3">
          <ProgressBar value={levelProgress} color="bg-xp" />
          <p className="text-sm text-gray-500 mt-1">{progress.xp} XP</p>
        </div>
        <div className="mt-3">
          <StreakBadge days={progress.streak.current} />
        </div>
      </motion.div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 gap-4">
        {stats.map(({ icon: Icon, label, value }, idx) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white rounded-2xl shadow-md p-4 text-center"
          >
            <Icon size={28} className="text-primary mx-auto mb-2" />
            <p className="text-2xl font-extrabold text-gray-800">{value}</p>
            <p className="text-xs text-gray-500 font-semibold">{label}</p>
          </motion.div>
        ))}
      </div>

      {/* Trophy room link */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={() => navigate('/trophies')}
        className="w-full bg-gradient-to-r from-yellow-100 to-amber-100 border-2 border-yellow-200 rounded-2xl p-4 text-center hover:from-yellow-200 hover:to-amber-200 transition-colors cursor-pointer"
      >
        <span className="text-3xl">🏆</span>
        <p className="font-extrabold text-gray-800 mt-1">{t('nav.trophies')}</p>
        <p className="text-sm text-gray-500">{progress.badges.length} / {18} {lang === 'de' ? 'Abzeichen' : 'badges'}</p>
      </motion.button>
    </div>
  );
}
