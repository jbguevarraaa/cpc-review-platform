import { QuizPlayer, INDIGO, type QuizItem } from "../_digestive/players";

const items: QuizItem[] = [
  {
    topic: "Bladder tumors",
    question: "A physician performs a cystourethroscopy with fulguration and resection of two 5-cm bladder tumors. How should this service be reported?",
    correct: "52240, once",
    wrong: ["52235", "52235 twice, once per tumor", "52000, 52240"],
    explanation: "The tumor codes are chosen by size. Coders add the sizes of tumors treated in the same session (coding guidance, not printed in the codebook): 5 + 5 = 10 cm, which is over 5 cm, so the LARGE code 52240 applies. It is reported once because the descriptor says 'tumor(s)'.",
    lookFor: "A bladder scope with fulguration/resection, and a size. Add the sizes when more than one tumor is treated.",
    eliminate: "52235 is the 2.0–5.0 cm band and would fit only one 5-cm tumor. Reporting it twice ignores '(s)'. The diagnostic 52000 is already inside the treatment code.",
  },
  {
    topic: "Renal endoscopy",
    question: "A surgeon passes a scope into the kidney through an established nephrostomy tract and removes a kidney stone. Which code?",
    correct: "50561",
    wrong: ["50580", "50551, 50561", "52352"],
    explanation: "Renal endoscopy through an established nephrostomy or pyelostomy is 50551–50562. The step 'removal of a foreign body or calculus' is 50561. The diagnostic 50551 is inside it.",
    lookFor: "The way in: an ESTABLISHED tract (nephrostomy) versus a new cut (nephrotomy) versus up the urethra.",
    eliminate: "50580 is the same step but through a nephrotomy or pyelotomy. Adding 50551 counts the look twice. 52352 is a stone removal through a ureteroscope going up the urethra.",
  },
  {
    topic: "Ureteroscopy",
    question: "Through a cystourethroscope, a surgeon passes a ureteroscope up the right ureter, removes a stone with a basket without breaking it, and leaves a stent in the ureter. What is reported?",
    correct: "52352, 52332-51",
    wrong: ["52356", "52353, 52332", "52320, 52332"],
    explanation: "Removing a stone through the ureteroscope is 52352. The stent is reported in addition with 52332 and modifier 51. 52356 would fit only if the stone had been broken up by lithotripsy with the stent placed in the same session.",
    lookFor: "Was the stone REMOVED whole (52352) or BROKEN UP (52353/52356)? Then check for a stent.",
    eliminate: "52356 and 52353 are the lithotripsy codes. 52320 is a stone removal without the ureteroscope. The stent code is not reported with the lithotripsy codes, but it IS added to 52352.",
  },
  {
    topic: "Colposcopy",
    question: "A colposcopy of the cervix is done with a cervical biopsy and an endocervical curettage in the same session. Which code?",
    correct: "57454",
    wrong: ["57452, 57455, 57456", "57455", "57452, 57454"],
    explanation: "57454 is colposcopy of the cervix with biopsy(s) AND endocervical curettage. The diagnostic 57452 is not reported with 57454–57461.",
    lookFor: "The code that names both the biopsy and the curettage together.",
    eliminate: "Listing 57452, 57455, and 57456 counts one exam three times. 57455 is biopsy only. Adding 57452 to 57454 is not allowed.",
  },
  {
    topic: "Hysterectomy",
    question: "A physician performs a vaginal hysterectomy with removal of the patient's fallopian tubes. The uterus was 255 grams. Which code?",
    correct: "58291",
    wrong: ["58262", "58290", "58150"],
    explanation: "A vaginal hysterectomy uses both the weight and tube/ovary removal. 255 g is over 250 g, so the 58290–58294 group applies, and 'with removal of tube(s) and/or ovary(s)' is 58291.",
    lookFor: "The approach (vaginal) and the 250 g line. 255 g is on the heavy side.",
    eliminate: "58262 is the same with tubes but for a uterus of 250 g or less. 58290 is over 250 g but without the tubes. 58150 is an open abdominal code.",
  },
  {
    topic: "Tubes and ovaries",
    question: "A surgeon performs a laparoscopic removal of both ovaries and both fallopian tubes. Which code?",
    correct: "58661-50",
    wrong: ["58661 twice, with no modifier", "58661", "58662-50"],
    explanation: "58661 is laparoscopy with removal of adnexal structures (partial or total oophorectomy and/or salpingectomy). It is a one-sided code, and the codebook says to report a bilateral procedure with modifier 50.",
    lookFor: "Both sides, and a removal (not a burn or excision of a lesion).",
    eliminate: "Repeating the code with no modifier looks like a duplicate. 58661 alone leaves out the second side. 58662 is fulguration or excision of lesions, not removal of the organs.",
  },
  {
    topic: "Prostate",
    question: "A urologist plans a TURP in two stages. Stage one is done today; stage two is done three weeks later by the same surgeon. How are the stages reported?",
    correct: "Stage 1: 52601 · Stage 2: 52601-58",
    wrong: ["52601 twice, with no modifier", "Stage 1: 52601 · Stage 2: 52630", "Stage 1: 52601 · Stage 2: 52601-78"],
    explanation: "A staged TURP is reported with 52601 for the first stage and 52601 with modifier 58 for the second stage. Modifier 58 means a planned, staged procedure.",
    lookFor: "The word 'planned' in two stages. That points to modifier 58.",
    eliminate: "A repeat with no modifier looks like a duplicate. 52630 is for regrowth of prostate treated before. Modifier 78 is for an UNPLANNED return to the operating room.",
  },
  {
    topic: "Prostate",
    question: "A benign enlarged prostate is treated by an open operation approached from behind the pubic bone, removing part of the gland. Which code?",
    correct: "55831",
    wrong: ["55840", "55821", "52601"],
    explanation: "Removing part of the gland is a subtotal prostatectomy. Through the retropubic route, that is 55831. The deck's list of retropubic codes (55840–55845) is the radical set.",
    lookFor: "Two choices: the ROUTE (perineal, suprapubic, retropubic) and how much was removed (subtotal or radical).",
    eliminate: "55840 is the radical retropubic code. 55821 is the suprapubic subtotal code. 52601 is a TURP, which goes through the urethra with no incision.",
  },
  {
    topic: "Delivery",
    question: "Martha previously had a cesarean. Dr. Rose, who provides the global OB package, agrees a vaginal delivery is feasible. Martha tries to deliver vaginally but cannot, and Dr. Rose performs a cesarean. Dr. Rose provides all of her care. Which code?",
    correct: "59618",
    wrong: ["59510", "59610", "59620"],
    explanation: "A patient with a previous cesarean who plans a vaginal birth is coded in the VBAC family. The attempt failed and a cesarean followed, so the unsuccessful VBAC group applies. Global care by one doctor = 59618.",
    lookFor: "Previous cesarean plus a planned vaginal attempt, and how much care the doctor gave (all of it).",
    eliminate: "59510 is the plain cesarean global code. 59610 is a successful vaginal birth. 59620 is the delivery-only version, but Dr. Rose gave all the care.",
  },
  {
    topic: "Delivery",
    question: "A doctor who did NOT provide prenatal care delivers a baby vaginally and also provides the routine postpartum care. Which code?",
    correct: "59410",
    wrong: ["59400", "59409 plus an office visit code for postpartum care", "59430"],
    explanation: "Delivery plus postpartum care for a vaginal birth is 59410. The global code 59400 needs the prenatal care as well, and the postpartum care is already inside 59410.",
    lookFor: "Which of the three parts (antepartum, delivery, postpartum) this doctor gave.",
    eliminate: "59400 is the full global package. Adding a postpartum office visit to 59409 is unnecessary because 59410 already includes it. 59430 is postpartum care only, but the doctor also delivered.",
  },
];

export default function GenitourinaryPracticeQuizPage() {
  return (
    <QuizPlayer
      kicker="50,000 SERIES · PRACTICE QUIZ"
      title="Genitourinary System Practice Quiz"
      blurb={`${items.length} scenario questions — bladder tumors, kidney and ureter scopes, colposcopy, hysterectomy, the prostate, and delivery. Each answer shows what to look for and how to eliminate the wrong choices.`}
      nav={[
        { href: "/cpt/surgery/50,000", label: "Genitourinary home" },
        { href: "/cpt/surgery/50000-series-guidelines-reviewer", label: "Reviewer Part 1" },
        { href: "/cpt/surgery/50000-series-guidelines-reviewer-part-2", label: "Part 2" },
        { href: "/cpt/surgery/50000-series-guidelines-reviewer-part-3", label: "Part 3" },
        { href: "/cpt/surgery/50000-series-discussion-guide", label: "Discussion Guide" },
        { href: "/cpt/surgery/50000-series-flashcards", label: "Flashcards" },
      ]}
      items={items}
      backHref="/cpt/surgery/50,000"
      backLabel="← Back to Genitourinary System"
      theme={INDIGO}
    />
  );
}
