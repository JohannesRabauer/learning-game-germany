import { motion } from 'motion/react';

interface ProgressBarProps {
  value: number; // 0-1
  color?: string;
  height?: string;
  showLabel?: boolean;
  className?: string;
}

export default function ProgressBar({ value, color = 'bg-primary', height = 'h-4', showLabel = false, className = '' }: ProgressBarProps) {
  const percent = Math.min(Math.max(value * 100, 0), 100);

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className={`flex-1 ${height} bg-gray-200 rounded-full overflow-hidden`}>
        <motion.div
          className={`${height} ${color} rounded-full`}
          initial={{ width: 0 }}
          animate={{ width: `${percent}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      </div>
      {showLabel && (
        <span className="text-xs font-bold text-gray-600 shrink-0">{Math.round(percent)}%</span>
      )}
    </div>
  );
}
