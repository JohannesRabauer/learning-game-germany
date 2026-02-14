import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { DndContext, useDraggable, useDroppable, type DragEndEvent } from '@dnd-kit/core';
import BigButton from '../common/BigButton';
import type { DragSortQuestion } from '../../types/question';

interface DragDropAreaProps {
  question: DragSortQuestion;
  onAnswer: (correct: boolean) => void;
}

function DraggableItem({ id, label, placed }: { id: string; label: string; placed: boolean }) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({ id });
  const style = transform ? { transform: `translate(${transform.x}px, ${transform.y}px)` } : undefined;

  if (placed) return null;

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className={`bg-white border-2 border-gray-300 rounded-xl px-4 py-3 font-bold text-center cursor-grab active:cursor-grabbing shadow-sm
        ${isDragging ? 'opacity-50 z-50' : 'hover:border-primary'}`}
    >
      {label}
    </div>
  );
}

function DroppableCategory({ id, label, items }: { id: string; label: string; items: { id: string; label: string }[] }) {
  const { isOver, setNodeRef } = useDroppable({ id });

  return (
    <div
      ref={setNodeRef}
      className={`border-3 border-dashed rounded-2xl p-4 min-h-[120px] transition-colors ${
        isOver ? 'border-primary bg-primary/5' : 'border-gray-300 bg-gray-50'
      }`}
    >
      <p className="font-bold text-center text-gray-600 mb-2">{label}</p>
      <div className="flex flex-wrap gap-2 justify-center">
        {items.map((item) => (
          <motion.span
            key={item.id}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="bg-primary/10 text-primary font-semibold px-3 py-1.5 rounded-lg text-sm"
          >
            {item.label}
          </motion.span>
        ))}
      </div>
    </div>
  );
}

export default function DragDropArea({ question, onAnswer }: DragDropAreaProps) {
  const { t, i18n } = useTranslation('game');
  const lang = i18n.language?.startsWith('de') ? 'de' : 'en';
  const [placements, setPlacements] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState(false);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over) {
      setPlacements((prev) => ({ ...prev, [active.id as string]: over.id as string }));
    }
  };

  const handleCheck = () => {
    setChecked(true);
    const allCorrect = question.items.every(
      (item) => placements[item.id] === question.correctMapping[item.id]
    );
    setTimeout(() => onAnswer(allCorrect), 1500);
  };

  const placedItems = (categoryId: string) =>
    question.items
      .filter((item) => placements[item.id] === categoryId)
      .map((item) => ({ id: item.id, label: item.label[lang] }));

  const allPlaced = question.items.every((item) => placements[item.id]);

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="max-w-lg mx-auto">
        <p className="text-center text-gray-600 mb-4">{t('dragSort.instruction')}</p>

        {/* Draggable items */}
        <div className="flex flex-wrap gap-2 justify-center mb-6">
          {question.items.map((item) => (
            <DraggableItem
              key={item.id}
              id={item.id}
              label={item.label[lang]}
              placed={!!placements[item.id]}
            />
          ))}
        </div>

        {/* Drop zones */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {question.categories.map((category) => (
            <DroppableCategory
              key={category.id}
              id={category.id}
              label={category.label[lang]}
              items={placedItems(category.id)}
            />
          ))}
        </div>

        <div className="flex justify-center gap-3">
          <BigButton onClick={() => setPlacements({})} color="gray" size="sm">
            Reset
          </BigButton>
          <BigButton onClick={handleCheck} color="primary" size="sm" disabled={!allPlaced || checked}>
            {t('dragSort.check')}
          </BigButton>
        </div>
      </div>
    </DndContext>
  );
}
