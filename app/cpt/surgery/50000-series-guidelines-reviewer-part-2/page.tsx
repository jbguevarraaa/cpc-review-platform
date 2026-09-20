import { ReviewerShell, type Subsection } from "../_genitourinary/kit";
import { HysterectomyGridDiagram } from "../_genitourinary/diagrams";

const sections: Subsection[] = [
  {
    id: "hysterectomy",
    n: 1,
    title: "Hysterectomies & Myomectomies",
    range: "58140–58294 · 58541–58554 · 58570–58573 · 58545–58546",
    intro: [
      "A hysterectomy removes the uterus. The code depends on HOW it is done. For a standard total or supracervical hysterectomy it also depends on the route (open belly, vaginal, or laparoscopic) — and, for every route except the open belly, on whether the tubes and ovaries come out and how much the uterus weighs.",
      "The open ABDOMINAL hysterectomy is the exception. Its codes do not change for tube or ovary removal, and they do not change for uterine weight. The vaginal and laparoscopic routes use both. Radical hysterectomies and the codes with a vaginectomy or lymph node work have their own single codes, with no weight split. The grid below shows the standard codes at a glance.",
    ],
    diagram: <HysterectomyGridDiagram />,
    definitions: [
      ["Total hysterectomy", "the uterus AND the cervix are removed."],
      ["Supracervical (subtotal) hysterectomy", "the body of the uterus is removed but the cervix is left in place."],
      ["Radical hysterectomy", "the uterus plus the surrounding tissue, usually done with lymph node work for cancer."],
      ["Myomectomy", "removing fibroid tumors (myomas) from the uterus while the uterus stays."],
      ["Laparoscopic-assisted vaginal hysterectomy", "the uterus is freed through small belly cuts and then taken out through the vagina."],
      ["Enterocele", "a bulge of small bowel pushing down against the wall of the vagina. Repairing it has its own codes."],
      ["Intramural vs. surface myoma", "an intramural myoma grows inside the wall of the uterus; a surface myoma grows on the outside of it."],
      ["Lymphadenectomy", "removing lymph nodes (sampling or biopsy takes only some of them)."],
    ],
    steps: [
      "① Which approach? Open abdominal, vaginal, laparoscopic-assisted vaginal, laparoscopic total, or laparoscopic supracervical?",
      "② Total, supracervical, or radical? (Radical has its own codes for every approach.)",
      "③ Vaginal or laparoscopic (standard hysterectomy): how much did the uterus weigh — 250 g or less, or over 250 g? The note has to state it.",
      "④ Vaginal or laparoscopic (standard hysterectomy): were the tube(s) and/or ovary(s) also removed?",
      "⑤ Any extra that has its own code — repair of an enterocele, a bladder-neck lift (colpo-urethrocystopexy), removal of part of the vagina, or lymph node sampling?",
    ],
    categories: [
      {
        name: "Open abdominal hysterectomy (weight and tube/ovary removal do NOT matter)",
        codes: [
          ["58150", "Total abdominal hysterectomy (corpus and cervix), with or without removal of tube(s), with or without ovary(s)"],
          ["58152", "The same, with colpo-urethrocystopexy (bladder-neck lift)"],
          ["58180", "Supracervical abdominal hysterectomy (subtotal), with or without removal of tube(s) and/or ovary(s)"],
          ["58200", "Total, with partial vaginectomy and para-aortic and pelvic lymph node sampling"],
          ["58210", "RADICAL abdominal hysterectomy with bilateral total pelvic lymphadenectomy and para-aortic node sampling"],
          ["58240", "Pelvic exenteration for gynecologic malignancy"],
        ],
      },
      {
        name: "Vaginal hysterectomy — weight and tube/ovary removal DO matter",
        codes: [
          ["58260 · 58262", "Uterus 250 g or less — uterus only · with removal of tube(s) and/or ovary(s)"],
          ["58263 · 58267 · 58270", "250 g or less: with tube/ovary removal AND enterocele repair · with colpo-urethrocystopexy · with enterocele repair"],
          ["58275 · 58280", "Vaginal hysterectomy with total or partial vaginectomy · the same with enterocele repair (these two have no weight split)"],
          ["58285", "Radical vaginal hysterectomy (Schauta type)"],
          ["58290 · 58291", "Uterus OVER 250 g — uterus only · with removal of tube(s) and/or ovary(s)"],
          ["58292 · 58293 · 58294", "Over 250 g: with tube/ovary removal AND enterocele repair · with colpo-urethrocystopexy · with enterocele repair"],
        ],
      },
      {
        name: "Laparoscopic hysterectomy — weight and tube/ovary removal DO matter",
        codes: [
          ["58541 · 58542", "Supracervical, 250 g or less — uterus only · with tube(s)/ovary(s)"],
          ["58543 · 58544", "Supracervical, over 250 g — uterus only · with tube(s)/ovary(s)"],
          ["58548", "RADICAL laparoscopic hysterectomy with bilateral total pelvic lymphadenectomy and para-aortic node sampling"],
          ["58550 · 58552", "Laparoscopic-assisted VAGINAL, 250 g or less — uterus only · with tube(s)/ovary(s)"],
          ["58553 · 58554", "Laparoscopic-assisted VAGINAL, over 250 g — uterus only · with tube(s)/ovary(s)"],
          ["58570 · 58571", "Laparoscopic TOTAL, 250 g or less — uterus only · with tube(s)/ovary(s)"],
          ["58572 · 58573", "Laparoscopic TOTAL, over 250 g — uterus only · with tube(s)/ovary(s)"],
          ["58575", "Laparoscopic total hysterectomy for resection of malignancy (tumor debulking), with omentectomy"],
        ],
      },
      {
        name: "Myomectomy (the uterus stays)",
        codes: [
          ["58140 · 58145", "1 to 4 intramural myomas, total weight 250 g or less, and/or removal of surface myomas — abdominal · vaginal approach"],
          ["58146", "5 or more intramural myomas and/or total weight over 250 g — abdominal approach"],
          ["58545 · 58546", "LAPAROSCOPIC myomectomy — 1 to 4 myomas (250 g or less) and/or surface myomas · 5 or more myomas and/or over 250 g"],
        ],
      },
    ],
    rules: [
      "Open ABDOMINAL hysterectomy codes are not affected by removal of the fallopian tubes or ovaries, and are not affected by the weight of the uterus.",
      "A standard total or supracervical hysterectomy by the vaginal, laparoscopic-assisted vaginal, or laparoscopic route IS affected by tube or ovary removal and by uterine weight. The benchmark is 250 g. Radical hysterectomy (58210, 58285, 58548), 58200, 58240, 58275, 58280, and 58575 have no weight or tube/ovary split.",
      "The weight is the surgical specimen weight from the record or the pathology report. If it is not documented, ask — a coder cannot guess it.",
      "The laparoscopic hysterectomy codes are not reported with diagnostic laparoscopy (49320), with myomectomy codes (58140–58146, 58545, 58546), with hysteroscopic fibroid removal (58561), or with the laparoscopic tube and ovary codes 58661, 58670, and 58671.",
      "Do not report 58146 in addition to 58140–58145 or in addition to the hysterectomy codes 58150–58240.",
    ],
    tips: [
      "Ask in this order: approach → total, supracervical, or radical → (if not open abdominal) weight → (if not open abdominal) tubes/ovaries.",
      "Memory hook: 'Open belly = simple.' Cutting the belly open makes the code independent of weight and ovaries. The vaginal and laparoscopic routes for a standard hysterectomy use both.",
    ],
    traps: [
      "Using the weight or the ovary removal to pick an open abdominal code. There is no such split for 58150 or 58180.",
      "Forgetting the weight for a vaginal or laparoscopic hysterectomy. 250 g is a hard line — 255 g is in the 'over 250 g' group.",
      "Adding a separate code for removal of the tubes or ovaries when the hysterectomy code already says 'with removal of tube(s) and/or ovary(s)'.",
    ],
    cases: [
      {
        title: "Vaginal hysterectomy with the tubes removed, uterus 255 g",
        scenario: "A physician performs a vaginal hysterectomy with removal of the patient's fallopian tubes. The uterus was 255 grams. How should this service be reported?",
        steps: [
          "Approach: vaginal. Vaginal hysterectomy is NOT an open abdominal type, so both the weight and the tube removal change the code.",
          "Weight: 255 g is over the 250 g benchmark, so we use the 'greater than 250 g' group: 58290 to 58294.",
          "Tubes: the fallopian tubes were removed too. The code 'with removal of tube(s) and/or ovary(s)' in that group is 58291.",
          "Nothing was said about repairing an enterocele or a bladder-neck lift, so the versions with those extras (58292–58294) do not apply.",
        ],
        answer: "58291",
      },
      {
        label: "HARD SCENARIO",
        title: "Open abdominal total hysterectomy, both ovaries out, uterus 400 g",
        scenario: "A patient has an open abdominal total hysterectomy with removal of both ovaries and both tubes. The uterus weighs 400 g.",
        steps: [
          "Approach: open abdominal, total (uterus and cervix). That is the 58150 group.",
          "Weight and ovary/tube removal do NOT change an open abdominal hysterectomy code. 58150 already reads 'with or without removal of tube(s), with or without removal of ovary(s)'.",
          "So there is no 'over 250 g' version and no add-on for the ovaries.",
        ],
        answer: "58150",
      },
      {
        label: "HARD SCENARIO",
        title: "Laparoscopic supracervical hysterectomy, 300 g, with the tubes",
        scenario: "A surgeon does a laparoscopic supracervical hysterectomy (the cervix is left) and also removes both tubes. The uterus weighs 300 g.",
        steps: [
          "Approach: laparoscopic, supracervical → 58541–58544.",
          "Weight: 300 g is over 250 g → 58543 or 58544.",
          "Tubes removed → 'with removal of tube(s) and/or ovary(s)' = 58544.",
          "The diagnostic laparoscopy (49320) is not added — surgical laparoscopy already includes it.",
        ],
        answer: "58544",
      },
    ],
  },
  {
    id: "prostate",
    n: 2,
    title: "Procedures on the Prostate",
    range: "52601–52649 · 53850–53854 · 55801–55873",
    intro: [
      "The prostate is a gland below the bladder that wraps around the first part of the urethra. When it overgrows, it can be treated through the urethra (transurethral) or by an open operation.",
      "Prostate codes are built to include a set of small steps done with them: control of bleeding after the operation, vasectomy, meatotomy, calibration and dilation of the urethra, and internal urethrotomy. You do not report those on their own.",
    ],
    definitions: [
      ["TURP", "transurethral resection of the prostate — the surgeon removes prostate tissue with an electrical cutting loop through a scope up the urethra."],
      ["Ways to treat an overgrowth", "cut it out (resection), laser vaporization, laser enucleation, waterjet ablation, or heat (microwave or radiofrequency) destruction. Laser coagulation used to have its own code, 52647, which is deleted."],
      ["Open approaches", "PERINEAL (through the skin between the scrotum and anus), SUPRAPUBIC (above the pubic bone, into the bladder), or RETROPUBIC (behind the pubic bone)."],
      ["Radical vs. subtotal", "radical = the whole gland with the tissues around it (usually for cancer). Subtotal = only part of the gland, for benign overgrowth."],
    ],
    steps: [
      "① Through the urethra (transurethral), or an open operation?",
      "② Transurethral: which technique — electrical resection (52601), laser vaporization (52648), laser enucleation (52649), waterjet (52597), or heat (53850–53854)?",
      "③ Is this the FIRST treatment, or regrowth of prostate that was treated before? (Regrowth = 52630.)",
      "④ Was the resection done in stages? Later stages take modifier 58.",
      "⑤ Open: which way in — perineal, suprapubic, or retropubic — and radical or subtotal?",
      "⑥ Radical (open or laparoscopic): was any lymph node work done? That is built into the code (none, limited pelvic node biopsy, or full pelvic lymphadenectomy).",
    ],
    categories: [
      {
        name: "Transurethral (through the urethra)",
        codes: [
          ["52601", "Transurethral electrosurgical resection of prostate (TURP), complete — includes control of postoperative bleeding, vasectomy, meatotomy, cystourethroscopy, urethral calibration/dilation, and internal urethrotomy"],
          ["52630", "Transurethral resection of RESIDUAL or REGROWTH of obstructive prostate tissue (same included steps)"],
          ["52597", "NEW: transurethral robotic-assisted waterjet resection of prostate (transurethral waterjet ablation now goes here)"],
          ["52648 · 52649", "Laser vaporization of prostate · laser enucleation of prostate with morcellation"],
          ["52500 · 52640", "Transurethral resection of the bladder neck · of a postoperative bladder neck contracture"],
          ["52450", "Transurethral incision of the prostate"],
          ["52441 · +52442", "Insertion of a permanent adjustable transprostatic implant — the first implant · each additional implant (add-on)"],
          ["53850 · 53852 · 53854", "Transurethral destruction of prostate tissue by microwave thermotherapy · by radiofrequency thermotherapy · by radiofrequency water vapor thermotherapy"],
        ],
      },
      {
        name: "Open prostatectomy",
        codes: [
          ["55801", "PERINEAL, subtotal (includes the small included steps)"],
          ["55810 · 55812 · 55815", "PERINEAL, radical — alone · with limited pelvic lymph node biopsy(s) · with bilateral pelvic lymphadenectomy"],
          ["55821", "SUPRAPUBIC, subtotal, one or two stages"],
          ["55831", "RETROPUBIC, subtotal"],
          ["55840 · 55842 · 55845", "RETROPUBIC, radical (with or without nerve sparing) — alone · with limited pelvic lymph node biopsy(s) · with bilateral pelvic lymphadenectomy"],
          ["55866 · 55868 · 55869", "LAPAROSCOPIC radical prostatectomy (includes robotic assistance) — alone · with limited pelvic lymph node biopsy(s) · with bilateral pelvic lymphadenectomy"],
          ["55873", "Cryosurgical ablation of the prostate"],
        ],
      },
    ],
    rules: [
      "TURP can be a complete procedure or a staged one. Complete: 52601. Staged: 52601 for the first stage, then 52601 with modifier 58 for the second stage.",
      "TURP on REGROWTH of previously treated prostate is 52630. If the regrowth is treated within the postoperative period of a related procedure by the same physician (unplanned), add modifier 78: 52630-78.",
      "Radical prostatectomies, open or laparoscopic, have the lymph node work built into the code: each set is split into 'alone', 'with limited pelvic lymph node biopsy', and 'with bilateral pelvic lymphadenectomy'.",
      "52597 is not reported with 52500, 52601, 52630, or 76872. Do not report 52649 with 52000, 52601, or 52648.",
      "Modifier 58 = a planned, staged procedure. Modifier 78 = an UNPLANNED return to the operating room for a related problem. They are not interchangeable. 'Postoperative period' means the global period of the first operation (90 days for a TURP).",
      "The codebook prints 78 next to 52630. The 58 for a staged TURP comes from the definition of modifier 58 (a planned or staged procedure in the postoperative period), not from a note under 52601.",
      "Fulguration of the prostate for bleeding after 52601 or 52630 by the same surgeon carries a codebook note to add modifier 78 (under 52214 and 52224).",
      "55821 (suprapubic subtotal prostatectomy) already says 'one or two stages' in its descriptor, so a second stage needs no modifier 58.",
    ],
    tips: [
      "Prostate first question: through the urethra or through the skin? Then the technique.",
      "'Regrowth' is a code by itself (52630) — it does not depend on how the first treatment was done.",
      "The lymph node work is part of the radical code. Do not add a separate lymph node code for the standard pelvic lymph node biopsy or lymphadenectomy.",
    ],
    traps: [
      "Reporting a separate vasectomy, meatotomy, urethral dilation, or cystourethroscopy with a TURP — they are included.",
      "Using 52601 again (without a modifier) for stage 2 of a staged TURP.",
      "Using modifier 58 when the return was unplanned (that is 78), or modifier 78 when the second stage was planned from the start (that is 58).",
      "Looking for a 52647 laser coagulation code — that code was deleted. Use the current laser and waterjet codes.",
    ],
    cases: [
      {
        label: "HARD SCENARIO",
        title: "Staged TURP",
        scenario: "The urologist plans a TURP in two stages because of a large gland. Stage one is done today. The second stage is done three weeks later by the same surgeon. How is each stage reported?",
        steps: [
          "The technique is transurethral electrosurgical resection of the prostate: 52601.",
          "Stage one is reported as the plain code: 52601.",
          "Stage two was PLANNED as part of the same treatment. It is a staged procedure during the postoperative period, so it takes modifier 58.",
          "The small included steps (cystoscopy, urethral dilation, meatotomy, and so on) are not added at either stage.",
        ],
        answer: "Stage 1: 52601 · Stage 2: 52601-58",
      },
      {
        label: "HARD SCENARIO",
        title: "Regrowth treated during the postoperative period",
        scenario: "Ten days after a TURP, the same surgeon has to go back to the operating room to resect residual prostate tissue that is still blocking the flow. This was not planned.",
        steps: [
          "Residual or regrowth of obstructive prostate tissue has its own code: 52630 (not a second 52601).",
          "It is inside the postoperative period of a related procedure done by the same physician.",
          "The return was unplanned, so the modifier is 78 (an unplanned return to the operating room for a related procedure).",
        ],
        answer: "52630-78",
      },
    ],
  },
];

export default function GenitourinaryReviewerPart2Page() {
  return (
    <ReviewerShell
      part={2}
      subtitle="Part 2 — Hysterectomies & Myomectomies, and Procedures on the Prostate (58140–58294, 58541–58573, 52601–55873)"
      sections={sections}
      intro={
        <>
          <strong>Two big ideas.</strong> Hysterectomy: the approach picks the family, and everything except the open abdominal hysterectomy also uses the 250 g weight line and tube/ovary removal. Prostate: through the urethra or through the skin first, then the technique — and a regrowth has its own code. The vaginal hysterectomy slide question (uterus 255 g, tubes removed) is solved step by step in Section 1, with harder scenarios after it.
        </>
      }
    />
  );
}
