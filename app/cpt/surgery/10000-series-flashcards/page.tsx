import { FlashcardPlayer, BLUE, type FlashItem } from "../_digestive/players";

const cards: FlashItem[] = [
  // ---- Chapter organization ----
  { topic: "Code map", front: "How is the Integumentary chapter organized?", back: "By procedure TYPE, roughly simple to complex: sampling/opening (FNA, I&D, debridement, biopsy) → removal (shaving, excision, destruction) → repair → reconstruction (ATT, grafts, flaps) → burns/breast at the end." },
  { topic: "Code map", front: "FNA biopsy vs. core needle biopsy vs. tissue biopsy — what's the difference?", back: "FNA samples CELLS with a fine needle for cytology. A biopsy (11102–11107) samples full- or partial-thickness TISSUE for histopathology. They're separate code families." },

  // ---- Smaller removal families ----
  { topic: "FNA biopsy", front: "How are FNA codes organized, and what's the billing unit?", back: "By imaging guidance modality, each a primary/add-on pair (10021/10004 none, 10005/10006 US, 10007/10008 fluoro, 10009/10010 CT, 10011/10012 MRI). Billed once per LESION per session, regardless of needle passes." },
  { topic: "Debridement", front: "Two debridement families?", back: "11000/11001 — extensive eczematous/infected skin. 11042–11047 — depth-based WOUND debridement: 11042/+11045 subQ, 11043/+11046 muscle/fascia, 11044/+11047 bone. Billed by deepest layer, then area (first 20 sq cm, then each additional 20)." },
  { topic: "Debridement", front: "Multiple wounds, different depths, same day — modifier?", back: "Sum area within the SAME depth only, never across depths. If different-depth groups are both billed, append modifier 59 to whichever code would otherwise look like it overlaps the other." },
  { topic: "Biopsy", front: "Biopsy hierarchy — multiple techniques, same encounter?", back: "Only ONE primary code total (11102, 11104, or 11106), no matter which technique. Every OTHER lesion sampled, by any technique, gets THAT technique's own add-on code — never converted to match the primary." },
  { topic: "Biopsy", front: "When is a biopsy NOT separately reportable?", back: "When tissue removed during an excision, destruction, or shave removal is routinely sent to pathology — that's routine, not a distinct biopsy. Sampling only the stratum corneum is not a skin biopsy at all." },

  // ---- Excision ----
  { topic: "Excision", front: "Excised diameter formula?", back: "Lesion diameter + the narrowest margin needed on EVERY side, measured BEFORE the cut. Not the healed scar size, not the pathology report." },
  { topic: "Excision", front: "Benign vs. malignant excision code families?", back: "Benign: 11400–11446 (general) + 11450–11471 (condition-specific). Malignant: 11600–11646. Both split by the same anatomical groups, then by excised diameter." },
  { topic: "Excision", front: "The 3 anatomical groups for excision and destruction?", back: "Trunk/arms/legs (T/A/L) · scalp/neck/hands/feet/genitalia (S/N/H/F/G) · face/ears/eyelids/nose/lips/mucous membrane (F/E/E/N/L/M)." },
  { topic: "Excision", front: "How is closure of an excision defect reported?", back: "Simple closure = packaged into the excision code. Intermediate/complex closure = reported separately. Reconstructive graft/flap = reported separately — UNLESS it's an adjacent tissue transfer, which absorbs the excision entirely (do not also bill the excision code)." },
  { topic: "Excision", front: "Re-excision of a malignant lesion, SAME session?", back: "Report only ONE code, for the WIDEST single diameter actually excised at that site. Do not add the two diameters together." },
  { topic: "Excision", front: "Re-excision of a malignant lesion, DIFFERENT (postop) session?", back: "Report the code for the amount removed THAT DAY, plus modifier 58 (staged/related procedure during the postoperative period)." },
  { topic: "Excision", front: "Two lesions excised in the same encounter — summed?", back: "No. Excision is never summed across lesions like repair length is. Code each lesion by its own excised diameter; append modifier 51 to the second." },

  // ---- Destruction ----
  { topic: "Destruction", front: "Destruction's 3 severity families?", back: "Premalignant (17000/+17003/17004) · benign (17106–17111) · malignant (17260–17286). Excision only has 2 (benign/malignant) — don't cross-apply." },
  { topic: "Destruction", front: "Premalignant lesion destruction — code by count?", back: "17000 = first lesion. +17003 = each additional, lesions 2–14. 17004 = stand-alone code for 15 OR MORE lesions (replaces 17000+17003 entirely, doesn't stack on top)." },
  { topic: "Destruction", front: "Benign lesion destruction — two sub-groups?", back: "17106–17108 = cutaneous vascular proliferative lesions, sized by AREA. 17110–17111 = other benign lesions (not skin tags, not vascular), sized by NUMBER (up to 14 vs. 15+)." },
  { topic: "Destruction", front: "Malignant lesion destruction — sized how?", back: "By the LESION's own diameter — no margin added (unlike excision). Same 3 anatomical groups as malignant excision, different code numbers (17260–17286)." },

  // ---- Mohs ----
  { topic: "Mohs surgery", front: "Stage vs. block?", back: "Stage = one full round of cutting + mapping + microscopic reading, repeated until margins are clear. Block = one tissue piece from that round, mounted for the microscope." },
  { topic: "Mohs surgery", front: "How many anatomical groups does Mohs use?", back: "Only TWO — not three like excision/destruction. 17311/+17312 = head, neck, hands, feet, genitalia, or any site with surgery directly involving muscle/cartilage/bone/tendon/major nerves/vessels. 17313/+17314 = trunk, arms, or legs. No separate face/eyelid/lip family." },
  { topic: "Mohs surgery", front: "When does +17315 apply?", back: "Each additional BLOCK beyond the first 5, in ANY stage. The base and first-additional-stage codes already include up to 5 blocks each." },
  { topic: "Mohs surgery", front: "Two separate lesions, one Mohs session — how reported?", back: "Each distinct lesion gets its OWN first-stage code, even if same anatomical group. Append modifier 59 to the second lesion's first-stage code." },
  { topic: "Mohs surgery", front: "What's reported separately from the Mohs code itself?", back: "Any repair/flap/graft performed · a same-day diagnostic skin biopsy (11102/11104/11106 with modifier 59) · frozen section pathology (88331 with modifier 59) · additional special stains (88311–88314, 88342, but not 88314 for routine staining)." },

  // ---- Repair ----
  { topic: "Repair", front: "3 repair classifications?", back: "Simple (12001–12018) — one-layer closure. Intermediate (12031–12057) — layered closure of deeper subQ/fascia, or single-layer closure of a heavily contaminated wound needing extensive cleaning. Complex (13100–13153) — adds one of: exposure of bone/cartilage/tendon/named neurovascular structure, plus more." },
  { topic: "Repair", front: "Multiple wound repair — when do lengths add together?", back: "SAME classification AND same anatomical group → add lengths, one code. Same classification, DIFFERENT group → don't add, code each separately. DIFFERENT classification → don't add, code each, modifier 59 on the less complicated one." },
  { topic: "Repair", front: "What's packaged into repair codes?", back: "Normal debridement · simple ligation · simple exploration of nerves, blood vessels, or tendons. Debridement is only separately reportable with prolonged cleansing, appreciable tissue removal, or when done without immediate primary closure." },
  { topic: "Repair", front: "Complex repair — the neck and ear traps?", back: "Neck is grouped with forehead/cheeks/chin/mouth (13131–13133), NOT with eyelids/nose/ears/lips (13151–13153). Ears ARE in that second group. Easy to mix up." },

  // ---- Adjacent tissue transfer ----
  { topic: "Adjacent tissue transfer", front: "ATT defect area formula?", back: "Primary defect area + Secondary defect area. Primary = Length × Width of the primary defect; Secondary = Length × Width of the secondary defect created by the flap." },
  { topic: "Adjacent tissue transfer", front: "ATT's 4 anatomical groups (for the two SMALLER tiers only)?", back: "14000/14001 trunk · 14020/14021 scalp/arms/legs · 14040/14041 forehead/cheeks/chin/mouth/neck/axillae/genitalia/hands/feet · 14060/14061 eyelids/nose/ears/lips. Each pair: ≤10 sq cm / 10.1–30.0 sq cm." },
  { topic: "Adjacent tissue transfer", front: "ATT for defects OVER 30 sq cm?", back: "One universal \"any area\" family regardless of anatomical group: 14301 (30.1–60.0 sq cm) and +14302 (each additional 30 sq cm or part thereof) — the anatomical-group split stops above 30 sq cm." },
  { topic: "Adjacent tissue transfer", front: "What's packaged vs. separate for an ATT's secondary defect?", back: "Simple repair of the secondary defect = packaged. Complex repair or grafting to close the secondary defect = reported separately." },
  { topic: "Adjacent tissue transfer", front: "Lesion excision + ATT on the same defect?", back: "The excision (11400s/11600s) is NOT separately reportable when it's used to close the defect with an ATT — the ATT code already includes it." },

  // ---- Skin replacement ----
  { topic: "Skin replacement", front: "3 code blocks for skin replacement surgery?", back: "Surgical preparation (15002–15005) · autografts/tissue-cultured autografts (15040–15261) · skin substitute grafts (15271–15278)." },
  { topic: "Skin replacement", front: "Surgical prep and most autograft codes — 2 anatomical groups?", back: "Trunk/arms/legs (15002/+15003, and matching autograft codes) vs. all other body areas (15004/+15005, and matching autograft codes). Sized per 100 sq cm (≥10 yo) or per 1% BSA (<10 yo)." },
  { topic: "Skin replacement", front: "Multiple wounds — skin replacement summing rule?", back: "SAME anatomical group → sum the surface area of all wounds, one code (+ add-ons as needed). DIFFERENT group → never sum; code each group separately. If both groups are billed the SAME session, append modifier 59 to each group's primary code." },
  { topic: "Skin replacement", front: "What's packaged with skin replacement codes?", back: "Donor site repair by SUTURE (not graft/flap) · office dressing supplies · normal debridement · removal of a current graft and/or simple wound cleansing." },
  { topic: "Skin replacement", front: "Skin substitute graft, trunk/arms/legs, 0–25 sq cm — code?", back: "15271. (A commonly mistyped/misremembered code — not 15721.)" },

  // ---- Flaps ----
  { topic: "Flaps", front: "Flaps — 2 code ranges?", back: "15570–15738 skin and/or deep tissue flaps. 15740–15778 other flaps and grafts (other tissue types)." },
  { topic: "Flaps", front: "Recipient site vs. donor site in flap codes?", back: "The region named in a flap code descriptor is usually the RECIPIENT site. When the code mentions a \"delay\" of the flap, that region refers to the DONOR site instead." },
  { topic: "Flaps", front: "Donor site closure — packaged or separate?", back: "Direct closure of the donor site = packaged. Closure of the donor site with a skin graft or local flap = reported separately." },

  // ---- Other procedures ----
  { topic: "Incision & drainage", front: "I&D — how axis'ed?", back: "First by CONDITION (acne, abscess, pilonidal cyst, hematoma, postop wound infection), then by COMPLEXITY (simple/single vs. complicated/multiple — drain placement, gauze packing, infection, hemorrhage needing ligation, or extensive time)." },
  { topic: "Incision & drainage", front: "No specific location documented for an abscess I&D — code to what?", back: "\"Skin\" (10040–10180). Simple/single abscess I&D with no location and no complexity markers = 10060." },
  { topic: "Pressure ulcers", front: "Pressure ulcer excision codes — axis'ed how?", back: "First by SITE (coccygeal 15920–15922, sacral 15931–15937, ischial 15940–15946, trochanteric 15950–15958), then by repair type, then by whether an ostectomy was also done." },
  { topic: "Pressure ulcers", front: "Pressure ulcer repaired with a flap vs. a graft — add-on code?", back: "Muscle/myocutaneous flap closure → also report 15734 or 15738. Split-thickness skin graft closure → also report 15100 or 15101." },
  { topic: "Burns", front: "Burn treatment codes — what do 16000–16036 cover?", back: "LOCAL treatment of the burned surface only. 16000 = 1st-degree, initial. 16020–16030 = 2nd-degree (dressing supplies packaged). 16035–16036 = escharotomy. May be reported alongside E/M and Medicine section services." },
  { topic: "Burns", front: "Skin graft closing a burn wound — separate code?", back: "Yes — report additionally from 15100–15777, on top of the burn treatment code." },
  { topic: "Nails", front: "Nail code range and key entries?", back: "11719–11765: 11719 trimming · 11720/11721 debridement (1–5 / 6+) · 11730/+11732 avulsion · 11740 subungual hematoma evacuation · 11750 excision of nail and matrix · 11755 biopsy of nail unit · 11765 wedge excision of nail fold." },
  { topic: "Pilonidal cyst", front: "Pilonidal cyst — I&D vs. excision codes?", back: "I&D: 10080 simple / 10081 complicated. Definitive excision: 11770 simple / 11771 extensive / 11772 complicated (with closure)." },

  // ---- Breast ----
  { topic: "Breast", front: "The 5 mastectomy types, plain language?", back: "Simple (19303) — all breast tissue, nipple/skin optional. Subcutaneous (19304) — breast tissue only, skin/muscle spared. Radical (19305) — breast + pectoral muscles + axillary nodes. Radical, Urban type (19306) — adds internal mammary nodes. Modified radical (19307) — axillary nodes, pectoralis MAJOR spared (minor optional)." },
  { topic: "Breast", front: "19305 vs. 19306 — the one detail that separates them?", back: "Internal mammary lymph node removal. 19305 = axillary nodes only. 19306 (\"Urban type\") = axillary AND internal mammary nodes." },
  { topic: "Breast", front: "Partial mastectomy — other names?", back: "Lumpectomy · tylectomy (cyst/tumor removal) · quadrantectomy (a quarter of the breast) · segmentectomy (a segment). Codes 19301 (alone) / 19302 (with axillary lymphadenectomy)." },
  { topic: "Breast", front: "Multiple breast biopsies, same session — modality rule?", back: "SAME imaging modality → use the add-on code for each additional biopsy. DIFFERENT modality → report a second primary code (not the add-on) for the additional biopsy." },
  { topic: "Breast", front: "Bilateral image-guided breast biopsy — how reported?", back: "Report the \"mother\" (primary) code for the first breast, and the matching add-on code for the contralateral breast." },
  { topic: "Breast", front: "Open incisional biopsy AFTER image-guided localization device placement?", back: "Report 19101 (excisional biopsy) PLUS the appropriate image-guided localization device placement code — both are billed." },
];

export default function IntegumentaryFlashcardsPage() {
  return (
    <FlashcardPlayer
      kicker="10,000 SERIES · FLASHCARDS"
      title="5-Minute Commute Review"
      nav={[
        { href: "/cpt/surgery/10,000", label: "10,000 Series home" },
        { href: "/cpt/surgery/10000-series-guidelines-reviewer", label: "Reviewer Part 1" },
        { href: "/cpt/surgery/10000-series-guidelines-reviewer-part-2", label: "Part 2" },
        { href: "/cpt/surgery/10000-series-guidelines-reviewer-part-3", label: "Part 3" },
        { href: "/cpt/surgery/10000-series-practice-quiz", label: "Quiz" },
        { href: "/cpt/surgery/10000-series-discussion-guide", label: "Discussion Guide" },
      ]}
      cards={cards}
      theme={BLUE}
    />
  );
}
