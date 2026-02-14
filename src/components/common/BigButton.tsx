import { motion } from 'motion/react';
import type { ReactNode } from 'react';

interface BigButtonProps {
  children: ReactNode;
  onClick: () => void;
  color?: 'primary' | 'math' | 'deutsch' | 'sachunterricht' | 'correct' | 'wrong' | 'gray';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  className?: string;
}

const colorClasses = {
  primary: 'bg-primary text-white hover:bg-primary-dark',
  math: 'bg-math text-white hover:bg-math-dark',
  deutsch: 'bg-deutsch text-white hover:bg-deutsch-dark',
  sachunterricht: 'bg-sachunterricht text-white hover:bg-sachunterricht-dark',
  correct: 'bg-correct text-white',
  wrong: 'bg-wrong text-white',
  gray: 'bg-gray-200 text-gray-700 hover:bg-gray-300',
};

const sizeClasses = {
  sm: 'px-4 py-2 text-base min-h-[44px]',
  md: 'px-6 py-3 text-lg min-h-[56px]',
  lg: 'px-8 py-4 text-xl min-h-[64px]',
};

export default function BigButton({ children, onClick, color = 'primary', size = 'md', disabled = false, className = '' }: BigButtonProps) {
  return (
    <motion.button
      whileTap={disabled ? undefined : { scale: 0.95 }}
      whileHover={disabled ? undefined : { scale: 1.02 }}
      onClick={onClick}
      disabled={disabled}
      className={`
        rounded-2xl font-bold shadow-lg transition-colors
        ${colorClasses[color]} ${sizeClasses[size]}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        ${className}
      `}
    >
      {children}
    </motion.button>
  );
}
