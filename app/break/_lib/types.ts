export type DeckId =
  | "integumentary"
  | "musculoskeletal"
  | "respiratory"
  | "cardiovascular"
  | "digestive"
  | "urogenital"
  | "nervous-endocrine"
  | "anesthesia"
  | "radiology"
  | "em"
  | "modifiers"
  | "symbols";

export interface BreakCard {
  id: string;
  deck: DeckId;
  group: string;
  code?: string;
  name: string;
  question: string;
  options: readonly [string, string, string, string];
  answerIndex: 0 | 1 | 2 | 3;
  why: string;
  hook: string;
}

export interface DeckMeta {
  id: DeckId;
  label: string;
  shortLabel: string;
  blurb: string;
  icon: string;
  color: string;
}

export const DECKS: DeckMeta[] = [
  { id: "integumentary", label: "Integumentary (10000s)", shortLabel: "Skin", blurb: "Skin, nails, breast & repair codes", icon: "🩹", color: "#f59e0b" },
  { id: "musculoskeletal", label: "Musculoskeletal (20000s)", shortLabel: "Bones", blurb: "Bones, joints, casts & fractures", icon: "🦴", color: "#64748b" },
  { id: "respiratory", label: "Respiratory (30000s)", shortLabel: "Lungs", blurb: "Nose, sinuses, lungs & airway", icon: "🫁", color: "#38bdf8" },
  { id: "cardiovascular", label: "Cardiovascular (33000s)", shortLabel: "Heart", blurb: "Heart, vessels, pacemakers & bypass", icon: "❤️", color: "#ef4444" },
  { id: "digestive", label: "Digestive (40000s)", shortLabel: "GI", blurb: "Mouth to rectum, liver, gallbladder", icon: "🍽️", color: "#84cc16" },
  { id: "urogenital", label: "Urinary & Genital (50000s)", shortLabel: "GU", blurb: "Kidneys, bladder & reproductive codes", icon: "💧", color: "#06b6d4" },
  { id: "nervous-endocrine", label: "Nervous & Endocrine (60000s)", shortLabel: "Nerves", blurb: "Brain, spine, nerves & thyroid", icon: "🧠", color: "#a855f7" },
  { id: "anesthesia", label: "Anesthesia", shortLabel: "Anes", blurb: "Anesthesia time, base units & qualifying circumstances", icon: "💤", color: "#6366f1" },
  { id: "radiology", label: "Radiology", shortLabel: "X-ray", blurb: "Imaging, contrast & supervision rules", icon: "🩻", color: "#0ea5e9" },
  { id: "em", label: "Evaluation & Management", shortLabel: "E/M", blurb: "Office visits, MDM & time-based coding", icon: "🩺", color: "#14b8a6" },
  { id: "modifiers", label: "Modifiers", shortLabel: "Mods", blurb: "Level I, Category II & HCPCS modifiers", icon: "🏷️", color: "#f97316" },
  { id: "symbols", label: "Symbols & Conventions", shortLabel: "Symbols", blurb: "CPT book symbols, add-ons & punctuation", icon: "✦", color: "#eab308" },
];

export const MIXED_DECK: DeckMeta = {
  id: "em",
  label: "Mixed Journey",
  shortLabel: "Mixed",
  blurb: "A little bit of everything",
  icon: "🧭",
  color: "#0f766e",
};

export function deckMeta(id: DeckId): DeckMeta {
  return DECKS.find((d) => d.id === id) ?? DECKS[0];
}

export interface RoundResult {
  deckLabel: string;
  firstTryScore: number;
  totalCards: number;
  missed: BreakCard[];
  pointsEarned: number;
  masteredThisRound: number;
}

export const ROUND_SIZE = 8;
export const MASTERY_BOX = 3;
export const MAX_BOX = 5;
