import type { Question } from '../../../types/question';

export const mathKlasse4: Question[] = [
  // === ORIGINAL 10 QUESTIONS (mk4-001 through mk4-010) ===
  { id: 'mk4-001', type: 'multiple_choice', subject: 'math', klasse: 4, difficulty: 1, topic: 'multiplication',
    prompt: { de: 'Was ist 25 × 4?', en: 'What is 25 × 4?' },
    options: [{ value: '100', label: { de: '100', en: '100' } }, { value: '90', label: { de: '90', en: '90' } }, { value: '125', label: { de: '125', en: '125' } }, { value: '80', label: { de: '80', en: '80' } }],
    correctAnswer: '100' },
  { id: 'mk4-002', type: 'multiple_choice', subject: 'math', klasse: 4, difficulty: 1, topic: 'division',
    prompt: { de: 'Was ist 144 ÷ 12?', en: 'What is 144 ÷ 12?' },
    options: [{ value: '12', label: { de: '12', en: '12' } }, { value: '11', label: { de: '11', en: '11' } }, { value: '13', label: { de: '13', en: '13' } }, { value: '14', label: { de: '14', en: '14' } }],
    correctAnswer: '12' },
  { id: 'mk4-003', type: 'multiple_choice', subject: 'math', klasse: 4, difficulty: 2, topic: 'fractions',
    prompt: { de: 'Was ist die Hälfte von 48?', en: 'What is half of 48?' },
    options: [{ value: '24', label: { de: '24', en: '24' } }, { value: '22', label: { de: '22', en: '22' } }, { value: '28', label: { de: '28', en: '28' } }, { value: '26', label: { de: '26', en: '26' } }],
    correctAnswer: '24' },
  { id: 'mk4-004', type: 'multiple_choice', subject: 'math', klasse: 4, difficulty: 2, topic: 'fractions',
    prompt: { de: 'Was ist ein Viertel von 100?', en: 'What is a quarter of 100?' },
    options: [{ value: '25', label: { de: '25', en: '25' } }, { value: '50', label: { de: '50', en: '50' } }, { value: '20', label: { de: '20', en: '20' } }, { value: '75', label: { de: '75', en: '75' } }],
    correctAnswer: '25' },
  { id: 'mk4-005', type: 'multiple_choice', subject: 'math', klasse: 4, difficulty: 2, topic: 'addition',
    prompt: { de: 'Was ist 4.567 + 3.433?', en: 'What is 4,567 + 3,433?' },
    options: [{ value: '8000', label: { de: '8.000', en: '8,000' } }, { value: '7000', label: { de: '7.000', en: '7,000' } }, { value: '8100', label: { de: '8.100', en: '8,100' } }, { value: '7900', label: { de: '7.900', en: '7,900' } }],
    correctAnswer: '8000' },
  { id: 'mk4-006', type: 'multiple_choice', subject: 'math', klasse: 4, difficulty: 3, topic: 'multiplication',
    prompt: { de: 'Was ist 15 × 15?', en: 'What is 15 × 15?' },
    options: [{ value: '225', label: { de: '225', en: '225' } }, { value: '215', label: { de: '215', en: '215' } }, { value: '250', label: { de: '250', en: '250' } }, { value: '200', label: { de: '200', en: '200' } }],
    correctAnswer: '225' },
  { id: 'mk4-007', type: 'multiple_choice', subject: 'math', klasse: 4, difficulty: 1, topic: 'geometry',
    prompt: { de: 'Wie berechnet man den Umfang eines Quadrats mit Seitenlänge 5 cm?', en: 'What is the perimeter of a square with side 5 cm?' },
    options: [{ value: '20', label: { de: '20 cm', en: '20 cm' } }, { value: '25', label: { de: '25 cm', en: '25 cm' } }, { value: '10', label: { de: '10 cm', en: '10 cm' } }, { value: '15', label: { de: '15 cm', en: '15 cm' } }],
    correctAnswer: '20' },
  { id: 'mk4-008', type: 'multiple_choice', subject: 'math', klasse: 4, difficulty: 2, topic: 'geometry',
    prompt: { de: 'Wie groß ist die Fläche eines Rechtecks: 8 cm × 5 cm?', en: 'What is the area of a rectangle: 8 cm × 5 cm?' },
    options: [{ value: '40', label: { de: '40 cm²', en: '40 cm²' } }, { value: '26', label: { de: '26 cm²', en: '26 cm²' } }, { value: '13', label: { de: '13 cm²', en: '13 cm²' } }, { value: '45', label: { de: '45 cm²', en: '45 cm²' } }],
    correctAnswer: '40' },
  { id: 'mk4-009', type: 'multiple_choice', subject: 'math', klasse: 4, difficulty: 3, topic: 'division',
    prompt: { de: 'Was ist 1000 ÷ 8?', en: 'What is 1000 ÷ 8?' },
    options: [{ value: '125', label: { de: '125', en: '125' } }, { value: '120', label: { de: '120', en: '120' } }, { value: '150', label: { de: '150', en: '150' } }, { value: '100', label: { de: '100', en: '100' } }],
    correctAnswer: '125' },
  { id: 'mk4-010', type: 'multiple_choice', subject: 'math', klasse: 4, difficulty: 3, topic: 'fractions',
    prompt: { de: 'Was ist ein Drittel von 90?', en: 'What is a third of 90?' },
    options: [{ value: '30', label: { de: '30', en: '30' } }, { value: '45', label: { de: '45', en: '45' } }, { value: '60', label: { de: '60', en: '60' } }, { value: '20', label: { de: '20', en: '20' } }],
    correctAnswer: '30' },

  // === NEW 30 QUESTIONS (mk4-011 through mk4-040) ===

  // mk4-011: multiplication d1 (number_input)
  { id: 'mk4-011', type: 'number_input', subject: 'math', klasse: 4, difficulty: 1, topic: 'multiplication',
    prompt: { de: 'Was ist 12 × 5?', en: 'What is 12 × 5?' },
    correctAnswer: 60 },

  // mk4-012: multiplication d2 (multiple_choice)
  { id: 'mk4-012', type: 'multiple_choice', subject: 'math', klasse: 4, difficulty: 2, topic: 'multiplication',
    prompt: { de: 'Was ist 36 × 7?', en: 'What is 36 × 7?' },
    options: [{ value: '252', label: { de: '252', en: '252' } }, { value: '242', label: { de: '242', en: '242' } }, { value: '262', label: { de: '262', en: '262' } }, { value: '232', label: { de: '232', en: '232' } }],
    correctAnswer: '252' },

  // mk4-013: multiplication d3 (number_input)
  { id: 'mk4-013', type: 'number_input', subject: 'math', klasse: 4, difficulty: 3, topic: 'multiplication',
    prompt: { de: 'Was ist 125 × 8?', en: 'What is 125 × 8?' },
    correctAnswer: 1000 },

  // mk4-014: multiplication d2 (true_false)
  { id: 'mk4-014', type: 'true_false', subject: 'math', klasse: 4, difficulty: 2, topic: 'multiplication',
    prompt: { de: '23 × 9 = 207', en: '23 × 9 = 207' },
    correctAnswer: true },

  // mk4-015: multiplication d3 (multiple_choice)
  { id: 'mk4-015', type: 'multiple_choice', subject: 'math', klasse: 4, difficulty: 3, topic: 'multiplication',
    prompt: { de: 'Was ist 48 × 25?', en: 'What is 48 × 25?' },
    options: [{ value: '1200', label: { de: '1.200', en: '1,200' } }, { value: '1100', label: { de: '1.100', en: '1,100' } }, { value: '1250', label: { de: '1.250', en: '1,250' } }, { value: '1150', label: { de: '1.150', en: '1,150' } }],
    correctAnswer: '1200' },

  // mk4-016: division d1 (number_input)
  { id: 'mk4-016', type: 'number_input', subject: 'math', klasse: 4, difficulty: 1, topic: 'division',
    prompt: { de: 'Was ist 96 ÷ 8?', en: 'What is 96 ÷ 8?' },
    correctAnswer: 12 },

  // mk4-017: division d2 (multiple_choice)
  { id: 'mk4-017', type: 'multiple_choice', subject: 'math', klasse: 4, difficulty: 2, topic: 'division',
    prompt: { de: 'Was ist 456 ÷ 6?', en: 'What is 456 ÷ 6?' },
    options: [{ value: '76', label: { de: '76', en: '76' } }, { value: '72', label: { de: '72', en: '72' } }, { value: '78', label: { de: '78', en: '78' } }, { value: '74', label: { de: '74', en: '74' } }],
    correctAnswer: '76' },

  // mk4-018: division d3 (number_input)
  { id: 'mk4-018', type: 'number_input', subject: 'math', klasse: 4, difficulty: 3, topic: 'division',
    prompt: { de: 'Was ist 2.016 ÷ 7?', en: 'What is 2,016 ÷ 7?' },
    correctAnswer: 288 },

  // mk4-019: division d2 (true_false)
  { id: 'mk4-019', type: 'true_false', subject: 'math', klasse: 4, difficulty: 2, topic: 'division',
    prompt: { de: '360 ÷ 9 = 40', en: '360 ÷ 9 = 40' },
    correctAnswer: true },

  // mk4-020: fractions d1 (multiple_choice)
  { id: 'mk4-020', type: 'multiple_choice', subject: 'math', klasse: 4, difficulty: 1, topic: 'fractions',
    prompt: { de: 'Was ist die Hälfte von 120?', en: 'What is half of 120?' },
    options: [{ value: '60', label: { de: '60', en: '60' } }, { value: '50', label: { de: '50', en: '50' } }, { value: '70', label: { de: '70', en: '70' } }, { value: '80', label: { de: '80', en: '80' } }],
    correctAnswer: '60' },

  // mk4-021: fractions d1 (number_input)
  { id: 'mk4-021', type: 'number_input', subject: 'math', klasse: 4, difficulty: 1, topic: 'fractions',
    prompt: { de: 'Was ist ein Viertel von 80?', en: 'What is a quarter of 80?' },
    correctAnswer: 20 },

  // mk4-022: fractions d2 (multiple_choice)
  { id: 'mk4-022', type: 'multiple_choice', subject: 'math', klasse: 4, difficulty: 2, topic: 'fractions',
    prompt: { de: 'Was ist ein Fünftel von 250?', en: 'What is a fifth of 250?' },
    options: [{ value: '50', label: { de: '50', en: '50' } }, { value: '25', label: { de: '25', en: '25' } }, { value: '75', label: { de: '75', en: '75' } }, { value: '40', label: { de: '40', en: '40' } }],
    correctAnswer: '50' },

  // mk4-023: fractions d3 (number_input)
  { id: 'mk4-023', type: 'number_input', subject: 'math', klasse: 4, difficulty: 3, topic: 'fractions',
    prompt: { de: 'Was ist ein Zehntel von 4.500?', en: 'What is a tenth of 4,500?' },
    correctAnswer: 450 },

  // mk4-024: fractions d3 (true_false)
  { id: 'mk4-024', type: 'true_false', subject: 'math', klasse: 4, difficulty: 3, topic: 'fractions',
    prompt: { de: 'Ein Drittel von 240 ist 80.', en: 'A third of 240 is 80.' },
    correctAnswer: true },

  // mk4-025: geometry d1 (multiple_choice)
  { id: 'mk4-025', type: 'multiple_choice', subject: 'math', klasse: 4, difficulty: 1, topic: 'geometry',
    prompt: { de: 'Wie viele Ecken hat ein Dreieck?', en: 'How many corners does a triangle have?' },
    options: [{ value: '3', label: { de: '3', en: '3' } }, { value: '4', label: { de: '4', en: '4' } }, { value: '5', label: { de: '5', en: '5' } }, { value: '2', label: { de: '2', en: '2' } }],
    correctAnswer: '3' },

  // mk4-026: geometry d2 (number_input)
  { id: 'mk4-026', type: 'number_input', subject: 'math', klasse: 4, difficulty: 2, topic: 'geometry',
    prompt: { de: 'Ein Quadrat hat die Seitenlänge 9 cm. Wie groß ist seine Fläche in cm²?', en: 'A square has a side length of 9 cm. What is its area in cm²?' },
    correctAnswer: 81 },

  // mk4-027: geometry d2 (multiple_choice)
  { id: 'mk4-027', type: 'multiple_choice', subject: 'math', klasse: 4, difficulty: 2, topic: 'geometry',
    prompt: { de: 'Wie groß ist der Umfang eines Rechtecks mit den Seiten 12 cm und 8 cm?', en: 'What is the perimeter of a rectangle with sides 12 cm and 8 cm?' },
    options: [{ value: '40', label: { de: '40 cm', en: '40 cm' } }, { value: '96', label: { de: '96 cm', en: '96 cm' } }, { value: '20', label: { de: '20 cm', en: '20 cm' } }, { value: '36', label: { de: '36 cm', en: '36 cm' } }],
    correctAnswer: '40' },

  // mk4-028: geometry d3 (number_input)
  { id: 'mk4-028', type: 'number_input', subject: 'math', klasse: 4, difficulty: 3, topic: 'geometry',
    prompt: { de: 'Ein Rechteck hat die Seiten 15 cm und 12 cm. Wie groß ist seine Fläche in cm²?', en: 'A rectangle has sides of 15 cm and 12 cm. What is its area in cm²?' },
    correctAnswer: 180 },

  // mk4-029: geometry d3 (true_false)
  { id: 'mk4-029', type: 'true_false', subject: 'math', klasse: 4, difficulty: 3, topic: 'geometry',
    prompt: { de: 'Der Umfang eines Quadrats mit Seitenlänge 25 cm beträgt 100 cm.', en: 'The perimeter of a square with side length 25 cm is 100 cm.' },
    correctAnswer: true },

  // mk4-030: addition d2 (number_input)
  { id: 'mk4-030', type: 'number_input', subject: 'math', klasse: 4, difficulty: 2, topic: 'addition',
    prompt: { de: 'Was ist 2.345 + 1.655?', en: 'What is 2,345 + 1,655?' },
    correctAnswer: 4000 },

  // mk4-031: subtraction d2 (multiple_choice)
  { id: 'mk4-031', type: 'multiple_choice', subject: 'math', klasse: 4, difficulty: 2, topic: 'subtraction',
    prompt: { de: 'Was ist 5.000 − 1.237?', en: 'What is 5,000 − 1,237?' },
    options: [{ value: '3763', label: { de: '3.763', en: '3,763' } }, { value: '3863', label: { de: '3.863', en: '3,863' } }, { value: '3673', label: { de: '3.673', en: '3,673' } }, { value: '3737', label: { de: '3.737', en: '3,737' } }],
    correctAnswer: '3763' },

  // mk4-032: subtraction d3 (number_input)
  { id: 'mk4-032', type: 'number_input', subject: 'math', klasse: 4, difficulty: 3, topic: 'subtraction',
    prompt: { de: 'Was ist 10.000 − 3.478?', en: 'What is 10,000 − 3,478?' },
    correctAnswer: 6522 },

  // mk4-033: addition d3 (true_false)
  { id: 'mk4-033', type: 'true_false', subject: 'math', klasse: 4, difficulty: 3, topic: 'addition',
    prompt: { de: '6.789 + 3.211 = 10.000', en: '6,789 + 3,211 = 10,000' },
    correctAnswer: true },

  // mk4-034: measurement d1 (multiple_choice)
  { id: 'mk4-034', type: 'multiple_choice', subject: 'math', klasse: 4, difficulty: 1, topic: 'measurement',
    prompt: { de: 'Wie viele Zentimeter sind 1 Meter?', en: 'How many centimeters are in 1 meter?' },
    options: [{ value: '100', label: { de: '100 cm', en: '100 cm' } }, { value: '10', label: { de: '10 cm', en: '10 cm' } }, { value: '1000', label: { de: '1.000 cm', en: '1,000 cm' } }, { value: '50', label: { de: '50 cm', en: '50 cm' } }],
    correctAnswer: '100' },

  // mk4-035: measurement d1 (multiple_choice)
  { id: 'mk4-035', type: 'multiple_choice', subject: 'math', klasse: 4, difficulty: 1, topic: 'measurement',
    prompt: { de: 'Wie viele Gramm sind 1 Kilogramm?', en: 'How many grams are in 1 kilogram?' },
    options: [{ value: '1000', label: { de: '1.000 g', en: '1,000 g' } }, { value: '100', label: { de: '100 g', en: '100 g' } }, { value: '10000', label: { de: '10.000 g', en: '10,000 g' } }, { value: '500', label: { de: '500 g', en: '500 g' } }],
    correctAnswer: '1000' },

  // mk4-036: measurement d2 (number_input)
  { id: 'mk4-036', type: 'number_input', subject: 'math', klasse: 4, difficulty: 2, topic: 'measurement',
    prompt: { de: 'Wie viele Millimeter sind 3 Meter und 50 Zentimeter? (Antwort in mm)', en: 'How many millimeters are in 3 meters and 50 centimeters? (Answer in mm)' },
    correctAnswer: 3500 },

  // mk4-037: measurement d2 (true_false)
  { id: 'mk4-037', type: 'true_false', subject: 'math', klasse: 4, difficulty: 2, topic: 'measurement',
    prompt: { de: '2 Liter und 500 Milliliter sind 2.500 Milliliter.', en: '2 liters and 500 milliliters equal 2,500 milliliters.' },
    correctAnswer: true },

  // mk4-038: word_problems d2 (multiple_choice)
  { id: 'mk4-038', type: 'multiple_choice', subject: 'math', klasse: 4, difficulty: 2, topic: 'word_problems',
    prompt: { de: 'In einer Schule gibt es 4 Klassen mit je 28 Kindern. Wie viele Kinder sind das insgesamt?', en: 'A school has 4 classes with 28 children each. How many children is that in total?' },
    options: [{ value: '112', label: { de: '112', en: '112' } }, { value: '102', label: { de: '102', en: '102' } }, { value: '128', label: { de: '128', en: '128' } }, { value: '108', label: { de: '108', en: '108' } }],
    correctAnswer: '112' },

  // mk4-039: word_problems d3 (number_input)
  { id: 'mk4-039', type: 'number_input', subject: 'math', klasse: 4, difficulty: 3, topic: 'word_problems',
    prompt: { de: 'Ein Bauer hat 1.250 Äpfel. Er verteilt sie gleichmäßig auf 5 Kisten. Wie viele Äpfel sind in jeder Kiste?', en: 'A farmer has 1,250 apples. He distributes them equally into 5 crates. How many apples are in each crate?' },
    correctAnswer: 250 },

  // mk4-040: word_problems d3 (multiple_choice)
  { id: 'mk4-040', type: 'multiple_choice', subject: 'math', klasse: 4, difficulty: 3, topic: 'word_problems',
    prompt: { de: 'Lisa spart jeden Monat 35 €. Wie viel hat sie nach 12 Monaten gespart?', en: 'Lisa saves 35 euros every month. How much has she saved after 12 months?' },
    options: [{ value: '420', label: { de: '420 €', en: '€420' } }, { value: '350', label: { de: '350 €', en: '€350' } }, { value: '400', label: { de: '400 €', en: '€400' } }, { value: '450', label: { de: '450 €', en: '€450' } }],
    correctAnswer: '420' },
];
