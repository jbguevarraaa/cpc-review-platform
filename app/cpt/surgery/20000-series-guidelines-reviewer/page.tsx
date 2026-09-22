import Link from "next/link";
import { Highlightable, HighlightToolbar } from "../_digestive/highlighter";

type CodeEntry = { code: string; desc: string };
type Category = { title: string; codes: CodeEntry[] };

type Topic = {
  n: number;
  title: string;
  codes: string;
  categories?: Category[];
  summary: string[];
  steps: string[];
  easy: { scenario: string; answer: string };
  hard: { scenario: string; answer: string };
  cases?: { title: string; scenario: string; steps: string[]; answer: string }[];
  tips: string[];
};

const topics: Topic[] = [
  {
    n: 1,
    title: "Casting, Splinting & Bundling Rules",
    codes: "29000–29750 (casts/splints), 20690/20692 (traction)",
    categories: [
      {
        title: "Cast/splint removal (by someone other than the applying physician)",
        codes: [
          { code: "29700", desc: "Removal or bivalving; gauntlet, boot, or body cast" },
          { code: "29705", desc: "Removal or bivalving; full arm or full leg cast" },
          { code: "29710", desc: "Removal or bivalving; shoulder or hip spica, Minerva, or Risser jacket" },
        ],
      },
      {
        title: "Representative subsequent casts/splints (29000–29750 family)",
        codes: [
          { code: "29075", desc: "Application of cast, elbow to finger (short arm)" },
          { code: "29345", desc: "Application of long leg cast (thigh to toes)" },
          { code: "29425", desc: "Application of short leg cast (below knee to toes)" },
          { code: "29130", desc: "Application of static finger splint" },
        ],
      },
      {
        title: "Graft harvest through a separate incision",
        codes: [
          { code: "20900", desc: "Bone graft, any donor area; minor or small" },
          { code: "20920", desc: "Fascia lata graft; by stripper" },
        ],
      },
    ],
    summary: [
      "Every Musculoskeletal procedure code already includes application AND removal of the FIRST cast, splint, or traction device used, when performed — you never separately bill that initial application on top of the procedure code. Supplies can still be billed separately.",
      "A SUBSEQUENT cast/splint (a replacement, not the first one) can be billed separately using the 29000–29750 family, whether it happens during or after the global period.",
      "If someone OTHER than the physician who applied the cast is the one removing it, that removal gets its own code (29700–29710). If the same person who applied it also removes it, that's already bundled — no separate code.",
      "A cast/splint is never considered part of preoperative care, so modifier 56 (preoperative management only) is never appropriate for it.",
      "Autograft harvesting (bone, cartilage, tendon, fascia lata) through a separate incision gets its own code — but only when the graft isn't already built into the base procedure's own descriptor.",
    ],
    steps: [
      "Step 1 — Is this the first cast/splint/traction device for this procedure? If yes, it's already bundled — don't bill it.",
      "Step 2 — Is this a replacement/subsequent cast or splint? If yes, code it from the 29000–29750 family.",
      "Step 3 — Who's removing it — the same physician who applied it, or someone else? Same person → bundled. Different person → use a cast-removal code.",
      "Step 4 — Was a graft harvested through a separate incision, and is it not already part of the base procedure's descriptor? If so, code the graft separately.",
    ],
    easy: {
      scenario: "A physician applies a short-arm cast as part of closed fracture treatment, with no complications.",
      answer: "The cast application is already bundled into the fracture treatment code — no separate casting code.",
    },
    hard: {
      scenario: "Two weeks later, the patient goes to a different clinic to have the cast removed early (it got wet) and replaced. That clinic didn't apply the original cast.",
      answer: "The removing clinic bills a cast-removal code, since they aren't the physician who applied it. Whoever applies the replacement cast separately bills the matching 29000–29750 code.",
    },
    cases: [
      {
        title: "Replacement Cast, Same Type (Cast Damaged)",
        scenario: "A 45-year-old construction worker underwent manipulation of a left tibial shaft fracture with application of a long leg walking cast a week ago. The cast gets wet, and the patient returns to Dr. Bones for a replacement cast application of the same type.",
        steps: [
          "This isn't the FIRST cast for this fracture — it's a REPLACEMENT, which per this topic's own guideline is billable separately from the original fracture treatment code, whether during or after the global period.",
          "The replacement cast itself is coded from the 29000–29750 family — this page's own code table already lists 29345 (application of long leg cast, thigh to toes) as an example in this exact family.",
          "Per this topic's own summary point 1, supplies are always separately billable — so the matching Q4xxx cast-supply HCPCS code is reported in addition to the CPT application code.",
        ],
        answer: "29345 (application of long leg cast) plus the matching Q4xxx cast supply code — reported separately since this is a replacement, not the original definitive treatment.",
      },
      {
        title: "Initial Stabilization Only — No Restorative Treatment",
        scenario: "A 36-year-old female presents to the ED after falling from a tree. The ED physician determines a non-displaced fracture of the left distal ulna. An ice bag is applied by staff and an injection is administered for pain. The ED physician applies a plaster molded splint for immobilization. The patient is referred to an orthopedic clinic for follow-up treatment in two days.",
        steps: [
          "No manipulation, casting-as-treatment, or fixation is performed here — the ED physician only stabilizes/protects the fracture and refers out. Per this series' own Topic 3 guideline, that means no fracture treatment code applies at all — the splint is initial protection, not restorative treatment.",
          "Because there's no fracture treatment code for it to bundle into, the splint itself is separately billed: a short-arm splint application code (forearm to hand) for the distal ulna, plus its matching Q4xxx splint-supply code.",
          "The pain injection is a judgment call: a plain analgesic injection given as routine ED supportive care is typically absorbed into the E/M service rather than separately coded as its own injection procedure — it's only separately reportable if documentation shows it was a distinct, separately identifiable therapeutic injection.",
          "Since actual restorative fracture treatment was NOT performed, the ED evaluation itself still supports a separately reportable E/M code (with modifier 25, since a significant, separately identifiable E/M service was furnished alongside the splint procedure) — this isn't a fracture-treatment-code situation at all.",
        ],
        answer: "An ED E/M code (modifier 25) + the short-arm splint application code (e.g., 29125) + the matching Q4xxx splint supply code; the pain injection is usually bundled into the E/M unless documentation shows it was a distinct, separately identifiable injection.",
      },
      {
        title: "HARD SCENARIO — Cast Applied for a Knee Sprain (No Fracture)",
        scenario: "A 55-year-old male presents to the ED after a car accident. The ED physician calls in an orthopedic surgeon for a consultation. The orthopedist evaluates the patient and diagnoses a sprained left knee ligament. He places a long leg walking cast and instructs the patient to return to his office for follow-up care.",
        steps: [
          "Trap: this is a ligament SPRAIN, not a fracture or dislocation — there is no fracture/dislocation treatment CPT code for this cast to bundle into. Don't force the \"first cast is bundled into the fracture code\" rule where no fracture code exists to bundle it into.",
          "Because there's no underlying fracture-treatment procedure code, the immobilization device itself becomes the billable service — and for immobilizing a joint sprain/strain (rather than applying a cast as part of fracture treatment), CPT's Application of Casts and Strapping subsection routes this to the STRAPPING family, not the general cast-application codes, even though the documentation colloquially calls it a \"cast.\"",
          "This page's own code table only lists cast APPLICATION examples (29075, 29345, 29425, 29130) — the knee STRAPPING code wasn't among them, so it was verified fresh against the CPT 2026 codebook: 29530, Strapping; knee.",
        ],
        answer: "29530 — Strapping; knee. The sprain-vs-fracture distinction is the trap: no fracture/dislocation code exists here for a cast to package into, so the immobilization itself is separately billed under the strapping family.",
      },
      {
        title: "Definitive Treatment, Manipulation Not Documented — Cast Included",
        scenario: "A 24-year-old male presented to the ED after falling off of a ladder. The ED physician determines that the patient's left forearm (ulnar shaft) is fractured. The physician treated the fracture by placement of a short arm cast and instructed the patient to come back after 2 weeks.",
        steps: [
          "Trap: the scenario never says \"manipulation\" or \"reduction\" was performed — only that a short arm cast was placed as treatment. That ambiguity matters, because it points to closed treatment WITHOUT manipulation of the ulnar shaft fracture, not a with-manipulation code.",
          "Per this topic's own guideline, the first cast is still part of the surgical package even for closed treatment WITHOUT manipulation — so the cast itself is never billed separately here either.",
          "Part 3's own radial/ulnar shaft table documents 25500 (radial shaft, without manipulation) but doesn't spell out the parallel ulnar-shaft code, so it was verified fresh against the CPT 2026 codebook: 25530, Closed treatment of ulnar shaft fracture, without manipulation.",
        ],
        answer: "25530 only — closed treatment of ulnar shaft fracture, without manipulation; the short arm cast is bundled in, exactly as it would be with manipulation.",
      },
    ],
    tips: [
      "The bundled-cast rule only covers the FIRST cast/splint/traction device for a given procedure — everything after that is fair game to bill.",
      "Modifier 56 is a guaranteed wrong answer any time a cast/splint scenario shows up — it's explicitly excluded from ever applying here.",
    ],
  },
  {
    n: 2,
    title: "Fracture & Dislocation Treatment — Core Definitions",
    codes: "Conceptual foundation — applies throughout the whole Musculoskeletal section",
    summary: [
      "There's no correlation between the TYPE of fracture (open/compound vs. closed) and the TYPE of TREATMENT (closed/percutaneous/open). A closed fracture can absolutely require open treatment, and vice versa — don't assume one dictates the other.",
      "Manipulation = manual force or traction applied to realign a fracture/dislocation. If the same physician has to re-reduce it later because alignment wasn't maintained, modifier 76 gets appended to the same treatment code.",
      "Traction = a distracting force applied to a limb or the spine. Skeletal traction penetrates the bone (wire/pin/screw/clamp). Skin traction never penetrates — it's strapping or a device applied to the skin's surface only.",
      "Closed treatment = the fracture site is never surgically opened or directly visualized. It can happen with or without manipulation, and with or without traction. Casting/splinting purely for comfort — not to actually reduce/treat the fracture — does NOT count as closed treatment.",
      "Percutaneous skeletal fixation = a middle ground: the fracture fragments themselves aren't visualized, but fixation hardware (pins/screws) is placed across the fracture site, typically under imaging guidance.",
      "Open treatment = the site is surgically exposed for treatment, OR it's treated through the traumatic wound itself (or an extension of it), OR it's treated with an intramedullary nail or other internal fixation device placed through a surgical exposure remote from the fracture site — even without ever directly visualizing the fracture site itself.",
      "External fixation (pins/wires through bone connected by external clamps/bars/rings) can be used with any of the three treatment types above. It's only coded separately when it isn't already built into the specific procedure code's own descriptor.",
    ],
    steps: [
      "Step 1 — Was the site surgically opened, treated through the traumatic wound itself, or treated with an internal fixation device from a remote incision? → Open treatment.",
      "Step 2 — If not, was fixation hardware placed across the fracture under imaging guidance without ever visualizing the actual fragments? → Percutaneous skeletal fixation.",
      "Step 3 — If neither, → Closed treatment. Then check: was manipulation performed, and was traction (skeletal or skin) used?",
      "Step 4 — Was external fixation used, and is it already built into the specific code you're about to choose? If not already included, code it separately.",
    ],
    easy: {
      scenario: "A displaced wrist fracture is realigned by hand and immobilized in a cast; the skin is never opened.",
      answer: "Closed treatment, with manipulation.",
    },
    hard: {
      scenario: "A fracture is stabilized with a rod inserted through a small, remote incision using a locking nail technique — the fracture site itself is never opened or directly visualized.",
      answer: "Still open treatment — the definition specifically includes internal fixation placed through a remote surgical exposure, even without direct visualization of the fracture site.",
    },
    tips: [
      "The single biggest trap here: fracture TYPE (open/closed injury) and treatment TYPE (open/closed/percutaneous procedure) are completely independent — a \"closed fracture\" can still get \"open treatment.\"",
      "Skeletal traction penetrates bone; skin traction never does. That's the whole distinction — nothing more complicated than that.",
    ],
  },
  {
    n: 3,
    title: "Reporting Fracture/Dislocation Treatment Codes",
    codes: "Modifier 54, modifier 76",
    summary: [
      "The provider who actually performs the fracture/dislocation treatment reports the treatment code for the work they personally did.",
      "If the person providing the initial treatment won't be the one providing follow-up care, modifier 54 (surgical care only) is appended to the fracture treatment code.",
      "If no actual fracture/dislocation treatment (as defined above) was performed — just an evaluation, or comfort measures before referring elsewhere — report an E/M code instead of a fracture treatment code.",
    ],
    steps: [
      "Step 1 — Did the provider actually perform treatment as defined (manipulation, casting-as-treatment, fixation), or just evaluate/comfort-splint without treating? No real treatment → E/M code instead.",
      "Step 2 — If treatment was performed, will this same provider also handle the follow-up care? If not, append modifier 54.",
    ],
    easy: {
      scenario: "An orthopedist manipulates and casts a fracture in the ED, then hands off all follow-up care to a different orthopedic group.",
      answer: "The fracture treatment code with modifier 54 appended.",
    },
    hard: {
      scenario: "A patient with an obviously fractured wrist is evaluated in urgent care, splinted purely for comfort, and referred out for definitive treatment — no reduction was attempted.",
      answer: "Report an E/M code for the visit, not a fracture treatment code — comfort splinting alone doesn't meet the definition of closed treatment.",
    },
    cases: [
      {
        title: "Closed Reduction, Tibial Shaft Fracture (ED)",
        scenario: "A 22-year-old female presents to ED after falling and fracturing the shaft of her left tibia. The ED physician evaluates the patient and performs a closed reduction of the tibia.",
        steps: [
          "A reduction IS a manipulation — manual force used to realign the fracture (per this series' own Topic 2 definition of manipulation).",
          "The fracture site is never surgically opened, so this is closed treatment, not open treatment or percutaneous skeletal fixation.",
          "The tibia/fibula section sits outside the ranges documented in Parts 1–3 of this series, so this code was verified fresh against the CPT 2026 codebook: 27752, Closed treatment of tibial shaft fracture (with or without fibular fracture), with manipulation, with or without skeletal traction.",
        ],
        answer: "27752 — Closed treatment of tibial shaft fracture, with manipulation.",
      },
      {
        title: "Open Treatment, Shoulder Dislocation",
        scenario: "After playing a rugby game, a 28-year-old male presents to the ED with pain in his left shoulder. An orthopedic surgeon diagnoses a dislocated shoulder and recommends open surgical treatment. The patient underwent open surgical treatment of the dislocation.",
        steps: [
          "The dislocation is treated by surgically opening the joint — that's open treatment, per this series' own Topic 2 definition.",
          "There's no associated tuberosity or neck fracture mentioned, so this is the plain (isolated) shoulder dislocation code, not one of the combination codes covered in Part 3's shoulder topic.",
          "Part 3's own shoulder table documents the closed-treatment dislocation code (23650) and the tuberosity-combination code (23665), but not the plain open-treatment code, so it was verified fresh against the CPT 2026 codebook: 23660, Open treatment of acute shoulder dislocation.",
        ],
        answer: "23660 — Open treatment of acute shoulder dislocation.",
      },
      {
        title: "Percutaneous Pinning, Colles Fracture",
        scenario: "A 14-year-old boy had a treatment of closed, complex left Colles fracture with percutaneous pinning and plaster technique.",
        steps: [
          "\"Closed, complex... with percutaneous pinning\" describes fixation hardware placed across the fracture site, without ever opening or directly visualizing the fracture fragments — per this series' own Topic 2 definition, that's percutaneous skeletal fixation, not closed treatment and not open treatment.",
          "A Colles fracture is a distal radial fracture.",
          "Part 3's own distal-radius table documents the closed-treatment code (25600) and the open-treatment codes (25608/25609), but not the percutaneous-fixation code, so it was verified fresh against the CPT 2026 codebook: 25606, Percutaneous skeletal fixation of distal radial fracture or epiphyseal separation.",
        ],
        answer: "25606 — Percutaneous skeletal fixation of distal radial (Colles) fracture.",
      },
      {
        title: "Re-Reduction, Same Physician, Same Method",
        scenario: "Patient had a closed reduction in the ED for a radial shaft fracture. He now sees the SAME physician for a re-reduction by the same method.",
        steps: [
          "The original treatment was closed treatment with manipulation of a radial shaft fracture.",
          "Per this topic's own guideline, a re-reduction by the SAME physician/QHCP is reported with the original treatment code again, plus modifier 76 (repeat procedure by same physician). Modifier 77 would apply only if a DIFFERENT physician performed the repeat.",
          "Part 3's own radial-shaft table documents the without-manipulation code (25500) but not the with-manipulation code needed here, so it was verified fresh against the CPT 2026 codebook: 25505, Closed treatment of radial shaft fracture, with manipulation.",
        ],
        answer: "25505-76 — Closed treatment of radial shaft fracture, with manipulation, plus modifier 76 for a repeat procedure by the same physician.",
      },
      {
        title: "Definitive Treatment With Manipulation — Cast Included, Same Day",
        scenario: "A 45-year-old construction worker falls off a ladder and sustains a left tibial shaft fracture. Dr. Bones is called by the ED physician to evaluate the fracture. Treatment of the fracture with manipulation, which includes the application of a long leg walking cast, is provided that day by Dr. Bones.",
        steps: [
          "This is the same underlying injury/treatment as the tibial shaft case above (closed treatment with manipulation) — useful to cross-reference.",
          "Per this series' own Topic 1 guideline, application of the FIRST cast is already bundled into the fracture treatment code — it's never billed as a separate cast-application code.",
          "Only one code is reported: 27752 (verified fresh, same as the case above) — the long leg walking cast is not separately coded.",
        ],
        answer: "27752 only — the cast is bundled into the fracture treatment code, per this series' own bundling rule.",
      },
    ],
    tips: [
      "\"Splinted for comfort\" is a recurring trap phrase — it signals E/M, not a fracture treatment code, unless actual reduction/treatment also happened.",
    ],
  },
  {
    n: 4,
    title: "Excision of Soft Tissue & Bone Tumors — The Four Tiers",
    codes: "Conceptual definitions — tumor excision families throughout the section",
    summary: [
      "Subcutaneous soft tissue tumor excision = the tumor is confined below the skin but above the deep fascia; usually benign; removed without taking much surrounding normal tissue (a simple/marginal resection).",
      "Subfascial (fascial) soft tissue tumor excision = the tumor sits within or below the deep fascia, but doesn't involve bone; often intramuscular; also usually benign, minimal margin.",
      "Radical resection of soft tissue tumors = wide margins of normal tissue are removed along with the tumor; used for malignant or very aggressive benign tumors; may span multiple tissue layers.",
      "Radical resection of bone tumors = the same wide-margin concept, but for bone. This is the one tier where code selection is based purely on LOCATION — not tumor size, and not whether it's benign or malignant.",
      "All tiers measure tumor diameter plus the narrowest adequate margin, taken AT the time of excision (except radical bone resection, which skips size entirely).",
      "Vessel exploration, neuroplasty, and any complex repair needed to close the resulting defect are always reported SEPARATELY — none of that is bundled into any tier's excision code.",
      "If soft tissue is also removed during a radical bone tumor resection, that soft tissue work isn't separately coded as its own radical soft-tissue resection — it's part of the same bone-resection operative session.",
    ],
    steps: [
      "Step 1 — Where's the tumor: cutaneous (skin), subcutaneous, subfascial, or bone? Skin-origin lesions route to the Integumentary System codes instead of this section entirely.",
      "Step 2 — Is it a limited/marginal excision (minimal margin, usually benign) or a radical resection (wide margins of normal tissue, usually malignant/aggressive)?",
      "Step 3 — Measure tumor diameter plus the narrowest adequate margin, at the time of excision, to pick the size-based code — except radical bone tumor resection, which is location-only.",
      "Step 4 — Was vessel work, neuroplasty, or a complex closure also needed? Code those separately.",
    ],
    easy: {
      scenario: "A small, well-defined, benign lump confined to the subcutaneous layer of the forearm is removed with minimal margin.",
      answer: "Subcutaneous soft tissue tumor excision, code selected by measuring tumor plus margin.",
    },
    hard: {
      scenario: "An aggressive sarcoma involving both the deep fascia and adjacent bone is removed with wide margins of normal tissue in every direction, along with the surrounding soft tissue.",
      answer: "Radical resection of bone tumor — coded by location only. The soft tissue removed alongside it isn't separately coded as its own radical soft-tissue resection.",
    },
    tips: [
      "Radical bone tumor resection is the one exception to \"measure the tumor\" logic in this whole section — it's a location-only code.",
      "Don't forget: lesions of skin origin route to the Integumentary System excision codes, even if they look like they'd belong here.",
    ],
  },
  {
    n: 5,
    title: "Wound Exploration for Penetrating Trauma",
    codes: "20100–20103",
    categories: [
      {
        title: "Wound exploration, by location",
        codes: [
          { code: "20100", desc: "Exploration of penetrating wound (separate procedure); neck" },
          { code: "20101", desc: "Exploration of penetrating wound; chest" },
          { code: "20102", desc: "Exploration of penetrating wound; abdomen/flank/back" },
          { code: "20103", desc: "Exploration of penetrating wound; extremity" },
        ],
      },
    ],
    summary: [
      "These codes cover surgical exploration/enlargement of a penetrating wound (gunshot, stab), extending the dissection to check for penetration, debridement, foreign body removal, and minor vessel ligation — all without needing a thoracotomy or laparotomy.",
      "If repairing a major structure or major blood vessel actually requires a thoracotomy or laparotomy, that specific repair code replaces 20100–20103 entirely — the two aren't reported together.",
      "If the wound doesn't need enlargement or extended dissection — it's just a straightforward repair — use the regular Integumentary repair codes instead of this family.",
      "Code selection within this family is purely by anatomic location: neck, chest, abdomen/flank/back, or extremity.",
    ],
    steps: [
      "Step 1 — Does the wound need surgical enlargement/exploration to determine the extent of penetration (not just a simple repair)? If not, use Integumentary repair codes instead.",
      "Step 2 — Does treatment require a thoracotomy or laparotomy to repair a major structure or vessel? If yes, that code replaces this family entirely.",
      "Step 3 — If neither of the above, pick the code matching the anatomic location.",
    ],
    easy: {
      scenario: "A stab wound to the extremity requires surgical exploration and debris removal, with no major vessel injury and no thoracotomy/laparotomy needed.",
      answer: "The extremity code from this family, based on location alone.",
    },
    hard: {
      scenario: "A gunshot wound to the chest requires a thoracotomy to repair a lacerated major vessel.",
      answer: "The thoracotomy/vessel-repair code replaces the chest wound-exploration code entirely — they're not both reported.",
    },
    tips: [
      "Once you've confirmed real exploration (not simple repair) is happening, code selection here is purely about anatomic location — don't overthink it further.",
    ],
  },
  {
    n: 6,
    title: "Muscle & Bone Biopsy",
    codes: "20200–20251",
    categories: [
      {
        title: "Muscle biopsy",
        codes: [
          { code: "20200", desc: "Biopsy, muscle; superficial" },
          { code: "20205", desc: "Biopsy, muscle; deep" },
          { code: "20206", desc: "Biopsy, muscle, percutaneous needle" },
        ],
      },
      {
        title: "Bone biopsy — trocar/needle vs. open, by depth",
        codes: [
          { code: "20220", desc: "Biopsy, bone, trocar or needle; superficial (e.g., ilium, sternum, ribs)" },
          { code: "20225", desc: "Biopsy, bone, trocar or needle; deep (e.g., vertebral body, femur)" },
          { code: "20240", desc: "Biopsy, bone, open; superficial" },
          { code: "20245", desc: "Biopsy, bone, open; deep" },
        ],
      },
      {
        title: "Vertebral body open biopsy, by region",
        codes: [
          { code: "20250", desc: "Biopsy, vertebral body, open; thoracic" },
          { code: "20251", desc: "Biopsy, vertebral body, open; lumbar or cervical" },
        ],
      },
    ],
    summary: [
      "Muscle biopsy splits by depth: superficial vs. deep, plus a separate percutaneous needle biopsy code.",
      "Bone biopsy splits by both depth AND technique: trocar/needle biopsy (superficial vs. deep) vs. open biopsy (superficial vs. deep), plus dedicated vertebral body open-biopsy codes split by region (thoracic vs. lumbar/cervical).",
      "If imaging guidance is used for a percutaneous bone biopsy, that guidance is reported separately — it's not bundled into the biopsy code itself.",
    ],
    steps: [
      "Step 1 — Muscle or bone?",
      "Step 2 — What technique — needle/trocar (percutaneous) or open?",
      "Step 3 — What depth — superficial or deep? (For vertebral body biopsies, it's by region instead: thoracic vs. lumbar/cervical.)",
      "Step 4 — Was imaging guidance used for a percutaneous approach? If so, code that separately.",
    ],
    easy: {
      scenario: "A superficial open biopsy of the sternum.",
      answer: "The superficial open bone biopsy code, based on depth plus technique.",
    },
    hard: {
      scenario: "A percutaneous needle biopsy of a deep femur lesion is performed under CT guidance.",
      answer: "The deep bone trocar/needle biopsy code, plus a separate code for the CT guidance — guidance is never bundled into the biopsy code.",
    },
    tips: [
      "Depth and technique together decide the exact code — missing either variable gets the wrong answer.",
    ],
  },
  {
    n: 7,
    title: "Injections & Arthrocentesis",
    codes: "20526–20612 (trigger points, tendon sheaths, joint/bursa injections)",
    categories: [
      {
        title: "Trigger points & dry needling, by muscle count",
        codes: [
          { code: "20552", desc: "Injection(s); single or multiple trigger point(s), 1 or 2 muscles" },
          { code: "20553", desc: "Injection(s); single or multiple trigger point(s), 3 or more muscles" },
          { code: "20560", desc: "Needle insertion(s) without injection; 1 or 2 muscles" },
          { code: "20561", desc: "Needle insertion(s) without injection; 3 or more muscles" },
        ],
      },
      {
        title: "Tendon sheath / carpal tunnel injections",
        codes: [
          { code: "20526", desc: "Injection, therapeutic (e.g., local anesthetic, corticosteroid), carpal tunnel" },
          { code: "20550", desc: "Injection(s); single tendon sheath, or ligament, aponeurosis (e.g., plantar fascia)" },
          { code: "20551", desc: "Injection(s); single tendon origin/insertion" },
        ],
      },
      {
        title: "Arthrocentesis / aspiration / injection, by joint size",
        codes: [
          { code: "20600", desc: "Small joint or bursa (e.g., fingers, toes); without ultrasound guidance" },
          { code: "20604", desc: "Small joint or bursa; with ultrasound guidance" },
          { code: "20605", desc: "Intermediate joint or bursa (e.g., wrist, elbow, ankle); without ultrasound guidance" },
          { code: "20606", desc: "Intermediate joint or bursa; with ultrasound guidance" },
          { code: "20610", desc: "Major joint or bursa (e.g., shoulder, hip, knee); without ultrasound guidance" },
          { code: "20611", desc: "Major joint or bursa; with ultrasound guidance" },
        ],
      },
    ],
    summary: [
      "Trigger point injections are counted by the number of MUSCLES involved (1–2 vs. 3 or more) — not the number of injection sites within a single muscle.",
      "There's a separate \"needle insertion WITHOUT injection\" code pair (dry needling) that's distinct from the trigger-point-WITH-injection codes — the two aren't interchangeable.",
      "Arthrocentesis/aspiration/injection codes are split by JOINT SIZE: small (fingers/toes), intermediate (wrist/elbow/ankle/TMJ/AC joint), or major (shoulder/hip/knee) — and each size has its own separate \"with ultrasound guidance\" code, not an add-on to the base code.",
      "When a dedicated \"with ultrasound guidance\" code applies, the general ultrasound-guidance code isn't separately added on top — the guidance is already built into that specific code choice.",
    ],
    steps: [
      "Step 1 — Is this a joint/bursa aspiration-injection, or a trigger point/tendon-sheath type injection? Different code families entirely.",
      "Step 2 — For joint injections: what size joint (small/intermediate/major)? Was ultrasound guidance used — if so, pick the matching \"with ultrasound\" code rather than adding a separate guidance code.",
      "Step 3 — For trigger points: was an actual therapeutic agent injected, or just needle insertion (dry needling)? And how many muscles were involved (1–2 vs. 3+)?",
    ],
    easy: {
      scenario: "An injection into the knee joint is performed without any imaging guidance.",
      answer: "The major-joint arthrocentesis/injection code, no-ultrasound version.",
    },
    hard: {
      scenario: "Dry needling (no injectate at all) is performed on 4 separate trigger point muscles.",
      answer: "The needle-insertion-without-injection code for 3 or more muscles — not the trigger-point-with-injection code, since no therapeutic agent was actually injected.",
    },
    cases: [
      {
        title: "Trigger Point Injection — 1 Muscle",
        scenario: "A 60-year-old female presents with a 3-month history of pain in the low left back above the posterior iliac crest. PE reveals no neurologic dysfunction, but does reveal a distinct trigger point in the multifidus muscle, left of the L5 spinous process. After identification of the trigger point, injectant solution is infiltrated in the multifidus muscle after aspiration is negative for blood. Post-procedure the injection area is cleansed and a bandage is applied to the site. How should this encounter be coded?",
        steps: [
          "A therapeutic agent (injectant solution) is actually injected — this is a trigger-point-WITH-injection case, not dry needling.",
          "Only ONE muscle is involved (the multifidus) — per this topic's own code table, that's the 1–2-muscle tier.",
        ],
        answer: "20552 — Injection(s), single or multiple trigger point(s), 1 or 2 muscles.",
      },
      {
        title: "Trigger Point Injection — 3 Muscles",
        scenario: "A 40-year-old male presents with chronic neck and right upper back pain resulting from degenerative disk disease and myofascial pain syndrome. Patient already completed a trial of PT and NSAID therapy without relief of his pain. PE reveals distinct trigger points in the left multifidus muscle, left trapezius muscle, and the right levator scapular muscle. He presents for injection of the trigger points, which was accomplished without any complications. What is/are the appropriate CPT code(s) to report?",
        steps: [
          "Three separate muscles are injected (multifidus, trapezius, levator scapulae) — per this topic's own code table, 3 or more muscles is a single tier with its own single code.",
          "Per this topic's own rule summary, trigger point codes are counted by muscle and reported ONCE per session — not once per muscle and not once per injection site — so this is a single unit, not three.",
        ],
        answer: "20553 — Injection(s), single or multiple trigger point(s), 3 or more muscles, reported once for the session.",
      },
      {
        title: "Arthrocentesis, Small Joint, Ultrasound Guidance",
        scenario: "A 50-year-old patient presents with inflammation of the metacarpophalangeal joint and is treated with a steroid injection, utilizing ultrasound guidance.",
        steps: [
          "The metacarpophalangeal (MCP) joint is a finger joint — per this topic's own code table, that's the small-joint tier (fingers/toes).",
          "Ultrasound guidance was used, and small-joint injection has its own dedicated \"with ultrasound guidance\" code — so that code is selected directly, rather than adding a separate general ultrasound-guidance code on top.",
        ],
        answer: "20604 — Arthrocentesis/injection, small joint or bursa, with ultrasound guidance.",
      },
    ],
    tips: [
      "Counting muscles, not injection sites, is the recurring trap for trigger point codes.",
      "\"With ultrasound guidance\" joint injection codes are a separate code choice, not an add-on — and the general ultrasound-guidance code is never layered on top of either version.",
      "That \"never layered on top\" rule is specific to ULTRASOUND guidance, where 20604/20606/20611 already bundle it in. If the guidance used is FLUOROSCOPIC, CT, or MRI instead, there's no dedicated combined code — report the WITHOUT-ultrasound base code (20600/20605/20610) PLUS the matching separate imaging guidance code: 77002 (fluoroscopic), 77012 (CT), or 77021 (MRI).",
      "Bilateral/multiple-joint rule: aspirating or injecting a pair of OPPOSITE, symmetrical joints (e.g., both knees) is one unit of the code plus modifier 50. Aspirating or injecting two SEPARATE, non-symmetrical joints (e.g., left shoulder and right knee) is two units of the code, with modifier 59 appended to the second unit.",
    ],
  },
  {
    n: 8,
    title: "Skeletal Traction, Halo & External Fixation",
    codes: "20650–20697",
    categories: [
      {
        title: "Traction & halo application",
        codes: [
          { code: "20650", desc: "Insertion of wire or pin with application of skeletal traction, including removal" },
          { code: "20661", desc: "Application of cranial tongs, caliper, or stereotactic frame, including removal" },
          { code: "20662", desc: "Application of halo, including removal; cranial" },
          { code: "20663", desc: "Application of halo, including removal; pelvic" },
          { code: "20664", desc: "Application of halo, including removal; femoral" },
          { code: "20665", desc: "Removal of tongs or halo applied by another individual" },
        ],
      },
      {
        title: "External fixation",
        codes: [
          { code: "20690", desc: "Application of a uniplane (pins/wires in 1 plane), unilateral, external fixation system" },
          { code: "20692", desc: "Application of a multiplane (pins/wires in more than 1 plane), unilateral, external fixation system" },
          { code: "20693", desc: "Adjustment or revision of external fixation system requiring anesthesia" },
          { code: "20694", desc: "Removal, under anesthesia, of external fixation system" },
          { code: "20696", desc: "Multiplane external fixation with stereotactic computer-assisted adjustment (spatial frame), including imaging" },
        ],
      },
    ],
    summary: [
      "Skeletal traction (wire/pin insertion with traction applied) and halo/tong/caliper application are distinct procedures, each with the same removal logic as casting: self-removal is bundled, removal by someone who didn't apply it gets its own code.",
      "Halo application codes split by anchor site — cranial, pelvic, or femoral — plus a dedicated higher-pin-count code specifically for thin skull osteology (pediatric patients, hydrocephalus, osteogenesis imperfecta).",
      "External fixation splits into uniplanar (pins/wires in one plane) vs. multiplanar (pins/wires across multiple planes, connected with rings) — plus a further specialized code for a multiplanar system WITH stereotactic computer-assisted adjustment (a spatial frame), which bundles in its own imaging and adjustment-schedule work.",
      "Adjustment/revision of an external fixation system requiring anesthesia, and removal of one, are each their own separate codes from the original application.",
    ],
    steps: [
      "Step 1 — Is this traction, halo application, or external fixation?",
      "Step 2 — For external fixation: uniplanar or multiplanar? A basic frame, or a computer-assisted/stereotactic spatial frame?",
      "Step 3 — Is this the original application, or a later adjustment/revision (requiring anesthesia) or removal?",
    ],
    easy: {
      scenario: "A basic uniplanar external fixator is applied with pins in a single plane for a tibia fracture.",
      answer: "The uniplanar external fixation application code.",
    },
    hard: {
      scenario: "A multiplanar spatial frame with computer-assisted stereotactic adjustment is applied, including imaging and calculation of the adjustment schedule.",
      answer: "The dedicated computer-assisted multiplanar code — not the basic multiplanar code — since the stereotactic adjustment component is specifically what's being captured.",
    },
    tips: [
      "Uniplanar vs. multiplanar is about how many PLANES the pins/wires sit in, not how many pins there are in total.",
    ],
  },
  {
    n: 9,
    title: "Antibiotic / Drug-Delivery Device Placement",
    codes: "20700–20705 (add-on codes)",
    categories: [
      {
        title: "Placement, by anatomic space",
        codes: [
          { code: "20700", desc: "Manual preparation and insertion of drug-delivery device(s), deep (e.g., subfascial)" },
          { code: "20702", desc: "Manual preparation and insertion of drug-delivery device(s), intramedullary" },
          { code: "20704", desc: "Manual preparation and insertion of drug-delivery device(s), intra-articular" },
        ],
      },
      {
        title: "Removal, matching each placement code",
        codes: [
          { code: "20701", desc: "Removal of drug-delivery device(s), deep (subfascial)" },
          { code: "20703", desc: "Removal of drug-delivery device(s), intramedullary" },
          { code: "20705", desc: "Removal of drug-delivery device(s), intra-articular" },
        ],
      },
      {
        title: "Removal-only, no other primary procedure that day",
        codes: [
          { code: "20680", desc: "Removal of implant; deep (e.g., buried wire, pin, screw, metal band, nail, rod, or plate)" },
        ],
      },
    ],
    summary: [
      "These are all add-on codes for manually mixing an antibiotic (or other therapeutic agent) with a carrier and shaping it into a drug-delivery device (beads, nails, spacers) placed during an open procedure — used when infection is present, suspected, or anticipated.",
      "The location of the PRIMARY surgery decides which add-on applies: deep/subfascial space, intramedullary (inside the bone), or intra-articular (inside a joint) — each with its own matching removal add-on code.",
      "These add-ons can't be used with any primary code that already includes placement of a \"spacer\" in its own descriptor — that would double-report the same work.",
      "If removing the drug-delivery device is the ONLY procedure being performed that day (no other primary procedure), the general hardware-removal code applies instead of the add-on removal codes.",
      "A prefabricated (not manually prepared) drug-delivery device is never reported with this code family.",
    ],
    steps: [
      "Step 1 — Is a manually-prepared antibiotic/drug device actually being placed or removed during surgery for infection? A prefabricated device doesn't qualify for these codes.",
      "Step 2 — Where's the primary procedure happening — deep/subfascial, intramedullary, or intra-articular? That decides the add-on code family.",
      "Step 3 — Does the primary procedure's own descriptor already include a \"spacer\"? If so, don't add one of these codes on top.",
      "Step 4 — Is device removal the ONLY thing being done, with no other primary procedure attached that day? If so, use the general hardware-removal code instead of the add-on.",
    ],
    easy: {
      scenario: "During an open bone debridement for osteomyelitis, the surgeon also manually prepares and places antibiotic beads into the intramedullary space.",
      answer: "The debridement is primary; the intramedullary drug-delivery placement add-on is reported alongside it.",
    },
    hard: {
      scenario: "A patient returns months later solely to have a previously placed subfascial antibiotic bead device removed, with no other procedure performed that day.",
      answer: "The general deep-hardware-removal code — not the add-on removal code — since there's no primary procedure to attach it to this time.",
    },
    tips: [
      "These are always add-ons, never a standalone primary procedure — except the \"removal only, nothing else done\" scenario, which routes to the general hardware-removal code instead.",
    ],
  },
  {
    n: 10,
    title: "Bone Grafts & Replantation",
    codes: "20900–20939 (grafts), 20802–20838 (replantation)",
    categories: [
      {
        title: "General orthopedic grafts",
        codes: [
          { code: "20900", desc: "Bone graft, any donor area; minor or small" },
          { code: "20902", desc: "Bone graft, any donor area; major or large" },
          { code: "20910", desc: "Cartilage graft; costochondral" },
          { code: "20920", desc: "Fascia lata graft; by stripper" },
          { code: "20924", desc: "Tendon graft, from a distance (e.g., palmaris, toe extensor, plantaris)" },
        ],
      },
      {
        title: "Spine-specific graft add-ons",
        codes: [
          { code: "20930", desc: "Allograft, morselized, for spine surgery only" },
          { code: "20931", desc: "Allograft, structural, for spine surgery only" },
          { code: "20936", desc: "Autograft for spine surgery only; local" },
          { code: "20937", desc: "Autograft, morselized, through separate skin/fascial incision" },
          { code: "20938", desc: "Autograft, structural, through separate skin/fascial incision" },
        ],
      },
      {
        title: "Replantation, complete amputation by level",
        codes: [
          { code: "20802", desc: "Replantation, arm, complete amputation" },
          { code: "20805", desc: "Replantation, forearm, complete amputation" },
          { code: "20808", desc: "Replantation, hand, complete amputation" },
          { code: "20824", desc: "Replantation, thumb (carpometacarpal joint to MP joint), complete amputation" },
          { code: "20838", desc: "Replantation, foot, complete amputation" },
        ],
      },
    ],
    summary: [
      "General orthopedic bone/cartilage/fascia/tendon graft codes are for harvesting through a SEPARATE incision — modifier 62 (co-surgeon) is never appended to any graft code in this range.",
      "A separate, parallel set of graft add-on codes is reserved specifically for spine surgery (allograft morselized/structural, autograft local/morselized/structural, bone marrow aspiration for grafting) — distinct from the general orthopedic graft codes and only used alongside specific spine procedures.",
      "The allograft osteoarticular/intercalary codes bundle in the templating, cutting, placement, AND internal fixation of the graft all in one code, and are mutually exclusive with each other.",
      "Replantation codes for a COMPLETE amputation are organized strictly by level (arm, forearm, hand, digit, thumb, foot). For an INCOMPLETE amputation, or replantation of the lower extremity other than the foot, the individual repair components (bone, ligament, tendon, nerve, vessel) are coded instead, with modifier 51 or 59 — not a replantation code.",
    ],
    steps: [
      "Step 1 — General orthopedic graft (harvested for a non-spine procedure) or a spine-surgery-specific graft add-on? Different code families.",
      "Step 2 — If spine-specific: allograft or autograft? Morselized or structural? Each combination has its own add-on code.",
      "Step 3 — For replantation: is it a COMPLETE amputation at a defined level, or incomplete (or lower-extremity-other-than-foot)? Complete + defined level → dedicated replantation code. Otherwise → individual repair codes with modifier 51/59.",
    ],
    easy: {
      scenario: "A surgeon harvests iliac crest bone graft through a separate incision for a non-spine fracture repair.",
      answer: "The general \"major or large\" bone graft code, reported in addition to the primary fracture repair.",
    },
    hard: {
      scenario: "A completely amputated thumb (from the distal tip through the MP joint) is successfully replanted.",
      answer: "The specific complete-thumb-amputation replantation code — not the individual repair-component codes — since this is a complete amputation at a defined level.",
    },
    tips: [
      "Modifier 62 is a guaranteed wrong answer with any bone graft code in this range — it's explicitly excluded.",
      "\"Complete\" vs. \"incomplete\" amputation is the fork in the road for replantation coding — that distinction matters more than memorizing every level code.",
    ],
  },
  {
    n: 11,
    title: "Other Procedures",
    codes: "20950–20999",
    categories: [
      {
        title: "Bone-healing stimulation & tumor ablation",
        codes: [
          { code: "20974", desc: "Electrical stimulation to aid bone healing; noninvasive (nonoperative)" },
          { code: "20975", desc: "Electrical stimulation to aid bone healing; invasive (operative)" },
          { code: "20979", desc: "Low intensity ultrasound stimulation to aid bone healing, noninvasive" },
        ],
      },
      {
        title: "Navigation & unlisted",
        codes: [
          { code: "20985", desc: "Computer-assisted surgical navigational procedure for musculoskeletal procedures, image-less" },
          { code: "20999", desc: "Unlisted procedure, musculoskeletal system, general" },
        ],
      },
    ],
    summary: [
      "Electrical stimulation and low-intensity ultrasound stimulation to aid bone healing are each graded by whether they're invasive/operative or noninvasive.",
      "Bone tumor ablation (radiofrequency or cryoablation) is percutaneous, includes imaging guidance when performed, and covers adjacent soft tissue if the tumor extends into it — imaging guidance is never separately added on top.",
      "Computer-assisted surgical navigation for musculoskeletal procedures is an add-on code, but only for the image-LESS version — image-guided navigation using pre-op/intra-op imaging is an entirely separate code set.",
      "The unlisted procedure code for this general section is the catch-all when nothing else here fits.",
    ],
    steps: [
      "Step 1 — Bone-healing stimulation, tumor ablation, or navigation assistance?",
      "Step 2 — For stimulation: invasive/operative or noninvasive?",
      "Step 3 — For ablation: radiofrequency or cryoablation, and is imaging guidance already included in that code (don't add it separately)?",
      "Step 4 — For navigation: image-less (this add-on code) or image-guided (a different code set entirely)?",
    ],
    easy: {
      scenario: "A noninvasive electrical stimulator is applied externally to promote healing of a slow-healing fracture.",
      answer: "The noninvasive electrical stimulation code.",
    },
    hard: {
      scenario: "Percutaneous cryoablation of a bone metastasis is performed with CT guidance.",
      answer: "The cryoablation code alone — CT guidance is already included in that code's descriptor and isn't separately reported.",
    },
    tips: [
      "\"Includes imaging guidance when performed\" in a code's own descriptor is your signal to stop looking for a separate guidance code — it's already there.",
    ],
  },
  {
    n: 12,
    title: "Arthroscopic Procedures",
    codes: "29870–29883 (knee arthroscopy)",
    categories: [
      {
        title: "Diagnostic vs. surgical arthroscopy",
        codes: [
          { code: "29870", desc: "Arthroscopy, knee, diagnostic, with or without synovial biopsy (separate procedure)" },
        ],
      },
      {
        title: "Meniscectomy (excision), by compartment involvement",
        codes: [
          { code: "29880", desc: "Arthroscopy, knee, surgical; with meniscectomy (medial AND lateral, including any meniscal shaving)" },
          { code: "29881", desc: "Arthroscopy, knee, surgical; with meniscectomy (medial OR lateral, including any debridement/shaving of articular cartilage [chondroplasty], same or separate compartment[s], when performed)" },
        ],
      },
      {
        title: "Meniscus repair (not excision)",
        codes: [
          { code: "29882", desc: "Arthroscopy, knee, surgical; with meniscus repair (medial OR lateral)" },
          { code: "29883", desc: "Arthroscopy, knee, surgical; with meniscus repair (medial AND lateral)" },
        ],
      },
      {
        title: "Chondroplasty/abrasion arthroplasty as the primary procedure",
        codes: [
          { code: "29879", desc: "Arthroscopy, knee, surgical; abrasion arthroplasty (includes chondroplasty where performed) or multiple drilling or microfracture" },
        ],
      },
    ],
    summary: [
      "Arthroscopy = examination of the interior of a joint with an arthroscope. Meniscectomy = excision of the intra-articular meniscus. Synovectomy = excision of the synovial membrane/lining of the joint capsule. Chondroplasty = repair of lacerated or displaced cartilage. Arthrodesis = fusion of the joint surfaces.",
      "The knee has 3 compartments — this is anatomy, not a billing code: Medial (\"inside\"), Lateral (\"outside\"), and Patellofemoral (\"behind the kneecap\"). The compartment tells you WHERE a meniscectomy, repair, or chondroplasty was done, which is what the code descriptors above are asking about.",
      "Diagnostic arthroscopy (29870) is a separate-procedure code — when a surgical arthroscopic procedure is also performed in the same joint at the same session, the diagnostic code is packaged into the surgical code and isn't reported alongside it.",
      "Meniscectomy codes split by how many compartments' menisci are excised: medial AND lateral together (29880) vs. medial OR lateral alone (29881). Meniscus REPAIR is a completely different pair of codes (29882/29883) from meniscus EXCISION (29880/29881) — read carefully for \"repair\" vs. \"meniscectomy/excision.\"",
      "29881's own descriptor already bundles meniscectomy (one side) together with debridement/shaving of articular cartilage (chondroplasty) performed in the SAME or a SEPARATE compartment, when performed — that's a feature of this specific code's own language, not a universal rule that any two arthroscopic procedures done in different compartments automatically collapse into one code.",
      "Trap: a meniscectomy plus a categorically DIFFERENT arthroscopic procedure in a separate compartment — for example, a ligament reconstruction — does NOT collapse into 29881. Only meniscectomy + chondroplasty is bundled by that code's descriptor; anything else (ligament work, synovectomy, etc.) still gets its own separate code.",
      "When chondroplasty/abrasion arthroplasty (or multiple drilling/microfracture) IS the primary procedure — not just incidental cleanup during a meniscectomy — it's reported with its own stand-alone code, 29879, instead of being folded into a meniscectomy code.",
    ],
    steps: [
      "Step 1 — Is this diagnostic-only arthroscopy, or is a surgical arthroscopic procedure also being performed in the same knee at the same session? If surgical work is done, the diagnostic code (29870) is packaged in — don't report both.",
      "Step 2 — Is a meniscectomy (excision) being performed? If so, one compartment (medial OR lateral → 29881) or both (medial AND lateral → 29880)?",
      "Step 3 — Is this actually a meniscus REPAIR rather than excision? One side (29882) or both (29883)?",
      "Step 4 — Is chondroplasty/abrasion arthroplasty the PRIMARY procedure, rather than incidental to a meniscectomy? If so, use 29879 instead of relying on 29881's built-in bundling.",
      "Step 5 — Is a second, categorically different arthroscopic procedure (e.g., ligament reconstruction, synovectomy) also being performed, possibly in a different compartment? Don't assume it collapses into one code just because 29881 bundles meniscectomy + chondroplasty — report it as its own separate code.",
    ],
    easy: {
      scenario: "A surgical knee arthroscopy is performed with meniscectomy of the medial meniscus only, including chondroplasty of that same compartment. No other procedure is performed.",
      answer: "29881 — meniscectomy, medial OR lateral, including chondroplasty in the same or a separate compartment when performed. Diagnostic arthroscopy isn't separately reported — it's packaged into the surgical code.",
    },
    hard: {
      scenario: "A patient undergoes knee arthroscopy with meniscectomy of the medial meniscus, and, in the lateral compartment, an arthroscopically aided anterior cruciate ligament reconstruction is also performed during the same operative session.",
      answer: "Both are reported: 29881 for the medial meniscectomy, plus 29888 (arthroscopically aided ACL repair/reconstruction, verified fresh against the CPT 2026 codebook since it isn't in this topic's own table) for the ligament work, with modifier 59 (or the more specific X{EPSU} modifier, such as XS for a separate structure) appended to the second code to show it's a distinct procedure at a different site, not a duplicate. The \"same or separate compartment\" bundling in 29881's own descriptor covers only meniscectomy plus chondroplasty — it doesn't extend to an entirely different procedure type like ligament reconstruction, so the two are not combined into a single code.",
    },
    tips: [
      "29870 (diagnostic knee arthroscopy) is a separate-procedure code — it's packaged into any surgical arthroscopy performed on the same knee in the same session, never reported alongside it.",
      "29881's built-in bundling of meniscectomy + chondroplasty across the same or a separate compartment is specific to THAT code's own descriptor — it is not a blanket \"one code per arthroscopic session\" rule. A second, different procedure in another compartment (ligament reconstruction, synovectomy) still gets its own code.",
      "Meniscectomy (excision) and meniscus repair are two different code families — don't default to the excision codes (29880/29881) just because \"meniscus\" is mentioned; read carefully for repair vs. removal.",
    ],
  },
];

const mainStyle = { maxWidth: "1160px", margin: "0 auto", padding: "36px 24px 64px", minHeight: "100vh", background: "#f5f7fa", color: "#161c26", fontFamily: "Arial, sans-serif" };
const heroStyle = { background: "linear-gradient(135deg, #0f172a, #2563eb)", color: "white", padding: "46px 42px", borderRadius: "18px", marginBottom: "26px", boxShadow: "0 12px 28px rgba(15,23,42,0.22)" };
const kickerStyle = { margin: "0 0 10px", color: "#bfdbfe", fontWeight: 800, letterSpacing: "0.08em" };
const navStyle = { display: "flex", flexWrap: "wrap" as const, gap: "10px", marginBottom: "26px" };
const navLinkStyle = { textDecoration: "none", color: "#2563eb", background: "#ffffff", border: "1px solid #dbe3f0", borderRadius: "999px", padding: "10px 15px", fontWeight: 700, fontSize: "14px" };
const pagerStyle = { display: "flex", flexWrap: "wrap" as const, gap: "10px", marginBottom: "26px" };
const pagerLinkStyle = { textDecoration: "none", color: "#2563eb", background: "#eff6ff", border: "1px solid #bfdbfe", borderRadius: "999px", padding: "8px 16px", fontWeight: 700, fontSize: "14px" };
const pagerActiveStyle = { ...pagerLinkStyle, background: "#2563eb", color: "#fff", border: "1px solid #2563eb" };
const introStyle = { background: "#eff6ff", border: "1px solid #bfdbfe", borderLeft: "7px solid #2563eb", borderRadius: "12px", padding: "22px 24px", marginBottom: "24px", lineHeight: 1.7 };
const sectionStyle = { background: "#ffffff", border: "1px solid #e2e7f0", borderRadius: "14px", padding: "24px 26px", marginBottom: "20px", boxShadow: "0 5px 16px rgba(15,23,42,0.05)" };
const sectionHeaderStyle = { display: "flex", alignItems: "center", gap: "12px", marginBottom: "6px", flexWrap: "wrap" as const };
const numberBadgeStyle = { background: "#2563eb", color: "#fff", width: "34px", height: "34px", minWidth: "34px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: "14px" };
const sectionTitleStyle = { margin: 0, fontSize: "21px", color: "#111827" };
const codeChipStyle = { background: "#eff6ff", border: "1px solid #bfdbfe", color: "#2563eb", borderRadius: "999px", padding: "4px 12px", fontWeight: 800, fontSize: "12.5px", fontFamily: "Consolas, monospace" };
const pStyle = { lineHeight: 1.75, margin: "0 0 8px", fontSize: "14.5px" };
const labelStyle = { margin: "16px 0 8px", fontWeight: 800, fontSize: "13px", letterSpacing: "0.03em", color: "#2563eb" };
const scenarioGridStyle = { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "14px", marginTop: "6px" };
const easyCardStyle = { background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "10px", padding: "14px 16px", lineHeight: 1.65, fontSize: "13.5px" };
const hardCardStyle = { background: "#fff7ed", border: "1px solid #fed7aa", borderRadius: "10px", padding: "14px 16px", lineHeight: 1.65, fontSize: "13.5px" };
const caseCardStyle = { background: "#f5f3ff", border: "1px solid #ddd6fe", borderRadius: "10px", padding: "14px 16px", lineHeight: 1.65, fontSize: "13.5px" };
const tipsBoxStyle = { background: "#fef2f2", border: "1px solid #fecaca", borderLeft: "5px solid #dc2626", borderRadius: "10px", padding: "14px 16px", marginTop: "14px", lineHeight: 1.65, fontSize: "13.5px" };
const stepsBoxStyle = { background: "#eff6ff", border: "1px solid #bfdbfe", borderLeft: "5px solid #2563eb", borderRadius: "10px", padding: "14px 16px", marginTop: "6px", marginBottom: "16px", lineHeight: 1.65, fontSize: "13.5px" };
const backLinkStyle = { textDecoration: "none", color: "#2563eb", fontWeight: 700 };
const categoryTitleStyle = { fontWeight: 800, fontSize: "13px", color: "#111827", margin: "10px 0 6px" };
const codeListStyle = { display: "flex", flexWrap: "wrap" as const, gap: "8px", marginBottom: "12px" };
const codeItemStyle = { background: "#f8fafc", border: "1px solid #e2e7f0", borderRadius: "8px", padding: "6px 10px", fontSize: "12.5px", lineHeight: 1.4, maxWidth: "320px" };
const codeNumStyle = { fontFamily: "Consolas, monospace", fontWeight: 800, color: "#2563eb", marginRight: "6px" };

export default function SurgeryTwentyThousandGuidelinesReviewerPage() {
  return (
    <main style={mainStyle}>
      <HighlightToolbar />
      <header style={heroStyle}>
        <p style={kickerStyle}>20,000 SERIES · MUSCULOSKELETAL SYSTEM</p>
        <h1 style={{ margin: 0, fontSize: "clamp(28px, 5.5vw, 48px)" }}>CPT Surgery Guidelines Reviewer</h1>
        <p style={{ margin: "12px 0 0", fontSize: "18px", lineHeight: 1.5 }}>Part 1 — General guidelines, fracture/dislocation definitions, tumor excision tiers, and the General subsection (20100–20999) — grouped by category, not code-by-code.</p>
      </header>

      <div style={pagerStyle}>
        <span style={pagerActiveStyle}>Part 1 (General, 20100–20999)</span>
        <Link href="/cpt/surgery/20000-series-guidelines-reviewer-part-2" style={pagerLinkStyle}>Part 2 (Head–Spine, 21010–22899)</Link>
        <Link href="/cpt/surgery/20000-series-guidelines-reviewer-part-3" style={pagerLinkStyle}>Part 3 (Abdomen–Wrist, 22900–25999) →</Link>
      </div>

      <nav aria-label="20,000 series navigation" style={navStyle}>
        <Link href="/cpt/surgery/20,000" style={navLinkStyle}>20,000 Series home</Link>
        <Link href="/cpt/surgery/20000-series-discussion-guide" style={navLinkStyle}>Discussion Guide</Link>
        <Link href="/cpt/surgery/20,000-series-study-tips" style={navLinkStyle}>Study Tips</Link>
        <Link href="/cpt/surgery" style={navLinkStyle}>Surgery home</Link>
      </nav>

      <section style={introStyle}>
        <Highlightable id="intro-1" as="span">
          <strong>How this complements the existing study tips page:</strong> the study tips page already covers fracture treatment basics, trigger points, and bone grafting in a fast-reference format. This page is built the same way as the ICD-10 chapter reviewers — a structured Topic → Rule Summary → Step-by-Step → Example → Traps format — and adds ground the study tips page doesn't cover yet: wound exploration, muscle/bone biopsy, external fixation, and antibiotic drug-delivery devices. Codes are grouped by category rather than listed individually, per your request. Written in original wording, not copied from the CPT text. Head through Spine now live in Part 2 — linked above.
        </Highlightable>
      </section>

      {topics.map((t) => (
        <section key={t.n} style={sectionStyle}>
          <div style={sectionHeaderStyle}>
            <span style={numberBadgeStyle}>{t.n}</span>
            <h2 style={sectionTitleStyle}>{t.title}</h2>
            <span style={codeChipStyle}>{t.codes}</span>
          </div>

          {t.categories && (
            <>
              <p style={labelStyle}>🗂️ KEY CODES BY CATEGORY</p>
              {t.categories.map((c, ci) => (
                <div key={c.title}>
                  <p style={categoryTitleStyle}>{c.title}</p>
                  <div style={codeListStyle}>
                    {c.codes.map((entry, ei) => (
                      <Highlightable key={entry.code} id={`t${t.n}-cat${ci}-code${ei}`} as="span" style={codeItemStyle}>
                        <span style={codeNumStyle}>{entry.code}</span>
                        {entry.desc}
                      </Highlightable>
                    ))}
                  </div>
                </div>
              ))}
            </>
          )}

          <p style={labelStyle}>📋 RULE SUMMARY</p>
          {t.summary.map((s, i) => (
            <p key={s} style={pStyle}>
              <Highlightable id={`t${t.n}-summary-${i}`} as="span">{s}</Highlightable>
            </p>
          ))}

          <p style={labelStyle}>🪜 STEP BY STEP — HOW TO CODE THIS</p>
          <div style={stepsBoxStyle}>
            <ol style={{ margin: 0, paddingLeft: "20px", display: "grid", gap: "8px" }}>
              {t.steps.map((step, i) => (
                <li key={step}>
                  <Highlightable id={`t${t.n}-step-${i}`} as="span">{step}</Highlightable>
                </li>
              ))}
            </ol>
          </div>

          <p style={labelStyle}>🎯 TWO EXAMPLE SCENARIOS</p>
          <div style={scenarioGridStyle}>
            <div style={easyCardStyle}>
              <strong>🟢 Easy:</strong> <Highlightable id={`t${t.n}-easy-scenario`} as="span">{t.easy.scenario}</Highlightable>
              <p style={{ margin: "8px 0 0" }}><strong>Answer:</strong> <Highlightable id={`t${t.n}-easy-answer`} as="span">{t.easy.answer}</Highlightable></p>
            </div>
            <div style={hardCardStyle}>
              <strong>🟠 Hard:</strong> <Highlightable id={`t${t.n}-hard-scenario`} as="span">{t.hard.scenario}</Highlightable>
              <p style={{ margin: "8px 0 0" }}><strong>Answer:</strong> <Highlightable id={`t${t.n}-hard-answer`} as="span">{t.hard.answer}</Highlightable></p>
            </div>
          </div>

          {t.cases && t.cases.length > 0 && (
            <>
              <p style={labelStyle}>🧩 DECK CASES — SOLVED STEP BY STEP</p>
              <div style={{ display: "grid", gap: "14px", marginTop: "6px", marginBottom: "6px" }}>
                {t.cases.map((c, ci) => (
                  <div key={c.title} style={caseCardStyle}>
                    <strong>🟣 DECK CASE — {c.title}</strong>
                    <p style={{ margin: "8px 0 0" }}>
                      <Highlightable id={`t${t.n}-case-${ci}-scenario`} as="span">{c.scenario}</Highlightable>
                    </p>
                    <ol style={{ margin: "10px 0 0", paddingLeft: "20px", display: "grid", gap: "6px" }}>
                      {c.steps.map((step, i) => (
                        <li key={step}>
                          <Highlightable id={`t${t.n}-case-${ci}-step-${i}`} as="span">{step}</Highlightable>
                        </li>
                      ))}
                    </ol>
                    <p style={{ margin: "10px 0 0" }}>
                      <strong>Answer:</strong> <Highlightable id={`t${t.n}-case-${ci}-answer`} as="span">{c.answer}</Highlightable>
                    </p>
                  </div>
                ))}
              </div>
            </>
          )}

          <div style={tipsBoxStyle}>
            <strong>🟥 Common Traps</strong>
            <ul style={{ margin: "8px 0 0", paddingLeft: "20px", display: "grid", gap: "6px" }}>
              {t.tips.map((tip, i) => (
                <li key={tip}>
                  <Highlightable id={`t${t.n}-tip-${i}`} as="span">{tip}</Highlightable>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}

      <div style={{ marginTop: "10px", display: "flex", gap: "16px", flexWrap: "wrap" as const }}>
        <Link href="/cpt/surgery/20000-series-guidelines-reviewer-part-2" style={backLinkStyle}>Continue to Part 2 (Head–Spine) →</Link>
        <Link href="/cpt/surgery/20,000" style={backLinkStyle}>← Back to 20,000 Series</Link>
      </div>
    </main>
  );
}
