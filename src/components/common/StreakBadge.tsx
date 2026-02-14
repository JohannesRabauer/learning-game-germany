import { motion } from 'motion/react';
import { Flame } from 'lucide-react';

interface StreakBadgeProps {
  days: number;
}

export default function StreakBadge({ days }: StreakBadgeProps) {
  if (days === 0) return null;

  const sizeClass = days >= 30 ? 'text-3xl' : days >= 7 ? 'text-2xl' : 'text-xl';

  return (
    <motion.div
      className="flex items-center gap-1"
      animate={{ scale: [1, 1.05, 1] }}
      transition={{ repeat: Infinity, duration: 2 }}
    >
      <Flame className={`text-streak ${sizeClass}`} />
      <span className="font-bold text-streak">{days}</span>
    </motion.div>
  );
}
