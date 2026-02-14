import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

interface XPCounterProps {
  xp: number;
}

export default function XPCounter({ xp }: XPCounterProps) {
  const [displayXP, setDisplayXP] = useState(xp);
  const [gain, setGain] = useState(0);

  useEffect(() => {
    if (xp > displayXP) {
      setGain(xp - displayXP);
      const step = Math.max(1, Math.floor((xp - displayXP) / 20));
      const interval = setInterval(() => {
        setDisplayXP((prev) => {
          if (prev + step >= xp) {
            clearInterval(interval);
            return xp;
          }
          return prev + step;
        });
      }, 30);
      return () => clearInterval(interval);
    }
    setDisplayXP(xp);
  }, [xp]);

  return (
    <div className="relative flex items-center gap-1">
      <span className="text-xp font-extrabold text-lg">{displayXP} XP</span>
      <AnimatePresence>
        {gain > 0 && (
          <motion.span
            key={gain}
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 0, y: -30 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute -top-2 right-0 text-xp font-bold text-sm"
            onAnimationComplete={() => setGain(0)}
          >
            +{gain}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}
