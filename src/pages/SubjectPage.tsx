import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { ArrowLeft, Zap, GripVertical, PenLine, Timer, ChevronRight } from 'lucide-react';
import type { Subject } from '../types/question';
import type { GameMode } from '../types/game';

const modeConfig: { mode: GameMode; icon: typeof Zap; availableFor: Subject[] }[] = [
  { mode: 'quick_round', icon: Timer, availableFor: ['math', 'deutsch', 'sachunterricht'] },
  { mode: 'sort_game', icon: GripVertical, availableFor: ['math', 'deutsch', 'sachunterricht'] },
  { mode: 'math_flash', icon: Zap, availableFor: ['math'] },
  { mode: 'word_builder', icon: PenLine, availableFor: ['deutsch'] },
];

const subjectColorStyles: Record<Subject, { bg: string; iconBg: string; text: string }> = {
  math: { bg: 'bg-math/10 hover:bg-math/15 border-math/20', iconBg: 'bg-math text-white', text: 'text-math' },
  deutsch: { bg: 'bg-deutsch/10 hover:bg-deutsch/15 border-deutsch/20', iconBg: 'bg-deutsch text-white', text: 'text-deutsch' },
  sachunterricht: { bg: 'bg-sachunterricht/10 hover:bg-sachunterricht/15 border-sachunterricht/20', iconBg: 'bg-sachunterricht text-white', text: 'text-sachunterricht' },
};

export default function SubjectPage() {
  const { subject } = useParams<{ subject: string }>();
  const navigate = useNavigate();
  const { t: tGame } = useTranslation('game');
  const { t: tSubjects } = useTranslation('subjects');

  const sub = subject as Subject;
  const colorStyle = subjectColorStyles[sub] ?? subjectColorStyles.math;
  const availableModes = modeConfig.filter((m) => m.availableFor.includes(sub));

  return (
    <div className="space-y-6 py-4">
      <div className="flex items-center gap-3">
        <button onClick={() => navigate('/')} className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer">
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-2xl font-extrabold text-gray-800">
          {tSubjects(`${sub}.icon`)} {tSubjects(`${sub}.name`)}
        </h1>
      </div>

      <div className="grid gap-3">
        {availableModes.map(({ mode, icon: Icon }, idx) => (
          <motion.button
            key={mode}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate(`/game/${sub}/${mode}`)}
            className={`flex items-center gap-4 p-4 rounded-2xl border-2 transition-all cursor-pointer group ${colorStyle.bg}`}
          >
            <div className={`p-3 rounded-xl shadow-sm ${colorStyle.iconBg}`}>
              <Icon size={24} />
            </div>
            <div className="text-left flex-1">
              <p className="font-extrabold text-lg text-gray-800">{tGame(`modes.${mode}`)}</p>
              <p className="text-sm text-gray-500">{tGame(`modeDescriptions.${mode}`)}</p>
            </div>
            <ChevronRight size={20} className="text-gray-400 group-hover:text-gray-600 transition-colors" />
          </motion.button>
        ))}
      </div>
    </div>
  );
}
