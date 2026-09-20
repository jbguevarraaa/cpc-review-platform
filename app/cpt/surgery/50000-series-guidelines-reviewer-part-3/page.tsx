import { ReviewerShell, type Subsection } from "../_genitourinary/kit";
import { ObPackageDiagram } from "../_genitourinary/diagrams";

const sections: Subsection[] = [
  {
    id: "ob-package",
    n: 1,
    title: "The Obstetric Global Package",
    range: "59400–59430 · 59510–59515 · 59610–59622",
    intro: [
      "Maternity coding has one big idea: CPT bundles the normal care of a pregnancy into a single 'global' package. It has three parts — before the birth (antepartum), the birth itself (delivery), and after the birth (postpartum).",
      "The code you report depends on TWO things: the type of delivery (vaginal, cesarean, or a birth after a previous cesarean), and how much of the care YOUR doctor gave. If one doctor gave all three parts, report the global code. If not, report only the parts that doctor gave.",
    ],
    diagram: <ObPackageDiagram />,
    definitions: [
      ["Antepartum care", "the routine prenatal visits before delivery. It runs about monthly to 28 weeks, every two weeks to 36 weeks, then weekly until delivery."],
      ["Delivery services", "admission to the hospital, management of an uncomplicated labor, the vaginal or cesarean delivery, delivery of the placenta, and routine care right after the birth."],
      ["Postpartum care", "the recovery-room visit, routine hospital visits after the birth, and routine office visits until about 6 weeks after delivery."],
      ["Global package", "antepartum + delivery + postpartum care by the SAME doctor or group, reported with one code."],
      ["VBAC", "vaginal birth after a previous cesarean delivery."],
    ],
    steps: [
      "① Which type of delivery was it — vaginal, cesarean, or a birth by a patient who had a previous cesarean and planned to give birth vaginally (VBAC)?",
      "② How much care did this doctor give — all three parts (global), delivery and postpartum only, delivery only, antepartum only, or postpartum only?",
      "③ Antepartum care only: count the visits. 1 to 3 visits are reported with the ordinary office E/M codes. 4 to 6 visits = 59425. 7 or more visits = 59426.",
      "④ Anything the package does not include? Complications, external cephalic version, and hysterectomy at the time of cesarean are reported separately.",
    ],
    categories: [
      {
        name: "What is inside the package (do not report these separately)",
        codes: [
          ["Antepartum", "Initial and later history and exams · weight, blood pressure, and fetal heart tones · routine urine dipstick · the routine visit schedule"],
          ["Delivery", "Hospital admission with the admitting history and exam · uncomplicated labor · vaginal or cesarean delivery (with or without episiotomy, forceps, or vacuum) · delivery of the placenta · routine care right after"],
          ["Postpartum", "Recovery-room visit · routine hospital visits · routine office visits to about 6 weeks · contraception discussion · removing sutures if needed"],
        ],
      },
      {
        name: "Vaginal delivery codes",
        codes: [
          ["59400", "GLOBAL: routine obstetric care including antepartum care, vaginal delivery (with or without episiotomy and/or forceps), and postpartum care"],
          ["59409", "Vaginal delivery ONLY (with or without episiotomy and/or forceps)"],
          ["59410", "Delivery AND postpartum care"],
          ["59425 · 59426", "Antepartum care ONLY — 4 to 6 visits · 7 or more visits"],
          ["59430", "Postpartum care ONLY (separate procedure)"],
        ],
      },
    ],
    rules: [
      "A normal, uncomplicated pregnancy has three parts of routine care: antepartum, delivery, and postpartum. Confirming the pregnancy at a problem-focused or preventive visit is NOT part of antepartum care — report that visit with an ordinary E/M code.",
      "Antepartum visits numbering 1 to 3 are reported with the appropriate E/M codes. Four or more routine visits move to 59425 or 59426.",
      "Complications of the pregnancy, or of labor and delivery (heart problems, diabetes, high blood pressure, preterm labor, and similar), take extra work and may be reported on their own.",
      "Other visits or services in the prenatal period that go beyond the routine schedule are coded separately from the package.",
      "When the delivery is reported alone (59409, 59514, 59612, 59620), the doctor's hospital visits after the birth and the discharge are reported with the E/M codes 99238 or 99239.",
      "If part of the prenatal or postpartum care is given but the delivery is not (for example the patient is referred elsewhere to deliver, or the pregnancy ends by abortion), use the antepartum and postpartum codes 59425, 59426, and 59430.",
    ],
    tips: [
      "Think of the global code as a three-part sandwich. If you served the whole sandwich, report the global code. If you served only part, report only that part.",
      "Two questions on every OB case: (1) which type of delivery? (2) how much of the care did MY doctor give?",
    ],
    traps: [
      "Reporting a global code (59400, 59510, 59610, 59618) when the doctor did not provide the prenatal care. Use the delivery-only or delivery-plus-postpartum code instead.",
      "Billing separate office E/M visits for routine prenatal or postpartum visits that are already inside the global code. (The opposite error also happens: extra visits or services beyond the routine schedule are coded separately.)",
      "Reporting 59409 and then adding an E/M code for the routine postpartum visits. If the doctor gave the postpartum care too, 59410 covers it.",
    ],
  },
  {
    id: "delivery-codes",
    n: 2,
    title: "Delivery Types, Cesarean & VBAC — and the Separate Services",
    range: "59409–59430 · 59510–59525 · 59610–59622 · 59300",
    intro: [
      "The codebook lists three kinds of delivery: vaginal, cesarean, and vaginal birth after a previous cesarean (VBAC). Each has the same shape — a global code, a delivery-only code, and a delivery-plus-postpartum code. The pattern is the same in all three, only the numbers change.",
      "VBAC has two outcomes. If the vaginal birth works, use the successful VBAC codes. If the attempt fails and another cesarean is done, use the unsuccessful VBAC codes.",
    ],
    definitions: [
      ["Cesarean delivery", "the baby is delivered through an incision in the belly and uterus."],
      ["Trial of labor after cesarean", "a patient who had a cesarean before and now plans a vaginal birth. She has to be coded in the VBAC family, even if the attempt ends in a second cesarean."],
      ["External cephalic version (ECV)", "turning a baby from a breech position to head-down by pressing on the mother's belly, before labor."],
    ],
    steps: [
      "① Did the patient have a previous cesarean and plan a vaginal birth? Yes → VBAC family (59610–59622). No → vaginal (59400–59430) or cesarean (59510–59515).",
      "② VBAC: did she deliver vaginally (59610–59614)? Or did the attempt fail and end in another cesarean (59618–59622)?",
      "③ Pick the column for how much care this doctor gave: global, delivery + postpartum, or delivery only.",
      "④ Extras that are NOT in the package: external cephalic version (59412, reported with the delivery code), hysterectomy at cesarean (the add-on +59525), and delivery of the placenta as the ONLY service (59414).",
    ],
    categories: [
      {
        name: "Cesarean and VBAC codes",
        codes: [
          ["59510 · 59515 · 59514", "CESAREAN: global · delivery + postpartum · delivery only"],
          ["59610 · 59614 · 59612", "VBAC, SUCCESSFUL vaginal birth after a previous cesarean: global · delivery + postpartum · delivery only"],
          ["59618 · 59622 · 59620", "VBAC attempt UNSUCCESSFUL — cesarean delivery follows: global · delivery + postpartum · delivery only"],
        ],
      },
      {
        name: "Services outside the package",
        codes: [
          ["59412", "External cephalic version, with or without tocolysis — reported IN ADDITION to the delivery code(s) (it is not a designated add-on)"],
          ["59414", "Delivery of the placenta (separate procedure) — for when placenta delivery is the ONLY service; not reported with a delivery code from the same doctor"],
          ["59300", "Episiotomy or vaginal repair by a doctor OTHER than the attending doctor"],
          ["+59525", "ADD-ON: subtotal or total hysterectomy after cesarean delivery"],
        ],
      },
    ],
    rules: [
      "A patient who had a cesarean before and now plans a vaginal birth is coded in the 59610–59622 range: 59610–59614 when the vaginal birth works, and 59618–59622 when it fails and another cesarean is done.",
      "Planned (elective) cesarean deliveries are coded with 59510, 59514, or 59515.",
      "The type of cesarean incision does not change the code. A classical cesarean and a low-transverse cesarean are both reported with 59510, 59514, or 59515.",
      "External cephalic version is NOT packaged with the delivery codes. The codebook says to report 59412 in addition to the delivery code(s).",
      "Delivering the placenta is part of the delivery services. 59414 is only for the case where placenta delivery is the only service, so it is not reported with a delivery code from the same doctor.",
      "Episiotomy or the repair of a vaginal tear is packaged with the delivery codes and is not reported separately — unless it was done by a physician other than the attending physician (59300).",
      "+59525 (hysterectomy after cesarean) is an add-on: it is reported with 59510, 59514, 59515, 59618, 59620, or 59622.",
    ],
    tips: [
      "Memorize the 'shape' once: [global] · [delivery + postpartum] · [delivery only]. Vaginal 59400 / 59410 / 59409. Cesarean 59510 / 59515 / 59514. VBAC 59610 / 59614 / 59612. Failed VBAC 59618 / 59622 / 59620.",
      "For a patient who tried to deliver vaginally after a cesarean, the DECISION to try, made before labor, puts her in the VBAC family — even when she ends with another cesarean.",
    ],
    traps: [
      "Using the plain cesarean code (59510) for a patient whose vaginal attempt after a previous cesarean failed. That is 59618.",
      "Adding a separate code for the episiotomy or the delivery of the placenta when the attending doctor did them.",
      "Forgetting 59412 when the doctor turned the baby before the delivery.",
      "Choosing the cesarean code by the incision (classical vs. low-transverse). The incision does not matter.",
    ],
    cases: [
      {
        title: "Martha's second delivery: vaginal attempt fails, cesarean follows",
        scenario: "Martha previously had a cesarean delivery. For her second child, Dr. Rose, who provides the global OB package, advises that a vaginal delivery is feasible. During her delivery, Martha attempts to give birth vaginally, but is unable to do so. Dr. Rose performs a cesarean delivery. Dr. Rose provides all of Martha's care throughout and after her pregnancy. How should Dr. Rose's services be reported?",
        steps: [
          "Did Martha have a previous cesarean and plan a vaginal birth? Yes. That puts her in the VBAC family, 59610–59622 — not the plain cesarean codes.",
          "Did the vaginal birth succeed? No — it failed, and a cesarean followed. That is the UNSUCCESSFUL VBAC group: 59618, 59620, 59622.",
          "How much care did Dr. Rose give? All of it: prenatal care, the delivery, and the postpartum care. That is the GLOBAL code.",
          "The global code for an unsuccessful VBAC that ends in cesarean is 59618. Nothing else is added — the prenatal visits, labor management, and postpartum visits are all inside it.",
        ],
        answer: "59618",
      },
      {
        label: "HARD SCENARIO",
        title: "Prenatal care split between two doctors",
        scenario: "A patient sees Dr. Lee for two routine prenatal visits, then moves. Dr. Hall takes over, delivers the baby vaginally, and also provides her postpartum care. How should each doctor report?",
        steps: [
          "Dr. Lee saw the patient only 2 times for routine prenatal care. One to three visits are reported with ordinary office E/M codes, so Dr. Lee reports the E/M code for each visit.",
          "Dr. Hall did not give the prenatal care, so Dr. Hall cannot report the global code 59400.",
          "Dr. Hall gave the delivery and the postpartum care, and the delivery was vaginal. That is 59410.",
        ],
        answer: "Dr. Lee: office E/M for each visit · Dr. Hall: 59410",
      },
      {
        label: "HARD SCENARIO",
        title: "Turning a breech baby, then a vaginal delivery",
        scenario: "At 37 weeks a doctor who provides the full OB package turns a breech baby head-down (external cephalic version). The patient later delivers vaginally under the same doctor's care.",
        steps: [
          "The doctor gave all the care, and this was a plain vaginal delivery: the global code 59400.",
          "The external cephalic version is not packaged with the delivery codes. It is reported separately.",
          "External cephalic version has its own code, 59412, and the codebook says to report it in addition to the delivery code. (It is not marked as an add-on with a plus sign.)",
        ],
        answer: "59400, 59412",
      },
      {
        label: "HARD SCENARIO",
        title: "Planned repeat cesarean with a hysterectomy",
        scenario: "A patient with a previous cesarean has a scheduled (elective) repeat cesarean by her obstetrician, who gave all her prenatal care. During the same operation, a total hysterectomy is also done because of uncontrollable bleeding.",
        steps: [
          "A planned (elective) cesarean is coded in the cesarean family, not the VBAC family. Global care by one doctor = 59510.",
          "The hysterectomy is not part of the package. It has an add-on code for a hysterectomy after cesarean: +59525.",
        ],
        answer: "59510, +59525",
      },
    ],
  },
];

export default function GenitourinaryReviewerPart3Page() {
  return (
    <ReviewerShell
      part={3}
      subtitle="Part 3 — Maternal Care and Delivery: the Global Package, Vaginal, Cesarean & VBAC (59400–59622)"
      sections={sections}
      intro={
        <>
          <strong>Maternity care in one idea:</strong> pick the delivery type, then pick how much of the care your doctor gave. The slide question about Martha (a vaginal birth attempt after a previous cesarean that ended in a cesarean) is solved step by step in Section 2, along with three harder scenarios. The lists of what the package includes follow the standard obstetric-package description used in coder training (ACOG), which is more detailed than the codebook text. This part covers the delivery codes; the other maternity services (59000–59899) such as amniocentesis, abortion, and ectopic pregnancy are not built yet.
        </>
      }
    />
  );
}
