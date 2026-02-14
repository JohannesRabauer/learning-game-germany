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
  primary: 'bg-primary text-white hover:bg-primary-dark active:bg-primary-dark',
  math: 'bg-math text-white hover:bg-math-dark active:bg-math-dark',
  deutsch: 'bg-deutsch text-white hover:bg-deutsch-dark active:bg-deutsch-dark',
  sachunterricht: 'bg-sachunterricht text-white hover:bg-sachunterricht-dark active:bg-sachunterricht-dark',
  correct: 'bg-correct text-white',
  wrong: 'bg-wrong text-white',
  gray: 'bg-gray-200 text-gray-700 hover:bg-gray-300 active:bg-gray-300',
};

const sizeClasses = {
  sm: 'px-5 py-2.5 text-base min-h-[44px]',
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
        rounded-2xl font-bold shadow-md transition-colors inline-flex items-center justify-center
        ${colorClasses[color]} ${sizeClasses[size]}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        ${className}
      `}
    >
      {children}
    </motion.button>
  );
}
