export interface BilingualText {
  de: string;
  en: string;
}

export type QuestionType =
  | 'multiple_choice'
  | 'true_false'
  | 'number_input'
  | 'drag_sort'
  | 'word_build'
  | 'fill_blank'
  | 'match_pairs';

export type Subject = 'math' | 'deutsch' | 'sachunterricht';
export type Klasse = 1 | 2 | 3 | 4;
export type Difficulty = 1 | 2 | 3;

interface BaseQuestion {
  id: string;
  type: QuestionType;
  subject: Subject;
  klasse: Klasse;
  difficulty: Difficulty;
  topic: string;
  prompt: BilingualText;
  hint?: BilingualText;
  explanation?: BilingualText;
  imageUrl?: string;
}

export interface MultipleChoiceQuestion extends BaseQuestion {
  type: 'multiple_choice';
  options: Array<{ value: string; label: BilingualText }>;
  correctAnswer: string;
}

export interface TrueFalseQuestion extends BaseQuestion {
  type: 'true_false';
  correctAnswer: boolean;
}

export interface NumberInputQuestion extends BaseQuestion {
  type: 'number_input';
  correctAnswer: number;
  tolerance?: number;
}

export interface DragSortQuestion extends BaseQuestion {
  type: 'drag_sort';
  items: Array<{ id: string; label: BilingualText }>;
  categories: Array<{ id: string; label: BilingualText }>;
  correctMapping: Record<string, string>;
}

export interface WordBuildQuestion extends BaseQuestion {
  type: 'word_build';
  letters: string[];
  correctWord: string;
}

export interface FillBlankQuestion extends BaseQuestion {
  type: 'fill_blank';
  options: Array<{ value: string; label: BilingualText }>;
  correctAnswer: string;
}

export interface MatchPairsQuestion extends BaseQuestion {
  type: 'match_pairs';
  pairs: Array<{ left: BilingualText; right: BilingualText }>;
}

export type Question =
  | MultipleChoiceQuestion
  | TrueFalseQuestion
  | NumberInputQuestion
  | DragSortQuestion
  | WordBuildQuestion
  | FillBlankQuestion
  | MatchPairsQuestion;
