import { motion } from 'motion/react';

interface MascotSpeechProps {
  message: string;
  mood?: 'happy' | 'excited' | 'thinking' | 'sad';
  size?: 'sm' | 'md' | 'lg';
}

const moodEmoji = {
  happy: '😊',
  excited: '🎉',
  thinking: '🤔',
  sad: '😢',
};

export default function MascotSpeech({ message, mood = 'happy', size = 'md' }: MascotSpeechProps) {
  const sizeClasses = {
    sm: 'text-base p-3',
    md: 'text-lg p-4',
    lg: 'text-xl p-5',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-start gap-3 max-w-md mx-auto"
    >
      <motion.div
        className="text-5xl flex-shrink-0"
        animate={{ rotate: [0, -5, 5, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
      >
        🦉
      </motion.div>
      <div className={`bg-white rounded-2xl shadow-md ${sizeClasses[size]} relative`}>
        <div className="absolute left-[-8px] top-4 w-0 h-0 border-t-[8px] border-t-transparent border-r-[8px] border-r-white border-b-[8px] border-b-transparent" />
        <p className="font-semibold text-gray-700">
          {message} {moodEmoji[mood]}
        </p>
      </div>
    </motion.div>
  );
}
