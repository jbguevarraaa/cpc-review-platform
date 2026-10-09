import { RoundResult } from "../_lib/types";
import { DailyState } from "../_lib/storage";
import MissionsPanel from "./MissionsPanel";

export default function SummaryScreen({
  result,
  daily,
  onPlayAgain,
  onBackToMap,
}: {
  result: RoundResult;
  daily: DailyState;
  onPlayAgain: () => void;
  onBackToMap: () => void;
}) {
  return (
    <div>
      <div className="break-card" style={{ padding: "26px", textAlign: "center" }}>
        <div style={{ fontSize: "38px", marginBottom: "6px" }}>🎉</div>
        <h2 style={{ margin: "0 0 4px", fontSize: "20px", fontWeight: 800 }}>Round complete — {result.deckLabel}</h2>
        <p style={{ margin: 0, opacity: 0.75, fontSize: "13.5px" }}>Nice pace. That's how spaced repetition sticks.</p>

        <div style={{ display: "flex", justifyContent: "center", gap: "28px", marginTop: "22px", flexWrap: "wrap" }}>
          <div>
            <div style={{ fontSize: "26px", fontWeight: 800 }}>
              {result.firstTryScore}/{result.totalCards}
            </div>
            <div style={{ fontSize: "12px", opacity: 0.7 }}>First-try score</div>
          </div>
          <div>
            <div style={{ fontSize: "26px", fontWeight: 800, color: "var(--break-accent)" }}>+{result.pointsEarned}</div>
            <div style={{ fontSize: "12px", opacity: 0.7 }}>Points earned</div>
          </div>
          <div>
            <div style={{ fontSize: "26px", fontWeight: 800 }}>{result.masteredThisRound}</div>
            <div style={{ fontSize: "12px", opacity: 0.7 }}>Newly mastered</div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: "18px" }}>
        <MissionsPanel daily={daily} />
      </div>

      {result.missed.length > 0 && (
        <div className="break-card" style={{ marginTop: "18px", padding: "20px" }}>
          <h3 style={{ margin: "0 0 12px", fontSize: "15px", fontWeight: 800 }}>👀 Quick look — cards to revisit</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {result.missed.map((card) => (
              <div key={card.id} className="break-hook-box" style={{ textAlign: "left" }}>
                <strong>{card.name}:</strong> {card.hook}
              </div>
            ))}
          </div>
        </div>
      )}

      <div style={{ display: "flex", gap: "12px", marginTop: "20px", flexWrap: "wrap" }}>
        <button type="button" onClick={onPlayAgain} className="break-btn-primary" style={{ flex: 1 }}>
          Play another round
        </button>
        <button type="button" onClick={onBackToMap} className="break-btn-ghost" style={{ flex: 1 }}>
          Back to the journey map
        </button>
      </div>
    </div>
  );
}
