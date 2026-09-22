import { ReviewerShell, type Subsection } from "../_integumentary/kit";
import { MastectomyLadderDiagram, PressureUlcerFlapDiagram } from "../_integumentary/diagrams";

const sections: Subsection[] = [
  {
    id: "incision-drainage",
    n: 1,
    title: "Incision and Drainage",
    range: "10040–10180",
    intro: [
      "Incision and drainage (I&D) codes open up an infected or fluid-filled pocket and let it drain — the opposite direction from the lesion-removal codes in Part 1, which take tissue OUT to examine or destroy it.",
      "The deck axis'es this family two ways: first by WHICH condition is being drained, then by how COMPLICATED that drainage was.",
    ],
    definitions: [
      ["Incision", "cutting into body tissue(s) or organ(s)."],
      ["Drainage", "withdrawal of fluids and discharges from a wound, sore, or cavity."],
      ["Simple/single vs. complicated/multiple", "the complexity split most of this family uses — documented by any ONE of: placement of a drain, gauze strip packing, presence of infection, hemorrhage requiring ligation, or extensive time."],
    ],
    steps: [
      "① Which condition is being drained — acne, abscess, pilonidal cyst, hematoma/seroma/fluid collection, or a postoperative wound infection? That picks the code family.",
      "② Within that family, is a complexity indicator documented (drain placement, packing, infection, hemorrhage needing ligation, extensive time)? That picks simple/single vs. complicated/multiple, where the family has that split.",
      "③ Is a specific anatomic site named in the note? If so, code to that site's own I&D code elsewhere in the book. If NO specific site is named, default to the general \"skin\" subterm (10040–10180).",
    ],
    categories: [
      {
        name: "Code map by condition",
        codes: [
          ["10040", "Acne surgery (eg, marsupialization, opening or removal of multiple milia, comedones, cysts, pustules)"],
          ["10060 / 10061", "I&D of abscess (eg, carbuncle, suppurative hidradenitis, cutaneous or subcutaneous abscess, cyst, furuncle, or paronychia) — simple/single / complicated/multiple"],
          ["10080 / 10081", "I&D of pilonidal cyst — simple / complicated"],
          ["10140", "I&D of hematoma, seroma, or fluid collection"],
          ["10180", "I&D, complex, postoperative wound infection"],
        ],
      },
    ],
    rules: [
      "If no specific location is documented, code to the general subterm \"skin\" (10040–10180) rather than searching for a body-region-specific I&D code.",
      "If a MORE specific location is documented, code to that location's own I&D code instead — this family is a fallback, not the first place to look.",
      "Only the abscess and pilonidal-cyst pairs split into simple/single vs. complicated/multiple; hematoma/seroma/fluid collection (10140) and postoperative wound infection (10180) are each single, stand-alone codes with no complexity split.",
    ],
    tips: [
      "Quick memory hook: acne, abscess, pilonidal, hematoma, postop wound infection — five conditions, ordered roughly the way the deck lists them.",
      "Q14's own answer slide cites three equally valid Alphabetic Index paths that all land on the same code — Incision and Drainage > Skin; Drainage > abscess > skin; and Skin > incision > drainage > abscess — a reminder that CPT's index tolerates more than one route to the same code.",
    ],
    traps: [
      "Assuming any abscess automatically gets the complicated/multiple code. Without a documented complexity indicator (drain, packing, infection, hemorrhage, extensive time), it defaults to simple/single.",
    ],
    cases: [
      {
        label: "DECK CASE · SOLVED",
        title: "I&D of a skin abscess, no complexity documented",
        scenario: "Patient underwent an I&D of L arm skin abscess. How should this encounter be coded?",
        steps: [
          "The condition is an abscess, so the family is 10060–10061.",
          "No more specific location subterm applies to \"arm\" here, so the coder defaults to the general \"skin\" subterm.",
          "Nothing in the note documents a complexity indicator — no drain placement, packing, infection, hemorrhage requiring ligation, or extensive time — so this defaults to simple/single, not complicated/multiple.",
        ],
        answer: "10060 (I&D of abscess, skin, simple/single).",
      },
    ],
  },
  {
    id: "pressure-ulcers",
    n: 2,
    title: "Pressure Ulcers (Decubitus Ulcers)",
    range: "15920–15958",
    intro: [
      "Pressure ulcer (decubitus ulcer) excision codes are \"condition-specific\" excision codes, sitting apart from the general excision families in Part 1 — CPT gives each of the four classic pressure points its own code block.",
      "Layer the same three questions onto every pressure ulcer question: WHERE, how is it CLOSED, and was bone also removed?",
    ],
    diagram: <PressureUlcerFlapDiagram />,
    definitions: [
      ["Ostectomy", "surgical removal of bone — performed here to remove the underlying bony prominence that keeps re-creating the pressure point."],
      ["Coccygeal excision", "built differently from the other three sites: CPT bundles the coccygectomy into the excision itself, so there is no separate \"with/without ostectomy\" choice — the code already assumes bone is removed."],
    ],
    steps: [
      "① Which site — coccygeal, sacral, ischial, or trochanteric? That picks the code block.",
      "② How is the defect closed — primary suture, skin flap closure, or is the excision only IN PREPARATION for a muscle/myocutaneous flap or skin graft closure (billed separately)?",
      "③ Was an ostectomy also performed? Most blocks split into a \"with ostectomy\" / \"without ostectomy\" pair at each closure tier — ischial's flap/graft-prep tier is the exception, where ostectomy is already built into the single code.",
      "④ If the closure was a muscle/myocutaneous flap, also report 15734 (trunk) or 15738 (lower extremity). If it was a split-thickness skin graft, also report 15100 or 15101.",
    ],
    categories: [
      {
        name: "Code map by site (excision codes)",
        codes: [
          ["15920 / 15922", "Coccygeal — primary suture / flap closure (coccygectomy is bundled into both)"],
          ["15931/15933 · 15934/15935 · 15936/15937", "Sacral — primary suture (±ostectomy) · skin flap closure (±ostectomy) · in preparation for muscle/myocutaneous flap or skin graft closure (±ostectomy)"],
          ["15940/15941 · 15944/15945 · 15946", "Ischial — primary suture (±ostectomy) · skin flap closure (±ostectomy) · in preparation for flap/graft closure (ostectomy bundled, one code only)"],
          ["15950/15951 · 15952/15953 · 15956/15958", "Trochanteric — primary suture (±ostectomy) · skin flap closure (±ostectomy) · in preparation for flap/graft closure (±ostectomy)"],
          ["15999", "Unlisted procedure, excision pressure ulcer"],
        ],
      },
    ],
    rules: [
      "If the defect is repaired with a muscle or myocutaneous flap, ALSO report 15734 (trunk) or 15738 (lower extremity) in addition to the excision code.",
      "If the defect is repaired with a split-thickness skin graft, ALSO report 15100 or 15101 in addition to the excision code.",
      "\"Primary suture\" and \"skin flap closure\" codes already include their own closure — it's only the \"in preparation for muscle/myocutaneous flap or skin graft closure\" tier that needs a second, separate closure code, since that tier bills the excision/prep step only.",
    ],
    tips: [
      "Coccygeal is the odd one out — only 2 codes total, because coccygectomy always comes along with the excision. Every other site gives you the ostectomy choice.",
      "Ischial is the second odd one out — its flap/graft-prep tier (15946) is a single code with ostectomy already built in, unlike sacral's and trochanteric's matching tier, which still splits into a pair.",
    ],
    traps: [
      "Billing 15734/15738 or 15100/15101 on top of a straightforward primary-suture or skin-flap-closure code — those two additional-code rules apply ONLY to the muscle/myocutaneous-flap-or-graft-prep tier.",
    ],
  },
  {
    id: "burns",
    n: 3,
    title: "Burns, Local Treatment",
    range: "16000–16036",
    intro: [
      "16000–16036 cover LOCAL treatment of the burned surface only — they can be reported right alongside E/M and Medicine-section services for the same encounter.",
      "This is a short, size- and degree-driven family: how deep is the burn, and how much surface area does the dressing/debridement session cover?",
    ],
    definitions: [
      ["Escharotomy", "a surgical incision through burned skin (eschar) to relieve pressure on the tissue underneath — a distinct procedure from dressing or debridement."],
      ["Lund-Browder diagram", "a body-map chart used to record burn treatment by body site and AGE-ADJUSTED percentage of total body surface area (a child's head, for example, is a larger share of TBSA than an adult's) — this is what supports the size tier chosen for 16020–16030."],
    ],
    steps: [
      "① What degree is the burn, and is this the initial treatment? First-degree, initial treatment only, uses 16000.",
      "② For a second-degree burn needing dressing and/or debridement, how much total body surface area (TBSA) does the session cover — small, medium, or large?",
      "③ Is this an escharotomy (a release incision), not a dressing/debridement? If so, code by NUMBER OF INCISIONS instead of by area.",
      "④ Was a skin graft or skin substitute used to close the wound? Report that additionally from 15100–15777 — it's never bundled into the 16000-series codes.",
    ],
    categories: [
      {
        name: "Code map",
        codes: [
          ["16000", "First-degree burn, initial treatment, when no more than local treatment is required"],
          ["16020", "Dressings and/or debridement of partial-thickness (second-degree) burns, initial or subsequent; small — under 5% TBSA"],
          ["16025", "…medium — eg, whole face or whole extremity, or 5% to 10% TBSA"],
          ["16030", "…large — eg, more than 1 extremity, or over 10% TBSA"],
          ["16035 / +16036", "Escharotomy; initial incision / each additional incision"],
        ],
      },
    ],
    rules: [
      "Dressing application and other materials are PACKAGED into 16020–16030 — don't separately bill supplies for these visits.",
      "A skin graft or skin substitute graft used to close the burn wound is reported ADDITIONALLY, from 15100–15777 — it's never included in the local-treatment codes.",
      "16000–16036 can be reported alongside related E/M and Medicine-section services (eg, hospital visits) for managing the burned patient — they aren't mutually exclusive.",
    ],
    tips: [
      "Size tiers for 16020–16030 run small → medium → large, the same shape as most of this chapter's other size-based ladders, just with only 3 rungs instead of 6.",
      "The Lund-Browder diagram is how the size gets DOCUMENTED — age-adjusted percentages by body region — it doesn't change which code range applies, only which size tier.",
    ],
    traps: [
      "Coding an escharotomy the same way as dressing/debridement (by TBSA). Escharotomy (16035/+16036) is counted by NUMBER OF INCISIONS, a completely different axis.",
    ],
  },
  {
    id: "nails",
    n: 4,
    title: "Nails",
    range: "11719–11765",
    intro: [
      "The training deck's Topic 4 slides jump straight from Burns to Procedures on the Breasts — Nails never gets its own slide in this deck's export. Everything in this section is sourced directly from the CPT 2026 codebook instead, not paraphrased from the deck.",
      "The nail family is small and mostly non-overlapping — each code covers a distinct nail procedure, so this reads more like a vocabulary list than a multi-axis code ladder.",
    ],
    definitions: [
      ["Nondystrophic nail", "a structurally normal nail — trimming it (11719) is a maintenance-type procedure, not a treatment for nail disease or deformity."],
      ["Avulsion", "forcible separation and removal of all or part of the nail plate from the nail bed."],
      ["Nail matrix", "the tissue at the base of the nail bed that produces new nail growth — removing or ablating it (11750, 11762) is what makes a nail removal PERMANENT rather than temporary."],
    ],
    steps: [
      "① Is the nail itself structurally normal (trimming, 11719), or is something being removed from or done to it?",
      "② Debridement (any method), avulsion (partial/complete nail plate removal), or evacuation of a subungual hematoma? Each has its own single code (or code pair).",
      "③ Is this a PERMANENT removal for an ingrown or deformed nail (11750, or the more limited wedge excision 11765), or a biopsy/repair/reconstruction of the nail bed itself (11755, 11760, 11762)?",
    ],
    categories: [
      {
        name: "Code map",
        codes: [
          ["11719", "Trimming of nondystrophic nails, any number"],
          ["11720 / 11721", "Debridement of nail(s) by any method(s) — 1 to 5 / 6 or more"],
          ["11730 / +11732", "Avulsion of nail plate, partial or complete, simple; single — first nail / each additional nail plate"],
          ["11740", "Evacuation of subungual hematoma"],
          ["11750", "Excision of nail and nail matrix, partial or complete (eg, for an ingrown or deformed nail), for permanent removal"],
          ["11755", "Biopsy of nail unit (eg, plate, bed, matrix, hyponychium, proximal and lateral nail folds) (separate procedure)"],
          ["11760", "Repair of nail bed"],
          ["11762", "Reconstruction of nail bed with graft"],
          ["11765", "Wedge excision of skin of nail fold (eg, for ingrown toenail)"],
        ],
      },
    ],
    rules: [
      "11719 (trimming) is billed once per encounter no matter how many nails are trimmed — it's not a per-nail count the way 11720/11721 is.",
      "11720/11721 and 11730/+11732 are the family's only true count-based pairs: 11720–11721 splits at 1–5 vs. 6+ nails; 11730/+11732 uses a primary-plus-add-on structure, one unit of +11732 per additional nail plate.",
      "11750 and 11765 both address an ingrown/deformed nail, but at different depths: 11750 takes the nail AND its matrix for a permanent fix, while 11765 is a smaller wedge excision of the surrounding nail FOLD skin, not the nail or matrix itself.",
    ],
    tips: [
      "Read \"for permanent removal\" as the tell for 11750 — a nail avulsion alone (11730) is not permanent; it grows back.",
      "11755 is marked a \"separate procedure\" — like other separate-procedure codes across CPT, don't report it in addition to a more extensive nail procedure performed at the same session on the same nail unit.",
    ],
  },
  {
    id: "pilonidal-cyst",
    n: 5,
    title: "Pilonidal Cyst Procedures",
    range: "10080–10081 · 11770–11772",
    intro: [
      "Like Nails, Procedures on Pilonidal Cysts has no dedicated slide in this deck's export — the master topic list names it, but the deck jumps past it. This section is sourced directly from the codebook.",
      "Pilonidal cyst care splits cleanly into two different questions: is this just draining an acute abscess, or is this the definitive surgery to remove the cyst/sinus tract for good?",
    ],
    definitions: [
      ["Pilonidal cyst/sinus", "a cyst or sinus tract that forms near the top of the natal cleft (tailbone area), often containing hair — prone to recurring abscess formation until it is definitively excised."],
    ],
    steps: [
      "① Is this draining an acute, infected pilonidal abscess (I&D only), or is this a planned excision of the cyst/sinus tract itself?",
      "② For I&D, is a complexity indicator documented (drain, packing, infection, hemorrhage, extensive time)? Simple vs. complicated.",
      "③ For definitive excision, how extensive was it — simple, extensive, or complicated (with additional repair)?",
    ],
    categories: [
      {
        name: "Code map",
        codes: [
          ["10080 / 10081", "Incision and drainage of pilonidal cyst — simple / complicated"],
          ["11770 / 11771 / 11772", "Excision of pilonidal cyst or sinus — simple / extensive / complicated"],
        ],
      },
    ],
    rules: [
      "10080–10081 (I&D) and 11770–11772 (excision) are NOT interchangeable — I&D only opens and drains an acute abscess; excision removes the cyst or sinus tract itself, for a definitive, lasting fix.",
      "The codebook cross-references these two families directly to each other: the incision codes note \"for excision, see 11770–11772,\" and the excision codes note \"for incision, see 10080, 10081\" — a sign the exam may test whether you can tell drainage from removal.",
    ],
    tips: [
      "Same simple/complicated shape as the general I&D family in Section 1 — Section 1's complexity indicators (drain, packing, infection, hemorrhage, extensive time) apply here too.",
    ],
  },
  {
    id: "breast-procedures",
    n: 6,
    title: "Procedures on the Breasts",
    range: "19081–19369",
    intro: [
      "Breast procedures group into incisions, excisions, introductions, and mastectomies — this section focuses on the excisions (biopsies and lesion removal) and the mastectomy ladder, since that's where the deck's two remaining case questions live.",
      "The 5-type mastectomy ladder is the single most test-worthy piece of this section — know the plain-language distinction between EACH type before you look at a code number.",
    ],
    diagram: <MastectomyLadderDiagram />,
    definitions: [
      ["Breast excision", "includes biopsy procedures and removal of cysts, tumors, or lesions — CPT calls out that these involve specific attention to adequate surgical margins, the same concept as excised diameter for skin lesions in Part 1."],
      ["Simple mastectomy", "all of the breast tissue and its overlying subcutaneous tissue is removed. The nipple and skin may or may not be removed."],
      ["Partial mastectomy", "removal of PART of the breast only — covers lumpectomy, tylectomy (cyst/tumor removal), quadrantectomy (a breast quadrant), and segmentectomy (a breast segment). Also involves attention to adequate surgical margins."],
      ["Subcutaneous (total) mastectomy", "skin and muscle are LEFT in place; all breast tissue is removed."],
      ["Radical (total) mastectomy", "entire breast removed PLUS the pectoral muscles and axillary lymph nodes. The \"Urban type\" variant additionally removes the internal mammary lymph node chain."],
      ["Modified radical (total) mastectomy", "breast removed plus axillary lymph nodes. Pectoralis MINOR may or may not be removed — but pectoralis MAJOR is never removed."],
    ],
    steps: [
      "① Is imaging guidance used for the biopsy/excision (19081–19086), or not (19100–19101)?",
      "② If multiple biopsies are performed, same modality or different modality — and same breast or bilateral?",
      "③ Is this a mastectomy? If so, work through the 5-type ladder (partial → simple → subcutaneous → radical → modified radical) using the definitions above, then pick the matching code tier.",
      "④ Was a localization device placed before an open biopsy? If so, report BOTH the open-biopsy code and the localization-device placement code.",
    ],
    categories: [
      {
        name: "Code layout — the full breast-procedures map",
        codes: [
          ["19081–19086", "Breast excisions WITH image guidance (percutaneous, first lesion + each additional)"],
          ["19100–19101", "Breast excisions WITHOUT image guidance — 19100 percutaneous needle core; 19101 open, incisional"],
          ["19110–19126", "Breast excisions without attention to surgical margins (duct/lesion/cyst/fibroadenoma excisions)"],
          ["19260–19272", "Chest wall excisions"],
          ["19281–19288", "No excision — localization device placement only"],
          ["19294–19298", "Breast brachytherapy"],
          ["19301–19302", "Partial mastectomy — 19301 alone / 19302 with axillary lymphadenectomy"],
          ["19303–19307", "Total mastectomy — see the ladder below"],
          ["19316–19325", "Breast repair (mastopexy, reduction, augmentation)"],
          ["19340–19369", "Breast reconstruction"],
        ],
      },
      {
        name: "The mastectomy ladder (19303–19307)",
        codes: [
          ["19303", "Mastectomy, simple, complete"],
          ["19304", "Mastectomy, subcutaneous"],
          ["19305", "Mastectomy, radical, including pectoral muscles, axillary lymph nodes"],
          ["19306", "Mastectomy, radical, including pectoral muscles, axillary AND internal mammary lymph nodes (Urban type operation)"],
          ["19307", "Mastectomy, modified radical, including axillary lymph nodes, with or without pectoralis minor muscle, but EXCLUDING pectoralis major muscle"],
        ],
      },
    ],
    rules: [
      "For multiple breast biopsies at the SAME modality (same or contralateral breast), use that modality's add-on code for each additional lesion. If a DIFFERENT modality is used for another lesion, report a second PRIMARY code instead — never force it into the first modality's add-on.",
      "To report a BILATERAL image-guided biopsy or image-guided localization-device placement: report the \"mother\" code for the first breast, then the matching add-on code for the contralateral breast.",
      "When an open incisional biopsy is performed AFTER a localization device was placed: report BOTH — 19101 for the excisional/incisional biopsy, plus the appropriate image-guided localization-device placement code (19281–19288). Neither one substitutes for the other.",
      "19305 (plain radical) and 19306 (Urban type radical) are easy to swap — 19306 is the ONLY one of the five mastectomy types that touches the internal mammary chain. If the note doesn't mention internal mammary nodes, it isn't 19306.",
    ],
    tips: [
      "Memorize the ladder by what EACH type takes, not just the code number: partial = a piece; simple = all breast tissue, muscle spared; subcutaneous = breast tissue only, skin AND muscle spared; radical = breast + both pectoral muscles + axillary nodes (+ internal mammary if Urban type); modified radical = breast + axillary nodes, pectoralis major always spared.",
      "Pectoralis MAJOR is the one muscle that's never removed outside of 19305/19306 — its presence or absence is the fastest way to rule 19307 in or out.",
    ],
    traps: [
      "Treating 19305 and 19306 as interchangeable \"radical mastectomy\" codes. 19306 is specifically the Urban type — it's the only ladder code that includes the internal mammary lymph node chain. If internal mammary nodes aren't mentioned, don't reach for 19306.",
      "Reading \"pectoralis minor may or may not be removed\" in the modified radical descriptor (19307) and assuming pectoralis MAJOR carries the same flexibility. Pectoralis major is EXCLUDED (never removed) in 19307 — only pectoralis minor is optional.",
    ],
    cases: [
      {
        label: "DECK CASE · SOLVED",
        title: "Modified radical mastectomy, pectoralis major preserved",
        scenario: "A 45-year-old patient was admitted to undergo right modified radical mastectomy including axillary lymph nodes but leaving pectoralis major muscle. How should this service be reported?",
        steps: [
          "The note names the exact combination that defines modified radical: axillary lymph nodes ARE removed, and pectoralis major is explicitly LEFT (preserved).",
          "Modified radical is the only mastectomy type built around this exact split — pectoralis minor may or may not go with it, but pectoralis major never does.",
          "This isn't a radical mastectomy either way, since the pectoral muscle is preserved rather than removed — ruling out 19305/19306 entirely.",
        ],
        answer: "19307.",
      },
      {
        label: "DECK CASE · SOLVED",
        title: "Radical mastectomy — plain vs. Urban type",
        scenario: "A 65-year-old patient was admitted to the facility today and went through left radical mastectomy with axillary node dissection. How should this service be reported?",
        steps: [
          "This is a radical mastectomy (breast + pectoral muscles + axillary lymph nodes) — not modified radical, since nothing here says a pectoral muscle was spared.",
          "The radical family splits into two codes by ONE detail only: whether the internal mammary lymph node chain was also removed (Urban type, 19306) or not (plain radical, 19305).",
          "This scenario documents axillary node dissection only — no internal mammary lymph nodes are mentioned anywhere in the note.",
          "Without that detail documented, default to the plain radical mastectomy code, not the more extensive Urban-type variant.",
        ],
        answer: "19305 — not 19306, which is reserved specifically for the Urban type operation (radical mastectomy PLUS internal mammary lymph nodes). Since this scenario never mentions internal mammary nodes, it stays at the plain radical code.",
      },
    ],
  },
];

export default function IntegumentaryReviewerPart3Page() {
  return (
    <ReviewerShell
      part={3}
      subtitle="Part 3 — Other Procedures: Incision & Drainage, Pressure Ulcers, Burns, Nails, Pilonidal Cysts & Breast Procedures (10040–19369)"
      sections={sections}
      intro={
        <>
          <strong>How this series is organized.</strong> This 10,000-series reviewer follows the training deck&apos;s own Topics: Part 1 covers Topic 2 (Removal Procedures), Part 2 covers Topic 3 (Repair Procedures), and this Part 3 — the last part of the series — covers Topic 4 (Other Procedures): incision and drainage, pressure ulcers, burns, nails, pilonidal cysts, and breast procedures. Two of Topic 4&apos;s named sub-topics, Nails and Pilonidal Cyst Procedures, are never actually covered in the deck&apos;s own slides (it jumps straight from Burns to Breasts), so those two sections here are sourced directly from the CPT 2026 codebook instead of paraphrased from the deck — that&apos;s flagged again at the top of each of those sections. The deck&apos;s remaining case questions (Q14–Q16) are solved step by step below, including a correction to the deck&apos;s presumed radical-mastectomy answer once the actual 19305/19306 descriptors are checked against the codebook. This series sits beside the site&apos;s existing 10,000-series study tips and quizzes and does not replace them.
        </>
      }
    />
  );
}
