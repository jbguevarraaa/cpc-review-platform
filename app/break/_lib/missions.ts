import { DailyState } from "./storage";

export interface Mission {
  id: string;
  label: string;
  check: (d: DailyState) => boolean;
}

export const MISSIONS: Mission[] = [
  { id: "finish-1-round", label: "Finish one round", check: (d) => d.roundsFinished >= 1 },
  { id: "finish-2-decks", label: "Finish rounds in two different decks", check: (d) => d.decksTouched.length >= 2 },
  { id: "master-2-cards", label: "Master 2 cards", check: (d) => d.cardsMasteredToday >= 2 },
  { id: "score-6-of-8", label: "Score 6 or more first-try in a round", check: (d) => d.bestFirstTryScore >= 6 },
];

export function missionsStatus(daily: DailyState): { mission: Mission; done: boolean }[] {
  return MISSIONS.map((mission) => ({ mission, done: mission.check(daily) }));
}

export function recomputeCompletedIds(daily: DailyState): string[] {
  return MISSIONS.filter((m) => m.check(daily)).map((m) => m.id);
}
