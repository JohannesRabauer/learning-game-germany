import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { useUser } from '../context/UserContext';
import { useGame } from '../context/GameContext';
import ProgressBar from '../components/common/ProgressBar';
import StreakBadge from '../components/common/StreakBadge';
import { getLevelProgress, LEVELS } from '../content/levels';
import { Trophy, Target, Zap, Clock, ChevronRight } from 'lucide-react';

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
    { icon: Target, label: lang === 'de' ? 'Genauigkeit' : 'Accuracy', value: `${accuracy}%`, color: 'text-correct' },
    { icon: Zap, label: lang === 'de' ? 'Bester Combo' : 'Best Combo', value: `${progress.stats.longestCombo}x`, color: 'text-streak' },
    { icon: Trophy, label: lang === 'de' ? 'Perfekte Runden' : 'Perfect Rounds', value: `${progress.stats.perfectRounds}`, color: 'text-xp' },
    { icon: Clock, label: lang === 'de' ? 'Fragen beantwortet' : 'Questions Answered', value: `${progress.stats.totalQuestionsAnswered}`, color: 'text-primary' },
  ];

  return (
    <div className="space-y-5 py-4 max-w-lg mx-auto">
      {/* Profile header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 text-center"
      >
        <div className="text-6xl mb-3">🦉</div>
        <h1 className="text-2xl font-extrabold text-gray-800">{profile?.name}</h1>
        <p className="text-primary font-bold mt-1">Level {progress.level} — {levelTitle}</p>
        <div className="mt-4 px-4">
          <ProgressBar value={levelProgress} color="bg-xp" />
          <p className="text-sm text-gray-500 mt-1.5">{progress.xp} XP</p>
        </div>
        {progress.streak.current > 0 && (
          <div className="mt-3 flex justify-center">
            <StreakBadge days={progress.streak.current} />
          </div>
        )}
      </motion.div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 gap-3">
        {stats.map(({ icon: Icon, label, value, color }, idx) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.08 }}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 text-center"
          >
            <Icon size={24} className={`${color} mx-auto mb-1.5`} />
            <p className="text-2xl font-extrabold text-gray-800">{value}</p>
            <p className="text-xs text-gray-500 font-semibold mt-0.5">{label}</p>
          </motion.div>
        ))}
      </div>

      {/* Trophy room link */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileTap={{ scale: 0.97 }}
        onClick={() => navigate('/trophies')}
        className="w-full flex items-center gap-4 bg-gradient-to-r from-yellow-50 to-amber-50 border-2 border-yellow-200/60 rounded-2xl p-4 hover:from-yellow-100 hover:to-amber-100 transition-all cursor-pointer group"
      >
        <span className="text-3xl">🏆</span>
        <div className="text-left flex-1">
          <p className="font-extrabold text-gray-800">{t('nav.trophies')}</p>
          <p className="text-sm text-gray-500">{progress.badges.length} / {18} {lang === 'de' ? 'Abzeichen' : 'badges'}</p>
        </div>
        <ChevronRight size={20} className="text-gray-400 group-hover:text-gray-600 transition-colors" />
      </motion.button>
    </div>
  );
}
