import { DiscussionGuidePage, DGList, DGSteps, type DGTopic } from "../_digestive/discussion-guide";
import { TEAL } from "../_digestive/players";

const topics: DGTopic[] = [
  {
    n: 1,
    title: "Organization of the Chapter",
    range: "30000–32999",
    items: [
      {
        q: "Be able to identify the organization of the Chapter (e.g., 30K is Nose).",
        approach: "Like every CPT chapter, Respiratory runs from the outside of the body inward, and from the top of the airway down to the bottom — learn the five anatomic subsections in that order before worrying about individual codes.",
        answer: (
          <>
            <p style={{ margin: "0 0 8px" }}>The Respiratory System chapter (30000–32999) is organized into five anatomic subsections, running from the nose down through the airway to the lungs:</p>
            <DGList
              items={[
                "30000–30999 — Nose",
                "31000–31299 — Accessory Sinuses",
                "31300–31599 — Larynx",
                "31600–31899 — Trachea and Bronchi",
                "32035–32999 — Lungs and Pleura",
              ]}
            />
            <p style={{ margin: "8px 0 0" }}>Within each subsection, codes are further grouped by procedure type — generally Incision → Excision/Destruction → Endoscopy → Introduction/Removal → Repair → Destruction → Other Procedures — though not every subsection uses every category. This site&apos;s Guidelines Reviewer splits the chapter the same way: <strong>Part 1</strong> covers Nose through Trachea &amp; Bronchi (30000–31899), and <strong>Part 2</strong> covers Lungs &amp; Pleura (32035–32999).</p>
          </>
        ),
      },
    ],
  },
  {
    n: 2,
    title: "Nasal Endoscopy",
    range: "31231–31235",
    lead: "Diagnostic nasal/sinus endoscopy sits at the top of the Accessory Sinuses subsection's Endoscopy category, and its rules set the pattern the rest of the chapter's endoscopy families follow.",
    items: [
      {
        q: "a. Enumerate the body parts required to have been scoped for you to report a \"full\" nasal endoscopy.",
        approach: "This is a codebook guideline note, not something you have to infer — it lists the structures by name.",
        answer: (
          <>
            <p style={{ margin: 0 }}>Per the CPT guideline note for codes 31231–31235, a full diagnostic nasal/sinus endoscopy means the endoscope was used to inspect all of the following:</p>
            <DGList
              items={[
                "The interior of the nasal cavity",
                "The middle meatus",
                "The superior meatus",
                "The turbinates",
                "The spheno-ethmoid recess",
              ]}
            />
          </>
        ),
        codes: [["31231", "Nasal endoscopy, diagnostic, unilateral or bilateral (separate procedure)"]],
      },
      {
        q: "b. If a \"full\" endoscopy was not performed, how is this reported?",
        approach: "31231 is already billed the same way whether one side or both sides were scoped (\"unilateral or bilateral\" is built into the descriptor) — the completeness question here is about STRUCTURES examined, not sides.",
        answer: "If the endoscope did not visualize all of the required structures (nasal cavity, middle and superior meatus, turbinates, and spheno-ethmoid recess), the exam is not \"full\" by the code's own definition — it's reported as a reduced service using modifier 52, the same way CPT handles any diagnostic endoscopy that stops short of its complete descriptor.",
      },
      {
        q: "c. What services are packaged with nasal endoscopies?",
        approach: "Look at the Endoscopy category's own guideline note, which states the bundling rule in one sentence.",
        answer: (
          <>
            <p style={{ margin: 0 }}>The guideline for this category states: <strong>&ldquo;A surgical sinus endoscopy includes a sinusotomy (when appropriate) and diagnostic endoscopy.&rdquo;</strong> In other words, whenever a surgical/therapeutic nasal or sinus endoscopy is performed (biopsy, polypectomy, debridement, dilation, etc.), the diagnostic look at the nasal cavity and sinuses — and the sinusotomy needed to access them, when it applies — is bundled into that surgical code and is never billed separately as 31231. On top of that, ordinary local/topical anesthesia and normal postoperative care are bundled under CPT&apos;s general Surgical Package Definition, same as any other procedure in the book.</p>
          </>
        ),
      },
    ],
  },
  {
    n: 3,
    title: "Laryngoscopy",
    range: "31505–31579",
    lead: "The Larynx subsection's Endoscopy family groups codes first by HOW the scope reaches the larynx (indirect vs. direct vs. flexible), then by what's done once it's there.",
    items: [
      {
        q: "a. Enumerate the 3 types of laryngoscopy and their code ranges.",
        approach: "The three types are named right in the first code of each block — indirect, direct, and flexible.",
        answer: (
          <DGList
            items={[
              <><strong>Indirect laryngoscopy</strong> (31505–31513) — a mirror-based diagnostic exam, the original \"separate procedure\" technique; also used for biopsy, foreign body removal, lesion removal, and vocal cord injection.</>,
              <><strong>Direct laryngoscopy</strong> (31515–31571) — a rigid scope passed directly into the larynx, with or without tracheoscopy; includes both diagnostic and a large family of operative variants (foreign body removal, biopsy, excision of tumor/vocal cord stripping, injection, and more — several performed with an operating microscope or telescope).</>,
              <><strong>Flexible laryngoscopy</strong> (31575–31579) — a fiberoptic scope, used for diagnostic exams and for removal of lesions.</>,
            ]}
          />
        ),
        codes: [
          ["31505", "Laryngoscopy, indirect; diagnostic (separate procedure)"],
          ["31515", "Laryngoscopy, direct, with or without tracheoscopy; for aspiration"],
          ["31575", "Laryngoscopy, flexible; diagnostic"],
        ],
      },
      {
        q: "b. Describe the body parts required to have been scoped for you to report a \"full\" laryngoscopy.",
        approach: "This mirrors the nasal endoscopy guideline note from Topic 2 — same idea, applied to the larynx's own set of structures, split into midline and paired groups.",
        answer: (
          <>
            <p style={{ margin: "0 0 10px" }}>The CPT guideline for this Endoscopy category states: &ldquo;Laryngoscopy includes examination of the tongue base, larynx, and hypopharynx. The anatomic structures examined with this procedure include both midline (single anatomic sites) and paired structures.&rdquo;</p>
            <DGList
              items={[
                <><strong>Midline (single) structures:</strong> tongue base, vallecula, epiglottis, subglottis, and posterior pharyngeal wall.</>,
                <><strong>Paired structures:</strong> true vocal cords, arytenoids, false vocal cords, ventricles, pyriform sinuses, and aryepiglottic folds.</>,
              ]}
            />
            <p style={{ margin: "10px 0 0", fontSize: "13.5px" }}>For therapeutic interventions specifically, all paired structures on ONE side of the larynx/pharynx are treated as unilateral. And if an operating microscope, telescope, or both are used, that add-on code is reported only once per operative session, no matter how many structures were treated with it.</p>
          </>
        ),
      },
      {
        q: "c. Failing to inspect the required body parts, how should the laryngoscopy be reported?",
        approach: "CPT doesn't spell out a laryngoscopy-specific modifier instruction the way it does for nasal endoscopy — apply the same general reduced-services logic instead.",
        answer: "The codebook does not state a laryngoscopy-specific modifier rule the way it does for nasal endoscopy (Topic 2b). By the same general CPT principle for any diagnostic endoscopy, if the tongue base, larynx, and hypopharynx — including their required midline and paired structures — are not fully examined, the exam is incomplete relative to the code's descriptor and should be reported with modifier 52 (reduced services) to reflect that.",
      },
    ],
  },
  {
    n: 4,
    title: "Bronchoscopy",
    range: "31615, 31622–31661",
    lead: "This is the topic that trips up the most students: three similarly-named procedures — tracheoscopy, tracheobronchoscopy, and bronchoscopy — are coded in three completely different places in the book.",
    items: [
      {
        q: "a. Differentiate the procedures below and identify their code ranges.",
        approach: "Read each name literally: tracheoscopy scopes only the trachea; tracheobronchoscopy scopes through an existing tracheostomy; bronchoscopy scopes the bronchi (and is its own large family with diagnostic + surgical variants).",
        answer: (
          <DGSteps
            items={[
              <><strong>i. Tracheoscopy</strong> — scoping the trachea alone is NOT a separate code family. CPT has an explicit cross-reference: &ldquo;For tracheoscopy, see laryngoscopy codes 31515–31574&rdquo; — it's captured under the direct laryngoscopy-with-tracheoscopy codes (Topic 3a), not under Trachea and Bronchi at all.</>,
              <><strong>ii. Tracheobronchoscopy</strong> — a single, specific code: <strong>31615</strong>, &ldquo;Tracheobronchoscopy through established tracheostomy incision.&rdquo; It's used only when the incision/stoma already exists (e.g., a patient with a tracheostomy) and the scope is passed through it to examine the trachea and bronchi.</>,
              <><strong>iii. Bronchoscopy</strong> — the large diagnostic-and-surgical family at <strong>31622–31661</strong>, covering everything from a plain diagnostic look to biopsy, EBUS sampling, foreign body/stent removal, tumor destruction, and more.</>,
            ]}
          />
        ),
        codes: [
          ["31515–31574", "Tracheoscopy — billed via the laryngoscopy-with-tracheoscopy family"],
          ["31615", "Tracheobronchoscopy through established tracheostomy incision"],
          ["31622–31661", "Bronchoscopy, diagnostic and surgical"],
        ],
      },
      {
        q: "b. What services are packaged with bronchoscopies?",
        approach: "This is the same \"surgical always includes diagnostic\" rule that runs through every CPT endoscopy family, plus a guidance note specific to this range.",
        answer: (
          <>
            <p style={{ margin: "0 0 8px" }}>A <strong>surgical bronchoscopy always includes a diagnostic bronchoscopy</strong> when performed by the same physician at the same session — the diagnostic inspection is never billed separately alongside a surgical bronchoscopy code (31622 itself is the stand-alone diagnostic code, used only when no surgical work is done).</p>
            <DGList
              items={[
                "Fluoroscopic guidance is bundled into most of the range (31622–31651, 31660, 31661) — it is not separately reportable.",
                "Endobronchial ultrasound (EBUS) sampling (31652/31653) IS separately reportable — it is not bundled into the base bronchoscopy code.",
                "31654 (ultrasound of a peripheral lesion) is an add-on code, listed separately in addition to the primary bronchoscopy procedure.",
              ]}
            />
          </>
        ),
      },
    ],
  },
  {
    n: 5,
    title: "Thoracoscopy (VATS)",
    range: "32601–32671",
    lead: "The Lungs & Pleura subsection's scope family works in two tiers: a diagnostic tier (with or without biopsy, by site), and a much larger surgical/therapeutic tier that bundles the diagnostic look into every procedure code.",
    items: [
      {
        q: "a. How are the VATS codes organized?",
        approach: "Split the range into diagnostic vs. surgical first, then notice the surgical tier is organized by WHAT was done (pleurodesis, decortication, wedge resection, lobectomy, pneumonectomy...), each as its own code, most as stand-alone procedures rather than add-ons.",
        answer: (
          <>
            <p style={{ margin: "0 0 8px" }}>Two tiers, both introduced by &ldquo;Thoracoscopy&rdquo; (the video-assisted approach, VATS):</p>
            <DGList
              items={[
                <><strong>Diagnostic thoracoscopy</strong> (32601–32609) — grouped by anatomic site and biopsy status: without biopsy (lungs, pericardial sac, mediastinal or pleural space); with biopsy of the pericardial sac; with biopsy of mediastinal or pleural space; with diagnostic biopsy of a lung infiltrate; with diagnostic biopsy of a lung nodule/mass; and with biopsy of the pleura.</>,
                <><strong>Surgical (therapeutic) thoracoscopy</strong> (32650–32671) — one code per specific therapeutic procedure, each already including the diagnostic look: pleurodesis, partial/total decortication, foreign body/fibrin removal, control of hemorrhage, excision-plication of bullae, parietal pleurectomy, pericardial-sac procedures, mediastinal cyst/tumor excision, thoracic sympathectomy, esophagomyotomy, therapeutic wedge resection (32666, plus add-on 32667 for each additional ipsilateral wedge), diagnostic-wedge-followed-by-anatomic-resection (32668, an add-on — the VATS mirror of 32507, see Topic 6), and the anatomic lung resections themselves: lobectomy (32663), segmentectomy (32669), bilobectomy (32670), and pneumonectomy (32671).</>,
              ]}
            />
          </>
        ),
        codes: [
          ["32601", "Thoracoscopy, diagnostic; lungs, pericardial sac, mediastinal or pleural space, without biopsy"],
          ["32663", "Thoracoscopy, surgical; with lobectomy (single lobe)"],
          ["32666/32667", "Surgical thoracoscopy with therapeutic wedge resection — initial / each additional ipsilateral"],
        ],
      },
      {
        q: "b. What services are packaged with diagnostic VATS?",
        approach: "Same bundling logic that runs through nasal endoscopy, laryngoscopy, and bronchoscopy — surgical includes diagnostic.",
        answer: "Surgical thoracoscopy (VATS) always includes diagnostic thoracoscopy of the same site performed at the same session — the diagnostic look is never billed separately (32601–32609) alongside a surgical/therapeutic thoracoscopy code. The stand-alone diagnostic codes are used only when the procedure is purely exploratory, with no therapeutic work performed.",
        codes: [["32601-32609", "Diagnostic-only codes — do not report with a surgical thoracoscopy code for the same site/session"]],
      },
    ],
  },
  {
    n: 6,
    title: "Procedures on the Lungs & Pleura",
    range: "32440–32507, 32666–32671",
    lead: "This is the densest topic in the series — the same six excision procedures can be done through two different approaches, and wedge resections carry their own three-scenario reporting logic tied to intraoperative pathology consults.",
    items: [
      {
        q: "a. What are the 6 different excision procedures performed on the lungs?",
        approach: "These run from smallest amount of lung removed to largest — a wedge is the least tissue, a pneumonectomy is an entire lung.",
        answer: (
          <DGList
            items={[
              <><strong>Wedge resection</strong> — a small, non-anatomic wedge of lung tissue (diagnostic or therapeutic).</>,
              <><strong>Segmentectomy</strong> — removal of a single anatomic lung segment.</>,
              <><strong>Lobectomy</strong> — removal of a single lobe.</>,
              <><strong>Bilobectomy</strong> — removal of two lobes.</>,
              <><strong>Pneumonectomy</strong> — removal of an entire lung.</>,
              <><strong>Completion pneumonectomy</strong> — removal of all remaining lung tissue following a previous, earlier removal of a portion of that same lung.</>,
            ]}
          />
        ),
      },
      {
        q: "b. What are the two different approaches to excision procedures on the lungs?",
        approach: "This is the same open-vs.-scope split as every other subsection in this chapter.",
        answer: (
          <DGList
            items={[
              <><strong>Thoracotomy (open)</strong> — the chest is surgically opened; coded in the 32440–32507 range.</>,
              <><strong>Thoracoscopy (VATS)</strong> — a video-assisted, scope-based approach; coded in the 32650–32671 surgical thoracoscopy range covered in Topic 5.</>,
            ]}
          />
        ),
      },
      {
        q: "c. Identify the codes for each \"procedure-approach\" pair.",
        approach: "Match each of the 6 procedures from part (a) against both approaches from part (b) — most have a clean open/VATS pair.",
        answer: (
          <DGList
            items={[
              "Wedge resection (therapeutic) — 32505 (open, initial) / 32506 (open, each additional ipsilateral) vs. 32666 (VATS, initial) / 32667 (VATS, each additional ipsilateral)",
              "Wedge resection (diagnostic, followed by anatomic resection) — 32507 (open, add-on) vs. 32668 (VATS, add-on)",
              "Segmentectomy — 32484 (open) vs. 32669 (VATS)",
              "Lobectomy (single lobe) — 32480 (open) vs. 32663 (VATS)",
              "Bilobectomy (2 lobes) — 32482 (open) vs. 32670 (VATS)",
              "Pneumonectomy — 32440 (open) vs. 32671 (VATS)",
              "Completion pneumonectomy — 32488 (open only; no VATS-specific completion pneumonectomy code)",
            ]}
          />
        ),
        codes: [
          ["32440", "Removal of lung, pneumonectomy"],
          ["32480", "Removal of lung, other than pneumonectomy; single lobe (lobectomy)"],
          ["32484", "...single segment (segmentectomy)"],
          ["32505/32506", "Thoracotomy; with therapeutic wedge resection — initial / each additional ipsilateral"],
          ["32507", "Thoracotomy; with diagnostic wedge resection followed by anatomic lung resection (add-on)"],
        ],
      },
      {
        q: "d. What is the difference between diagnostic and therapeutic wedge resections?",
        approach: "The difference is about WHY the wedge was taken and what happens right after — not about the size of the tissue removed.",
        answer: (
          <>
            <p style={{ margin: "0 0 8px" }}><strong>Therapeutic wedge resection</strong> (32505/32506 open, 32666/32667 VATS) — the wedge IS the definitive treatment. A mass or nodule is removed via the wedge and the procedure ends there; nothing more extensive follows in that session.</p>
            <p style={{ margin: 0 }}><strong>Diagnostic wedge resection</strong> (32507 open, 32668 VATS — both add-on codes) — the wedge is taken first to get tissue for an intraoperative pathology read, and based on that result the surgeon proceeds to a more extensive anatomic resection (segmentectomy, lobectomy, bilobectomy, or pneumonectomy) in the same session. The wedge itself is never billed alone in this scenario — it's reported as an add-on to whichever anatomic resection code was ultimately performed.</p>
          </>
        ),
      },
      {
        q: "e. During intraoperative pathology consultations, when is a wedge resection considered diagnostic and when is it considered therapeutic?",
        approach: "Ask: after the pathology result comes back, does the surgeon go on to remove more lung tissue in an anatomic resection, or does the case end with just the wedge?",
        answer: (
          <>
            <p style={{ margin: "0 0 8px" }}>It's <strong>diagnostic</strong> when the wedge is sent for an intraoperative (frozen-section) pathology consult specifically to guide the decision of whether a larger anatomic resection is needed — and the surgeon then goes on to perform that anatomic resection (segmentectomy, lobectomy, bilobectomy, or pneumonectomy) in the same operative session, based on the consult's findings.</p>
            <p style={{ margin: 0 }}>It's <strong>therapeutic</strong> when the wedge itself is the complete, intended treatment for the mass or nodule — whether or not a pathology consult is obtained on it — and no further anatomic lung resection follows in that session.</p>
          </>
        ),
      },
      {
        q: "f. What are the 3 different reporting scenarios for wedge resections?",
        approach: "Walk through the decision in order: is more than one wedge removed, is an anatomic resection performed after, or is the wedge the whole procedure?",
        answer: (
          <DGSteps
            items={[
              <><strong>Wedge resection only, therapeutic (the definitive procedure)</strong> — report the initial therapeutic wedge code alone: 32505 (open) or 32666 (VATS).</>,
              <><strong>Additional therapeutic wedge(s), same side, same session</strong> — report the add-on code for each additional ipsilateral wedge alongside the initial code: 32506 with 32505 (open), or 32667 with 32666 (VATS).</>,
              <><strong>Diagnostic wedge followed by anatomic lung resection, same session</strong> — report the anatomic resection code (e.g., lobectomy 32480/32663, segmentectomy 32484/32669, pneumonectomy 32440/32671) as the primary procedure, PLUS the diagnostic-wedge add-on code: 32507 (open) or 32668 (VATS).</>,
            ]}
          />
        ),
      },
      {
        q: "g. After intraoperative pathology consultations and the surgeon determines the need to extend the amount of lung tissue excised, what is reported?",
        approach: "This is scenario 3 from part (f) again, phrased from the opposite direction — the \"extension\" IS the anatomic resection that follows the diagnostic wedge.",
        answer: "When the intraoperative pathology consult on the initial wedge shows that more lung tissue needs to come out, the surgeon extends the excision into a full anatomic resection — and that extension is what gets reported as the primary procedure code (segmentectomy, lobectomy, bilobectomy, or pneumonectomy, open or VATS as appropriate), with the diagnostic wedge reported alongside it as the add-on code (32507 open / 32668 VATS). The wedge itself is not separately billed as 32505/32666 in this scenario — once it's followed by an anatomic resection, it converts to the diagnostic add-on pairing from scenario 3, not a stand-alone therapeutic wedge code.",
      },
    ],
  },
];

export default function ThirtyThousandDiscussionGuidePage() {
  return (
    <DiscussionGuidePage
      theme={TEAL}
      kicker="30,000 SERIES · DISCUSSION GUIDE"
      title="Respiratory System Discussion Guide — Answered"
      blurb="Every question from the training discussion guide, answered step by step and checked against the CPT 2026 codebook and this series' Guidelines Reviewer."
      nav={[
        { href: "/cpt/surgery/30,000", label: "30,000 Series home" },
        { href: "/cpt/surgery/30000-series-guidelines-reviewer", label: "Reviewer Pt. 1" },
        { href: "/cpt/surgery/30000-series-guidelines-reviewer-part-2", label: "Pt. 2" },
        { href: "/cpt/surgery/30000-series-beginner-guide", label: "Beginner Scenarios" },
        { href: "/cpt/surgery/30000-series-practice-quiz", label: "Practice Quiz" },
        { href: "/cpt/surgery/30000-series-flashcards", label: "Flashcards" },
      ]}
      backHref="/cpt/surgery/30,000"
      backLabel="← Back to the 30,000 Series"
      topics={topics}
      approach={[
        "Work through the topics in order — they follow the chapter head-to-toe (Nose → Larynx → Trachea/Bronchi → Lungs & Pleura), the same order as the Guidelines Reviewer's Part 1 and Part 2.",
        "Topics 2–5 all share one repeating pattern worth memorizing once: a \"full\"/complete exam requires specific named structures, an incomplete exam gets modifier 52, and a SURGICAL/therapeutic scope always bundles in the DIAGNOSTIC look at the same site and session.",
        "Topic 6 is the hardest material in the series — slow down on the wedge-resection logic (d–g) specifically. The short version: a therapeutic wedge stands alone; a diagnostic wedge is always an add-on to whatever anatomic resection follows it.",
        "Check the code chips under each answer for the specific CPT codes, and follow the reviewer links above for the fuller category-by-category walkthroughs and code tables.",
      ]}
      sourceNote="Answers are paraphrased from CPT 2026 and cross-checked against this series' Guidelines Reviewer (Part 1: Nose, Sinuses, Larynx, Trachea & Bronchi, 30000–31899; Part 2: Lungs & Pleura, 32035–32999). The accompanying screenshot-style slide deck for this series is image-based (not machine-readable text), so this guide's structure instead mirrors the existing Guidelines Reviewer's own two-part organization for consistency across the site."
    />
  );
}
