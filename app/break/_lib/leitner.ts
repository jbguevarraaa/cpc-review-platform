import { BreakCard, MASTERY_BOX, MAX_BOX, ROUND_SIZE } from "./types";
import { CardProgress } from "./storage";

export function boxOf(cards: Record<string, CardProgress>, id: string): number {
  return cards[id]?.box ?? 0;
}

export function isMastered(box: number): boolean {
  return box >= MASTERY_BOX;
}

export function nextBox(box: number, correct: boolean): number {
  if (!correct) return 0;
  return Math.min(MAX_BOX, box + 1);
}

function weightFor(box: number): number {
  return MAX_BOX + 1 - box;
}

/** Weighted random sample (without replacement) favoring low-box cards. */
export function pickRoundCards(
  pool: BreakCard[],
  cardProgress: Record<string, CardProgress>,
  size: number = ROUND_SIZE
): BreakCard[] {
  if (pool.length <= size) return shuffle(pool.slice());

  const remaining = pool.slice();
  const picked: BreakCard[] = [];

  while (picked.length < size && remaining.length > 0) {
    const weights = remaining.map((c) => weightFor(boxOf(cardProgress, c.id)));
    const total = weights.reduce((a, b) => a + b, 0);
    let roll = Math.random() * total;
    let chosenIdx = 0;
    for (let i = 0; i < weights.length; i++) {
      roll -= weights[i];
      if (roll <= 0) {
        chosenIdx = i;
        break;
      }
    }
    picked.push(remaining[chosenIdx]);
    remaining.splice(chosenIdx, 1);
  }

  return picked;
}

export function shuffle<T>(arr: T[]): T[] {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Shuffles a card's options, returning the new order and the new answer index. */
export function shuffleOptions(card: BreakCard): { options: string[]; answerIndex: number } {
  const order = shuffle([0, 1, 2, 3]);
  const options = order.map((i) => card.options[i]);
  const answerIndex = order.indexOf(card.answerIndex);
  return { options, answerIndex };
}
