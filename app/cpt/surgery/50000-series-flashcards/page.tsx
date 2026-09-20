import { FlashcardPlayer, INDIGO, type FlashItem } from "../_digestive/players";

const cards: FlashItem[] = [
  // ---- Code map and endoscopy rules ----
  { topic: "Code map", front: "What does each thousand in the 50,000 series cover?", back: "50K kidney and ureter · 51K–52K bladder · 53K urethra · 54K penis, testis, epididymis · 55K the rest of the male system (including the prostate) · 56K external female genitalia · 57K vagina and cervix · 58K uterus, tubes, ovaries · 59K maternity care and delivery." },
  { topic: "Endoscopy rules", front: "Surgical endoscopy plus the diagnostic endoscopy — report both?", back: "No. Surgical endoscopy ALWAYS includes the diagnostic look. Report only the surgical code." },
  { topic: "Endoscopy rules", front: "What anchors every endoscopy code?", back: "How far the tip of the scope was advanced — and the route it took in (natural opening or a stoma)." },
  { topic: "Endoscopy rules", front: "Endoscopy vs. laparoscopy?", back: "Endoscopy goes through a natural opening or a stoma. Laparoscopy goes through small cuts in the belly wall. Surgical laparoscopy includes the diagnostic laparoscopy (49320)." },
  { topic: "Endoscopy rules", front: "The diagnostic 'separate procedure' codes to remember?", back: "Cystourethroscopy 52000 · cystourethroscopy with ureteroscopy 52351 · diagnostic hysteroscopy 58555 · diagnostic laparoscopy 49320." },
  { topic: "Endoscopy rules", front: "A small step done with the main scope procedure — reported on its own?", back: "No. Small related steps (opening or dilating the urethra, passing a catheter after a stone) are included in the main code. If they take significant extra time and effort, add modifier 22 to the main code." },

  // ---- Urinary endoscopy ----
  { topic: "Urinary endoscopy", front: "Where are the urinary endoscopy code ranges?", back: "Renal 50551–50580 · ureteral 50951–50980 · cystourethroscopy diagnostic and catheter codes 52000–52010 · transurethral surgery 52204–52356 · bladder neck and prostate 52400–52700." },
  { topic: "Urinary endoscopy", front: "Renal endoscopy: which way in matters. What are the two routes?", back: "Through an ESTABLISHED nephrostomy or pyelostomy (50551–50562), or through a nephrotomy or pyelotomy — a new surgical cut (50570–50580)." },
  { topic: "Urinary endoscopy", front: "The renal endoscopy ladder through an established nephrostomy?", back: "50551 diagnostic · 50553 ureteral catheterization · 50555 biopsy · 50557 fulguration and/or incision · 50561 removal of foreign body or calculus · 50562 resection of tumor." },
  { topic: "Urinary endoscopy", front: "Ureteral endoscopy codes?", back: "Through an established ureterostomy: 50951 diagnostic, 50953 catheterization, 50955 biopsy, 50957 fulguration/incision, 50961 foreign body or calculus. Through a ureterotomy: 50970, 50972, 50974, 50976, 50980." },
  { topic: "Urinary endoscopy", front: "Cystourethroscopy with 52000 plus a therapeutic code?", back: "Never. Therapeutic cystourethroscopy includes the diagnostic 52000. The same goes for 52351 with the ureteroscopy treatment codes." },
  { topic: "Urinary endoscopy", front: "How is a bladder tumor code chosen?", back: "By SIZE: minor under 0.5 cm = 52224 · small 0.5–2.0 cm = 52234 · medium 2.0–5.0 cm = 52235 · large over 5 cm = 52240. Add the sizes when several tumors are treated in one session (a coding convention)." },
  { topic: "Urinary endoscopy", front: "Two 5-cm bladder tumors fulgurated and resected — code?", back: "52240, once. 5 + 5 = 10 cm, so the LARGE band. Report once; the descriptor says 'tumor(s)'." },
  { topic: "Urinary endoscopy", front: "Ureteroscopy stone codes?", back: "52352 removal or manipulation of a calculus · 52353 with lithotripsy · 52356 lithotripsy INCLUDING an indwelling stent. 52351 is the diagnostic look." },
  { topic: "Urinary endoscopy", front: "Where does a stent code go?", back: "52332 places an indwelling ureteral stent. Add it with modifier 51 to a ureteroscopy code such as 52352; for both sides use 52332-50. It is NOT reported with 52353 or 52356 on the same side." },
  { topic: "Urinary endoscopy", front: "Removing a self-retaining ureteral stent through the scope?", back: "52310 (simple) or 52315 (complicated), with modifier 58 when it is planned and staged." },

  // ---- Female endoscopy ----
  { topic: "Female endoscopy", front: "Where are the female endoscopy code ranges?", back: "Vulvar colposcopy 56820–56821 · vaginal colposcopy 57420–57421 · cervical colposcopy 57452–57461 · hysteroscopy 58555–58565 · laparoscopy of the fallopian tube (oviduct) and ovary 58660–58679." },
  { topic: "Female endoscopy", front: "Cervical colposcopy code ladder?", back: "57452 diagnostic · 57454 biopsy + endocervical curettage · 57455 biopsy only · 57456 curettage only · 57460 LEEP biopsy · 57461 LEEP conization. +57465 = computer-aided mapping." },
  { topic: "Female endoscopy", front: "Colposcopy of the cervix with a biopsy AND a canal scraping — code?", back: "57454. The diagnostic 57452 is not reported with 57454–57461." },
  { topic: "Female endoscopy", front: "Hysteroscopy ladder?", back: "58555 diagnostic · 58558 biopsy and/or polypectomy · 58559 lysis of adhesions · 58560 septum · 58561 fibroid removal · 58562 impacted foreign body · 58563 endometrial ablation." },
  { topic: "Female endoscopy", front: "Laparoscopy of the tubes and ovaries?", back: "58660 lysis of adhesions · 58661 removal of adnexal structures (bilateral: modifier 50) · 58662 fulguration/excision of lesions · 58670 fulguration of the oviducts · 58671 occlusion of the oviducts · 58672 fimbrioplasty · 58673 salpingostomy." },

  // ---- Hysterectomy ----
  { topic: "Hysterectomy", front: "Which hysterectomy route ignores uterine weight and tube/ovary removal?", back: "The OPEN ABDOMINAL hysterectomy — 58150 (total) and 58180 (supracervical). The vaginal and laparoscopic routes for a standard hysterectomy use both. Radical hysterectomies have their own single codes." },
  { topic: "Hysterectomy", front: "What is the weight benchmark for hysterectomy codes?", back: "250 g. 'Uterus 250 g or less' vs. 'uterus greater than 250 g' — for standard vaginal, laparoscopic-assisted vaginal, and laparoscopic hysterectomies." },
  { topic: "Hysterectomy", front: "Vaginal hysterectomy code families?", back: "250 g or less: 58260 uterus only · 58262 with tube(s)/ovary(s). Over 250 g: 58290 uterus only · 58291 with tube(s)/ovary(s). Extras: enterocele repair, bladder-neck lift, vaginectomy have their own codes." },
  { topic: "Hysterectomy", front: "Vaginal hysterectomy, tubes removed, uterus 255 g — code?", back: "58291. Vaginal = weight matters; 255 g is over 250 g; tubes were removed." },
  { topic: "Hysterectomy", front: "Laparoscopic hysterectomy families?", back: "Supracervical 58541–58544 · laparoscopic-assisted vaginal 58550–58554 · total 58570–58573. Each: 250 g or less (uterus only, then with tubes/ovaries), then over 250 g (the same two). Radical 58548 has no weight split." },
  { topic: "Hysterectomy", front: "Radical hysterectomy codes by approach?", back: "Open abdominal 58210 · vaginal 58285 · laparoscopic 58548." },
  { topic: "Hysterectomy", front: "Myomectomy codes?", back: "Open: 58140 (1–4 myomas, 250 g or less, abdominal) · 58145 (vaginal) · 58146 (5 or more or over 250 g, abdominal). Laparoscopic: 58545 (1–4) · 58546 (5 or more or over 250 g)." },
  { topic: "Hysterectomy", front: "Laparoscopic hysterectomy plus diagnostic laparoscopy 49320?", back: "No. The laparoscopic hysterectomy codes are not reported with 49320, with myomectomy codes, or with 58561, 58661, 58670, and 58671." },

  // ---- Prostate ----
  { topic: "Prostate", front: "What is already included in a TURP code?", back: "Control of postoperative bleeding, vasectomy, meatotomy, cystourethroscopy, urethral calibration and/or dilation, and internal urethrotomy." },
  { topic: "Prostate", front: "Complete TURP vs. staged TURP?", back: "Complete: 52601. Staged: 52601 for stage 1, then 52601-58 for stage 2 (planned, staged)." },
  { topic: "Prostate", front: "TURP on regrowth of a previously treated prostate?", back: "52630. If it is done unplanned within the postoperative period of a related procedure by the same physician: 52630-78." },
  { topic: "Prostate", front: "Modifier 58 vs. modifier 78?", back: "58 = planned, staged procedure. 78 = UNPLANNED return to the operating room for a related problem. Not interchangeable." },
  { topic: "Prostate", front: "Transurethral prostate techniques?", back: "52601 electrosurgical resection · 52630 regrowth · 52648 laser vaporization · 52649 laser enucleation with morcellation · 52597 robotic-assisted waterjet (new) · 53850/53852/53854 destruction by microwave, radiofrequency, or water vapor." },
  { topic: "Prostate", front: "Which laser code was deleted?", back: "52647 (laser coagulation) is deleted. Waterjet ablation now uses 52597." },
  { topic: "Prostate", front: "Open prostatectomy approaches?", back: "Perineal 55801 (subtotal), 55810–55815 (radical) · suprapubic 55821 (one or two stages) · retropubic 55831 (subtotal), 55840–55845 (radical). Laparoscopic radical: 55866 (alone), 55868 (with limited node biopsy), 55869 (with bilateral pelvic lymphadenectomy)." },
  { topic: "Prostate", front: "Why do the radical prostatectomy codes come in threes?", back: "Lymph node work is built in: alone · with limited pelvic lymph node biopsy · with bilateral pelvic lymphadenectomy (55810/55812/55815, 55840/55842/55845, and laparoscopic 55866/55868/55869)." },

  // ---- Maternity ----
  { topic: "Maternity", front: "What is in the global obstetric package?", back: "Antepartum care + delivery + postpartum care for an uncomplicated pregnancy. Reported with one global code when the same doctor or group gave all three." },
  { topic: "Maternity", front: "What is included in antepartum care?", back: "History and exams, weight, blood pressure, fetal heart tones, routine urine dipstick, and the routine visits: monthly to 28 weeks, every two weeks to 36 weeks, weekly until delivery." },
  { topic: "Maternity", front: "What is included in delivery services?", back: "Hospital admission with the admitting history and exam, management of uncomplicated labor, vaginal or cesarean delivery (with or without episiotomy, forceps, or vacuum), delivery of the placenta, and routine care right after." },
  { topic: "Maternity", front: "What is included in postpartum care?", back: "By the standard obstetric-package description: recovery-room visit, routine hospital visits, routine office visits to about 6 weeks, contraception discussion, and suture removal if needed." },
  { topic: "Maternity", front: "How are antepartum visits reported when only some were given?", back: "1 to 3 visits = office E/M codes. 4 to 6 visits = 59425. 7 or more visits = 59426." },
  { topic: "Maternity", front: "The pattern of delivery codes?", back: "[global] · [delivery + postpartum] · [delivery only]. Vaginal: 59400 / 59410 / 59409. Cesarean: 59510 / 59515 / 59514. Successful VBAC: 59610 / 59614 / 59612. Failed VBAC: 59618 / 59622 / 59620. Prenatal only: 59425/59426. Postpartum only: 59430." },
  { topic: "Maternity", front: "What is VBAC coding based on?", back: "A patient with a previous cesarean who expects a vaginal delivery is coded 59610–59622. Success: 59610–59614. If another cesarean follows the failed attempt: 59618–59622." },
  { topic: "Maternity", front: "Martha (prior cesarean) tries to deliver vaginally, fails, Dr. Rose does a cesarean and gave all the care — code?", back: "59618 (unsuccessful VBAC, global care)." },
  { topic: "Maternity", front: "Does the type of cesarean incision change the code?", back: "No. Classical and low-transverse cesareans are both reported with 59510, 59514, or 59515. A planned (elective) cesarean also uses these." },
  { topic: "Maternity", front: "External cephalic version — packaged with delivery?", back: "No. Report 59412 in addition to the delivery code(s). It has no plus sign in the codebook, but it is not part of the package." },
  { topic: "Maternity", front: "Episiotomy or vaginal repair — reported separately?", back: "No, it is packaged with the delivery — unless done by a physician other than the attending (59300)." },
  { topic: "Maternity", front: "Delivery of the placenta — reported separately?", back: "Not with a delivery code from the same doctor — it is part of the delivery services. 59414 (delivery of placenta, separate procedure) is for when placenta delivery is the ONLY service." },
  { topic: "Maternity", front: "Hysterectomy at the time of a cesarean?", back: "+59525 add-on (subtotal or total hysterectomy after cesarean), reported with 59510, 59514, 59515, 59618, 59620, or 59622." },
];

export default function GenitourinaryFlashcardsPage() {
  return (
    <FlashcardPlayer
      kicker="50,000 SERIES · FLASHCARDS"
      title="5-Minute Commute Review"
      nav={[
        { href: "/cpt/surgery/50,000", label: "Genitourinary home" },
        { href: "/cpt/surgery/50000-series-guidelines-reviewer", label: "Reviewer Part 1" },
        { href: "/cpt/surgery/50000-series-guidelines-reviewer-part-2", label: "Part 2" },
        { href: "/cpt/surgery/50000-series-guidelines-reviewer-part-3", label: "Part 3" },
        { href: "/cpt/surgery/50000-series-practice-quiz", label: "Quiz" },
      ]}
      cards={cards}
      theme={INDIGO}
    />
  );
}
