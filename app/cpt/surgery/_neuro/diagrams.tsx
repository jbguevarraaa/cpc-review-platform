import { DiagramFrame } from "./kit";

const svgStyle = { width: "100%", height: "auto", maxWidth: "780px", minWidth: "720px" };

/* ------------------------------------------------------------------ */
/* 1. Skull base: three fossae x approach / definitive / repair         */
/* ------------------------------------------------------------------ */
export function SkullBaseDiagram() {
  const x0 = 200;
  const cw = 268;
  const rows: { label: string; sub: string; approach: string; aNote: string; definitive: string; dNote: string; tone: string }[] = [
    { label: "Anterior cranial fossa", sub: "front of the skull base", approach: "61580–61586", aNote: "craniofacial and orbitocranial approaches", definitive: "61600 · 61601", dNote: "extradural · intradural", tone: "#0e7490" },
    { label: "Middle cranial fossa", sub: "temple and mid-skull base", approach: "61590–61592", aNote: "infratemporal and orbitocranial zygomatic", definitive: "61605–61608", dNote: "extradural · intradural (+61611, 61613)", tone: "#b45309" },
    { label: "Posterior cranial fossa", sub: "back of the skull base", approach: "61595–61598", aNote: "transtemporal · transcochlear · transcondylar · transpetrosal", definitive: "61615 · 61616", dNote: "extradural · intradural", tone: "#be185d" },
  ];
  const top = 66;
  const rh = 78;
  return (
    <DiagramFrame caption="Skull base surgery is coded in three layers. A different surgeon can do each layer; one surgeon doing two layers reports both, with modifier 51 on the lower-valued one.">
      <svg viewBox="0 0 760 376" role="img" aria-label="Skull base codes by cranial fossa: approach, definitive, and repair" style={svgStyle}>
        <text x="8" y="34" fontSize="12.5" fontWeight="800" fill="#2e1065">Area of the skull base</text>
        {["① APPROACH — get exposure", "② DEFINITIVE — treat the lesion"].map((h, i) => (
          <g key={h}>
            <rect x={x0 + i * cw} y="8" width={cw - 4} height="42" rx="8" fill={i === 0 ? "#ede9fe" : "#fce7f3"} stroke={i === 0 ? "#c4b5fd" : "#f9a8d4"} />
            <text x={x0 + i * cw + (cw - 4) / 2} y="34" textAnchor="middle" fontSize="12.5" fontWeight="800" fill="#2e1065">{h}</text>
          </g>
        ))}
        {rows.map((r, i) => {
          const y = top + i * rh;
          return (
            <g key={r.label}>
              <rect x="8" y={y} width={x0 - 14} height={rh - 8} rx="8" fill="#faf7ff" stroke="#e6def7" />
              <text x="16" y={y + 30} fontSize="13" fontWeight="800" fill="#2e1065">{r.label}</text>
              <text x="16" y={y + 50} fontSize="11.5" fill="#5b4a80">{r.sub}</text>
              <rect x={x0} y={y} width={cw - 4} height={rh - 8} rx="8" fill="#fff" stroke={r.tone} strokeWidth="1.5" />
              <text x={x0 + 14} y={y + 30} fontSize="17" fontWeight="800" fill={r.tone} fontFamily="Consolas, monospace">{r.approach}</text>
              <foreignObject x={x0 + 10} y={y + 36} width={cw - 24} height="30"><div style={{ fontSize: "11.5px", lineHeight: 1.25, color: "#4b5563" }}>{r.aNote}</div></foreignObject>
              <rect x={x0 + cw} y={y} width={cw - 4} height={rh - 8} rx="8" fill="#fff" stroke={r.tone} strokeWidth="1.5" />
              <text x={x0 + cw + 14} y={y + 30} fontSize="17" fontWeight="800" fill={r.tone} fontFamily="Consolas, monospace">{r.definitive}</text>
              <foreignObject x={x0 + cw + 10} y={y + 36} width={cw - 24} height="30"><div style={{ fontSize: "11.5px", lineHeight: 1.25, color: "#4b5563" }}>{r.dNote}</div></foreignObject>
            </g>
          );
        })}
        <rect x="8" y={top + 3 * rh} width={x0 - 14} height="66" rx="8" fill="#faf7ff" stroke="#e6def7" />
        <text x="16" y={top + 3 * rh + 28} fontSize="13" fontWeight="800" fill="#2e1065">③ REPAIR</text>
        <text x="16" y={top + 3 * rh + 47} fontSize="11.5" fill="#5b4a80">61618 · 61619 = leak repair</text>
        <rect x={x0} y={top + 3 * rh} width={cw * 2 - 4} height="66" rx="8" fill="#fff" stroke="#6d28d9" strokeWidth="1.5" />
        <foreignObject x={x0 + 10} y={top + 3 * rh + 4} width={cw * 2 - 24} height="58"><div style={{ fontSize: "12px", lineHeight: 1.35, color: "#374151" }}><strong style={{ color: "#6d28d9" }}>Reported separately ONLY when extensive</strong> (dural graft, cranioplasty, flaps, big skin grafts), with the repair code that matches. Ordinary closure is already inside the definitive code.</div></foreignObject>
      </svg>
    </DiagramFrame>
  );
}

/* ------------------------------------------------------------------ */
/* 2. Intracranial endovascular therapy: what is counted how            */
/* ------------------------------------------------------------------ */
export function EndovascularDiagram() {
  const territories = [
    { x: 40, label: "Right carotid", tone: "#dc2626" },
    { x: 290, label: "Left carotid", tone: "#0e7490" },
    { x: 540, label: "Vertebro-basilar", tone: "#b45309" },
  ];
  const rows: [string, string, string][] = [
    ["61645", "Clot removal (thrombectomy / thrombolysis)", "once per treated territory"],
    ["61630 · 61635", "Balloon angioplasty · stent (narrowed artery)", "not in the same territory as 61645"],
    ["61640 +61641 +61642", "Balloon for vasospasm — per VESSEL", "+61641 same territory · +61642 different territory"],
    ["61650 +61651", "Prolonged drug infusion (10+ min, not clot-busting) — per TERRITORY", "+61651 for each extra territory (max 2)"],
  ];
  return (
    <DiagramFrame caption="Intracranial endovascular therapy is counted two ways: balloon dilatation is per VESSEL, drug infusion is per VASCULAR TERRITORY. There are only three territories.">
      <svg viewBox="0 0 760 392" role="img" aria-label="Three intracranial vascular territories and how each endovascular code is counted" style={svgStyle}>
        {territories.map((t) => (
          <g key={t.label}>
            <rect x={t.x} y="8" width="220" height="62" rx="12" fill="#fff" stroke={t.tone} strokeWidth="2" />
            <circle cx={t.x + 30} cy="39" r="14" fill={t.tone} />
            <path d={`M${t.x + 24} 39 h12 M${t.x + 30} 33 v12`} stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
            <text x={t.x + 54} y="34" fontSize="14" fontWeight="800" fill="#2e1065">{t.label}</text>
            <text x={t.x + 54} y="53" fontSize="11.5" fill="#5b4a80">vascular territory</text>
          </g>
        ))}
        <text x="380" y="98" textAnchor="middle" fontSize="12" fill="#5b4a80">Intracranial arteries are split into exactly THREE territories, so a per-territory code can never be used more than three times.</text>
        <rect x="8" y="112" width="200" height="30" rx="8" fill="#ede9fe" stroke="#c4b5fd" />
        <text x="18" y="132" fontSize="12" fontWeight="800" fill="#2e1065">Code</text>
        <rect x="214" y="112" width="290" height="30" rx="8" fill="#ede9fe" stroke="#c4b5fd" />
        <text x="224" y="132" fontSize="12" fontWeight="800" fill="#2e1065">What it is</text>
        <rect x="510" y="112" width="242" height="30" rx="8" fill="#ede9fe" stroke="#c4b5fd" />
        <text x="520" y="132" fontSize="12" fontWeight="800" fill="#2e1065">How it is counted</text>
        {rows.map(([code, what, count], i) => {
          const y = 150 + i * 52;
          return (
            <g key={code}>
              <rect x="8" y={y} width="200" height="46" rx="8" fill="#fff" stroke="#e6def7" />
              <text x="18" y={y + 29} fontSize={code.length > 12 ? "13" : "16"} fontWeight="800" fill="#6d28d9" fontFamily="Consolas, monospace">{code}</text>
              <rect x="214" y={y} width="290" height="46" rx="8" fill="#fff" stroke="#e6def7" />
              <foreignObject x="220" y={y + 3} width="280" height="40"><div style={{ fontSize: "12px", lineHeight: 1.3, color: "#374151" }}>{what}</div></foreignObject>
              <rect x="510" y={y} width="242" height="46" rx="8" fill="#fff" stroke="#e6def7" />
              <foreignObject x="516" y={y + 3} width="232" height="40"><div style={{ fontSize: "12px", lineHeight: 1.3, color: "#374151" }}>{count}</div></foreignObject>
            </g>
          );
        })}
        <text x="8" y="374" fontSize="12" fill="#5b4a80">Angiography of a territory you did NOT treat is reported separately. Angiography of the treated territory is packaged.</text>
      </svg>
    </DiagramFrame>
  );
}

/* ------------------------------------------------------------------ */
/* 3. Open spine codes: approach x region                               */
/* ------------------------------------------------------------------ */
export function SpineGridDiagram() {
  const x0 = 176;
  const cw = 145;
  const cols = ["Cervical", "Thoracic", "Lumbar", "Sacral"];
  const rows: { label: string; cells: string[]; tone: string }[] = [
    { label: "Posterior laminectomy (1–2 segments · >2)", cells: ["63001 · 63015", "63003 · 63016", "63005 · 63017", "63011"], tone: "#6d28d9" },
    { label: "Laminectomy + facetectomy + foraminotomy", cells: ["63045", "63046", "63047", "—"], tone: "#6d28d9" },
    { label: "Posterior laminotomy (per interspace)", cells: ["63020 +63035", "—", "63030 +63035", "—"], tone: "#0e7490" },
    { label: "Laminotomy, re-exploration", cells: ["63040 +63043", "—", "63042 +63044", "—"], tone: "#0e7490" },
    { label: "Anterior discectomy (per interspace)", cells: ["63075 +63076", "63077 +63078", "—", "—"], tone: "#b45309" },
    { label: "Anterior corpectomy — the APPROACH picks the code", cells: ["63081 +63082", "63085 +63086", "63087 · 63090", "63090 +63091"], tone: "#be185d" },
    { label: "Lateral extracavitary corpectomy", cells: ["—", "63101 +63103", "63102 +63103", "—"], tone: "#dc2626" },
  ];
  const top = 46;
  const rh = 44;
  return (
    <DiagramFrame caption="Open spine codes: pick the ROW by the operation, then the COLUMN by the spine region. '+' codes are add-ons for each extra segment or interspace. The laminectomy + facetectomy row also has +63048 for each extra segment. Plain laminectomy uses bands, with no add-ons.">
      <svg viewBox="0 0 760 400" role="img" aria-label="Open spine decompression codes by operation and spine region" style={svgStyle}>
        {cols.map((c, i) => (
          <g key={c}>
            <rect x={x0 + i * cw} y="8" width={cw - 4} height="32" rx="8" fill="#ede9fe" stroke="#c4b5fd" />
            <text x={x0 + i * cw + (cw - 4) / 2} y="29" textAnchor="middle" fontSize="12.5" fontWeight="800" fill="#2e1065">{c}</text>
          </g>
        ))}
        {rows.map((r, i) => {
          const y = top + i * rh;
          return (
            <g key={r.label}>
              <rect x="8" y={y} width={x0 - 14} height={rh - 6} rx="8" fill="#faf7ff" stroke="#e6def7" />
              <foreignObject x="12" y={y + 2} width={x0 - 22} height={rh - 10}><div style={{ fontSize: "11px", lineHeight: 1.2, fontWeight: 800, color: "#2e1065", display: "flex", alignItems: "center", height: "100%" }}>{r.label}</div></foreignObject>
              {r.cells.map((c, k) => (
                <g key={k}>
                  <rect x={x0 + k * cw} y={y} width={cw - 4} height={rh - 6} rx="8" fill={c === "—" ? "#f9fafb" : "#fff"} stroke={c === "—" ? "#e5e7eb" : r.tone} strokeWidth="1.5" />
                  <text x={x0 + k * cw + (cw - 4) / 2} y={y + 26} textAnchor="middle" fontSize={c.length > 10 ? "12.5" : "14"} fontWeight="800" fill={c === "—" ? "#9ca3af" : r.tone} fontFamily="Consolas, monospace">{c}</text>
                </g>
              ))}
            </g>
          );
        })}
        <text x="8" y="360" fontSize="11.5" fill="#5b4a80">Lumbar corpectomy: 63087 = combined thoracolumbar approach (+63088) · 63090 = transperitoneal / retroperitoneal approach (+63091).</text>
        <text x="8" y="378" fontSize="11.5" fill="#5b4a80">Not on this grid: percutaneous 62287, 62330 · endoscopic 62380 · Gill 63012 · transpedicular 63055–63057 · costovertebral 63064.</text>
      </svg>
    </DiagramFrame>
  );
}
