import { DiagramFrame } from "./kit";

const svgStyle = { width: "100%", height: "auto", maxWidth: "780px", minWidth: "720px" };

type Row = { label: string; code: string; from: number; to: number; soft?: number; note?: string };

function ReachGrid({ cols, rows, aria, caption, marker }: { cols: string[]; rows: Row[]; aria: string; caption: string; marker?: { col: number; text: string } }) {
  const x0 = 250;
  const cw = 66;
  const rh = 50;
  const top = 46;
  const h = top + rows.length * rh + 44;
  return (
    <DiagramFrame caption={caption}>
      <svg viewBox={`0 0 ${x0 + cols.length * cw + 12} ${h}`} role="img" aria-label={aria} style={svgStyle}>
        {cols.map((c, i) => (
          <g key={c}>
            <rect x={x0 + i * cw} y="8" width={cw - 2} height="30" rx="6" fill="#ffedd5" stroke="#fed7aa" />
            <text x={x0 + i * cw + cw / 2 - 1} y="28" textAnchor="middle" fontSize="11.5" fontWeight="800" fill="#7c2d12">{c}</text>
          </g>
        ))}
        {rows.map((r, i) => {
          const y = top + i * rh;
          return (
            <g key={r.label}>
              <text x="4" y={y + 20} fontSize="13" fontWeight="800" fill="#431407">{r.label}</text>
              <text x="4" y={y + 37} fontSize="12" fontWeight="700" fill="#c2410c" fontFamily="Consolas, monospace">{r.code}</text>
              {r.soft !== undefined && (
                <rect x={x0 + (r.to + 1) * cw} y={y + 6} width={r.soft * cw - 2} height="34" rx="8" fill="#fff7ed" stroke="#fb923c" strokeDasharray="5 4" />
              )}
              <rect x={x0 + r.from * cw} y={y + 6} width={(r.to - r.from + 1) * cw - 2} height="34" rx="8" fill="#fdba74" stroke="#c2410c" strokeWidth="1.5" />
              {r.note && <text x={x0 + r.from * cw + 8} y={y + 28} fontSize="11.5" fill="#431407" fontWeight="700">{r.note}</text>}
            </g>
          );
        })}
        {marker && (
          <g>
            <line x1={x0 + marker.col * cw - 1} y1="40" x2={x0 + marker.col * cw - 1} y2={top + rows.length * rh} stroke="#b91c1c" strokeWidth="2" strokeDasharray="6 4" />
            <text x={marker.col >= 5 ? x0 + marker.col * cw - 6 : x0 + marker.col * cw + 4} y={top + rows.length * rh + 18} textAnchor={marker.col >= 5 ? "end" : "start"} fontSize="12" fontWeight="800" fill="#b91c1c">{marker.text}</text>
          </g>
        )}
        <text x="4" y={h - 8} fontSize="11.5" fill="#7c3a1a">Solid bar = always examined · dashed = may be included, code stays the same</text>
      </svg>
    </DiagramFrame>
  );
}

export function UpperReachDiagram() {
  return (
    <ReachGrid
      aria="How far the scope travels for each upper GI endoscopy code family"
      caption="Upper GI codes are anchored on how far the TIP of the scope went. The 50 cm line past the pylorus separates EGD from enteroscopy."
      cols={["UES", "Esophagus", "GE jxn", "Stomach", "Pylorus", "Duodenum", "Jejunum", "Ileum"]}
      rows={[
        { label: "Esophagoscopy", code: "43180–43232", from: 0, to: 2, soft: 1 },
        { label: "Esophagogastroscopy", code: "EGD code + mod 52/53", from: 0, to: 3 },
        { label: "EGD", code: "43235–43259", from: 0, to: 5, soft: 1 },
        { label: "Enteroscopy → jejunum", code: "44360–44373", from: 0, to: 6 },
        { label: "Enteroscopy → ileum", code: "44376–44379", from: 0, to: 7 },
      ]}
      marker={{ col: 6, text: "≥ 50 cm past the pylorus" }}
    />
  );
}

export function LowerReachDiagram() {
  return (
    <ReachGrid
      aria="How far the scope travels for each lower GI endoscopy code family"
      caption="Lower GI codes are also anchored on the farthest landmark reached. The splenic flexure is the sigmoidoscopy / colonoscopy dividing line."
      cols={["Anus", "Rectum", "Sigmoid", "Descend.", "Splenic flx", "Transverse", "Ascend.", "Cecum"]}
      rows={[
        { label: "Anoscopy", code: "46600–46615", from: 0, to: 0, soft: 1 },
        { label: "Proctosigmoidoscopy", code: "45300–45327 (rigid)", from: 1, to: 1, soft: 1 },
        { label: "Sigmoidoscopy", code: "45330–45350", from: 1, to: 2, soft: 1 },
        { label: "Colonoscopy", code: "45378–45398", from: 1, to: 7 },
        { label: "Colonoscopy via stoma", code: "44388–44408", from: 3, to: 7, note: "enters at the stoma (level varies)" },
      ]}
      marker={{ col: 5, text: "sigmoidoscopy stops at or before the splenic flexure" }}
    />
  );
}

export function ErcpDiagram() {
  const call = (x: number, y: number, n: string) => (
    <g>
      <circle cx={x} cy={y} r="11" fill="#c2410c" />
      <text x={x} y={y + 4} textAnchor="middle" fontSize="11.5" fontWeight="800" fill="#fff">{n}</text>
    </g>
  );
  const legend: [string, string][] = [
    ["1", "43260 diagnostic ERCP (includes guidewire passage; complete if ≥1 duct is seen)"],
    ["2", "43262 sphincterotomy — NOT added when 43277 (sphincteroplasty) is reported"],
    ["3", "43264 stone/debris removal · 43265 lithotripsy (destruction of calculi)"],
    ["4", "43274 stent placement · 43276 stent exchange (each stent; an extra stent in a separate duct gets modifier 59) · 43275 stent removal is ONCE per session"],
    ["5", "43277 balloon dilation of a duct or the ampulla (each duct; extra ducts get modifier 59)"],
    ["6", "43261 biopsy · 43273 (add-on) cholangioscopy · 43278 ablation of a lesion"],
  ];
  return (
    <DiagramFrame caption="ERCP schematic: the scope enters at the papilla, then each therapeutic step is layered on the diagnostic base.">
      <svg viewBox="0 0 760 410" role="img" aria-label="Simplified ERCP anatomy with the duodenoscope at the papilla and the code for each step" style={svgStyle}>
        <rect x="120" y="14" width="250" height="70" rx="35" fill="#fee2e2" stroke="#fca5a5" />
        <text x="245" y="55" textAnchor="middle" fontSize="13" fontWeight="800" fill="#7f1d1d">Liver</text>
        <path d="M180 84 L285 170 M330 84 L285 170" stroke="#b45309" strokeWidth="6" strokeLinecap="round" fill="none" />
        <text x="192" y="106" textAnchor="end" fontSize="11.5" fontWeight="700" fill="#78350f">right hepatic duct</text>
        <text x="330" y="112" fontSize="11.5" fontWeight="700" fill="#78350f">left hepatic duct</text>
        <path d="M285 170 V300" stroke="#b45309" strokeWidth="9" strokeLinecap="round" fill="none" />
        <text x="298" y="235" fontSize="12" fontWeight="800" fill="#78350f">common bile duct</text>
        <path d="M285 195 L430 185" stroke="#b45309" strokeWidth="5" strokeLinecap="round" fill="none" />
        <ellipse cx="470" cy="180" rx="42" ry="26" fill="#bbf7d0" stroke="#16a34a" />
        <text x="470" y="184" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="#14532d">gallbladder</text>
        <text x="330" y="180" fontSize="11" fill="#78350f">cystic duct</text>
        <path d="M400 262 Q560 236 690 262 L690 292 Q560 280 400 300 Z" fill="#fce7f3" stroke="#f9a8d4" />
        <text x="600" y="256" textAnchor="middle" fontSize="12" fontWeight="800" fill="#831843">Pancreas</text>
        <path d="M285 300 Q420 282 660 276" stroke="#9d174d" strokeWidth="5" strokeLinecap="round" fill="none" />
        <text x="470" y="300" fontSize="11.5" fontWeight="700" fill="#831843">pancreatic duct</text>
        <path d="M150 306 Q150 356 210 356 H520 Q580 356 580 306" stroke="#fbbf24" strokeWidth="26" fill="none" strokeLinecap="round" opacity="0.45" />
        <text x="400" y="393" textAnchor="middle" fontSize="12" fontWeight="800" fill="#92400e">Duodenum</text>
        <circle cx="285" cy="304" r="9" fill="#111827" />
        <text x="298" y="326" fontSize="11.5" fontWeight="800" fill="#111827">papilla of Vater</text>
        <path d="M20 356 H140 Q220 356 280 312" stroke="#6b7280" strokeWidth="7" fill="none" strokeLinecap="round" />
        <text x="20" y="348" fontSize="11.5" fontWeight="700" fill="#374151">side-viewing duodenoscope</text>
        {call(285, 140, "1")}
        {call(255, 304, "2")}
        {call(262, 220, "3")}
        {call(318, 262, "4")}
        {call(320, 304, "5")}
        {call(395, 182, "6")}
      </svg>
      <ul style={{ margin: "12px 0 0", padding: "0 0 0 20px", textAlign: "left", lineHeight: 1.7, fontSize: "14px" }}>
        {legend.map(([n, t]) => <li key={n}><strong style={{ color: "#c2410c" }}>{n}</strong> — {t}</li>)}
      </ul>
    </DiagramFrame>
  );
}

export function BariatricDiagram() {
  const cards = [
    { t: "Adjustable band", a: "Lap 43770–43774", b: "Open 43886–43888 (port only)", kind: "band" },
    { t: "Sleeve gastrectomy", a: "Lap 43775", b: "Open 43843", kind: "sleeve" },
    { t: "Roux-en-Y bypass", a: "Lap 43644 / 43645", b: "Open 43846 / 43847", kind: "rny" },
    { t: "BPD with duodenal switch", a: "43845", b: "(open gastric restrictive code)", kind: "bpd" },
  ];
  return (
    <DiagramFrame caption="Four bariatric families. Pick the procedure first, then the approach (laparoscopic vs. open) — the approach decides the code.">
      <svg viewBox="0 0 760 250" role="img" aria-label="Four bariatric procedures with laparoscopic and open codes" style={svgStyle}>
        {cards.map((c, i) => {
          const x = 8 + i * 188;
          return (
            <g key={c.t}>
              <rect x={x} y="8" width="176" height="232" rx="12" fill="#fff" stroke="#f1e0d3" strokeWidth="1.5" />
              <text x={x + 88} y="30" textAnchor="middle" fontSize="13" fontWeight="800" fill="#431407">{c.t}</text>
              {c.kind === "band" && (<g><path d={`M${x + 58} 60 Q${x + 30} 110 ${x + 62} 150 Q${x + 92} 176 ${x + 122} 140 Q${x + 140} 100 ${x + 112} 68 Z`} fill="#fed7aa" stroke="#c2410c" /><rect x={x + 56} y="88" width="62" height="10" rx="5" fill="#0ea5e9" /><circle cx={x + 138} cy="104" r="9" fill="#0ea5e9" /><text x={x + 138} y="126" textAnchor="middle" fontSize="10" fill="#075985">port</text></g>)}
              {c.kind === "sleeve" && (<g><path d={`M${x + 60} 60 Q${x + 50} 100 ${x + 78} 150 Q${x + 92} 170 ${x + 108} 150 Q${x + 112} 100 ${x + 108} 62 Z`} fill="#fed7aa" stroke="#c2410c" /><path d={`M${x + 112} 62 Q${x + 150} 100 ${x + 116} 152`} stroke="#9ca3af" strokeDasharray="4 4" fill="none" /><text x={x + 134} y="112" fontSize="10" fill="#6b7280">removed</text></g>)}
              {c.kind === "rny" && (<g><ellipse cx={x + 70} cy="86" rx="26" ry="20" fill="#fed7aa" stroke="#c2410c" /><path d={`M${x + 70} 106 V150 H${x + 130}`} stroke="#c2410c" strokeWidth="5" fill="none" /><path d={`M${x + 40} 178 H${x + 130}`} stroke="#9ca3af" strokeWidth="4" strokeDasharray="4 4" /><text x={x + 88} y="196" textAnchor="middle" fontSize="10" fill="#6b7280">Roux limb ≤150 cm = 43644/43846</text></g>)}
              {c.kind === "bpd" && (<g><path d={`M${x + 60} 60 Q${x + 50} 100 ${x + 78} 140 Q${x + 92} 158 ${x + 108} 140 Q${x + 112} 100 ${x + 108} 62 Z`} fill="#fed7aa" stroke="#c2410c" /><path d={`M${x + 88} 158 Q${x + 60} 190 ${x + 130} 190`} stroke="#c2410c" strokeWidth="4" fill="none" /><text x={x + 88} y="208" textAnchor="middle" fontSize="10" fill="#6b7280">short common channel</text></g>)}
              <text x={x + 88} y="222" textAnchor="middle" fontSize="11.5" fontWeight="800" fill="#c2410c">{c.a}</text>
              <text x={x + 88} y="236" textAnchor="middle" fontSize="10.5" fill="#7c3a1a">{c.b}</text>
            </g>
          );
        })}
      </svg>
    </DiagramFrame>
  );
}

export function HerniaAgeDiagram() {
  const blocks = [
    { t: "Preterm baby", s: "born < 37 wk · up to 50 wk PCA", r: "49491", i: "49492" },
    { t: "Young infant", s: "preterm > 50 wk PCA, or full-term · under 6 months", r: "49495", i: "49496" },
    { t: "Older infant / child", s: "6 months to under 5 years", r: "49500", i: "49501" },
    { t: "Patient 5 or older", s: "5 years and up", r: "49505", i: "49507" },
  ];
  return (
    <DiagramFrame caption="Initial INGUINAL hernia repair: age (and PCA for preterms) picks the column, clinical picture picks the code. Not drawn to scale.">
      <svg viewBox="0 0 760 300" role="img" aria-label="Initial inguinal hernia repair code by age group" style={svgStyle}>
        {blocks.map((b, k) => {
          const x = 8 + k * 188;
          return (
            <g key={b.t}>
              <rect x={x} y="8" width="176" height="150" rx="12" fill="#ffedd5" stroke="#fb923c" />
              <text x={x + 88} y="32" textAnchor="middle" fontSize="13" fontWeight="800" fill="#7c2d12">{b.t}</text>
              <foreignObject x={x + 8} y="40" width="160" height="60"><div style={{ fontSize: "11.5px", lineHeight: 1.35, color: "#431407", textAlign: "center" }}>{b.s}</div></foreignObject>
              <rect x={x + 12} y="98" width="70" height="50" rx="8" fill="#fff" stroke="#c2410c" />
              <text x={x + 47} y="118" textAnchor="middle" fontSize="10" fill="#7c3a1a">reducible</text>
              <text x={x + 47} y="138" textAnchor="middle" fontSize="14" fontWeight="800" fill="#c2410c" fontFamily="Consolas, monospace">{b.r}</text>
              <rect x={x + 94} y="98" width="70" height="50" rx="8" fill="#fff" stroke="#b91c1c" />
              <text x={x + 129} y="112" textAnchor="middle" fontSize="9.5" fill="#7c3a1a">incarcerated /</text>
              <text x={x + 129} y="123" textAnchor="middle" fontSize="9.5" fill="#7c3a1a">strangulated</text>
              <text x={x + 129} y="141" textAnchor="middle" fontSize="14" fontWeight="800" fill="#b91c1c" fontFamily="Consolas, monospace">{b.i}</text>
            </g>
          );
        })}
        <rect x="8" y="176" width="744" height="52" rx="10" fill="#f0fdfa" stroke="#5eead4" />
        <text x="380" y="198" textAnchor="middle" fontSize="13" fontWeight="800" fill="#115e59">PCA (postconception age) = gestational age at birth + age in weeks at surgery</text>
        <text x="380" y="217" textAnchor="middle" fontSize="12" fill="#134e4a">Example: born at 35 wk, repaired at 20 wk of life → PCA = 55 wk</text>
        <text x="8" y="252" fontSize="12" fill="#7c3a1a">Recurrent inguinal: 49520 reducible · 49521 incarcerated/strangulated (any age) · Sliding: 49525 (any age)</text>
        <text x="8" y="272" fontSize="12" fill="#7c3a1a">Modifier 63 is not reported with 49491, 49492, 49495, or 49496 · Bilateral: modifier 50 on the inguinal codes</text>
      </svg>
    </DiagramFrame>
  );
}

export function HerniaSizeDiagram() {
  const heads = ["Initial · reducible", "Initial · incarcerated / strangulated", "Recurrent · reducible", "Recurrent · incarcerated / strangulated"];
  const rows: [string, string[]][] = [
    ["Under 3 cm", ["49591", "49592", "49613", "49614"]],
    ["3 cm to 10 cm", ["49593", "49594", "49615", "49616"]],
    ["Over 10 cm", ["49595", "49596", "49617", "49618"]],
  ];
  return (
    <DiagramFrame caption="Anterior abdominal hernia (epigastric, incisional, ventral, umbilical, spigelian): ONE code from this grid, any approach, mesh included.">
      <svg viewBox="0 0 760 318" role="img" aria-label="Anterior abdominal hernia repair codes by total defect size" style={svgStyle}>
        <text x="8" y="34" fontSize="12.5" fontWeight="800" fill="#7c2d12">Total defect length</text>
        {heads.map((h, i) => (
          <g key={h}>
            <rect x={150 + i * 152} y="8" width="148" height="44" rx="8" fill="#ffedd5" stroke="#fb923c" />
            <foreignObject x={154 + i * 152} y="10" width="140" height="40"><div style={{ fontSize: "11px", lineHeight: 1.25, fontWeight: 700, color: "#7c2d12", textAlign: "center" }}>{h}</div></foreignObject>
          </g>
        ))}
        {rows.map(([size, codes], r) => (
          <g key={size}>
            <rect x="8" y={60 + r * 54} width="138" height="48" rx="8" fill="#fff7ed" stroke="#fed7aa" />
            <text x="77" y={90 + r * 54} textAnchor="middle" fontSize="13" fontWeight="800" fill="#431407">{size}</text>
            {codes.map((c, i) => (
              <g key={c}>
                <rect x={150 + i * 152} y={60 + r * 54} width="148" height="48" rx="8" fill="#fff" stroke={i % 2 ? "#b91c1c" : "#c2410c"} />
                <text x={150 + i * 152 + 74} y={90 + r * 54} textAnchor="middle" fontSize="16" fontWeight="800" fill={i % 2 ? "#b91c1c" : "#c2410c"} fontFamily="Consolas, monospace">{c}</text>
              </g>
            ))}
          </g>
        ))}
        <text x="8" y="236" fontSize="12" fill="#7c3a1a">Measure the total defect across ALL repaired defects, before the hernia is opened.</text>
        <text x="8" y="256" fontSize="12" fill="#7c3a1a">Separate defects 10 cm or more apart are measured on their own and added.</text>
        <text x="8" y="276" fontSize="12" fill="#7c3a1a">Reducible + incarcerated at one session → report the whole repair as incarcerated/strangulated.</text>
        <text x="8" y="296" fontSize="12" fill="#7c3a1a">Parastomal: 49621 / 49622 · Non-infected mesh removal: +49623 (add-on).</text>
      </svg>
    </DiagramFrame>
  );
}

export function HemorrhoidDiagram() {
  const rows: [string, string][] = [
    ["Injection of sclerosant", "46500"],
    ["Thermal destruction (internal)", "46930"],
    ["Cryosurgery destruction", "46999"],
    ["Ligation, rubber band", "46221"],
    ["Ligation, other than rubber band", "46945 / 46946"],
    ["THD (Doppler/ultrasound), 2+ columns", "46948"],
    ["Hemorrhoidopexy", "46947"],
    ["External excision, 2+ columns", "46250"],
    ["Thrombosed external: excise / incise", "46320 / 46083"],
    ["Internal + external excision", "46255 / 46260"],
  ];
  return (
    <DiagramFrame caption="Where the hemorrhoid sits (internal, above the dentate line; external, below it) and the treatment used point you to the code.">
      <svg viewBox="0 0 760 400" role="img" aria-label="Anal canal with internal and external hemorrhoids and the code for each treatment" style={svgStyle}>
        <path d="M60 20 V190 Q60 250 100 300 L110 380 M200 20 V190 Q200 250 160 300 L150 380" stroke="#be185d" strokeWidth="14" fill="none" strokeLinecap="round" />
        <rect x="70" y="20" width="120" height="170" fill="#fdf2f8" opacity="0.7" />
        <text x="130" y="50" textAnchor="middle" fontSize="12" fontWeight="800" fill="#831843">Rectum</text>
        <line x1="10" y1="240" x2="250" y2="240" stroke="#111827" strokeDasharray="6 4" />
        <text x="252" y="244" fontSize="11.5" fontWeight="700" fill="#111827">dentate line</text>
        <ellipse cx="86" cy="215" rx="20" ry="30" fill="#7e22ce" opacity="0.85" />
        <line x1="106" y1="215" x2="212" y2="205" stroke="#6b21a8" />
        <text x="216" y="204" fontSize="12" fontWeight="800" fill="#6b21a8">INTERNAL</text>
        <text x="216" y="219" fontSize="10.5" fill="#6b21a8">inside lower rectum</text>
        <ellipse cx="86" cy="318" rx="22" ry="20" fill="#9333ea" />
        <line x1="108" y1="318" x2="212" y2="312" stroke="#6b21a8" />
        <text x="216" y="312" fontSize="12" fontWeight="800" fill="#6b21a8">EXTERNAL</text>
        <text x="216" y="327" fontSize="10.5" fill="#6b21a8">under the anal skin</text>
        <text x="130" y="392" textAnchor="middle" fontSize="12" fontWeight="800" fill="#831843">Anus</text>
        {rows.map(([t, c], i) => (
          <g key={t}>
            <rect x="330" y={14 + i * 37} width="418" height="32" rx="8" fill="#fff" stroke="#f1e0d3" />
            <text x="342" y={35 + i * 37} fontSize="12.5" fill="#431407">{t}</text>
            <text x="738" y={35 + i * 37} textAnchor="end" fontSize="13" fontWeight="800" fill="#c2410c" fontFamily="Consolas, monospace">{c}</text>
          </g>
        ))}
      </svg>
    </DiagramFrame>
  );
}
