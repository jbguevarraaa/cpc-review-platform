import { DiagramFrame } from "./kit";

const svgStyle = { width: "100%", height: "auto", maxWidth: "780px", minWidth: "720px" };

/* ------------------------------------------------------------------ */
/* 1. Two ways to pick a level (2026)                                   */
/* ------------------------------------------------------------------ */
export function TwoRoutesDiagram() {
  const codes: [string, string][] = [["99202", "15"], ["99203", "30"], ["99204", "45"], ["99205", "60"]];
  const est: [string, string][] = [["99212", "10"], ["99213", "20"], ["99214", "30"], ["99215", "40"]];
  const cell = (x: number, y: number, code: string, min: string, tone: string) => (
    <g key={code}>
      <rect x={x} y={y} width="86" height="52" rx="8" fill="#fff" stroke={tone} strokeWidth="1.5" />
      <text x={x + 43} y={y + 22} textAnchor="middle" fontSize="15" fontWeight="800" fill={tone} fontFamily="Consolas, monospace">{code}</text>
      <text x={x + 43} y={y + 41} textAnchor="middle" fontSize="12" fontWeight="700" fill="#374151">{min} min</text>
    </g>
  );
  return (
    <DiagramFrame caption="Since the 2023 revision, an office visit level is picked ONE of two ways. History and exam are 'medically appropriate' but do not pick the level.">
      <svg viewBox="0 0 760 396" role="img" aria-label="Office E/M levels chosen by medical decision making or by total time on the date of the encounter" style={svgStyle}>
        <rect x="8" y="8" width="360" height="130" rx="12" fill="#ecf8f6" stroke="#0f766e" strokeWidth="2" />
        <text x="188" y="34" textAnchor="middle" fontSize="15" fontWeight="800" fill="#12343b">Route 1 — MEDICAL DECISION MAKING</text>
        <text x="24" y="60" fontSize="12.5" fill="#374151">Level = the row where at least TWO of these three</text>
        <text x="24" y="78" fontSize="12.5" fill="#374151">elements are met or exceeded:</text>
        <text x="24" y="102" fontSize="12.5" fontWeight="700" fill="#0f766e">① Problems addressed</text>
        <text x="24" y="120" fontSize="12.5" fontWeight="700" fill="#0f766e">② Data reviewed and analyzed  ③ Risk of management</text>
        <rect x="392" y="8" width="360" height="130" rx="12" fill="#fff7ed" stroke="#c2410c" strokeWidth="2" />
        <text x="572" y="34" textAnchor="middle" fontSize="15" fontWeight="800" fill="#7c2d12">Route 2 — TOTAL TIME on the date</text>
        <text x="408" y="60" fontSize="12.5" fill="#374151">Add ALL the time the physician or QHP personally</text>
        <text x="408" y="78" fontSize="12.5" fill="#374151">spent that day (face-to-face and not). The listed</text>
        <text x="408" y="96" fontSize="12.5" fill="#374151">minutes must be MET OR EXCEEDED.</text>
        <text x="408" y="120" fontSize="12.5" fontWeight="700" fill="#c2410c">No clinical staff or separately billed time.</text>
        <text x="8" y="168" fontSize="13" fontWeight="800" fill="#12343b">Time thresholds — office or other outpatient</text>
        <text x="8" y="196" fontSize="12.5" fontWeight="800" fill="#0f766e">NEW patient</text>
        {codes.map(([c, m], i) => cell(120 + i * 96, 176, c, m, "#0f766e"))}
        <text x="8" y="268" fontSize="12.5" fontWeight="800" fill="#c2410c">ESTABLISHED</text>
        {est.map(([c, m], i) => cell(120 + i * 96, 248, c, m, "#c2410c"))}
        <rect x="524" y="176" width="228" height="124" rx="10" fill="#f0f9ff" stroke="#0284c7" />
        <text x="638" y="200" textAnchor="middle" fontSize="13" fontWeight="800" fill="#075985">Prolonged time: +99417</text>
        <text x="536" y="222" fontSize="12" fill="#374151">Each FULL 15 min beyond the top</text>
        <text x="536" y="238" fontSize="12" fill="#374151">code's minutes, only when the visit</text>
        <text x="536" y="254" fontSize="12" fill="#374151">was leveled by TIME.</text>
        <text x="536" y="276" fontSize="12" fontWeight="700" fill="#075985">99205: 75 → ×1 · 90 → ×2</text>
        <text x="536" y="292" fontSize="12" fontWeight="700" fill="#075985">99215: 55 → ×1 · 70 → ×2</text>
        <text x="8" y="330" fontSize="12" fill="#3f5f5c">The old idea of history and exam extent (problem focused to comprehensive) and the</text>
        <text x="8" y="346" fontSize="12" fill="#3f5f5c">seven components are not used to pick these levels.</text>
        <text x="8" y="366" fontSize="12" fill="#3f5f5c">99211 has no MDM or time requirement (clinical staff may perform it).</text>
        <text x="8" y="382" fontSize="12" fill="#3f5f5c">ED codes (99281–99285) are chosen by MDM only — no time thresholds.</text>
      </svg>
    </DiagramFrame>
  );
}

/* ------------------------------------------------------------------ */
/* 2. MDM grid                                                          */
/* ------------------------------------------------------------------ */
export function MdmGridDiagram() {
  const x0 = 130;
  const cw = 208;
  const cols = ["Problems addressed", "Data reviewed and analyzed", "Risk of management"];
  const rows: { level: string; codes: string; cells: string[]; tone: string }[] = [
    { level: "Straightforward", codes: "99202 · 99212", cells: ["1 self-limited or minor problem", "Minimal or none", "Minimal risk"], tone: "#0e7490" },
    { level: "Low", codes: "99203 · 99213", cells: ["2+ minor problems · 1 stable chronic illness · 1 acute uncomplicated illness or injury", "Limited: 2 items (external notes, test results, ordered tests) or an independent historian", "Low risk"], tone: "#15803d" },
    { level: "Moderate", codes: "99204 · 99214", cells: ["1+ chronic illness with exacerbation · 2+ stable chronic · 1 undiagnosed new problem · 1 acute with systemic symptoms", "Moderate: 3 items, or independent interpretation, or discussion with an outside professional", "Moderate risk: prescription drug management, minor surgery decision"], tone: "#b45309" },
    { level: "High", codes: "99205 · 99215", cells: ["1+ chronic illness with severe exacerbation · 1 threat to life or bodily function", "Extensive: 2 of 3 categories of data", "High risk: intensive drug monitoring, parenteral controlled substances, decision to hospitalize"], tone: "#be123c" },
  ];
  const top = 46;
  const rh = 74;
  return (
    <DiagramFrame caption="MDM grid (short form). A level needs at least TWO of the three columns met or exceeded. New-patient and established-patient codes use the same four MDM levels.">
      <svg viewBox="0 0 760 356" role="img" aria-label="Levels of medical decision making by problems, data, and risk" style={svgStyle}>
        {cols.map((c, i) => (
          <g key={c}>
            <rect x={x0 + i * cw} y="8" width={cw - 4} height="32" rx="8" fill="#ecf8f6" stroke="#b7f7e8" />
            <text x={x0 + i * cw + (cw - 4) / 2} y="29" textAnchor="middle" fontSize="12.5" fontWeight="800" fill="#12343b">{c}</text>
          </g>
        ))}
        {rows.map((r, i) => {
          const y = top + i * rh;
          return (
            <g key={r.level}>
              <rect x="8" y={y} width={x0 - 14} height={rh - 6} rx="8" fill="#f7faf9" stroke="#d7e2df" />
              <text x="16" y={y + 26} fontSize="13" fontWeight="800" fill={r.tone}>{r.level}</text>
              <text x="16" y={y + 46} fontSize="11" fill="#3f5f5c" fontFamily="Consolas, monospace">{r.codes}</text>
              {r.cells.map((c, k) => (
                <g key={k}>
                  <rect x={x0 + k * cw} y={y} width={cw - 4} height={rh - 6} rx="8" fill="#fff" stroke={r.tone} strokeWidth="1.3" />
                  <foreignObject x={x0 + k * cw + 6} y={y + 2} width={cw - 16} height={rh - 10}>
                    <div style={{ fontSize: "10.5px", lineHeight: 1.22, color: "#374151", display: "flex", alignItems: "center", height: "100%" }}>{c}</div>
                  </foreignObject>
                </g>
              ))}
            </g>
          );
        })}
      </svg>
    </DiagramFrame>
  );
}

/* ------------------------------------------------------------------ */
/* 3. Critical care and prolonged time ladders                          */
/* ------------------------------------------------------------------ */
export function TimeLadderDiagram() {
  const cc: [string, string][] = [
    ["under 30", "an ordinary E/M code"],
    ["30 – 74", "99291"],
    ["75 – 104", "99291 + 99292 ×1"],
    ["105 – 134", "99291 + 99292 ×2"],
    ["135 – 164", "99291 + 99292 ×3"],
    ["165 – 194", "99291 + 99292 ×4"],
  ];
  const pr: [string, string][] = [
    ["99205 + 99417", "75 min → ×1 · 90 → ×2 · 105 → ×3"],
    ["99215 + 99417", "55 min → ×1 · 70 → ×2 · 85 → ×3"],
    ["99223 + 99418", "90 min → ×1 · 105 → ×2 (inpatient)"],
    ["99358 + 99359", "30–74 → 99358 · 75–104 → +99359 ×1 · 105+ → ×2 (not on the visit date)"],
  ];
  return (
    <DiagramFrame caption="Critical care is counted in 30-minute blocks after the first 74 minutes, and prolonged services in 15-minute units. Time may be added up across the day.">
      <svg viewBox="0 0 760 388" role="img" aria-label="Critical care total minutes and the codes for each range, and prolonged service time thresholds" style={svgStyle}>
        <text x="8" y="26" fontSize="13.5" fontWeight="800" fill="#12343b">Critical care — total minutes on the date → codes</text>
        {cc.map(([m, c], i) => {
          const y = 40 + i * 34;
          const w = 190 + i * 30;
          return (
            <g key={m}>
              <rect x="8" y={y} width="120" height="28" rx="6" fill="#ecf8f6" stroke="#b7f7e8" />
              <text x="68" y={y + 19} textAnchor="middle" fontSize="12.5" fontWeight="800" fill="#12343b">{m} min</text>
              <rect x="136" y={y} width={w} height="28" rx="6" fill={i === 0 ? "#e5e7eb" : "#0f766e"} opacity={i === 0 ? 1 : 0.16 + i * 0.1} />
              <text x="148" y={y + 19} fontSize="13" fontWeight="800" fill={i === 0 ? "#374151" : "#12343b"} fontFamily="Consolas, monospace">{c}</text>
            </g>
          );
        })}
        <text x="8" y="262" fontSize="12" fill="#3f5f5c">99291 = once per date. 99292 = each extra block of up to 30 min. Critical care time need not be continuous.</text>
        <text x="8" y="290" fontSize="13.5" fontWeight="800" fill="#12343b">Prolonged services — where the extra units start</text>
        {pr.map(([a, b], i) => {
          const y = 302 + i * 22;
          return (
            <g key={a}>
              <text x="8" y={y + 12} fontSize="12.5" fontWeight="800" fill="#0f766e" fontFamily="Consolas, monospace">{a}</text>
              <text x="190" y={y + 12} fontSize="12" fill="#374151">{b}</text>
            </g>
          );
        })}
      </svg>
    </DiagramFrame>
  );
}
