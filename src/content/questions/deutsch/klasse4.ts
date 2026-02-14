import type { Question } from '../../../types/question';

export const deutschKlasse4: Question[] = [
  // --- Original 10 questions (dk4-001 through dk4-010) ---
  { id: 'dk4-001', type: 'multiple_choice', subject: 'deutsch', klasse: 4, difficulty: 1, topic: 'nouns',
    prompt: { de: 'Welches Wort ist ein Verb (Tunwort)?', en: 'Which word is a verb?' },
    options: [{ value: 'laufen', label: { de: 'laufen', en: 'laufen (to run)' } }, { value: 'Tisch', label: { de: 'Tisch', en: 'Tisch (table)' } }, { value: 'schön', label: { de: 'schön', en: 'schön (beautiful)' } }, { value: 'schnell', label: { de: 'schnell', en: 'schnell (fast)' } }],
    correctAnswer: 'laufen' },
  { id: 'dk4-002', type: 'multiple_choice', subject: 'deutsch', klasse: 4, difficulty: 2, topic: 'compound_words',
    prompt: { de: 'Was ergibt "Feuer" + "wehr"?', en: 'What does "Feuer" + "wehr" make?' },
    options: [{ value: 'Feuerwehr', label: { de: 'Feuerwehr', en: 'Feuerwehr (fire department)' } }, { value: 'FeuerWehr', label: { de: 'FeuerWehr', en: 'FeuerWehr' } }, { value: 'Feuwehr', label: { de: 'Feuwehr', en: 'Feuwehr' } }],
    correctAnswer: 'Feuerwehr' },
  { id: 'dk4-003', type: 'multiple_choice', subject: 'deutsch', klasse: 4, difficulty: 2, topic: 'spelling',
    prompt: { de: 'Welches Wort wird mit "ä" geschrieben?', en: 'Which word is written with "ä"?' },
    options: [{ value: 'Bäcker', label: { de: 'Bäcker', en: 'Bäcker (baker)' } }, { value: 'Becker', label: { de: 'Becker', en: 'Becker' } }, { value: 'Backer', label: { de: 'Backer', en: 'Backer' } }],
    correctAnswer: 'Bäcker' },
  { id: 'dk4-004', type: 'multiple_choice', subject: 'deutsch', klasse: 4, difficulty: 2, topic: 'verbs',
    prompt: { de: 'Was ist die Vergangenheitsform von "gehen"?', en: 'What is the past tense of "gehen" (to go)?' },
    options: [{ value: 'ging', label: { de: 'ging', en: 'ging' } }, { value: 'geht', label: { de: 'geht', en: 'geht' } }, { value: 'ginge', label: { de: 'ginge', en: 'ginge' } }, { value: 'gehte', label: { de: 'gehte', en: 'gehte' } }],
    correctAnswer: 'ging' },
  { id: 'dk4-005', type: 'multiple_choice', subject: 'deutsch', klasse: 4, difficulty: 3, topic: 'sentences',
    prompt: { de: 'Welcher Satz hat die richtige Wortstellung?', en: 'Which sentence has the correct word order?' },
    options: [
      { value: 'correct', label: { de: 'Gestern bin ich ins Kino gegangen.', en: 'Gestern bin ich ins Kino gegangen.' } },
      { value: 'wrong1', label: { de: 'Gestern ich bin ins Kino gegangen.', en: 'Gestern ich bin ins Kino gegangen.' } },
      { value: 'wrong2', label: { de: 'Ich gestern bin ins Kino gegangen.', en: 'Ich gestern bin ins Kino gegangen.' } },
    ],
    correctAnswer: 'correct',
    explanation: { de: 'Nach einer Zeitangabe am Satzanfang kommt das Verb an zweiter Stelle!', en: 'After a time expression at the beginning, the verb comes in second position!' } },
  { id: 'dk4-006', type: 'multiple_choice', subject: 'deutsch', klasse: 4, difficulty: 1, topic: 'adjectives',
    prompt: { de: 'Steigere das Adjektiv: schnell, schneller, ___', en: 'Compare the adjective: schnell, schneller, ___' },
    options: [{ value: 'am schnellsten', label: { de: 'am schnellsten', en: 'am schnellsten' } }, { value: 'schnellster', label: { de: 'schnellster', en: 'schnellster' } }, { value: 'schnellest', label: { de: 'schnellest', en: 'schnellest' } }],
    correctAnswer: 'am schnellsten' },
  { id: 'dk4-007', type: 'multiple_choice', subject: 'deutsch', klasse: 4, difficulty: 2, topic: 'spelling',
    prompt: { de: 'Welches Wort ist richtig? Ich ___ Fußball.', en: 'Which is correct? Ich ___ Fußball (I play soccer).' },
    options: [{ value: 'spiele', label: { de: 'spiele', en: 'spiele' } }, { value: 'schpiele', label: { de: 'schpiele', en: 'schpiele' } }, { value: 'spihle', label: { de: 'spihle', en: 'spihle' } }],
    correctAnswer: 'spiele' },
  { id: 'dk4-008', type: 'multiple_choice', subject: 'deutsch', klasse: 4, difficulty: 3, topic: 'nouns',
    prompt: { de: 'Was ist die Mehrzahl von "Maus"?', en: 'What is the plural of "Maus" (mouse)?' },
    options: [{ value: 'Mäuse', label: { de: 'Mäuse', en: 'Mäuse' } }, { value: 'Mause', label: { de: 'Mause', en: 'Mause' } }, { value: 'Mäusen', label: { de: 'Mäusen', en: 'Mäusen' } }, { value: 'Mauser', label: { de: 'Mauser', en: 'Mauser' } }],
    correctAnswer: 'Mäuse' },
  { id: 'dk4-009', type: 'multiple_choice', subject: 'deutsch', klasse: 4, difficulty: 2, topic: 'articles',
    prompt: { de: 'Welcher Artikel passt? ___ Mädchen', en: 'Which article fits? ___ Mädchen (girl)' },
    options: [{ value: 'das', label: { de: 'das', en: 'das' } }, { value: 'die', label: { de: 'die', en: 'die' } }, { value: 'der', label: { de: 'der', en: 'der' } }],
    correctAnswer: 'das',
    explanation: { de: 'Mädchen ist sächlich wegen der Endung "-chen"!', en: '"Mädchen" is neuter because of the "-chen" ending!' } },
  { id: 'dk4-010', type: 'word_build', subject: 'deutsch', klasse: 4, difficulty: 2, topic: 'compound_words',
    prompt: { de: 'Baue das Wort: Geburtstag + Kuchen', en: 'Build the word: Birthday + cake' },
    letters: ['G', 'E', 'B', 'U', 'R', 'T', 'S', 'T', 'A', 'G', 'S', 'K', 'U', 'C', 'H', 'E', 'N'],
    correctWord: 'GEBURTSTAGSKUCHEN' },

  // --- New questions (dk4-011 through dk4-040) ---

  // dk4-011: verbs - Past tense of "fahren" (difficulty 1)
  { id: 'dk4-011', type: 'multiple_choice', subject: 'deutsch', klasse: 4, difficulty: 1, topic: 'verbs',
    prompt: { de: 'Was ist die Vergangenheitsform von "fahren"?', en: 'What is the past tense of "fahren" (to drive)?' },
    options: [{ value: 'fuhr', label: { de: 'fuhr', en: 'fuhr' } }, { value: 'fahrte', label: { de: 'fahrte', en: 'fahrte' } }, { value: 'fährt', label: { de: 'fährt', en: 'fährt' } }, { value: 'gefahren', label: { de: 'gefahren', en: 'gefahren' } }],
    correctAnswer: 'fuhr' },

  // dk4-012: verbs - Past tense of "kommen" (difficulty 1)
  { id: 'dk4-012', type: 'multiple_choice', subject: 'deutsch', klasse: 4, difficulty: 1, topic: 'verbs',
    prompt: { de: 'Was ist die Vergangenheitsform von "kommen"?', en: 'What is the past tense of "kommen" (to come)?' },
    options: [{ value: 'kam', label: { de: 'kam', en: 'kam' } }, { value: 'kommte', label: { de: 'kommte', en: 'kommte' } }, { value: 'komm', label: { de: 'komm', en: 'komm' } }, { value: 'gekommen', label: { de: 'gekommen', en: 'gekommen' } }],
    correctAnswer: 'kam' },

  // dk4-013: verbs - Past tense of "schreiben" (difficulty 2)
  { id: 'dk4-013', type: 'multiple_choice', subject: 'deutsch', klasse: 4, difficulty: 2, topic: 'verbs',
    prompt: { de: 'Was ist die Vergangenheitsform von "schreiben"?', en: 'What is the past tense of "schreiben" (to write)?' },
    options: [{ value: 'schrieb', label: { de: 'schrieb', en: 'schrieb' } }, { value: 'schreibte', label: { de: 'schreibte', en: 'schreibte' } }, { value: 'geschrieben', label: { de: 'geschrieben', en: 'geschrieben' } }, { value: 'schreibt', label: { de: 'schreibt', en: 'schreibt' } }],
    correctAnswer: 'schrieb' },

  // dk4-014: verbs - Past tense of "lesen" (difficulty 2)
  { id: 'dk4-014', type: 'multiple_choice', subject: 'deutsch', klasse: 4, difficulty: 2, topic: 'verbs',
    prompt: { de: 'Was ist die Vergangenheitsform von "lesen"?', en: 'What is the past tense of "lesen" (to read)?' },
    options: [{ value: 'las', label: { de: 'las', en: 'las' } }, { value: 'leste', label: { de: 'leste', en: 'leste' } }, { value: 'liest', label: { de: 'liest', en: 'liest' } }, { value: 'gelesen', label: { de: 'gelesen', en: 'gelesen' } }],
    correctAnswer: 'las' },

  // dk4-015: verbs - Past tense of "essen" (difficulty 2)
  { id: 'dk4-015', type: 'multiple_choice', subject: 'deutsch', klasse: 4, difficulty: 2, topic: 'verbs',
    prompt: { de: 'Was ist die Vergangenheitsform von "essen"?', en: 'What is the past tense of "essen" (to eat)?' },
    options: [{ value: 'aß', label: { de: 'aß', en: 'aß' } }, { value: 'esste', label: { de: 'esste', en: 'esste' } }, { value: 'isst', label: { de: 'isst', en: 'isst' } }, { value: 'gegessen', label: { de: 'gegessen', en: 'gegessen' } }],
    correctAnswer: 'aß' },

  // dk4-016: verbs - Past tense of "trinken" (difficulty 2)
  { id: 'dk4-016', type: 'multiple_choice', subject: 'deutsch', klasse: 4, difficulty: 2, topic: 'verbs',
    prompt: { de: 'Was ist die Vergangenheitsform von "trinken"?', en: 'What is the past tense of "trinken" (to drink)?' },
    options: [{ value: 'trank', label: { de: 'trank', en: 'trank' } }, { value: 'trinkte', label: { de: 'trinkte', en: 'trinkte' } }, { value: 'trinkt', label: { de: 'trinkt', en: 'trinkt' } }, { value: 'getrunken', label: { de: 'getrunken', en: 'getrunken' } }],
    correctAnswer: 'trank' },

  // dk4-017: verbs - Present perfect with "haben" (difficulty 3)
  { id: 'dk4-017', type: 'multiple_choice', subject: 'deutsch', klasse: 4, difficulty: 3, topic: 'verbs',
    prompt: { de: 'Welcher Satz ist im Perfekt richtig?', en: 'Which sentence is correct in the present perfect?' },
    options: [
      { value: 'correct', label: { de: 'Er hat ein Buch gelesen.', en: 'Er hat ein Buch gelesen.' } },
      { value: 'wrong1', label: { de: 'Er hat ein Buch lesen.', en: 'Er hat ein Buch lesen.' } },
      { value: 'wrong2', label: { de: 'Er haben ein Buch gelesen.', en: 'Er haben ein Buch gelesen.' } },
    ],
    correctAnswer: 'correct',
    explanation: { de: 'Perfekt wird mit "haben/sein" + Partizip II gebildet: hat gelesen.', en: 'The present perfect is formed with "haben/sein" + past participle: hat gelesen.' } },

  // dk4-018: verbs - Present perfect with "sein" (difficulty 3)
  { id: 'dk4-018', type: 'multiple_choice', subject: 'deutsch', klasse: 4, difficulty: 3, topic: 'verbs',
    prompt: { de: 'Welcher Satz ist im Perfekt richtig?', en: 'Which sentence is correct in the present perfect?' },
    options: [
      { value: 'correct', label: { de: 'Sie ist nach Hause gelaufen.', en: 'Sie ist nach Hause gelaufen.' } },
      { value: 'wrong1', label: { de: 'Sie hat nach Hause gelaufen.', en: 'Sie hat nach Hause gelaufen.' } },
      { value: 'wrong2', label: { de: 'Sie ist nach Hause laufen.', en: 'Sie ist nach Hause laufen.' } },
    ],
    correctAnswer: 'correct',
    explanation: { de: 'Verben der Bewegung bilden das Perfekt mit "sein": Sie ist gelaufen.', en: 'Verbs of movement form the perfect with "sein": Sie ist gelaufen.' } },

  // dk4-019: verbs - Past tense of "singen" (difficulty 2)
  { id: 'dk4-019', type: 'multiple_choice', subject: 'deutsch', klasse: 4, difficulty: 2, topic: 'verbs',
    prompt: { de: 'Was ist die Vergangenheitsform von "singen"?', en: 'What is the past tense of "singen" (to sing)?' },
    options: [{ value: 'sang', label: { de: 'sang', en: 'sang' } }, { value: 'singte', label: { de: 'singte', en: 'singte' } }, { value: 'singt', label: { de: 'singt', en: 'singt' } }, { value: 'gesungen', label: { de: 'gesungen', en: 'gesungen' } }],
    correctAnswer: 'sang' },

  // dk4-020: verbs - Past tense of "sprechen" (difficulty 3)
  { id: 'dk4-020', type: 'multiple_choice', subject: 'deutsch', klasse: 4, difficulty: 3, topic: 'verbs',
    prompt: { de: 'Was ist die Vergangenheitsform von "sprechen"?', en: 'What is the past tense of "sprechen" (to speak)?' },
    options: [{ value: 'sprach', label: { de: 'sprach', en: 'sprach' } }, { value: 'sprechte', label: { de: 'sprechte', en: 'sprechte' } }, { value: 'spricht', label: { de: 'spricht', en: 'spricht' } }, { value: 'gesprochen', label: { de: 'gesprochen', en: 'gesprochen' } }],
    correctAnswer: 'sprach' },

  // dk4-021: adjectives - Superlative of "groß" (difficulty 1)
  { id: 'dk4-021', type: 'multiple_choice', subject: 'deutsch', klasse: 4, difficulty: 1, topic: 'adjectives',
    prompt: { de: 'Steigere das Adjektiv: groß, größer, ___', en: 'Compare the adjective: groß, größer, ___' },
    options: [{ value: 'am größten', label: { de: 'am größten', en: 'am größten' } }, { value: 'am großsten', label: { de: 'am großsten', en: 'am großsten' } }, { value: 'größtest', label: { de: 'größtest', en: 'größtest' } }],
    correctAnswer: 'am größten' },

  // dk4-022: adjectives - Superlative of "gut" (difficulty 2)
  { id: 'dk4-022', type: 'multiple_choice', subject: 'deutsch', klasse: 4, difficulty: 2, topic: 'adjectives',
    prompt: { de: 'Steigere das Adjektiv: gut, besser, ___', en: 'Compare the adjective: gut, besser, ___' },
    options: [{ value: 'am besten', label: { de: 'am besten', en: 'am besten' } }, { value: 'am gutsten', label: { de: 'am gutsten', en: 'am gutsten' } }, { value: 'am besserten', label: { de: 'am besserten', en: 'am besserten' } }],
    correctAnswer: 'am besten',
    explanation: { de: '"Gut" wird unregelmäßig gesteigert: gut – besser – am besten.', en: '"Gut" has an irregular comparison: gut – besser – am besten.' } },

  // dk4-023: adjectives - Superlative of "viel" (difficulty 2)
  { id: 'dk4-023', type: 'multiple_choice', subject: 'deutsch', klasse: 4, difficulty: 2, topic: 'adjectives',
    prompt: { de: 'Steigere das Adjektiv: viel, mehr, ___', en: 'Compare the adjective: viel, mehr, ___' },
    options: [{ value: 'am meisten', label: { de: 'am meisten', en: 'am meisten' } }, { value: 'am mehrsten', label: { de: 'am mehrsten', en: 'am mehrsten' } }, { value: 'am vielsten', label: { de: 'am vielsten', en: 'am vielsten' } }],
    correctAnswer: 'am meisten',
    explanation: { de: '"Viel" wird unregelmäßig gesteigert: viel – mehr – am meisten.', en: '"Viel" has an irregular comparison: viel – mehr – am meisten.' } },

  // dk4-024: adjectives - Comparative in a sentence (difficulty 3)
  { id: 'dk4-024', type: 'multiple_choice', subject: 'deutsch', klasse: 4, difficulty: 3, topic: 'adjectives',
    prompt: { de: 'Welcher Satz ist richtig?', en: 'Which sentence is correct?' },
    options: [
      { value: 'correct', label: { de: 'Der Elefant ist größer als die Maus.', en: 'The elephant is bigger than the mouse.' } },
      { value: 'wrong1', label: { de: 'Der Elefant ist großer als die Maus.', en: 'Der Elefant ist großer als die Maus.' } },
      { value: 'wrong2', label: { de: 'Der Elefant ist mehr groß als die Maus.', en: 'Der Elefant ist mehr groß als die Maus.' } },
    ],
    correctAnswer: 'correct',
    explanation: { de: 'Beim Komparativ bekommt "groß" einen Umlaut: größer.', en: 'In the comparative, "groß" gets an umlaut: größer.' } },

  // dk4-025: adjectives - Superlative of "hoch" (difficulty 3)
  { id: 'dk4-025', type: 'multiple_choice', subject: 'deutsch', klasse: 4, difficulty: 3, topic: 'adjectives',
    prompt: { de: 'Steigere das Adjektiv: hoch, höher, ___', en: 'Compare the adjective: hoch, höher, ___' },
    options: [{ value: 'am höchsten', label: { de: 'am höchsten', en: 'am höchsten' } }, { value: 'am hochsten', label: { de: 'am hochsten', en: 'am hochsten' } }, { value: 'am höhsten', label: { de: 'am höhsten', en: 'am höhsten' } }],
    correctAnswer: 'am höchsten',
    explanation: { de: '"Hoch" wird unregelmäßig gesteigert: hoch – höher – am höchsten.', en: '"Hoch" has an irregular comparison: hoch – höher – am höchsten.' } },

  // dk4-026: compound_words - "Feuerwehr" + "auto" (difficulty 2)
  { id: 'dk4-026', type: 'multiple_choice', subject: 'deutsch', klasse: 4, difficulty: 2, topic: 'compound_words',
    prompt: { de: 'Was ergibt "Feuerwehr" + "auto"?', en: 'What does "Feuerwehr" + "auto" make?' },
    options: [{ value: 'Feuerwehrauto', label: { de: 'Feuerwehrauto', en: 'Feuerwehrauto (fire truck)' } }, { value: 'Feuer Wehrauto', label: { de: 'Feuer Wehrauto', en: 'Feuer Wehrauto' } }, { value: 'FeuerwehrAuto', label: { de: 'FeuerwehrAuto', en: 'FeuerwehrAuto' } }],
    correctAnswer: 'Feuerwehrauto' },

  // dk4-027: compound_words - "Klassen" + "zimmer" (difficulty 2)
  { id: 'dk4-027', type: 'multiple_choice', subject: 'deutsch', klasse: 4, difficulty: 2, topic: 'compound_words',
    prompt: { de: 'Was ergibt "Klassen" + "zimmer"?', en: 'What does "Klassen" + "zimmer" make?' },
    options: [{ value: 'Klassenzimmer', label: { de: 'Klassenzimmer', en: 'Klassenzimmer (classroom)' } }, { value: 'KlassenZimmer', label: { de: 'KlassenZimmer', en: 'KlassenZimmer' } }, { value: 'Klassen Zimmer', label: { de: 'Klassen Zimmer', en: 'Klassen Zimmer' } }],
    correctAnswer: 'Klassenzimmer' },

  // dk4-028: compound_words - word_build "Weihnachtsbaum" (difficulty 3)
  { id: 'dk4-028', type: 'word_build', subject: 'deutsch', klasse: 4, difficulty: 3, topic: 'compound_words',
    prompt: { de: 'Baue das Wort: Weihnacht + Baum (mit Fugen-s)', en: 'Build the word: Christmas + tree (with linking s)' },
    letters: ['W', 'E', 'I', 'H', 'N', 'A', 'C', 'H', 'T', 'S', 'B', 'A', 'U', 'M'],
    correctWord: 'WEIHNACHTSBAUM' },

  // dk4-029: compound_words - word_build "Kühlschrank" (difficulty 3)
  { id: 'dk4-029', type: 'word_build', subject: 'deutsch', klasse: 4, difficulty: 3, topic: 'compound_words',
    prompt: { de: 'Baue das Wort: kühl + Schrank', en: 'Build the word: cool + cabinet (refrigerator)' },
    letters: ['K', 'Ü', 'H', 'L', 'S', 'C', 'H', 'R', 'A', 'N', 'K'],
    correctWord: 'KÜHLSCHRANK' },

  // dk4-030: spelling - ß vs ss (difficulty 2)
  { id: 'dk4-030', type: 'multiple_choice', subject: 'deutsch', klasse: 4, difficulty: 2, topic: 'spelling',
    prompt: { de: 'Welche Schreibweise ist richtig?', en: 'Which spelling is correct?' },
    options: [{ value: 'Straße', label: { de: 'Straße', en: 'Straße (street)' } }, { value: 'Strasse', label: { de: 'Strasse', en: 'Strasse' } }, { value: 'Strase', label: { de: 'Strase', en: 'Strase' } }],
    correctAnswer: 'Straße',
    explanation: { de: 'Nach einem langen Vokal steht "ß", nicht "ss".', en: 'After a long vowel, "ß" is used, not "ss".' } },

  // dk4-031: spelling - ie vs ei (difficulty 2)
  { id: 'dk4-031', type: 'multiple_choice', subject: 'deutsch', klasse: 4, difficulty: 2, topic: 'spelling',
    prompt: { de: 'Welches Wort ist richtig geschrieben?', en: 'Which word is spelled correctly?' },
    options: [{ value: 'Biene', label: { de: 'Biene', en: 'Biene (bee)' } }, { value: 'Beine', label: { de: 'Beine', en: 'Beine (legs)' } }, { value: 'Biene und Beine', label: { de: 'Beide sind richtig!', en: 'Both are correct!' } }],
    correctAnswer: 'Biene und Beine',
    explanation: { de: '"Biene" (Insekt) und "Beine" (Körperteil) sind beide richtig – aber verschiedene Wörter!', en: '"Biene" (insect) and "Beine" (legs) are both correct – but different words!' } },

  // dk4-032: spelling - ck vs k (difficulty 3)
  { id: 'dk4-032', type: 'multiple_choice', subject: 'deutsch', klasse: 4, difficulty: 3, topic: 'spelling',
    prompt: { de: 'Welches Wort wird mit "ck" geschrieben?', en: 'Which word is written with "ck"?' },
    options: [{ value: 'Brücke', label: { de: 'Brücke', en: 'Brücke (bridge)' } }, { value: 'Musik', label: { de: 'Musik', en: 'Musik (music)' } }, { value: 'Fabrik', label: { de: 'Fabrik', en: 'Fabrik (factory)' } }],
    correctAnswer: 'Brücke',
    explanation: { de: 'Nach einem kurzen Vokal schreibt man "ck": Brücke.', en: 'After a short vowel, "ck" is used: Brücke.' } },

  // dk4-033: spelling - tz vs z (difficulty 3)
  { id: 'dk4-033', type: 'multiple_choice', subject: 'deutsch', klasse: 4, difficulty: 3, topic: 'spelling',
    prompt: { de: 'Welches Wort wird mit "tz" geschrieben?', en: 'Which word is written with "tz"?' },
    options: [{ value: 'Katze', label: { de: 'Katze', en: 'Katze (cat)' } }, { value: 'Herz', label: { de: 'Herz', en: 'Herz (heart)' } }, { value: 'Holz', label: { de: 'Holz', en: 'Holz (wood)' } }],
    correctAnswer: 'Katze',
    explanation: { de: 'Nach einem kurzen Vokal schreibt man "tz": Katze. Nach l, n, r steht nur "z".', en: 'After a short vowel, "tz" is used: Katze. After l, n, r only "z" is used.' } },

  // dk4-034: sentences - Subordinate clause with "weil" (difficulty 2)
  { id: 'dk4-034', type: 'multiple_choice', subject: 'deutsch', klasse: 4, difficulty: 2, topic: 'sentences',
    prompt: { de: 'Welcher Satz mit "weil" ist richtig?', en: 'Which sentence with "weil" (because) is correct?' },
    options: [
      { value: 'correct', label: { de: 'Ich bleibe zu Hause, weil ich krank bin.', en: 'I stay home because I am sick.' } },
      { value: 'wrong1', label: { de: 'Ich bleibe zu Hause, weil ich bin krank.', en: 'Ich bleibe zu Hause, weil ich bin krank.' } },
      { value: 'wrong2', label: { de: 'Ich bleibe zu Hause, weil bin ich krank.', en: 'Ich bleibe zu Hause, weil bin ich krank.' } },
    ],
    correctAnswer: 'correct',
    explanation: { de: 'In Nebensätzen mit "weil" steht das Verb am Ende!', en: 'In subordinate clauses with "weil", the verb goes to the end!' } },

  // dk4-035: sentences - Subordinate clause with "dass" (difficulty 3)
  { id: 'dk4-035', type: 'multiple_choice', subject: 'deutsch', klasse: 4, difficulty: 3, topic: 'sentences',
    prompt: { de: 'Welcher Satz mit "dass" ist richtig?', en: 'Which sentence with "dass" (that) is correct?' },
    options: [
      { value: 'correct', label: { de: 'Ich weiß, dass er morgen kommt.', en: 'I know that he comes tomorrow.' } },
      { value: 'wrong1', label: { de: 'Ich weiß, dass er kommt morgen.', en: 'Ich weiß, dass er kommt morgen.' } },
      { value: 'wrong2', label: { de: 'Ich weiß, das er morgen kommt.', en: 'Ich weiß, das er morgen kommt.' } },
    ],
    correctAnswer: 'correct',
    explanation: { de: 'In Nebensätzen mit "dass" steht das Verb am Ende. "Dass" (Konjunktion) wird mit "ss" geschrieben!', en: 'In subordinate clauses with "dass", the verb goes to the end. "Dass" (conjunction) is spelled with "ss"!' } },

  // dk4-036: nouns - Plural of "Haus" (difficulty 2)
  { id: 'dk4-036', type: 'multiple_choice', subject: 'deutsch', klasse: 4, difficulty: 2, topic: 'nouns',
    prompt: { de: 'Was ist die Mehrzahl von "Haus"?', en: 'What is the plural of "Haus" (house)?' },
    options: [{ value: 'Häuser', label: { de: 'Häuser', en: 'Häuser' } }, { value: 'Hause', label: { de: 'Hause', en: 'Hause' } }, { value: 'Hauser', label: { de: 'Hauser', en: 'Hauser' } }, { value: 'Häuse', label: { de: 'Häuse', en: 'Häuse' } }],
    correctAnswer: 'Häuser' },

  // dk4-037: nouns - Plural of "Buch" (difficulty 2)
  { id: 'dk4-037', type: 'multiple_choice', subject: 'deutsch', klasse: 4, difficulty: 2, topic: 'nouns',
    prompt: { de: 'Was ist die Mehrzahl von "Buch"?', en: 'What is the plural of "Buch" (book)?' },
    options: [{ value: 'Bücher', label: { de: 'Bücher', en: 'Bücher' } }, { value: 'Buchs', label: { de: 'Buchs', en: 'Buchs' } }, { value: 'Bucher', label: { de: 'Bucher', en: 'Bucher' } }, { value: 'Büche', label: { de: 'Büche', en: 'Büche' } }],
    correctAnswer: 'Bücher' },

  // dk4-038: nouns - Plural of "Apfel" (difficulty 3)
  { id: 'dk4-038', type: 'multiple_choice', subject: 'deutsch', klasse: 4, difficulty: 3, topic: 'nouns',
    prompt: { de: 'Was ist die Mehrzahl von "Apfel"?', en: 'What is the plural of "Apfel" (apple)?' },
    options: [{ value: 'Äpfel', label: { de: 'Äpfel', en: 'Äpfel' } }, { value: 'Apfeln', label: { de: 'Apfeln', en: 'Apfeln' } }, { value: 'Apfels', label: { de: 'Apfels', en: 'Apfels' } }, { value: 'Äpfeln', label: { de: 'Äpfeln', en: 'Äpfeln' } }],
    correctAnswer: 'Äpfel' },

  // dk4-039: prepositions - Wechselpräpositionen Dativ/Akkusativ (difficulty 3)
  { id: 'dk4-039', type: 'multiple_choice', subject: 'deutsch', klasse: 4, difficulty: 3, topic: 'prepositions',
    prompt: { de: 'Welcher Satz ist richtig? (Wo? → Dativ)', en: 'Which sentence is correct? (Where? → Dative)' },
    options: [
      { value: 'correct', label: { de: 'Das Buch liegt auf dem Tisch.', en: 'The book is lying on the table.' } },
      { value: 'wrong1', label: { de: 'Das Buch liegt auf den Tisch.', en: 'Das Buch liegt auf den Tisch.' } },
      { value: 'wrong2', label: { de: 'Das Buch liegt auf der Tisch.', en: 'Das Buch liegt auf der Tisch.' } },
    ],
    correctAnswer: 'correct',
    explanation: { de: 'Bei "Wo?" (Ort) steht nach Wechselpräpositionen der Dativ: auf dem Tisch.', en: 'With "Where?" (location), two-way prepositions take the dative: auf dem Tisch.' } },

  // dk4-040: true_false - Grammar fact about nouns (difficulty 2)
  { id: 'dk4-040', type: 'true_false', subject: 'deutsch', klasse: 4, difficulty: 2, topic: 'nouns',
    prompt: { de: 'Nomen (Namenwörter) werden im Deutschen immer großgeschrieben.', en: 'Nouns are always capitalized in German.' },
    correctAnswer: true,
    explanation: { de: 'Richtig! Im Deutschen werden alle Nomen großgeschrieben, z.B. Tisch, Hund, Freude.', en: 'Correct! In German, all nouns are capitalized, e.g. Tisch, Hund, Freude.' } },
];
