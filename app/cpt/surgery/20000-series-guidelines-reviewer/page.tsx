import Link from "next/link";

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
    tips: [
      "Counting muscles, not injection sites, is the recurring trap for trigger point codes.",
      "\"With ultrasound guidance\" joint injection codes are a separate code choice, not an add-on — and the general ultrasound-guidance code is never layered on top of either version.",
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
        <Link href="/cpt/surgery/20,000-series-study-tips" style={navLinkStyle}>Study Tips</Link>
        <Link href="/cpt/surgery" style={navLinkStyle}>Surgery home</Link>
      </nav>

      <section style={introStyle}>
        <strong>How this complements the existing study tips page:</strong> the study tips page already covers fracture treatment basics, trigger points, and bone grafting in a fast-reference format. This page is built the same way as the ICD-10 chapter reviewers — a structured Topic → Rule Summary → Step-by-Step → Example → Traps format — and adds ground the study tips page doesn't cover yet: wound exploration, muscle/bone biopsy, external fixation, and antibiotic drug-delivery devices. Codes are grouped by category rather than listed individually, per your request. Written in original wording, not copied from the CPT text. Head through Spine now live in Part 2 — linked above.
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
              {t.categories.map((c) => (
                <div key={c.title}>
                  <p style={categoryTitleStyle}>{c.title}</p>
                  <div style={codeListStyle}>
                    {c.codes.map((entry) => (
                      <span key={entry.code} style={codeItemStyle}>
                        <span style={codeNumStyle}>{entry.code}</span>
                        {entry.desc}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </>
          )}

          <p style={labelStyle}>📋 RULE SUMMARY</p>
          {t.summary.map((s) => <p key={s} style={pStyle}>{s}</p>)}

          <p style={labelStyle}>🪜 STEP BY STEP — HOW TO CODE THIS</p>
          <div style={stepsBoxStyle}>
            <ol style={{ margin: 0, paddingLeft: "20px", display: "grid", gap: "8px" }}>
              {t.steps.map((step) => <li key={step}>{step}</li>)}
            </ol>
          </div>

          <p style={labelStyle}>🎯 TWO EXAMPLE SCENARIOS</p>
          <div style={scenarioGridStyle}>
            <div style={easyCardStyle}>
              <strong>🟢 Easy:</strong> {t.easy.scenario}
              <p style={{ margin: "8px 0 0" }}><strong>Answer:</strong> {t.easy.answer}</p>
            </div>
            <div style={hardCardStyle}>
              <strong>🟠 Hard:</strong> {t.hard.scenario}
              <p style={{ margin: "8px 0 0" }}><strong>Answer:</strong> {t.hard.answer}</p>
            </div>
          </div>

          <div style={tipsBoxStyle}>
            <strong>🟥 Common Traps</strong>
            <ul style={{ margin: "8px 0 0", paddingLeft: "20px", display: "grid", gap: "6px" }}>
              {t.tips.map((tip) => <li key={tip}>{tip}</li>)}
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
