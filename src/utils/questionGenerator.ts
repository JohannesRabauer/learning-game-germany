import type { MultipleChoiceQuestion, NumberInputQuestion, Klasse, Difficulty } from '../types/question';
import { shuffle, randomInt } from './shuffle';

const MAX_BY_KLASSE: Record<Klasse, number> = { 1: 20, 2: 100, 3: 1000, 4: 10000 };

function generateDistractors(correct: number, count: number, min: number, max: number): number[] {
  const distractors = new Set<number>();
  const offsets = [1, 2, -1, -2, 10, -10, 5, -5];
  for (const offset of offsets) {
    if (distractors.size >= count) break;
    const val = correct + offset;
    if (val !== correct && val >= min && val <= max) {
      distractors.add(val);
    }
  }
  while (distractors.size < count) {
    const val = randomInt(min, max);
    if (val !== correct) distractors.add(val);
  }
  return [...distractors].slice(0, count);
}

let generatorCounter = 0;

export function generateAdditionQuestion(klasse: Klasse, difficulty: Difficulty): MultipleChoiceQuestion {
  const max = MAX_BY_KLASSE[klasse];
  const limit = Math.floor(max / (4 - difficulty));
  const a = randomInt(1, limit);
  const b = randomInt(1, limit);
  const correct = a + b;
  const distractors = generateDistractors(correct, 3, 0, max * 2);
  const options = shuffle([correct, ...distractors]);

  return {
    id: `math-gen-add-${++generatorCounter}`,
    type: 'multiple_choice',
    subject: 'math',
    klasse,
    difficulty,
    topic: 'addition',
    prompt: { de: `Was ist ${a} + ${b}?`, en: `What is ${a} + ${b}?` },
    options: options.map((v) => ({ value: String(v), label: { de: String(v), en: String(v) } })),
    correctAnswer: String(correct),
  };
}

export function generateSubtractionQuestion(klasse: Klasse, difficulty: Difficulty): MultipleChoiceQuestion {
  const max = MAX_BY_KLASSE[klasse];
  const limit = Math.floor(max / (4 - difficulty));
  const b = randomInt(1, limit);
  const a = randomInt(b, limit + b);
  const correct = a - b;
  const distractors = generateDistractors(correct, 3, 0, max);
  const options = shuffle([correct, ...distractors]);

  return {
    id: `math-gen-sub-${++generatorCounter}`,
    type: 'multiple_choice',
    subject: 'math',
    klasse,
    difficulty,
    topic: 'subtraction',
    prompt: { de: `Was ist ${a} - ${b}?`, en: `What is ${a} - ${b}?` },
    options: options.map((v) => ({ value: String(v), label: { de: String(v), en: String(v) } })),
    correctAnswer: String(correct),
  };
}

export function generateMultiplicationQuestion(klasse: Klasse, difficulty: Difficulty): MultipleChoiceQuestion {
  let a: number, b: number;
  if (klasse <= 2) {
    a = randomInt(1, 5);
    b = [2, 5, 10][randomInt(0, 2)];
  } else {
    a = randomInt(2, difficulty >= 2 ? 12 : 10);
    b = randomInt(2, difficulty >= 2 ? 12 : 10);
  }
  const correct = a * b;
  const distractors = generateDistractors(correct, 3, 1, correct + 20);
  const options = shuffle([correct, ...distractors]);

  return {
    id: `math-gen-mul-${++generatorCounter}`,
    type: 'multiple_choice',
    subject: 'math',
    klasse,
    difficulty,
    topic: 'multiplication',
    prompt: { de: `Was ist ${a} × ${b}?`, en: `What is ${a} × ${b}?` },
    options: options.map((v) => ({ value: String(v), label: { de: String(v), en: String(v) } })),
    correctAnswer: String(correct),
  };
}

export function generateDivisionQuestion(klasse: Klasse, difficulty: Difficulty): MultipleChoiceQuestion {
  const b = randomInt(2, difficulty >= 2 ? 12 : 10);
  const correct = randomInt(1, difficulty >= 2 ? 12 : 10);
  const a = b * correct;
  const distractors = generateDistractors(correct, 3, 1, a);
  const options = shuffle([correct, ...distractors]);

  return {
    id: `math-gen-div-${++generatorCounter}`,
    type: 'multiple_choice',
    subject: 'math',
    klasse,
    difficulty,
    topic: 'division',
    prompt: { de: `Was ist ${a} ÷ ${b}?`, en: `What is ${a} ÷ ${b}?` },
    options: options.map((v) => ({ value: String(v), label: { de: String(v), en: String(v) } })),
    correctAnswer: String(correct),
  };
}

export function generateMathFlashQuestion(klasse: Klasse, difficulty: Difficulty): NumberInputQuestion {
  const max = MAX_BY_KLASSE[klasse];
  const limit = Math.floor(max / (4 - difficulty));
  const isAdd = Math.random() > 0.5;
  let a: number, b: number, correct: number, symbol: string;

  if (isAdd) {
    a = randomInt(1, limit);
    b = randomInt(1, limit);
    correct = a + b;
    symbol = '+';
  } else {
    b = randomInt(1, limit);
    a = randomInt(b, limit + b);
    correct = a - b;
    symbol = '-';
  }

  return {
    id: `math-gen-flash-${++generatorCounter}`,
    type: 'number_input',
    subject: 'math',
    klasse,
    difficulty,
    topic: 'mental_math',
    prompt: { de: `${a} ${symbol} ${b} = ?`, en: `${a} ${symbol} ${b} = ?` },
    correctAnswer: correct,
  };
}
