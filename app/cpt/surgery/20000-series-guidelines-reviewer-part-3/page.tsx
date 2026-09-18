import Link from "next/link";

type Topic = {
  n: number;
  title: string;
  codes: string;
  summary: string[];
  steps: string[];
  easy: { scenario: string; answer: string };
  hard: { scenario: string; answer: string };
  tips: string[];
};

const topics: Topic[] = [
  {
    n: 1,
    title: "Abdomen — Soft Tissue Tumor Excision",
    codes: "22900–22999",
    summary: [
      "This is a short, self-contained family covering only soft tissue tumor excision of the abdominal wall — the same three-tier, size-based logic used everywhere else in the Musculoskeletal section: subcutaneous, subfascial (intramuscular), or radical resection.",
      "The abdominal-wall subfascial and subcutaneous excision codes are grouped together in the numbering, and radical resection is its own separate tier — always confirm depth and size independently rather than assuming one implies the other.",
      "There's a single unlisted-procedure code for anything in this subsection that doesn't fit an existing abdominal-wall musculoskeletal code.",
    ],
    steps: [
      "Step 1 — Confirm this is abdominal WALL soft tissue (musculoskeletal), not an intra-abdominal general-surgery procedure.",
      "Step 2 — Apply the tier: subcutaneous, subfascial, or radical resection.",
      "Step 3 — Measure diameter plus margin at the time of excision, the same rule used for every other body-region tumor family in this section.",
    ],
    easy: {
      scenario: "A 2 cm subcutaneous soft tissue tumor of the abdominal wall is excised.",
      answer: "The subcutaneous excision code, under-3 cm tier.",
    },
    hard: {
      scenario: "A 6 cm sarcoma of the abdominal wall is radically resected with wide margins.",
      answer: "The radical resection code, 5 cm-or-greater tier.",
    },
    tips: [
      "\"Abdomen\" in this section means the abdominal WALL only — it's a musculoskeletal soft-tissue family, not a general-surgery laparotomy code.",
    ],
  },
  {
    n: 2,
    title: "Shoulder — Incision, Excision & Introduction/Removal",
    codes: "23000–23350",
    summary: [
      "Removal of subdeltoid calcareous (calcium) deposits is open-only here — the arthroscopic version routes to the arthroscopy unlisted-procedure code instead.",
      "Incision and drainage of a shoulder abscess/hematoma vs. an infected bursa are two separate codes.",
      "Arthrotomy of the glenohumeral joint (exploration/drainage/foreign body) is distinct from arthrotomy of the acromioclavicular or sternoclavicular joint — always confirm which joint is documented.",
      "Biopsy and tumor excision follow the standard superficial/deep and subcutaneous/subfascial/radical tiers.",
      "Claviculectomy (partial vs. total) and acromioplasty/acromionectomy are separate excision procedures from bone cyst/tumor curettage of the clavicle, scapula, or proximal humerus.",
      "Removal of a shoulder prosthesis (humeral or glenoid component, or both) includes debridement and synovectomy when performed — and is NOT separately reported alongside the revision-arthroplasty codes when a prosthesis is removed and replaced in the same session; the revision code covers that combination instead.",
      "Injection for shoulder arthrography can support a plain radiographic study or an enhanced CT/MRI study — the specific imaging code paired with the injection differs accordingly.",
    ],
    steps: [
      "Step 1 — Which joint: glenohumeral, acromioclavicular, or sternoclavicular?",
      "Step 2 — For excision: biopsy, tumor (which tier), or bone-specific procedure (claviculectomy, acromioplasty, curettage)?",
      "Step 3 — For prosthesis removal: removal only, or removed AND replaced in the same session? If replaced, use the revision-arthroplasty code instead of a separate removal code.",
      "Step 4 — For arthrography injection: plain radiographic or enhanced CT/MRI study — pair with the matching imaging code.",
    ],
    easy: {
      scenario: "A patient has a subdeltoid calcium deposit removed via an open incision.",
      answer: "The open subdeltoid calcareous deposit removal code.",
    },
    hard: {
      scenario: "A patient has a failed total shoulder prosthesis removed and a new one implanted in the same operative session.",
      answer: "The revision-of-total-shoulder-arthroplasty code (humeral and glenoid component) — not a separate prosthesis-removal code, since removal and replacement happened together.",
    },
    tips: [
      "Removing a prosthesis alone vs. removing-and-replacing it in the same session route to two entirely different code families — don't default to the removal code if a new implant went in that same day.",
      "Arthroscopic subdeltoid decompression is not coded with the open removal code — that code is open-approach only.",
    ],
  },
  {
    n: 3,
    title: "Shoulder — Repair, Revision & Reconstruction",
    codes: "23395–23491",
    summary: [
      "Rotator cuff repair splits acute vs. chronic, and open repair is a different code from a full reconstruction of a complete chronic cuff avulsion, which bundles in acromioplasty.",
      "Capsulorrhaphy (surgical tightening of the joint capsule for instability) has several distinct variants: basic anterior (Putti-Platt/Magnuson type), anterior with labral repair (Bankart), anterior with bone block, anterior with coracoid process transfer, posterior, and multidirectional — each is its OWN separate code, not a modifier on a single base code.",
      "Shoulder arthroplasty splits hemiarthroplasty (humeral side only) vs. total shoulder (both glenoid and humeral components) — and revision of a total shoulder arthroplasty is coded by whether one component or both are revised.",
      "Muscle transfer of the shoulder/upper arm is a simple count-based split: single vs. multiple.",
      "Clavicle osteotomy is billed with or without internal fixation as the base code, with a separate code when bone grafting is added specifically for nonunion or malunion.",
    ],
    steps: [
      "Step 1 — Rotator cuff: repair (acute or chronic) or full reconstruction of a complete chronic avulsion?",
      "Step 2 — Capsulorrhaphy: anterior basic, anterior with labral repair (Bankart), anterior with bone block, anterior with coracoid transfer, posterior, or multidirectional?",
      "Step 3 — Arthroplasty: hemiarthroplasty or total shoulder? If revision, one component or both?",
      "Step 4 — Muscle transfer: single tendon or multiple?",
    ],
    easy: {
      scenario: "A chronic rotator cuff tear is repaired open, without a full reconstruction.",
      answer: "The chronic open rotator cuff repair code.",
    },
    hard: {
      scenario: "A patient with recurrent anterior shoulder instability undergoes anterior capsulorrhaphy specifically performed with a coracoid process transfer technique.",
      answer: "The anterior capsulorrhaphy-with-coracoid-process-transfer code specifically — not the basic Putti-Platt/Magnuson code or the bone-block code, since the coracoid-transfer variant was the documented technique.",
    },
    tips: [
      "Each capsulorrhaphy technique (Bankart, bone block, coracoid transfer, posterior, multidirectional) is its own separate code — these are not modifiers or add-ons to one base capsulorrhaphy code.",
      "Hemiarthroplasty vs. total shoulder arthroplasty hinges on whether the glenoid side is also replaced, not on injury severity.",
    ],
  },
  {
    n: 4,
    title: "Shoulder — Fracture/Dislocation, Manipulation, Arthrodesis & Amputation",
    codes: "23500–23929",
    summary: [
      "Clavicle fracture treatment is closed (without or with manipulation) or open with internal fixation — a simpler three-way split than most fracture families in this section.",
      "Sternoclavicular and acromioclavicular dislocations each have their own closed (without/with manipulation) and open (with or without fascial graft) code sets — they are different joints and are never interchangeable.",
      "Proximal humeral (surgical or anatomical neck) fracture treatment escalates from closed without manipulation, to closed with manipulation/traction, to open with internal fixation (includes tuberosity repair when performed), to open WITH prosthetic replacement.",
      "Shoulder dislocation treatment has a base closed/open pathway, PLUS entirely separate combination codes for when the dislocation occurs together with a greater tuberosity fracture or with a surgical/anatomical neck fracture — the combination codes are used instead of billing the dislocation and the fracture separately.",
      "Manipulation under anesthesia (dislocation excluded) is its own single code, distinct from manipulation performed as part of a fracture-reduction code.",
      "Shoulder arthrodesis (surgical fusion) is coded with or without autogenous bone graft; amputation covers interthoracoscapular (forequarter) amputation and shoulder disarticulation.",
    ],
    steps: [
      "Step 1 — Identify the injury: clavicle fracture, sternoclavicular/AC dislocation, proximal humeral fracture, or shoulder (glenohumeral) dislocation.",
      "Step 2 — For shoulder dislocation: isolated, or combined with a tuberosity fracture or a neck fracture? If combined, use the dedicated combination code, not two separate codes.",
      "Step 3 — For proximal humeral fracture: closed without manipulation → closed with manipulation → open with fixation → open with prosthetic replacement — pick the tier matching documentation.",
      "Step 4 — Confirm which joint for dislocation codes — sternoclavicular and acromioclavicular are not interchangeable.",
    ],
    easy: {
      scenario: "A clavicle fracture is treated closed with manipulation.",
      answer: "The closed clavicle fracture treatment code, with-manipulation tier.",
    },
    hard: {
      scenario: "A patient sustains a shoulder dislocation together with a fracture of the greater humeral tuberosity, treated by closed manipulation.",
      answer: "The dedicated \"closed treatment of shoulder dislocation with fracture of greater humeral tuberosity\" combination code — not the plain dislocation code plus a separate tuberosity-fracture code.",
    },
    tips: [
      "When a shoulder dislocation occurs together with a tuberosity or neck fracture, look for the specific combination code before defaulting to billing the dislocation and fracture separately — billing both is a common overcoding trap.",
      "Sternoclavicular and acromioclavicular dislocations are two entirely separate code sets — read carefully for which joint is named.",
    ],
  },
  {
    n: 5,
    title: "Humerus & Elbow — Incision, Excision & Introduction/Removal",
    codes: "23930–24220",
    summary: [
      "\"Elbow area\" in this subsection specifically includes the head and neck of the radius and the olecranon process — not just the true elbow joint itself.",
      "Arthrotomy of the elbow (exploration/drainage/foreign body) is distinct from arthrotomy WITH capsular excision for capsular release (contracture treatment) — a more involved procedure.",
      "Biopsy and tumor excision of the upper arm/elbow area follow the standard superficial/deep and subcutaneous/subfascial/radical tiers.",
      "Bone cyst/tumor curettage, sequestrectomy, and partial excision (for osteomyelitis) are each coded by SPECIFIC bone — humerus, radial head/neck, or olecranon process — and are not interchangeable even though all three sit in the same anatomic area.",
      "Removal of an elbow prosthesis follows the same logic as the shoulder: it includes debridement/synovectomy when performed, and is not separately billed alongside a revision code if removal and replacement happen in the same session.",
      "Radical resection of capsule/soft tissue/heterotopic bone with contracture release is a distinct, more extensive code than simple capsular release alone.",
    ],
    steps: [
      "Step 1 — Confirm the specific bone involved: humerus (shaft/distal), radial head/neck, or olecranon process — code selection is bone-specific.",
      "Step 2 — For arthrotomy: simple exploration/drainage, or does it include capsular excision for release?",
      "Step 3 — For prosthesis removal: alone, or removed-and-replaced in the same session (→ use the revision code instead)?",
      "Step 4 — For contracture: simple capsular release, or radical resection of capsule/soft tissue/heterotopic bone?",
    ],
    easy: {
      scenario: "A superficial biopsy of soft tissue in the upper arm is performed.",
      answer: "The superficial soft-tissue biopsy code for the upper arm/elbow area.",
    },
    hard: {
      scenario: "A patient has heterotopic bone, capsule, and soft tissue radically resected from the elbow specifically to release a contracture.",
      answer: "The radical resection of capsule/soft tissue/heterotopic bone with contracture-release code — not the simple capsular-excision-for-release code, since this is the more extensive radical version.",
    },
    tips: [
      "Bone cyst/tumor and osteomyelitis-related excision codes in this area are bone-specific (humerus vs. radial head/neck vs. olecranon) — always confirm which bone before coding.",
    ],
  },
  {
    n: 6,
    title: "Humerus & Elbow — Repair, Revision & Reconstruction",
    codes: "24300–24430",
    summary: [
      "Elbow ligament repair/reconstruction splits by side (lateral vs. medial collateral ligament) AND by whether it's a repair with local tissue or a full reconstruction with a tendon graft — four distinct codes result from these two variables.",
      "Epicondylitis (tennis elbow/golfer's elbow) treatment is tiered by invasiveness: percutaneous tenotomy, open debridement of soft tissue and/or bone, or open debridement WITH tendon repair/reattachment.",
      "Elbow arthroplasty has several distinct forms — with membrane (fascial) interposition, with distal humeral prosthetic replacement, with implant and fascia lata ligament reconstruction, or full distal-humerus-and-proximal-ulna replacement (total elbow) — plus separate revision codes (humeral or ulnar component, or both) mirroring the shoulder pattern.",
      "Radial head arthroplasty (with or without an implant) is its own separate, simpler code pair, distinct from the total elbow arthroplasty codes.",
      "Manipulation of the elbow under anesthesia is a single standalone code.",
    ],
    steps: [
      "Step 1 — Ligament repair: lateral or medial collateral? Local-tissue repair, or tendon-graft reconstruction?",
      "Step 2 — Epicondylitis treatment: percutaneous tenotomy, open debridement only, or open debridement with tendon repair/reattachment?",
      "Step 3 — Arthroplasty: which specific technique (membrane interposition, distal humeral replacement, implant with fascia lata reconstruction, or total elbow)? If revision, one component or both?",
      "Step 4 — Radial head: excision only, or arthroplasty (with or without implant)?",
    ],
    easy: {
      scenario: "A patient with lateral epicondylitis undergoes open debridement of soft tissue and bone, without any tendon repair.",
      answer: "The open debridement (lateral epicondylitis), soft tissue/bone, no-tendon-repair code.",
    },
    hard: {
      scenario: "A patient undergoes reconstruction of the medial collateral ligament of the elbow using a tendon graft harvested for the procedure.",
      answer: "The medial collateral ligament reconstruction-with-tendon-graft code — not the simpler medial collateral ligament repair-with-local-tissue code, since a graft was harvested and used.",
    },
    tips: [
      "Ligament repair (local tissue) and ligament reconstruction (tendon graft) are different codes even for the same ligament and side — check whether a graft was harvested.",
      "Total elbow arthroplasty replaces both the distal humerus AND proximal ulna — a code describing only \"distal humeral prosthetic replacement\" is a lesser procedure, not interchangeable with the total-elbow code.",
    ],
  },
  {
    n: 7,
    title: "Humerus & Elbow — Fracture/Dislocation, Arthrodesis & Amputation",
    codes: "24500–24999",
    summary: [
      "Humeral shaft fracture treatment escalates from closed without manipulation, to closed with manipulation/traction, to open with plate/screws, to treatment with an intramedullary implant — four distinct approaches.",
      "Supracondylar/transcondylar humeral fracture treatment is a SEPARATE family from humeral shaft fracture, further split by whether there's intercondylar extension, and by closed/percutaneous/open treatment.",
      "Humeral epicondylar fracture (medial or lateral) and humeral condylar fracture (medial or lateral) are each their own families — \"epicondylar\" and \"condylar\" are different fracture types with different code sets, despite the similar names.",
      "The Monteggia fracture-dislocation (proximal ulna fracture with radial head dislocation) has its own dedicated closed and open treatment codes — it is NOT coded as a separate ulna-fracture code plus a separate radial-head-dislocation code.",
      "Radial head/neck fracture treatment includes a distinct option for treatment WITH prosthetic replacement of the radial head, separate from simple internal fixation or excision.",
      "Elbow dislocation (isolated) has its own closed/open codes, distinct from the Monteggia combination code and from nursemaid's elbow (radial head subluxation in a child), which has its own single reduction code.",
      "Elbow arthrodesis is coded with or without autogenous graft; amputation of the arm through the humerus escalates from primary closure to open/circular (guillotine) to implant-assisted, plus separate codes for stump elongation and cineplasty.",
    ],
    steps: [
      "Step 1 — Identify the fracture: humeral shaft, supracondylar/transcondylar (check for intercondylar extension), epicondylar, condylar, radial head/neck, or ulnar proximal end.",
      "Step 2 — Is this an isolated fracture, or a Monteggia-pattern fracture-dislocation? If Monteggia, use its dedicated combination code, not two separate codes.",
      "Step 3 — For elbow dislocation: isolated, or associated with a specific fracture pattern requiring a combination code?",
      "Step 4 — For radial head fracture: internal fixation/excision, or prosthetic replacement?",
    ],
    easy: {
      scenario: "A humeral shaft fracture is treated with insertion of an intramedullary implant.",
      answer: "The intramedullary-implant humeral shaft fracture treatment code.",
    },
    hard: {
      scenario: "A patient has a proximal ulna fracture with an associated radial head dislocation, treated closed with manipulation.",
      answer: "The dedicated closed Monteggia fracture-dislocation code — not a separate ulna-fracture code plus a separate radial-head-dislocation code.",
    },
    tips: [
      "Monteggia fracture-dislocation is a named combination injury with its own dedicated codes — billing the ulna fracture and radial head dislocation separately is a common, incorrect shortcut.",
      "Epicondylar and condylar humeral fractures are different fracture types with entirely separate code families — the similar names are a deliberate exam trap.",
    ],
  },
  {
    n: 8,
    title: "Forearm & Wrist — Incision, Excision & Introduction/Removal",
    codes: "25000–25260",
    summary: [
      "Decompression fasciotomy of the forearm/wrist splits by compartment (flexor only, extensor only, or both) AND by whether debridement of nonviable muscle/nerve is also performed — these two variables combine into the code choice.",
      "Tendon sheath incision (de Quervain's) and flexor tendon sheath incision are each their own codes, distinct from carpal tunnel release (which is a Nervous System code, not Musculoskeletal).",
      "Biopsy and tumor excision of the forearm/wrist follow the standard tiers; ganglion excision at the wrist is its own dedicated code, split primary vs. recurrent.",
      "Bone cyst/tumor curettage of the radius/ulna (excluding the head/neck of radius and the olecranon, which route to the Elbow codes) vs. of the carpal bones are two separate code sets.",
      "Carpectomy (removal of a single carpal bone vs. the entire proximal row) and radial styloidectomy are distinct excision procedures from the bone cyst/curettage codes.",
      "Removal of a wrist prosthesis splits simple vs. complicated (including total wrist) — mirroring the pattern seen at the shoulder and elbow.",
    ],
    steps: [
      "Step 1 — For fasciotomy: which compartment(s) — flexor, extensor, or both — and is debridement of nonviable tissue also being done?",
      "Step 2 — For excision: biopsy, tumor (which tier), ganglion (primary or recurrent), or bone-specific curettage (radius/ulna vs. carpal bones)?",
      "Step 3 — Confirm the head/neck of the radius and the olecranon process route to the Elbow codes, not the Forearm/Wrist codes.",
      "Step 4 — For prosthesis removal: simple or complicated/total wrist?",
    ],
    easy: {
      scenario: "A dorsal wrist ganglion is excised for the first time in this patient.",
      answer: "The primary wrist ganglion excision code.",
    },
    hard: {
      scenario: "A decompression fasciotomy is performed on both the flexor AND extensor compartments of the forearm, including debridement of nonviable muscle.",
      answer: "The combined flexor-AND-extensor fasciotomy-with-debridement code — not two separate single-compartment codes, and not the without-debridement version.",
    },
    tips: [
      "The head/neck of the radius and the olecranon process are anatomically grouped with the \"elbow area\" for coding purposes, even though they sit near the forearm — don't route those bone lesions to the Forearm/Wrist excision codes.",
    ],
  },
  {
    n: 9,
    title: "Forearm & Wrist — Repair, Revision & Reconstruction",
    codes: "25263–25492",
    summary: [
      "Flexor and extensor tendon/muscle repair at the forearm/wrist each split into primary, secondary, and secondary-with-free-graft — a three-tier escalation repeated for both the flexor and extensor groups.",
      "Wrist arthroplasty (with or without interposition, with or without fixation) is a single code distinct from arthroplasty WITH PROSTHETIC REPLACEMENT, which is its own family split by the specific bone replaced: distal radius, distal ulna, scaphoid, lunate, trapezium, or the combined distal-radius-and-carpus total wrist.",
      "Osteotomy of the radius and/or ulna is coded by which bone(s) and which third of the bone (distal vs. middle/proximal for the radius) — plus a separate \"multiple osteotomies with intramedullary rod realignment\" (Sofield-type) code for radius, ulna, or both.",
      "Repair of nonunion/malunion follows a consistent pattern across this whole section: without graft vs. with autograft — repeated for radius alone, ulna alone, and radius-and-ulna together.",
      "Intercarpal/carpometacarpal joint arthroplasty (interposition vs. suspension technique) carries specific \"do not report together\" edits against the tendon-transfer codes used for the same purpose — the parenthetical exclusions matter here.",
    ],
    steps: [
      "Step 1 — Tendon repair: flexor or extensor group? Primary, secondary, or secondary-with-free-graft?",
      "Step 2 — Arthroplasty: basic (with/without interposition or fixation), or WITH prosthetic replacement of a specific bone (which one)?",
      "Step 3 — Osteotomy: radius, ulna, or both — and which portion of the bone?",
      "Step 4 — Nonunion/malunion repair: without graft, or with autograft — and which bone(s)?",
    ],
    easy: {
      scenario: "A primary repair of a single flexor tendon at the wrist is performed, no graft needed.",
      answer: "The primary flexor tendon repair code, single tendon.",
    },
    hard: {
      scenario: "A patient undergoes arthroplasty with prosthetic replacement of the scaphoid (navicular) carpal bone specifically.",
      answer: "The scaphoid-specific prosthetic arthroplasty code — not the general wrist arthroplasty code or a different-bone prosthetic code.",
    },
    tips: [
      "\"Wrist arthroplasty\" (no prosthesis) and \"arthroplasty WITH prosthetic replacement\" of a specific carpal/radial/ulnar bone are entirely different code families — the presence and target of an implant changes everything.",
    ],
  },
  {
    n: 10,
    title: "Forearm & Wrist — Fracture/Dislocation, Arthrodesis & Amputation",
    codes: "25500–25999",
    summary: [
      "Radial shaft fracture treatment is closed (without/with manipulation) or open with internal fixation — and there are dedicated COMBINATION codes for when it occurs together with a distal radioulnar joint dislocation (Galeazzi fracture-dislocation), tiered by closed vs. open treatment of each component.",
      "Ulnar shaft fracture follows the same closed/open pattern independently, and radial-AND-ulnar shaft fractures together have their own separate combination codes, further split by whether one or both bones get open treatment.",
      "Distal radial fracture (Colles/Smith type) treatment already includes closed treatment of an associated ulnar styloid fracture when performed — a separate ulnar styloid code applies only when the styloid fracture is treated on its own, without a distal radius fracture.",
      "Distal radial INTRA-articular fracture treatment is tiered by fragment count — internal fixation of 2 fragments vs. 3-or-more fragments — a distinct axis from extra-articular fracture treatment.",
      "Carpal scaphoid (navicular) fracture has its own dedicated codes, separate from \"other carpal bone\" fracture codes, which specifically exclude the scaphoid.",
      "Wrist arthrodesis (complete vs. limited) each split by graft type (none, sliding graft, or iliac/other autograft); amputation of the forearm/wrist escalates from open circular (guillotine) to secondary closure/scar revision to re-amputation, plus a distinct Krukenberg procedure code.",
    ],
    steps: [
      "Step 1 — Identify the fracture: radial shaft, ulnar shaft, both together, distal radial (extra- or intra-articular), carpal scaphoid, or other carpal bone.",
      "Step 2 — Is there an associated distal radioulnar joint dislocation (Galeazzi pattern)? If so, use the dedicated combination code instead of two separate codes.",
      "Step 3 — For distal radial fracture: is an ulnar styloid fracture also present? If so, confirm it's already bundled into the distal radius code rather than billed separately.",
      "Step 4 — For intra-articular distal radial fracture: count fragments (2 vs. 3+) to pick the fixation tier.",
    ],
    easy: {
      scenario: "A closed radial shaft fracture is treated with manipulation, no associated dislocation.",
      answer: "The closed radial shaft fracture treatment code, with-manipulation tier.",
    },
    hard: {
      scenario: "A patient has a radial shaft fracture treated open with internal fixation, together with a distal radioulnar joint dislocation also treated open with internal fixation and triangular fibrocartilage repair.",
      answer: "The specific Galeazzi combination code for open treatment of both the radial shaft fracture AND the distal radioulnar joint dislocation (including TFCC repair) — not two separate codes.",
    },
    tips: [
      "Galeazzi (radius + DRUJ dislocation) and Monteggia (ulna + radial head dislocation, covered under Elbow) are two different named fracture-dislocation patterns with their own dedicated combination codes — don't mix them up or default to billing components separately.",
      "A distal radius fracture code already includes closed treatment of the ulnar styloid when performed — watch for a double-billing trap here.",
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

export default function SurgeryTwentyThousandGuidelinesReviewerPart3Page() {
  return (
    <main style={mainStyle}>
      <header style={heroStyle}>
        <p style={kickerStyle}>20,000 SERIES · MUSCULOSKELETAL SYSTEM</p>
        <h1 style={{ margin: 0, fontSize: "clamp(28px, 5.5vw, 48px)" }}>CPT Surgery Guidelines Reviewer</h1>
        <p style={{ margin: "12px 0 0", fontSize: "18px", lineHeight: 1.5 }}>Part 3 — Abdomen, Shoulder, Humerus &amp; Elbow, and Forearm &amp; Wrist (22900–25999): rotator cuff and capsulorrhaphy variants, elbow ligament and epicondylitis coding, Monteggia and Galeazzi fracture-dislocations, and wrist prosthetic arthroplasty, grouped by category.</p>
      </header>

      <div style={pagerStyle}>
        <Link href="/cpt/surgery/20000-series-guidelines-reviewer" style={pagerLinkStyle}>Part 1 (General, 20100–20999)</Link>
        <Link href="/cpt/surgery/20000-series-guidelines-reviewer-part-2" style={pagerLinkStyle}>Part 2 (Head–Spine, 21010–22899)</Link>
        <span style={pagerActiveStyle}>Part 3 (Abdomen–Wrist, 22900–25999)</span>
      </div>

      <nav aria-label="20,000 series navigation" style={navStyle}>
        <Link href="/cpt/surgery/20,000" style={navLinkStyle}>20,000 Series home</Link>
        <Link href="/cpt/surgery/20,000-series-study-tips" style={navLinkStyle}>Study Tips</Link>
        <Link href="/cpt/surgery" style={navLinkStyle}>Surgery home</Link>
      </nav>

      <section style={introStyle}>
        <strong>Part 3 of the 20,000 series reviewer:</strong> continuing from Part 2 (Head through Spine), this part covers the short Abdomen family plus the upper-extremity subsections through the wrist — Shoulder, Humerus &amp; Elbow, and Forearm &amp; Wrist. Same Topic → Rule Summary → Step-by-Step → Example → Traps format. The recurring theme across these subsections is that repair/reconstruction technique variants (capsulorrhaphy type, ligament repair vs. reconstruction, arthroplasty with or without prosthesis) and named fracture-dislocation combinations (Monteggia, Galeazzi) each get their own dedicated codes rather than modifiers on a base code. Codes are grouped by category rather than listed individually. Written in original wording, not copied from the CPT text.
      </section>

      {topics.map((t) => (
        <section key={t.n} style={sectionStyle}>
          <div style={sectionHeaderStyle}>
            <span style={numberBadgeStyle}>{t.n}</span>
            <h2 style={sectionTitleStyle}>{t.title}</h2>
            <span style={codeChipStyle}>{t.codes}</span>
          </div>

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
        <Link href="/cpt/surgery/20000-series-guidelines-reviewer-part-2" style={backLinkStyle}>← Back to Part 2</Link>
        <Link href="/cpt/surgery/20,000" style={backLinkStyle}>← Back to 20,000 Series</Link>
      </div>
    </main>
  );
}
