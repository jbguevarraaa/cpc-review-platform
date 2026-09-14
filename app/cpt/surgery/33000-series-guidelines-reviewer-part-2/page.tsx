import Link from "next/link";

type CodeEntry = [string, string];
type Category = { name: string; codes: CodeEntry[] };
type Subsection = {
  n: number;
  title: string;
  range: string;
  intro?: string[];
  categories: Category[];
  rules: string[];
  tips: string[];
};

const subsections: Subsection[] = [
  {
    n: 1,
    title: "Central Venous Access Devices",
    range: "36555–36598",
    intro: [
      "Peripherally inserted central catheters (PICCs) can be placed or replaced with or without imaging guidance. Without imaging guidance, use 36568/36569 (insertion). With imaging guidance (ultrasound and/or fluoroscopy), the bundled codes 36572, 36573, and 36584 already include all imaging, image documentation, the associated radiological supervision and interpretation, venography through the same puncture, and confirming the catheter tip's final central position.",
      "Because tip-position confirmation is already bundled into the imaging-guided codes, a chest X-ray (71045–71048) is not separately billable on the same day to confirm final position, and neither is 76937 (ultrasound vascular-access guidance) or 77001 (fluoroscopy for central access) alongside 36568, 36569, 36572, 36573, or 36584. If tip confirmation wasn't actually performed as part of an imaging-guided placement, append modifier 52.",
      "A 'midline' catheter terminates in the peripheral venous system, not centrally — it is never a central venous access device and is never coded as a PICC. Use 36400, 36406, or 36410 instead. Similarly, a PICC placed using magnetic guidance (or any guidance method that isn't imaging-based) is coded as 36568/36569, not the imaging-guidance codes.",
    ],
    categories: [
      {
        name: "Insertion",
        codes: [
          ["36555 / 36556", "Non-tunneled centrally inserted catheter — younger than 5 vs. 5 or older"],
          ["36557 / 36558", "Tunneled centrally inserted catheter, no port or pump — younger than 5 vs. 5 or older"],
          ["36560 / 36561", "Tunneled centrally inserted device, with a subcutaneous port — younger than 5 vs. 5 or older"],
          ["36563", "Tunneled centrally inserted device, with a subcutaneous pump"],
          ["36565 / 36566", "Tunneled device requiring 2 catheters via 2 separate access sites (e.g., Tesio type) — without vs. with subcutaneous port(s)"],
          ["36568 / 36569", "PICC, no port/pump, without imaging guidance — younger than 5 vs. 5 or older"],
          ["36572 / 36573", "PICC, no port/pump, with bundled imaging guidance — younger than 5 vs. 5 or older"],
          ["36570 / 36571", "PICC with a subcutaneous port — younger than 5 vs. 5 or older"],
        ],
      },
      {
        name: "Repair",
        codes: [
          ["36575", "Repair of the catheter only (no port/pump), central or peripheral insertion site"],
          ["36576", "Repair of the device with a port or pump, central or peripheral insertion site"],
        ],
      },
      {
        name: "Partial Replacement (Catheter Only — Device Stays)",
        codes: [
          ["36578", "Replace catheter only, device has a port or pump, central or peripheral insertion site"],
        ],
      },
      {
        name: "Complete Replacement (Same Venous Access Site)",
        codes: [
          ["36580", "Non-tunneled central catheter, no port/pump"],
          ["36581", "Tunneled central catheter, no port/pump"],
          ["36582", "Tunneled central device with a port"],
          ["36583", "Tunneled central device with a pump"],
          ["36584", "PICC, no port/pump, with bundled imaging guidance"],
          ["36585", "PICC with a port"],
        ],
      },
      {
        name: "Removal",
        codes: [
          ["36589", "Tunneled catheter, no port or pump"],
          ["36590", "Tunneled device with a port or pump, central or peripheral insertion"],
        ],
      },
      {
        name: "Other Central Venous Access Services",
        codes: [
          ["36591", "Blood specimen collection from a completely implantable venous access device"],
          ["36592", "Blood specimen collection using an established central or peripheral venous catheter, not otherwise specified"],
          ["36593", "Declotting an implanted vascular access device/catheter with a thrombolytic agent"],
          ["36595", "Mechanical removal of pericatheter obstructive material (e.g., fibrin sheath), via a separate venous access"],
          ["36596", "Mechanical removal of intraluminal (intracatheter) obstructive material, through the device lumen"],
          ["36597", "Repositioning a previously placed central venous catheter under fluoroscopic guidance"],
          ["36598", "Contrast injection(s) to radiologically evaluate an existing central venous access device, including fluoroscopy, image documentation, and report"],
        ],
      },
    ],
    rules: [
      "36591 and 36592 (blood draws from an existing device) are not reported together with any other service except an actual lab test — they're standalone specimen-collection codes.",
      "36595 and 36596 are mutually exclusive with each other and with 36593 — pick mechanical removal via a separate access (36595), mechanical removal through the existing lumen (36596), or thrombolytic declotting (36593), not more than one for the same event.",
      "36598 (contrast injection to evaluate an existing device) is not reported together with fluoroscopy code 76000, or with the obstructive-material removal codes 36595/36596.",
      "There is no 'without imaging guidance' version of complete PICC replacement — 36584 (with bundled imaging) is the only complete-replacement PICC code; a complete PICC replacement performed without any imaging guidance falls to the unlisted code 37799.",
    ],
    tips: [
      "Work it in three questions: (1) central or peripheral (PICC)? (2) tunneled or non-tunneled? (3) plain catheter, port, or pump? Age under/over 5 only changes the code for standard central lines and standard PICCs — the Tesio-type and imaging-bundled PICC codes don't split by age at all.",
      "'Partial' replacement always means catheter-only, device stays — that's always 36578, no matter whether it's a port or a pump. 'Complete' replacement swaps the whole system through the same access site and the code depends on device type (36580–36585).",
    ],
  },
  {
    n: 2,
    title: "Arterial Puncture & Catheterization",
    range: "36600–36680",
    categories: [
      {
        name: "Procedures",
        codes: [
          ["36600", "Arterial puncture, withdrawal of blood for diagnosis"],
          ["36620 / 36625", "Arterial catheterization/cannulation for sampling, monitoring, or transfusion (separate procedure) — percutaneous vs. cutdown"],
          ["36640", "Arterial catheterization for prolonged infusion therapy (e.g., chemotherapy), cutdown"],
          ["36660", "Umbilical artery catheterization, newborn, for diagnosis or therapy"],
          ["36680", "Placement of a needle for intraosseous infusion"],
        ],
      },
    ],
    rules: [
      "Modifier 63 (procedures on infants under 4kg) is not reported with 36660 — that code already accounts for the newborn population it's written for.",
    ],
    tips: ["Percutaneous vs. cutdown is the main fork for 36620/36625 — same clinical purpose (sampling/monitoring/transfusion), different approach."],
  },
  {
    n: 3,
    title: "Hemodialysis Access & AV Fistula (Open Procedures)",
    range: "36800–36861",
    categories: [
      {
        name: "Cannula Insertion",
        codes: [
          ["36800", "Insertion of a cannula for hemodialysis, other purpose (separate procedure), vein to vein"],
          ["36810 / 36815", "External arteriovenous cannula (Scribner type) — insertion vs. revision/closure"],
        ],
      },
      {
        name: "Open Arteriovenous Anastomosis (Direct Fistula)",
        codes: [
          ["36818", "By upper-arm cephalic vein transposition"],
          ["36819", "By upper-arm basilic vein transposition"],
          ["36820", "By forearm vein transposition"],
          ["36821", "Direct, any site (e.g., Cimino type) (separate procedure)"],
        ],
      },
      {
        name: "Arteriovenous Graft (Non-Direct Fistula)",
        codes: [
          ["36825", "Autogenous graft"],
          ["36830", "Nonautogenous graft (e.g., biological collagen, thermoplastic graft)"],
        ],
      },
      {
        name: "Thrombectomy & Revision (Open)",
        codes: [
          ["36831", "Open thrombectomy of an AV fistula, without revision, autogenous or nonautogenous dialysis graft (separate procedure)"],
          ["36832 / 36833", "Open revision of an AV fistula — without thrombectomy vs. with thrombectomy, autogenous or nonautogenous dialysis graft"],
        ],
      },
      {
        name: "Percutaneous AV Fistula Creation (Upper Extremity)",
        codes: [
          ["36836", "Single access of both the peripheral artery and vein, including fistula maturation procedures when performed, plus all vascular access and imaging"],
          ["36837", "Separate access sites for the artery and vein, same bundled scope as 36836"],
        ],
      },
      {
        name: "Other",
        codes: [
          ["36823", "Insertion of arterial and venous cannula(s) for isolated extracorporeal circulation with regional chemotherapy perfusion to an extremity, with or without hyperthermia, including removal and repair of the arteriotomy/venotomy sites"],
          ["36835", "Insertion of a Thomas shunt (separate procedure)"],
          ["36838", "Distal revascularization and interval ligation (DRIL), upper-extremity hemodialysis access, for steal syndrome"],
          ["36860 / 36861", "External cannula declotting (separate procedure) — without vs. with a balloon catheter"],
        ],
      },
    ],
    rules: [
      "36818, 36819, 36820, and 36821 (the open direct AV anastomosis variants) are mutually exclusive on a unilateral procedure — only report one. For a bilateral procedure performed in the same session, use modifier 50 or 59 as appropriate rather than reporting two different variant codes.",
      "36823 already bundles chemotherapy perfusion supported by a membrane oxygenator/perfusion pump — the general chemotherapy administration codes (96409–96425) are not separately reported with it.",
      "36836 and 36837 already bundle all vascular access, angiography, imaging guidance, and any fistula-maturation technique (like balloon angioplasty or coil embolization) performed at the same session — a long list of catheterization, imaging, and angioplasty/stent codes are excluded from being reported alongside them.",
      "32832/36833 (open AV fistula revision) is not reported together with the percutaneous dialysis-circuit codes 36901–36906 for the same revision — pick the open or the percutaneous approach, not both.",
    ],
    tips: [
      "Direct connection of artery to vein = an anastomosis code (36818–36821), picked by which vein is transposed. A graft material bridging artery and vein = 36825 (the patient's own vein) or 36830 (synthetic/biological material) instead.",
      "36836 vs. 36837 comes down to one question: did the physician access the artery and vein through one skin puncture, or two separate ones?",
    ],
  },
  {
    n: 4,
    title: "Dialysis Circuit (Percutaneous Interventions)",
    range: "36901–36909",
    intro: [
      "The dialysis circuit is the full arteriovenous pathway used for repeated hemodialysis access, running from the arterial anastomosis to the right atrium — built either as a fistula (AVF, a direct artery-to-vein connection) or a graft (AVG, a prosthetic conduit). It's divided into two segments: the peripheral dialysis segment (from the arterial anastomosis out through the axillary/cephalic vein in the arm, or the common femoral vein in the leg) and the central dialysis segment (everything further in — subclavian/innominate veins through the SVC in the arm, or iliac veins through the IVC in the leg).",
      "This whole family is built as two parallel 3-step ladders, and only one code from either ladder is reported per session, because each step already includes everything below it: the non-thrombus ladder is diagnostic angiography (36901) → + peripheral angioplasty (36902) → + peripheral stent (36903); the thrombus ladder is mechanical thrombectomy/thrombolysis (36904) → + peripheral angioplasty (36905) → + peripheral stent (36906). Each level bundles all the catheter placements, fluoroscopic guidance, roadmapping, and radiological supervision/interpretation needed to perform it, and is reported only once per session regardless of how many lesions were treated within that segment.",
      "36907 (central-segment angioplasty) and 36908 (central-segment stent) are add-on codes layered on top of whichever base ladder code applies — each reported once per session no matter how many central lesions or stents were involved, and 36908 already includes what 36907 covers, so the two are never reported together. 36909 is a separate add-on for permanent embolization or occlusion of the main circuit or an accessory vein, also capped at once per session.",
    ],
    categories: [
      {
        name: "Diagnostic / Angioplasty / Stent Ladder",
        codes: [
          ["36901", "Diagnostic angiography of the entire dialysis circuit, including all direct punctures, catheter placements, and imaging from the arterial anastomosis through the venous outflow to the vena cava"],
          ["36902", "36901, plus transluminal balloon angioplasty in the peripheral dialysis segment"],
          ["36903", "36902, plus transcatheter stent placement in the peripheral dialysis segment"],
        ],
      },
      {
        name: "Thrombectomy / Angioplasty / Stent Ladder",
        codes: [
          ["36904", "Percutaneous mechanical thrombectomy and/or thrombolytic infusion, treating thrombus in both the peripheral and central segments, including diagnostic angiography"],
          ["36905", "36904, plus transluminal balloon angioplasty in the peripheral dialysis segment"],
          ["36906", "36905, plus transcatheter stent placement in the peripheral dialysis segment"],
        ],
      },
      {
        name: "Central Segment & Embolization Add-Ons",
        codes: [
          ["36907", "+ transluminal balloon angioplasty, central dialysis segment (add-on, once per session)"],
          ["36908", "+ transcatheter stent placement, central dialysis segment (add-on, once per session, includes 36907's scope)"],
          ["36909", "+ permanent embolization/occlusion of the main circuit or accessory veins (add-on, once per session)"],
        ],
      },
    ],
    rules: [
      "Report only one code from 36901–36906 per session — never two levels of the same ladder, and never one from each ladder.",
      "Removing an arterial plug during a thrombectomy is part of the thrombectomy service itself — it is never separately coded as an angioplasty (36905), even if a balloon catheter is used to dislodge it.",
      "Ultrasound guidance for the initial dialysis-circuit puncture (76937) is not typically needed or bundled, but can be separately reported — with full documentation — for cases like a new/immature or failing fistula that genuinely requires it to puncture safely.",
      "When open dialysis-access creation, revision, or thrombectomy (36818–36833) is performed, completion angiography and peripheral-segment angioplasty/stenting are already bundled into that open procedure — but central-segment work (36907/36908) can still be reported separately.",
    ],
    tips: [
      "Ask 'did I find thrombus?' first — that alone tells you which ladder (901–903 or 904–906) you're on. Then ask how far you went (diagnostic only, + angioplasty, or + stent) to land on the exact code.",
      "36907/36908/36909 are the only three things that can ever stack on top of the base ladder code — everything else is already included.",
    ],
  },
  {
    n: 5,
    title: "Portal Decompression Procedures",
    range: "37140–37183",
    categories: [
      {
        name: "Open Shunts",
        codes: [
          ["37140", "Open portocaval venous anastomosis"],
          ["37145", "Open renoportal venous anastomosis"],
          ["37160", "Open caval-mesenteric venous anastomosis"],
          ["37180 / 37181", "Open splenorenal venous anastomosis — proximal vs. distal (selective decompression of esophagogastric varices, any technique)"],
        ],
      },
      {
        name: "Transvenous Intrahepatic Portosystemic Shunt (TIPS)",
        codes: [
          ["37182", "Placement of TIPS — includes venous access, hepatic and portal vein catheterization, portography with hemodynamic evaluation, tract formation/dilation, stent placement, and all associated imaging"],
          ["37183", "Revision of an existing TIPS — same bundled scope as 37182, for a revision"],
        ],
      },
    ],
    rules: [
      "37182 and 37183 already include the full portography and hemodynamic workup — the older transhepatic portography supervision-and-interpretation codes (75885, 75887) are not separately reported alongside either one.",
    ],
    tips: ["Open procedure → pick the specific vessel pairing (portocaval, renoportal, caval-mesenteric, or splenorenal). Percutaneous → it's TIPS: 37182 for a new placement, 37183 for revising one already in place."],
  },
  {
    n: 6,
    title: "Transcatheter Procedures — Mechanical Thrombectomy & Thrombolytic Infusion",
    range: "37184–37214 (concept coverage — code text cuts off after 37187)",
    intro: [
      "Catheter placement, diagnostic studies, and other percutaneous interventions (like angioplasty or stenting) performed in the same session are separately reportable in addition to these thrombectomy/thrombolysis codes. Fluoroscopic guidance is already bundled into 37184–37188. An intraprocedural thrombolytic drug injection is bundled into the mechanical thrombectomy codes, but a continuous thrombolytic infusion carried on before or after the thrombectomy session is not bundled and is separately reportable (37211–37214). Coronary mechanical thrombectomy uses a different code entirely (92973), and intracranial arterial mechanical thrombectomy uses 61645 — neither routes through this family.",
      "'Primary' arterial mechanical thrombectomy (37184/37185) applies when thrombus was already diagnosed beforehand and the thrombectomy itself was the planned procedure — reported per vascular family, with 37184 for the first vessel treated and add-on 37185 for each additional vessel in that same family. A second, separate vascular family treated through a separate access site gets its own 37184 with modifier 59. 'Secondary' thrombectomy (37186) instead applies when only a short segment of thrombus/embolus is retrieved incidentally during another percutaneous intervention (like an angioplasty) — 37184/37185 and 37186 are never reported together.",
      "Venous mechanical thrombectomy uses 37187 for the initial application (modifier 50 for bilateral through separate access sites) and 37188 for a repeat treatment on a later day during an ongoing course of thrombolytic therapy.",
      "For thrombolytic drip infusion (as opposed to mechanical thrombectomy), the day of treatment determines the code: the initial day uses 37211 or 37212, continued treatment on a day that is neither the first nor the last uses 37213, and the final day uses 37214. If the entire course starts and finishes on the same day, only 37211 or 37212 is reported — not a combination.",
    ],
    categories: [
      {
        name: "Arterial Mechanical Thrombectomy",
        codes: [
          ["37184", "Primary percutaneous mechanical thrombectomy, noncoronary/non-intracranial artery or arterial bypass graft — initial vessel"],
          ["37185", "Same, second and all subsequent vessels within the same vascular family (add-on)"],
          ["37186", "Secondary mechanical thrombectomy, performed in conjunction with another percutaneous intervention (add-on)"],
        ],
      },
      {
        name: "Venous Mechanical Thrombectomy",
        codes: [
          ["37187", "Percutaneous mechanical thrombectomy of vein(s), including intraprocedural thrombolytic injection(s) and fluoroscopic guidance"],
          ["37188", "Repeat venous mechanical thrombectomy on a subsequent day of an ongoing thrombolytic course"],
        ],
      },
    ],
    rules: [
      "Do not report 37184/37185 for retrieving only a short thrombus/embolus segment found incidentally during another intervention — that scenario is 37186 instead.",
      "37186 is never reported together with 37184/37185 in the same session.",
      "For thrombolytic infusion (37211–37214), only one code is used per calendar day of treatment, chosen by whether it's the first day, a middle day, or the final day of the course.",
    ],
    tips: [
      "Ask: was thrombus already known and the thrombectomy planned in advance (primary, 37184/37185), or was it an incidental finding during a different procedure (secondary, 37186)?",
      "For thrombolytic infusion, think of it as a day counter: Day 1 → 37211/37212. Middle days → 37213. Last day → 37214.",
    ],
  },
];

const mainStyle = { maxWidth: "1160px", margin: "0 auto", padding: "36px 24px 64px", minHeight: "100vh", background: "#fdf6f6", color: "#291a1a", fontFamily: "Arial, sans-serif" };
const heroStyle = { background: "linear-gradient(135deg, #450a0a, #b91c1c)", color: "white", padding: "48px 44px", borderRadius: "18px", marginBottom: "26px", boxShadow: "0 12px 28px rgba(69,10,10,0.22)" };
const kickerStyle = { margin: "0 0 10px", color: "#fecaca", fontWeight: 800, letterSpacing: "0.08em" };
const navStyle = { display: "flex", flexWrap: "wrap" as const, gap: "10px", marginBottom: "26px" };
const navLinkStyle = { textDecoration: "none", color: "#b91c1c", background: "#ffffff", border: "1px solid #f0d7d7", borderRadius: "999px", padding: "10px 15px", fontWeight: 700, fontSize: "14px" };
const pagerStyle = { display: "flex", flexWrap: "wrap" as const, gap: "10px", marginBottom: "26px" };
const pagerLinkStyle = { textDecoration: "none", color: "#b91c1c", background: "#fff1f0", border: "1px solid #fecaca", borderRadius: "999px", padding: "8px 16px", fontWeight: 700, fontSize: "14px" };
const pagerActiveStyle = { ...pagerLinkStyle, background: "#b91c1c", color: "#fff", border: "1px solid #b91c1c" };
const introBoxStyle = { background: "#fff1f0", border: "1px solid #fecaca", borderLeft: "7px solid #b91c1c", borderRadius: "12px", padding: "22px 24px", marginBottom: "30px", lineHeight: 1.7 };
const sectionStyle = { background: "#ffffff", border: "1px solid #f0e2e2", borderRadius: "14px", padding: "26px 28px", marginBottom: "22px", boxShadow: "0 5px 16px rgba(69,10,10,0.06)" };
const sectionHeaderStyle = { display: "flex", alignItems: "center", gap: "14px", marginBottom: "10px", flexWrap: "wrap" as const };
const sectionNumberStyle = { background: "#b91c1c", color: "#fff", width: "36px", height: "36px", minWidth: "36px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: "15px" };
const sectionTitleStyle = { margin: 0, fontSize: "22px", color: "#111827" };
const rangeChipStyle = { background: "#fff1f0", border: "1px solid #fecaca", color: "#b91c1c", borderRadius: "999px", padding: "4px 12px", fontWeight: 800, fontSize: "13px", fontFamily: "Consolas, monospace" };
const pStyle = { lineHeight: 1.75, margin: "0 0 10px" };
const categoryTitleStyle = { margin: "18px 0 8px", fontSize: "16px", color: "#b91c1c", fontWeight: 800 };
const codeListStyle = { listStyle: "none", padding: 0, margin: "0 0 4px", display: "grid", gap: "7px" };
const codeItemStyle = { display: "flex", gap: "12px", alignItems: "baseline", background: "#fdf8f8", border: "1px solid #f0e2e2", borderRadius: "8px", padding: "8px 13px" };
const codeChipStyle = { fontWeight: 800, color: "#b91c1c", minWidth: "110px", fontFamily: "Consolas, monospace", fontSize: "13.5px" };
const rulesBoxStyle = { background: "#fef2f2", border: "1px solid #fecaca", borderLeft: "5px solid #dc2626", borderRadius: "10px", padding: "16px 18px", margin: "18px 0 0", lineHeight: 1.7 };
const rulesTitleStyle = { margin: "0 0 8px", color: "#991b1b", fontWeight: 800, fontSize: "14px", letterSpacing: "0.03em" };
const tipsBoxStyle = { background: "#f0fdf4", border: "1px solid #bbf7d0", borderLeft: "5px solid #16a34a", borderRadius: "10px", padding: "16px 18px", margin: "14px 0 0", lineHeight: 1.7 };
const tipsTitleStyle = { margin: "0 0 8px", color: "#166534", fontWeight: 800, fontSize: "14px", letterSpacing: "0.03em" };
const backLinkStyle = { textDecoration: "none", color: "#b91c1c", fontWeight: 700 };

export default function SurgeryCardiovascularGuidelinesReviewerPart2Page() {
  return (
    <main style={mainStyle}>
      <header style={heroStyle}>
        <p style={kickerStyle}>33,000 SERIES · CARDIOVASCULAR SYSTEM</p>
        <h1 style={{ margin: 0, fontSize: "clamp(28px, 5.5vw, 48px)" }}>CPT Surgery Guidelines Reviewer</h1>
        <p style={{ margin: "12px 0 0", fontSize: "19px", lineHeight: 1.5 }}>Part 2 — Venous Access, Arterial Access, Dialysis Circuit, Portal Decompression &amp; Thrombectomy (36555–37214)</p>
      </header>

      <div style={pagerStyle}>
        <Link href="/cpt/surgery/33000-series-guidelines-reviewer" style={pagerLinkStyle}>← Part 1 (33016–33269)</Link>
        <span style={pagerActiveStyle}>Part 2 (36555–37214)</span>
      </div>

      <nav aria-label="Cardiovascular series navigation" style={navStyle}>
        <Link href="/cpt/surgery/33,000" style={navLinkStyle}>Cardiovascular System home</Link>
        <Link href="/cpt/surgery" style={navLinkStyle}>Surgery home</Link>
        <Link href="/cpt" style={navLinkStyle}>CPT home</Link>
      </nav>

      <section style={introBoxStyle}>
        <strong>Two gaps to know about:</strong> this material jumps straight from where Part 1 stopped (33265) to Central Venous Access (36555) — codes 33266 through 36554 (heart valves, coronary bypass grafting, aorta and great vessel surgery, and general arterial/venous access below 36555) haven&apos;t been sent yet. And within this chunk itself, the source cut off again partway through the venous mechanical thrombectomy codes (37187/37188), right before the thrombolytic infusion codes' own entries would normally appear — the concepts for 37211–37214 are covered here from the guideline text, but not as standalone code entries yet. Send either gap whenever you&apos;re ready.
      </section>

      {subsections.map((sub) => (
        <section key={sub.n} style={sectionStyle}>
          <div style={sectionHeaderStyle}>
            <span style={sectionNumberStyle}>{sub.n}</span>
            <h2 style={sectionTitleStyle}>{sub.title}</h2>
            <span style={rangeChipStyle}>{sub.range}</span>
          </div>
          {sub.intro?.map((p) => <p key={p} style={pStyle}>{p}</p>)}

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

          {sub.rules.length > 0 && (
            <div style={rulesBoxStyle}>
              <p style={rulesTitleStyle}>🟥 KEY CODING RULES</p>
              <ul style={{ margin: 0, paddingLeft: "20px", display: "grid", gap: "8px" }}>
                {sub.rules.map((rule) => <li key={rule}>{rule}</li>)}
              </ul>
            </div>
          )}

          {sub.tips.length > 0 && (
            <div style={tipsBoxStyle}>
              <p style={tipsTitleStyle}>🧠 CODING TIPS</p>
              <ul style={{ margin: 0, paddingLeft: "20px", display: "grid", gap: "8px" }}>
                {sub.tips.map((tip) => <li key={tip}>{tip}</li>)}
              </ul>
            </div>
          )}
        </section>
      ))}

      <div style={{ marginTop: "30px", display: "flex", flexWrap: "wrap" as const, gap: "16px" }}>
        <Link href="/cpt/surgery/33000-series-guidelines-reviewer" style={backLinkStyle}>← Back to Part 1</Link>
        <Link href="/cpt/surgery/33,000" style={backLinkStyle}>← Back to Cardiovascular System</Link>
      </div>
    </main>
  );
}
