import { ReviewerShell, type Subsection } from "../_integumentary/kit";
import { ExcisedDiameterDiagram, AnatomicalGroupDiagram, MohsStageBlockDiagram } from "../_integumentary/diagrams";

const sections: Subsection[] = [
  {
    id: "removal-foundations",
    n: 1,
    title: "How the Chapter Is Built, and the Smaller Removal Codes",
    range: "10004–11201",
    intro: [
      "The Integumentary System chapter (10004–19499) is organized by procedure TYPE, running roughly from the simplest skin work to the most reconstructive: sampling and opening things up first, then removing lesions, then repairing and rebuilding.",
      "Before the deck's own slides begin (they start mid-way through lesion removal), five smaller code families sit at the front of the chapter. They rarely get their own slide deck, but they show up constantly on the exam, so this section covers them first.",
    ],
    diagram: <AnatomicalGroupDiagram />,
    definitions: [
      ["FNA biopsy", "sampling cells with a fine needle for cytology (not a tissue core). Organized by imaging guidance, each a primary + add-on pair: 10021/10004 no guidance, 10005/10006 ultrasound, 10007/10008 fluoroscopy, 10009/10010 CT, 10011/10012 MRI. Billed once per LESION per session, regardless of needle passes."],
      ["Debridement", "two separate families: 11000–11001 for extensive eczematous/infected skin, and 11042–11047 for depth-based WOUND debridement (11042/+11045 subcutaneous tissue, 11043/+11046 muscle/fascia, 11044/+11047 bone), each billed by the DEEPEST layer removed, then by surface area (first 20 sq cm, then each additional 20 sq cm or part thereof)."],
      ["Paring or cutting", "removal of a corn or callus (benign hyperkeratotic skin), 11055–11057, billed by the number of lesions (one, 2–4, or more than 4)."],
      ["Biopsy (11102–11107)", "organized by TECHNIQUE, not diagnosis: 11102/11103 tangential (shave/scoop/curette), 11104/11105 punch (full-thickness cylinder; simple closure included), 11106/11107 incisional (full-thickness wedge). One PRIMARY code per encounter no matter how many techniques are used — every other lesion sampled, by any technique, is billed with THAT technique's own add-on code."],
      ["Removal of skin tags", "11200 (up to and including 15 lesions) and +11201 (each additional 10 lesions or part thereof)."],
    ],
    steps: [
      "① Is this tissue being taken JUST to look at it under a microscope (biopsy/FNA), or is it being taken off because it's unwanted tissue (debridement, paring, skin tag)? That decides which family you're in.",
      "② For biopsy or debridement, which TECHNIQUE or DEPTH was documented? That picks the code family.",
      "③ Count lesions or measure area, then read the primary-plus-add-on pair for that family.",
      "④ Ask whether the sampling was routine (tissue from an excision sent to pathology) — if so, it's not a separately billable biopsy at all.",
    ],
    categories: [
      {
        name: "Quick code map for the smaller removal families",
        codes: [
          ["10021 / +10004", "FNA biopsy, no imaging guidance — first lesion / each additional"],
          ["11000 / +11001", "Debridement of extensive eczematous or infected skin"],
          ["11042 / +11045 · 11043 / +11046 · 11044 / +11047", "Wound debridement — subcutaneous · muscle/fascia · bone"],
          ["11055–11057", "Paring or cutting of a benign hyperkeratotic lesion (corn/callus)"],
          ["11102 / +11103 · 11104 / +11105 · 11106 / +11107", "Biopsy — tangential · punch · incisional"],
          ["11200 / +11201", "Removal of skin tags — up to 15 / each additional 10"],
        ],
      },
    ],
    rules: [
      "FNA and debridement are never billed by \"number of passes\" or \"how much effort\" — always by lesion count or by area/depth as the code descriptor says.",
      "For multiple debrided wounds, sum the area of wounds debrided to the SAME depth; never combine sums across different depths. If different-depth groups are both billed the same day, append modifier 59 to whichever code would otherwise look like it overlaps the other depth group.",
      "Imaging guidance codes (76942, 77002, 77012, 77021) are bundled into the FNA codes and never separately reported.",
      "Sampling only the stratum corneum (skin scraping, tape stripping, by any method) is not a skin biopsy at all — it doesn't qualify for 11102–11107.",
    ],
    tips: [
      "Biopsy hierarchy in one line: ONE primary code total per encounter, no matter the technique — every other lesion gets its own technique's add-on.",
      "CPT's own debridement example: bone debrided from a 4 sq cm and a 10 sq cm wound (both bone-depth) = 14 sq cm combined = 11044 alone. Subcutaneous tissue debrided from a 16 sq cm and a 10 sq cm wound = 26 sq cm combined = 11042 + 11045.",
    ],
    traps: [
      "Reporting a biopsy for tissue that was simply sent to pathology after an excision or shave removal — that's routine, not a separate billable biopsy.",
      "Converting every additional lesion to match the PRIMARY code's technique. Each additional lesion keeps its OWN technique's add-on code.",
    ],
  },
  {
    id: "excision",
    n: 2,
    title: "Shaving & Lesion Excision",
    range: "11300–11313 · 11400–11471 · 11600–11646",
    intro: [
      "Shaving and excision are both ways to remove a lesion from the skin surface, but excision is a full-thickness cut that goes all the way through the dermis (and is reported by EXCISED diameter), while shaving is a partial-thickness slice (reported by lesion diameter, no margin added).",
      "Excision is the workhorse of this topic, and almost everything the deck's Coding Guidelines teach about it — closure rules, re-excision rules — comes up constantly on the exam.",
    ],
    diagram: <ExcisedDiameterDiagram />,
    definitions: [
      ["Shaving", "a partial-thickness removal (razor, scalpel blade, or curette) of an epidermal or dermal lesion, without a full-thickness incision. Billed per LESION by its own diameter (no margin added), 11300–11313."],
      ["Excision (lesion)", "full-thickness removal of a lesion, including margins, through the dermis. Includes simple closure when performed."],
      ["Excised diameter", "the greatest clinical diameter of the lesion PLUS the narrowest margin required for complete excision, based on the physician's own judgment — measured BEFORE the cut, not from the healed scar or the pathology report. This is what picks the size-tier code, whether the defect is closed simply or reconstructed."],
    ],
    steps: [
      "① Shave or full excision? If full-thickness, it's an excision — move to step 2.",
      "② Benign or malignant (per the pathology)? That picks the code family (11400s vs. 11600s).",
      "③ Which body-region group — trunk/arms/legs, or the \"named\" group (scalp/neck/hands/feet/genitalia, or face/ears/eyelids/nose/lips/mucous membrane)?",
      "④ Excised diameter (lesion + margin), in the size tier for that group.",
      "⑤ How was the defect closed — simple (bundled), intermediate/complex (separate), or reconstructive (separate, unless it's an ATT, which absorbs the excision entirely)?",
      "⑥ Was there a re-excision? If so, was it the SAME operative session or a DIFFERENT (postoperative) one?",
    ],
    categories: [
      {
        name: "Benign lesion excision (11400–11471) — by group and excised diameter",
        codes: [
          ["11400–11406", "Trunk, arms, or legs (T/A/L) — 0.5 cm or less through over 4.0 cm"],
          ["11420–11426", "Scalp, neck, hands, feet, or genitalia (S/N/H/F/G) — same 6 size tiers"],
          ["11440–11446", "Face, ears, eyelids, nose, lips, or mucous membrane (F/E/E/N/L/M) — same 6 size tiers"],
          ["11450–11471", "Condition-specific excisions — specifically hidradenitis (axillary, inguinal, and perianal/perineal/umbilical, with their own repair-type split — see the table below) — a separate block from the \"general\" codes above, not to be confused with pilonidal cyst excision (11770–11772), which lives in a different part of the chapter"],
        ],
      },
      {
        name: "Malignant lesion excision (11600–11646) — by group and excised diameter",
        codes: [
          ["11600–11606", "Trunk, arms, or legs"],
          ["11620–11626", "Scalp, neck, hands, feet, or genitalia"],
          ["11640–11646", "Face, ears, eyelids, nose, lips, or mucous membrane"],
        ],
      },
      {
        name: "Condition-specific excision — hidradenitis (11450–11471), by site and repair complexity",
        codes: [
          ["11450 / 11451", "Axillary — with simple or intermediate repair / with complex repair"],
          ["11462 / 11463", "Inguinal — with simple or intermediate repair / with complex repair"],
          ["11470 / 11471", "Perianal, perineal, or umbilical — with simple or intermediate repair / with complex repair"],
        ],
      },
    ],
    rules: [
      "Simple (non-layered) closure of the defect is PACKAGED into the excision code — do not report a separate repair code.",
      "Intermediate or complex closure is reported SEPARATELY, in addition to the excision code (12031–13153).",
      "Reconstructive closure (graft or flap, 15002–15770) is reported separately — UNLESS the reconstruction is specifically an adjacent tissue transfer (14000–14302), in which case the excision is not separately reportable at all; the ATT code already includes it.",
      "Re-excision of a MALIGNANT lesion, SAME operative session: report only the code for the widest single diameter actually excised at that site — don't add the two diameters together, and don't report two codes.",
      "Re-excision of a malignant lesion at a DIFFERENT (postoperative) session, same physician: report the code for the amount of skin removed that day, plus modifier 58 (staged/related procedure during the postoperative period).",
      "Excised diameter is unaffected by how the defect ends up closed — the size tier doesn't change based on the closure method.",
      "When two or more lesions are excised, code EACH one separately by its own excised diameter — excision codes are never summed across lesions the way repair length is.",
    ],
    tips: [
      "\"Excised diameter\" always beats \"lesion size\" as the phrase to look for in a question — if margins are given, add them on both sides before picking the tier.",
      "Only two body-region groups really exist for most of this chapter — see the diagram. Excision and destruction split the second group further into two named sub-groups; simple/intermediate repair keeps it as just two.",
      "Hidradenitis excision (11450–11471) is a self-contained family, not a size-tiered one like the general 11400s/11600s — the repair type (simple/intermediate vs. complex) is baked directly into the code itself, so there's no separate closure code to hunt for.",
    ],
    traps: [
      "Treating a benign lesion excision like a repair and adding two lesions' diameters together. Report each lesion with its own code (append modifier 51 to the second).",
      "Forgetting that an ATT swallows the excision code entirely — billing both 11400-series AND 14000-series for the same lesion double-dips.",
      "Using modifier 58 on a SAME-session re-excision. Modifier 58 is for the DIFFERENT-session case only.",
    ],
    cases: [
      {
        label: "DECK CASE · SOLVED",
        title: "Two benign lesions, same size, different limbs",
        scenario: "One benign lesion measuring 1.5 cm is removed from the hand, and another benign lesion measuring 1.5 cm is removed from the foot. Both benign lesions were removed with 0.5 cm skin margins on each side. How should this be coded?",
        steps: [
          "Excised diameter = lesion + margin on EACH side: 1.5 + 0.5 + 0.5 = 2.5 cm, for both lesions.",
          "Hand and foot are both in the scalp/neck/hands/feet/genitalia (S/N/H/F/G) group — same anatomical group, benign excision codes 11420–11426.",
          "2.5 cm falls in the 2.1–3.0 cm tier = 11423.",
          "Two separate lesions are never summed for excision — each gets its own code. Report 11423 for the hand, then 11423 again for the foot with modifier 51 (multiple procedure).",
        ],
        answer: "11423 (hand) and 11423-51 (foot).",
      },
      {
        label: "DECK CASE · SOLVED",
        title: "Melanoma with wide margins",
        scenario: "Excision of a 2.2 cm lesion of the left leg with 1.2 cm skin margins on all sides. Pathology confirmed melanoma. The operative report noted moderate to wide surrounding grossly normal margins. The patient had a history of malignant melanoma 20 years prior. How should this procedure be coded?",
        steps: [
          "The prior melanoma history is background, not a coding factor — it doesn't change the excised diameter or the code family.",
          "Excised diameter = 2.2 + 1.2 + 1.2 = 4.6 cm.",
          "Leg is in the trunk/arms/legs (T/A/L) group, and the pathology is malignant, so the family is 11600–11606.",
          "4.6 cm is over 4.0 cm, the top tier.",
        ],
        answer: "11606.",
      },
      {
        label: "DECK CASE · SOLVED",
        title: "Residual tumor, re-excised the SAME session",
        scenario: "A patient had a 1.5 cm malignant lesion excised from his leg. Frozen section pathology reveals residual tumor at the margin. On the same operative session, the residual tumor was re-excised, with a 1.0 cm excised diameter. How should this procedure be coded?",
        steps: [
          "This is a re-excision performed in the SAME operative session as the original excision.",
          "The rule for same-session re-excision: report only the code for the WIDEST single diameter actually excised at that site — the two excisions are not added together, and only one code is reported.",
          "The original excision's diameter (1.5 cm, 1.1–2.0 cm tier) is wider than the re-excision's (1.0 cm) — the widest single cut made at this site was 1.5 cm.",
          "Leg = trunk/arms/legs, malignant = 11600–11606; 1.1–2.0 cm tier = 11601.",
        ],
        answer: "11601 — one code only, based on the widest single excised diameter (1.5 cm).",
      },
      {
        label: "DECK CASE · SOLVED",
        title: "Same scenario — but re-excised at a DIFFERENT session",
        scenario: "A patient had a 1.5 cm malignant lesion excised from his leg at a previous operative session. During the postoperative period, a residual tumor was noted at the margin, and it was re-excised at a later session. The re-excision's excised diameter was 1.0 cm. How should this procedure be coded?",
        steps: [
          "This time the re-excision happens at a DIFFERENT session, during the postoperative period of the original surgery, by the same physician.",
          "The rule for a different-session re-excision: report only the amount of skin removed THAT DAY, and append modifier 58 (staged/related procedure during the postoperative period).",
          "The re-excision day removed a 1.0 cm excised diameter. Leg, malignant, 0.6–1.0 cm tier = 11600.",
        ],
        answer: "11600-58.",
      },
      {
        label: "PREWORK CASE · SOLVED",
        title: "Excision of axillary hidradenitis",
        scenario: "Preoperative Diagnosis: Left axillary hidradenitis. Postoperative Diagnosis: Left axillary hidradenitis. Operation: Excision of hidradenitis. An elliptical skin incision was made in the axilla to excise most of the hidradenitis tracts. The incision was carried down through subcutaneous tissue. The underlying subcutaneous tissue was excised. The subcutaneous tissues were closed with a continuous suture of 2-0 Vicryl. The skin edges were stapled together. What is/are the correct CPT® code(s) for this procedure?",
        steps: [
          "Excision of hidradenitis has its OWN dedicated code family, separate from the general benign-lesion excision codes (11400–11446) — the axillary-specific codes are 11450 (with simple or intermediate repair) and 11451 (with complex repair). These codes bundle the repair type INTO the excision code itself, unlike ordinary lesion excision where closure is often separately reported.",
          "The closure described — a continuous suture of the subcutaneous layer plus skin staples — is a simple/intermediate closure, not a complex (e.g., flap or graft) closure.",
        ],
        answer: "11450.",
      },
    ],
  },
  {
    id: "destruction",
    n: 3,
    title: "Destruction",
    range: "17000–17004 · 17106–17111 · 17260–17286",
    intro: [
      "Destruction is ablation of a lesion by ANY method — electrosurgery, cryosurgery, laser, or chemical treatment — with no tissue specimen sent for margin examination (that's the key difference from excision). It has three completely separate code families depending on how worrisome the lesion is.",
    ],
    definitions: [
      ["Destruction", "ablation of a benign, premalignant, or malignant lesion by any method. Local anesthesia is packaged; closure is usually not needed and is reported separately only if performed."],
    ],
    steps: [
      "① Premalignant, benign, or malignant? That picks the family.",
      "② Premalignant — count lesions. Benign — is it a vascular proliferative lesion (sized by area) or another type (counted by number)? Malignant — which body-region group, then which lesion-diameter tier?",
    ],
    categories: [
      {
        name: "Premalignant lesions (e.g. actinic keratosis) — 17000–17004",
        codes: [
          ["17000", "First lesion"],
          ["+17003", "Each additional lesion, 2nd through 14th (use with 17000)"],
          ["17004", "15 or more lesions (stand-alone — do not also report 17000/17003)"],
        ],
      },
      {
        name: "Benign lesions — 17106–17111",
        codes: [
          ["17106–17108", "Cutaneous vascular proliferative lesions, by AREA: under 10 sq cm · 10.0–50.0 sq cm · over 50 sq cm"],
          ["17110–17111", "Other benign lesions (not skin tags, not vascular) — by NUMBER: up to 14 lesions (17110) · 15 or more (17111)"],
        ],
      },
      {
        name: "Malignant lesions, any method — 17260–17286 (by group, then lesion diameter)",
        codes: [
          ["17260–17266", "Trunk, arms, or legs — 0.5 cm or less through over 4.0 cm"],
          ["17270–17276", "Scalp, neck, hands, feet, or genitalia — same 6 tiers"],
          ["17280–17286", "Face, ears, eyelids, nose, lips, or mucous membrane — same 6 tiers"],
        ],
      },
    ],
    rules: [
      "Malignant destruction is sized by the LESION's own diameter — no margin is added, unlike excision.",
      "17004 is a stand-alone code for 15+ premalignant lesions; it replaces 17000+17003 entirely rather than being added on top.",
      "Closure after destruction is uncommon and, when it does happen, is reported separately — it's never packaged the way excision's simple closure is.",
    ],
    tips: [
      "Destruction has THREE severity families (premalignant/benign/malignant); excision only has two (benign/malignant). Don't cross-apply excision's two-family habit here.",
      "Malignant destruction reuses the SAME three anatomical groups as malignant excision, just with different code numbers.",
    ],
    traps: [
      "Adding a margin to a destruction lesion's diameter — destruction has no margin concept; it's sized by the lesion alone.",
      "Reporting 17000 + 17003 for 15 or more lesions instead of switching to the stand-alone 17004.",
    ],
    cases: [
      {
        label: "DECK CASE · SOLVED",
        title: "Cryosurgery on 14 actinic keratoses",
        scenario: "A patient had cryosurgical destruction of 14 actinic keratoses. How should this procedure be coded?",
        steps: [
          "Actinic keratoses are premalignant lesions.",
          "14 lesions falls in the \"2 through 14\" range for the add-on code, not the 15-or-more stand-alone code.",
          "Report 17000 for the first lesion, then +17003 for lesions 2 through 14 — that's 13 additional lesions, so 13 units.",
        ],
        answer: "17000 and 17003 × 13.",
      },
      {
        label: "DECK CASE · SOLVED",
        title: "Two malignant lesions, different regions",
        scenario: "A physician destroys two malignant lesions using electrosurgery. One lesion on the patient's back is 2 cm in diameter; the other, on the scalp, is 3 cm in diameter. How should you report this encounter?",
        steps: [
          "Back = trunk (T/A/L group), 2 cm falls in the 1.1–2.0 cm tier = 17262.",
          "Scalp = scalp/neck/hands/feet/genitalia group, 3 cm falls in the 2.1–3.0 cm tier = 17274.",
          "Different anatomical groups, so both are reported as their own codes (no summing).",
        ],
        answer: "17262 and 17274.",
      },
      {
        label: "PREWORK CASE · SOLVED",
        title: "Three malignant lesions, two anatomical sites, two destruction methods",
        scenario: "Two malignant lesions on the scalp measuring 1.1 cm and 2.0 cm, and one malignant lesion on the neck measuring 2.2 cm were destroyed. Electrocautery was used for the first two lesions and laser was used for the third lesion. What is/are the correct CPT® code(s) for this procedure?",
        steps: [
          "Malignant destruction codes (17260–17286) are \"any method\" codes — electrocautery vs. laser makes no difference to code selection.",
          "Scalp AND neck are BOTH in the scalp/neck/hands/feet/genitalia anatomical group for malignant destruction (17270–17276) — same group, even though they're different specific sites.",
          "Each lesion is coded by its OWN diameter, never summed with another lesion (same rule as excision). 1.1 cm and 2.0 cm both fall in the 1.1–2.0 cm tier (17272). 2.2 cm falls in the 2.1–3.0 cm tier (17273).",
          "Two lesions share the same code (the two scalp lesions), so report that code twice — once plain, once with modifier 51 for the repeat — and report the third (different-tier) code once.",
        ],
        answer: "17273, 17272, 17272-51 (three lesions total; the two 1.1cm/2.0cm scalp lesions share code 17272, reported twice).",
      },
    ],
  },
  {
    id: "mohs",
    n: 4,
    title: "Mohs Micrographic Surgery",
    range: "17311–17315",
    intro: [
      "Mohs is a technique for removing complex or ill-defined skin cancers where the excising surgeon ALSO reads the specimens under the microscope in real time (no separate pathologist), examining 100% of the surgical margins before deciding whether to stop or cut again.",
      "The deck's own slide prints the code range for the third \"F/E/E/N/L/M\" group as 17311–117312, which is a typo — and it points to a bigger structural fact worth knowing: Mohs only has TWO anatomical groups, not three.",
    ],
    diagram: <MohsStageBlockDiagram />,
    definitions: [
      ["Stage", "one full round of removing tissue — may be repeated as many times as necessary until margins are clear."],
      ["Block", "one individual tissue piece embedded in a mounting medium for microscopic sectioning."],
    ],
    steps: [
      "① Which anatomical group — head/neck/hands/feet/genitalia (or any site where surgery directly involves muscle, cartilage, bone, tendon, major nerves or vessels), or trunk/arms/legs?",
      "② How many stages were performed?",
      "③ Did any stage need more than 5 tissue blocks? Each block beyond the first 5, in any stage, is one more +17315 unit.",
      "④ Was a repair, flap, or graft done? Report it separately.",
      "⑤ Is there more than one distinct LESION being treated at this encounter? Each lesion gets its own first-stage code (append modifier 59 to the second lesion's).",
    ],
    categories: [
      {
        name: "Mohs code family (only 2 anatomical groups)",
        codes: [
          ["17311", "Head, neck, hands, feet, genitalia, or any site with surgery directly involving muscle/cartilage/bone/tendon/major nerves/vessels; first stage, up to 5 blocks"],
          ["+17312", "Each additional stage after the first (with 17311), up to 5 blocks"],
          ["17313", "Trunk, arms, or legs; first stage, up to 5 blocks"],
          ["+17314", "Each additional stage after the first (with 17313), up to 5 blocks"],
          ["+17315", "Each additional block after the first 5, ANY stage, either group"],
        ],
      },
    ],
    rules: [
      "There is no separate face/eyelid/lip/ear code family for Mohs. Those areas fall under 17311's \"head, neck\" group, alongside hands, feet, and genitalia.",
      "If any repair, flap, or graft is performed, report it separately.",
      "A diagnostic skin biopsy performed the same day as Mohs is reported separately (11102, 11104, or 11106) with modifier 59.",
      "The frozen section pathology work is reported separately as 88331 with modifier 59; additional special stains are reported separately (88311–88314, 88342) — do not report 88314 with 17311–17315 for ROUTINE frozen section staining.",
    ],
    tips: [
      "Stage vs. block, one line each: stage = a round of cutting; block = a piece of tissue from that round put under the microscope.",
      "\"Up to 5 blocks\" is baked into the base and add-on stage codes — only EXTRA blocks beyond 5, in any stage, need +17315.",
    ],
    traps: [
      "Looking for a third Mohs code family for face/eyelids/lips — it doesn't exist; use 17311.",
      "Reporting +17315 for every block instead of only the blocks beyond the first 5.",
    ],
    cases: [
      {
        label: "DECK CASE · SOLVED",
        title: "Single physician, 3 specimens, first stage of the neck",
        scenario: "Mohs micrographic surgery by a single physician removing and examining three specimens, first stage of the neck. How is this service reported?",
        steps: [
          "Neck falls in the head/neck/hands/feet/genitalia group.",
          "First stage, and 3 specimens (blocks) is within the \"up to 5 blocks\" included in the base code — no +17315 needed.",
        ],
        answer: "17311.",
      },
      {
        label: "DECK CASE · SOLVED",
        title: "Two separate BCC lesions, different stage counts",
        scenario: "A patient comes in for Mohs with two separate lesions: BCC of the right neck and BCC of the left ear. The right neck required 2 stages of MMS with a complex repair measuring 2.7 cm. The left ear required 1 stage of MMS and was repaired with complex repair measuring 1.5 cm. How is this service reported?",
        steps: [
          "Neck and ear are both in the head/neck group, but they are two DISTINCT lesions — each needs its own first-stage code, with modifier 59 on the second to show it's a separate lesion.",
          "Right neck: 2 stages = 17311 (1st stage) + 17312 (2nd stage).",
          "Left ear: 1 stage = 17311-59 (a separate lesion from the neck).",
          "Repairs are reported separately. Complex repair groups: forehead/cheeks/chin/mouth/neck (13131–13133) and eyelids/nose/ears/lips (13151–13153).",
          "Neck complex repair, 2.7 cm, falls in the 2.6–7.5 cm tier = 13132. Ear complex repair, 1.5 cm, falls in the 1.1–2.5 cm tier = 13151.",
        ],
        answer: "17311, +17312, 17311-59, 13132, and 13151.",
      },
    ],
  },
];

export default function IntegumentaryReviewerPart1Page() {
  return (
    <ReviewerShell
      part={1}
      subtitle="Part 1 — Removal Procedures: Shaving, Excision, Destruction & Mohs Surgery (10004–17315)"
      sections={sections}
      intro={
        <>
          <strong>How this series is organized.</strong> This 10,000-series reviewer follows the training deck&apos;s own Topics: Part 1 covers Topic 2 (Removal Procedures — the smaller sampling/removal families, then shaving, excision, destruction, and Mohs surgery). Part 2 covers Topic 3 (Repair Procedures — repair/closure, adjacent tissue transfer, skin replacement surgery, and flaps). Part 3 covers Topic 4 (Other Procedures — incision and drainage, pressure ulcers, burns, nails, pilonidal cysts, and breast procedures). All 8 case questions from the deck&apos;s Removal Procedures section are solved step by step below. This series sits beside the site&apos;s existing 10,000-series study tips and quizzes and does not replace them. Content is paraphrased from the deck and checked against the CPT 2026 codebook — two deck typos (a Mohs code range and a skin-substitute-graft code) are corrected here.
        </>
      }
    />
  );
}
