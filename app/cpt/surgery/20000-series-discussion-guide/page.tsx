import { DiscussionGuidePage, DGList, DGSteps, type DGTopic } from "../_digestive/discussion-guide";
import { SLATE } from "../_digestive/players";

const topics: DGTopic[] = [
  {
    n: 1,
    title: "Organization of the Musculoskeletal Chapter",
    range: "20100–29999",
    items: [
      {
        q: "Be able to identify the organization of the Chapter (e.g., 20K is General).",
        approach: "Don't memorize every code range at once — first learn the ORDER: one general-rules subsection, then anatomic regions running head to foot, then two subsections that cut across every body part.",
        answer: (
          <>
            <p style={{ margin: "0 0 8px" }}>The Musculoskeletal System chapter (20100–29999) opens with a <strong>General</strong> subsection of rules and codes that apply chapter-wide, then moves through the body from head to foot, and closes with two subsections that aren't tied to one body part at all:</p>
            <DGList
              items={[
                "20100–20999 — General (wound exploration, fracture/dislocation definitions, tumor excision, biopsy, injections/arthrocentesis, traction/external fixation, grafts, unlisted)",
                "21010–21899 — Head, Neck (soft tissues) & Thorax",
                "21920–21935 — Back & Flank",
                "22010–22899 — Spine (Vertebral Column)",
                "22900–22999 — Abdomen",
                "23000–23929 — Shoulder",
                "23930–24999 — Humerus (Upper Arm) & Elbow",
                "25000–25999 — Forearm & Wrist",
                "26010–26989 — Hand & Fingers",
                "26990–27299 — Pelvis & Hip Joint",
                "27301–27599 — Femur (Thigh) & Knee Joint",
                "27600–27899 — Leg (Tibia/Fibula) & Ankle Joint",
                "28001–28899 — Foot & Toes",
                "29000–29799 — Application of Casts and Strapping (any body part)",
                "29800–29999 — Endoscopy/Arthroscopy (any joint)",
              ]}
            />
            <p style={{ margin: "8px 0 0" }}>Within almost every anatomic-region subsection, codes are further grouped the same way: Incision → Excision → Introduction/Removal → Repair/Revision/Reconstruction → Fracture/Dislocation → (Manipulation/Arthrodesis where applicable) → Amputation → Other Procedures. Learning that internal order is what lets you jump straight to the right few pages instead of scanning the whole subsection.</p>
          </>
        ),
      },
    ],
  },
  {
    n: 2,
    title: "The Three Packaged (Bundled) Services",
    range: "General guidelines + CPT Surgical Package Definition",
    items: [
      {
        q: "Identify the three (3) packaged services with all MS services.",
        approach: "Two of the three come from the CPT-wide Surgical Package Definition that applies to every surgery code in the book; the third is a rule the Musculoskeletal System guidelines state specifically for this chapter. Together they're the three things you never bill separately on top of a definitive MS procedure code.",
        answer: (
          <DGList
            items={[
              <><strong>Application AND removal of the FIRST cast, splint, or traction device.</strong> The Musculoskeletal System guidelines state this explicitly: every code in this chapter already includes the first cast/splint/traction device used, when performed. Supplies can still be billed separately, and a cast removed by someone other than the applying physician gets its own removal code (29700–29710).</>,
              <><strong>Local anesthesia.</strong> Local infiltration, a metacarpal/metatarsal/digital block, or topical anesthesia used for the procedure — part of the general CPT Surgical Package Definition, which applies to MS procedures like every other surgery code.</>,
              <><strong>Normal, uncomplicated follow-up care.</strong> Typical postoperative care during the global period — again from the general Surgical Package Definition, reinforced throughout the MS chapter (e.g., a cast/splint is never treated as preoperative care, so modifier 56 never applies to it).</>,
            ]}
          />
        ),
      },
    ],
  },
  {
    n: 3,
    title: "Treatment of Fractures and Dislocations",
    range: "Conceptual — applies throughout the MS chapter",
    items: [
      {
        q: "a. Describe the three (3) types of fracture/dislocation treatments in the MS.",
        approach: "These three are about HOW the fracture/dislocation site was accessed, not how the injury itself looked on imaging — a closed (simple) fracture can still get open treatment.",
        answer: (
          <DGList
            items={[
              <><strong>Closed treatment</strong> — the site is never surgically opened or exposed to the outside; may be done with or without manipulation, and with or without traction.</>,
              <><strong>Percutaneous skeletal fixation</strong> — a middle ground: the fracture fragments themselves are not visualized, but fixation hardware (pins, screws) is placed across the fracture site, typically under imaging guidance.</>,
              <><strong>Open treatment</strong> — the site is surgically exposed for treatment, OR treated through the traumatic wound itself (or an extension of it), OR treated with an intramedullary nail or other internal fixation device placed through a surgical exposure remote from the fracture site — even without ever directly visualizing the fracture.</>,
            ]}
          />
        ),
      },
      {
        q: "b. What are the three (3) types of stabilization techniques used in MS?",
        approach: "The guidelines split stabilization into fixation vs. immobilization — then fixation itself splits into two forms, giving three techniques total.",
        answer: (
          <DGList
            items={[
              <><strong>Immobilization</strong> — a cast, splint, or strapping holds the reduced fracture/dislocation in place without any hardware.</>,
              <><strong>Internal fixation</strong> — pins, screws, plates, wires, or an intramedullary nail placed surgically to hold the fracture; this is what turns treatment into "open" treatment even if placed through a remote incision.</>,
              <><strong>External fixation</strong> — pins/wires that penetrate the bone(s), connected outside the body by clamps, bars, or rings (uniplanar or multiplanar); coded separately (20690/20692, etc.) only when not already built into the specific procedure code's own descriptor.</>,
            ]}
          />
        ),
      },
    ],
  },
  {
    n: 4,
    title: "Excision of Tumors in the MS System",
    range: "Conceptual — subcutaneous, subfascial, and radical-resection tumor families",
    items: [
      {
        q: "a. Code selection is based on what two (2) factors?",
        approach: "The guideline states this almost word for word for both the subcutaneous and subfascial tiers — just remember the one exception.",
        answer: (
          <>
            <p style={{ margin: "0 0 8px" }}>
              <strong>Location</strong> and <strong>size</strong> of the tumor. Size is determined by measuring the greatest diameter of the tumor PLUS the margin required for complete excision (the narrowest margin needed, per the physician's judgment), measured at the time of excision.
            </p>
            <p style={{ margin: 0 }}><strong>Exception:</strong> radical resection of a BONE tumor is coded by location only — size and whether the tumor is benign or malignant don't factor into that one code family.</p>
          </>
        ),
      },
      {
        q: "b. What services, which may accompany excisions, are not part of the surgical package and are reported separately when performed?",
        approach: "The guideline text calls out three add-on scenarios by name — vessel work, nerve work, and a hard closure.",
        answer: (
          <DGList
            items={[
              "Appreciable vessel exploration.",
              "Neuroplasty.",
              "A complex repair needed to close the defect (from extensive undermining or other techniques after skin excision) — or, for radical bone tumor resection specifically, complex bone repair/reconstruction such as an adjacent tissue transfer or flap.",
            ]}
          />
        ),
      },
    ],
  },
  {
    n: 5,
    title: "Application of Casts and Strapping",
    range: "29000–29799",
    items: [
      {
        q: "a. When are cast application(s) considered as packaged to definitive treatments?",
        approach: "This is the same bundling rule from Topic 2 — apply it narrowly to just the FIRST device.",
        answer: "The application AND removal of the FIRST cast, splint, or traction device used for a given definitive MS procedure is bundled into that procedure's code — it is never billed separately, no matter which 20000-series procedure code was used.",
      },
      {
        q: "b. What two (2) situations allow for the separate reporting of cast application(s)?",
        approach: "One situation is about the cast itself; the other is about who is applying it relative to who else is treating the fracture.",
        answer: (
          <DGList
            items={[
              <><strong>It's a SUBSEQUENT (replacement) cast, splint, or strapping</strong> — not the first device for that procedure. Codes 29000–29750 (and traction devices such as 20690/20692) may be reported separately, whether the replacement happens during or after the global period.</>,
              <><strong>It's applied as a stand-alone service, with no restorative/definitive fracture-dislocation treatment code being billed for that encounter</strong> — for example, a provider who splints an injury purely to stabilize/transport it and refers the patient elsewhere for the actual reduction and fixation. Since no fracture-treatment code is being reported to absorb the "first device" bundle, the cast/strap code itself becomes the billable service.</>,
            ]}
          />
        ),
      },
      {
        q: "c. When are cast application(s) allowed to be reported on its own?",
        approach: "This follows directly from 5b's second situation — say it as its own rule.",
        answer: "A cast/splint/strapping code (29000–29799) is reported on its own, as the complete service for the encounter, whenever it is NOT accompanying — and is not the first device bundled into — a fracture/dislocation treatment or other definitive MS procedure code. In practice: no other restorative procedure code is being billed alongside it that day.",
      },
    ],
  },
  {
    n: 6,
    title: "Arthrocentesis",
    range: "20600–20611",
    items: [
      {
        q: "a. How are arthrocentesis codes organized?",
        approach: "Two variables stack: how big the joint/bursa is, and whether ultrasound guidance (with permanent recording and reporting) was used.",
        answer: (
          <>
            <p style={{ margin: "0 0 8px" }}>By JOINT/BURSA SIZE, with a separate code for the "with ultrasound guidance" version of each size (not an add-on — a whole different code):</p>
            <DGList
              items={[
                "Small joint or bursa (fingers, toes)",
                "Intermediate joint or bursa (TMJ, acromioclavicular, wrist, elbow, ankle, olecranon bursa)",
                "Major joint or bursa (shoulder, hip, knee, subacromial bursa)",
              ]}
            />
          </>
        ),
        codes: [
          ["20600/20604", "Small joint — without/with ultrasound"],
          ["20605/20606", "Intermediate joint — without/with ultrasound"],
          ["20610/20611", "Major joint — without/with ultrasound"],
        ],
      },
      {
        q: "b. What is the reportable unit for arthrocentesis?",
        approach: "Read the code descriptor's opening phrase: \"insertion of needle into [size] joint or bursa.\"",
        answer: "The JOINT (or bursa) itself — one code per joint/bursa treated in the session, regardless of how many separate needle passes, aspirations, or injections were performed at that same joint.",
      },
      {
        q: "c. How many code(s) can be used to represent arthrocentesis? Enumerate the four (4) possible scenarios.",
        approach: "This isn't one fixed number — it depends on how many joints, what size(s), and whether guidance was used. Work through it joint by joint.",
        answer: (
          <>
            <DGSteps
              items={[
                <><strong>One joint, no ultrasound guidance</strong> — 1 code (the matching size's "without ultrasound" code, e.g., 20610 for a knee).</>,
                <><strong>One joint, with ultrasound guidance and permanent recording</strong> — 1 code, but the dedicated "with ultrasound" code for that size (e.g., 20611) — not the no-guidance code plus a separate guidance code.</>,
                <><strong>The same joint bilaterally</strong> (e.g., both knees) — still built from a single base code for that size, reported for both sides (e.g., with modifier 50 or laterality modifiers), since it's one size tier used twice.</>,
                <><strong>Multiple different joints of different sizes in the same session</strong> (e.g., a knee and a wrist) — more than one code, one per joint per its own size tier, each separately documented and modified (e.g., modifier 59) as appropriate.</>,
              ]}
            />
            <p style={{ margin: "8px 0 0", fontSize: "13px" }}>The code descriptors themselves only spell out scenarios 1 and 2 explicitly (size tier × with/without ultrasound); scenarios 3 and 4 follow from applying "one code per joint, per size" logic to a multi-joint or bilateral encounter.</p>
          </>
        ),
      },
    ],
  },
  {
    n: 7,
    title: "Endoscopy/Arthroscopy",
    range: "29800–29999",
    items: [
      {
        q: "a. When is diagnostic endoscopy/arthroscopy reported separately? NOT separately?",
        approach: "This is the same \"surgical always includes diagnostic\" rule used in every CPT endoscopy family — the deciding question is whether any THERAPEUTIC work also happened in that same joint, same session.",
        answer: (
          <>
            <p style={{ margin: "0 0 8px" }}><strong>NOT reported separately:</strong> when a surgical (therapeutic) arthroscopy is performed in the same joint during the same session — a surgical arthroscopy always includes the diagnostic look at the joint that came before it, so that diagnostic step is bundled into whichever surgical arthroscopy code is billed and is never billed as a separate diagnostic code.</p>
            <p style={{ margin: 0 }}><strong>Reported separately (i.e., billed on its own, using the dedicated diagnostic arthroscopy code):</strong> only when NO surgical/therapeutic arthroscopic procedure is performed in that same joint at that session — the scope was purely diagnostic (look, with or without synovial biopsy), with no therapeutic work done. Separately, when arthroscopy is performed together with an open arthrotomy, modifier 51 is added rather than reporting a diagnostic-arthroscopy code.</p>
          </>
        ),
      },
      {
        q: "b. In knee arthroscopies, codes 29880 and 29881 are combination codes capturing how many individual procedures?",
        approach: "Both codes are meniscectomy codes — the difference is whether one or both meniscus compartments were treated. Note: the knee-specific arthroscopy family (27301–27599 body region) isn't covered by this site's Guidelines Reviewer yet, so this answer was verified directly against the CPT 2026 codebook rather than an existing reviewer page.",
        answer: (
          <>
            <p style={{ margin: "0 0 8px" }}>Each code is a combination/bundle of the arthroscopic meniscectomy work done on ONE OR BOTH sides of the knee joint in the same session:</p>
            <DGList
              items={[
                <><strong>29880</strong> — captures TWO procedures: meniscectomy of BOTH the medial AND lateral meniscus (including any meniscal shaving), in the same knee, same session.</>,
                <><strong>29881</strong> — captures ONE procedure: meniscectomy of EITHER the medial OR the lateral meniscus (including any meniscal shaving) — only one compartment was treated.</>,
              ]}
            />
            <p style={{ margin: "8px 0 0" }}>Because 29880 already bundles both sides, it is never reported together with 29881 for the same knee/session — one code or the other, based on whether one or both compartments needed meniscectomy.</p>
          </>
        ),
        codes: [
          ["29880", "Arthroscopy, knee, surgical; with meniscectomy, medial AND lateral"],
          ["29881", "Arthroscopy, knee, surgical; with meniscectomy, medial OR lateral"],
        ],
      },
    ],
  },
];

export default function TwentyThousandDiscussionGuidePage() {
  return (
    <DiscussionGuidePage
      theme={SLATE}
      kicker="20,000 SERIES · DISCUSSION GUIDE"
      title="Musculoskeletal System Discussion Guide — Answered"
      blurb="Every question from the training discussion guide, answered step by step and checked against the CPT 2026 codebook and this series' Guidelines Reviewer."
      nav={[
        { href: "/cpt/surgery/20,000", label: "20,000 Series home" },
        { href: "/cpt/surgery/20000-series-guidelines-reviewer", label: "Reviewer Pt. 1" },
        { href: "/cpt/surgery/20000-series-guidelines-reviewer-part-2", label: "Pt. 2" },
        { href: "/cpt/surgery/20000-series-guidelines-reviewer-part-3", label: "Pt. 3" },
        { href: "/cpt/surgery/20000-series-post-work-quiz", label: "Post-Work Quiz" },
        { href: "/cpt/surgery/20,000-series-study-tips", label: "Study Tips" },
      ]}
      backHref="/cpt/surgery/20,000"
      backLabel="← Back to the 20,000 Series"
      topics={topics}
      approach={[
        "Read the question first and decide which subsection it belongs to — General (20100–20999) rules cover almost everything here except the last question.",
        "Answer from the CPT 2026 General guidelines by default; where the discussion guide asks for a count (\"three,\" \"two,\" \"four\") the answer lists exactly that many items so nothing gets missed on exam day.",
        "Check the code chips for the specific CPT codes tied to each answer, and follow the reviewer links for the fuller category-by-category walkthroughs.",
      ]}
      sourceNote="Answers are paraphrased from CPT 2026 and cross-checked against this series' Guidelines Reviewer Part 1 (General subsection, 20100–20999), which covers fracture/dislocation treatment, tumor excision, casts/strapping, and arthrocentesis in depth. The knee arthroscopy codes referenced in the Endoscopy/Arthroscopy topic (29880/29881) belong to the Femur & Knee Joint subsection (27301–27599), which is not yet built as a Guidelines Reviewer part on this site — that specific answer was verified directly against the CPT 2026 codebook instead of an existing reviewer page."
    />
  );
}
