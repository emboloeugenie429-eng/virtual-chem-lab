export type Difficulty = "Beginner" | "Intermediate" | "Advanced";

export type Experiment = {
  id: string;
  name: string;
  difficulty: Difficulty;
  duration: string;
  description: string;
  progress: number;
  topic: string;
};

export const experiments: Experiment[] = [
  {
    id: "acid-base-neutralization",
    name: "Acid-Base Neutralization",
    difficulty: "Beginner",
    duration: "15 min",
    progress: 65,
    topic: "Acids & Bases",
    description:
      "React hydrochloric acid with sodium hydroxide and track the pH until the neutralization point is reached.",
  },
  {
    id: "flame-test",
    name: "Flame Test",
    difficulty: "Beginner",
    duration: "12 min",
    progress: 100,
    topic: "Metal Ions",
    description: "Identify metal ions by the characteristic colour they emit in a Bunsen burner flame.",
  },
  {
    id: "solubility-test",
    name: "Solubility Test",
    difficulty: "Beginner",
    duration: "10 min",
    progress: 0,
    topic: "Solutions",
    description: "Compare how different solutes dissolve in water at varying temperatures.",
  },
  {
    id: "separation-of-mixtures",
    name: "Separation of Mixtures",
    difficulty: "Beginner",
    duration: "18 min",
    progress: 30,
    topic: "Techniques",
    description: "Use filtration, evaporation and distillation to separate a mixture into pure components.",
  },
  {
    id: "acid-base-titration",
    name: "Acid-Base Titration",
    difficulty: "Intermediate",
    duration: "20 min",
    progress: 100,
    topic: "Quantitative",
    description: "Determine an unknown concentration using a burette, indicator and precise volume readings.",
  },
  {
    id: "redox-reaction",
    name: "Redox Reaction",
    difficulty: "Intermediate",
    duration: "22 min",
    progress: 78,
    topic: "Electron Transfer",
    description: "Observe oxidation and reduction half-reactions and balance the electron transfer.",
  },
  {
    id: "preparation-of-solutions",
    name: "Preparation of Solutions",
    difficulty: "Intermediate",
    duration: "16 min",
    progress: 0,
    topic: "Concentration",
    description: "Prepare a standard solution using a volumetric flask and a digital balance.",
  },
  {
    id: "chemical-reaction-rates",
    name: "Chemical Reaction Rates",
    difficulty: "Intermediate",
    duration: "24 min",
    progress: 0,
    topic: "Kinetics",
    description: "Measure how concentration, temperature and surface area change the rate of reaction.",
  },
  {
    id: "electrochemistry",
    name: "Electrochemistry",
    difficulty: "Advanced",
    duration: "30 min",
    progress: 0,
    topic: "Cells",
    description: "Build a galvanic cell, measure the cell potential and analyse electrode reactions.",
  },
  {
    id: "equilibrium",
    name: "Equilibrium",
    difficulty: "Advanced",
    duration: "28 min",
    progress: 0,
    topic: "Le Chatelier",
    description: "Shift a reversible reaction and observe how the system re-establishes equilibrium.",
  },
  {
    id: "reaction-kinetics",
    name: "Reaction Kinetics",
    difficulty: "Advanced",
    duration: "35 min",
    progress: 0,
    topic: "Rate Laws",
    description: "Determine the rate law and activation energy from timed concentration measurements.",
  },
];

export const apparatus = [
  { name: "Beaker", capacity: "100 mL", category: "Glassware", status: "On Bench" },
  { name: "Conical Flask", capacity: "250 mL", category: "Glassware", status: "On Bench" },
  { name: "Test Tube", capacity: "20 mL", category: "Glassware", status: "Available" },
  { name: "Burette", capacity: "50 mL", category: "Measuring", status: "Selected" },
  { name: "Pipette", capacity: "25 mL", category: "Measuring", status: "Available" },
  { name: "Measuring Cylinder", capacity: "100 mL", category: "Measuring", status: "Available" },
  { name: "Thermometer", capacity: "-10–110 °C", category: "Measuring", status: "On Bench" },
  { name: "Digital Balance", capacity: "0.01 g", category: "Measuring", status: "Available" },
  { name: "Tripod Stand", capacity: "—", category: "Support", status: "Available" },
  { name: "Bunsen Burner", capacity: "—", category: "Heating", status: "Available" },
  { name: "Retort Stand", capacity: "—", category: "Support", status: "On Bench" },
  { name: "Funnel", capacity: "75 mm", category: "Glassware", status: "Available" },
] as const;

export const chemicals = [
  {
    name: "Hydrochloric Acid",
    formula: "HCl",
    concentration: "0.1 M",
    hazard: "Corrosive",
    quantity: "500 mL",
    storage: "Acid cabinet, ventilated",
  },
  {
    name: "Sodium Hydroxide",
    formula: "NaOH",
    concentration: "0.1 M",
    hazard: "Corrosive",
    quantity: "500 mL",
    storage: "Base cabinet, sealed",
  },
  {
    name: "Phenolphthalein",
    formula: "C20H14O4",
    concentration: "Indicator",
    hazard: "Low",
    quantity: "100 mL",
    storage: "Reagent shelf",
  },
  {
    name: "Distilled Water",
    formula: "H2O",
    concentration: "—",
    hazard: "Safe",
    quantity: "5 L",
    storage: "Bench carboy",
  },
  {
    name: "Copper(II) Sulfate",
    formula: "CuSO4",
    concentration: "0.5 M",
    hazard: "Irritant",
    quantity: "250 mL",
    storage: "Reagent shelf",
  },
  {
    name: "Potassium Permanganate",
    formula: "KMnO4",
    concentration: "0.02 M",
    hazard: "Oxidiser",
    quantity: "250 mL",
    storage: "Oxidiser cabinet",
  },
];

export const procedure = [
  "Rinse the burette with distilled water and then with the hydrochloric acid solution.",
  "Fill the burette to the 0.00 mL mark and record the initial reading.",
  "Pipette 25 mL of sodium hydroxide into the conical flask.",
  "Add 2–3 drops of phenolphthalein indicator to the flask.",
  "Add 25 mL of hydrochloric acid using the burette until the pink colour disappears.",
];

export const recentExperiments = [
  { name: "Acid-Base Neutralization", date: "Aug 9", duration: "12 min", score: "85%", status: "Completed" },
  { name: "Titration", date: "Aug 8", duration: "18 min", score: "92%", status: "Completed" },
  { name: "Redox Reaction", date: "Aug 6", duration: "15 min", score: "78%", status: "Completed" },
  { name: "Flame Test", date: "Aug 4", duration: "9 min", score: "88%", status: "Completed" },
  { name: "Separation of Mixtures", date: "Aug 2", duration: "21 min", score: "—", status: "In Progress" },
];

export const scoreTrend = [
  { label: "Wk 1", score: 62 },
  { label: "Wk 2", score: 71 },
  { label: "Wk 3", score: 68 },
  { label: "Wk 4", score: 79 },
  { label: "Wk 5", score: 85 },
  { label: "Wk 6", score: 92 },
];

export const subjectProgress = [
  { label: "Chemistry", value: 75 },
  { label: "Titration", value: 85 },
  { label: "Neutralization", value: 92 },
  { label: "Redox", value: 68 },
  { label: "Kinetics", value: 41 },
];

export const quizQuestions = [
  {
    question: "What happens when an acid reacts with a base?",
    options: [
      "The solution becomes more acidic",
      "A neutralization reaction occurs",
      "The solution becomes solid",
      "No reaction occurs",
    ],
    correct: 1,
    explanation: "An acid and a base react to form a salt and water — a neutralization reaction.",
  },
  {
    question: "Which indicator turns colourless in acidic solution?",
    options: ["Methyl orange", "Litmus", "Phenolphthalein", "Bromothymol blue"],
    correct: 2,
    explanation: "Phenolphthalein is pink in basic solution and colourless in acidic solution.",
  },
  {
    question: "What is the pH at the neutralization point of HCl and NaOH?",
    options: ["1.0", "4.5", "7.0", "13.0"],
    correct: 2,
    explanation: "A strong acid neutralised by a strong base gives a neutral solution at pH 7.",
  },
  {
    question: "Which apparatus delivers an accurate variable volume of titrant?",
    options: ["Burette", "Beaker", "Test tube", "Funnel"],
    correct: 0,
    explanation: "A burette is graduated and fitted with a tap for controlled delivery.",
  },
  {
    question: "The products of HCl + NaOH are:",
    options: ["NaCl + H2O", "NaH + Cl2", "NaClO + H2", "HClO + Na"],
    correct: 0,
    explanation: "HCl + NaOH → NaCl + H2O.",
  },
];

export const students = [
  { name: "Eugenie Embolo", id: "STU-2041", class: "Form 5A", done: 12, avg: "86%", last: "Aug 9", status: "Active" },
  { name: "Daniel Mbarga", id: "STU-2042", class: "Form 5A", done: 9, avg: "74%", last: "Aug 9", status: "Active" },
  { name: "Aisha Njoya", id: "STU-2043", class: "Form 5B", done: 14, avg: "91%", last: "Aug 8", status: "Active" },
  { name: "Peter Achu", id: "STU-2044", class: "Form 4A", done: 5, avg: "61%", last: "Aug 5", status: "Inactive" },
  { name: "Clarisse Tabi", id: "STU-2045", class: "Form 5B", done: 11, avg: "82%", last: "Aug 9", status: "Active" },
];
