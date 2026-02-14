import { motion } from 'motion/react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  stars: 1 | 2 | 3;
  size?: number;
}

export default function StarRating({ stars, size = 40 }: StarRatingProps) {
  return (
    <div className="flex gap-2 items-center justify-center">
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: i * 0.2, type: 'spring', stiffness: 200 }}
        >
          <Star
            size={size}
            className={i <= stars ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}
          />
        </motion.div>
      ))}
    </div>
  );
}
