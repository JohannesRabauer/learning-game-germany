import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from 'react-i18next';
import BigButton from '../common/BigButton';
import type { WordBuildQuestion } from '../../types/question';

interface WordBuilderProps {
  question: WordBuildQuestion;
  onAnswer: (correct: boolean) => void;
}

export default function WordBuilder({ question, onAnswer }: WordBuilderProps) {
  const { t, i18n } = useTranslation('game');
  const lang = i18n.language?.startsWith('de') ? 'de' : 'en';
  const [selectedIndices, setSelectedIndices] = useState<number[]>([]);
  const [showHint, setShowHint] = useState(false);

  const builtWord = selectedIndices.map((i) => question.letters[i]).join('');
  const isComplete = builtWord.length === question.correctWord.length;

  const addLetter = (index: number) => {
    if (selectedIndices.includes(index)) return;
    setSelectedIndices([...selectedIndices, index]);
  };

  const removeLast = () => {
    setSelectedIndices(selectedIndices.slice(0, -1));
  };

  const clearAll = () => setSelectedIndices([]);

  const handleSubmit = () => {
    const correct = builtWord.toLowerCase() === question.correctWord.toLowerCase();
    onAnswer(correct);
  };

  return (
    <div className="max-w-md mx-auto text-center">
      <p className="text-lg text-gray-600 mb-2">{question.prompt[lang]}</p>

      {showHint && question.hint && (
        <p className="text-sm text-primary font-semibold mb-2">{question.hint[lang]}</p>
      )}

      {/* Built word display */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6 min-h-[80px] flex items-center justify-center gap-1">
        <AnimatePresence>
          {selectedIndices.map((letterIdx, pos) => (
            <motion.span
              key={`${pos}-${letterIdx}`}
              initial={{ scale: 0, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0, y: -20 }}
              className="text-3xl font-extrabold text-primary bg-primary/10 rounded-xl px-3 py-2"
            >
              {question.letters[letterIdx]}
            </motion.span>
          ))}
        </AnimatePresence>
        {builtWord.length === 0 && (
          <span className="text-gray-300 text-xl">{t('wordBuilder.instruction')}</span>
        )}
      </div>

      {/* Available letters */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {question.letters.map((letter, idx) => {
          const used = selectedIndices.includes(idx);
          return (
            <motion.button
              key={idx}
              whileTap={{ scale: 0.9 }}
              onClick={() => addLetter(idx)}
              disabled={used}
              className={`w-14 h-14 rounded-2xl font-bold text-xl shadow-sm transition-all cursor-pointer flex items-center justify-center ${
                used
                  ? 'bg-gray-100 text-gray-300 cursor-not-allowed'
                  : 'bg-white text-gray-800 hover:bg-primary/10 hover:border-primary border-2 border-gray-200'
              }`}
            >
              {letter}
            </motion.button>
          );
        })}
      </div>

      {/* Actions */}
      <div className="flex flex-wrap gap-2 justify-center">
        <BigButton onClick={removeLast} color="gray" size="sm" disabled={selectedIndices.length === 0}>
          ← {t('wordBuilder.undo')}
        </BigButton>
        <BigButton onClick={clearAll} color="gray" size="sm" disabled={selectedIndices.length === 0}>
          {t('wordBuilder.clear')}
        </BigButton>
        {!showHint && question.hint && (
          <BigButton onClick={() => setShowHint(true)} color="gray" size="sm">
            {t('wordBuilder.hint')}
          </BigButton>
        )}
        <BigButton onClick={handleSubmit} color="primary" size="sm" disabled={!isComplete}>
          {t('wordBuilder.submit')}
        </BigButton>
      </div>
    </div>
  );
}
