import { SeriesSchematicPage, type SchematicNode } from "../_digestive/schematic";
import { INDIGO } from "../_digestive/players";

const nodes: SchematicNode[] = [
  {
    n: 1,
    title: "Chapter Map",
    range: "50010–59899",
    points: [
      "50K — Kidney and ureter",
      "51K–52K — Bladder (includes cystoscopy and the transurethral bladder-neck/prostate codes)",
      "53K — Urethra · 54K–55K — Rest of the male system (penis, testis, epididymis, prostate)",
      "56K–58K — Female genitalia, vagina/cervix, uterus/tubes/ovaries (includes hysterectomy)",
      "59K — Maternal care and delivery",
    ],
    callout: "Read the first two digits as a body-region map before you ever open the descriptor.",
  },
  {
    n: 2,
    title: "Renal Transplantation",
    range: "50300–50380",
    points: [
      "3 separately-billable jobs: donor nephrectomy → backbench work → recipient allotransplantation",
      "Cadaver nephrectomy (50300): harvest + cold preservation only",
      "Living donor nephrectomy (50320 open · 50547 laparoscopic): harvest + cold preservation + care of the donor",
      "Backbench standard prep (50323 cadaver · 50325 living) vs. additional reconstruction (50327–50329, each anastomosis)",
    ],
    callout: "Autotransplantation (the patient's own kidney) is one single code, 50380 — not part of this 3-way split.",
  },
  {
    n: 3,
    title: "Endoscopy Ground Rules",
    points: [
      "Two questions for every scope: which organ/how far did the tip go, and which route in?",
      "A therapeutic (surgical) scope code already contains the diagnostic look — never add the diagnostic code on top",
      "Minor related steps (calibration, catheter passage, meatotomy) are bundled into the main code",
      "Extra time/effort on a bundled minor step → modifier 22 on the main code, not a second code",
    ],
    callout: "\"How far did it go?\" picks the family; \"what was done?\" picks the code inside it.",
  },
  {
    n: 4,
    title: "Renal & Ureteral Endoscopy",
    range: "50551–50580 · 50951–50980",
    points: [
      "Kidney: through an established nephrostomy/pyelostomy tract, or a new nephrotomy/pyelotomy cut",
      "Ureter: through a ureterostomy (established) or a ureterotomy (new cut)",
      "Each code = diagnostic look + ONE named step (catheter, biopsy, fulguration/incision, or stone removal)",
      "Not the same as ureteroscopy through the bladder — that's the cystourethroscopy family (52351–52356)",
    ],
  },
  {
    n: 5,
    title: "Cystourethroscopy & Transurethral Surgery",
    range: "52000–52356",
    points: [
      "52000 = plain diagnostic look; every treatment code replaces it, never adds to it",
      "Bladder tumor size bands: minor <0.5 cm (52224) · small 0.5–2 cm (52234) · medium 2–5 cm (52235) · large >5 cm (52240)",
      "Multiple tumors treated in one session: add their sizes to pick the band",
      "Ureter/kidney via ureteroscopy: stone out (52352) vs. broken up (52353) vs. broken up with stent left in (52356 — don't also add 52332)",
    ],
    callout: "Two 5-cm tumors add to 10 cm — that's the LARGE band, even though each alone is only MEDIUM.",
  },
  {
    n: 6,
    title: "Female Genital Endoscopy",
    range: "56820–56821 · 57420–57461 · 58555–58579 · 58660–58679",
    points: [
      "Colposcopy = magnified look, light held outside the body (vulva 568xx · vagina 5742x · cervix 5745x/546x)",
      "Cervix colposcopy pattern: 54 = biopsy + ECC together · 55/56 = only one of them · 60/61 = LEEP",
      "Hysteroscopy = scope through the cervix into the uterus (58555 diagnostic → 58558–58565 treatments)",
      "Laparoscopy of tube/ovary always includes the diagnostic laparoscopy (49320 is never added on top)",
    ],
  },
  {
    n: 7,
    title: "Hysterectomies & Myomectomies",
    range: "58150–58294 · 58541–58575",
    points: [
      "Approach picks the family: open abdominal, vaginal, or laparoscopic",
      "Open abdominal (58150, 58180) — weight and tube/ovary removal do NOT change the code",
      "Vaginal and laparoscopic — BOTH matter: 250 g uterine-weight line, and whether tube(s)/ovary(s) came out too",
      "Myomectomy (58140–58146, 58545–58546) removes only fibroids — the uterus stays",
    ],
    callout: "\"Open belly = simple.\" Cutting the belly open is the one approach where weight and ovaries don't move the code.",
  },
  {
    n: 8,
    title: "Procedures on the Prostate",
    range: "52441–52649 · 53850–53854 · 55801–55873",
    points: [
      "Transurethral (through the urethra) vs. open (perineal, suprapubic, retropubic, or laparoscopic)",
      "TURP techniques: resection (52601) · laser vaporization (52648) · laser enucleation (52649) · waterjet (52597) · heat/thermotherapy (53850–53854)",
      "Complete TURP = 52601 once; planned staged 2nd stage = 52601-58; regrowth of prostate tissue = 52630 (unplanned return in the postop period = 52630-78)",
      "Radical open/laparoscopic prostatectomy bundles the lymph-node work right into the code (alone / limited biopsy / full lymphadenectomy)",
    ],
    callout: "58 = planned/staged. 78 = unplanned return for a related problem. They are never interchangeable.",
  },
  {
    n: 9,
    title: "Maternal Care & Delivery",
    range: "59400–59622",
    points: [
      "The global package = antepartum + delivery + postpartum, same physician — bill only the parts your doctor actually gave",
      "Every delivery type has the same 3-code shape: global / delivery+postpartum / delivery-only",
      "Vaginal 59400/59410/59409 · Cesarean 59510/59515/59514 · VBAC 59610/59614/59612 · Failed VBAC→cesarean 59618/59622/59620",
      "Outside the package: external cephalic version (59412, added on), hysterectomy at cesarean (+59525)",
    ],
    callout: "A prior cesarean plus a planned vaginal attempt is ALWAYS the VBAC family — even if it ends in another cesarean.",
  },
];

export default function GenitourinarySchematicPage() {
  return (
    <SeriesSchematicPage
      theme={INDIGO}
      kicker="GENITOURINARY (50,000) SERIES · STRATEGIC SCHEMATIC"
      title="The 50,000 Series at a Glance"
      blurb="The whole 50010–59899 chapter as one visual roadmap — kidney and ureter down to maternal care, nine stops top to bottom."
      nav={[
        { href: "/cpt/surgery/50,000", label: "50,000 Series home" },
        { href: "/cpt/surgery/50000-series-guidelines-reviewer", label: "Reviewer Pt. 1" },
        { href: "/cpt/surgery/50000-series-guidelines-reviewer-part-2", label: "Pt. 2" },
        { href: "/cpt/surgery/50000-series-guidelines-reviewer-part-3", label: "Pt. 3" },
        { href: "/cpt/surgery/50000-series-discussion-guide", label: "Discussion Guide" },
      ]}
      backHref="/cpt/surgery/50,000"
      backLabel="← Back to the 50,000 Series"
      nodes={nodes}
      strategyTitle="The Biggest CPC Strategy for the 50,000 Series"
      strategyText={
        <>
          <p style={{ margin: "0 0 10px" }}>Every code in this series answers the same chain of questions, in the same order, no matter which organ you land on:</p>
          <p style={{ margin: "0 0 10px", fontWeight: 800, fontSize: "17px" }}>BODY REGION → ROUTE/APPROACH → WAS ANYTHING DONE BEYOND LOOKING? → WHAT DOES THE DESCRIPTOR COUNT? → TIMING MODIFIER</p>
          <p style={{ margin: "0 0 10px" }}>Watch it work on a staged TURP: region and approach put you in the transurethral prostate family (52601). Something was done beyond looking, so the diagnostic cystoscopy is never added. The descriptor doesn't count size or weight here — it counts STAGES, so a planned second stage three weeks later is 52601-58. If instead an unplanned regrowth shows up ten days later, the code itself changes (52630, not another 52601) and the modifier flips to 78 because the return was unplanned, not staged.</p>
          <p style={{ margin: 0 }}>The same chain resolves a bladder tumor (region + route → cystourethroscopy → something removed → sizes added together → no modifier needed) and a vaginal hysterectomy (region + approach → something removed → weight AND tubes/ovaries both counted → modifier only if an extra like enterocele repair is documented). Work the chain in order and the five-digit code stops being memorized — it becomes something you build.</p>
        </>
      }
    />
  );
}
