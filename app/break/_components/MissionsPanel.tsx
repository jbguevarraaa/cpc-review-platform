import { DailyState } from "../_lib/storage";
import { missionsStatus } from "../_lib/missions";

export default function MissionsPanel({ daily }: { daily: DailyState }) {
  const statuses = missionsStatus(daily);
  return (
    <div className="break-card" style={{ padding: "18px 20px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
        <span style={{ fontSize: "18px" }}>🎯</span>
        <h3 style={{ margin: 0, fontSize: "15px", fontWeight: 800 }}>Today&apos;s missions</h3>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {statuses.map(({ mission, done }) => (
          <div
            key={mission.id}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "8px 12px",
              borderRadius: "10px",
              background: done ? "var(--break-mission-done-bg)" : "var(--break-surface-soft)",
              fontSize: "13.5px",
              fontWeight: done ? 700 : 500,
              textDecoration: done ? "line-through" : "none",
              opacity: done ? 0.75 : 1,
            }}
          >
            <span aria-hidden>{done ? "✅" : "⬜"}</span>
            <span>{mission.label}</span>
          </div>
        ))}
      </div>
      <p style={{ margin: "10px 0 0", fontSize: "12px", opacity: 0.7 }}>
        Missions reset at midnight — no penalty for missing a day.
      </p>
    </div>
  );
}
