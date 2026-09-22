import { QuizPlayer, BLUE, type QuizItem } from "../_digestive/players";

const items: QuizItem[] = [
  {
    topic: "Excision",
    question: "One benign lesion measuring 1.5 cm is removed from the hand, and another benign lesion measuring 1.5 cm is removed from the foot. Both were removed with 0.5 cm skin margins on every side. How should this be coded?",
    correct: "11423, 11423-51",
    wrong: ["11423 x 2 units, no modifier", "11422, 11423", "11423, 11420-51"],
    explanation: "Excised diameter = lesion + margin on each side: 1.5 + 0.5 + 0.5 = 2.5 cm for both lesions. Hand and foot are both in the scalp/neck/hands/feet/genitalia group (11420–11426), and 2.5 cm falls in the 2.1–3.0 cm tier (11423). Excision codes are never summed across separate lesions — each gets its own line, with modifier 51 on the second.",
    lookFor: "Two separate lesions, each measured on its own — excised diameter is never combined across lesions.",
    eliminate: "Units without a modifier miss the multiple-procedure convention. 11422 is the wrong size tier (1.1–2.0 cm). 11420 is the wrong size tier entirely (0.5 cm or less).",
  },
  {
    topic: "Excision",
    question: "A patient had a 1.5 cm malignant lesion excised from his leg. Frozen section reveals residual tumor at the margin, and on the SAME operative session the residual tumor is re-excised, with a 1.0 cm excised diameter. How is this reported?",
    correct: "11601 (one code, based on the widest single excised diameter)",
    wrong: ["11601 and 11600", "11600, with modifier 58", "11601, with modifier 59"],
    explanation: "For a same-session re-excision, the two cuts are not added together and are not reported as two codes — report only the code for the widest single diameter actually excised at that site. The original 1.5 cm excision (1.1–2.0 cm tier) is wider than the 1.0 cm re-excision, so the widest cut made was 1.5 cm. Leg is trunk/arms/legs, malignant, 11601.",
    lookFor: "SAME session — the widest single diameter wins, only one code is reported.",
    eliminate: "Reporting two codes ignores the same-session rule entirely. Modifier 58 is for a re-excision at a DIFFERENT (postoperative) session, not the same one. Modifier 59 isn't needed since only one code is reported.",
  },
  {
    topic: "Destruction",
    question: "A patient had cryosurgical destruction of 14 actinic keratoses. How should this procedure be coded?",
    correct: "17000, 17003 x 13",
    wrong: ["17004", "17000, 17003 x 14", "17110, 17111"],
    explanation: "Actinic keratoses are premalignant. 14 lesions falls in the \"2 through 14\" range for the add-on code +17003, not the 15-or-more stand-alone code 17004. Report 17000 for the first lesion, then +17003 for lesions 2 through 14 — 13 additional lesions, 13 units.",
    lookFor: "Lesion count relative to the 14-vs-15 cutoff between 17003 and 17004.",
    eliminate: "17004 alone is only for 15+ lesions. 13, not 14, additional units are needed (17000 already covers lesion #1). 17110/17111 are for a different family (benign lesions other than vascular/skin tags), not premalignant ones.",
  },
  {
    topic: "Mohs surgery",
    question: "A patient comes in for Mohs with two separate BCC lesions: the right neck (2 stages) and the left ear (1 stage). Which family of Mohs codes applies to BOTH lesions?",
    correct: "17311 / +17312 (head, neck, hands, feet, genitalia, or complex-tissue sites)",
    wrong: ["17313 / +17314 for the neck, 17311 / +17312 for the ear", "A third code family just for the ear", "17313 / +17314 for both (trunk/arms/legs)"],
    explanation: "Mohs only has TWO anatomical groups, not three. 17311/+17312 covers head, neck, hands, feet, genitalia, or any site with surgery directly involving muscle/cartilage/bone/tendon/major nerves/vessels. 17313/+17314 covers trunk, arms, or legs. Both the neck and the ear fall under the head/neck group — there's no separate face/eyelid/ear/lip family for Mohs, unlike excision and destruction.",
    lookFor: "Whether the site is head/neck-adjacent (17311 family) or trunk/arms/legs (17313 family) — Mohs never splits further than that.",
    eliminate: "A trunk/arms/legs code would misclassify head-region anatomy. A third family doesn't exist for Mohs. Mixing families for neck vs. ear ignores that both sit in the same group.",
  },
  {
    topic: "Adjacent tissue transfer",
    question: "A patient has a 20 sq cm defect of the right cheek repaired with a rotation flap (adjacent tissue transfer). How should this be coded?",
    correct: "14041",
    wrong: ["14040", "14021", "14001"],
    explanation: "Cheek falls in the forehead/cheeks/chin/mouth/neck/axillae/genitalia/hands/feet group (14040/14041). 14040 only covers defects of 10 sq cm or less — 20 sq cm needs the next tier, 14041 (10.1–30.0 sq cm).",
    lookFor: "The defect area against the 10 sq cm cutoff between the base code and the next tier.",
    eliminate: "14040 understates the defect size. 14021 and 14001 are the wrong anatomical groups (scalp/arms/legs and trunk).",
  },
  {
    topic: "Skin replacement surgery",
    question: "Surgical preparation of a 75 sq cm wound on the right thigh, a 75 sq cm wound on the left thigh, a 20 sq cm wound on the right hand, and a 15 sq cm wound on the left hand — all in one session. How is this coded?",
    correct: "15002-59, +15003 x 1, and 15004-59",
    wrong: ["15002, +15003 x 1, and +15005 x 1", "15002 x 2 and 15004 x 2", "15002, +15003 x 1, and 15004, no modifier"],
    explanation: "Thighs are trunk/arms/legs (15002/+15003): sum 75+75 = 150 sq cm = 15002 (first 100) + 15003 x1 (the remaining 50 sq cm, a part of the next 100). Hands are the \"all other body areas\" group (15004/+15005): sum 20+15 = 35 sq cm, which fits entirely within the first 100 sq cm, so just 15004 alone — no +15005 needed. Different anatomical groups are never summed together, but since BOTH groups are billed the same session, modifier 59 is appended to each group's primary code (15002 and 15004) to show they're distinct sites.",
    lookFor: "Group the wounds by anatomical region FIRST, sum within each group, check the 100 sq cm add-on threshold, then check whether more than one anatomic grouping was billed the same day.",
    eliminate: "+15005 would be needed only if the hand total exceeded 100 sq cm. Reporting 15002 and 15004 as separate units per wound ignores the same-group summing rule. Leaving off modifier 59 when two different anatomic groupings are billed the same session misses the required distinct-site modifier.",
  },
  {
    topic: "Repair (closure)",
    question: "A physician repairs three simple wounds on the same date: a 4 cm laceration on the trunk, a 3 cm laceration on the arm, and a 2 cm laceration on the face. How are the lengths combined for coding?",
    correct: "Trunk + arm add together (7 cm, one code); the face wound is coded separately",
    wrong: ["All three add together into one 9 cm code", "None of the lengths are added — three separate codes", "Trunk and face add together; the arm is separate"],
    explanation: "Simple repair has two anatomical groups: 12001–12007 (scalp, neck, axillae, external genitalia, trunk, extremities including hands/feet) and 12011–12018 (face, ears, eyelids, nose, lips, mucous membranes). Trunk and arm are the SAME group and SAME classification (simple), so their lengths add: 4 + 3 = 7 cm, one code. The face wound is a DIFFERENT group, so it is never added in — it gets its own code.",
    lookFor: "Same classification AND same anatomical group is required before lengths are added together.",
    eliminate: "Adding all three ignores that the face wound is a different anatomical group. Reporting three separate codes ignores that trunk and arm DO qualify to be combined. Trunk and face are different groups and cannot be added.",
  },
  {
    topic: "Incision and drainage",
    question: "A patient underwent incision and drainage of a left arm skin abscess, with no drain placement, packing, infection, hemorrhage, or extensive time documented. How should this be coded?",
    correct: "10060",
    wrong: ["10061", "10080", "11740"],
    explanation: "With no more specific location subterm documented, code to \"skin.\" Since none of the complexity markers (drain, packing, infection, hemorrhage requiring ligation, extensive time) are documented, this defaults to the simple/single code, 10060, not the complicated/multiple code 10061.",
    lookFor: "Whether any of the five complexity markers are documented — none here means simple/single.",
    eliminate: "10061 needs at least one complexity marker. 10080 is the pilonidal cyst I&D code, a different condition entirely. 11740 is for evacuating a subungual hematoma, unrelated to this scenario.",
  },
  {
    topic: "Breast procedures",
    question: "A 65-year-old patient undergoes a left radical mastectomy with axillary lymph node dissection. Internal mammary lymph nodes are not mentioned. How should this be reported?",
    correct: "19305",
    wrong: ["19306", "19307", "19303"],
    explanation: "19305 is the plain radical mastectomy (pectoral muscles + axillary lymph nodes). 19306 is specifically the Urban-type radical mastectomy, which additionally removes the internal mammary lymph nodes — since those aren't mentioned here, it isn't the Urban type. 19307 is modified radical (pectoralis major spared), which doesn't match \"radical\" in the scenario. 19303 is simple mastectomy, which removes no lymph nodes or pectoral muscle.",
    lookFor: "The word \"radical\" plus whether internal mammary nodes are explicitly mentioned — that's the only thing separating 19305 from 19306.",
    eliminate: "19306 requires internal mammary node removal to be documented. 19307 is a different procedure (modified radical, pectoralis major preserved). 19303 doesn't match a radical procedure at all.",
  },
  {
    topic: "Pressure ulcers",
    question: "A sacral pressure ulcer is repaired using a myocutaneous flap. Besides the pressure-ulcer excision code itself, what else should be reported?",
    correct: "An additional flap code, 15734 or 15738",
    wrong: ["An additional skin graft code, 15100 or 15101", "Nothing else — the flap is packaged into the excision code", "An additional adjacent tissue transfer code"],
    explanation: "When a pressure ulcer defect is repaired using a muscle or myocutaneous flap, report an additional code, 15734 or 15738, on top of the site-specific pressure-ulcer excision code. A split-thickness skin graft closure (not a flap) is what calls for the 15100/15101 add-on instead.",
    lookFor: "Which closure method was used — flap vs. skin graft calls for a different add-on code.",
    eliminate: "15100/15101 is the pairing for a SKIN GRAFT closure, not a flap. The flap is not packaged — it needs its own add-on code. Adjacent tissue transfer isn't the code family used for pressure ulcer flap closures.",
  },
];

export default function IntegumentaryPracticeQuizPage() {
  return (
    <QuizPlayer
      kicker="10,000 SERIES · PRACTICE QUIZ"
      title="Integumentary System Practice Quiz"
      blurb={`${items.length} scenario questions — excision, destruction, Mohs surgery, adjacent tissue transfer, skin replacement, repair, incision and drainage, and breast procedures. Each answer shows what to look for and how to eliminate the wrong choices.`}
      nav={[
        { href: "/cpt/surgery/10,000", label: "10,000 Series home" },
        { href: "/cpt/surgery/10000-series-guidelines-reviewer", label: "Reviewer Part 1" },
        { href: "/cpt/surgery/10000-series-guidelines-reviewer-part-2", label: "Part 2" },
        { href: "/cpt/surgery/10000-series-guidelines-reviewer-part-3", label: "Part 3" },
        { href: "/cpt/surgery/10000-series-flashcards", label: "Flashcards" },
        { href: "/cpt/surgery/10000-series-discussion-guide", label: "Discussion Guide" },
      ]}
      items={items}
      backHref="/cpt/surgery/10,000"
      backLabel="← Back to the 10,000 Series"
      theme={BLUE}
    />
  );
}
