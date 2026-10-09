import { DECKS, DeckId } from "../_lib/types";
import { BreakProgress } from "../_lib/storage";
import { BREAK_CARDS } from "../_data/breakCards";
import { isMastered, boxOf } from "../_lib/leitner";
import MissionsPanel from "./MissionsPanel";

function masteryFor(deckId: DeckId | "mixed", progress: BreakProgress): { mastered: number; total: number } {
  const pool = deckId === "mixed" ? BREAK_CARDS : BREAK_CARDS.filter((c) => c.deck === deckId);
  const mastered = pool.filter((c) => isMastered(boxOf(progress.cards, c.id))).length;
  return { mastered, total: pool.length };
}

function MasteryRing({ mastered, total, color }: { mastered: number; total: number; color: string }) {
  const pct = total > 0 ? mastered / total : 0;
  const r = 20;
  const circumference = 2 * Math.PI * r;
  const offset = circumference * (1 - pct);
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" aria-hidden style={{ flexShrink: 0 }}>
      <circle cx="24" cy="24" r={r} fill="none" stroke="var(--break-ring-track)" strokeWidth="5" />
      <circle
        cx="24"
        cy="24"
        r={r}
        fill="none"
        stroke={color}
        strokeWidth="5"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        transform="rotate(-90 24 24)"
      />
      <text x="24" y="28" textAnchor="middle" fontSize="11" fontWeight="800" fill="var(--break-text)">
        {total > 0 ? Math.round(pct * 100) : 0}%
      </text>
    </svg>
  );
}

export default function JourneyMap({
  progress,
  onSelectDeck,
  onOpenCheatSheet,
}: {
  progress: BreakProgress;
  onSelectDeck: (deck: DeckId | "mixed") => void;
  onOpenCheatSheet: () => void;
}) {
  const stops: { id: DeckId | "mixed"; label: string; shortLabel: string; blurb: string; icon: string; color: string }[] = [
    ...DECKS,
    { id: "mixed", label: "Mixed Journey", shortLabel: "Mixed", blurb: "A little bit of everything", icon: "🧭", color: "#0f766e" },
  ];

  return (
    <div>
      <div style={{ marginBottom: "22px" }}>
        <MissionsPanel daily={progress.daily} />
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "16px", flexWrap: "wrap", gap: "10px" }}>
        <div>
          <h2 style={{ margin: 0, fontSize: "20px", fontWeight: 800 }}>Pick a stop on your journey</h2>
          <p style={{ margin: "4px 0 0", fontSize: "13.5px", opacity: 0.75 }}>Every stop is a calm, 8-card round. No clock, no pressure.</p>
        </div>
        <button type="button" onClick={onOpenCheatSheet} className="break-btn-ghost">
          📋 Cheat sheet
        </button>
      </div>

      <div className="break-journey-path">
        {stops.map((stop, i) => {
          const { mastered, total } = masteryFor(stop.id, progress);
          const align = i % 3 === 0 ? "flex-start" : i % 3 === 1 ? "center" : "flex-end";
          return (
            <div key={stop.id} style={{ display: "flex", justifyContent: align, width: "100%" }}>
              <button
                type="button"
                onClick={() => onSelectDeck(stop.id)}
                className="break-journey-stop"
                style={{ borderColor: stop.color }}
              >
                <span className="break-journey-stop-icon" style={{ background: stop.color }}>
                  {stop.icon}
                </span>
                <span style={{ flex: 1, textAlign: "left", minWidth: 0 }}>
                  <span style={{ display: "block", fontWeight: 800, fontSize: "14.5px" }}>{stop.label}</span>
                  <span style={{ display: "block", fontSize: "12px", opacity: 0.75, marginTop: "2px" }}>{stop.blurb}</span>
                </span>
                <MasteryRing mastered={mastered} total={total} color={stop.color} />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
