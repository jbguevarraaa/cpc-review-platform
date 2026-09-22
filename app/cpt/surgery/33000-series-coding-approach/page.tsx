import Link from "next/link";

type ChecklistItem = {
  n: number;
  question: string;
  why: string;
  example: string;
};

const checklist: ChecklistItem[] = [
  {
    n: 1,
    question: "What anatomic system or structure is actually being worked on?",
    why: "This is the first and most important question — it sends you to one of ten \"neighborhoods\" in the 33,000 series before you even think about a specific code number. Cardiovascular coding fails most often when someone starts hunting for a code before pinning down which system is involved.",
    example: "Is this the pericardium (the sac around the heart)? A specific heart valve — which one? The coronary arteries (bypass grafting)? The aorta or great vessels — which segment? The heart's electrical system (pacemaker, implantable defibrillator (ICD), ablation)? Circulatory support (ECMO — extracorporeal membrane oxygenation, VAD — ventricular assist device, or an intra-aortic balloon pump)? Heart or heart-lung transplantation or an artificial heart? The abdominal aorta or iliac arteries (EVAR), a bypass graft, or a catheter/angiography study? Or vascular access (central line, dialysis, thrombectomy)?",
  },
  {
    n: 2,
    question: "What is the APPROACH?",
    why: "Open (sternotomy/thoracotomy) vs. percutaneous/transcatheter vs. thoracoscopic/endoscopic vs. transvenous is the single biggest fork in this series. The exact same clinical problem is very often split into two completely separate code families purely by approach.",
    example: "TAVR (transcatheter aortic valve replacement) vs. open aortic valve replacement are two different code families for treating the same valve. Percutaneous LAA (left atrial appendage) closure with a device (33340) vs. surgical LAA exclusion (33267–33269) are two different procedures for the same anatomic goal. Transvenous pacemaker leads vs. epicardial leads are two different placement techniques with separate codes.",
  },
  {
    n: 3,
    question: "Was cardiopulmonary bypass (CPB) used, or not?",
    why: "A large number of code pairs in this series split purely on with-vs-without bypass, with no other difference in the procedure itself. Always check for this pair before assuming there's only one applicable code.",
    example: "Pericardiectomy (33030 without bypass / 33031 with bypass), general aorta/great vessel repair (33320 without shunt-or-bypass / 33321 with shunt / 33322 with bypass), aortic valvuloplasty (33390 simple / 33391 complex, both with bypass) — read the operative note specifically for whether the heart-lung machine was used.",
  },
  {
    n: 4,
    question: "What is the COUNT or EXTENT?",
    why: "Counting correctly is very often the entire difference between two codes in this series — miscounting is one of the most common real-world and exam errors in cardiovascular coding.",
    example: "Number of coronary bypass grafts (distal anastomoses, not graft segments). Number of pacemaker/ICD leads (single, dual, or multiple). Whether TMVR (transcatheter mitral valve repair) placed just the initial prosthesis, or an additional one in the same session (a binary initial-vs-additional call, not open-ended counting — only one additional-prosthesis add-on is ever reported per session, no matter how many additional prostheses were placed). Limited vs. extensive maze lesion set.",
  },
  {
    n: 5,
    question: "What MATERIAL or DEVICE TYPE is involved?",
    why: "Once you know the system, approach, bypass status, and count, the specific material or device type usually finishes the job of picking the exact code.",
    example: "CABG: venous graft, arterial graft, or a combination of both (which requires two codes together, never a venous code and an arterial code standing in for a combined graft). Open valve replacement: prosthetic, homograft/allograft, or stentless tissue valve. Pacemaker/ICD: transvenous, subcutaneous, leadless, or epicardial.",
  },
  {
    n: 6,
    question: "Is this STANDALONE, or an ADD-ON to another procedure in the same session?",
    why: "Whenever two procedures happen together in the same operative session, check first for a \"performed at the time of another procedure\" add-on code before stacking two standalone codes — this series uses that pattern constantly.",
    example: "Maze: standalone (33254–33256) vs. add-on when done with another open-heart procedure (33257–33259). LAA exclusion: standalone (33267) vs. add-on (33268) vs. already bundled into a maze or mitral valve procedure (not separately billable at all). Transmyocardial revascularization: standalone (33140) vs. add-on (33141). Aortic hemiarch graft (33866) is always an add-on, never billed alone.",
  },
  {
    n: 7,
    question: "What is already BUNDLED into the base code?",
    why: "Imaging guidance, diagnostic catheterization, vein/artery harvest, and device evaluation are extremely often already included in the base procedure code in this series. Check the bundling rule for that specific family before reflexively adding a second code.",
    example: "TAVR/TAVI already bundles percutaneous access, balloon valvuloplasty, delivery and positioning, temporary pacing for rapid pacing, arteriotomy closure, and all the guidance imaging used to place the valve. Venous CABG codes already bundle saphenous vein harvest. Leadless pacemaker codes already bundle device evaluation, fluoroscopy, and vascular ultrasound guidance.",
  },
  {
    n: 8,
    question: "Is there a special reporting requirement?",
    why: "A handful of recurring reporting quirks show up across many different families in this series — knowing them by heart avoids a whole category of missed points.",
    example: "TAVR/TAVI always has two physician operators, reported with modifier 62 on the same code (not two different codes). The reoperation add-on (33530) applies whenever the operation is more than a month after the original — for both valve AND bypass procedures. ECMO daily management codes are billed once per day, separately from the patient's overall daily hospital care codes.",
  },
];

type FamilyCard = {
  n: number;
  family: string;
  range: string;
  lookFor: string[];
  distinction: string;
  tip: string;
  href: string;
  linkLabel: string;
};

const families: FamilyCard[] = [
  {
    n: 1,
    family: "Pericardium, Cardiac Tumor & General Repair",
    range: "33016–33130, 33300–33315",
    lookFor: [
      "First: is a catheter left in place at the end of the procedure, or removed the same session? (drainage-with-catheter vs. simple pericardiocentesis)",
      "Then, for catheter codes: patient age and congenital-anomaly status.",
      "For pericardiectomy: subtotal or complete, and with or without bypass.",
      "For a cardiac tumor: is it INTRAcardiac (inside the heart — always needs bypass) or EXTERNAL (on the surface — no bypass)?",
      "For a general cardiac wound repair or exploratory cardiotomy (removing a foreign body or clot from inside the heart, not tied to any other named procedure): was cardiopulmonary bypass used or not?",
    ],
    distinction: "The catheter-stays-in-or-not question is the fastest single fork in this whole subsection — it decides between four otherwise similar-sounding codes.",
    tip: "Age + congenital anomaly status is the tiebreaker specifically for the indwelling-catheter codes, not for simple pericardiocentesis.",
    href: "/cpt/surgery/33000-series-guidelines-reviewer",
    linkLabel: "See full Pericardium & Tumor code lookup (Part 1)",
  },
  {
    n: 2,
    family: "Pacemaker, ICD & Phrenic Nerve Stimulator",
    range: "33202–33288",
    lookFor: [
      "First: is this a LEAD-only service, a GENERATOR-only service, or a FULL SYSTEM (generator + lead together)?",
      "Then: single, dual, or multiple leads?",
      "Then: pacemaker or implantable defibrillator (ICD)?",
      "Then: transvenous, subcutaneous, leadless, or epicardial?",
    ],
    distinction: "Answer those four questions in that exact order and you land on the right code almost every time — this family is a scenario lookup, not a memorization exercise. The phrenic nerve stimulator system follows the identical insert/remove/reposition/replace pattern, just with different target veins.",
    tip: "\"Battery replacement\" always means replacing the whole pulse generator — there's no separate battery-only code, and the correct code depends on whether the existing leads are being kept or replaced too.",
    href: "/cpt/surgery/33000-series-guidelines-reviewer",
    linkLabel: "See the full pacemaker/ICD scenario table (Part 1)",
  },
  {
    n: 3,
    family: "Electrophysiology — Ablation, Maze & LAA Exclusion",
    range: "33250–33269, 33340",
    lookFor: [
      "First: is this open/thoracoscopic surgical ablation (this series) or percutaneous catheter-based ablation (a different CPT section entirely)?",
      "Then, for maze: limited or extensive lesion set?",
      "Then: standalone, or performed at the time of another open-heart procedure (switch to the add-on code)?",
      "For LAA: percutaneous device closure (33340) vs. surgical exclusion — and is it already bundled into a maze or mitral valve procedure happening in the same session?",
    ],
    distinction: "LAA exclusion is never separately billed when it's part of a maze procedure or a mitral valve procedure in the same session — it's already included in those codes.",
    tip: "Percutaneous LAA closure (33340, the Watchman-type device) and surgical LAA exclusion (33267–33269) are two entirely different procedures, not two ways to bill the same thing — don't mix up which family a question is describing.",
    href: "/cpt/surgery/33000-series-guidelines-reviewer",
    linkLabel: "See full ablation/maze/LAA code lookup (Part 1)",
  },
  {
    n: 4,
    family: "Heart Valves — Transcatheter & Open",
    range: "33361–33478",
    lookFor: [
      "First: which valve — aortic, mitral, tricuspid, or pulmonary?",
      "Then: transcatheter — TAVR (aortic), TMVR (transcatheter mitral valve repair), or TPVI (transcatheter pulmonary valve implantation) — or open?",
      "For transcatheter aortic (TAVR): the ARTERIAL ACCESS ROUTE decides the code — not the valve brand or type.",
      "For open replacement: what VALVE MATERIAL — prosthetic, homograft/allograft, or stentless tissue? Is annulus enlargement or pulmonary valve translocation also documented (Konno or Ross procedure)? Note: root-replacement procedures that swap or preserve the aortic valve as part of a larger aortic root repair — Bentall and David/Yacoub — belong to the Aorta & Great Vessels family below, not this valve range.",
    ],
    distinction: "TAVR/TAVI already bundles nearly everything (access, valvuloplasty, delivery, positioning, temporary pacing, closure, and imaging) — diagnostic CORONARY angiography is only separately billable under narrow exceptions (no prior study, an outdated or inadequate prior study, or a clinical change during the procedure that requires new evaluation).",
    tip: "TAVR/TAVI always involves two operators, reported with modifier 62 on the same code — don't reach for a co-surgeon exclusion here like you might elsewhere in this series.",
    href: "/cpt/surgery/33000-series-guidelines-reviewer-part-2",
    linkLabel: "See full valve code lookup, all four valves (Part 2)",
  },
  {
    n: 5,
    family: "Coronary Artery Bypass Grafting (CABG)",
    range: "33510–33536, 33572",
    lookFor: [
      "First: venous graft only, arterial graft only, or a COMBINATION of both?",
      "Then: how many DISTAL ANASTOMOSES — the points where the graft is sutured onto a diseased coronary artery — not how many graft segments or incisions were used?",
      "Then: was the graft harvested endoscopically, or from an unusual site (upper-extremity vein, femoropopliteal vein), requiring a separate harvest add-on?",
      "Then: was coronary endarterectomy performed on a grafted vessel, or is this a reoperation more than a month after the original surgery? (both are add-ons)",
    ],
    distinction: "Combined arterial-and-venous grafting is never billed as one venous code plus one arterial code side by side — it specifically requires the combined-grafting add-on code paired with the matching arterial graft code. A venous-only code and an arterial-only code are never reported together in the same session.",
    tip: "Three-question CABG lookup, in order: (1) venous, arterial, or combined? (2) how many grafts (by anastomosis count)? (3) is an endarterectomy or reoperation add-on also needed? Answering those three in order is the whole decision tree.",
    href: "/cpt/surgery/33000-series-guidelines-reviewer-part-2",
    linkLabel: "See the full CABG code lookup with graft diagram (Part 2)",
  },
  {
    n: 6,
    family: "Aorta & Great Vessels — Open Repair and TEVAR",
    range: "33320–33335, 33858–33886",
    lookFor: [
      "First: which SEGMENT — ascending aorta/root, aortic arch, descending thoracic aorta, or a general suture repair/graft of the aorta or great vessels not tied to a specific named segment (33320–33335, split by whether a shunt or cardiopulmonary bypass was used)?",
      "For the ascending aorta/root: dissection or other disease (like an aneurysm)? Is the native valve replaced (Bentall) or preserved (David/Yacoub)?",
      "For the arch: hemiarch add-on alongside an ascending graft, or a full transverse arch graft on its own?",
      "For TEVAR (thoracic endovascular aortic repair): which portion of the thoracic aorta does the endograft COVER, relative to the left subclavian artery — not the underlying pathology.",
    ],
    distinction: "TEVAR is coded purely by anatomic coverage relative to the left subclavian artery — aneurysm, dissection, penetrating ulcer, and traumatic disruption are all coded exactly the same way based on where the endograft sits, not what caused the problem.",
    tip: "For the ascending aorta/root family, ask just two questions: dissection or other disease? Valve replaced or preserved? That's the entire decision tree for 33858/33859/33863/33864.",
    href: "/cpt/surgery/33000-series-guidelines-reviewer-part-2",
    linkLabel: "See full aorta/great vessel & TEVAR code lookup (Part 2)",
  },
  {
    n: 7,
    family: "ECMO/ECLS, Ventricular Assist Devices & Balloon Pump",
    range: "33946–33997",
    lookFor: [
      "First: what's the support GOAL — lung support only (ECMO/ECLS veno-venous), heart-and-lung support (ECMO/ECLS veno-arterial), mechanical heart pumping (VAD), or pressure-timed balloon augmentation (IABP — intra-aortic balloon pump)?",
      "For ECMO/ECLS: initiation, daily management, cannula insertion, or cannula repositioning — these are four distinct services (plus decannulation when the cannula comes out), never billed as if they were the same thing.",
      "For VAD: percutaneous vs. implantable (transthoracic); single-ventricle vs. biventricular support.",
      "For IABP: the APPROACH — percutaneous, open femoral, or ascending aorta — each with its own matched insertion and removal code pair.",
    ],
    distinction: "Cannula repositioning is a distinct service from cannula insertion and is never billed on the same day as an initiation code. Separately, daily management is billed once per day and is never billed on the same day as initiation either — even if a different physician performed that day's management.",
    tip: "Veno-venous = lungs only. Veno-arterial = heart and lungs. Keep that one-line rule in mind and the entire ECMO code family (initiation/daily management/cannula work × 2 circuit types) falls into place.",
    href: "/cpt/surgery/33000-series-guidelines-reviewer-part-2",
    linkLabel: "See full ECMO/VAD/IABP code lookup (Part 2)",
  },
  {
    n: 8,
    family: "Heart & Heart-Lung Transplant, Artificial Heart",
    range: "33927–33945",
    lookFor: [
      "First: which of the THREE physician components was performed — donor cardiectomy, backbench work on the donor organ, or the recipient transplant?",
      "Heart only, or heart AND lungs? Each component has a matching pair of codes (33940/33930, 33944/33933, 33945/33935).",
      "Is the implanted device a total replacement (artificial) heart, or a ventricular assist device? They use different code families.",
      "Was an artificial heart removed to make room for a donor heart? That is 33945 plus the add-on 33929.",
    ],
    distinction: "Artificial heart (33927 implant, 33928 remove-and-replace, +33929 removal for transplant) is not a VAD. Revising or replacing only components of an artificial heart is the unlisted code 33999.",
    tip: "Three slots, two columns: DONOR → BACKBENCH → RECIPIENT, in a heart column and a heart-lung column.",
    href: "/cpt/surgery/33000-series-guidelines-reviewer-part-2",
    linkLabel: "See transplant & artificial heart codes (Part 2)",
  },
  {
    n: 9,
    family: "Endovascular Aorta (EVAR), Bypass Grafts & Vascular Injection",
    range: "34701–36483",
    lookFor: [
      "First: is this a repair of the aortic/iliac WALL (aneurysm, dissection, ulcer, trauma — EVAR/FEVAR), a bypass around a blockage, or a catheter-placement/angiography study?",
      "For EVAR: what device was deployed (tube, aorto-uni-iliac, aorto-bi-iliac, ilio-iliac, branched, fenestrated), and was there a rupture (even code) or not (odd code)?",
      "For EVAR: did an extension end BEYOND the common iliac arteries (+34709), and how was access obtained (percutaneous 12 French or larger, or open exposure)?",
      "For a bypass: which two vessels does the graft bridge, and is the conduit vein, in-situ vein, or non-vein? Harvesting anything other than the saphenous vein is reported separately (for example +35500 or +35572).",
      "For catheter placement: how far did the catheter tip go — aorta only, first-, second-, or third-order branch — in which vascular family?",
      "For venous work (36400–36483): is it a skilled venipuncture, a transfusion, a sclerosant injection (with or without compression), or an endovenous ablation — and if ablation, first vein or a subsequent vein?",
    ],
    distinction: "EVAR/FEVAR codes treat disease of the vessel WALL; narrowing (occlusive disease) with a covered stent belongs to other codes (aorta 37236/37237, iliac 37258–37261). Catheter placement is a progressive hierarchy — only the deepest level reached in a vascular family is reported.",
    tip: "Treatment-zone thinking for EVAR: anything the endograft covers is bundled; anything outside it (or extensions beyond the common iliacs) is separate.",
    href: "/cpt/surgery/33000-series-guidelines-reviewer-part-3",
    linkLabel: "See EVAR, bypass, and catheter/angiography codes (Part 3)",
  },
  {
    n: 10,
    family: "Vascular Access, Dialysis Circuit & Thrombectomy",
    range: "36555–37214",
    lookFor: [
      "First: what's the PURPOSE — central venous access, arterial puncture/monitoring, hemodialysis access creation, portal decompression, or clearing a clot (thrombectomy)?",
      "For central venous access: tunneled or non-tunneled catheter? Is a port or pump also being placed?",
      "For hemodialysis access: open surgical creation of a fistula/graft, or a percutaneous intervention on an already-existing dialysis circuit?",
      "For thrombectomy: mechanical device removal, or thrombolytic (clot-dissolving drug) infusion?",
    ],
    distinction: "The dialysis-circuit intervention codes are organized as their own ladder of increasing complexity as two parallel ladders — no thrombus (36901 → 36902 → 36903) or thrombus present (36904 → 36905 → 36906) — so find out whether there was thrombus, then identify the highest level of work performed rather than stacking every step.",
    tip: "Ask \"why does this vessel need access\" before anything else here — the purpose (diagnostic monitoring vs. long-term venous access vs. dialysis vs. clot removal) sorts you into the right code family faster than trying to match vessel names alone.",
    href: "/cpt/surgery/33000-series-guidelines-reviewer-part-3",
    linkLabel: "See full vascular access & thrombectomy code lookup (Part 3)",
  },
];

const mainStyle = { maxWidth: "1160px", margin: "0 auto", padding: "36px 24px 64px", minHeight: "100vh", background: "#fdf6f6", color: "#291a1a", fontFamily: "Arial, sans-serif" };
const heroStyle = { background: "linear-gradient(135deg, #450a0a, #b91c1c)", color: "white", padding: "48px 44px", borderRadius: "18px", marginBottom: "26px", boxShadow: "0 12px 28px rgba(69,10,10,0.22)" };
const kickerStyle = { margin: "0 0 10px", color: "#fecaca", fontWeight: 800, letterSpacing: "0.08em" };
const navStyle = { display: "flex", flexWrap: "wrap" as const, gap: "10px", marginBottom: "26px" };
const navLinkStyle = { textDecoration: "none", color: "#b91c1c", background: "#ffffff", border: "1px solid #f0d7d7", borderRadius: "999px", padding: "10px 15px", fontWeight: 700, fontSize: "14px" };
const introStyle = { background: "#fff1f0", border: "1px solid #fecaca", borderLeft: "7px solid #b91c1c", borderRadius: "12px", padding: "22px 24px", marginBottom: "24px", lineHeight: 1.7 };
const sectionStyle = { background: "#ffffff", border: "1px solid #f0e2e2", borderRadius: "14px", padding: "24px 26px", marginBottom: "20px", boxShadow: "0 5px 16px rgba(69,10,10,0.06)" };
const sectionHeaderStyle = { display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px", flexWrap: "wrap" as const };
const numberBadgeStyle = { background: "#b91c1c", color: "#fff", width: "34px", height: "34px", minWidth: "34px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: "14px" };
const sectionTitleStyle = { margin: 0, fontSize: "20px", color: "#111827" };
const pStyle = { lineHeight: 1.75, margin: "0 0 8px", fontSize: "14.5px" };
const labelStyle = { margin: "14px 0 6px", fontWeight: 800, fontSize: "12.5px", letterSpacing: "0.03em", color: "#b91c1c" };
const exampleBoxStyle = { background: "#fdf8f8", border: "1px solid #f0e2e2", borderRadius: "10px", padding: "12px 14px", lineHeight: 1.65, fontSize: "13.5px", marginTop: "8px" };
const rangeChipStyle = { background: "#fff1f0", border: "1px solid #fecaca", color: "#b91c1c", borderRadius: "999px", padding: "4px 12px", fontWeight: 800, fontSize: "12.5px", fontFamily: "Consolas, monospace" };
const distinctionBoxStyle = { background: "#fef2f2", border: "1px solid #fecaca", borderLeft: "5px solid #dc2626", borderRadius: "10px", padding: "14px 16px", marginTop: "14px", lineHeight: 1.7, fontSize: "13.5px" };
const tipBoxStyle = { background: "#f0fdf4", border: "1px solid #bbf7d0", borderLeft: "5px solid #16a34a", borderRadius: "10px", padding: "14px 16px", marginTop: "10px", lineHeight: 1.7, fontSize: "13.5px" };
const familyLinkStyle = { display: "inline-block", marginTop: "14px", textDecoration: "none", color: "#b91c1c", fontWeight: 700, fontSize: "13.5px" };
const backLinkStyle = { textDecoration: "none", color: "#b91c1c", fontWeight: 700 };

export default function CardiovascularCodingApproachPage() {
  return (
    <main style={mainStyle}>
      <header style={heroStyle}>
        <p style={kickerStyle}>33,000 SERIES · CARDIOVASCULAR SYSTEM</p>
        <h1 style={{ margin: 0, fontSize: "clamp(28px, 5.5vw, 48px)" }}>How to Approach Cardiovascular Coding</h1>
        <p style={{ margin: "12px 0 0", fontSize: "19px", lineHeight: 1.5 }}>The decision hierarchy behind every code in this series — what to check first, second, and third, before you ever look at a specific code number.</p>
      </header>

      <nav aria-label="Cardiovascular series navigation" style={navStyle}>
        <Link href="/cpt/surgery/33,000" style={navLinkStyle}>Cardiovascular System home</Link>
        <Link href="/cpt/surgery/33000-series-guidelines-reviewer" style={navLinkStyle}>Guidelines Reviewer Pt. 1</Link>
        <Link href="/cpt/surgery/33000-series-guidelines-reviewer-part-2" style={navLinkStyle}>Guidelines Reviewer Pt. 2</Link>
        <Link href="/cpt/surgery/33000-series-guidelines-reviewer-part-3" style={navLinkStyle}>Guidelines Reviewer Pt. 3</Link>
        <Link href="/cpt/surgery/33000-series-discussion-guide" style={navLinkStyle}>Discussion Guide</Link>
        <Link href="/cpt/surgery/33000-series-practice-quiz" style={navLinkStyle}>Practice Quiz</Link>
        <Link href="/cpt/surgery/33000-series-flashcards" style={navLinkStyle}>Flashcards</Link>
      </nav>

      <section style={introStyle}>
        <strong>Why this page exists:</strong> the Guidelines Reviewer (Parts 1–3) is a code-lookup reference — dense and organized by code range on purpose. This page is the opposite: it's the general reasoning process cardiovascular coders actually use, distilled into a fixed order of questions. Learn this hierarchy once, and it applies to every subsection in the series, not just the one you happen to be studying that day.
      </section>

      <section style={sectionStyle}>
        <div style={sectionHeaderStyle}>
          <span style={numberBadgeStyle}>★</span>
          <h2 style={sectionTitleStyle}>The Universal Cardiovascular Coding Hierarchy</h2>
        </div>
        <p style={pStyle}>Before opening the codebook to a specific range, work through these eight questions IN ORDER. Each one narrows the field before the next one even matters — skipping ahead (like jumping straight to "how many grafts?" before confirming this is even a CABG case) is the most common way to land on the wrong code.</p>
        {checklist.map((c) => (
          <div key={c.n} style={{ marginTop: "18px" }}>
            <p style={{ margin: "0 0 4px", fontWeight: 800, fontSize: "15px", color: "#111827" }}>{c.n}. {c.question}</p>
            <p style={{ ...pStyle, margin: "0 0 6px" }}>{c.why}</p>
            <div style={exampleBoxStyle}><strong>For example:</strong> {c.example}</div>
          </div>
        ))}
      </section>

      <section style={sectionStyle}>
        <div style={sectionHeaderStyle}>
          <span style={numberBadgeStyle}>≡</span>
          <h2 style={sectionTitleStyle}>Family-by-Family Priority Checklist</h2>
        </div>
        <p style={pStyle}>Here's the same eight-question hierarchy applied to each major family in the series, condensed into the specific questions that actually matter for that family — in the order to ask them.</p>
      </section>

      {families.map((f) => (
        <section key={f.n} style={sectionStyle}>
          <div style={sectionHeaderStyle}>
            <span style={numberBadgeStyle}>{f.n}</span>
            <h2 style={sectionTitleStyle}>{f.family}</h2>
            <span style={rangeChipStyle}>{f.range}</span>
          </div>

          <p style={labelStyle}>👀 LOOK FOR, IN THIS ORDER</p>
          <ol style={{ margin: "0 0 4px", paddingLeft: "20px", display: "grid", gap: "6px", fontSize: "14.5px", lineHeight: 1.65 }}>
            {f.lookFor.map((item) => <li key={item}>{item}</li>)}
          </ol>

          <div style={distinctionBoxStyle}>
            <strong>🟥 The distinction that matters most:</strong> {f.distinction}
          </div>

          <div style={tipBoxStyle}>
            <strong>🧠 Priority tip:</strong> {f.tip}
          </div>

          <Link href={f.href} style={familyLinkStyle}>{f.linkLabel} →</Link>
        </section>
      ))}

      <div style={{ marginTop: "30px", display: "flex", flexWrap: "wrap" as const, gap: "16px" }}>
        <Link href="/cpt/surgery/33000-series-guidelines-reviewer" style={backLinkStyle}>→ Go deeper in the full Guidelines Reviewer (Part 1)</Link>
        <Link href="/cpt/surgery/33,000" style={backLinkStyle}>← Back to Cardiovascular System</Link>
      </div>
    </main>
  );
}
