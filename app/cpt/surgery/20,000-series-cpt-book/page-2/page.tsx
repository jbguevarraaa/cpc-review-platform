import Link from "next/link";
import { Highlightable, HighlightToolbar } from "../../_digestive/highlighter";

const sections = [
  {
    title: "General Guidelines",
    paragraphs: [
      "The musculoskeletal section covers many categories, including arthroscopy, fracture treatment, dislocation treatment, tendon and ligament repair, arthroplasty, and a broad range of soft tissue excisions and biopsy procedures.",
      "When coding procedures involving the shoulder, elbow, wrist, hand, pelvis, hip, knee, leg, ankle, or foot, always determine the exact anatomy, the approach, and whether there was manipulation, fixation, or grafting.",
      "Any listed code that includes a graft, fixation, or instrumentation should be checked carefully before adding additional codes. Separate coding is allowed only when the code descriptor expressly allows it.",
    ],
  },
  {
    title: "Shoulder and Upper Extremity",
    paragraphs: [
      "The shoulder area includes the clavicle, scapula, humeral head and neck, sternoclavicular joint, acromioclavicular joint, and glenohumeral joint. Procedures include soft tissue excisions, arthrotomy, capsulorrhaphy, osteotomy, and arthroplasty.",
      "When a capsulorrhaphy or labral repair is reported, the descriptor must be reviewed to determine whether it is anterior, posterior, multidirectional, or associated with a bone block or coracoid transfer. These procedures frequently involve tendon or ligament repair and may require separate identification of the exact method used.",
    ],
  },
  {
    title: "Fracture and Dislocation Coding Reminder",
    paragraphs: [
      "Fracture/dislocation treatment coding is based on the treatment category, not on how the fracture is named. A closed fracture can still require open treatment. Percutaneous fixation is neither open nor closed. External fixation may be used with closed, percutaneous, or open treatment and is reported separately only when not already included in the code descriptor.",
      "Manipulation is the application of manually applied forces or traction to achieve alignment. Traction is a distracting force applied to a spine or limb, and the type of traction must be identified as skeletal or skin traction.",
    ],
  },
];

const codeEntries = [
  ["23000", "Arthrocentesis, shoulder joint or bursa; without ultrasound guidance", ""],
  ["23020", "Care of a fracture, clavicle, with or without manipulation; without anesthesia", ""],
  ["23030", "Care of a fracture, clavicle, with manipulation; with anesthesia", ""],
  ["23040", "Arthrotomy, glenohumeral joint, including exploration, drainage, or removal of foreign body", ""],
  ["23044", "Arthrotomy, acromioclavicular, sternoclavicular joint, including exploration, drainage, or removal of foreign body", ""],
  ["23075", "Excision, tumor, soft tissue of shoulder area, subcutaneous; less than 3 cm", ""],
  ["23076", "Excision, tumor, soft tissue of shoulder area, subfascial (eg, intramuscular); less than 5 cm", ""],
  ["23077", "Radical resection of tumor, soft tissue of shoulder area; less than 5 cm", ""],
  ["23078", "Radical resection of tumor, soft tissue of shoulder area; 5 cm or greater", ""],
  ["23100", "Arthrotomy, glenohumeral joint, including biopsy", ""],
  ["23101", "Arthrotomy, acromioclavicular or sternoclavicular joint, including biopsy and/or excision of torn cartilage", ""],
  ["23105", "Arthrotomy, glenohumeral joint, with synovectomy, with or without biopsy", ""],
  ["23106", "Arthrotomy, sternoclavicular joint, with synovectomy, with or without biopsy", ""],
  ["23107", "Arthrotomy, glenohumeral joint, with joint exploration, with or without removal of loose or foreign body", ""],
  ["23120", "Claviculectomy, partial", ""],
  ["23125", "Claviculectomy, total", ""],
  ["23130", "Acromioplasty or acromionectomy, partial, with or without coracoacromial ligament release", ""],
  ["23330", "Removal of foreign body, shoulder; subcutaneous", ""],
  ["23333", "Removal of foreign body, shoulder; deep (subfascial or intramuscular)", ""],
  ["23334", "Removal of prosthesis, humeral or glenoid component", ""],
  ["23335", "Removal of a humeral and glenoid component (eg, total shoulder prosthesis)", ""],
  ["23350", "Injection procedure for shoulder arthrography or enhanced CT/MRI shoulder arthrography", ""],
  ["23400", "Scapulopexy (eg, Sprengel deformity or for paralysis)", ""],
  ["23405", "Tenotomy, shoulder area; single tendon", ""],
  ["23406", "Tenotomy, shoulder area; multiple tendons through same incision", ""],
  ["23410", "Repair of ruptured musculotendinous cuff (rotator cuff), open; acute", ""],
  ["23412", "Repair of ruptured musculotendinous cuff (rotator cuff), open; chronic", ""],
  ["23415", "Coracoacromial ligament release, with or without acromioplasty", ""],
  ["23420", "Repair of ruptured musculotendinous cuff (rotator cuff), open; complete", ""],
  ["23430", "Repair of ruptured musculotendinous cuff (rotator cuff), open; partial", ""],
  ["23440", "Capsulorrhaphy, shoulder", ""],
  ["23450", "Capsulorrhaphy, anterior; Putti-Platt procedure or Magnuson type operation", ""],
  ["23455", "Capsulorrhaphy, anterior, with labral repair (eg, Bankart procedure)", ""],
  ["23460", "Capsulorrhaphy, anterior, any type, with bone block", ""],
  ["23462", "Capsulorrhaphy, anterior, any type, with coracoid process transfer", ""],
  ["23465", "Capsulorrhaphy, glenohumeral joint, posterior, with or without bone block", ""],
  ["23466", "Capsulorrhaphy, glenohumeral joint, any type multidirectional instability", ""],
  ["23470", "Arthroplasty, glenohumeral joint; hemiarthroplasty", ""],
  ["23472", "Total shoulder arthroplasty, glenoid and proximal humeral replacement", ""],
  ["23473", "Revision of total shoulder arthroplasty, including allograft when performed; humeral or glenoid component", ""],
  ["23474", "Revision of total shoulder arthroplasty; humeral and glenoid components", ""],
  ["23480", "Osteotomy, clavicle, with or without internal fixation", ""],
  ["23485", "Osteotomy, clavicle, with bone graft for nonunion or malunion, including obtaining graft and/or necessary fixation", ""],
  ["23490", "Prophylactic treatment (nailing, pinning, plating or wiring) with or without methylmethacrylate; clavicle", ""],
  ["23491", "Prophylactic treatment (nailing, pinning, plating or wiring) with or without methylmethacrylate; proximal humerus", ""],
];

export default function CptBookPageTwo() {
  return (
    <main className="cpt-book-page">
      <HighlightToolbar />
      <header className="book-header">
        <div className="book-kicker">CPT 20,000 SERIES</div>
        <h1>Musculoskeletal System</h1>
        <p>Page 2 · CPT book codes and guidelines</p>
      </header>

      <nav className="book-nav" aria-label="CPT book pages">
        <Link href="/cpt/surgery/20,000-series-cpt-book/page-1">Page 1</Link>
        <Link href="/cpt/surgery/20,000-series-cpt-book/page-2" aria-current="page">Page 2</Link>
        <Link href="/cpt/surgery/20,000-series-cpt-book/page-3">Page 3</Link>
        <Link href="/cpt/surgery/20,000-series-study-tips">Study tips</Link>
      </nav>

      {sections.map((section) => (
        <section key={section.title} className="book-section">
          <h2>{section.title}</h2>
          {section.paragraphs.map((paragraph, i) => (
            <p key={paragraph}>
              <Highlightable id={`${section.title}-p-${i}`} as="span">{paragraph}</Highlightable>
            </p>
          ))}
        </section>
      ))}

      <section className="book-section">
        <h2>Shoulder and Upper Extremity Codes</h2>
        <div className="code-list">
          {codeEntries.map(([code, description, reference]) => (
            <article className="code-entry" key={code + description}>
              <div className="code-number">{code}</div>
              <div>
                <div className="code-description">
                  <Highlightable id={`code-${code}`} as="span">{description}</Highlightable>
                </div>
                {reference && <div className="code-reference">➲ {reference}</div>}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
