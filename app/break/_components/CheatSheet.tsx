import { useMemo, useState } from "react";
import { BREAK_CARDS } from "../_data/breakCards";
import { DECKS, DeckId } from "../_lib/types";
import { BreakProgress } from "../_lib/storage";
import { boxOf, isMastered } from "../_lib/leitner";

export default function CheatSheet({ progress, onBack }: { progress: BreakProgress; onBack: () => void }) {
  const [filter, setFilter] = useState<DeckId | "all">("all");

  const grouped = useMemo(() => {
    const cards = filter === "all" ? BREAK_CARDS : BREAK_CARDS.filter((c) => c.deck === filter);
    const byGroup = new Map<string, typeof cards>();
    for (const card of cards) {
      const list = byGroup.get(card.group) ?? [];
      list.push(card);
      byGroup.set(card.group, list);
    }
    return byGroup;
  }, [filter]);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px", flexWrap: "wrap", gap: "10px" }}>
        <h2 style={{ margin: 0, fontSize: "20px", fontWeight: 800 }}>📋 Cheat sheet</h2>
        <button type="button" onClick={onBack} className="break-btn-ghost">
          ← Back to map
        </button>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "20px" }}>
        <button type="button" onClick={() => setFilter("all")} className={filter === "all" ? "break-chip-active" : "break-chip"}>
          All
        </button>
        {DECKS.map((d) => (
          <button key={d.id} type="button" onClick={() => setFilter(d.id)} className={filter === d.id ? "break-chip-active" : "break-chip"}>
            {d.icon} {d.shortLabel}
          </button>
        ))}
      </div>

      {[...grouped.entries()].map(([group, cards]) => (
        <div key={group} style={{ marginBottom: "22px" }}>
          <h3 style={{ fontSize: "14px", fontWeight: 800, margin: "0 0 10px", opacity: 0.85 }}>{group}</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "10px" }}>
            {cards.map((card) => {
              const mastered = isMastered(boxOf(progress.cards, card.id));
              return (
                <div
                  key={card.id}
                  className="break-card"
                  style={{
                    padding: "12px 14px",
                    borderColor: mastered ? "var(--break-mastered-border)" : undefined,
                    background: mastered ? "var(--break-mastered-bg)" : undefined,
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "8px" }}>
                    <strong style={{ fontSize: "13.5px" }}>{card.name}</strong>
                    {mastered && <span style={{ fontSize: "11px", fontWeight: 800, color: "var(--break-mastered-text)" }}>MASTERED</span>}
                  </div>
                  {card.code && <div style={{ fontSize: "11.5px", opacity: 0.65, fontFamily: "monospace", marginTop: "2px" }}>{card.code}</div>}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
