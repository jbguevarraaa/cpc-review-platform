import { DiagramFrame } from "./kit";

const svgStyle = { width: "100%", height: "auto", maxWidth: "780px", minWidth: "720px" };

/* ------------------------------------------------------------------ */
/* 1. Lesion excision: lesion + margin = excised diameter               */
/* ------------------------------------------------------------------ */
export function ExcisedDiameterDiagram() {
  return (
    <DiagramFrame caption="The code is picked by the EXCISED diameter — the lesion itself plus the narrowest margin needed on every side — measured before the cut, not by the size of the healed scar or the pathology report.">
      <svg viewBox="0 0 760 340" role="img" aria-label="Excised diameter equals the lesion diameter plus the margin on each side" style={svgStyle}>
        <ellipse cx="330" cy="170" rx="190" ry="120" fill="none" stroke="#2563eb" strokeWidth="2" strokeDasharray="6 5" />
        <circle cx="330" cy="170" r="70" fill="#dbeafe" stroke="#1e3a8a" strokeWidth="2.5" />
        <line x1="330" y1="100" x2="330" y2="240" stroke="#1e3a8a" strokeWidth="1.5" />
        <line x1="260" y1="170" x2="400" y2="170" stroke="#1e3a8a" strokeWidth="1.5" />
        <text x="336" y="115" fontSize="13" fontWeight="800" fill="#1e3a8a">A</text>
        <text x="336" y="185" fontSize="13" fontWeight="800" fill="#1e3a8a">B</text>
        <rect x="470" y="56" width="150" height="34" rx="8" fill="#fff" stroke="#2563eb" strokeWidth="1.5" />
        <text x="545" y="78" textAnchor="middle" fontSize="13.5" fontWeight="800" fill="#1e3a8a">Lesion</text>
        <line x1="470" y1="73" x2="360" y2="150" stroke="#2563eb" strokeWidth="1.3" markerEnd="url(#arrow10k)" />
        <rect x="470" y="200" width="150" height="34" rx="8" fill="#fff" stroke="#2563eb" strokeWidth="1.5" />
        <text x="545" y="222" textAnchor="middle" fontSize="13.5" fontWeight="800" fill="#1e3a8a">Margin</text>
        <line x1="470" y1="217" x2="415" y2="200" stroke="#2563eb" strokeWidth="1.3" markerEnd="url(#arrow10k)" />
        <rect x="130" y="270" width="150" height="34" rx="8" fill="#fff" stroke="#2563eb" strokeWidth="1.5" />
        <text x="205" y="292" textAnchor="middle" fontSize="13.5" fontWeight="800" fill="#1e3a8a">Closure</text>
        <line x1="205" y1="270" x2="205" y2="255" stroke="#2563eb" strokeWidth="1.3" markerEnd="url(#arrow10k)" />
        <defs>
          <marker id="arrow10k" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#2563eb" /></marker>
        </defs>
        <rect x="8" y="8" width="744" height="30" rx="8" fill="#eff6ff" stroke="#bfdbfe" />
        <text x="380" y="28" textAnchor="middle" fontSize="13.5" fontWeight="800" fill="#1e3a8a">Excised diameter (what picks the code) = Lesion diameter (A×B) + Margin on every side</text>
      </svg>
    </DiagramFrame>
  );
}

/* ------------------------------------------------------------------ */
/* 2. The 2 (not 3) anatomical groups used across the removal codes     */
/* ------------------------------------------------------------------ */
export function AnatomicalGroupDiagram() {
  const rows: [string, string, string][] = [
    ["Trunk, arms, or legs (T/A/L)", "The \"easy\" body — everything not called out below", "#2563eb"],
    ["Scalp, neck, hands, feet, genitalia — OR face/ears/eyelids/nose/lips/mucous membrane", "The \"named\" body — smaller, trickier anatomy gets its own higher-valued code", "#1e3a8a"],
  ];
  return (
    <DiagramFrame caption="Excision (11400s/11600s), destruction (17260s), and simple repair (12000s) all use this SAME two-group split. Only the excision/destruction families add a THIRD narrower face/eye/lip group — Mohs surgery (17311–17315) uses just these two groups, not three.">
      <svg viewBox="0 0 760 260" role="img" aria-label="Two anatomical groups used across most integumentary removal and repair code families" style={svgStyle}>
        <rect x="8" y="8" width="744" height="30" rx="8" fill="#eff6ff" stroke="#bfdbfe" />
        <text x="380" y="28" textAnchor="middle" fontSize="13" fontWeight="800" fill="#1e3a8a">Two body-region groups recur across the removal &amp; repair chapters</text>
        {rows.map(([title, sub, color], i) => {
          const y = 54 + i * 96;
          return (
            <g key={title}>
              <rect x="8" y={y} width="744" height="82" rx="10" fill="#fff" stroke={color} strokeWidth="1.6" />
              <circle cx="34" cy={y + 24} r="14" fill={color} />
              <text x="34" y={y + 29} textAnchor="middle" fontSize="13" fontWeight="800" fill="#fff">{i + 1}</text>
              <text x="58" y={y + 30} fontSize="14" fontWeight="800" fill="#111827">{title}</text>
              <text x="58" y={y + 55} fontSize="12.5" fill="#3d5580">{sub}</text>
            </g>
          );
        })}
        <text x="8" y="232" fontSize="12" fill="#3d5580">Simple/intermediate repair split it as 12001–12007 (group 1) vs. 12011–12018 (group 2). Excision/destruction split group 2 further into S/N/H/F/G vs. F/E/E/N/L/M — see the code table.</text>
      </svg>
    </DiagramFrame>
  );
}

/* ------------------------------------------------------------------ */
/* 3. Mohs: stage vs. block                                             */
/* ------------------------------------------------------------------ */
export function MohsStageBlockDiagram() {
  return (
    <DiagramFrame caption="A stage is one full round of cutting + mapping + microscopic reading. Each stage is cut into blocks (tissue pieces) for the microscope. +17315 counts only extra BLOCKS beyond the first 5, in any stage.">
      <svg viewBox="0 0 760 300" role="img" aria-label="Mohs micrographic surgery stage and block structure" style={svgStyle}>
        <rect x="8" y="8" width="360" height="120" rx="10" fill="#eff6ff" stroke="#bfdbfe" />
        <text x="188" y="30" textAnchor="middle" fontSize="13.5" fontWeight="800" fill="#1e3a8a">STAGE 1</text>
        <text x="24" y="54" fontSize="12.5" fill="#374151">Remove all gross tumor, cut into</text>
        <text x="24" y="72" fontSize="12.5" fill="#374151">up to 5 tissue BLOCKS, map + color-</text>
        <text x="24" y="90" fontSize="12.5" fill="#374151">code, examine under microscope.</text>
        <text x="24" y="112" fontSize="12.5" fontWeight="800" fill="#2563eb">17311 (S/N/H/F/G/complex) or 17313 (T/A/L)</text>
        <rect x="392" y="8" width="360" height="120" rx="10" fill="#eff6ff" stroke="#bfdbfe" />
        <text x="572" y="30" textAnchor="middle" fontSize="13.5" fontWeight="800" fill="#1e3a8a">STAGE 2 (if margins not clear)</text>
        <text x="408" y="54" fontSize="12.5" fill="#374151">Same surgeon repeats the cut only</text>
        <text x="408" y="72" fontSize="12.5" fill="#374151">where tumor remained — up to 5</text>
        <text x="408" y="90" fontSize="12.5" fill="#374151">more blocks, mapped and read.</text>
        <text x="408" y="112" fontSize="12.5" fontWeight="800" fill="#2563eb">+17312 (with 17311) or +17314 (with 17313)</text>
        <rect x="8" y="144" width="744" height="60" rx="10" fill="#fff" stroke="#1e3a8a" strokeWidth="1.5" />
        <text x="24" y="168" fontSize="13" fontWeight="800" fill="#111827">+17315 — each additional BLOCK beyond the first 5, in ANY stage</text>
        <text x="24" y="188" fontSize="12.5" fill="#3d5580">Used with 17311–17314 once per extra block, regardless of which stage it came from.</text>
        <text x="8" y="228" fontSize="12" fill="#3d5580">Only TWO location codes exist: 17311/+17312 for head, neck, hands, feet, genitalia, or any site where surgery</text>
        <text x="8" y="246" fontSize="12" fill="#3d5580">directly involves muscle/cartilage/bone/tendon/major nerves/vessels; 17313/+17314 for trunk, arms, or legs.</text>
        <text x="8" y="264" fontSize="12" fill="#3d5580">There is no separate face/eyelid/lip code family for Mohs — those areas fall under 17311's head/neck group.</text>
      </svg>
    </DiagramFrame>
  );
}

/* ------------------------------------------------------------------ */
/* 6. Mastectomy ladder: how much tissue each type removes              */
/* ------------------------------------------------------------------ */
export function MastectomyLadderDiagram() {
  type Panel = { label: string; name: string; code: string; breast: boolean; pect: "none" | "minor" | "both"; nodes: boolean; internal: boolean; wedge?: boolean };
  const panels: Panel[] = [
    { label: "A", name: "Partial", code: "19301–19302", breast: false, pect: "none", nodes: false, internal: false, wedge: true },
    { label: "B", name: "Simple, complete", code: "19303", breast: true, pect: "none", nodes: false, internal: false },
    { label: "C", name: "Modified radical", code: "19307", breast: true, pect: "minor", nodes: true, internal: false },
    { label: "D", name: "Radical / Urban type", code: "19305–19306", breast: true, pect: "both", nodes: true, internal: true },
  ];
  const w = 178, gap = 12, x0 = 8, panelH = 250;
  return (
    <DiagramFrame caption="Schematic chest wall, panel by panel — shaded tissue is what each mastectomy type removes. Partial removes only a wedge; each step right adds more structure, ending with the radical/Urban-type ladder (pectoral muscles, axillary nodes, and — Urban type only — the internal mammary chain).">
      <svg viewBox="0 0 760 300" role="img" aria-label="Four-panel schematic comparing tissue removed by partial, simple, modified radical, and radical mastectomy" style={svgStyle}>
        <rect x="8" y="4" width="744" height="26" rx="8" fill="#eff6ff" stroke="#bfdbfe" />
        <text x="380" y="22" textAnchor="middle" fontSize="13" fontWeight="800" fill="#1e3a8a">Mastectomy ladder — how much tissue comes out</text>
        {panels.map((p, i) => {
          const x = x0 + i * (w + gap);
          const y = 38;
          const chestFill = "#fff";
          return (
            <g key={p.label}>
              <rect x={x} y={y} width={w} height={panelH} rx="10" fill="#f8f9ff" stroke="#dbeafe" strokeWidth="1.4" />
              <circle cx={x + 22} cy={y + 20} r="12" fill="#1e3a8a" />
              <text x={x + 22} y={y + 25} textAnchor="middle" fontSize="12" fontWeight="800" fill="#fff">{p.label}</text>
              <text x={x + 40} y={y + 25} fontSize="12.5" fontWeight="800" fill="#111827">{p.name}</text>

              {/* chest wall block */}
              <rect x={x + 16} y={y + 40} width={w - 32} height="120" rx="8" fill={chestFill} stroke="#94a3b8" strokeWidth="1.2" />

              {/* pectoral muscle layer */}
              {p.pect !== "none" && (
                <rect x={x + 16} y={y + 40} width={w - 32} height="34" rx="6" fill="#2563eb" fillOpacity={p.pect === "both" ? 0.85 : 0.35} stroke="#1e3a8a" strokeWidth="1" />
              )}
              <text x={x + w / 2} y={y + 61} textAnchor="middle" fontSize="9.5" fontWeight="700" fill={p.pect === "both" ? "#fff" : "#1e3a8a"}>
                {p.pect === "both" ? "pectoral muscles" : p.pect === "minor" ? "minor only (± )" : "muscle spared"}
              </text>

              {/* breast tissue */}
              {p.wedge ? (
                <path d={`M ${x + w / 2} ${y + 98} L ${x + w / 2 + 34} ${y + 150} A 40 40 0 0 1 ${x + w / 2 - 10} ${y + 156} Z`} fill="#2563eb" stroke="#1e3a8a" strokeWidth="1" />
              ) : (
                <ellipse cx={x + w / 2} cy={y + 126} rx="42" ry="34" fill={p.breast ? "#2563eb" : "#fff"} fillOpacity={p.breast ? 0.85 : 1} stroke="#1e3a8a" strokeWidth="1.3" />
              )}
              {p.wedge && <ellipse cx={x + w / 2} cy={y + 126} rx="42" ry="34" fill="none" stroke="#1e3a8a" strokeWidth="1.2" strokeDasharray="3 3" />}

              {/* axillary nodes */}
              <g opacity={p.nodes ? 1 : 0.3}>
                {[0, 1, 2].map((n) => (
                  <circle key={n} cx={x + w - 30 - (n % 2) * 10} cy={y + 176 + n * 12} r="5" fill={p.nodes ? "#1e3a8a" : "#fff"} stroke="#1e3a8a" strokeWidth="1" />
                ))}
              </g>
              <text x={x + w - 60} y={y + 214} fontSize="8.5" fill="#3d5580">axillary nodes</text>

              {/* internal mammary chain */}
              <g opacity={p.internal ? 1 : 0.25}>
                {[0, 1, 2].map((n) => (
                  <circle key={n} cx={x + 30} cy={y + 176 + n * 12} r="4" fill={p.internal ? "#0f766e" : "#fff"} stroke="#0f766e" strokeWidth="1" />
                ))}
              </g>
              <text x={x + 16} y={y + 214} fontSize="8" fill={p.internal ? "#0f766e" : "#94a3b8"} fontWeight={p.internal ? 800 : 400}>int. mammary</text>

              <rect x={x + 12} y={y + panelH - 26} width={w - 24} height="20" rx="6" fill="#fff" stroke="#bfdbfe" />
              <text x={x + w / 2} y={y + panelH - 12} textAnchor="middle" fontSize="10.5" fontWeight="800" fill="#2563eb" fontFamily="Consolas, monospace">{p.code}</text>
            </g>
          );
        })}
        <text x="8" y="296" fontSize="11.5" fill="#3d5580">Modified radical (C) keeps pectoralis MAJOR; only pectoralis minor is ever optional. Radical (D) removes both — and only the Urban-type variant (19306) adds the internal mammary chain.</text>
      </svg>
    </DiagramFrame>
  );
}

/* ------------------------------------------------------------------ */
/* 7. Pressure ulcer → flap closure sequence                            */
/* ------------------------------------------------------------------ */
export function PressureUlcerFlapDiagram() {
  return (
    <DiagramFrame caption="A pressure ulcer excision is coded by site, then by how the defect is closed — from left to right the closure gets more involved, and the more involved options (flap or graft) add their own separate code on top.">
      <svg viewBox="0 0 760 260" role="img" aria-label="Three-step sequence from an intact pressure ulcer to excision to flap closure" style={svgStyle}>
        <rect x="8" y="6" width="744" height="26" rx="8" fill="#eff6ff" stroke="#bfdbfe" />
        <text x="380" y="24" textAnchor="middle" fontSize="13" fontWeight="800" fill="#1e3a8a">Pressure ulcer, excised → repaired</text>

        {/* Panel 1: intact ulcer */}
        <g>
          <rect x="16" y="46" width="220" height="150" rx="10" fill="#f8f9ff" stroke="#dbeafe" />
          <text x="126" y="66" textAnchor="middle" fontSize="12" fontWeight="800" fill="#111827">1 · Ulcer, intact</text>
          <ellipse cx="126" cy="140" rx="60" ry="42" fill="#fce8e8" stroke="#94a3b8" strokeWidth="1.2" />
          <ellipse cx="126" cy="140" rx="26" ry="18" fill="#dc2626" fillOpacity="0.55" stroke="#991b1b" strokeWidth="1.3" />
          <text x="126" y="182" textAnchor="middle" fontSize="9.5" fill="#3d5580">necrotic ulcer bed</text>
        </g>

        <line x1="242" y1="120" x2="270" y2="120" stroke="#2563eb" strokeWidth="2" markerEnd="url(#arrowPU)" />

        {/* Panel 2: excised, flap raised */}
        <g>
          <rect x="276" y="46" width="220" height="150" rx="10" fill="#f8f9ff" stroke="#dbeafe" />
          <text x="386" y="66" textAnchor="middle" fontSize="12" fontWeight="800" fill="#111827">2 · Excised ± ostectomy</text>
          <ellipse cx="386" cy="140" rx="60" ry="42" fill="#fce8e8" stroke="#94a3b8" strokeWidth="1.2" />
          <path d="M 340 118 A 50 40 0 0 1 432 118" fill="none" stroke="#1e3a8a" strokeWidth="2" strokeDasharray="4 3" />
          <ellipse cx="386" cy="145" rx="22" ry="15" fill="#fff" stroke="#dc2626" strokeWidth="1.3" strokeDasharray="3 2" />
          <text x="386" y="182" textAnchor="middle" fontSize="9.5" fill="#3d5580">flap tissue raised, bone trimmed</text>
        </g>

        <line x1="502" y1="120" x2="530" y2="120" stroke="#2563eb" strokeWidth="2" markerEnd="url(#arrowPU)" />

        {/* Panel 3: closed */}
        <g>
          <rect x="536" y="46" width="216" height="150" rx="10" fill="#f8f9ff" stroke="#dbeafe" />
          <text x="644" y="66" textAnchor="middle" fontSize="12" fontWeight="800" fill="#111827">3 · Closed</text>
          <ellipse cx="644" cy="140" rx="60" ry="42" fill="#eff6ff" stroke="#2563eb" strokeWidth="1.6" />
          <text x="644" y="145" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#1e3a8a">primary suture, OR</text>
          <text x="644" y="160" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#1e3a8a">skin flap, OR</text>
          <text x="644" y="175" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#1e3a8a">muscle/myocutaneous flap or graft</text>
        </g>

        <defs>
          <marker id="arrowPU" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#2563eb" /></marker>
        </defs>
        <text x="8" y="222" fontSize="11.5" fill="#3d5580">Muscle/myocutaneous flap closure → ALSO report 15734 (trunk) or 15738 (lower extremity). Split-thickness skin graft closure → ALSO report 15100 or 15101.</text>
      </svg>
    </DiagramFrame>
  );
}

/* ------------------------------------------------------------------ */
/* 4. Repair classification ladder: simple → intermediate → complex     */
/* ------------------------------------------------------------------ */
export function RepairClassificationLadderDiagram() {
  const layerLabels = ["Epidermis", "Dermis", "SubQ tissue", "Superficial fascia", "Bone/cartilage/tendon/nerve"];
  const rows: { label: string; sub: string; code: string; filled: number }[] = [
    { label: "SIMPLE", sub: "One-layer closure", code: "12001–12018", filled: 2 },
    { label: "INTERMEDIATE", sub: "+ layered closure of subQ & superficial fascia (or 1-layer closure of a heavily contaminated wound)", code: "12031–12057", filled: 4 },
    { label: "COMPLEX", sub: "+ exposed bone/cartilage/tendon/nerve, wound-edge debridement, extensive undermining, free margins, or retention sutures", code: "13100–13153", filled: 5 },
  ];
  return (
    <DiagramFrame caption="Each step up the ladder keeps everything the step below needed, plus one more layer or complication. The code family is picked by how DEEP or how complicated the closure is — never by wound length alone.">
      <svg viewBox="0 0 760 350" role="img" aria-label="Repair classification ladder from simple to intermediate to complex" style={svgStyle}>
        <rect x="8" y="8" width="744" height="28" rx="8" fill="#eff6ff" stroke="#bfdbfe" />
        <text x="380" y="27" textAnchor="middle" fontSize="13" fontWeight="800" fill="#1e3a8a">Repair classification = what had to be closed, layer by layer</text>
        {rows.map((row, i) => {
          const y = 48 + i * 98;
          return (
            <g key={row.label}>
              <rect x="8" y={y} width="744" height="86" rx="10" fill="#fff" stroke="#2563eb" strokeWidth="1.6" />
              <circle cx="34" cy={y + 26} r="14" fill="#1e3a8a" />
              <text x="34" y={y + 31} textAnchor="middle" fontSize="12.5" fontWeight="800" fill="#fff">{i + 1}</text>
              <text x="58" y={y + 22} fontSize="14" fontWeight="800" fill="#111827">{row.label}</text>
              <text x="58" y={y + 40} fontSize="11.5" fill="#3d5580">{row.sub}</text>
              <rect x="580" y={y + 10} width="156" height="26" rx="8" fill="#eff6ff" stroke="#bfdbfe" />
              <text x="658" y={y + 27} textAnchor="middle" fontSize="12.5" fontWeight="800" fill="#1e3a8a" fontFamily="Consolas, monospace">{row.code}</text>
              {layerLabels.map((layer, li) => {
                const lx = 58 + li * 88;
                const ly = y + 54;
                const included = li < row.filled;
                return (
                  <g key={layer}>
                    <rect x={lx} y={ly} width="80" height="20" rx="4" fill={included ? "#2563eb" : "#f8f9ff"} stroke={included ? "#1e3a8a" : "#dbeafe"} />
                    <text x={lx + 40} y={ly + 14} textAnchor="middle" fontSize="8.7" fontWeight={included ? 800 : 600} fill={included ? "#fff" : "#93a5c9"}>{layer}</text>
                  </g>
                );
              })}
            </g>
          );
        })}
      </svg>
    </DiagramFrame>
  );
}

/* ------------------------------------------------------------------ */
/* 5. Adjacent tissue transfer: primary + secondary defect = total       */
/* ------------------------------------------------------------------ */
export function ATTDefectAreaDiagram() {
  return (
    <DiagramFrame caption="ATT code selection is based on the TOTAL defect — the primary defect left by the excision, plus the secondary defect created by designing and moving the flap — measured together as one combined area, in sq cm.">
      <svg viewBox="0 0 760 260" role="img" aria-label="Adjacent tissue transfer defect area equals the primary defect plus the secondary defect" style={svgStyle}>
        <rect x="8" y="8" width="744" height="28" rx="8" fill="#eff6ff" stroke="#bfdbfe" />
        <text x="380" y="27" textAnchor="middle" fontSize="13" fontWeight="800" fill="#1e3a8a">Total defect area (picks the code tier) = Primary defect + Secondary defect</text>

        <rect x="40" y="60" width="200" height="130" rx="10" fill="#dbeafe" stroke="#1e3a8a" strokeWidth="2" />
        <text x="140" y="90" textAnchor="middle" fontSize="13" fontWeight="800" fill="#1e3a8a">Primary defect</text>
        <text x="140" y="112" textAnchor="middle" fontSize="11" fill="#3d5580">Length × width of the</text>
        <text x="140" y="128" textAnchor="middle" fontSize="11" fill="#3d5580">excised lesion/area</text>

        <text x="270" y="135" textAnchor="middle" fontSize="26" fontWeight="800" fill="#2563eb">+</text>

        <rect x="300" y="60" width="200" height="130" rx="10" fill="#eff6ff" stroke="#2563eb" strokeWidth="2" strokeDasharray="6 4" />
        <text x="400" y="90" textAnchor="middle" fontSize="13" fontWeight="800" fill="#1e3a8a">Secondary defect</text>
        <text x="400" y="112" textAnchor="middle" fontSize="11" fill="#3d5580">Length × width of the</text>
        <text x="400" y="128" textAnchor="middle" fontSize="11" fill="#3d5580">gap the flap design opens</text>
        <text x="400" y="144" textAnchor="middle" fontSize="11" fill="#3d5580">up to move tissue over</text>

        <text x="530" y="135" textAnchor="middle" fontSize="26" fontWeight="800" fill="#2563eb">=</text>

        <rect x="560" y="60" width="180" height="130" rx="10" fill="#1e3a8a" />
        <text x="650" y="98" textAnchor="middle" fontSize="13" fontWeight="800" fill="#fff">Total defect area</text>
        <text x="650" y="120" textAnchor="middle" fontSize="11" fill="#bfdbfe">picks the 14000-series</text>
        <text x="650" y="136" textAnchor="middle" fontSize="11" fill="#bfdbfe">code by group + sq cm tier</text>

        <text x="8" y="222" fontSize="12" fill="#3d5580">The lesion excision itself is never billed on top — it's absorbed into the ATT code. Simple closure of the secondary defect is also packaged.</text>
        <text x="8" y="240" fontSize="12" fill="#3d5580">A skin graft or complex repair needed to close the secondary defect, though, is reported as its own separate procedure.</text>
      </svg>
    </DiagramFrame>
  );
}
