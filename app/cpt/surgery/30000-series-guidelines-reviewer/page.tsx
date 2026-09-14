import Link from "next/link";

type CodeEntry = [string, string];
type Category = { name: string; codes: CodeEntry[] };
type Subsection = {
  n: number;
  title: string;
  range: string;
  intro?: string;
  categories: Category[];
  rules: string[];
  tips: string[];
};

const subsections: Subsection[] = [
  {
    n: 1,
    title: "Nose",
    range: "30000–30999",
    categories: [
      {
        name: "Incision",
        codes: [
          ["30000", "Drainage of a nasal abscess or hematoma, internal approach"],
          ["30020", "Drainage of a nasal septal abscess or hematoma"],
        ],
      },
      {
        name: "Excision",
        codes: [
          ["30100", "Intranasal biopsy"],
          ["30110 / 30115", "Nasal polyp excision — simple (office-level) vs. extensive (hospital-level)"],
          ["30117 / 30118", "Excision/destruction of an intranasal lesion — internal approach vs. external approach (lateral rhinotomy)"],
          ["30120", "Excision or surgical planing of nasal skin for rhinophyma"],
          ["30124 / 30125", "Excision of a nasal dermoid cyst — simple (skin/subcutaneous) vs. complex (under bone or cartilage)"],
          ["30130 / 30140", "Inferior turbinate excision (partial or complete) vs. submucous resection of the inferior turbinate"],
          ["30150 / 30160", "Rhinectomy — partial vs. total"],
        ],
      },
      {
        name: "Introduction",
        codes: [
          ["30200", "Therapeutic turbinate injection"],
          ["30210", "Displacement therapy (Proetz type)"],
          ["30220", "Insertion of a nasal septal prosthesis (button)"],
        ],
      },
      {
        name: "Removal of Foreign Body",
        codes: [
          ["30300 / 30310 / 30320", "Intranasal foreign body removal — office procedure → requires general anesthesia → by lateral rhinotomy"],
        ],
      },
      {
        name: "Repair",
        codes: [
          ["30400–30420", "Primary rhinoplasty (tip elevation, complete external repair, and major septal repair variants)"],
          ["30430–30450", "Secondary rhinoplasty revisions — minor, intermediate, and major"],
          ["30460 / 30462", "Rhinoplasty for a cleft lip/palate nasal deformity — tip only vs. tip, septum, and osteotomies"],
          ["30465", "Repair of nasal vestibular stenosis (e.g., spreader grafting, lateral nasal wall reconstruction)"],
          ["30468", "Repair of nasal valve collapse with a subcutaneous/submucosal lateral wall implant"],
          ["30469", "Repair of nasal valve collapse with low-energy, temperature-controlled (radiofrequency) remodeling"],
          ["30520", "Septoplasty or submucous resection, with or without cartilage scoring/grafting"],
          ["30540 / 30545", "Choanal atresia repair — intranasal vs. transpalatine"],
          ["30560", "Lysis of intranasal synechia"],
          ["30580 / 30600", "Fistula repair — oromaxillary vs. oronasal"],
          ["30620", "Septal or other intranasal dermatoplasty (graft not included)"],
          ["30630", "Repair of a nasal septal perforation"],
        ],
      },
      {
        name: "Destruction",
        codes: [
          ["30801 / 30802", "Turbinate ablation (any method) — superficial vs. intramural (submucosal)"],
        ],
      },
      {
        name: "Other Procedures",
        codes: [
          ["30901 / 30903", "Anterior nosebleed control — simple vs. complex cautery/packing"],
          ["30905 / 30906", "Posterior nosebleed control — initial vs. subsequent"],
          ["30915 / 30920", "Artery ligation — ethmoidal vs. internal maxillary (transantral)"],
          ["30930", "Therapeutic fracture of the inferior turbinate(s)"],
          ["30999", "Unlisted procedure, nose"],
        ],
      },
    ],
    rules: [
      "Turbinate work has three distinct techniques that are never billed together on the same turbinate: excision/resection (30130/30140), ablation (30801/30802), and therapeutic fracture (30930).",
      "The superior and middle turbinates have no dedicated codes anywhere in this subsection — any procedure on them (excision, submucous resection, ablation, or fracture) routes to unlisted code 30999.",
      "30465, 30468, and 30469 are three separate nasal-valve repair techniques that are mutually exclusive on the same side — pick one per side. All three are written as bilateral procedures by default; append modifier 52 for a unilateral repair.",
      "Bilateral polyp excision (30110/30115) and bilateral nosebleed control (30901/30903) are reported with modifier 50, not as two separate line items.",
    ],
    tips: [
      "Simple polyp excision (30110) is an office-level procedure; extensive polyp excision (30115) implies a hospital-level facility — let the setting described in the question point you to the right code.",
      "Anytime a question mentions the superior or middle turbinate specifically (not inferior), your brain should jump straight to 30999.",
    ],
  },
  {
    n: 2,
    title: "Accessory Sinuses",
    range: "31000–31299",
    intro: "A surgical sinus endoscopy always includes a sinusotomy (when appropriate) plus a diagnostic endoscopy — those are never billed as separate add-ons to the surgical code. Codes 31233–31298 describe unilateral procedures unless stated otherwise.",
    categories: [
      {
        name: "Incision",
        codes: [
          ["31000 / 31002", "Lavage by cannulation — maxillary sinus vs. sphenoid sinus"],
          ["31020 / 31030 / 31032", "Maxillary sinusotomy (antrotomy) — intranasal vs. radical (Caldwell-Luc) without polyp removal vs. radical with antrochoanal polyp removal"],
          ["31040", "Pterygomaxillary fossa surgery, any approach"],
          ["31050 / 31051", "Sphenoid sinusotomy, with or without biopsy vs. with mucosal stripping/polyp removal"],
          ["31070–31087", "Frontal sinusotomy family — graded by approach (external trephine, transorbital, obliterative vs. nonobliterative) and incision site (brow vs. coronal)"],
          ["31090", "Unilateral sinusotomy of 3 or more paranasal sinuses in one session"],
        ],
      },
      {
        name: "Excision",
        codes: [
          ["31200 / 31201 / 31205", "Ethmoidectomy — intranasal anterior vs. intranasal total vs. extranasal total"],
          ["31225 / 31230", "Maxillectomy — without orbital exenteration vs. with orbital exenteration"],
        ],
      },
      {
        name: "Endoscopy — Diagnostic",
        codes: [
          ["31231", "Diagnostic nasal endoscopy (separate procedure)"],
          ["31233", "+ maxillary sinusoscopy (via inferior meatus or canine fossa puncture)"],
          ["31235", "+ sphenoid sinusoscopy"],
        ],
      },
      {
        name: "Endoscopy — Surgical",
        codes: [
          ["31237", "Surgical endoscopy with biopsy, polypectomy, or debridement (separate procedure) — the base surgical sinus endoscopy code"],
          ["31242 / 31243", "+ destruction of the posterior nasal nerve — radiofrequency ablation vs. cryoablation"],
          ["31238", "+ control of nasal hemorrhage"],
          ["31239", "+ dacryocystorhinostomy"],
          ["31240", "+ concha bullosa resection"],
          ["31241", "+ ligation of the sphenopalatine artery"],
          ["31254 / 31255", "+ ethmoidectomy, partial (anterior) vs. total (anterior and posterior)"],
          ["31253", "+ total ethmoidectomy including frontal sinus exploration, with tissue removal when performed"],
          ["31257 / 31259", "+ total ethmoidectomy including sphenoidotomy — without vs. with tissue removal from the sphenoid sinus"],
          ["31256 / 31267", "+ maxillary antrostomy vs. + maxillary antrostomy with removal of tissue from the maxillary sinus"],
          ["31276", "+ frontal sinus exploration, including tissue removal when performed"],
          ["31287 / 31288", "+ sphenoidotomy — without vs. with removal of tissue from the sphenoid sinus"],
          ["31290 / 31291", "+ repair of a CSF leak — ethmoid region vs. sphenoid region"],
          ["31292 / 31293", "+ orbital decompression — medial or inferior wall vs. medial and inferior wall"],
          ["31294", "+ optic nerve decompression"],
          ["31295 / 31296 / 31297 / 31298", "+ balloon dilation of the sinus ostium — maxillary vs. frontal vs. sphenoid vs. frontal and sphenoid together"],
        ],
      },
      {
        name: "Other Procedures",
        codes: [["31299", "Unlisted procedure, accessory sinuses"]],
      },
    ],
    rules: [
      "This is the single biggest bundling trap in the 30,000 series: nearly every surgical endoscopy add-on explicitly excludes being reported with several sibling codes when performed on the same side. Once the most extensive procedure for a given sinus/region is billed on one side, the lesser or diagnostic components for that same side are not separately reportable.",
      "The plain diagnostic codes (31231–31235) assume a full inspection of the nasal cavity, meatus, turbinates, and spheno-ethmoid recess in one pass — you don't report a separate code per structure examined. If the exam is incomplete (technically unable, altered anatomy, or not clinically indicated), append modifier 52 when no repeat is planned, or modifier 53 when a repeat exam is planned.",
      "31242/31243 (posterior nasal nerve ablation) are written as bilateral procedures by default — use modifier 52 for a unilateral procedure — and are not reported together with plain diagnostic endoscopy (31231) or nasal endoscopy for other purposes (92511).",
    ],
    tips: [
      "Before picking any endoscopy add-on code, ask: 'is this already included in a more extensive code I'm also billing on this side?' — the exclusion notes are dense, but they all follow this one logic.",
      "31237 (biopsy/polypectomy/debridement) is the workhorse code this whole family builds on — most of the more specific add-ons explicitly exclude being stacked with it on the same side.",
    ],
  },
  {
    n: 3,
    title: "Larynx",
    range: "31300–31599",
    intro: "Laryngoscopy examines the tongue base, larynx, and hypopharynx together. Midline single structures (tongue base, vallecula, epiglottis, subglottis, posterior pharyngeal wall) and paired structures (true/false vocal cords, arytenoids, ventricles, pyriform sinuses, aryepiglottic folds) are both covered in one pass — all paired structures on one side of the larynx/pharynx count as \"unilateral\" for reporting.",
    categories: [
      {
        name: "Excision",
        codes: [
          ["31300", "Laryngotomy (thyrotomy/laryngofissure) with tumor or laryngocele removal, cordectomy"],
          ["31360 / 31365", "Total laryngectomy — without vs. with radical neck dissection"],
          ["31367 / 31368", "Subtotal supraglottic laryngectomy — without vs. with radical neck dissection"],
          ["31370 / 31375 / 31380 / 31382", "Partial laryngectomy (hemilaryngectomy) — horizontal / laterovertical / anterovertical / antero-latero-vertical"],
          ["31390 / 31395", "Pharyngolaryngectomy with radical neck dissection — without vs. with reconstruction"],
          ["31400", "Arytenoidectomy or arytenoidopexy, external approach"],
          ["31420", "Epiglottidectomy"],
        ],
      },
      {
        name: "Introduction",
        codes: [
          ["31500", "Emergency endotracheal intubation"],
          ["31502", "Tracheotomy tube change before the fistula tract is established"],
        ],
      },
      {
        name: "Endoscopy — Indirect / Flexible",
        codes: [
          ["31505", "Indirect laryngoscopy, diagnostic (separate procedure)"],
          ["31510–31513", "Indirect laryngoscopy + biopsy / foreign body removal / lesion removal / vocal cord injection"],
          ["31575", "Flexible laryngoscopy, diagnostic"],
          ["31576–31578", "Flexible laryngoscopy + biopsy(ies) / foreign body removal / non-laser lesion removal"],
          ["31572–31574", "Flexible laryngoscopy + laser ablation (unilateral) / therapeutic injection (unilateral) / augmentation injection (unilateral)"],
          ["31579", "Flexible or rigid telescopic laryngoscopy with stroboscopy"],
        ],
      },
      {
        name: "Endoscopy — Direct, Operative",
        codes: [
          ["31515", "Direct laryngoscopy, with or without tracheoscopy, for aspiration"],
          ["31520 / 31525", "Direct diagnostic laryngoscopy — newborn vs. except newborn"],
          ["31526", "+ operating microscope or telescope"],
          ["31527–31529", "+ obturator insertion / initial dilation / subsequent dilation"],
          ["31530 / 31531", "Operative foreign body removal — without vs. with microscope/telescope"],
          ["31535 / 31536", "Operative biopsy — without vs. with microscope/telescope"],
          ["31540 / 31541", "Operative tumor excision or vocal cord stripping — without vs. with microscope/telescope"],
          ["31545 / 31546", "Operative submucosal removal of a non-neoplastic vocal cord lesion, with microscope/telescope — reconstruction with local flap vs. with graft"],
          ["31560 / 31561", "Operative arytenoidectomy — without vs. with microscope/telescope"],
          ["31570 / 31571", "Operative therapeutic vocal cord injection — without vs. with microscope/telescope"],
        ],
      },
      {
        name: "Repair",
        codes: [
          ["31580", "Laryngoplasty for a laryngeal web, with an indwelling keel or stent"],
          ["31551 / 31552", "Laryngoplasty for laryngeal stenosis, with graft, no indwelling stent — younger than 12 vs. 12 or older"],
          ["31553 / 31554", "Same, but with an indwelling stent — younger than 12 vs. 12 or older"],
          ["31584", "+ open reduction and fixation (plating) of a fracture, includes tracheostomy when performed"],
          ["31587", "Laryngoplasty, cricoid split, without graft placement"],
          ["31590", "Laryngeal reinnervation by neuromuscular pedicle"],
          ["31591", "Laryngoplasty, medialization, unilateral"],
          ["31592", "Cricotracheal resection"],
        ],
      },
      {
        name: "Other Procedures",
        codes: [["31599", "Unlisted procedure, larynx"]],
      },
    ],
    rules: [
      "The laryngeal stenosis/web repair family (31551, 31552, 31553, 31554, 31580) is mutually exclusive across all five codes — the correct choice depends on patient age (under vs. 12+), whether a stent is left in place, and whether it's a web (31580) vs. stenosis (31551–31554).",
      "When an operating microscope or telescope is used with a laryngoscopy code, that component is billed once per session, and add-on code 69990 is not reported separately alongside the microscope-inclusive laryngoscopy codes.",
      "The 3157x flexible-laryngoscopy add-ons (ablation, therapeutic injection, augmentation injection) are specified as unilateral — a bilateral procedure is reported by using the code twice or per the payer's bilateral convention, not assumed automatically.",
    ],
    tips: [
      "For the 31551–31554/31580 repair family, ask two questions in order: (1) web or stenosis? (2) stent left in place or not? — that narrows it to one code almost every time.",
      "Anywhere you see '...with operating microscope or telescope' as a separate code from its non-microscope sibling, that's your cue there are two codes for the same base procedure, split only by whether magnification was used.",
    ],
  },
  {
    n: 4,
    title: "Trachea and Bronchi",
    range: "31600–31899",
    intro: "Surgical bronchoscopy always includes a diagnostic bronchoscopy performed by the same physician — the two are never billed separately. Codes 31622–31651, 31660, and 31661 already include fluoroscopic guidance when it's used.",
    categories: [
      {
        name: "Incision",
        codes: [
          ["31600 / 31601", "Planned tracheostomy (separate procedure) — standard vs. younger than 2 years"],
          ["31603 / 31605", "Emergency tracheostomy — transtracheal vs. via the cricothyroid membrane"],
          ["31610", "Tracheostomy, fenestration procedure with skin flaps"],
          ["31611", "Construction of a tracheoesophageal fistula with insertion of an alaryngeal speech prosthesis"],
          ["31612", "Percutaneous tracheal puncture with transtracheal aspiration and/or injection"],
          ["31613 / 31614", "Tracheostoma revision — simple vs. complex (with flap rotation)"],
        ],
      },
      {
        name: "Endoscopy — Diagnostic Bronchoscopy Family",
        codes: [
          ["31615", "Tracheobronchoscopy through an established tracheostomy incision"],
          ["31622", "Diagnostic bronchoscopy with cell washing when performed (separate procedure) — the base bronchoscopy code"],
          ["31623 / 31624", "+ brushing/protected brushings vs. + bronchial alveolar lavage"],
          ["31625", "+ bronchial or endobronchial biopsy(s), single or multiple sites"],
          ["31626", "+ placement of fiducial marker(s)"],
          ["31627", "+ computer-assisted, image-guided navigation (add-on)"],
          ["31628 / 31632", "+ transbronchial lung biopsy, single lobe (billed once per lobe) / each additional lobe (add-on)"],
          ["31629 / 31633", "+ transbronchial needle aspiration biopsy, trachea/mainstem/lobar bronchus (billed once) / each additional lobe (add-on)"],
        ],
      },
      {
        name: "Endoscopy — Therapeutic Bronchoscopy",
        codes: [
          ["31630", "+ tracheal/bronchial dilation or closed reduction of a fracture"],
          ["31631", "+ placement of tracheal stent(s), includes dilation as required"],
          ["31634", "+ balloon occlusion with air-leak assessment and administration of an occlusive substance, if performed"],
          ["31635", "+ removal of a foreign body"],
          ["31636 / 31637", "+ bronchial stent placement, initial bronchus / each additional major bronchus stented (add-on)"],
          ["31638", "+ revision of a tracheal or bronchial stent placed at a prior session"],
          ["31640", "+ excision of a tumor"],
          ["31641", "+ destruction of a tumor or relief of stenosis by a non-excisional method (e.g., laser, cryotherapy)"],
          ["31643", "+ placement of catheter(s) for intracavitary radioelement application"],
          ["31645 / 31646", "+ therapeutic aspiration of the tracheobronchial tree — initial vs. subsequent, same hospital stay"],
          ["31647 / 31651", "+ bronchial valve insertion, initial lobe / each additional lobe (add-on)"],
          ["31648 / 31649", "+ bronchial valve removal, initial lobe / each additional lobe (add-on)"],
          ["31652 / 31653", "EBUS-guided sampling of mediastinal/hilar lymph node stations — 1–2 stations vs. 3 or more"],
          ["31654", "+ transendoscopic EBUS during a diagnostic/therapeutic intervention for a peripheral lesion (add-on)"],
        ],
      },
      {
        name: "Bronchial Thermoplasty",
        codes: [
          ["31660 / 31661", "Bronchoscopy with bronchial thermoplasty — 1 lobe vs. 2 or more lobes"],
        ],
      },
      {
        name: "Introduction",
        codes: [
          ["31717", "Catheterization with bronchial brush biopsy"],
          ["31720 / 31725", "Catheter aspiration (separate procedure) — nasotracheal vs. tracheobronchial with fiberscope, bedside"],
          ["31730", "Transtracheal (percutaneous) introduction of a needle wire dilator/stent or indwelling tube for oxygen therapy"],
        ],
      },
      {
        name: "Excision, Repair",
        codes: [
          ["31750 / 31755 / 31760", "Tracheoplasty — cervical / tracheopharyngeal fistulization, each stage / intrathoracic"],
          ["31766", "Carinal reconstruction"],
          ["31770 / 31775", "Bronchoplasty — graft repair vs. excision of stenosis with anastomosis"],
          ["31780 / 31781", "Excision of tracheal stenosis with anastomosis — cervical vs. cervicothoracic"],
          ["31785 / 31786", "Excision of a tracheal tumor or carcinoma — cervical vs. thoracic"],
          ["31800 / 31805", "Suture of a tracheal wound or injury — cervical vs. intrathoracic"],
          ["31820 / 31825", "Surgical closure of a tracheostomy or fistula — without vs. with plastic repair"],
          ["31830", "Revision of a tracheostomy scar"],
        ],
      },
      {
        name: "Other Procedures",
        codes: [["31899", "Unlisted procedure, trachea, bronchi"]],
      },
    ],
    rules: [
      "Same bundling logic as the sinus endoscopy family: most 316xx therapeutic bronchoscopy add-ons exclude being billed together with several sibling codes when performed on the same side or same lobe — check what the more extensive code already includes before stacking add-ons.",
      "31628 (transbronchial lung biopsy) and 31629 (transbronchial needle aspiration biopsy) are each billed once per lobe/site no matter how many individual biopsies are taken there — additional lobes go to the add-on codes 31632 and 31633, respectively, not repeated units of the base code.",
      "31652/31653 (EBUS-guided sampling) are complete, separately reportable services in their own right, while 31654 is only an add-on used alongside a separate diagnostic or therapeutic bronchoscopy code for a peripheral lesion — they answer different clinical questions (lymph node staging vs. peripheral lesion access).",
    ],
    tips: [
      "31622 is the anchor code for this whole family — nearly every other 316xx endoscopy code is described as an addition to it ('bronchoscopy... with...'), so learn 31622 first and treat the rest as modifiers on top of it.",
      "When a question mentions 'each additional lobe,' that's your flag to look for the matching add-on code (31632, 31633, 31651, or 31649) rather than reporting the base code twice.",
    ],
  },
];

const mainStyle = { maxWidth: "1120px", margin: "0 auto", padding: "36px 24px 64px", minHeight: "100vh", background: "#fdfaf5", color: "#241f17", fontFamily: "Arial, sans-serif" };
const heroStyle = { background: "linear-gradient(135deg, #1f2937, #0f766e)", color: "white", padding: "48px 44px", borderRadius: "18px", marginBottom: "26px", boxShadow: "0 12px 28px rgba(15,23,42,0.2)" };
const kickerStyle = { margin: "0 0 10px", color: "#99f6e4", fontWeight: 800, letterSpacing: "0.08em" };
const navStyle = { display: "flex", flexWrap: "wrap" as const, gap: "10px", marginBottom: "26px" };
const navLinkStyle = { textDecoration: "none", color: "#0f766e", background: "#ffffff", border: "1px solid #d7e2df", borderRadius: "999px", padding: "10px 15px", fontWeight: 700, fontSize: "14px" };
const introStyle = { background: "#fff7e8", border: "1px solid #efd39b", borderLeft: "7px solid #b7791f", borderRadius: "12px", padding: "22px 24px", marginBottom: "30px", lineHeight: 1.7 };
const sectionStyle = { background: "#ffffff", border: "1px solid #e5e1d6", borderRadius: "14px", padding: "26px 28px", marginBottom: "22px", boxShadow: "0 5px 16px rgba(15,23,42,0.06)" };
const sectionHeaderStyle = { display: "flex", alignItems: "center", gap: "14px", marginBottom: "8px", flexWrap: "wrap" as const };
const sectionNumberStyle = { background: "#0f766e", color: "#fff", width: "36px", height: "36px", minWidth: "36px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: "15px" };
const sectionTitleStyle = { margin: 0, fontSize: "23px", color: "#111827" };
const rangeChipStyle = { background: "#f0fdfa", border: "1px solid #99f6e4", color: "#0f766e", borderRadius: "999px", padding: "4px 12px", fontWeight: 800, fontSize: "13px", fontFamily: "Consolas, monospace" };
const pStyle = { lineHeight: 1.75, margin: "0 0 10px" };
const categoryTitleStyle = { margin: "18px 0 8px", fontSize: "16px", color: "#0f766e", fontWeight: 800 };
const codeListStyle = { listStyle: "none", padding: 0, margin: "0 0 4px", display: "grid", gap: "7px" };
const codeItemStyle = { display: "flex", gap: "12px", alignItems: "baseline", background: "#f9faf9", border: "1px solid #ece7db", borderRadius: "8px", padding: "8px 13px" };
const codeChipStyle = { fontWeight: 800, color: "#0f766e", minWidth: "120px", fontFamily: "Consolas, monospace", fontSize: "13.5px" };
const rulesBoxStyle = { background: "#fef2f2", border: "1px solid #fecaca", borderLeft: "5px solid #dc2626", borderRadius: "10px", padding: "16px 18px", margin: "18px 0 0", lineHeight: 1.7 };
const rulesTitleStyle = { margin: "0 0 8px", color: "#991b1b", fontWeight: 800, fontSize: "14px", letterSpacing: "0.03em" };
const tipsBoxStyle = { background: "#f0fdf4", border: "1px solid #bbf7d0", borderLeft: "5px solid #16a34a", borderRadius: "10px", padding: "16px 18px", margin: "14px 0 0", lineHeight: 1.7 };
const tipsTitleStyle = { margin: "0 0 8px", color: "#166534", fontWeight: 800, fontSize: "14px", letterSpacing: "0.03em" };
const backLinkStyle = { textDecoration: "none", color: "#0f766e", fontWeight: 700 };

export default function SurgeryThirtyThousandGuidelinesReviewerPage() {
  return (
    <main style={mainStyle}>
      <header style={heroStyle}>
        <p style={kickerStyle}>30,000 SERIES · RESPIRATORY SYSTEM</p>
        <h1 style={{ margin: 0, fontSize: "clamp(30px, 6vw, 52px)" }}>CPT Surgery Guidelines Reviewer</h1>
        <p style={{ margin: "12px 0 0", fontSize: "19px", lineHeight: 1.5 }}>Part 1 — Nose, Accessory Sinuses, Larynx, and Trachea &amp; Bronchi (30000–31899)</p>
      </header>

      <nav aria-label="30,000 series navigation" style={navStyle}>
        <Link href="/cpt/surgery/30,000" style={navLinkStyle}>30,000 Series home</Link>
        <Link href="/cpt/surgery" style={navLinkStyle}>Surgery home</Link>
        <Link href="/cpt" style={navLinkStyle}>CPT home</Link>
      </nav>

      <section style={introStyle}>
        <strong>How to use this reviewer:</strong> each subsection lists its code range, the codes grouped by category the way the book organizes them, a set of key coding rules (paraphrased closely for accuracy, not copied verbatim), and a couple of editable memory tips. Lungs &amp; Pleura (32035 onward) is still coming — send the rest whenever you&apos;re ready and I&apos;ll add it as Part 2.
      </section>

      {subsections.map((sub) => (
        <section key={sub.n} style={sectionStyle}>
          <div style={sectionHeaderStyle}>
            <span style={sectionNumberStyle}>{sub.n}</span>
            <h2 style={sectionTitleStyle}>{sub.title}</h2>
            <span style={rangeChipStyle}>{sub.range}</span>
          </div>
          {sub.intro && <p style={pStyle}>{sub.intro}</p>}

          {sub.categories.map((cat) => (
            <div key={cat.name}>
              <h3 style={categoryTitleStyle}>{cat.name}</h3>
              <ul style={codeListStyle}>
                {cat.codes.map(([code, desc]) => (
                  <li key={code} style={codeItemStyle}>
                    <code style={codeChipStyle}>{code}</code>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div style={rulesBoxStyle}>
            <p style={rulesTitleStyle}>🟥 KEY CODING RULES</p>
            <ul style={{ margin: 0, paddingLeft: "20px", display: "grid", gap: "8px" }}>
              {sub.rules.map((rule) => <li key={rule}>{rule}</li>)}
            </ul>
          </div>

          <div style={tipsBoxStyle}>
            <p style={tipsTitleStyle}>🧠 CODING TIPS</p>
            <ul style={{ margin: 0, paddingLeft: "20px", display: "grid", gap: "8px" }}>
              {sub.tips.map((tip) => <li key={tip}>{tip}</li>)}
            </ul>
          </div>
        </section>
      ))}

      <div style={{ marginTop: "30px", display: "flex", flexWrap: "wrap" as const, gap: "16px" }}>
        <Link href="/cpt/surgery/30,000" style={backLinkStyle}>← Back to 30,000 Series</Link>
        <Link href="/cpt/surgery" style={backLinkStyle}>← Back to Surgery</Link>
      </div>
    </main>
  );
}
