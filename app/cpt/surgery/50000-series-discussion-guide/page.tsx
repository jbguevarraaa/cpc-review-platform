import { DiscussionGuidePage, DGList, DGSteps, type DGTopic } from "../_digestive/discussion-guide";
import { INDIGO } from "../_digestive/players";

const topics: DGTopic[] = [
  {
    n: 1,
    title: "Organization of the Chapter",
    range: "50010–59899",
    items: [
      {
        q: "Be able to identify the organization of the Chapter (e.g., 50K is Kidney and Ureter).",
        approach: "Use the first two digits of the code as a body-region map — don't memorize every number, memorize the nine blocks.",
        answer: (
          <>
            <p style={{ margin: "0 0 8px" }}>The Genitourinary System chapter is organized head-to-toe (kidney down to the reproductive organs), then ends with maternity care. Reading the first two digits tells you the region before you even look at the descriptor:</p>
            <DGList
              items={[
                "50K — Kidney and ureter (50010–50980)",
                "51K–52K — Bladder, including cystoscopy and the transurethral bladder-neck/prostate codes (51020–52700)",
                "53K — Urethra (53000–53899)",
                "54K — Penis, testis, and epididymis (54000–54901)",
                "55K — The rest of the male system: tunica vaginalis, scrotum, vas deferens, spermatic cord, seminal vesicles, and the prostate (55000–55899)",
                "56K — External female genitalia: vulva, perineum, and introitus (56405–56821)",
                "57K — Vagina and cervix (57000–57800)",
                "58K — Uterus, fallopian tubes, and ovaries, including hysterectomy (58100–58999)",
                "59K — Maternal care and delivery (59000–59899)",
              ]}
            />
            <p style={{ margin: "8px 0 0" }}>Inside each block, the codes are grouped again by what was done (incision, excision, endoscopy, repair, and so on), in that same rough order — so once you know the region, the "what was done" heading narrows it further before you ever read a full descriptor.</p>
          </>
        ),
      },
    ],
  },
  {
    n: 2,
    title: "Renal Transplantation",
    range: "50300–50380",
    lead: "Renal ALLOtransplantation (kidney from another person) is one operation split into three separately-billable jobs. Renal AUTOtransplantation (the patient's own kidney, moved and reimplanted) is a different, single procedure — 50380 — and is not part of this three-way split.",
    items: [
      {
        q: "What are the 3 distinct components of renal allotransplantation?",
        approach: "Think of a transplant as three separate jobs that can even be billed by three different physicians: get the kidney out, prep it on the back table, then put it into the recipient.",
        answer: (
          <DGList
            items={[
              <><strong>1. Donor nephrectomy</strong> — cadaver or living donor, unilateral or bilateral (50300 cadaver · 50320 open living donor · 50547 laparoscopic living donor).</>,
              <><strong>2. Backbench work</strong> — standard preparation of the donor allograft, plus any additional reconstruction needed for implantation (50323/50325 standard prep · 50327–50329 additional reconstruction).</>,
              <><strong>3. Recipient renal allotransplantation</strong> — transplantation of the allograft, with or without a recipient nephrectomy, plus care of the recipient (50360 without recipient nephrectomy · 50365 with recipient nephrectomy).</>,
            ]}
          />
        ),
        codes: [["50300/50320/50547", "Donor nephrectomy"], ["50323–50329", "Backbench work"], ["50360/50365", "Recipient allotransplantation"]],
      },
      {
        q: "What services are packaged in nephrectomy, both cadaver donor and living donor?",
        approach: "Read the codebook's sentence for each donor type on its own — cadaver and living-donor nephrectomy are NOT the same package. The living donor is a live patient, so their code carries one extra piece.",
        answer: (
          <>
            <p style={{ margin: "0 0 8px" }}><strong>Cadaver donor nephrectomy (50300):</strong> harvesting the graft(s) AND cold preservation of the graft(s) — perfusing it with cold preservation solution and cold maintenance.</p>
            <p style={{ margin: 0 }}><strong>Living donor nephrectomy (50320 open · 50547 laparoscopic):</strong> the same two pieces — harvesting the graft and cold preservation of the graft — PLUS care of the donor. Care of the donor is the one service that only the living-donor code includes, since a living donor is a patient who needs their own pre- and post-op care.</p>
          </>
        ),
        codes: [["50300", "Cadaver donor nephrectomy — harvest + cold preservation"], ["50320", "Living donor nephrectomy, open — harvest + cold preservation + donor care"], ["50547", "Living donor nephrectomy, laparoscopic"]],
      },
      {
        q: "What services are packaged in backbench work, both cadaver donor and living donor?",
        approach: "Same move as the last question — compare the two standard-preparation codes side by side, then notice the third code family that sits on top of both.",
        answer: (
          <>
            <p style={{ margin: "0 0 8px" }}><strong>Cadaver donor standard preparation (50323):</strong> dissection and removal of perinephric fat, diaphragmatic and retroperitoneal attachments; excision of the adrenal gland; and preparation of the ureter(s), renal vein(s), and renal artery(s), ligating branches as necessary.</p>
            <p style={{ margin: "0 0 8px" }}><strong>Living donor standard preparation (50325):</strong> dissection and removal of perinephric fat, and preparation of the ureter(s), renal vein(s), and renal artery(s), ligating branches as necessary. It does NOT include removing diaphragmatic/retroperitoneal attachments or excising the adrenal gland — a living donor's kidney is removed cleanly, without the extra cadaver-harvest dissection.</p>
            <p style={{ margin: 0 }}><strong>Additional reconstruction</strong> beyond either standard prep, when needed for implantation, is reported separately and by component: venous anastomosis (50327), arterial anastomosis (50328), and ureteral anastomosis (50329) — each reported once per anastomosis, for either a cadaver or a living-donor graft.</p>
          </>
        ),
        codes: [["50323", "Cadaver backbench standard preparation"], ["50325", "Living donor backbench standard preparation"], ["50327–50329", "Additional reconstruction, each: venous / arterial / ureteral anastomosis"]],
      },
      {
        q: "What services are packaged in recipient renal allotransplantation?",
        approach: "The recipient side is two things bundled into one code family: putting the kidney in, and looking after the patient it went into.",
        answer: (
          <>
            <p style={{ margin: "0 0 8px" }}>Recipient renal allotransplantation includes transplantation of the allograft (with or without a recipient nephrectomy done at the same time) AND care of the recipient.</p>
            <DGList
              items={[
                "50360 — implantation of the graft, WITHOUT a recipient nephrectomy",
                "50365 — implantation of the graft, WITH a recipient nephrectomy (bilateral: modifier 50)",
                "50340 — recipient nephrectomy alone (separate procedure), for when the native kidney is removed but not in the same session as the implant (bilateral: modifier 50)",
              ]}
            />
          </>
        ),
        codes: [["50360", "Renal allotransplantation, without recipient nephrectomy"], ["50365", "Renal allotransplantation, with recipient nephrectomy"], ["50340", "Recipient nephrectomy alone (separate procedure)"]],
      },
    ],
  },
  {
    n: 3,
    title: "Endoscopy Procedures",
    range: "50551–50580 · 50951–50980 · 52000–52356",
    items: [
      {
        q: "What endoscopies are performed on the urinary system?",
        approach: "Sort them by organ and by how far the scope tip went, the same two questions the Part 1 reviewer teaches for every urinary scope.",
        answer: (
          <DGList
            items={[
              "Renal endoscopy (50551–50580) — through an established nephrostomy/pyelostomy tract, or through a new nephrotomy/pyelotomy cut.",
              "Ureteral endoscopy (50951–50980) — through a ureterostomy or a ureterotomy.",
              "Cystourethroscopy (52000–52356) — up the urethra into the bladder, and, by passing a thinner scope further in (ureteroscopy/pyeloscopy), up into the ureter and the kidney's collecting area.",
            ]}
          />
        ),
        codes: [["50551–50580", "Renal endoscopy"], ["50951–50980", "Ureteral endoscopy"], ["52000–52356", "Cystourethroscopy"]],
      },
      {
        q: 'What are the "minor related functions" that are packaged with endoscopies of the urinary system and are not reported separately?',
        approach: "This is the codebook's own phrase, printed in the guidelines right before the cystourethroscopy codes — it exists so a coder doesn't have to look for a separate code for every small step that rides along with the main scope procedure.",
        answer: (
          <>
            <p style={{ margin: "0 0 8px" }}>The guideline explains that endoscopic descriptions name only the main procedure, without listing every minor related function performed at the same time. Its own examples are:</p>
            <DGList
              items={[
                "Meatotomy, urethral calibration and/or dilation, urethroscopy, and cystoscopy performed prior to a transurethral resection of the prostate (TURP).",
                "Ureteral catheterization performed following extraction of a ureteral calculus (stone).",
                "Internal urethrotomy and bladder-neck fulguration performed when doing a cystourethroscopy for the female urethral syndrome.",
              ]}
            />
            <p style={{ margin: "8px 0 0" }}>None of these small steps is reported with its own code — they are already inside the main endoscopy code.</p>
          </>
        ),
      },
      {
        q: "When and how are these secondary procedures reported separately?",
        approach: "There is exactly one door out of the package: extra time and effort, flagged with a modifier — not a second code.",
        answer: (
          <p style={{ margin: 0 }}>When a secondary (minor related) procedure requires significant additional time and effort beyond the usual bundled step, it is identified by adding <strong>modifier 22</strong> to the main procedure code — it is still not billed as its own separate code. The guideline's own example is a urethrotomy performed for a documented pre-existing stricture or bladder-neck contracture (more work than the routine urethrotomy that is normally bundled in).</p>
        ),
        codes: [["Modifier 22", "Increased procedural services — flags significant extra time/effort on the main code"]],
      },
      {
        q: "How are ureteral catheter or stent placements reported alongside a cystourethroscopy?",
        approach: "Ask what the catheter or stent IS doing: is it the reason for the visit to the ureter (its own code), a routine step of a bigger procedure (bundled), or a device left behind after a treatment (sometimes bundled, sometimes its own code — check the 'do not report' notes)?",
        answer: (
          <>
            <DGList
              items={[
                "Simple ureteral catheterization done through the cystourethroscope, with or without irrigation/instillation/ureteropyelography, has its own code: 52005.",
                "Insertion and removal of a TEMPORARY ureteral catheter (52005) during a cystourethroscopy WITH ureteroscopy is already included in the ureteroscopy treatment codes (52320–52356) and is not reported again.",
                "Placing a permanent, INDWELLING ureteral stent during a ureteroscopy procedure is reported with its own code, 52332 (bilateral: 52332-50) — added with modifier 51 alongside another treatment code from the same session.",
                "52332 is NOT added on top of 52353 (lithotripsy) or 52356 (lithotripsy with stent) on the same side — 52356 already has stent placement built into its own descriptor.",
              ]}
            />
          </>
        ),
        codes: [["52005", "Cystourethroscopy with ureteral catheterization"], ["52332", "Insertion of an indwelling ureteral stent"], ["52356", "Ureteroscopy with lithotripsy, including insertion of an indwelling stent"]],
      },
    ],
  },
  {
    n: 4,
    title: "Hysterectomies",
    range: "58150–58294 · 58541–58575",
    items: [
      {
        q: "What are 2 approaches to procedure on the uterus? What code ranges do they land in?",
        approach: "Read this one from the codebook's own heading, not from everyday practice. In the operating room there are three routes (open belly, vaginal, laparoscopic), but the codebook's 'Hysterectomy Procedures' heading itself covers only two of them — the third lives under a different heading entirely.",
        answer: (
          <>
            <p style={{ margin: "0 0 8px" }}>CPT groups the standard hysterectomy codes under one heading, "Hysterectomy Procedures" (58150–58294), and that heading itself splits into exactly two approaches:</p>
            <DGList
              items={[
                <><strong>Abdominal (open) approach</strong> — 58150–58240.</>,
                <><strong>Vaginal approach</strong> — 58260–58294.</>,
              ]}
            />
            <p style={{ margin: "8px 0 0" }}>Laparoscopic hysterectomy (58541–58575) is a third route used in practice, but the codebook indexes and headings it under "Laparoscopy," not under "Hysterectomy" — so it sits outside this two-approach heading even though coders group all three routes together when studying.</p>
          </>
        ),
        codes: [["58150–58240", "Abdominal approach"], ["58260–58294", "Vaginal approach"], ["58541–58575", "Laparoscopic (headed under Laparoscopy, not Hysterectomy)"]],
      },
      {
        q: "What is the hierarchy of procedures on the uterus, in terms of how much tissue is being taken out?",
        approach: "Line the procedures up from 'nothing structural leaves' to 'the most is removed' — the uterus itself is the dividing line for the first three.",
        answer: (
          <DGSteps
            items={[
              <><strong>Myomectomy</strong> — only the fibroid tumors (myomas) are removed; the uterus stays.</>,
              <><strong>Supracervical (subtotal) hysterectomy</strong> — the body of the uterus is removed, but the cervix is left in place.</>,
              <><strong>Total hysterectomy</strong> — the uterus AND the cervix are both removed.</>,
              <><strong>Radical hysterectomy</strong> — the uterus plus the surrounding tissue, usually done together with lymph node work, typically for cancer.</>,
              <><strong>Pelvic exenteration</strong> (58240) — the most extensive: total hysterectomy or cervicectomy together with removal of the bladder and ureteral transplantation, and/or removal of the rectum and colon with a colostomy.</>,
            ]}
          />
        ),
      },
      {
        q: "Which of the hysterectomy codes are affected by the concurrent removal of the fallopian tubes and ovaries?",
        approach: "Go back to the two approaches from question (a) and check each one's descriptor language for tube/ovary wording.",
        answer: (
          <>
            <p style={{ margin: "0 0 8px" }}><strong>NOT affected:</strong> the open abdominal hysterectomy codes (58150, 58180). Their own descriptors already read "with or without removal of tube(s), with or without removal of ovary(s)" — one code covers both situations, so there is nothing extra to select.</p>
            <p style={{ margin: 0 }}><strong>Affected:</strong> the standard vaginal (58260–58294) and laparoscopic (58541–58575) hysterectomy codes. Each of those code sets splits into a "uterus only" code and a separate "with removal of tube(s) and/or ovary(s)" code — removing the tubes/ovaries changes which specific code number is reported.</p>
          </>
        ),
      },
      {
        q: "Which of the hysterectomy codes are affected by the weight of the uterus?",
        approach: "Same two groups as the last question — the split runs together with tube/ovary removal in the vaginal and laparoscopic families.",
        answer: (
          <p style={{ margin: 0 }}>The same vaginal (58260–58294) and laparoscopic (58541–58575) hysterectomy codes are also split by uterine weight, using <strong>250 grams</strong> as the benchmark (250 g or less vs. over 250 g) — the weight comes from the specimen weight documented in the operative or pathology report. The open abdominal hysterectomy codes (58150, 58180) are not affected by weight at all, and the codes for radical hysterectomy, vaginectomy, and enterocele-repair combinations also have no weight split.</p>
        ),
        codes: [["250 g", "Benchmark for vaginal/laparoscopic hysterectomy weight split"]],
      },
    ],
  },
  {
    n: 5,
    title: "Procedures on the Prostate",
    range: "52441–52649 · 53850–53854 · 55801–55873",
    items: [
      {
        q: "What are the 2 approaches to procedures on the prostate? What code ranges do they land in?",
        approach: "Ask the same first question as any endoscopy topic: through an opening, or through the skin?",
        answer: (
          <DGList
            items={[
              <><strong>Transurethral</strong> — through the urethra, with a scope: 52441–52649, plus the heat-destruction codes 53850–53854.</>,
              <><strong>Open</strong> — through the skin: perineal, suprapubic, or retropubic (and laparoscopic, including robotic-assisted): 55801–55873.</>,
            ]}
          />
        ),
        codes: [["52441–52649 · 53850–53854", "Transurethral"], ["55801–55873", "Open (perineal / suprapubic / retropubic / laparoscopic)"]],
      },
      {
        q: "What services are packaged in prostatectomies and are not reported separately?",
        approach: "This is another 'minor related functions' list, printed directly under the complete TURP code — the same idea as the endoscopy bundling in Topic 3, applied specifically to prostate surgery.",
        answer: (
          <DGList
            items={[
              "Control of postoperative bleeding",
              "Vasectomy",
              "Meatotomy",
              "Cystourethroscopy",
              "Urethral calibration and/or dilation",
              "Internal urethrotomy",
            ]}
          />
        ),
      },
      {
        q: "What are the other treatment modalities for overgrowth of the prostate? What codes are used to report these other modalities?",
        approach: "Beyond cutting tissue out (resection), prostate overgrowth can be treated by vaporizing, dissolving with a jet of water, or destroying tissue with heat or extreme cold — each has its own code.",
        answer: (
          <DGList
            items={[
              "Laser vaporization of the prostate — 52648",
              "Laser enucleation of the prostate with morcellation — 52649",
              "Transurethral (robotic-assisted) waterjet resection/ablation — 52597",
              "Transurethral destruction by microwave thermotherapy — 53850",
              "Transurethral destruction by radiofrequency thermotherapy — 53852",
              "Transurethral destruction by radiofrequency water vapor thermotherapy — 53854",
              "Cryosurgical ablation of the prostate — 55873",
            ]}
          />
        ),
        codes: [["52648", "Laser vaporization"], ["52649", "Laser enucleation with morcellation"], ["52597", "Waterjet resection"], ["53850–53854", "Thermotherapy (microwave / RF / RF water vapor)"], ["55873", "Cryosurgical ablation"]],
      },
      {
        q: "How are prostatectomies reported when done as a single-stage procedure? As a two-stage procedure?",
        approach: "Match the modifier to the plan: was the second trip to the OR decided on ahead of time (staged) or not (unplanned)? That's the difference between modifier 58 and modifier 78 — only the staged case belongs in this question.",
        answer: (
          <>
            <p style={{ margin: "0 0 8px" }}><strong>Single-stage (complete) TURP:</strong> reported once, with the plain code — 52601.</p>
            <p style={{ margin: 0 }}><strong>Two-stage (staged) TURP:</strong> stage one is reported as 52601. Stage two, done later as a planned continuation within the postoperative period, is reported as 52601 with <strong>modifier 58</strong> (a planned/staged procedure). One exception: 55821 (suprapubic subtotal prostatectomy) already reads "one or two stages" in its own descriptor, so its second stage needs no modifier at all.</p>
          </>
        ),
        codes: [["52601", "TURP, complete or stage 1"], ["52601-58", "TURP, planned stage 2"], ["55821", "Suprapubic subtotal prostatectomy — one OR two stages, same code"]],
      },
    ],
  },
  {
    n: 6,
    title: "Maternal Care and Delivery",
    range: "59400–59430 · 59510–59525 · 59610–59622",
    items: [
      {
        q: "What 3 services are normally provided in uncomplicated maternity cases?",
        approach: "Think of the pregnancy in three time blocks around the birth.",
        answer: (
          <DGList
            items={[
              <><strong>Antepartum care</strong> — the routine prenatal visits before delivery.</>,
              <><strong>Delivery services</strong> — the birth itself, plus the admission and immediate routine care around it.</>,
              <><strong>Postpartum care</strong> — the recovery and routine visits after the birth.</>,
            ]}
          />
        ),
      },
      {
        q: "What services are packaged in antepartum care and are not reported separately?",
        approach: "Antepartum care means the ROUTINE prenatal schedule — anything outside that routine schedule, including the visit that first confirms the pregnancy, is not part of the package.",
        answer: (
          <DGList
            items={[
              "The initial and later prenatal history and physical exams",
              "Weight, blood pressure, and fetal heart tones checked at each routine visit",
              "Routine urine dipstick testing",
              "The routine monthly/biweekly/weekly visit schedule itself",
            ]}
          />
        ),
      },
      {
        q: "What services are packaged in delivery services and are not reported separately?",
        approach: "Delivery services cover the hospital stay around the birth itself, start to finish of that visit.",
        answer: (
          <DGList
            items={[
              "Hospital admission, including the admitting history and exam",
              "Management of uncomplicated labor",
              "The vaginal or cesarean delivery (with or without episiotomy, forceps, or vacuum)",
              "Delivery of the placenta",
              "Routine care of the patient immediately after the birth",
            ]}
          />
        ),
      },
      {
        q: "What services are packaged in postpartum care services and are not reported separately?",
        approach: "Postpartum care runs from right after delivery out to about 6 weeks — routine recovery and follow-up, not anything extra.",
        answer: (
          <DGList
            items={[
              "The recovery-room visit",
              "Routine hospital visits after the birth",
              "Routine office visits until about 6 weeks after delivery",
              "Discussing contraception",
              "Removing sutures, if needed",
            ]}
          />
        ),
      },
      {
        q: "For patients on a succeeding delivery who have had (a) previous cesarean delivery, how are the services reported?",
        approach: "A previous cesarean plus a plan to try a vaginal birth this time puts the patient in her own code family — VBAC — no matter how the delivery ends. Then ask the same two questions as any OB case: did the vaginal attempt succeed, and how much care did this doctor give?",
        answer: (
          <>
            <p style={{ margin: "0 0 8px" }}>She is reported in the VBAC (vaginal birth after cesarean) code family, 59610–59622 — never the plain cesarean codes — because the previous cesarean plus the plan to attempt a vaginal delivery is what selects the family, regardless of the outcome.</p>
            <DGList
              items={[
                "Successful vaginal birth after cesarean: 59610 (global) · 59614 (delivery + postpartum) · 59612 (delivery only)",
                "Unsuccessful VBAC attempt, ending in a cesarean delivery: 59618 (global) · 59622 (delivery + postpartum) · 59620 (delivery only)",
              ]}
            />
            <p style={{ margin: "8px 0 0" }}>Which single code is reported still depends on how much of the care this doctor gave — global, delivery-plus-postpartum, or delivery-only — the same rule that applies to every delivery type.</p>
          </>
        ),
        codes: [["59610/59614/59612", "Successful VBAC — global / delivery+postpartum / delivery only"], ["59618/59622/59620", "Unsuccessful VBAC (ends in cesarean) — global / delivery+postpartum / delivery only"]],
      },
    ],
  },
];

export default function GenitourinaryDiscussionGuidePage() {
  return (
    <DiscussionGuidePage
      theme={INDIGO}
      kicker="50,000 SERIES · DISCUSSION GUIDE"
      title="Genitourinary System Discussion Guide — Answered"
      blurb="Every question from the training discussion guide, answered step by step and checked against the CPT 2026 codebook and this series' Guidelines Reviewer."
      nav={[
        { href: "/cpt/surgery/50,000", label: "50,000 Series home" },
        { href: "/cpt/surgery/50000-series-guidelines-reviewer", label: "Reviewer Pt. 1" },
        { href: "/cpt/surgery/50000-series-guidelines-reviewer-part-2", label: "Pt. 2" },
        { href: "/cpt/surgery/50000-series-guidelines-reviewer-part-3", label: "Pt. 3" },
        { href: "/cpt/surgery/50000-series-practice-quiz", label: "Practice Quiz" },
        { href: "/cpt/surgery/50000-series-flashcards", label: "Flashcards" },
      ]}
      backHref="/cpt/surgery/50,000"
      backLabel="← Back to the 50,000 Series"
      topics={topics}
      approach={[
        "Read the question first and decide which reviewer part it belongs to — that tells you which code family and rule set to reach for.",
        "Where the discussion guide's wording is a simplification (like '2 approaches to the uterus'), the exact codebook heading and code range is given too, so you can defend the answer against the printed guidelines.",
        "Check the code chips for the exact codes tied to each answer, and follow the reviewer links for the full walkthroughs and solved cases.",
      ]}
      sourceNote="Answers are paraphrased from CPT 2026 and cross-checked against the Genitourinary System Guidelines Reviewer (Parts 1–3) in this series."
    />
  );
}
