import { DiscussionGuidePage, DGList, DGSteps, type DGTopic } from "../_digestive/discussion-guide";
import { BLUE } from "../_digestive/players";

const topics: DGTopic[] = [
  {
    n: 1,
    title: "Organization of the Integumentary Chapter",
    range: "10004–19499",
    items: [
      {
        q: "Be able to identify the organization of the Chapter (e.g., 10K to 11K is removals).",
        approach: "Walk the code ranges in order and name the procedure family each block covers — the chapter is built as a rough progression from simplest skin work to the most reconstructive.",
        answer: (
          <>
            <p style={{ margin: "0 0 8px" }}>The Integumentary System chapter runs from roughly 10004 to 19499 and is organized by procedure TYPE, in a progression from simple to complex:</p>
            <DGList
              items={[
                "10004–10021 — Fine needle aspiration (FNA) biopsy",
                "10030–10036 — Introduction and removal (soft-tissue markers, catheters)",
                "10040–10180 — Incision and drainage (abscess, pilonidal cyst, puncture aspiration)",
                "11000–11047 — Debridement (infected/eczematous skin, and depth-based wound debridement)",
                "11055–11057 — Paring or cutting (corns/calluses)",
                "11102–11107 — Biopsy (tangential, punch, incisional)",
                "11200–11201 — Removal of skin tags",
                "11300–11313 — Shaving of epidermal or dermal lesions",
                "11400–11471 — Excision, benign lesions",
                "11600–11646 — Excision, malignant lesions",
                "11719–11765 — Nails",
                "11770–11772 — Pilonidal cyst excision",
                "11900–11922 — Introduction (skin injections/tattooing)",
                "11960–11971 — Tissue expanders",
                "12001–13160 — Repair (simple, intermediate, complex closure)",
                "14000–14302 — Adjacent tissue transfer or rearrangement",
                "15002–15278 — Skin replacement surgery and skin substitutes",
                "15570–15777 — Flaps and other grafts",
                "15780–15879 — Other procedures (dermabrasion, chemical peel, liposuction)",
                "16000–16036 — Burns, local treatment",
                "17000–17286 — Destruction (premalignant, benign, and malignant lesions, including Mohs)",
                "19000–19499 — Breast (biopsy, introduction, excision, mastectomy, repair/reconstruction)",
              ]}
            />
            <p style={{ margin: "8px 0 0" }}>The discussion guide's shorthand is a useful anchor but not literal — the 10,000–11,000 numbers do include several \"removal\" families (I&D, debridement, excision), so treat it as \"the low 10,000s/11,000s are where lesions and tissue get taken off or opened up,\" then everything from 14,000 onward gets progressively more reconstructive (tissue transfer → grafts/flaps → destruction → breast).</p>
          </>
        ),
      },
    ],
  },
  {
    n: 2,
    title: "Fine Needle Aspiration Biopsy (FNAB)",
    range: "10004–10012, 10021",
    items: [
      {
        q: "How are the FNAB codes organized?",
        approach: "Group by imaging guidance modality first — each modality has its own first-lesion/each-additional-lesion pair.",
        answer: (
          <>
            <p style={{ margin: "0 0 8px" }}>FNAB obtains cells with a fine needle for cytologic examination (not a tissue core for histopathology — that's a core needle biopsy, see below). The codes are organized in pairs by imaging guidance, each pair being a primary (first lesion) code and an add-on (each additional lesion) code:</p>
            <DGList
              items={[
                "10021 — no imaging guidance; add-on 10004 for each additional lesion",
                "10005 — ultrasound guidance; add-on 10006",
                "10007 — fluoroscopic guidance; add-on 10008",
                "10009 — CT guidance; add-on 10010",
                "10011 — MRI guidance; add-on 10012",
              ]}
            />
            <p style={{ margin: "8px 0 0" }}>Imaging guidance codes (76942, 77002, 77012, 77021) are never separately reported with any of these — the guidance is bundled into the FNA code itself.</p>
          </>
        ),
        codes: [["10021", "No imaging, first lesion"], ["10005", "US guidance, first lesion"], ["10007", "Fluoroscopy, first lesion"], ["10009", "CT guidance, first lesion"], ["10011", "MRI guidance, first lesion"]],
      },
      {
        q: "What is the billable unit for FNABs? (or FNAB's are charged per what?)",
        approach: "The guidelines are explicit about the billing unit: it is the lesion, once per session — not the number of needle passes, aspirations, or syringes used to sample it.",
        answer: "FNAB is billed per LESION SAMPLED, once per lesion per session — regardless of how many needle passes/aspirations were needed to get an adequate sample from that lesion.",
      },
      {
        q: "When FNAB's are performed on multiple lesions, how are they reported? Identify and represent in codes these five (5) possible scenarios.",
        approach: "Work through modality (none vs. one) and lesion count (one vs. many, same modality vs. different modality) systematically — that combination produces the five scenarios.",
        answer: (
          <DGSteps
            items={[
              <><strong>Single lesion, no imaging guidance</strong> — report 10021 alone.</>,
              <><strong>Single lesion, with imaging guidance</strong> — report the first-lesion code for that modality alone (e.g., 10005 for ultrasound).</>,
              <><strong>Multiple lesions, same session/day, same imaging modality</strong> — report the modality's primary code once, plus its add-on code for each additional lesion (e.g., two ultrasound-guided lesions = 10005 + 10006). This applies whether the lesions are ipsilateral or contralateral, and whether they're in the same or different organs/structures.</>,
              <><strong>Multiple lesions, same session, different imaging modalities</strong> — report each modality's primary code, appending modifier 59 to each additional modality's primary code, and use each modality's own add-on code for further lesions sampled under that modality (e.g., one lesion by ultrasound and one by CT = 10005 + 10009-59).</>,
              <><strong>FNA and core needle biopsy performed on the same lesion, same session, same day, using the same imaging modality</strong> — report both procedures, but do NOT separately report the imaging guidance a second time for the core needle biopsy; it's only reported once.</>,
            ]}
          />
        ),
      },
    ],
  },
  {
    n: 3,
    title: "Debridement",
    range: "11000–11047, 97597–97598",
    items: [
      {
        q: "How are the debridement codes organized?",
        approach: "Split first by what's being debrided (infected/eczematous skin vs. a wound), then by DEPTH of tissue removed.",
        answer: (
          <>
            <p style={{ margin: "0 0 8px" }}>Two separate families exist:</p>
            <DGList
              items={[
                "11000–11001 — debridement of extensive eczematous or infected skin (a different clinical scenario, not depth-based)",
                "97597–97598 — active wound care management / skin-only debridement (epidermis and/or dermis only)",
                "11042–11047 — depth-based wound debridement, organized in three depth pairs: 11042/11045 (subcutaneous tissue), 11043/11046 (muscle and/or fascia), 11044/11047 (bone)",
              ]}
            />
            <p style={{ margin: "8px 0 0" }}>Within 11042–11047, each pair is a primary code (first 20 sq cm or less) and an add-on code (each additional 20 sq cm or part thereof).</p>
          </>
        ),
        codes: [["11042/11045", "Subcutaneous tissue"], ["11043/11046", "Muscle and/or fascia"], ["11044/11047", "Bone"], ["97597/97598", "Skin only (epidermis/dermis)"]],
      },
      {
        q: "What is/are the billable unit(s) for debridements?",
        approach: "Two factors together, in this order: depth first, then surface area.",
        answer: "Debridement is billed by the DEEPEST tissue layer removed (which picks the code family: skin, subQ, muscle/fascia, or bone) and then by SURFACE AREA of the wound within that family (first 20 sq cm, then each additional 20 sq cm or part thereof).",
      },
      {
        q: "When debridements are performed on multiple wounds, how are they reported?",
        approach: "Same depth → add the areas together into one running total. Different depth → keep each depth's area separate and code each depth group on its own.",
        answer: (
          <>
            <p style={{ margin: "0 0 8px" }}>For a single wound, report the deepest level of tissue actually removed. For multiple wounds, sum the surface area of the wounds that are debrided to the SAME depth — but never combine sums from different depths.</p>
            <p style={{ margin: 0 }}>CPT's own example: bone is debrided from a 4 sq cm heel ulcer and a 10 sq cm ischial ulcer (both bone depth) — combine to 14 sq cm and report a single code, 11044. Separately, subcutaneous tissue is debrided from a 16 sq cm abdominal wound and a 10 sq cm thigh wound (both subQ depth) — combine to 26 sq cm and report 11042 (first 20 sq cm) + 11045 (remaining 6 sq cm).</p>
          </>
        ),
      },
      {
        q: "How is modifier-59 used in conjunction with multiple debridements?",
        approach: "Modifier 59 comes into play when different-depth groups are billed on the same date — it tells the payer the two code groups represent genuinely separate, distinct depth categories rather than a duplicate/bundling error.",
        answer: "Continuing the CPT example above: if all four wounds (two bone-depth, two subQ-depth) were debrided on the same day, append modifier 59 to either 11042 or 11044 (whichever code would otherwise look like it overlaps with the other depth group) to show the two code sets are for distinct, separately identifiable depths of tissue removed — not the same work billed twice.",
      },
    ],
  },
  {
    n: 4,
    title: "Biopsy",
    range: "11102–11107",
    items: [
      {
        q: "How are the biopsy codes organized?",
        approach: "Organized by TECHNIQUE, not by diagnosis or lesion type — each technique has a primary (single lesion) code and an add-on (each separate/additional lesion) code.",
        answer: (
          <DGList
            items={[
              <><strong>11102/11103 — Tangential biopsy</strong> (shave, scoop, saucerize, curette): a partial-thickness sample, not necessarily the full dermis.</>,
              <><strong>11104/11105 — Punch biopsy:</strong> a punch tool removes a full-thickness cylindrical sample; simple closure is included.</>,
              <><strong>11106/11107 — Incisional biopsy:</strong> a sharp blade removes a full-thickness vertical/wedge sample, penetrating into the subcutaneous space; closure (when performed) is not separately reported.</>,
            ]}
          />
        ),
      },
      {
        q: "What is the billable unit for biopsy(ies)?",
        approach: "One primary code per LESION per technique used, with add-on codes for every additional lesion or additional technique — never by number of passes.",
        answer: "Each biopsy technique is billed once (as the primary code) for the first lesion sampled with that technique, and its own add-on code for every additional lesion sampled with that technique.",
      },
      {
        q: "When is the biopsy performed reported separately and when is it not reported separately?",
        approach: "Ask: was tissue obtained ON ITS OWN, specifically for diagnosis — or was it simply the routine byproduct of a bigger procedure (excision, destruction, shave removal) that was already happening?",
        answer: (
          <>
            <p style={{ margin: "0 0 8px" }}><strong>Reported separately:</strong> the procedure to obtain tissue solely for diagnostic histopathologic examination was performed independently, or was unrelated/distinct from other services at that encounter. Biopsies of different lesions or different sites on the same date can be reported separately, since they aren't components of the other procedures.</p>
            <p style={{ margin: 0 }}><strong>NOT reported separately:</strong> when tissue removed during an excision, destruction, or shave removal is routinely sent to pathology — that's a normal component of those procedures, not a distinct biopsy. Also not separately reportable: sampling only the stratum corneum (by any method, e.g. skin scraping, tape stripping) is not a skin biopsy at all.</p>
          </>
        ),
      },
      {
        q: "Identify the reporting hierarchy for the multiple biopsies performed.",
        approach: "When more than one biopsy technique is used in the same encounter, only ONE technique's PRIMARY code is reported — pick whichever technique was used FIRST/for that lesion — and every other biopsy (same or different technique, different lesion) becomes an ADD-ON code matched to ITS OWN technique.",
        answer: (
          <>
            <p style={{ margin: "0 0 8px" }}>The rule: when multiple biopsy techniques are performed during the same encounter, only one primary lesion biopsy code (11102, 11104, or 11106) is ever reported. Every additional biopsy — regardless of its own technique — is reported using ITS OWN add-on code (11103, 11105, or 11107), never converted to match the primary code's technique.</p>
            <DGList
              items={[
                "2 tangential biopsies → 11102 + 11103",
                "3 punch biopsies → 11104 + 11105 × 2",
                "2 incisional biopsies → 11106 + 11107",
                "1 incisional + 1 tangential + 1 punch → 11106 (primary) + 11103 (tangential add-on) + 11105 (punch add-on)",
                "1 punch + 2 tangential → 11104 (primary) + 11103 × 2 (tangential add-ons)",
              ]}
            />
            <p style={{ margin: "8px 0 0" }}>In practice, whichever technique is documented as the primary/first procedure sets the primary code, and every other lesion sampled — by any technique — is billed with that technique's own add-on code.</p>
          </>
        ),
      },
    ],
  },
  {
    n: 5,
    title: "Excisions (Benign and Malignant)",
    range: "11400–11471 · 11600–11646",
    items: [
      {
        q: "How are the excision codes organized?",
        approach: "Split first by benign vs. malignant, then within each, by body location, then by excised diameter size tier.",
        answer: (
          <>
            <p style={{ margin: "0 0 8px" }}>Two parallel code families, each organized the same way — by location, then by size:</p>
            <DGList
              items={[
                "11400–11446 — benign lesion excision (trunk/arms/legs; scalp/neck/hands/feet/genitalia; face/ears/eyelids/nose/lips/mucous membrane)",
                "11600–11646 — malignant lesion excision (same three location groupings)",
              ]}
            />
            <p style={{ margin: "8px 0 0" }}>Within each location group, codes step up by excised-diameter size tier (e.g., 0.5 cm or less, 0.6–1.0 cm, 1.1–2.0 cm, 2.1–3.0 cm, 3.1–4.0 cm, over 4.0 cm).</p>
          </>
        ),
      },
      {
        q: "What is the billable unit for excisions? How is it measured?",
        approach: "It's never just the lesion's size — it's lesion PLUS the margin the physician judged necessary, measured BEFORE the cut is made.",
        answer: (
          <>
            <p style={{ margin: "0 0 8px" }}>Excision is billed by the EXCISED DIAMETER: the greatest clinical diameter of the lesion PLUS the narrowest margin required for complete excision, based on the physician's individual judgment. That measurement is taken prior to excision — not from the pathology report afterward, and not from the size of the surgical defect.</p>
            <p style={{ margin: 0 }}>The excised diameter is the same whether the resulting defect is closed in a simple linear fashion or reconstructed with a graft — the size tier doesn't change based on how it's closed.</p>
          </>
        ),
      },
      {
        q: "How are closures reported in conjunction with the excision codes. (There are 3 possible scenarios)",
        approach: "Ask what TYPE of closure was performed: none-beyond-simple, intermediate/complex, or reconstructive (graft/flap/ATT) — each has its own reporting rule.",
        answer: (
          <DGSteps
            items={[
              <><strong>Simple (non-layered) closure</strong> — bundled into the excision code. Excision "includes simple closure when performed"; do not report a separate repair code.</>,
              <><strong>Intermediate or complex closure</strong> — reported SEPARATELY, in addition to the excision code, using the appropriate intermediate (12031–12057) or complex (13100–13153) repair code.</>,
              <><strong>Reconstructive closure</strong> — for a skin graft/flap closing the defect, report the reconstructive closure code (15002–15261, 15570–15770) in addition to the excision. But if the reconstruction is specifically an adjacent tissue transfer (14000–14302), the excision is NOT separately reportable at all — only the ATT code is billed, since it already includes the excision.</>,
            ]}
          />
        ),
      },
      {
        q: "How are re-excisions reported (for malignant lesion excisions only)",
        approach: "Ask when the re-excision happened relative to the original surgery — if it's within the global/postoperative period and by the same physician, it needs a modifier that says \"planned, related follow-up,\" not \"unrelated repeat.\"",
        answer: "When a re-excision of a malignant lesion is performed during the postoperative period of the primary excision, by the same physician, report the appropriate excision code again and append modifier 58 (staged or related procedure performed during the postoperative period by the same physician).",
        codes: [["58", "Staged/related procedure during the postoperative period"]],
      },
    ],
  },
  {
    n: 6,
    title: "Repair (Closure)",
    range: "12001–13160",
    items: [
      {
        q: "How are the repair codes organized?",
        approach: "Three classifications by complexity of layers closed, then each classification splits by body location group, then by wound length.",
        answer: (
          <>
            <p style={{ margin: "0 0 8px" }}>Repair is classified by complexity first, then coded by anatomic location group and total length:</p>
            <DGList
              items={[
                <><strong>Simple (12001–12021):</strong> superficial wound (epidermis, dermis, or subQ without significant deeper involvement); one-layer closure.</>,
                <><strong>Intermediate (12031–12057):</strong> layered closure of one or more deeper layers of subQ tissue and superficial (non-muscle) fascia, in addition to the skin closure; also includes single-layer closure of a heavily contaminated wound requiring extensive cleaning/removal of particulate matter. Includes limited undermining.</>,
                <><strong>Complex (13100–13153):</strong> everything intermediate requires, PLUS at least one of: exposed bone/cartilage/tendon/named neurovascular structure, debridement of wound edges, extensive undermining, involvement of free margins (helical rim, vermilion border, nostril rim), or retention sutures.</>,
              ]}
            />
          </>
        ),
      },
      {
        q: "What is the billable unit for repairs?",
        approach: "Length in centimeters, measured and recorded for every wound repaired — no matter the shape.",
        answer: "Every repaired wound is measured and recorded in centimeters, whether the wound is curved, angular, or stellate, and coded by that total length within its classification and location grouping.",
      },
      {
        q: "What packaged services are included in Repairs?",
        approach: "Think about what's routine and minor around any closure — these don't get their own separate code.",
        answer: (
          <DGList
            items={[
              "Hemostasis and local or topical anesthesia, when performed — not reported separately.",
              "Simple ligation of vessels in an open wound — considered part of any wound closure.",
              "Simple exploration of nerves, blood vessels, or tendons exposed in the wound — part of the essential wound treatment, unless appreciable dissection is required.",
              "Debridement is separately reportable only when it involves prolonged cleansing for gross contamination, removal of appreciable devitalized/contaminated tissue, or is performed separately without immediate primary closure — otherwise it's part of the repair.",
            ]}
          />
        ),
      },
      {
        q: "How are multiple repairs reported?",
        approach: "Add lengths together only within the same classification AND the same anatomic grouping — never across classifications, never across different location groups.",
        answer: (
          <>
            <p style={{ margin: "0 0 8px" }}>When multiple wounds are repaired, add together the lengths of those in the SAME classification (simple/intermediate/complex) and from anatomic sites grouped together in the same code descriptor (e.g., add intermediate repairs of the trunk and extremities together, since they share a code group). Do not add lengths across different classifications, and do not add lengths across different anatomic groupings (e.g., face vs. extremities).</p>
            <p style={{ margin: 0 }}>When more than one classification of wound is repaired at the same session, list the MORE complicated repair as the primary procedure and the LESS complicated repair as the secondary procedure, appending modifier 59 to the secondary one.</p>
          </>
        ),
      },
    ],
  },
  {
    n: 7,
    title: "Adjacent Tissue Transfer (ATT)",
    range: "14000–14302",
    items: [
      {
        q: "How are the ATT codes organized?",
        approach: "Organized by body location group first, then by total defect size tier — the technique name (Z-plasty, W-plasty, rotation flap, etc.) doesn't change the code.",
        answer: (
          <DGList
            items={[
              "14000–14001 — trunk",
              "14020–14021 — scalp, arms, and/or legs",
              "14040–14041 — forehead, cheeks, chin, mouth, neck, axillae, genitalia, hands, and/or feet",
              "14060–14061 — eyelids, nose, ears, and/or lips",
              "14301–14302 — any area, larger defects (30.1 sq cm and up, with 14302 as the add-on for each additional 30.0 sq cm)",
            ]}
          />
        ),
      },
      {
        q: "What is the billable unit for ATTs? How is it measured?",
        approach: "Not just the lesion's defect — CPT specifically says to add the PRIMARY defect (from the excision) to the SECONDARY defect (created by the flap design) together.",
        answer: "ATT is billed by total DEFECT SIZE in square centimeters. For code selection, \"defect\" includes both the primary defect (resulting from the excision) and the secondary defect (resulting from the flap design needed to perform the reconstruction) — these are measured TOGETHER to pick the code.",
      },
      {
        q: "How are ATTs reported with Excision codes?",
        approach: "ATT codes already include the excision and/or repair by transfer — reporting the excision code on top of it would be double-billing the same work.",
        answer: (
          <>
            <p style={{ margin: "0 0 8px" }}>ATT codes (14000–14302) are used for excision (including of a lesion) AND/OR repair by adjacent tissue transfer or rearrangement (Z-plasty, W-plasty, V-Y plasty, rotation flap, random island flap, advancement flap). Excision of a benign (11400–11446) or malignant (11600–11646) lesion is NOT separately reportable with an ATT code — report the ATT code alone.</p>
            <p style={{ margin: 0 }}>Note: undermining alone, without any additional incisions, does not qualify as adjacent tissue transfer — that's coded as complex repair (13100–13160) instead. If a skin graft is needed to close a resulting secondary defect, that graft is an additional, separately reportable procedure.</p>
          </>
        ),
      },
    ],
  },
  {
    n: 8,
    title: "Skin Replacement Surgery",
    range: "15002–15278 · 15570–15777",
    items: [
      {
        q: "How are the grafting codes organized?",
        approach: "First by whether it's wound-bed prep or the actual graft/flap; then grafts split by graft TYPE (autograft, skin substitute, allograft), and flaps by type (pedicle, island, free/microvascular).",
        answer: (
          <DGList
            items={[
              "15002–15005 — surgical preparation (excisional wound-bed prep for a graft, flap, skin substitute, or negative-pressure wound therapy)",
              "15040 — harvest of skin for tissue-cultured skin autograft",
              "15050–15278 — autografts and skin substitute grafts (split, full-thickness, tissue-cultured, skin substitute), organized by recipient site and size",
              "15570–15738 — pedicle/island flaps",
              "15756–15758 — free skin flaps with microvascular anastomosis",
              "15760–15777 — other flaps/grafts (composite, tissue-cultured/derived skin substitute application)",
              "15780–15879 — other procedures (dermabrasion, chemical peel, excision of excessive skin/lipectomy)",
            ]}
          />
        ),
      },
      {
        q: "How are the graft codes reported/billed?",
        approach: "By the size of the RECIPIENT area (where the graft is placed), not the donor site — and remember supply of the graft material itself may be a separate code.",
        answer: (
          <>
            <p style={{ margin: "0 0 8px" }}>Skin replacement/graft codes are selected using the RECIPIENT-AREA size — the wound being covered, not the donor site harvested. Skin substitute supply is reported separately with 15271–15278.</p>
            <p style={{ margin: 0 }}>Removal of a prior/failed graft and simple wound cleansing are included when performed. Debridement is separately reportable only when it meets the same gross-contamination/appreciable-devitalized-tissue/separate-performance criteria used elsewhere in the chapter. Repair of a donor site that itself requires a skin graft or local flap is separately reportable. For flaps, the listed body region generally refers to the RECIPIENT site — except when the code specifically describes a donor site (e.g., for a tube or delayed flap).</p>
          </>
        ),
      },
      {
        q: "When grafting is performed on multiple wounds, how are they reported?",
        approach: "Same rule shape as debridement — combine sizes only within the same grouping, here the same anatomic grouping, not by depth.",
        answer: "For multiple wounds grafted in the same session, add the recipient areas together only when the wounds fall within the SAME anatomic grouping (the same code family's location range). Do not combine areas from wounds in different anatomic groupings — code each grouping separately using its own first-size/add-on size structure.",
      },
    ],
  },
  {
    n: 9,
    title: "Destruction",
    range: "17000–17004 · 17106–17108 · 17110–17111 · 17260–17286 · 17311–17315",
    items: [
      {
        q: "How is destruction different from excision?",
        approach: "Ask: is a specimen being cut out with margins and sent for pathologic diagnosis (excision), or is the lesion simply being ablated/eradicated in place with no intact specimen produced (destruction)?",
        answer: "Excision is full-thickness surgical removal of the lesion (through the dermis), including margins, and the tissue is typically sent to pathology; it usually requires closure. Destruction is ablation of tissue — by methods such as electrosurgery, cryosurgery, laser surgery, chemosurgery, or surgical curettement — with no intact specimen removed for margin/histopathologic evaluation. Destruction codes generally include local anesthesia, and closure is usually not required or reported.",
      },
      {
        q: "How are the destruction codes organized?",
        approach: "First by lesion category (premalignant, benign, malignant, or cutaneous vascular proliferative), then — unlike excision — mostly by LESION COUNT rather than size (except malignant, which is by size and location like excision).",
        answer: (
          <DGList
            items={[
              "17000/17003/17004 — premalignant lesions (e.g., actinic keratoses): 17000 first lesion, 17003 each additional lesion (2nd–14th), 17004 for 15 or more lesions (reported instead of, not with, 17000–17003)",
              "17106–17108 — destruction of cutaneous vascular proliferative lesions, organized by total area treated (less than 10 sq cm, 10.0–50.0 sq cm, over 50.0 sq cm)",
              "17110/17111 — destruction of benign lesions other than skin tags (e.g., warts, molluscum): 17110 for up to 14 lesions, 17111 for 15 or more lesions",
              "17260–17286 — destruction of malignant lesions, organized by body location group and lesion diameter (mirroring the excision-code structure)",
              "17311–17315 — Mohs micrographic surgery (see next question)",
            ]}
          />
        ),
      },
      {
        q: "How are the destruction codes reported/billed?",
        approach: "Premalignant and benign: count the lesions treated in the session. Malignant: measure lesion diameter and location, same logic as excision.",
        answer: "Premalignant and benign (non-tag, non-vascular) lesion destruction is billed by LESION COUNT for the session (first lesion vs. each additional, or a single code for 15+). Malignant lesion destruction is billed by LOCATION and LESION DIAMETER, the same size-tier logic used for malignant excision — but no margin is added, since nothing is being excised.",
      },
      {
        q: "In Mohs micrographic surgery, what are stages and blocks? How do stages and blocks play up in reporting these procedures?",
        approach: "A STAGE is one full round of tumor removal + mapping + microscopic exam by the same surgeon; a BLOCK is one individual piece of tissue embedded for sectioning within a stage. Report per stage first, then per block beyond the included five.",
        answer: (
          <>
            <p style={{ margin: "0 0 8px" }}>Mohs surgery removes tumor tissue, then the surgeon (acting as both surgeon and pathologist) maps, color-codes, and divides the specimen into pieces. Each piece embedded into an individual tissue block for histopathologic examination is a BLOCK. Each complete round of removing tissue, mapping it, and microscopically examining it before deciding whether more tissue needs to come out is a STAGE.</p>
            <DGList
              items={[
                "17311/17312 — head, neck, hands, feet, genitalia, or any location with surgery directly involving muscle/cartilage/bone/tendon/major nerves/vessels: 17311 first stage (up to 5 blocks), 17312 each additional stage (up to 5 blocks each)",
                "17313/17314 — trunk, arms, or legs: 17313 first stage (up to 5 blocks), 17314 each additional stage (up to 5 blocks each)",
                "17315 — each additional block beyond the first 5 tissue blocks, in ANY stage (add-on, used with 17311–17314)",
              ]}
            />
            <p style={{ margin: "8px 0 0" }}>Worked example: 3 stages total, with 7 blocks in the second stage (and ≤5 blocks in stages 1 and 3) on an arm → 17313 (stage 1) + 17314 × 2 (stages 2 and 3) + 17315 × 2 (the 2 blocks in stage 2 beyond the included 5).</p>
          </>
        ),
        codes: [["17311", "First stage, head/neck/hands/feet/genitalia"], ["17313", "First stage, trunk/arms/legs"], ["17315", "Each block beyond 5, any stage (add-on)"]],
      },
    ],
  },
  {
    n: 10,
    title: "Breast Procedures",
    range: "19000–19307",
    items: [
      {
        q: "How are breast procedures organized?",
        approach: "Group by what's being done to the breast: aspiration/incision, image-guided biopsy, introduction (localization only, no tissue removed), open excision, mastectomy, then repair/reconstruction.",
        answer: (
          <DGList
            items={[
              "19000–19001 — puncture aspiration of a breast cyst",
              "19020 — mastotomy with exploration or drainage of a deep abscess",
              "19081–19086 — percutaneous image-guided breast biopsy (with localization device placement, when performed), organized by guidance modality (stereotactic, ultrasound, MRI)",
              "19100–19101 — percutaneous/open breast biopsy without image guidance",
              "19110–19126 — excision of breast lesions/tissue (open)",
              "19281–19298 — introduction: image-guided placement of localization devices WITHOUT a biopsy, plus radiotherapy catheter/applicator placement",
              "19300–19307 — mastectomy procedures",
              "19316–19396 — repair and reconstruction (mastopexy, reduction, augmentation, implants, reconstruction)",
            ]}
          />
        ),
      },
      {
        q: "What is the difference between Breast Excision codes and Breast Introduction codes?",
        approach: "Excision physically REMOVES breast tissue for diagnosis or treatment. Introduction only PLACES something (a localization marker, catheter, or applicator) — no tissue is removed by that code.",
        answer: "Excision codes (19110–19126) remove breast tissue — a cyst, fibroadenoma, benign or malignant tumor, duct lesion, nipple/areolar lesion, or a lesion previously marked by a radiological localization device. Introduction codes (19281–19288) only PLACE a percutaneous breast localization device (clip, metallic pellet, wire/needle, radioactive seed) under imaging guidance, WITHOUT performing a biopsy at the same time — no tissue is removed under an Introduction code itself.",
      },
      {
        q: "What is the billable unit for Breast Excisions and Breast Introductions?",
        approach: "Excision splits into two different billing patterns depending on whether a marker was used. Introduction follows the same per-lesion, per-modality logic as FNA.",
        answer: (
          <>
            <p style={{ margin: "0 0 8px" }}><strong>Excision:</strong> 19120 (excision of a cyst/fibroadenoma/tumor/duct lesion/nipple or areolar lesion, open, WITHOUT a preoperative marker) is billed ONCE per session regardless of how many lesions are excised — its descriptor literally says "1 or more lesions." By contrast, 19125 (excision of a marker-localized lesion, open) is billed PER LESION, with add-on 19126 for each additional marker-localized lesion.</p>
            <p style={{ margin: 0 }}><strong>Introduction:</strong> billed per lesion per imaging modality, mirroring FNA — a first-lesion primary code per modality (19281/19283/19285/19287) plus an add-on code for each additional lesion under that same modality (19282/19284/19286/19288).</p>
          </>
        ),
        codes: [["19120", "Excision, no marker — billed once regardless of lesion count"], ["19125", "Excision of marker-localized lesion — per lesion"], ["19126", "Each additional marker-localized lesion (add-on)"]],
      },
      {
        q: "When Excisions are performed on multiple breast lesions, how are these procedures reported?",
        approach: "This hinges entirely on the same fork as the billable-unit question above: was a preoperative localization marker used?",
        answer: "If no preoperative radiological marker was used, report 19120 only ONCE for the session no matter how many lesions were excised (its own descriptor covers \"1 or more lesions\"). If a preoperative marker was used to identify the lesion(s), report 19125 for the first marker-localized lesion and add-on code 19126 for each additional marker-localized lesion excised in that session.",
      },
      {
        q: "When Introductions are performed on multiple breast lesions, how are these procedures reported?",
        approach: "Same structural logic as FNA: same modality → primary + add-on(s); different modality → separate primary codes for each modality, one add-on per modality's additional lesions.",
        answer: (
          <>
            <p style={{ margin: "0 0 8px" }}>When more than one localization device placement (without biopsy) is performed using the SAME imaging modality, report the modality's add-on code for each additional placement — this applies whether it's on the same breast or the contralateral breast.</p>
            <p style={{ margin: 0 }}>When additional localization device placements are performed using DIFFERENT imaging modalities, report another primary code for each additional placement performed under a different guidance modality (e.g., 19281 for a stereotactic-guided placement plus 19285 for an ultrasound-guided placement).</p>
          </>
        ),
      },
      {
        q: "Identify the different types of mastectomy procedures",
        approach: "Line them up from least to most tissue removed — partial, then simple/total, then the three radical variants that differ by what else comes out with the breast.",
        answer: (
          <DGList
            items={[
              <><strong>19300 — Mastectomy for gynecomastia.</strong></>,
              <><strong>19301 — Partial mastectomy</strong> (lumpectomy, tylectomy, quadrantectomy, segmentectomy): only a portion of the ipsilateral breast tissue is removed.</>,
              <><strong>19302 — Partial mastectomy with axillary lymphadenectomy:</strong> same as 19301, plus a complete axillary lymph node dissection performed in addition.</>,
              <><strong>19303 — Simple, complete mastectomy:</strong> total removal of ipsilateral breast tissue, with or without skin/nipple removal (e.g., nipple-sparing); does NOT include excision of pectoral muscle(s) or axillary/internal mammary lymph nodes.</>,
              <><strong>19305 — Radical mastectomy</strong> (Halsted type): total removal of ipsilateral breast tissue including the nipple, PLUS excision of pectoral muscle(s) and/or axillary lymph nodes.</>,
              <><strong>19306 — Radical mastectomy, Urban type:</strong> the radical mastectomy plus internal mammary lymph nodes as well.</>,
              <><strong>19307 — Modified radical mastectomy:</strong> total breast removal including axillary lymph nodes, with or without the pectoralis minor muscle, but EXCLUDING the pectoralis major muscle.</>,
            ]}
          />
        ),
        codes: [["19301", "Partial mastectomy"], ["19303", "Simple, complete mastectomy"], ["19305", "Radical (Halsted)"], ["19306", "Radical, Urban type"], ["19307", "Modified radical"]],
      },
    ],
  },
];

export default function IntegumentaryDiscussionGuidePage() {
  return (
    <DiscussionGuidePage
      theme={BLUE}
      kicker="10,000 SERIES · DISCUSSION GUIDE"
      title="Integumentary System Discussion Guide — Answered"
      blurb="Every question from the training discussion guide, answered step by step and checked against the CPT 2026 codebook and this series' study material."
      nav={[
        { href: "/cpt/surgery/10,000", label: "10,000 Series home" },
        { href: "/cpt/surgery/10000-series-study-tips", label: "Study Tips" },
        { href: "/cpt/surgery/10000-series-guidelines-quiz", label: "Guidelines Quiz" },
        { href: "/cpt/surgery/10000-series-post-work-quiz", label: "Post-Work Quiz" },
        { href: "/cpt/surgery/10000-series-transcript-quiz", label: "Transcript Quiz" },
      ]}
      backHref="/cpt/surgery/10,000"
      backLabel="← Back to the 10,000 Series"
      topics={topics}
      approach={[
        "Read the question first and decide which code family it belongs to — that tells you which organizing rule (depth, technique, size, location, or count) applies.",
        "Most sub-questions in this chapter follow the same shape: how are the codes grouped, what's the billable unit, and how do multiples get reported — look for that pattern in every topic.",
        "Check the code chips for the exact codes tied to each answer, and follow the Study Tips and quiz links for extra repetition and worked examples.",
      ]}
      sourceNote="Answers are paraphrased from CPT 2026 and cross-checked against the 10,000 Series Study Tips, Guidelines Quiz, Post-Work Quiz, and Transcript Quiz in this series."
    />
  );
}
