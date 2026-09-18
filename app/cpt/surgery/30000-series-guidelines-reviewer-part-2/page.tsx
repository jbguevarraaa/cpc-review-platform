import Link from "next/link";

type CodeEntry = [string, string];
type Category = { name: string; codes: CodeEntry[] };
type Subsection = {
  n: number;
  title: string;
  range: string;
  intro?: string;
  categories: Category[];
  steps: string[];
  rules: string[];
  tips: string[];
};

const subsections: Subsection[] = [
  {
    n: 1,
    title: "Lung & Pleural Biopsy — Picking the Right Approach",
    range: "32096–32098, 32400, 32408, 32601–32609",
    intro: "Three fundamentally different approaches exist for sampling lung/pleural tissue — open (thoracotomy), percutaneous needle, and thoracoscopic (VATS) — each with its own dedicated code family. They're never mixed.",
    categories: [
      {
        name: "Open (Thoracotomy) Biopsy",
        codes: [
          ["32096 / 32097", "Diagnostic biopsy of a lung infiltrate vs. a lung nodule/mass, unilateral (each reported no more than once per lung)"],
          ["32098", "Biopsy of the pleura"],
        ],
      },
      {
        name: "Percutaneous Needle Biopsy",
        codes: [
          ["32400", "Percutaneous needle biopsy of the pleura"],
          ["32408", "Core needle biopsy, lung or mediastinum, percutaneous — already bundles in all imaging guidance used, regardless of how many modalities"],
        ],
      },
      {
        name: "Thoracoscopic (VATS) Biopsy",
        codes: [
          ["32604", "Diagnostic thoracoscopy with biopsy of the pericardial sac"],
          ["32606", "Diagnostic thoracoscopy with biopsy of the mediastinal space"],
          ["32607 / 32608", "Diagnostic biopsy of a lung infiltrate vs. a lung nodule/mass via thoracoscopy, unilateral (each reported no more than once per lung)"],
          ["32609", "Thoracoscopic biopsy of the pleura"],
        ],
      },
    ],
    steps: [
      "Step 1 — What approach was used: open/thoracotomy, percutaneous needle, or thoracoscopic (VATS)? That decides the entire code family.",
      "Step 2 — For percutaneous: was this a core needle biopsy (actual tissue sample) or a fine needle aspiration (cells only)? Those are different code families.",
      "Step 3 — For any wedge-technique sampling: was this purely diagnostic, or does the documentation show attention to margins/complete removal (therapeutic)? Did a more extensive resection follow in the same session at the same site? If so, report only the more extensive procedure.",
      "Step 4 — Check how many times the biopsy code can be reported — most cap at once per lung/lesion, with modifier 59 needed for a genuinely separate additional lesion.",
    ],
    rules: [
      "32408 already bundles in ALL imaging guidance used for that biopsy, no matter how many modalities were involved — imaging guidance codes are never separately added on top of it.",
      "Surgical thoracoscopy always includes diagnostic thoracoscopy — a plain diagnostic thoracoscopy code is never billed alongside a thoracoscopic biopsy at the same session.",
      "A diagnostic wedge resection that leads to a more extensive resection at the same anatomic location during the same operative session is not separately billed — only the most extensive procedure performed is reported.",
    ],
    tips: [
      "\"How many imaging modalities were used\" is a red herring for 32408 — no matter how many, it's still just one code, one guidance bundle.",
      "Watch for \"same lesion\" vs. \"different lesion\" language — that detail decides whether modifier 52 (same lesion, avoid double-counting guidance) or modifier 59 (genuinely separate lesion) applies.",
    ],
  },
  {
    n: 2,
    title: "Thoracotomy — Incision, Exploration & Related Procedures",
    range: "32035–32036, 32100–32225",
    categories: [
      {
        name: "Empyema Drainage",
        codes: [
          ["32035 / 32036", "Thoracostomy for empyema — with rib resection vs. with open flap drainage"],
        ],
      },
      {
        name: "Exploration & Complication Management",
        codes: [
          ["32100", "Thoracotomy with exploration"],
          ["32110", "+ control of traumatic hemorrhage and/or repair of a lung tear"],
          ["32120", "Thoracotomy for postoperative complications"],
          ["32124", "+ open intrapleural pneumonolysis"],
        ],
      },
      {
        name: "Cyst, Bullae & Foreign Body Removal",
        codes: [
          ["32140 / 32141", "Cyst(s) removal vs. resection-plication of bullae — both include any pleural procedure when performed"],
          ["32150 / 32151", "Removal of an intrapleural foreign body/fibrin deposit vs. an intrapulmonary foreign body"],
          ["32160", "+ cardiac massage"],
        ],
      },
      {
        name: "Decortication",
        codes: [
          ["32220 / 32225", "Pulmonary decortication — total vs. partial"],
        ],
      },
      {
        name: "Other",
        codes: [
          ["32200", "Open drainage of a lung abscess or cyst"],
          ["32215", "Pleural scarification for repeat pneumothorax"],
        ],
      },
    ],
    steps: [
      "Step 1 — Confirm the approach is genuinely open/thoracotomy (not percutaneous or thoracoscopic) — that puts you in this family.",
      "Step 2 — Identify the specific surgical goal: exploration, hemorrhage control, decortication, cyst/bullae removal, foreign body removal, or empyema drainage — each maps to one specific code.",
      "Step 3 — Was this thoracotomy specifically for a postoperative complication? There's a dedicated code for that scenario, distinct from a first-time exploration.",
      "Step 4 — Check the exclusion notes for that specific code before adding any other chest procedure code from the same session.",
    ],
    rules: [
      "32035/32036 (empyema thoracostomy) are specifically for empyema — don't confuse these with the earlier \"wound exploration for trauma\" codes, which explicitly exclude a thoracotomy approach.",
      "Decortication, bullae resection-plication, and cyst removal are distinct surgical goals with their own codes — match the exact goal described, even though all are performed through the same general approach.",
    ],
    tips: [
      "These thoracotomy codes are built around the SURGEON'S GOAL (explore, decorticate, remove cyst, control bleeding), not just \"thoracotomy was performed\" — identify the specific goal first.",
    ],
  },
  {
    n: 3,
    title: "Lung Resection — Pneumonectomy, Lobectomy & Segmentectomy",
    range: "32440–32507",
    categories: [
      {
        name: "Pneumonectomy",
        codes: [
          ["32440", "Removal of an entire lung (pneumonectomy)"],
          ["32442", "+ resection of a segment of trachea, followed by broncho-tracheal anastomosis (sleeve pneumonectomy)"],
          ["32445", "Extrapleural pneumonectomy"],
        ],
      },
      {
        name: "Lobectomy / Segmentectomy",
        codes: [
          ["32480", "Removal of a single lobe (lobectomy)"],
          ["32482", "Removal of two lobes (bilobectomy)"],
          ["32484", "Removal of a single segment (segmentectomy)"],
          ["32486", "+ circumferential resection of a bronchus segment, followed by broncho-bronchial anastomosis (sleeve lobectomy)"],
          ["32488", "Removal of all remaining lung after a prior partial removal (completion pneumonectomy)"],
        ],
      },
      {
        name: "Wedge Resection & Add-Ons",
        codes: [
          ["32505 / 32506", "Therapeutic wedge resection, initial / each additional resection, ipsilateral (add-on)"],
          ["32507", "+ diagnostic wedge resection followed by an anatomic lung resection (add-on)"],
          ["32491", "Resection-plication for lung volume reduction (emphysematous lung)"],
          ["32501", "Bronchoplasty performed at the time of a lobectomy/segmentectomy, to preserve remaining lung function (add-on)"],
        ],
      },
      {
        name: "Apical (Pancoast) Tumor Resection",
        codes: [
          ["32503 / 32504", "Resection of an apical lung tumor with chest wall resection — without vs. with chest wall reconstruction"],
        ],
      },
    ],
    steps: [
      "Step 1 — How much lung tissue is being removed: an entire lung, two lobes, one lobe, one segment, or just a wedge/nodule? That decides which resection tier applies.",
      "Step 2 — Is this a sleeve resection (an airway segment removed and reconnected along with the lung tissue)? If so, use the specific sleeve-resection code instead of the standard one.",
      "Step 3 — For a wedge resection: is it the initial wedge, an additional wedge on the same side, or a wedge in a different lobe than a more extensive resection performed the same session? Each scenario has a different code/modifier combination.",
      "Step 4 — Was bronchoplasty performed to preserve the remaining lung's function? If so, add 32501 alongside the resection code — but only when it's genuinely reconstructive, not just closing the resected stump.",
    ],
    rules: [
      "A therapeutic wedge resection performed at the SAME site as a more extensive resection in the same session is not separately billed. A wedge resection in a DIFFERENT lobe than a more extensive resection performed the same session IS separately billed, with modifier 59.",
      "If chest wall tumor resection is performed alongside any lung resection, the chest wall tumor code is reported in addition to the lung resection code — they're not bundled into each other.",
    ],
    tips: [
      "Bigger resection at the same site as a smaller diagnostic sample = report only the bigger one. Bigger resection alongside a separate smaller resection at a different site = both get reported, with modifier 59 on the separate one.",
    ],
  },
  {
    n: 4,
    title: "Pleural Drainage & Catheters",
    range: "32550–32562",
    categories: [
      {
        name: "Catheter Placement (Left in Place)",
        codes: [
          ["32550", "Insertion of an indwelling tunneled pleural catheter with a cuff (long-term drainage)"],
          ["32551", "Tube thoracostomy, connected to a drainage system, open"],
          ["32552", "Removal of an indwelling tunneled pleural catheter with a cuff"],
          ["32556 / 32557", "Percutaneous pleural drainage catheter placement — without vs. with imaging guidance"],
        ],
      },
      {
        name: "Thoracentesis (Aspirated, Nothing Left Behind)",
        codes: [
          ["32554 / 32555", "Needle/catheter aspiration of the pleural space — without vs. with imaging guidance"],
        ],
      },
      {
        name: "Destruction (Instilled Agents)",
        codes: [
          ["32560", "Instillation of an agent for pleurodesis (e.g., talc, for recurrent pneumothorax)"],
          ["32561 / 32562", "Instillation of a fibrinolytic agent for a multiloculated effusion — initial day vs. subsequent day"],
        ],
      },
    ],
    steps: [
      "Step 1 — Is a catheter being LEFT IN PLACE, or is this a one-time needle aspiration with nothing left behind? That's the fork between thoracentesis and catheter placement.",
      "Step 2 — If a catheter is left in place, is it a permanent tunneled catheter with a cuff, or a standard tube thoracostomy? Match the clinical intent (long-term vs. short-term).",
      "Step 3 — Was imaging guidance used? Each family has a distinct with-imaging and without-imaging code — don't add a separate guidance code on top.",
      "Step 4 — If this is about instilling a therapeutic agent, is it pleurodesis or fibrinolysis — and if fibrinolysis, is this the initial day or a subsequent day of the same course?",
    ],
    rules: [
      "None of the thoracentesis/drainage catheter codes (32554–32557) are reported together with the tunneled catheter (32550) or tube thoracostomy (32551) codes on the same side of the chest in the same session.",
      "Fibrinolytic instillation may be repeated daily over several days — the initial-day code is reported once, and the subsequent-day code is reported once for each additional day, never the initial code repeated.",
    ],
    tips: [
      "\"Left in place\" vs. \"aspirated and removed\" is the single biggest fork across this whole category — decide that first.",
    ],
  },
  {
    n: 5,
    title: "Thoracoscopy (VATS) — Diagnostic & Therapeutic",
    range: "32601–32674",
    intro: "Surgical thoracoscopy always includes diagnostic thoracoscopy — a plain diagnostic code is never billed alongside a therapeutic thoracoscopic procedure at the same session.",
    categories: [
      {
        name: "Diagnostic",
        codes: [
          ["32601", "Diagnostic thoracoscopy — lungs, pericardial sac, mediastinal or pleural space, without biopsy"],
        ],
      },
      {
        name: "Therapeutic — Pleural / Pericardial",
        codes: [
          ["32650", "+ pleurodesis"],
          ["32651 / 32652", "+ partial pulmonary decortication vs. total decortication with intrapleural pneumonolysis"],
          ["32653 / 32654", "+ removal of an intrapleural foreign body/fibrin deposit vs. control of traumatic hemorrhage"],
          ["32655 / 32656", "+ resection-plication of bullae vs. parietal pleurectomy"],
          ["32658 / 32659", "+ removal of clot/foreign body from the pericardial sac vs. creation of a pericardial window/partial resection for drainage"],
          ["32661 / 32662", "+ excision of a pericardial cyst/tumor/mass vs. excision of a mediastinal cyst/tumor/mass"],
        ],
      },
      {
        name: "Therapeutic — Lung Resection",
        codes: [
          ["32663", "+ lobectomy (single lobe)"],
          ["32666 / 32667", "+ therapeutic wedge resection, initial unilateral / each additional resection, ipsilateral (add-on)"],
          ["32668", "+ diagnostic wedge resection followed by an anatomic lung resection (add-on)"],
          ["32669", "+ removal of a single lung segment (segmentectomy)"],
          ["32670", "+ removal of two lobes (bilobectomy)"],
          ["32671", "+ removal of a lung (pneumonectomy)"],
          ["32672", "+ resection-plication for lung volume reduction, unilateral"],
        ],
      },
      {
        name: "Other Thoracoscopic Procedures & Add-Ons",
        codes: [
          ["32665", "+ thoracic sympathectomy"],
          ["32660", "+ esophagomyotomy (Heller type)"],
          ["32673", "+ resection of the thymus, unilateral or bilateral"],
          ["32674", "+ mediastinal and regional lymphadenectomy (add-on; reported once, not per lymph node station)"],
        ],
      },
    ],
    steps: [
      "Step 1 — Confirm the approach is thoracoscopic (VATS), not open — that puts you in this family instead of the equivalent open-procedure codes.",
      "Step 2 — Is this purely diagnostic, or is a specific therapeutic goal also being addressed? Diagnostic thoracoscopy is bundled into any therapeutic code, never billed alongside it.",
      "Step 3 — Match the specific therapeutic goal to its dedicated thoracoscopic code, the same way you would for the equivalent open procedure.",
      "Step 4 — Was a lymphadenectomy also performed? If so, add 32674 as its own add-on code, regardless of how many individual lymph node stations were sampled.",
    ],
    rules: [
      "The therapeutic thoracoscopic codes largely mirror their open (thoracotomy) counterparts — pleurodesis, decortication, foreign body removal, bullae resection, lobectomy, and wedge resection all have thoracoscopic equivalents, so the decision logic is nearly identical, just scoped by approach first.",
      "Thoracoscopic wedge resection follows the same diagnostic-vs-therapeutic and same-session escalation logic as the open wedge resection codes.",
    ],
    tips: [
      "Think of this whole category as \"the open-procedure decision tree, just with a scope\" — if you know the open code logic, finding the VATS-specific counterpart is mostly a matching exercise.",
    ],
  },
  {
    n: 6,
    title: "Lung Transplantation",
    range: "32850–32856",
    intro: "Lung transplantation involves three genuinely separate components of physician work, each with its own code — often billed by different physicians on the same case.",
    categories: [
      {
        name: "Donor & Backbench Work",
        codes: [
          ["32850", "Donor pneumonectomy(s) (including cold preservation), from a cadaver donor"],
          ["32855 / 32856", "Backbench standard preparation of the donor lung allograft — unilateral vs. bilateral"],
        ],
      },
      {
        name: "Recipient Transplant",
        codes: [
          ["32851 / 32852", "Single lung transplant — without vs. with cardiopulmonary bypass"],
          ["32853 / 32854", "Double lung transplant (bilateral sequential or en bloc) — without vs. with cardiopulmonary bypass"],
        ],
      },
    ],
    steps: [
      "Step 1 — Which of the three components is being billed: donor pneumonectomy, backbench preparation, or the recipient transplant itself?",
      "Step 2 — For backbench preparation: was one lung prepared, or both? That's a direct fork between two distinct codes.",
      "Step 3 — For the recipient transplant: single lung or double lung, and was cardiopulmonary bypass used? Those two questions narrow it to one of four codes.",
      "Step 4 — Was any additional repair/resection performed specifically on the donor lung, beyond standard preparation? If so, code that separately using the regular lung procedure codes.",
    ],
    rules: [
      "Any repair or resection work performed specifically on the donor lung itself, separate from standard preparation, is reported using the regular lung repair/resection codes — not folded into the transplant codes.",
    ],
    tips: [
      "Three components, three physicians, three codes — don't assume one code covers \"the whole transplant\"; identify exactly which piece of the work is being billed.",
    ],
  },
  {
    n: 7,
    title: "Repair, Collapse Therapy, Ablation & Unlisted Procedures",
    range: "32800–32820, 32900–32960, 32994–32999",
    categories: [
      {
        name: "Repair",
        codes: [
          ["32800", "Repair of a lung hernia through the chest wall"],
          ["32810", "Closure of the chest wall following open flap drainage for empyema (Clagett type)"],
          ["32815", "Open closure of a major bronchial fistula"],
          ["32820", "Major reconstruction of the chest wall (posttraumatic)"],
        ],
      },
      {
        name: "Surgical Collapse Therapy (Thoracoplasty)",
        codes: [
          ["32900", "Resection of ribs, extrapleural, all stages"],
          ["32905 / 32906", "Thoracoplasty (Schede type or extrapleural), all stages — without vs. with closure of a bronchopleural fistula"],
          ["32940", "Extraperiosteal pneumonolysis, including filling/packing procedures"],
          ["32960", "Therapeutic pneumothorax, intrapleural injection of air"],
        ],
      },
      {
        name: "Lavage & Ablation",
        codes: [
          ["32997", "Total lung lavage, unilateral (billed per side)"],
          ["32998 / 32994", "Percutaneous tumor ablation of lung/pleura/chest wall, unilateral — radiofrequency vs. cryoablation (already includes imaging guidance)"],
        ],
      },
      {
        name: "Other",
        codes: [
          ["32999", "Unlisted procedure, lungs and pleura"],
        ],
      },
    ],
    steps: [
      "Step 1 — Is this a repair procedure, a collapse-therapy procedure, an ablation, or does nothing else in this section fit (unlisted)?",
      "Step 2 — For repair, match the exact structure and clinical scenario (hernia, empyema closure, bronchial fistula, traumatic reconstruction) to its specific code.",
      "Step 3 — For ablation: radiofrequency or cryoablation? And is it unilateral or bilateral (requiring modifier 50)?",
      "Step 4 — If nothing else fits, the unlisted procedure code for lungs and pleura is the fallback.",
    ],
    rules: [
      "Total lung lavage is billed per side (unilateral) — for a bilateral procedure, report the code twice or per payer convention, not as one combined code.",
      "Percutaneous tumor ablation already includes imaging guidance when performed — that's never separately reported on top.",
    ],
    tips: [
      "Whenever \"including imaging guidance when performed\" appears in a code's own descriptor, that's your signal to stop looking for a separate guidance code.",
    ],
  },
];

const mainStyle = { maxWidth: "1120px", margin: "0 auto", padding: "36px 24px 64px", minHeight: "100vh", background: "#fdfaf5", color: "#241f17", fontFamily: "Arial, sans-serif" };
const heroStyle = { background: "linear-gradient(135deg, #1f2937, #0f766e)", color: "white", padding: "48px 44px", borderRadius: "18px", marginBottom: "26px", boxShadow: "0 12px 28px rgba(15,23,42,0.2)" };
const kickerStyle = { margin: "0 0 10px", color: "#99f6e4", fontWeight: 800, letterSpacing: "0.08em" };
const navStyle = { display: "flex", flexWrap: "wrap" as const, gap: "10px", marginBottom: "26px" };
const navLinkStyle = { textDecoration: "none", color: "#0f766e", background: "#ffffff", border: "1px solid #d7e2df", borderRadius: "999px", padding: "10px 15px", fontWeight: 700, fontSize: "14px" };
const pagerStyle = { display: "flex", flexWrap: "wrap" as const, gap: "10px", marginBottom: "26px" };
const pagerLinkStyle = { textDecoration: "none", color: "#0f766e", background: "#fff7e8", border: "1px solid #efd39b", borderRadius: "999px", padding: "8px 16px", fontWeight: 700, fontSize: "14px" };
const pagerActiveStyle = { ...pagerLinkStyle, background: "#0f766e", color: "#fff", border: "1px solid #0f766e" };
const introStyle = { background: "#fff7e8", border: "1px solid #efd39b", borderLeft: "7px solid #b7791f", borderRadius: "12px", padding: "22px 24px", marginBottom: "30px", lineHeight: 1.7 };
const sectionStyle = { background: "#ffffff", border: "1px solid #e5e1d6", borderRadius: "14px", padding: "26px 28px", marginBottom: "22px", boxShadow: "0 5px 16px rgba(15,23,42,0.06)" };
const sectionHeaderStyle = { display: "flex", alignItems: "center", gap: "14px", marginBottom: "8px", flexWrap: "wrap" as const };
const sectionNumberStyle = { background: "#0f766e", color: "#fff", width: "36px", height: "36px", minWidth: "36px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: "15px" };
const sectionTitleStyle = { margin: 0, fontSize: "21px", color: "#111827" };
const rangeChipStyle = { background: "#f0fdfa", border: "1px solid #99f6e4", color: "#0f766e", borderRadius: "999px", padding: "4px 12px", fontWeight: 800, fontSize: "12px", fontFamily: "Consolas, monospace" };
const pStyle = { lineHeight: 1.75, margin: "0 0 10px" };
const categoryTitleStyle = { margin: "18px 0 8px", fontSize: "16px", color: "#0f766e", fontWeight: 800 };
const codeListStyle = { listStyle: "none", padding: 0, margin: "0 0 4px", display: "grid", gap: "7px" };
const codeItemStyle = { display: "flex", gap: "12px", alignItems: "baseline", background: "#f9faf9", border: "1px solid #ece7db", borderRadius: "8px", padding: "8px 13px" };
const codeChipStyle = { fontWeight: 800, color: "#0f766e", minWidth: "120px", fontFamily: "Consolas, monospace", fontSize: "13.5px" };
const stepsBoxStyle = { background: "#eff6ff", border: "1px solid #bfdbfe", borderLeft: "5px solid #2563eb", borderRadius: "10px", padding: "16px 18px", margin: "18px 0 0", lineHeight: 1.7 };
const stepsTitleStyle = { margin: "0 0 8px", color: "#1e40af", fontWeight: 800, fontSize: "14px", letterSpacing: "0.03em" };
const rulesBoxStyle = { background: "#fef2f2", border: "1px solid #fecaca", borderLeft: "5px solid #dc2626", borderRadius: "10px", padding: "16px 18px", margin: "14px 0 0", lineHeight: 1.7 };
const rulesTitleStyle = { margin: "0 0 8px", color: "#991b1b", fontWeight: 800, fontSize: "14px", letterSpacing: "0.03em" };
const tipsBoxStyle = { background: "#f0fdf4", border: "1px solid #bbf7d0", borderLeft: "5px solid #16a34a", borderRadius: "10px", padding: "16px 18px", margin: "14px 0 0", lineHeight: 1.7 };
const tipsTitleStyle = { margin: "0 0 8px", color: "#166534", fontWeight: 800, fontSize: "14px", letterSpacing: "0.03em" };
const backLinkStyle = { textDecoration: "none", color: "#0f766e", fontWeight: 700 };

export default function SurgeryThirtyThousandGuidelinesReviewerPart2Page() {
  return (
    <main style={mainStyle}>
      <header style={heroStyle}>
        <p style={kickerStyle}>30,000 SERIES · RESPIRATORY SYSTEM</p>
        <h1 style={{ margin: 0, fontSize: "clamp(30px, 6vw, 52px)" }}>CPT Surgery Guidelines Reviewer</h1>
        <p style={{ margin: "12px 0 0", fontSize: "19px", lineHeight: 1.5 }}>Part 2 — Lungs and Pleura (32035–32999)</p>
      </header>

      <div style={pagerStyle}>
        <Link href="/cpt/surgery/30000-series-guidelines-reviewer" style={pagerLinkStyle}>← Part 1 (30000–31899)</Link>
        <span style={pagerActiveStyle}>Part 2 (32035–32999)</span>
      </div>

      <nav aria-label="30,000 series navigation" style={navStyle}>
        <Link href="/cpt/surgery/30,000" style={navLinkStyle}>30,000 Series home</Link>
        <Link href="/cpt/surgery/30000-series-beginner-guide" style={navLinkStyle}>Beginner Scenarios</Link>
        <Link href="/cpt/surgery" style={navLinkStyle}>Surgery home</Link>
        <Link href="/cpt" style={navLinkStyle}>CPT home</Link>
      </nav>

      <section style={introStyle}>
        <strong>How to use this reviewer:</strong> same format as Part 1 — code ranges grouped by category, a step-by-step &quot;how to code this&quot; walkthrough, key coding rules, and memory tips, for each of the 7 topics covering Lungs &amp; Pleura. This completes the 30,000 series (Respiratory System) reviewer.
      </section>

      {subsections.map((sub) => (
        <section key={sub.n} style={sectionStyle}>
          <div style={sectionHeaderStyle}>
            <span style={sectionNumberStyle}>{sub.n}</span>
            <h2 style={sectionTitleStyle}>{sub.title}</h2>
            <span style={rangeChipStyle}>{sub.range}</span>
          </div>
          {sub.intro && <p style={pStyle}>{sub.intro}</p>}

          {sub.categories.map((cat) => (
            <div key={cat.name}>
              <h3 style={categoryTitleStyle}>{cat.name}</h3>
              <ul style={codeListStyle}>
                {cat.codes.map(([code, desc]) => (
                  <li key={code} style={codeItemStyle}>
                    <code style={codeChipStyle}>{code}</code>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div style={stepsBoxStyle}>
            <p style={stepsTitleStyle}>🪜 STEP BY STEP — HOW TO CODE THIS</p>
            <ol style={{ margin: 0, paddingLeft: "20px", display: "grid", gap: "8px" }}>
              {sub.steps.map((step) => <li key={step}>{step}</li>)}
            </ol>
          </div>

          <div style={rulesBoxStyle}>
            <p style={rulesTitleStyle}>🟥 KEY CODING RULES</p>
            <ul style={{ margin: 0, paddingLeft: "20px", display: "grid", gap: "8px" }}>
              {sub.rules.map((rule) => <li key={rule}>{rule}</li>)}
            </ul>
          </div>

          <div style={tipsBoxStyle}>
            <p style={tipsTitleStyle}>🧠 CODING TIPS</p>
            <ul style={{ margin: 0, paddingLeft: "20px", display: "grid", gap: "8px" }}>
              {sub.tips.map((tip) => <li key={tip}>{tip}</li>)}
            </ul>
          </div>
        </section>
      ))}

      <div style={{ marginTop: "30px", display: "flex", flexWrap: "wrap" as const, gap: "16px" }}>
        <Link href="/cpt/surgery/30000-series-guidelines-reviewer" style={backLinkStyle}>← Back to Part 1</Link>
        <Link href="/cpt/surgery/30,000" style={backLinkStyle}>← Back to 30,000 Series</Link>
      </div>
    </main>
  );
}
