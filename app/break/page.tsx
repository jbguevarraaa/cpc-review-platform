"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import JourneyMap from "./_components/JourneyMap";
import RoundScreen from "./_components/RoundScreen";
import SummaryScreen from "./_components/SummaryScreen";
import CheatSheet from "./_components/CheatSheet";
import { BREAK_CARDS } from "./_data/breakCards";
import { DeckId, RoundResult, deckMeta } from "./_lib/types";
import { BreakProgress, freshProgress, loadProgress, saveProgress } from "./_lib/storage";

type View = "map" | "round" | "summary" | "cheatsheet";

export default function BreakModePage() {
  const [progress, setProgress] = useState<BreakProgress>(freshProgress());
  const [hydrated, setHydrated] = useState(false);
  const [view, setView] = useState<View>("map");
  const [selectedDeck, setSelectedDeck] = useState<DeckId | "mixed" | null>(null);
  const [lastResult, setLastResult] = useState<RoundResult | null>(null);
  const [roundKey, setRoundKey] = useState(0);

  useEffect(() => {
    setProgress(loadProgress());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) saveProgress(progress);
  }, [progress, hydrated]);

  const updateProgress = (updater: (p: BreakProgress) => BreakProgress) => {
    setProgress((p) => updater(p));
  };

  const deckLabel = selectedDeck === "mixed" ? "Mixed Journey" : selectedDeck ? deckMeta(selectedDeck).label : "";
  const pool = selectedDeck === "mixed" ? BREAK_CARDS : selectedDeck ? BREAK_CARDS.filter((c) => c.deck === selectedDeck) : [];

  return (
    <main className="break-mode-page">
      <header className="break-hero">
        <p style={{ margin: "0 0 8px", fontWeight: 800, letterSpacing: "0.06em", fontSize: "13px", opacity: 0.85 }}>
          BREAK MODE
        </p>
        <h1 style={{ margin: 0, fontSize: "clamp(26px, 5vw, 38px)", fontWeight: 800 }}>A calmer way to review CPT</h1>
        <p style={{ margin: "10px 0 0", fontSize: "15px", lineHeight: 1.6, maxWidth: "640px" }}>
          Short, friendly rounds. No clock, no exam pressure — just steady spaced repetition that builds real recall over time.
        </p>
      </header>

      <nav style={{ margin: "18px 0 24px" }}>
        <Link href="/cpt" className="break-btn-ghost" style={{ textDecoration: "none" }}>
          ← Back to CPT
        </Link>
      </nav>

      <div className="break-content">
        {view === "map" && (
          <JourneyMap
            progress={progress}
            onSelectDeck={(deck) => {
              setSelectedDeck(deck);
              setRoundKey((k) => k + 1);
              setView("round");
            }}
            onOpenCheatSheet={() => setView("cheatsheet")}
          />
        )}

        {view === "round" && selectedDeck && (
          <RoundScreen
            key={roundKey}
            pool={pool}
            deckLabel={deckLabel}
            progress={progress}
            onUpdateProgress={updateProgress}
            onFinishRound={(result) => {
              setLastResult(result);
              setView("summary");
            }}
            onExit={() => setView("map")}
          />
        )}

        {view === "summary" && lastResult && (
          <SummaryScreen
            result={lastResult}
            daily={progress.daily}
            onPlayAgain={() => {
              setRoundKey((k) => k + 1);
              setView("round");
            }}
            onBackToMap={() => setView("map")}
          />
        )}

        {view === "cheatsheet" && <CheatSheet progress={progress} onBack={() => setView("map")} />}
      </div>
    </main>
  );
}
