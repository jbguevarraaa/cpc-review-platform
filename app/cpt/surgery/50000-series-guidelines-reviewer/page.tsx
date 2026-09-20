import { ReviewerShell, type Subsection } from "../_genitourinary/kit";
import { UrinaryEndoscopyDiagram } from "../_genitourinary/diagrams";

const sections: Subsection[] = [
  {
    id: "gu-endoscopy-rules",
    n: 1,
    title: "Genitourinary Endoscopy Rules That Apply Everywhere",
    range: "50551–52700 · 56820–58679",
    intro: [
      "In this section of CPT, codes are grouped by organ first and then by what was done. Endoscopy takes up a big share of it, so learn these few rules once and they work for every scope in Part 1.",
      "Endoscopy means looking inside a hollow organ or canal with a scope, through a natural opening or a stoma. Laparoscopy is a scope passed through small cuts in the belly wall. Both can be used to only LOOK (diagnostic) or to TREAT (therapeutic).",
      "For scopes that go up the urethra, the code depends on HOW FAR THE TIP WENT. For the kidney and ureter, the ROUTE IN matters too. Same scope, different reach or route = a different code family.",
    ],
    diagram: <UrinaryEndoscopyDiagram />,
    definitions: [
      ["Diagnostic endoscopy", "looking only. The code carries the words 'separate procedure', which means it is reported alone only when nothing more was done."],
      ["Surgical (therapeutic) endoscopy", "the scope is used to DO something — biopsy, remove a stone, burn a lesion, place a stent. It always includes the diagnostic look."],
      ["Cystourethroscopy", "a scope passed up the urethra into the bladder. 'Cystoscopy' looks at the bladder, 'urethroscopy' at the urethra — the codebook groups them together."],
      ["Stoma", "a surgically made opening. A scope can enter through one, for example a nephrostomy into the kidney."],
    ],
    steps: [
      "① Which organ was looked at, and how far did the scope tip go? That picks the family — kidney, ureter, bladder/urethra, prostate, vulva, vagina, cervix, uterus, or tube/ovary.",
      "② Which route? Up the urethra, through an existing tract in the body (nephrostomy, ureterostomy), through a cut (nephrotomy, ureterotomy), or through the vagina or belly wall?",
      "③ Was anything DONE besides looking? If yes, report only the therapeutic code — never the diagnostic code with it.",
      "④ Several things done in one look? Read the descriptor and the 'Do not report … with …' lines under the code before you stack codes.",
      "⑤ Small steps that go with the main procedure (opening the urethra, stretching it, passing a catheter) are already inside the main code.",
    ],
    categories: [
      {
        name: "Scope families and where they live",
        codes: [
          ["50551–50580", "RENAL endoscopy (kidney) — through a nephrostomy/pyelostomy or a nephrotomy/pyelotomy"],
          ["50951–50980", "URETERAL endoscopy — through a ureterostomy or a ureterotomy"],
          ["52000–52010", "CYSTOSCOPY / URETHROSCOPY / CYSTOURETHROSCOPY — the diagnostic and catheter codes at the start of the family"],
          ["52204–52356", "TRANSURETHRAL surgery — bladder and urethra treatments, then ureter and kidney treatments through the same scope"],
          ["52400–52700", "Bladder neck and PROSTATE — transurethral work at the outlet (Part 2)"],
          ["56820–56821", "COLPOSCOPY of the VULVA"],
          ["57420–57421", "COLPOSCOPY of the VAGINA"],
          ["57452–57461", "COLPOSCOPY of the CERVIX (including the upper/adjacent vagina)"],
          ["58555–58565", "HYSTEROSCOPY (inside the uterus). 58578 and 58579 are the unlisted codes."],
          ["58660–58679", "LAPAROSCOPY of the fallopian tube (oviduct) and OVARY"],
        ],
      },
    ],
    rules: [
      "A therapeutic scope already contains the diagnostic look. If the doctor looks, finds a problem, and treats it in the same session, report ONLY the therapeutic code.",
      "Examples of the diagnostic 'looking only' codes: cystourethroscopy 52000, cystourethroscopy with ureteroscopy/pyeloscopy 52351, diagnostic hysteroscopy 58555, and diagnostic laparoscopy 49320. Surgical laparoscopy always includes the diagnostic laparoscopy.",
      "Small related steps done at the same time as the main endoscopy are not reported on their own. Examples: opening or stretching the urethra before a prostate resection, or passing a ureteral catheter after removing a stone. If the extra step takes a lot of extra time and effort, the main code can carry modifier 22.",
      "Insertion and removal of a temporary ureteral catheter (52005) during a cystourethroscopy with ureteroscopy is included in 52320–52356 and is not reported.",
    ],
    tips: [
      "Ask 'how far did it go?' before you ask 'what was done?'. The reach decides the family; the technique decides the code inside it.",
      "Endoscopy and laparoscopy get mixed up in conversation, but they are indexed apart. Through an opening = endoscopy. Through the belly wall = laparoscopy.",
    ],
    traps: [
      "Adding 52000 (diagnostic cystourethroscopy) to a therapeutic cystourethroscopy — the treatment code already holds the look.",
      "Thinking 'cystoscopy 52000–52010' is the whole family. Those are only the diagnostic and catheter codes; the treatment codes run 52204–52356.",
    ],
  },
  {
    id: "renal-ureteral",
    n: 2,
    title: "Renal & Ureteral Endoscopy",
    range: "50551–50580 · 50951–50980",
    intro: [
      "Kidney and ureter endoscopy without going up the urethra needs another way in. The scope enters through a tract that already exists (a drainage tube tract) or through a surgical cut into the organ. The way in is part of the code.",
      "Do not mix this up with ureteroscopy done through the bladder: that is reported in the cystourethroscopy family (52351–52356), covered in the next section.",
    ],
    definitions: [
      ["Nephrostomy / pyelostomy", "an opening made through the skin into the kidney or the kidney's collecting area (renal pelvis), usually to drain urine."],
      ["Nephrotomy / pyelotomy", "a surgical cut into the kidney or the renal pelvis, made so a scope can be passed through it."],
      ["Ureterostomy / ureterotomy", "an opening of the ureter through the skin, or a surgical cut into the ureter."],
    ],
    steps: [
      "① Which organ is being looked at — kidney or ureter?",
      "② Through what? An ESTABLISHED tract (nephrostomy, pyelostomy, ureterostomy), or a NEW cut (nephrotomy, pyelotomy, ureterotomy)?",
      "③ Looking only, or doing something — catheter, biopsy, burning or cutting, removing a stone or foreign body, removing a tumor?",
    ],
    categories: [
      {
        name: "Renal endoscopy — through an established nephrostomy or pyelostomy",
        codes: [
          ["50551", "Diagnostic (with or without irrigation, instillation, or ureteropyelography, not counting the radiology service)"],
          ["50553", "With ureteral catheterization, with or without dilation of the ureter"],
          ["50555", "With biopsy"],
          ["50557", "With fulguration and/or incision, with or without biopsy"],
          ["50561", "With removal of a foreign body or calculus (stone)"],
          ["50562", "With resection of a tumor"],
        ],
      },
      {
        name: "Renal endoscopy — through a nephrotomy or pyelotomy",
        codes: [
          ["50570", "Diagnostic"],
          ["50572", "With ureteral catheterization, with or without dilation of the ureter"],
          ["50574", "With biopsy"],
          ["50575", "With endopyelotomy (a cut to open a blocked kidney outlet; includes the scope work, dilation, and a stent)"],
          ["50576", "With fulguration and/or incision, with or without biopsy"],
          ["50580", "With removal of a foreign body or calculus"],
        ],
      },
      {
        name: "Ureteral endoscopy",
        codes: [
          ["50951 · 50970", "Diagnostic — through an established ureterostomy (50951) · through a ureterotomy (50970)"],
          ["50953 · 50972", "With ureteral catheterization, with or without dilation of the ureter"],
          ["50955 · 50974", "With biopsy"],
          ["50957 · 50976", "With fulguration and/or incision, with or without biopsy"],
          ["50961 · 50980", "With removal of a foreign body or calculus"],
        ],
      },
    ],
    rules: [
      "Each code is a diagnostic look PLUS one named step (catheter, biopsy, burn or cut, or removing a stone). The look is never added on top. The steps are not stacked inside each other — a biopsy is not part of a stone removal — so if two different steps were done, check the notes under the codes before you decide.",
      "Removing a stone through these routes is in the 'foreign body or calculus' codes (50561, 50580, 50961, 50980). Breaking a stone up from outside the body (shock wave) is a different code, 50590.",
    ],
    tips: [
      "Read the code number as two choices: which organ (5055x/5057x kidney, 5095x/5097x ureter), then which step (dx, catheter, biopsy, burn/cut, remove).",
      "'Established' means the tract was there before today's session. A brand-new cut into the organ is the nephrotomy/pyelotomy or ureterotomy family.",
    ],
    traps: [
      "Using the kidney codes for a scope that went up the urethra and into the ureter. That is a cystourethroscopy with ureteroscopy (52351–52356).",
    ],
  },
  {
    id: "cystourethroscopy",
    n: 3,
    title: "Cystourethroscopy & Transurethral Surgery",
    range: "52000–52356",
    intro: [
      "This is the biggest urinary family. The scope goes up the urethra, so the first code decides how far it looked: 52000 is the plain diagnostic look, and everything after it adds one treatment.",
      "The treatment codes are grouped by where the work happens — bladder and urethra first, then the ureter and kidney (reached by ureteroscopy).",
    ],
    definitions: [
      ["Fulguration", "destroying tissue with heat or electric current (cautery, laser, or freezing)."],
      ["Resection", "cutting a piece of tissue out."],
      ["Ureteroscopy / pyeloscopy", "passing a thin scope on up the ureter (ureteroscopy) or into the collecting area of the kidney (pyeloscopy)."],
      ["Lithotripsy", "breaking up a stone (with a laser, for example) so it can pass or be removed."],
    ],
    steps: [
      "① Did the scope only go into the urethra and bladder, or up into the ureter or kidney? That splits 52204–52318 from 52320–52356.",
      "② Only looking? Bladder and urethra = 52000. Ureter and kidney too = 52351.",
      "③ Something done? Pick the ONE code that names it. Never add 52000 or 52351.",
      "④ Bladder tumor? The code depends on tumor SIZE: under 0.5 cm, 0.5 to 2.0 cm, 2.0 to 5.0 cm, or over 5 cm.",
      "⑤ Stent left in? Check the 'do not report' lines — some lithotripsy codes already include the stent.",
    ],
    categories: [
      {
        name: "Looking and catheter codes",
        codes: [
          ["52000", "Cystourethroscopy (separate procedure) — the diagnostic base"],
          ["52001", "Irrigation and evacuation of multiple obstructing clots"],
          ["52005", "With ureteral catheterization, with or without irrigation, instillation, or ureteropyelography"],
          ["52007", "With ureteral catheterization and brush biopsy of the ureter and/or renal pelvis"],
          ["52010", "With ejaculatory duct catheterization"],
        ],
      },
      {
        name: "Bladder and urethra treatments",
        codes: [
          ["52204", "Biopsy(s)"],
          ["52214", "Fulguration of the trigone, bladder neck, prostatic fossa, urethra, or periurethral glands"],
          ["52224", "Fulguration or treatment of MINOR lesion(s) — under 0.5 cm — with or without biopsy"],
          ["52234", "Fulguration and/or resection of a SMALL bladder tumor(s) — 0.5 up to 2.0 cm"],
          ["52235", "Fulguration and/or resection of a MEDIUM bladder tumor(s) — 2.0 to 5.0 cm"],
          ["52240", "Fulguration and/or resection of a LARGE bladder tumor(s) — over 5 cm"],
          ["52250", "Insertion of a radioactive substance, with or without biopsy or fulguration"],
          ["52270 · 52275", "Internal urethrotomy — female · male"],
          ["52281 · 52282", "Calibration and/or dilation of a urethral stricture · placement of a permanent urethral stent"],
          ["52283 · 52284", "Steroid injection into a stricture · mechanical dilation with a drug-coated balloon (male)"],
          ["52285 · 52287", "Treatment of the female urethral syndrome · injections for chemodenervation of the bladder"],
          ["52290 · 52300 · 52301", "Ureteral meatotomy · resection or fulguration of an orthotopic · of an ectopic ureterocele (a ureterocele is a balloon-like swelling at the end of the ureter)"],
          ["52310 · 52315", "Removal of a foreign body, stone, or ureteral stent from the urethra or bladder — simple · complicated"],
          ["52317 · 52318", "Litholapaxy (crushing a bladder stone and removing the pieces) — under 2.5 cm · over 2.5 cm"],
        ],
      },
      {
        name: "Ureter and kidney treatments",
        codes: [
          ["52320 · 52325", "Removal of a ureteral calculus · fragmentation of a ureteral calculus"],
          ["52327 · 52330", "Subureteric injection of implant material · manipulation of a stone without removing it"],
          ["52332", "Insertion of an indwelling ureteral stent"],
          ["52334", "Insertion of a ureteral guide wire through the kidney to set up a percutaneous nephrostomy"],
          ["52341 · 52342 · 52343", "Treatment of a ureteral stricture · a ureteropelvic junction stricture · an intra-renal stricture"],
          ["52344 · 52345 · 52346", "The same three stricture treatments, done with ureteroscopy"],
          ["52351", "Ureteroscopy, diagnostic"],
          ["52352 · 52353", "Removal or manipulation of a calculus · with lithotripsy"],
          ["52354 · 52355", "Biopsy and/or fulguration of a ureteral or renal pelvis lesion · resection of a tumor"],
          ["52356", "With lithotripsy, including insertion of an indwelling ureteral stent"],
        ],
      },
    ],
    rules: [
      "A treatment through the cystourethroscope already contains the diagnostic look, so 52000 is not added. Do not report 52000 with 52001, 52320, 52325, 52327, 52330, 52332, 52334, 52341–52343, 52356, or 52443.",
      "The same goes for ureteroscopy: a treatment done through the ureteroscope already contains the diagnostic 52351. 52351 is not reported with 52341–52346 or 52352–52356.",
      "Bladder tumor size bands: MINOR under 0.5 cm (52224) · SMALL 0.5–2.0 cm (52234) · MEDIUM 2.0–5.0 cm (52235) · LARGE over 5 cm (52240).",
      "When several tumors are treated in the same session, coders add their sizes together to pick the band. The printed descriptors give only the size bands (the top band is simply 'large'), so this adding rule is coding guidance rather than codebook text.",
      "A stent placed during a ureteroscopy procedure is added with 52332 and modifier 51 (bilateral: 52332-50). 52332 is NOT added to 52353 or 52356 on the same side — 52356 already includes the stent.",
      "To remove a self-retaining ureteral stent through the scope, use 52310 or 52315 (add modifier 58 when it is a planned, staged follow-up).",
    ],
    tips: [
      "Count the tumors, then add their sizes. Two 5-cm tumors add up to 10 cm, so they fall in the 'over 5 cm' band even though each one alone is only 5 cm.",
      "One clean question sorts the ureter codes: did the stone come out (52352), get broken up (52353), or get broken up AND a stent stay in (52356)?",
    ],
    traps: [
      "Reporting 52000 with any treatment code — the look is already inside the treatment.",
      "Adding 52332 to 52356. Lithotripsy with stent is one code.",
      "Choosing the tumor band from ONE tumor when several were treated in the same session.",
    ],
    cases: [
      {
        title: "Two bladder tumors, each 5 cm",
        scenario: "A physician performs a cystourethroscopy with fulguration and resection of two 5-cm bladder tumors. How should this service be reported?",
        steps: [
          "Where did the work happen? Inside the bladder, through a scope up the urethra — so this is the cystourethroscopy family, bladder and urethra treatments.",
          "Was anything done besides looking? Yes — fulguration and resection of tumors. So we never report the diagnostic 52000.",
          "The tumor codes are chosen by SIZE. Two tumors were treated in the same session, so add the sizes: 5 cm + 5 cm = 10 cm total.",
          "10 cm is over 5 cm, so the band is LARGE → 52240.",
          "Report the code ONCE. The descriptor says 'tumor(s)', so one code covers one or many tumors in the same band.",
        ],
        answer: "52240 (once). Note: adding the tumor sizes is coding guidance, not printed in the codebook; a single 5-cm tumor by itself would be MEDIUM (52235).",
      },
      {
        label: "HARD SCENARIO",
        title: "Stone lithotripsy with a stent left in",
        scenario: "Through a cystourethroscope, the surgeon passes a ureteroscope up the left ureter, breaks a stone with a laser, and leaves a double-J stent in the left ureter. What is reported?",
        steps: [
          "The scope went up the ureter, so this is the ureteroscopy group: 52351–52356.",
          "A stone was broken up (lithotripsy) → 52353. A stent was also inserted.",
          "There is a single code for lithotripsy INCLUDING the stent: 52356.",
          "52332 (the stent code) is not reported with 52353 or 52356 on the same side, and 52351 is not added to any treatment code.",
        ],
        answer: "52356",
      },
    ],
  },
  {
    id: "female-endoscopy",
    n: 4,
    title: "Female Genital Endoscopy — Colposcopy, Hysteroscopy & Tube/Ovary Laparoscopy",
    range: "56820–56821 · 57420–57465 · 58555–58579 · 58660–58679",
    intro: [
      "The female genital scopes are named for the place they look at: the vulva, vagina, cervix, inside of the uterus (hysteroscopy), or the tubes and ovaries (laparoscopy).",
      "Colposcopy uses a magnifying scope with the light held OUTSIDE the body to look at the surface. Hysteroscopy passes a thin scope through the cervix into the uterus. Laparoscopy of the tubes and ovaries goes through the belly wall.",
    ],
    definitions: [
      ["Colposcopy", "a magnified look at the vulva, vagina, or cervix."],
      ["Endocervical curettage (ECC)", "scraping the inside of the cervical canal to collect tissue."],
      ["LEEP", "loop electrosurgical excision procedure — a wire loop cuts out cervical tissue."],
      ["Hysteroscopy", "a thin scope passed through the cervix to look inside the uterus."],
    ],
    steps: [
      "① Which structure was examined — vulva, vagina, cervix, inside the uterus, or the tubes and ovaries?",
      "② Looking only, or a biopsy / removal / treatment as well?",
      "③ Cervix only: what was taken — a biopsy, the canal scraping (ECC), both, or a LEEP piece? Each combination has its own code.",
      "④ Laparoscopy: the surgical code already includes the diagnostic laparoscopy (49320).",
    ],
    categories: [
      {
        name: "Colposcopy",
        codes: [
          ["56820 · 56821", "Colposcopy of the VULVA · with biopsy(s)"],
          ["57420 · 57421", "Colposcopy of the entire VAGINA, with the cervix if present · with biopsy(s) of the vagina/cervix"],
          ["57452", "Colposcopy of the CERVIX, including the upper/adjacent vagina — diagnostic"],
          ["57454", "With biopsy(s) of the cervix AND endocervical curettage"],
          ["57455 · 57456", "With biopsy(s) of the cervix only · with endocervical curettage only"],
          ["57460 · 57461", "With LEEP biopsy of the cervix · with LEEP conization of the cervix"],
          ["+57465", "ADD-ON: computer-aided mapping of the cervix during colposcopy"],
          ["+58110", "ADD-ON: endometrial sampling (biopsy) done together with colposcopy"],
        ],
      },
      {
        name: "Hysteroscopy",
        codes: [
          ["58555", "Diagnostic hysteroscopy (separate procedure)"],
          ["58558", "Surgical: sampling (biopsy) of the endometrium and/or polypectomy, with or without D&C"],
          ["58559", "With lysis of intrauterine adhesions (any method)"],
          ["58560", "With division or resection of an intrauterine septum (any method)"],
          ["58561", "With removal of leiomyomata (fibroids)"],
          ["58562", "With removal of an impacted foreign body"],
          ["58565", "With bilateral fallopian tube cannulation to cause blockage by placing permanent implants"],
          ["58563", "With endometrial ablation"],
          ["58578 · 58579", "Unlisted laparoscopy of the uterus · unlisted hysteroscopy of the uterus"],
        ],
      },
      {
        name: "Laparoscopy of the oviduct and ovary",
        codes: [
          ["58660", "With lysis of adhesions (salpingolysis, ovariolysis)"],
          ["58661", "With removal of adnexal structures (partial or total oophorectomy and/or salpingectomy)"],
          ["58662", "With fulguration or excision of lesions of the ovary, pelvic viscera, or peritoneal surface"],
          ["58670 · 58671", "With fulguration of the oviducts · with occlusion of the oviducts by a device (band, clip, or Falope ring)"],
          ["58672 · 58673", "With fimbrioplasty · with salpingostomy (each is one side; bilateral takes modifier 50)"],
          ["58679", "Unlisted laparoscopy procedure of the oviduct or ovary"],
        ],
      },
    ],
    rules: [
      "For the cervix, do not report 57452 in addition to 57454–57461 — the diagnostic look is inside the codes that do more. Do not report 57461 with 57456.",
      "Surgical laparoscopy always includes diagnostic laparoscopy. To report a diagnostic laparoscopy alone, use 49320. To report a diagnostic hysteroscopy alone, use 58555.",
      "For a bilateral laparoscopic removal of adnexal structures (58661), report the code with modifier 50. 58672 and 58673 are one-sided codes, so bilateral takes modifier 50 too.",
      "Colposcopy of the vulva, vagina, and cervix each have their own code families — pick the family for the structure examined.",
    ],
    tips: [
      "Cervix colposcopy code memory: 4 = biopsy + ECC together, 5 = only one of them (55 biopsy, 56 ECC), 6 = LEEP (60 biopsy, 61 conization).",
      "'Hysteroscopy' = inside the uterus. 'Laparoscopy' = through the belly wall. They are indexed apart even when both are done in one session.",
    ],
    traps: [
      "Adding 57452 to a cervical biopsy code. The biopsy code already includes the colposcopy.",
      "Coding the diagnostic laparoscopy (49320) or hysteroscopy (58555) with a surgical code from the same family.",
    ],
    cases: [
      {
        label: "HARD SCENARIO",
        title: "Colposcopy of the cervix with a biopsy and a canal scraping",
        scenario: "A patient with an abnormal Pap smear has a colposcopy of the cervix. The doctor takes a biopsy of the cervix and also does an endocervical curettage in the same session.",
        steps: [
          "The structure examined is the cervix (including the upper vagina), so we are in 57452–57461.",
          "Something was done: a biopsy AND an endocervical curettage. The code that names both together is 57454.",
          "57452 (diagnostic), 57455 (biopsy only), and 57456 (ECC only) are not added — 57454 already holds all three.",
        ],
        answer: "57454",
      },
    ],
  },
];

export default function GenitourinaryReviewerPart1Page() {
  return (
    <ReviewerShell
      part={1}
      subtitle="Part 1 — Urinary, Male Genital & Female Genital Endoscopy (50551–52356, 56820–58679)"
      sections={sections}
      intro={
        <>
          <strong>How this series is organized.</strong> The 50,000 series follows your training deck: (1) Code listing, (2) Endoscopy of the urinary and male genital system, (3) Endoscopy of the female genital system, (4) Hysterectomies, (5) Procedures on the prostate, (6) Maternal care and delivery. Part 1 covers Topics 2 and 3 (the endoscopies), Part 2 covers Topics 4 and 5 (hysterectomy and prostate), and Part 3 covers Topic 6 (maternal care and delivery). Every code and rule was cross-checked against the 2026 CPT codebook, and the guidelines are paraphrased, not copied. Where the deck differs from CPT 2026, this reviewer follows the codebook and says so.
        </>
      }
    />
  );
}
