import { motion } from 'motion/react';
import { Clock } from 'lucide-react';

interface TimerProps {
  seconds: number;
  totalSeconds: number;
  warning?: boolean;
}

export default function Timer({ seconds, totalSeconds, warning = false }: TimerProps) {
  const progress = totalSeconds > 0 ? seconds / totalSeconds : 0;
  const isLow = seconds <= 10;

  return (
    <div className="flex items-center gap-2">
      <motion.div animate={isLow || warning ? { scale: [1, 1.2, 1] } : {}} transition={{ repeat: isLow ? Infinity : 0, duration: 1 }}>
        <Clock size={24} className={isLow ? 'text-wrong' : 'text-gray-500'} />
      </motion.div>
      <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          className={`h-full rounded-full ${isLow ? 'bg-wrong' : 'bg-primary'}`}
          animate={{ width: `${progress * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>
      <span className={`font-bold text-lg min-w-[3ch] text-right ${isLow ? 'text-wrong' : 'text-gray-700'}`}>
        {seconds}
      </span>
    </div>
  );
}
