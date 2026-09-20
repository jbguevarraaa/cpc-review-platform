import { ReviewerShell, type Subsection } from "../_digestive/kit";
import { BariatricDiagram, HerniaAgeDiagram, HerniaSizeDiagram, HemorrhoidDiagram } from "../_digestive/diagrams";

const sections: Subsection[] = [
  {
    id: "bariatric",
    n: 1,
    title: "Bariatric Surgery",
    range: "43644–43645 · 43770–43775 · 43842–43848 · 43886–43888 · 43290–43291",
    intro: [
      "Bariatric surgery is a family of weight-loss operations that shrink the stomach's capacity or re-route the gut so the body takes in less. Depending on the operation, they touch the stomach and part of the small intestine.",
      "Pick the OPERATION first (band, sleeve, bypass, or duodenal switch), then the APPROACH (laparoscopic or open) — the approach decides the code.",
    ],
    diagram: <BariatricDiagram />,
    definitions: [
      ["Gastroplasty", "the stomach is stapled to make a small pouch (vertical banded gastroplasty)."],
      ["Adjustable gastric band", "a band around the upper stomach plus a port under the skin; fluid is added or removed through the port to tighten or loosen it."],
      ["Sleeve gastrectomy", "most of the stomach along its outer curve is removed, leaving a narrow 'sleeve'."],
      ["Gastric bypass (Roux-en-Y)", "a small stomach pouch is connected to a limb of small intestine. A Roux limb of 150 cm or less is the standard case."],
      ["Biliopancreatic diversion with duodenal switch (BPD-DS)", "a partial gastrectomy with a re-routed small intestine that leaves a short common channel (50 to 100 cm)."],
    ],
    steps: [
      "① Which operation was performed — band, sleeve, gastric bypass, BPD-DS, or gastroplasty?",
      "② Laparoscopic or open? Bypass: lap 43644–43645 / open 43846–43847. Sleeve: lap 43775 / open 43843. Band: lap 43770–43774 / open 43886–43888.",
      "③ Bypass: Roux limb 150 cm or less = 43644 (lap) / 43846 (open). More than 150 cm, or with small-intestine reconstruction to limit absorption = 43645 (lap) / 43847 (open).",
      "④ Band: was the COMPLETE SYSTEM (band + port) or ONE COMPONENT handled? Use the table below.",
    ],
    categories: [
      {
        name: "Code layout by operation",
        codes: [
          ["43842", "Gastroplasty (vertical banded gastroplasty) — open"],
          ["43848", "REVISION, open, of a gastric restrictive procedure other than an adjustable band"],
          ["43290 · 43291", "Balloon, done by EGD: deployment of an intragastric bariatric balloon · removal of the balloon(s)"],
          ["43644 · 43645", "Gastric bypass, LAPAROSCOPIC (Roux limb ≤ 150 cm · > 150 cm / small-intestine reconstruction)"],
          ["43846 · 43847", "Gastric bypass, OPEN (same two cases)"],
          ["43775", "Sleeve gastrectomy, LAPAROSCOPIC (longitudinal gastrectomy)"],
          ["43843", "Restrictive procedure without bypass, OPEN, other than vertical banded gastroplasty — includes the open sleeve"],
          ["43845", "BPD-DS: partial gastrectomy, pylorus-preserving duodenoileostomy, and ileoileostomy (50–100 cm common channel) — open"],
          ["43770–43774", "Adjustable gastric band, LAPAROSCOPIC — see the table"],
          ["43886–43888", "Adjustable gastric band, OPEN — SUBCUTANEOUS PORT component only: 43886 revision · 43887 removal · 43888 removal and replacement"],
        ],
      },
      {
        name: "Laparoscopic adjustable gastric band — complete system vs. one component",
        codes: [
          ["INSERT", "Complete system (band + port): 43770 · one component only: 43770 with modifier 52"],
          ["REVISE", "Component only: 43771"],
          ["REMOVE", "Complete system (band + port): 43774 · ONE component only (band or port): 43772"],
          ["REPLACE", "Removal and replacement of BOTH band and port: 43659 (unlisted laparoscopy, stomach) · one component: 43773"],
        ],
      },
    ],
    rules: [
      "Adjusting a band after surgery is part of the surgical package for the typical patient and is NOT reported separately. An adjustment means changing the band's size by injecting or removing fluid through the port.",
      "43772 (single-component removal) and 43773 (single-component removal and replacement) are not reported together; 43888 is not reported with 43774 or 43887.",
      "43645 is not reported with 49320 or 43847; 43845 is not reported with 43633, 43847, 44130, or 49000.",
      "An EGD done for a separate condition at the same time as laparoscopic bypass (43644) is reported with modifier 59.",
      "Open band port work has its own codes (43886–43888). An open gastric restriction WITHOUT bypass, other than vertical banded gastroplasty, is 43843.",
    ],
    tips: [
      "Say the operation, then the approach: 'lap sleeve' = 43775, 'open sleeve' = 43843, 'lap bypass' = 43644/43645, 'open bypass' = 43846/43847.",
      "For the band, ask 'was the port touched?'. Both band + port = the complete-system code; only one of them = the component code (or modifier 52 on 43770 for placement).",
      "A complete band-and-port removal AND replacement has no dedicated code — it goes to unlisted 43659.",
    ],
  },
  {
    id: "hernia",
    n: 2,
    title: "Hernia Repair — Inguinal, Femoral & Lumbar",
    range: "49491–49557 · 49650–49651",
    intro: [
      "A hernia is a lump caused by a weakness in the abdominal wall. Any abdominal organ can be inside the lump — intestine, a testicle, or an ovary.",
      "Hernia codes are sorted by TYPE first (inguinal, femoral, lumbar, anterior abdominal, parastomal). This section covers the ones where AGE matters: inguinal, femoral, and lumbar. The next section covers anterior abdominal and parastomal hernias, which are sorted by SIZE.",
    ],
    diagram: <HerniaAgeDiagram />,
    definitions: [
      ["Reducible", "the contents can be pushed back into the abdomen."],
      ["Incarcerated", "the contents are stuck and cannot be pushed back."],
      ["Strangulated", "the stuck contents have lost their blood supply — an emergency."],
      ["Post-conception age (PCA)", "used for preterm babies (born before 37 weeks): gestational age at birth + the baby's age in weeks at the time of the repair."],
    ],
    steps: [
      "① What TYPE is it? Inguinal, femoral, or lumbar here — or an anterior abdominal / parastomal type (next section).",
      "② Initial or recurrent? (Inguinal and femoral are split this way.)",
      "③ Inguinal only: how old is the patient? Preterm babies use PCA; everyone else uses age in months or years (see the diagram).",
      "④ Reducible, or incarcerated/strangulated? That is the last split in every pair.",
      "⑤ Was a strangulated organ removed or repaired? Add that code too (Rules).",
    ],
    categories: [
      {
        name: "Inguinal (open) — by age, initial vs. recurrent",
        codes: [
          ["49491 · 49492", "Initial, preterm infant (born < 37 wk), from birth up to 50 wk PCA — reducible · incarcerated/strangulated"],
          ["49495 · 49496", "Initial, preterm infant older than 50 wk PCA and younger than 6 months, OR full-term infant younger than 6 months — reducible · incarcerated/strangulated"],
          ["49500 · 49501", "Initial, age 6 months to younger than 5 years — reducible · incarcerated/strangulated"],
          ["49505 · 49507", "Initial, age 5 years or older — reducible · incarcerated/strangulated"],
          ["49520 · 49521", "RECURRENT, any age — reducible · incarcerated/strangulated"],
          ["49525", "SLIDING inguinal hernia, any age — only when it is NOT incarcerated or strangulated"],
          ["49650 · 49651", "LAPAROSCOPIC inguinal repair — initial · recurrent"],
        ],
      },
      {
        name: "Femoral and lumbar",
        codes: [
          ["49550 · 49553", "Initial FEMORAL, any age — reducible · incarcerated/strangulated"],
          ["49555 · 49557", "RECURRENT femoral — reducible · incarcerated/strangulated"],
          ["49540", "LUMBAR hernia"],
        ],
      },
    ],
    rules: [
      "The initial inguinal codes are 'with or without hydrocelectomy' — a hydrocele fixed during the same repair is not reported separately.",
      "A sliding inguinal hernia that is also incarcerated or strangulated uses the incarcerated/strangulated inguinal codes (49496, 49501, 49507, 49521), NOT 49525.",
      "When a strangulated hernia has an organ that is removed or repaired, the organ code is reported IN ADDITION to the hernia code: 44120 (intestine), 54520 (testicle), or 58940 (ovary). No organ removed or repaired → hernia code only.",
      "Bilateral repair: modifier 50 on the unilateral codes (49491–49557, 49500, 49605, 49606, 49610, 49611, 49650, 49651). Do NOT use modifier 50 with 49591–49622.",
      "Do not report modifier 63 with 49491, 49492, 49495, 49496, 49600, 49605, 49606, 49610, or 49611.",
      "Surgical laparoscopy always includes diagnostic laparoscopy. Reduction and repair of an intra-abdominal (internal) hernia is 44050.",
    ],
    tips: [
      "Recurrent inguinal does NOT depend on age — 49520 and 49521 apply to any age. Sliding (49525) is also any age.",
      "Inguinal → look at AGE. Femoral and lumbar → no extra split beyond initial/recurrent and reducible/incarcerated.",
      "Preterm PCA math is the one calculation on the exam: gestational age at birth + weeks of life. Then compare to 50 weeks — but only for babies still younger than 6 months.",
      "'Laparoscopic', 'open', and 'robotic' do not change an anterior abdominal hernia code — only inguinal hernias still have separate laparoscopic codes (49650, 49651).",
    ],
    traps: [
      "Adding PCA to a baby who is already over 6 months old. PCA only decides the tier for babies younger than 6 months.",
      "Coding a sliding hernia as 49525 when it is incarcerated or strangulated.",
      "Adding 44120, 54520, or 58940 to every strangulated hernia — only when an organ was actually removed or repaired.",
      "Using modifier 63 on a hernia code that does not allow it (49491, 49492, 49495, 49496).",
    ],
    cases: [
      {
        title: "Preterm infant PCA — repair at 20 weeks",
        scenario: "An infant was born at 35 weeks gestation and now presents for repair of an incarcerated hernia at 20 weeks. What is this patient's PCA?",
        steps: [
          "PCA applies to preterm babies (younger than 37 weeks at birth). 35 weeks qualifies.",
          "Formula: PCA = gestational age at birth + age in weeks at the time of repair = 35 + 20.",
          "PCA = 55 weeks.",
          "That is OVER 50 weeks PCA and the baby is under 6 months old (20 weeks is about 4.6 months), so if this is an initial inguinal hernia it falls in the 49495 / 49496 tier. (The scenario does not say inguinal or initial — the answer assumes both, as the question is about the PCA tiers.)",
          "The hernia is incarcerated, so the code is 49496 (49495 would be reducible).",
        ],
        answer: "PCA = 55 weeks → 49496 (initial inguinal hernia, incarcerated, preterm infant over 50 weeks PCA and under 6 months).",
      },
      {
        title: "Preterm infant PCA — Baby Jones",
        scenario: "Baby Jones was born prematurely at 28 weeks gestation. He was found to have a left inguinal hernia. Today, 4 weeks after birth, he underwent a herniorrhaphy. What is this patient's PCA?",
        steps: [
          "Preterm? Yes — 28 weeks is under 37.",
          "PCA = 28 + 4 = 32 weeks.",
          "32 weeks is 50 weeks PCA or LESS, so this is the FIRST tier: 49491 (reducible) or 49492 (incarcerated/strangulated).",
          "The scenario does not say the hernia is incarcerated or strangulated, so it is treated as reducible.",
          "It is a left-sided (unilateral) repair — no modifier 50. Do not use modifier 63 with 49491.",
        ],
        answer: "PCA = 32 weeks → 49491.",
      },
      {
        title: "34-year-old male, inguinal hernia repaired with mesh",
        scenario: "A 34-year-old male developed an inguinal hernia while lifting a 60-pound bag and is scheduled for an inguinal herniorrhaphy. The abdomen was entered via a midline incision revealing the fascial defect. The hernia sac and contents were easily reducible, and a large plug of mesh was placed over the fascial defect and sutured to the fascia. What CPT code(s) are reported?",
        steps: [
          "Type: INGUINAL — the documentation says so. The incision location does not change the type (the midline wording is a quirk of the slide; the note calls it inguinal, so inguinal wins).",
          "Initial or recurrent? It developed while lifting — a new hernia, so INITIAL.",
          "Age: 34 → the '5 years or older' tier (49505 / 49507).",
          "Clinical picture: 'easily reducible' → the reducible code, 49505 (49507 is incarcerated or strangulated).",
          "Mesh: included in the hernia repair — it is NOT reported separately.",
        ],
        answer: "49505 (one code).",
      },
      {
        title: "Strangulated inguinal hernia in a 32-week-old preterm baby",
        scenario: "A surgeon repaired a strangulated inguinal hernia on a baby who was 32 weeks old at the time of the surgery and was preterm at 35 weeks gestational age. How would you code this procedure?",
        steps: [
          "Type: initial INGUINAL (nothing says recurrent).",
          "Preterm? Yes (35 weeks). PCA = 35 + 32 = 67 weeks — over 50, so the first tier (49491/49492) is OUT.",
          "But PCA only decides the tier for babies who are still YOUNGER THAN 6 MONTHS. A 32-week-old baby is about 7.4 months old — already over 6 months.",
          "So use the chronologic-age tier: 6 months to younger than 5 years → 49500 (reducible) / 49501 (incarcerated or strangulated).",
          "The hernia is strangulated → 49501.",
          "Add the repair or removal of the strangulated organ (44120 for bowel, 54520 for testicle, 58940 for ovary) ONLY if the operative note shows an organ was removed or repaired.",
        ],
        answer: "49501 (plus 44120, 54520, or 58940 only if an organ was excised or repaired). If the baby were under 6 months old, it would be 49496 instead.",
      },
    ],
  },
  {
    id: "hernia-anterior",
    n: 3,
    title: "Hernia Repair — Anterior Abdominal, Parastomal & Other",
    range: "49591–49623 · 49600–49611 · 49659",
    intro: [
      "Anterior abdominal hernias — epigastric, incisional, ventral, umbilical, and spigelian — are reported by the TOTAL SIZE of the defect, not by the patient's age.",
      "IMPORTANT: since 2023 these repairs are NOT separate families with separate laparoscopic codes anymore. One set of codes (49591–49618) covers them all, by ANY approach. Older training material — including some slides — still shows the deleted codes 49560–49566, 49568, 49570–49590, and 49652–49657; the 2026 codebook does not contain them.",
    ],
    diagram: <HerniaSizeDiagram />,
    definitions: [
      ["Anterior abdominal hernia", "a hernia in the front wall of the belly: epigastric, incisional, ventral, umbilical, or spigelian."],
      ["Total defect length", "the largest measurement, head-to-foot or side-to-side, across the outer edges of ALL the defects that were repaired, taken before the hernia is opened."],
      ["Parastomal hernia", "a hernia beside a stoma (an opening for a colostomy or ileostomy)."],
    ],
    steps: [
      "① Is it anterior abdominal or parastomal? Parastomal has its own codes (49621, 49622).",
      "② Initial or recurrent? (49591–49596 initial · 49613–49618 recurrent.)",
      "③ Measure the TOTAL defect length — under 3 cm, 3 to 10 cm, or over 10 cm (see the grid).",
      "④ Reducible, or incarcerated/strangulated? That is the last split in every pair.",
      "⑤ Mesh and laparoscopy are already included. Was old mesh removed? Add +49623 only for total or near-total NON-infected mesh.",
    ],
    categories: [
      {
        name: "Anterior abdominal (epigastric, incisional, ventral, umbilical, spigelian) — any approach",
        codes: [
          ["49591–49596", "INITIAL, by total defect size: < 3 cm reducible / incarcerated · 3–10 cm reducible / incarcerated · > 10 cm reducible / incarcerated (49591, 49592, 49593, 49594, 49595, 49596)"],
          ["49613–49618", "RECURRENT, same six size/clinical splits (49613, 49614, 49615, 49616, 49617, 49618)"],
          ["49621 · 49622", "PARASTOMAL hernia, initial or recurrent, any approach — reducible · incarcerated/strangulated"],
          ["+49623", "ADD-ON: removal of total or near-total NON-infected mesh (use with 49591–49622)"],
        ],
      },
      {
        name: "Other",
        codes: [
          ["49600", "Repair of a SMALL omphalocele with primary closure"],
          ["49605 · 49606", "Repair of a LARGE omphalocele or gastroschisis · with removal of the prosthesis, final reduction and closure in the operating room"],
          ["49610 · 49611", "Omphalocele repair, Gross type operation — first stage · second stage"],
          ["49659", "Unlisted laparoscopy procedure, hernioplasty, herniorrhaphy, or herniotomy"],
        ],
      },
    ],
    rules: [
      "Mesh or other prosthesis is INCLUDED in 49591–49622 and may not be reported separately. Do not use the old add-on 49568. Use +49623 only to remove total or near-total non-infected mesh. Infected mesh removal is 11008.",
      "The anterior abdominal codes (49591–49618) are reported ONCE per session, by total defect size. Measure before opening the hernia (the fascia retracts and makes it look bigger).",
      "'Swiss cheese' defects (several separate holes) are measured from the top of the highest defect to the bottom of the lowest. If separate defects are 10 cm or more apart with normal fascia between, measure each and add them.",
      "If a reducible AND an incarcerated/strangulated anterior abdominal hernia are repaired at the same session, report everything as incarcerated/strangulated using the total defect length.",
      "Inguinal, femoral, lumbar, omphalocele, and parastomal repairs done at the same session as an anterior abdominal repair may be reported separately with modifier 59.",
      "Do NOT use modifier 50 with 49591–49622. Debridement of the abdominal wall is 11042–11043.",
    ],
    tips: [
      "Anterior abdominal → look at SIZE. Add up the defects the surgeon repaired, then pick under 3, 3–10, or over 10 cm.",
      "'Laparoscopic', 'open', and 'robotic' do not change an anterior abdominal hernia code.",
      "Old mesh is only added to the code when it is total or near-total, non-infected, and actually removed — use +49623.",
    ],
    traps: [
      "Choosing an old laparoscopic ventral code (49652–49657) from a deck or an old book. Those are not in the 2026 codebook.",
      "Adding a mesh code. Mesh is already included in 49591–49622.",
      "Measuring the defect after the hernia is opened, or using the sac size instead of the fascial defect.",
      "Reporting a reducible and an incarcerated hernia as two separate codes — the whole repair becomes incarcerated, one code.",
    ],
    cases: [
      {
        title: "70-year-old female, laparoscopic ventral hernia repair",
        scenario: "A 70-year-old female with a history of symptomatic ventral hernia was advised to undergo laparoscopic evaluation and repair. Two 5-mm trocars were placed in the epigastric incision, one in the left upper quadrant and a second in the left lower quadrant. A small defect was visualized and a mesh was tacked to cover this defect. What CPT code(s) are reported?",
        steps: [
          "Type: VENTRAL — an anterior abdominal hernia. That family (49591–49622) is reported ANY approach, including laparoscopic.",
          "Initial or recurrent? A history of a symptomatic hernia with no prior repair mentioned → INITIAL (49591–49596).",
          "Size: the record says 'small defect'. Coding needs the TOTAL defect length — 'small' is treated here as under 3 cm. If the note recorded 3–10 cm, the code would be 49593. On the job, you would ask the surgeon for the measurement.",
          "Reducible or incarcerated? Nothing indicates it was stuck or strangulated → reducible.",
          "Mesh is included; laparoscopy is included (surgical laparoscopy always includes diagnostic laparoscopy, so no 49320).",
          "Older material would answer with a laparoscopic ventral code (49652), but that code is not in CPT 2026.",
        ],
        answer: "49591 (initial anterior abdominal hernia, under 3 cm, reducible, any approach, mesh included). Verify the measured defect size in the operative note.",
      },
      {
        label: "HARD SCENARIO",
        title: "Two incisional hernias, one stuck",
        scenario: "At a first-time repair through the same scar, the surgeon fixes a 2 cm reducible incisional hernia and, 2 cm away from it, a 4 cm incarcerated incisional hernia. Mesh is placed.",
        steps: [
          "Both are anterior abdominal (incisional), both INITIAL, so we are in 49591–49596.",
          "The defects are less than 10 cm apart, so they are measured together: 2 cm + 2 cm gap + 4 cm = 8 cm total defect length → the 3–10 cm row.",
          "One hernia is reducible and one is incarcerated. When both are repaired in the same session, everything is reported as incarcerated.",
          "3–10 cm, initial, incarcerated → 49594. Report it once; mesh is included.",
        ],
        answer: "49594 (once).",
      },
    ],
  },
  {
    id: "hemorrhoids",
    n: 4,
    title: "Anus & Hemorrhoid Treatment",
    range: "46020–46999",
    intro: [
      "Hemorrhoids are swollen veins of the anus and lower rectum. INTERNAL hemorrhoids sit inside the lining of the lower rectum; EXTERNAL hemorrhoids sit under the skin on the outer edge of the anus.",
      "The Anus section runs: Incision 46020–46083 · Excision 46200–46288 · Introduction 46500–46505 · Endoscopy (anoscopy) 46600–46615 · Repair 46700–46947 · Destruction 46900–46942.",
      "Hemorrhoid codes are picked by TREATMENT first (excise, ligate, inject, destroy), then by whether the hemorrhoid is internal, external, or both, then by how many COLUMNS or GROUPS were treated.",
    ],
    diagram: <HemorrhoidDiagram />,
    definitions: [
      ["Internal hemorrhoid", "located inside the lining of the lower rectum."],
      ["External hemorrhoid", "located beneath the skin on the outer aspect of the anus."],
      ["Column / group", "the anal canal has three major hemorrhoid areas (right posterior, right anterior, and left lateral). 'Single' vs. '2 or more' columns is the key count."],
      ["Thrombosed hemorrhoid", "a hemorrhoid with a blood clot — often very painful."],
    ],
    steps: [
      "① What was DONE — excision, ligation, injection, thermal or cryo destruction, or a scope-based band ligation?",
      "② Internal, external, or both?",
      "③ How many columns or groups? Single column vs. 2 or more picks the pair of codes.",
      "④ Any extra? Fissurectomy or fistulectomy performed at the same time have their own 'with' codes.",
      "⑤ Was it done through a scope (band ligation)? Then the scope code is used, not the hemorrhoid code.",
    ],
    categories: [
      {
        name: "Excision (hemorrhoidectomy)",
        codes: [
          ["46250", "EXTERNAL hemorrhoidectomy, 2 or more columns/groups (single column → unlisted 46999)"],
          ["46320", "Excision of a THROMBOSED external hemorrhoid"],
          ["46255 · 46257 · 46258", "INTERNAL + EXTERNAL, single column/group · with fissurectomy · with fistulectomy (including fissurectomy)"],
          ["46260 · 46261 · 46262", "INTERNAL + EXTERNAL, 2 or more columns/groups · with fissurectomy · with fistulectomy (including fissurectomy)"],
          ["46083", "Incision (not excision) of a thrombosed external hemorrhoid"],
        ],
      },
      {
        name: "Ligation, injection, and destruction",
        codes: [
          ["46221", "Internal hemorrhoidectomy by RUBBER BAND ligation(s)"],
          ["46945 · 46946", "Internal hemorrhoidectomy by ligation OTHER than rubber band, without imaging guidance — single column/group · 2 or more columns/groups"],
          ["46948", "Internal, by transanal hemorrhoidal dearterialization (THD), 2 or more columns/groups, including ultrasound guidance and mucopexy when performed"],
          ["46947", "Hemorrhoidopexy (for example, stapling)"],
          ["46500", "Injection of sclerosing solution, hemorrhoids"],
          ["46930", "Destruction of internal hemorrhoid(s) by THERMAL energy"],
          ["46999", "Destruction by CRYOSURGERY · THD of a single column · external single-column hemorrhoidectomy (unlisted anus)"],
        ],
      },
      {
        name: "Scope-based band ligation",
        codes: [
          ["45350", "Sigmoidoscopy with band ligation (for example hemorrhoids)"],
          ["45398", "Colonoscopy with band ligation (for example hemorrhoids)"],
        ],
      },
    ],
    rules: [
      "46221 (rubber band ligation) is not reported with 45350 or 45398 — the scope code already carries the band ligation.",
      "46948 (THD) is not reported with 46221, 46945, or 46946. Ultrasound guidance is built into 46948, so the imaging codes 76872, 76942, and 76998 are not reported with it — or with 46945 or 46946.",
      "Hemorrhoidectomy codes 46250–46262 are not reported with 46946.",
      "Anoscopy (46600) is not reported with 46020–46947 in the same operative session — it is part of the anal procedure.",
      "Incision of a thrombosed external hemorrhoid (drainage) is 46083; EXCISION of it is 46320.",
    ],
    tips: [
      "Count the columns, not the lumps. Several external hemorrhoids in different columns still make '2 or more columns/groups'.",
      "Scope + rubber band = scope code (45350 or 45398). No scope, band on the anal canal = 46221.",
      "Single-column procedures for external hemorrhoidectomy, cryosurgery, and THD have no dedicated code — they use unlisted 46999.",
    ],
    cases: [
      {
        title: "Postpartum patient, three external hemorrhoids excised",
        scenario: "A 25-year-old female, one week postpartum, complains of extremely painful hemorrhoids. A prominent thrombosed external hemorrhoid was identified at the 7–8 o'clock position and elliptically excised using Bovie electrocautery. Two other large external hemorrhoids at the 5 o'clock and 10–11 o'clock positions were also identified and excised in the same fashion. What CPT code(s) are reported for this service?",
        steps: [
          "Treatment: EXCISION — so we are in the hemorrhoidectomy codes, not ligation, injection, or destruction.",
          "Internal or external? All three are EXTERNAL hemorrhoids.",
          "How many columns/groups? The three sites (5, 7–8, and 10–11 o'clock) are spread around the anus. The 7–8 and 10–11 o'clock sites are several hours apart, so they lie in different columns — that already meets '2 or more columns/groups'.",
          "External hemorrhoidectomy, 2 or more columns → 46250.",
          "Does the thrombosed one get its own code (46320)? 46320 is for excising a thrombosed external hemorrhoid when that is the whole procedure. Here it is one of the external hemorrhoids removed during the multi-column hemorrhoidectomy, so by usual coding convention 46250 covers it and 46320 is not added.",
          "Being one week postpartum affects the DIAGNOSIS coding (ICD-10-CM), not the CPT code.",
        ],
        answer: "46250 (once). Verify in the operative note that at least two columns/groups were treated.",
      },
    ],
  },
];

export default function DigestiveReviewerPart3Page() {
  return (
    <ReviewerShell
      part={3}
      subtitle="Part 3 — Bariatric Surgery, Hernia Repair & Hemorrhoid Treatment (43644–43888, 49491–49659, 46020–46999)"
      sections={sections}
      intro={
        <>
          <strong>Three topics, six solved slide cases.</strong> This part covers Topics 3–5 of the deck. The five hernia questions and one hemorrhoid question from the slides are solved step-by-step in their sections, each with the reasoning path you can reuse on the exam. <strong>Important:</strong> the deck&apos;s hernia slides use codes that were deleted from CPT (for example 49560–49566, 49568, 49652–49657); this page follows the 2026 codebook (49591–49622).
        </>
      }
    />
  );
}
