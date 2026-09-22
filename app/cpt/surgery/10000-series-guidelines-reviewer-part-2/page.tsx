import { ReviewerShell, type Subsection } from "../_integumentary/kit";
import { RepairClassificationLadderDiagram, ATTDefectAreaDiagram } from "../_integumentary/diagrams";

const sections: Subsection[] = [
  {
    id: "repair-closure",
    n: 1,
    title: "Repair (Closure)",
    range: "12001–13160",
    intro: [
      "Repair (closure) codes are chosen by asking two questions in order: how DEEP or complicated was the closure (its classification — simple, intermediate, or complex), and then, within that classification, WHERE on the body and HOW LONG (in cm) was the repaired wound.",
      "Every repair code family reuses the same shape — a handful of anatomic groups, each split into the same length tiers — but the anatomic groups themselves shift slightly between simple, intermediate, and complex. That shifting is where most exam traps live.",
    ],
    diagram: <RepairClassificationLadderDiagram />,
    definitions: [
      ["Simple repair", "one-layer closure of a superficial wound — epidermis, dermis, or subcutaneous tissue, without significant involvement of deeper structures."],
      ["Intermediate repair", "layered closure of one or more deeper layers of subcutaneous tissue and superficial (non-muscle) fascia, in addition to the skin closure — OR single-layer closure of a heavily contaminated wound that required extensive cleaning or removal of particulate matter. Includes limited undermining."],
      ["Complex repair", "everything intermediate repair requires, PLUS at least one of: exposed bone, cartilage, tendon, or a named neurovascular structure; debridement of wound edges; extensive undermining; involvement of a free margin (helical rim, vermilion border, nostril rim); or retention sutures."],
      ["Repair length", "every repaired wound is measured and RECORDED in centimeters, no matter its shape (curved, angular, stellate) — that total length, within the correct classification and anatomic group, is what picks the code."],
    ],
    steps: [
      "① Classify the repair first — simple (one layer), intermediate (layered, or a heavily contaminated single-layer closure), or complex (intermediate's requirements PLUS a complicating factor)?",
      "② Within that classification, which anatomic group was repaired? The groupings differ slightly by classification — don't assume hands/feet or the neck sit in the same group across all three.",
      "③ Measure and record each wound's length in cm.",
      "④ Multiple wounds, SAME classification AND SAME anatomic group → add the lengths together and report one code.",
      "⑤ SAME classification but a DIFFERENT anatomic group → don't add; code each wound separately.",
      "⑥ DIFFERENT classifications repaired at the same session → don't add across them either; code each, and append modifier 59 to the LESS complicated repair (the more complicated one is listed as primary).",
      "⑦ Check what's already packaged (normal debridement, simple ligation, simple nerve/vessel/tendon exploration) before reporting anything extra.",
    ],
    categories: [
      {
        name: "Simple repair (12001–12018)",
        codes: [
          ["12001–12007", "Scalp, neck, axillae, external genitalia, trunk, and/or extremities (INCLUDING hands and feet) — 2.5 cm or less through over 30.0 cm"],
          ["12011–12018", "Face, ears, eyelids, nose, lips, and/or mucous membranes — same 6 length tiers"],
        ],
      },
      {
        name: "Intermediate repair (12031–12057)",
        codes: [
          ["12031–12037", "Scalp, axillae, trunk, and/or extremities (EXCLUDING hands and feet) — same 6 length tiers"],
          ["12041–12047", "Neck, hands, feet, and/or external genitalia — same 6 length tiers"],
          ["12051–12057", "Face, ears, eyelids, nose, lips, and/or mucous membranes — same 6 length tiers"],
        ],
      },
      {
        name: "Complex repair (13100–13160)",
        codes: [
          ["13100 / 13101 / +13102", "Trunk — 1.1–2.5 cm / 2.6–7.5 cm / each additional 5 cm or less"],
          ["13120 / 13121 / +13122", "Scalp, arms, and/or legs — same 3 tiers"],
          ["13131 / 13132 / +13133", "Forehead, cheeks, chin, mouth, NECK, axillae, genitalia, hands, and/or feet — same 3 tiers"],
          ["13151 / 13152 / +13153", "Eyelids, nose, EARS, and/or lips — same 3 tiers"],
          ["13160", "Secondary closure of a surgical wound or dehiscence, extensive or complicated — a stand-alone code, not part of the 3-tier length ladder above"],
        ],
      },
    ],
    rules: [
      "Repaired wound length is always measured and recorded in centimeters (1 inch = 2.54 cm), no matter the wound's shape.",
      "SAME classification + SAME anatomic group → add all the lengths together and report one code. SAME classification + DIFFERENT anatomic group → don't add; report each with its own code.",
      "DIFFERENT classifications (regardless of whether the anatomic group is the same or different) → never add lengths; report each with its own code, and append modifier 59 to the LESS complicated repair — the more complicated one is listed as primary.",
      "Normal debridement is packaged into repair codes. It's only separately reportable when there's prolonged cleansing for gross contamination, appreciable amounts of devitalized/contaminated tissue removed, or debridement carried out separately without immediate primary closure.",
      "Repair of a skin wound associated with injury to a deeper structure (nerve, blood vessel, or tendon) is packaged into that body system's own CPT code. The skin repair is billed separately ONLY if it's a COMPLEX repair — and even then, append modifier 59.",
      "Packaged into every wound repair code: normal debridement, simple ligation of vessels in the open wound, and simple exploration of nerves, blood vessels, or tendons exposed in the wound (unless appreciable dissection is required).",
    ],
    tips: [
      "Watch the anatomic groups shift between classifications: hands and feet ride along with the \"easy\" group for SIMPLE repair (12001–12007) but move to their own group with the neck for INTERMEDIATE repair (12041–12047).",
      "Complex repair has no \"1.0 cm or less\" tier of its own — a defect that small is reported as simple or intermediate repair instead, per the codebook's own parenthetical note under 13100, 13120, 13131, and 13151.",
    ],
    traps: [
      "Neck and ears are easy to misplace in the complex repair groups: neck sits with forehead/cheeks/chin/mouth/axillae/genitalia/hands/feet (13131–13133), NOT with eyelids/nose/ears/lips. Ears sit with eyelids/nose/lips (13151–13153), NOT with the forehead group.",
      "Billing a separate repair code for a laceration overlying an injured nerve or vessel when that repair was only simple or intermediate — it's packaged into the deeper-structure code unless the repair itself rises to complex.",
    ],
  },
  {
    id: "adjacent-tissue-transfer",
    n: 2,
    title: "Adjacent Tissue Transfer",
    range: "14000–14302",
    intro: [
      "Adjacent tissue transfer (ATT) moves a segment of skin — still attached to its own blood supply — from an area NEXT TO a defect to cover it. Z-plasty, W-plasty, V-Y plasty, rotation flap, random island flap, and advancement flap are all reported the exact same way: by anatomic group and total defect size, never by the specific technique name.",
      "The single biggest trap in this topic is assuming every anatomic group keeps its own code as the defect grows past 30 sq cm. It doesn't — see the correction in the rules below before working Q9 and Q10.",
    ],
    diagram: <ATTDefectAreaDiagram />,
    definitions: [
      ["Adjacent tissue transfer (ATT)", "a segment of skin, still attached to its own blood supply, is moved from an area NEXT TO a defect to cover it. Technique names (Z-plasty, W-plasty, V-Y plasty, rotation flap, random island flap, advancement flap) don't change which code applies."],
      ["Defect area", "for code selection, \"defect\" means the PRIMARY defect (length × width of the excision) PLUS the SECONDARY defect (length × width of the gap the flap's own design opens up) — measured TOGETHER as one combined sq cm total."],
    ],
    steps: [
      "① Which anatomic group is the defect in — trunk, scalp/arms/legs, forehead/cheeks/chin/mouth/neck/axillae/genitalia/hands/feet, or eyelids/nose/ears/lips?",
      "② What's the TOTAL defect area — primary (excision) plus secondary (flap design) — in sq cm?",
      "③ Is the total 10 sq cm or less, or 10.1–30.0 sq cm? If so, use that anatomic group's own pair of codes.",
      "④ Is the total OVER 30 sq cm? The anatomic group no longer matters — switch to the universal 14301 (30.1–60.0 sq cm) plus +14302 (each additional 30.0 sq cm or part thereof), for ANY area.",
      "⑤ Is a lesion excision code also on the table? If the excision fed directly into performing this ATT, it's already included — don't bill it separately.",
      "⑥ How was the SECONDARY defect closed? Simple repair of it is packaged into the ATT code; a graft or complex repair needed to close it is reported separately.",
    ],
    categories: [
      {
        name: "By anatomic group — smaller defects only (10 sq cm or less / 10.1–30.0 sq cm)",
        codes: [
          ["14000 / 14001", "Trunk — defect 10 sq cm or less / 10.1–30.0 sq cm"],
          ["14020 / 14021", "Scalp, arms, and/or legs — same two tiers"],
          ["14040 / 14041", "Forehead, cheeks, chin, mouth, neck, axillae, genitalia, hands, and/or feet — same two tiers"],
          ["14060 / 14061", "Eyelids, nose, ears, and/or lips — same two tiers"],
        ],
      },
      {
        name: "Any area — larger defects (30.1 sq cm and up)",
        codes: [
          ["14301", "Adjacent tissue transfer or rearrangement, ANY area; defect 30.1–60.0 sq cm"],
          ["+14302", "Each additional 30.0 sq cm, or part thereof (add-on, used with 14301)"],
        ],
      },
    ],
    rules: [
      "CORRECTION to a common misreading of the deck: only the two SMALLER tiers (10 sq cm or less, and 10.1–30.0 sq cm) are anatomic-group-specific. Once the total defect passes 30.0 sq cm, EVERY anatomic group funnels into the same universal 14301/+14302 pair — there is no group-specific code for a defect 30.1 sq cm or larger.",
      "Excision of a benign (11400–11446) or malignant (11600–11646) lesion is NOT separately reportable when it's excised specifically to perform the ATT — the ATT code already includes it.",
      "Simple repair of the secondary defect is packaged into the ATT code. A skin graft or complex repair needed to close the secondary defect is reported as its own additional, separate procedure.",
      "Undermining alone — without any additional incisions — does NOT qualify as an adjacent tissue transfer. That scenario is coded as complex repair (13100–13160) instead.",
    ],
    tips: [
      "\"Defect\" in this topic always means primary + secondary together — if a scenario gives only one of the two measurements, the exact size tier can't be confidently picked until the other is documented (see Q10 below).",
      "Only four anatomic groups exist for the group-specific tiers — the same four groups used for complex repair and for full-thickness autografts later in this page. Learn the grouping once and reuse it.",
    ],
    traps: [
      "Billing 14040 (≤10 sq cm) for a defect that's actually 10.1–30.0 sq cm — that belongs in 14041 instead.",
      "Assuming each anatomical group keeps its own code past 30 sq cm. It doesn't — everything 30.1 sq cm and up is 14301/+14302, regardless of body location.",
    ],
    cases: [
      {
        label: "DECK CASE · SOLVED",
        title: "20 sq cm cheek defect, rotation flap",
        scenario: "The patient had a 20 sq cm defect of the right cheek that was repaired with a rotation flap (adjacent tissue transfer). How should this procedure be coded?",
        steps: [
          "A rotation flap is a technique name for an adjacent tissue transfer — code by group and defect area, not by the technique.",
          "Cheek falls in the forehead/cheeks/chin/mouth/neck/axillae/genitalia/hands/feet group (14040/14041).",
          "20 sq cm falls in the 10.1–30.0 sq cm tier, not the ≤10 sq cm tier — that's the trap: 14040 only covers defects of 10 sq cm or less.",
        ],
        answer: "14041.",
      },
      {
        label: "DECK CASE · HARD SCENARIO",
        title: "Postauricular flap for an ear scar, with a graft to close the donor site",
        scenario: "A scar is excised from the auricle of the right ear. A postauricular flap is used to fill the defect. A full thickness skin graft from the left thigh is used to close the 4 x 2 cm flap donor site. How should this procedure be coded?",
        steps: [
          "The postauricular flap reconstructing the ear (auricle) defect is an adjacent tissue transfer, in the eyelids/nose/ears/lips group (14060/14061).",
          "But this scenario only measures the flap's DONOR site (4 × 2 cm = 8 sq cm) — it never states the PRIMARY defect's own excised area. Per the ATT rule, the code tier depends on primary + secondary defect measured TOGETHER, so the exact tier (14060 vs. 14061) can't be confidently picked from the numbers given here — it would need the ear defect's own documented area first.",
          "Per the ATT rules, closing the ATT's SECONDARY defect (the flap donor site) with a graft is reported separately — simple repair of a secondary defect is packaged, but grafting or complex repair to close it is not.",
          "The free full-thickness skin graft from the thigh is closing the donor-site defect, which sits on/adjacent to the ear — the nose/ears/eyelids/lips full-thickness autograft group (15260/+15261). 8 sq cm is under that code's 20 sq cm first tier, so only one unit is needed, with no add-on.",
        ],
        answer: "Not fully determinable as one clean ATT code from the numbers given — it's 14060 or 14061 (eyelids/nose/ears/lips group) once the primary ear defect's own measured area is documented and added to the 8 sq cm secondary defect, PLUS 15260 for the full-thickness autograft closing the 8 sq cm donor site (under the 20 sq cm first tier, no add-on). This case is a reminder to document the primary defect's own area, not just the flap's footprint.",
      },
    ],
  },
  {
    id: "skin-replacement",
    n: 3,
    title: "Skin Replacement Surgery (and Skin Substitutes)",
    range: "15002–15278",
    intro: [
      "Skin replacement surgery is billed in up to two separate steps: surgical preparation of the recipient site, and then the topical placement of an autograft or a skin substitute graft. Each step has its own code family, and each family is organized the same way — anatomic group first, then size.",
      "Every size threshold in this topic follows the same rule for multiple wounds: sum areas within the SAME anatomic group, never across different groups. Q11–Q13 below are built entirely around that one rule.",
    ],
    definitions: [
      ["Skin replacement surgery", "two steps billed separately: (1) SURGICAL PREPARATION of the recipient site (excision of open wounds, burn eschar, or scar, including subcutaneous tissue, or incisional release of scar contracture), then (2) TOPICAL PLACEMENT of an autograft (including tissue-cultured autograft) or a skin substitute graft."],
      ["Recipient area", "all skin replacement code selection — prep, autograft, and skin substitute alike — is based on the size of the RECIPIENT area (the wound being covered), never the donor site."],
      ["Autograft", "the patient's own skin, harvested and placed — split-thickness, full-thickness, epidermal, dermal, or tissue-cultured, coded 15040–15261 by graft TYPE, then anatomic group, then sq cm."],
      ["Skin substitute graft", "non-autologous human skin (allograft/homograft), a non-human skin substitute (xenograft), or a biological scaffold product — application coded 15271–15278; the graft material's own supply is billed separately."],
    ],
    steps: [
      "① Surgical prep, or placing the actual graft/substitute? Both are billed as separate steps when both are performed at the same session.",
      "② For prep (15002–15005) and skin substitutes (15271–15278): only TWO anatomic groups exist — trunk/arms/legs, or all other body areas (face, scalp, eyelids, mouth, neck, ears, orbits, genitalia, hands, feet, multiple digits).",
      "③ For split-thickness and full-thickness autografts (15100–15261): the same two-group split applies to split-thickness codes, but full-thickness autografts (15200–15261) use FOUR anatomic groups — trunk; scalp/arms/legs; forehead/cheeks/chin/mouth/neck/axillae/genitalia/hands/feet; nose/ears/eyelids/lips.",
      "④ Measure the recipient area in sq cm (or % BSA for patients under 10 years old). Sum multiple wounds ONLY within the SAME anatomic group for that code family — never across different groups.",
      "⑤ Pick the first-tier code, then add the add-on code for any area beyond the first tier's threshold (\"each additional ... sq cm or part thereof\").",
      "⑥ Check what's packaged before billing anything extra: donor site suture repair, in-office dressing supplies, normal debridement, and removal of a prior/failed graft.",
    ],
    categories: [
      {
        name: "1. Surgical preparation (15002–15005) — per 100 sq cm (or 1% BSA, patients under 10)",
        codes: [
          ["15002 / +15003", "Trunk, arms, legs — first 100 sq cm (or 1% BSA) / each additional 100 sq cm or part thereof"],
          ["15004 / +15005", "All other body areas (face, scalp, eyelids, mouth, neck, ears, orbits, genitalia, hands, feet, multiple digits) — same structure"],
        ],
      },
      {
        name: "2. Autografts / tissue-cultured autografts (15040–15261) — by graft type, then anatomic group, then size",
        codes: [
          ["15100 / +15101", "Split-thickness autograft, trunk/arms/legs — first 100 sq cm / each additional 100 sq cm or part thereof"],
          ["15120 / +15121", "Split-thickness autograft, all other body areas — same structure"],
          ["15200 / +15201", "Full-thickness autograft, trunk — first 20 sq cm / each additional 20 sq cm or part thereof"],
          ["15220 / +15221", "Full-thickness autograft, scalp/arms/legs — same structure"],
          ["15240 / +15241", "Full-thickness autograft, forehead/cheeks/chin/mouth/neck/axillae/genitalia/hands/feet — same structure"],
          ["15260 / +15261", "Full-thickness autograft, nose/ears/eyelids/lips — same structure"],
          ["15150–15157", "Tissue-cultured skin autograft — first 25 sq cm (stand-alone), then add-ons for 26–100 sq cm and each additional 100 sq cm or part thereof"],
        ],
      },
      {
        name: "3. Skin substitute grafts (15271–15278) — application, by anatomic group and size",
        codes: [
          ["15271 / +15272", "Trunk, arms, legs — 25 sq cm or less (stand-alone) / each additional 25 sq cm or part thereof, while total area stays under 100 sq cm"],
          ["15273 / +15274", "Trunk, arms, legs — total wound area 100 sq cm or more; first 100 sq cm / each additional 100 sq cm or part thereof"],
          ["15275 / +15276", "All other body areas — 25 sq cm or less (stand-alone) / each additional 25 sq cm or part thereof, under 100 sq cm total"],
          ["15277 / +15278", "All other body areas — total wound area 100 sq cm or more; first 100 sq cm / each additional 100 sq cm or part thereof"],
        ],
      },
    ],
    rules: [
      "For multiple wounds prepped, grafted, or covered with a skin substitute in the same session, SUM the recipient area of all wounds within the SAME anatomic grouping. Do NOT sum wounds from different anatomic groupings — code each grouping separately.",
      "When TWO OR MORE different anatomic groupings are both billed the same session (e.g., a trunk/arms/legs total and an \"all other body areas\" total), append modifier 59 to each grouping's primary code to show they're distinct, separately identifiable sites — not a duplicate of the same work.",
      "Repair of the donor site by SUTURE is packaged into these codes. Repair of the donor site requiring a skin GRAFT or LOCAL FLAP is reported separately.",
      "When these services are performed in the office, routine dressing supplies are packaged — not billed separately.",
      "Normal debridement, and removal of a current/failed graft with simple cleansing of the wound, are packaged into these codes.",
      "The supply of the skin substitute graft material itself is billed separately (its own supply code), in addition to the application code (15271–15278).",
    ],
    tips: [
      "CPT's own coding guideline for 15002–15005 works through almost this exact pair of cases — a 20 sq cm and 15 sq cm hand wound reported as one code with no add-on, and a 75+75 sq cm thigh pair plus a 20+15 sq cm hand pair reported as two separate anatomic-group code sets — which is exactly Q11 and Q12 below.",
      "When a primary procedure elsewhere in CPT (e.g., radical mastectomy, deep tumor removal) needs a skin substitute or autograft for definitive closure, 15100–15278 is reported IN ADDITION to that primary procedure's own code.",
    ],
    traps: [
      "The deck's own slide prints the skin substitute code as \"15721\" for the 0–25 sq cm trunk/arms/legs tier — that's a typo. The real code is 15271.",
      "Assuming hands and feet share the trunk/arms/legs group. For surgical prep and skin substitutes they're \"all other body areas\" (15004/+15005, 15275–15278); for full-thickness autografts they fall with forehead/cheeks/chin/mouth/neck/axillae/genitalia (15240/+15241) — never with 15002/+15003, 15271/+15272, 15100/+15101, or 15200/+15201/15220/+15221.",
    ],
    cases: [
      {
        label: "DECK CASE · SOLVED",
        title: "Two hand wounds, surgical preparation only",
        scenario: "Surgical preparation of a 20 sq cm wound on the right hand and a 15 sq cm wound on the left hand. How would you code for this procedure?",
        steps: [
          "Hands fall in the \"all other body areas\" group for surgical prep (15004/+15005), NOT the trunk/arms/legs group (15002/+15003).",
          "Same anatomic group (both hands) → sum the areas: 20 + 15 = 35 sq cm.",
          "35 sq cm is within the first 100 sq cm — no add-on code is needed.",
        ],
        answer: "15004 × 1.",
      },
      {
        label: "DECK CASE · SOLVED",
        title: "Four wounds across two anatomic groups, surgical preparation",
        scenario: "Surgical preparation of a 75 sq cm wound on the right thigh, 75 sq cm wound on the left thigh, 20 sq cm wound on the right hand, and 15 sq cm wound on the left hand. How would you code for this procedure?",
        steps: [
          "Thighs = trunk/arms/legs group (15002/+15003): sum 75 + 75 = 150 sq cm = 15002 (first 100 sq cm) + 15003 × 1 (the remaining 50 sq cm — \"each additional 100 sq cm or part thereof,\" and 50 sq cm counts as a part thereof).",
          "Hands = \"all other body areas\" group (15004/+15005): sum 20 + 15 = 35 sq cm = 15004 × 1 (no add-on needed, under 100 sq cm).",
          "Different anatomic groups (thighs vs. hands) are NEVER summed together, even though both pairs are prepped the same session.",
          "Because BOTH group's primary codes are billed the same day, append modifier 59 to each primary code (15002 and 15004) to show they're distinct, separately identifiable preparation sites — not a duplicate of each other.",
        ],
        answer: "15002-59, 15003 × 1, and 15004-59.",
      },
      {
        label: "DECK CASE · SOLVED",
        title: "Burn scar excision plus split-thickness autograft, elbow",
        scenario: "Excision of a 10 cm x 7 cm hypertrophic burn scar of the left elbow with a split thickness autograft to cover the defect created. How is this procedure coded?",
        steps: [
          "10 cm × 7 cm = 70 sq cm.",
          "Elbow = arm, which falls in the trunk/arms/legs group for BOTH surgical prep and autograft placement.",
          "Surgical preparation (excision of the scar) = 15002. 70 sq cm fits within the first 100 sq cm, so one unit only — no add-on.",
          "Split-thickness autograft placement, trunk/arms/legs group = 15100. Again 70 sq cm is under the 100 sq cm first tier, so one unit only.",
        ],
        answer: "15002 and 15100 — both first-tier only, no add-ons, since 70 sq cm is under each code's 100 sq cm threshold.",
      },
    ],
  },
  {
    id: "flaps",
    n: 4,
    title: "Flaps",
    range: "15570–15778",
    intro: [
      "A flap moves a portion of healthy skin — sometimes with deeper tissue attached — to a recipient site to cover a defect. Unlike a graft, a flap generally keeps a living blood supply (a pedicle) connected throughout the move, or is surgically reattached to one (a free flap), rather than depending on the recipient bed to revascularize it from scratch.",
      "Flaps split into two code ranges: skin and/or deep tissue flaps (15570–15738), and a miscellaneous \"other flaps and grafts\" range (15740–15778) covering island pedicle flaps, free fat grafting, composite grafts, hair punch grafts, and biologic implant placement.",
    ],
    definitions: [
      ["Flap", "a portion of healthy skin (and sometimes deeper tissue) is mobilized, kept attached to (or reattached to) its own blood supply, and moved to a recipient site to cover a defect."],
      ["Pedicle flap vs. free flap", "a PEDICLE flap stays attached to its native blood supply throughout the move (direct, tubed, or island). A FREE flap is completely detached and reattached at the recipient site using microvascular anastomosis (15756–15758)."],
      ["Recipient site vs. donor site", "the recipient site is where the flap ends UP; the donor site is where it's taken FROM."],
    ],
    steps: [
      "① Skin and/or deep tissue flap (15570–15738), or one of the \"other\" flaps/grafts (composite graft, island pedicle flap, free fat grafting, hair punch grafts, biologic implant — 15740–15778)?",
      "② Is the code describing the RECIPIENT site (the default) or the DONOR site (only for tube pedicle formation or a flap \"delay\")?",
      "③ Was a free flap with microvascular anastomosis performed? That's its own code family (15756–15758), separate from pedicle flaps.",
      "④ How was the donor site closed — directly (packaged), or with a skin graft/local flap (reported separately)?",
    ],
    categories: [
      {
        name: "Skin and/or deep tissue flaps (15570–15738) — formation/transfer, by RECIPIENT region",
        codes: [
          ["15570", "Trunk"],
          ["15572", "Scalp, arms, or legs"],
          ["15574", "Forehead, cheeks, chin, mouth, neck, axillae, genitalia, hands, or feet"],
          ["15576", "Eyelids, nose, ears, lips, or intraoral"],
          ["15650", "Transfer, intermediate, of any pedicle flap (e.g., abdomen to hand)"],
          ["15733–15738", "Muscle, myocutaneous, or fasciocutaneous flap — described by DONOR site"],
        ],
      },
      {
        name: "Free flaps with microvascular anastomosis (15756–15758)",
        codes: [
          ["15756", "Free muscle or myocutaneous flap"],
          ["15757", "Free skin flap"],
          ["15758", "Free fascial flap"],
        ],
      },
      {
        name: "Other flaps and grafts (15740–15778)",
        codes: [
          ["15740", "Flap; island pedicle, requiring identification and dissection"],
          ["15760", "Graft; composite (e.g., full thickness of external ear or nasal ala)"],
          ["15769 / 15771–15774", "Grafting of autologous soft tissue/fat harvested by liposuction"],
          ["15775 / +15776", "Punch graft for hair transplant"],
          ["15777 / 15778", "Implantation of biologic implant / absorbable mesh or other prosthesis"],
        ],
      },
    ],
    rules: [
      "The region named in a flap code refers to the RECIPIENT site — where the flap ends up — UNLESS the code specifically describes tube pedicle formation or a flap \"delay,\" in which case the region refers to the DONOR site instead.",
      "Direct closure of the donor site is packaged into 15570–15738. Closure of the donor site with a skin graft or local flap is reported as an additional, separate procedure.",
      "Codes 15570–15738 do not include extensive immobilization — large plaster casts and similar immobilizing devices are additional, separately reported procedures.",
      "Free flaps with microvascular anastomosis (15756–15758) are their own code family — don't report a pedicle flap code (15570s) for a free flap, or vice versa.",
    ],
    tips: [
      "\"Delay\" is the keyword that flips a flap code's region from recipient to donor — everywhere else in this range, default to recipient.",
      "Composite grafts (15760) and free flaps (15756–15758) both move tissue with no living pedicle connection at the moment of transfer, but only the free flap needs microvascular anastomosis to reconnect blood supply immediately — a composite graft revascularizes passively like any other graft.",
    ],
    traps: [
      "Reading every flap code's anatomic term as the donor site, out of habit carried over from adjacent tissue transfer or repair codes — flap codes default to the RECIPIENT site instead.",
      "Treating a graft or local flap closure of the donor site as packaged — only DIRECT closure of the donor site is included; graft or local flap closure of it is a separate, additional procedure.",
    ],
  },
];

export default function IntegumentaryReviewerPart2Page() {
  return (
    <ReviewerShell
      part={2}
      subtitle="Part 2 — Repair Procedures: Repair (Closure), Adjacent Tissue Transfer, Skin Replacement Surgery & Flaps (12001–15778)"
      sections={sections}
      intro={
        <>
          <strong>How this series is organized.</strong> This 10,000-series reviewer follows the training deck&apos;s own Topics: Part 1 covered Topic 2 (Removal Procedures). Part 2 — this page — covers Topic 3 (Repair Procedures: repair/closure, adjacent tissue transfer, skin replacement surgery, and flaps). Part 3 covers Topic 4 (Other Procedures — incision and drainage, pressure ulcers, burns, nails, pilonidal cysts, and breast procedures) along with the deck&apos;s remaining case questions. All 5 of Topic 3&apos;s case questions (Q9–Q13) are solved step by step below, including one case (Q10) the deck poses with incomplete measurements — worked through honestly rather than forced into a single number it doesn&apos;t support. This series sits beside the site&apos;s existing 10,000-series study tips and quizzes and does not replace them. Content is paraphrased from the deck and checked against the CPT 2026 codebook — a code-tier error in the deck&apos;s Adjacent Tissue Transfer notes and a typo in its Skin Replacement Surgery notes are corrected here.
        </>
      }
    />
  );
}
