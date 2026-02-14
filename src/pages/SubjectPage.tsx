import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import BigButton from '../components/common/BigButton';
import { ArrowLeft, Zap, GripVertical, PenLine, Timer } from 'lucide-react';
import type { Subject } from '../types/question';
import type { GameMode } from '../types/game';

const modeConfig: { mode: GameMode; icon: typeof Zap; availableFor: Subject[] }[] = [
  { mode: 'quick_round', icon: Timer, availableFor: ['math', 'deutsch', 'sachunterricht'] },
  { mode: 'sort_game', icon: GripVertical, availableFor: ['math', 'deutsch', 'sachunterricht'] },
  { mode: 'math_flash', icon: Zap, availableFor: ['math'] },
  { mode: 'word_builder', icon: PenLine, availableFor: ['deutsch'] },
];

const subjectColors: Record<Subject, 'math' | 'deutsch' | 'sachunterricht'> = {
  math: 'math',
  deutsch: 'deutsch',
  sachunterricht: 'sachunterricht',
};

export default function SubjectPage() {
  const { subject } = useParams<{ subject: string }>();
  const navigate = useNavigate();
  const { t: tGame } = useTranslation('game');
  const { t: tSubjects } = useTranslation('subjects');

  const sub = subject as Subject;
  const color = subjectColors[sub] ?? 'primary';
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

      <div className="grid gap-4">
        {availableModes.map(({ mode, icon: Icon }, idx) => (
          <motion.div
            key={mode}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <BigButton
              onClick={() => navigate(`/game/${sub}/${mode}`)}
              color={color}
              size="lg"
              className="w-full flex items-center gap-4 justify-start text-left"
            >
              <Icon size={28} />
              <div>
                <p className="font-extrabold text-lg">{tGame(`modes.${mode}`)}</p>
                <p className="text-sm opacity-80">{tGame(`modeDescriptions.${mode}`)}</p>
              </div>
            </BigButton>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
