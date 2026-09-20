import { DiagramFrame } from "./kit";

const svgStyle = { width: "100%", height: "auto", maxWidth: "780px", minWidth: "720px" };

/* ------------------------------------------------------------------ */
/* 1. Urinary tract endoscopy map                                      */
/* ------------------------------------------------------------------ */
export function UrinaryEndoscopyDiagram() {
  const box = (y: number, n: string, title: string, codes: string, body: string, color: string) => (
    <g key={n}>
      <rect x="330" y={y} width="422" height="82" rx="10" fill="#fff" stroke={color} strokeWidth="1.5" />
      <circle cx="352" cy={y + 22} r="12" fill={color} />
      <text x="352" y={y + 26} textAnchor="middle" fontSize="12" fontWeight="800" fill="#fff">{n}</text>
      <text x="374" y={y + 26} fontSize="13.5" fontWeight="800" fill="#1e1b4b">{title}</text>
      <text x="740" y={y + 26} textAnchor="end" fontSize="13" fontWeight="800" fill={color} fontFamily="Consolas, monospace">{codes}</text>
      <foreignObject x="342" y={y + 36} width="402" height="44"><div style={{ fontSize: "12px", lineHeight: 1.35, color: "#374151" }}>{body}</div></foreignObject>
    </g>
  );
  return (
    <DiagramFrame caption="Where each urinary endoscopy family lives. The route in — and how far the scope tip goes — picks the code range.">
      <svg viewBox="0 0 760 420" role="img" aria-label="Urinary tract with the code range for renal, ureteral, and bladder or urethral endoscopy" style={svgStyle}>
        {/* anatomy */}
        <ellipse cx="170" cy="62" rx="46" ry="34" fill="#fecaca" stroke="#f87171" strokeWidth="1.5" />
        <path d="M170 96 C 170 150, 176 190, 170 246" stroke="#94a3b8" strokeWidth="8" fill="none" strokeLinecap="round" />
        <ellipse cx="170" cy="284" rx="64" ry="40" fill="#bfdbfe" stroke="#60a5fa" strokeWidth="1.5" />
        <ellipse cx="170" cy="342" rx="28" ry="16" fill="#fbcfe8" stroke="#f472b6" strokeWidth="1.5" />
        <rect x="163" y="322" width="14" height="88" rx="6" fill="#fde68a" stroke="#f59e0b" strokeWidth="1" />
        <path d="M170 414 L170 262" stroke="#4338ca" strokeWidth="3" strokeDasharray="7 5" fill="none" />
        <polygon points="170,254 163,268 177,268" fill="#4338ca" />
        <text x="112" y="66" textAnchor="end" fontSize="13" fontWeight="800" fill="#7f1d1d">Kidney</text>
        <text x="190" y="172" fontSize="13" fontWeight="800" fill="#475569">Ureter</text>
        <text x="240" y="290" fontSize="13" fontWeight="800" fill="#1e3a8a">Bladder</text>
        <text x="134" y="346" textAnchor="end" fontSize="12.5" fontWeight="800" fill="#9d174d">Prostate</text>
        <text x="186" y="392" fontSize="12.5" fontWeight="800" fill="#92400e">Urethra</text>
        <text x="60" y="414" fontSize="11.5" fontWeight="700" fill="#4338ca">scope route</text>
        {/* leader lines */}
        <path d="M216 62 L330 38" stroke="#dc2626" strokeWidth="1.5" fill="none" />
        <path d="M175 140 L330 130" stroke="#0f766e" strokeWidth="1.5" fill="none" />
        <path d="M234 270 L330 236" stroke="#4338ca" strokeWidth="1.5" fill="none" />
        <path d="M198 342 L330 330" stroke="#be185d" strokeWidth="1.5" fill="none" />
        {box(8, "1", "Renal endoscopy", "50551–50580", "Through an established nephrostomy or pyelostomy (50551–50562), or through a nephrotomy or pyelotomy (50570–50580).", "#dc2626")}
        {box(100, "2", "Ureteral endoscopy", "50951–50980", "Through an established ureterostomy (50951–50961) or through a ureterotomy (50970–50980).", "#0f766e")}
        {box(192, "3", "Cystourethroscopy family", "52000–52356", "Cystoscopy, urethroscopy, and cystourethroscopy — up the urethra. Diagnostic look = 52000. Treatments 52204–52356, including ureteroscopy 52351–52356.", "#4338ca")}
        {box(298, "4", "Bladder neck & prostate", "52400–52700", "Transurethral work at the outlet, such as TURP 52601 and laser prostate procedures.", "#be185d")}
      </svg>
    </DiagramFrame>
  );
}

/* ------------------------------------------------------------------ */
/* 2. Hysterectomy grid                                                */
/* ------------------------------------------------------------------ */
export function HysterectomyGridDiagram() {
  const x0 = 214;
  const cw = 134;
  const heads = [
    ["250 g or less", "uterus only"],
    ["250 g or less", "+ tube(s)/ovary(s)"],
    ["over 250 g", "uterus only"],
    ["over 250 g", "+ tube(s)/ovary(s)"],
  ];
  const rows: { label: string; note?: string; merged?: string; codes?: string[]; tone: string }[] = [
    { label: "Open abdominal, total", merged: "58150", note: "weight and tube/ovary removal do NOT change the code", tone: "#4338ca" },
    { label: "Open abdominal, subtotal", merged: "58180", note: "weight and tube/ovary removal do NOT change the code", tone: "#4338ca" },
    { label: "Vaginal (open)", codes: ["58260", "58262", "58290", "58291"], tone: "#0f766e" },
    { label: "Lap-assisted vaginal", codes: ["58550", "58552", "58553", "58554"], tone: "#0f766e" },
    { label: "Laparoscopic, total", codes: ["58570", "58571", "58572", "58573"], tone: "#b45309" },
    { label: "Laparoscopic, subtotal", codes: ["58541", "58542", "58543", "58544"], tone: "#b45309" },
  ];
  const top = 66;
  const rh = 46;
  return (
    <DiagramFrame caption="Standard hysterectomy codes at a glance. The open abdominal rows ignore uterine weight and tube/ovary removal; the vaginal and laparoscopic rows use both. Radical and vaginectomy codes are listed under the grid.">
      <svg viewBox="0 0 760 398" role="img" aria-label="Hysterectomy codes by approach, uterine weight, and whether tubes or ovaries are removed" style={svgStyle}>
        <text x="8" y="34" fontSize="12.5" fontWeight="800" fill="#1e1b4b">Approach</text>
        {heads.map(([a, b], i) => (
          <g key={a + b}>
            <rect x={x0 + i * cw} y="8" width={cw - 4} height="50" rx="8" fill={i < 2 ? "#e0e7ff" : "#fce7f3"} stroke={i < 2 ? "#a5b4fc" : "#f9a8d4"} />
            <text x={x0 + i * cw + (cw - 4) / 2} y="28" textAnchor="middle" fontSize="12" fontWeight="800" fill="#1e1b4b">{a}</text>
            <text x={x0 + i * cw + (cw - 4) / 2} y="46" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="#4b5563">{b}</text>
          </g>
        ))}
        {rows.map((r, i) => {
          const y = top + i * rh;
          return (
            <g key={r.label}>
              <rect x="8" y={y} width={x0 - 14} height={rh - 6} rx="8" fill="#f8f9ff" stroke="#dcdff5" />
              <text x="16" y={y + 26} fontSize="12.5" fontWeight="800" fill="#1e1b4b">{r.label}</text>
              {r.merged ? (
                <g>
                  <rect x={x0} y={y} width={cw * 4 - 4} height={rh - 6} rx="8" fill="#fff" stroke={r.tone} strokeWidth="1.5" />
                  <text x={x0 + 18} y={y + 27} fontSize="17" fontWeight="800" fill={r.tone} fontFamily="Consolas, monospace">{r.merged}</text>
                  <text x={x0 + 100} y={y + 26} fontSize="12" fill="#4b5563">{r.note}</text>
                </g>
              ) : (
                r.codes!.map((c, k) => (
                  <g key={c}>
                    <rect x={x0 + k * cw} y={y} width={cw - 4} height={rh - 6} rx="8" fill="#fff" stroke={r.tone} strokeWidth="1.5" />
                    <text x={x0 + k * cw + (cw - 4) / 2} y={y + 27} textAnchor="middle" fontSize="17" fontWeight="800" fill={r.tone} fontFamily="Consolas, monospace">{c}</text>
                  </g>
                ))
              )}
            </g>
          );
        })}
        <text x="8" y="356" fontSize="12" fill="#4a4a7c">Vaginal extras have their own codes: 58263, 58267, 58270 (250 g or less) and 58292–58294 (over 250 g).</text>
        <text x="8" y="374" fontSize="12" fill="#4a4a7c">58275 and 58280 add a vaginectomy (no weight split).</text>
        <text x="8" y="392" fontSize="12" fill="#4a4a7c">Radical: open 58210 · vaginal 58285 · laparoscopic 58548 (no weight or tube/ovary split).</text>
      </svg>
    </DiagramFrame>
  );
}

/* ------------------------------------------------------------------ */
/* 3. Obstetric package grid                                           */
/* ------------------------------------------------------------------ */
export function ObPackageDiagram() {
  const cols = ["Global — all three parts", "Delivery + postpartum", "Delivery only", "Antepartum only", "Postpartum only"];
  const x0 = 196;
  const cw = 112;
  const rows: { label: string; sub: string; codes: string[]; tone: string }[] = [
    { label: "Vaginal delivery", sub: "no prior cesarean", codes: ["59400", "59410", "59409", "59425 · 59426", "59430"], tone: "#0f766e" },
    { label: "Cesarean delivery", sub: "no VBAC attempt (planned repeat included)", codes: ["59510", "59515", "59514", "59425 · 59426", "59430"], tone: "#b45309" },
    { label: "VBAC — successful", sub: "prior cesarean, vaginal birth", codes: ["59610", "59614", "59612", "59425 · 59426", "59430"], tone: "#4338ca" },
    { label: "VBAC attempt fails", sub: "prior cesarean, cesarean again", codes: ["59618", "59622", "59620", "59425 · 59426", "59430"], tone: "#be185d" },
  ];
  const top = 118;
  const rh = 56;
  return (
    <DiagramFrame caption="Pick the row by the type of delivery, then the column by how much of the care YOUR doctor gave. The global code covers antepartum + delivery + postpartum.">
      <svg viewBox="0 0 760 372" role="img" aria-label="Obstetric care and delivery codes by delivery type and how much of the care was provided" style={svgStyle}>
        {/* timeline strip */}
        <rect x="196" y="10" width="170" height="36" rx="8" fill="#ccfbf1" stroke="#5eead4" />
        <text x="281" y="33" textAnchor="middle" fontSize="12.5" fontWeight="800" fill="#115e59">Antepartum</text>
        <rect x="376" y="10" width="170" height="36" rx="8" fill="#fef3c7" stroke="#fcd34d" />
        <text x="461" y="33" textAnchor="middle" fontSize="12.5" fontWeight="800" fill="#92400e">Delivery</text>
        <rect x="556" y="10" width="196" height="36" rx="8" fill="#fce7f3" stroke="#f9a8d4" />
        <text x="654" y="33" textAnchor="middle" fontSize="12.5" fontWeight="800" fill="#9d174d">Postpartum</text>
        <text x="8" y="33" fontSize="12.5" fontWeight="800" fill="#1e1b4b">Time in the pregnancy →</text>
        <text x="8" y="74" fontSize="12.5" fontWeight="800" fill="#1e1b4b">Code family</text>
        {cols.map((c, i) => (
          <g key={c}>
            <rect x={x0 + i * cw} y="56" width={cw - 4} height="52" rx="8" fill="#eef0ff" stroke="#c7d2fe" />
            <foreignObject x={x0 + i * cw + 3} y="58" width={cw - 10} height="48"><div style={{ fontSize: "11px", lineHeight: 1.25, fontWeight: 800, color: "#1e1b4b", textAlign: "center" }}>{c}</div></foreignObject>
          </g>
        ))}
        {rows.map((r, i) => {
          const y = top + i * rh;
          return (
            <g key={r.label}>
              <rect x="8" y={y} width={x0 - 14} height={rh - 8} rx="8" fill="#f8f9ff" stroke="#dcdff5" />
              <text x="16" y={y + 22} fontSize="12.5" fontWeight="800" fill="#1e1b4b">{r.label}</text>
              <text x="16" y={y + 39} fontSize="11" fill="#4a4a7c">{r.sub}</text>
              {r.codes.map((c, k) => (
                <g key={c + k}>
                  <rect x={x0 + k * cw} y={y} width={cw - 4} height={rh - 8} rx="8" fill="#fff" stroke={r.tone} strokeWidth="1.5" />
                  <text x={x0 + k * cw + (cw - 4) / 2} y={y + 30} textAnchor="middle" fontSize={c.length > 6 ? "13.5" : "16.5"} fontWeight="800" fill={r.tone} fontFamily="Consolas, monospace">{c}</text>
                </g>
              ))}
            </g>
          );
        })}
        <text x="8" y="356" fontSize="12" fill="#4a4a7c">Antepartum care only: 59425 = 4–6 visits, 59426 = 7 or more visits. Only 1–3 visits → the office E/M codes.</text>
      </svg>
    </DiagramFrame>
  );
}
