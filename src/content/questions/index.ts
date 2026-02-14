import type { Question, Subject, Klasse, Difficulty, QuestionType } from '../../types/question';
import { shuffle } from '../../utils/shuffle';
import { generateAdditionQuestion, generateSubtractionQuestion, generateMultiplicationQuestion, generateDivisionQuestion } from '../../utils/questionGenerator';

import { mathKlasse1 } from './math/klasse1';
import { mathKlasse2 } from './math/klasse2';
import { mathKlasse3 } from './math/klasse3';
import { mathKlasse4 } from './math/klasse4';
import { deutschKlasse1 } from './deutsch/klasse1';
import { deutschKlasse2 } from './deutsch/klasse2';
import { deutschKlasse3 } from './deutsch/klasse3';
import { deutschKlasse4 } from './deutsch/klasse4';
import { sachunterrichtKlasse12 } from './sachunterricht/klasse1-2';
import { sachunterrichtKlasse34 } from './sachunterricht/klasse3-4';

const allStaticQuestions: Question[] = [
  ...mathKlasse1,
  ...mathKlasse2,
  ...mathKlasse3,
  ...mathKlasse4,
  ...deutschKlasse1,
  ...deutschKlasse2,
  ...deutschKlasse3,
  ...deutschKlasse4,
  ...sachunterrichtKlasse12,
  ...sachunterrichtKlasse34,
];

function generateMathQuestions(klasse: Klasse, difficulty: Difficulty, count: number): Question[] {
  const generators = [generateAdditionQuestion, generateSubtractionQuestion];
  if (klasse >= 2) generators.push(generateMultiplicationQuestion);
  if (klasse >= 3) generators.push(generateDivisionQuestion);

  return Array.from({ length: count }, () => {
    const gen = generators[Math.floor(Math.random() * generators.length)];
    return gen(klasse, difficulty);
  });
}

interface QuestionFilters {
  subject?: Subject;
  klasse?: Klasse;
  topic?: string;
  difficulty?: Difficulty;
  type?: QuestionType;
  limit?: number;
}

export function getQuestions(filters: QuestionFilters): Question[] {
  let questions = [...allStaticQuestions];

  if (filters.subject) questions = questions.filter((q) => q.subject === filters.subject);
  if (filters.klasse) questions = questions.filter((q) => q.klasse === filters.klasse);
  if (filters.topic) questions = questions.filter((q) => q.topic === filters.topic);
  if (filters.difficulty) questions = questions.filter((q) => q.difficulty === filters.difficulty);
  if (filters.type) questions = questions.filter((q) => q.type === filters.type);

  const limit = filters.limit ?? 10;

  // If we don't have enough static questions, supplement with generated math
  if (questions.length < limit && (!filters.subject || filters.subject === 'math')) {
    const klasse = filters.klasse ?? 1;
    const difficulty = filters.difficulty ?? 1;
    const needed = limit - questions.length;
    const generated = generateMathQuestions(klasse, difficulty, needed);
    questions = [...questions, ...generated];
  }

  return shuffle(questions).slice(0, limit);
}
