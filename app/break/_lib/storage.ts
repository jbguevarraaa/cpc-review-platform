export interface CardProgress {
  box: number;
  lastSeen: number;
}

export interface DailyState {
  date: string;
  roundsFinished: number;
  decksTouched: string[];
  cardsMasteredToday: number;
  bestFirstTryScore: number;
  completedMissionIds: string[];
}

export interface BreakProgress {
  cards: Record<string, CardProgress>;
  points: number;
  daily: DailyState;
}

const STORAGE_KEY = "cpc-break-progress-v1";

export function todayKey(): string {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function freshDaily(): DailyState {
  return {
    date: todayKey(),
    roundsFinished: 0,
    decksTouched: [],
    cardsMasteredToday: 0,
    bestFirstTryScore: 0,
    completedMissionIds: [],
  };
}

export function freshProgress(): BreakProgress {
  return { cards: {}, points: 0, daily: freshDaily() };
}

function rollDailyIfNeeded(progress: BreakProgress): BreakProgress {
  if (progress.daily.date !== todayKey()) {
    return { ...progress, daily: freshDaily() };
  }
  return progress;
}

export function loadProgress(): BreakProgress {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return freshProgress();
    const parsed = JSON.parse(raw) as Partial<BreakProgress>;
    const merged: BreakProgress = {
      cards: parsed.cards ?? {},
      points: typeof parsed.points === "number" ? parsed.points : 0,
      daily: parsed.daily ?? freshDaily(),
    };
    return rollDailyIfNeeded(merged);
  } catch {
    return freshProgress();
  }
}

export function saveProgress(progress: BreakProgress): boolean {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    return true;
  } catch {
    return false;
  }
}
