import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { useUser } from '../context/UserContext';
import { useGame } from '../context/GameContext';
import MascotSpeech from '../components/common/MascotSpeech';
import ProgressBar from '../components/common/ProgressBar';
import { getLevelProgress, LEVELS } from '../content/levels';
import { Calculator, BookOpen, Globe, CalendarDays } from 'lucide-react';
import type { Subject } from '../types/question';

const subjects: { key: Subject; icon: typeof Calculator; colorClass: string; bgClass: string }[] = [
  { key: 'math', icon: Calculator, colorClass: 'text-math', bgClass: 'bg-math/10 hover:bg-math/20 border-math/30' },
  { key: 'deutsch', icon: BookOpen, colorClass: 'text-deutsch', bgClass: 'bg-deutsch/10 hover:bg-deutsch/20 border-deutsch/30' },
  { key: 'sachunterricht', icon: Globe, colorClass: 'text-sachunterricht', bgClass: 'bg-sachunterricht/10 hover:bg-sachunterricht/20 border-sachunterricht/30' },
];

export default function HomePage() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const { profile } = useUser();
  const { progress } = useGame();
  const tSubjects = useTranslation('subjects').t;
  const lang = i18n.language?.startsWith('de') ? 'de' : 'en';

  const levelProgress = getLevelProgress(progress.xp, progress.level);
  const levelTitle = LEVELS.find((l) => l.level === progress.level)?.title[lang] ?? '';

  return (
    <div className="space-y-6 py-4">
      <MascotSpeech
        message={t('mascot.welcome', { name: profile?.name ?? '' })}
        mood="happy"
      />

      {/* Level progress */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl shadow-md p-4"
      >
        <div className="flex justify-between items-center mb-2">
          <span className="font-bold text-gray-700">Level {progress.level} — {levelTitle}</span>
          <span className="text-sm text-gray-500">{progress.xp} XP</span>
        </div>
        <ProgressBar value={levelProgress} color="bg-xp" />
      </motion.div>

      {/* Subject cards */}
      <div className="space-y-4">
        <h2 className="text-xl font-extrabold text-gray-800">{t('actions.play')}</h2>
        <div className="grid gap-4">
          {subjects.map(({ key, icon: Icon, colorClass, bgClass }, idx) => (
            <motion.button
              key={key}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate(`/subject/${key}`)}
              className={`flex items-center gap-4 p-5 rounded-2xl border-2 transition-colors cursor-pointer ${bgClass}`}
            >
              <div className={`p-3 rounded-xl bg-white shadow-sm ${colorClass}`}>
                <Icon size={32} />
              </div>
              <div className="text-left">
                <p className="text-xl font-extrabold text-gray-800">{tSubjects(`${key}.name`)}</p>
                <p className="text-sm text-gray-500">{tSubjects(`${key}.icon`)} {tSubjects('classLabel', { number: profile?.klasse ?? 1 })}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Daily challenge card */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        whileTap={{ scale: 0.97 }}
        onClick={() => navigate('/daily')}
        className="w-full flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-r from-purple-100 to-pink-100 border-2 border-purple-200 hover:from-purple-200 hover:to-pink-200 transition-colors cursor-pointer"
      >
        <div className="p-3 rounded-xl bg-white shadow-sm text-purple-600">
          <CalendarDays size={32} />
        </div>
        <div className="text-left">
          <p className="text-xl font-extrabold text-gray-800">{t('nav.daily')}</p>
          <p className="text-sm text-gray-500">{useTranslation('game').t('modeDescriptions.daily_challenge')}</p>
        </div>
      </motion.button>
    </div>
  );
}
