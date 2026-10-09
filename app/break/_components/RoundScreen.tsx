"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { BreakCard, RoundResult } from "../_lib/types";
import { BreakProgress } from "../_lib/storage";
import { boxOf, isMastered, nextBox, pickRoundCards, shuffleOptions } from "../_lib/leitner";

interface QueueItem {
  card: BreakCard;
  options: string[];
  answerIndex: number;
  key: string;
}

function makeItem(card: BreakCard, reshuffleKey: number): QueueItem {
  const { options, answerIndex } = shuffleOptions(card);
  return { card, options, answerIndex, key: `${card.id}-${reshuffleKey}` };
}

export default function RoundScreen({
  pool,
  deckLabel,
  progress,
  onUpdateProgress,
  onFinishRound,
  onExit,
}: {
  pool: BreakCard[];
  deckLabel: string;
  progress: BreakProgress;
  onUpdateProgress: (updater: (p: BreakProgress) => BreakProgress) => void;
  onFinishRound: (result: RoundResult) => void;
  onExit: () => void;
}) {
  const initialCards = useMemo(() => pickRoundCards(pool, progress.cards), [pool, progress.cards]);
  const [queue, setQueue] = useState<QueueItem[]>(() => initialCards.map((c) => makeItem(c, 0)));
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [phase, setPhase] = useState<"question" | "verdict">("question");

  const attemptedOnce = useRef<Set<string>>(new Set());
  const requeued = useRef<Set<string>>(new Set());
  const firstTryCorrect = useRef(0);
  const pointsEarned = useRef(0);
  const masteredThisRound = useRef(0);
  const missedCards = useRef<BreakCard[]>([]);
  const reshuffleCounter = useRef(1);

  const current = queue[index];
  const total = queue.length;

  const handleAnswer = (optionIdx: number) => {
    if (phase !== "question" || !current) return;
    setSelected(optionIdx);
    setPhase("verdict");

    const correct = optionIdx === current.answerIndex;
    const isFirstAttempt = !attemptedOnce.current.has(current.card.id);

    if (isFirstAttempt) {
      attemptedOnce.current.add(current.card.id);
      if (correct) firstTryCorrect.current += 1;
      else missedCards.current.push(current.card);

      onUpdateProgress((p) => {
        const prevBox = boxOf(p.cards, current.card.id);
        const newBox = nextBox(prevBox, correct);
        if (!isMastered(prevBox) && isMastered(newBox)) masteredThisRound.current += 1;
        return {
          ...p,
          cards: { ...p.cards, [current.card.id]: { box: newBox, lastSeen: Date.now() } },
        };
      });

      if (correct) pointsEarned.current += 10;
      else if (!requeued.current.has(current.card.id)) {
        requeued.current.add(current.card.id);
        setQueue((q) => [...q, makeItem(current.card, reshuffleCounter.current++)]);
      }
    } else if (correct) {
      pointsEarned.current += 5;
    }
  };

  const handleContinue = () => {
    if (index + 1 < queue.length) {
      setIndex(index + 1);
      setSelected(null);
      setPhase("question");
    } else {
      onUpdateProgress((p) => ({
        ...p,
        points: p.points + pointsEarned.current,
        daily: {
          ...p.daily,
          roundsFinished: p.daily.roundsFinished + 1,
          decksTouched: p.daily.decksTouched.includes(deckLabel) ? p.daily.decksTouched : [...p.daily.decksTouched, deckLabel],
          cardsMasteredToday: p.daily.cardsMasteredToday + masteredThisRound.current,
          bestFirstTryScore: Math.max(p.daily.bestFirstTryScore, firstTryCorrect.current),
        },
      }));
      onFinishRound({
        deckLabel,
        firstTryScore: firstTryCorrect.current,
        totalCards: attemptedOnce.current.size,
        missed: missedCards.current,
        pointsEarned: pointsEarned.current,
        masteredThisRound: masteredThisRound.current,
      });
    }
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (phase === "question" && ["1", "2", "3", "4"].includes(e.key)) {
        const idx = Number(e.key) - 1;
        if (current && idx < current.options.length) handleAnswer(idx);
      } else if (phase === "verdict" && (e.key === "Enter" || e.key === " ")) {
        e.preventDefault();
        handleContinue();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, current, index, queue.length]);

  if (!current) return null;

  const progressPct = Math.round((index / total) * 100);
  const isCorrect = selected === current.answerIndex;

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
        <button type="button" onClick={onExit} className="break-btn-ghost" style={{ fontSize: "13px" }}>
          ← Back to map
        </button>
        <span style={{ fontSize: "13px", fontWeight: 700, opacity: 0.75 }}>
          Card {Math.min(index + 1, total)} of {total}
        </span>
      </div>

      <div className="break-progress-track" aria-hidden>
        <div className="break-progress-fill" style={{ width: `${progressPct}%` }} />
      </div>

      <div className="break-card" style={{ marginTop: "18px", padding: "24px" }}>
        {current.card.code && <div className="break-code-chip">{current.card.code}</div>}
        <h2 style={{ fontSize: "17px", lineHeight: 1.5, margin: "10px 0 20px", fontWeight: 700 }}>{current.card.question}</h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {current.options.map((opt, i) => {
            let stateClass = "break-option";
            if (phase === "verdict") {
              if (i === current.answerIndex) stateClass += " break-option-correct";
              else if (i === selected) stateClass += " break-option-wrong";
              else stateClass += " break-option-dimmed";
            }
            return (
              <button
                key={i}
                type="button"
                className={stateClass}
                onClick={() => handleAnswer(i)}
                disabled={phase === "verdict"}
              >
                <span className="break-option-key">{i + 1}</span>
                <span>{opt}</span>
              </button>
            );
          })}
        </div>

        {phase === "verdict" && (
          <div style={{ marginTop: "20px" }}>
            <p style={{ fontWeight: 800, fontSize: "15px", margin: "0 0 10px", color: isCorrect ? "var(--break-correct-text)" : "var(--break-wrong-text)" }}>
              {isCorrect ? "✓ Nice — that's right." : "Not quite — here's why:"}
            </p>
            <p style={{ margin: "0 0 14px", fontSize: "14px", lineHeight: 1.65 }}>{current.card.why}</p>
            <div className="break-hook-box">
              <strong>Remember it:</strong> {current.card.hook}
            </div>
            <button type="button" onClick={handleContinue} className="break-btn-primary" style={{ marginTop: "16px", width: "100%" }}>
              Continue
            </button>
          </div>
        )}
      </div>

      <p style={{ textAlign: "center", fontSize: "12px", opacity: 0.6, marginTop: "12px" }}>
        Tip: press 1–4 to answer, Enter to continue.
      </p>
    </div>
  );
}
