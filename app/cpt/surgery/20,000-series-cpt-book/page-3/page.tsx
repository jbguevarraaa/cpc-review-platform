import Link from "next/link";

const sections = [
  {
    title: "Knee, Leg, Ankle, and Foot",
    paragraphs: [
      "The lower extremity musculoskeletal section includes arthroscopy, meniscectomy, ligament repair, fracture treatment, dislocation treatment, arthrodesis, and arthroplasty coding for the knee, tibia, fibula, ankle, and foot.",
      "The key to accurate coding is identifying the exact body part, the approach, and whether the procedure was a repair, reconstruction, excision, internal fixation, or revision. The presence of grafting, instrumentation, or prosthetic removal often changes the appropriate code family.",
    ],
  },
  {
    title: "Arthroscopy and Diagnostic Endoscopy",
    paragraphs: [
      "Surgical endoscopy always includes diagnostic endoscopy. If the physician performs a surgical arthroscopy, diagnostic arthroscopy is considered included in the procedure and is not reported separately.",
      "When an arthroscopic procedure is performed in conjunction with an arthrotomy, the code selection and modifier application must be reviewed carefully to avoid duplicate reporting.",
    ],
  },
  {
    title: "Bone Grafting and Instrumentation",
    paragraphs: [
      "Bone graft codes and instrumentation codes are often added to fusion and arthrodesis procedures. Review the descriptor of the specific code because the listing of those services may be included in the definitive procedure or may require separate reporting only when performed through a separate incision.",
      "These codes are often tested by understanding whether the graft or instrumentation is local, structural, morselized, or performed through a separate incision. Modifier 51 and modifier 62 application should be reviewed carefully when the descriptor includes a specific restriction.",
    ],
  },
];

const codeEntries = [
  ["27236", "Open treatment of femoral fracture, proximal end, with internal fixation", ""],
  ["27244", "Treatment of femoral fracture, distal end, with internal fixation", ""],
  ["27500", "Treatment of femoral shaft fracture, with or without manipulation; without fixation", ""],
  ["27506", "Treatment of femoral shaft fracture, with internal fixation", ""],
  ["27520", "Treatment of patellar fracture, with or without manipulation", ""],
  ["27524", "Treatment of patellar fracture, with external fixation", ""],
  ["27530", "Treatment of knee dislocation, closed", ""],
  ["27532", "Treatment of knee dislocation, open", ""],
  ["27570", "Arthrocentesis of the knee joint", ""],
  ["27580", "Arthroscopy, knee, diagnostic", ""],
  ["29870", "Arthroscopy, knee, diagnostic, with meniscectomy or meniscus repair", ""],
  ["29880", "Arthroscopy, knee, with meniscectomy, medial and lateral", ""],
  ["29881", "Arthroscopy, knee, with meniscectomy, medial or lateral", ""],
  ["29879", "Arthroscopy, knee, drilling or multiple drilling for osteochondral defect", ""],
  ["29885", "Arthroscopy, knee, drilling with bone grafting", ""],
  ["29888", "Arthroscopy, knee, awls, drilling, or debridement", ""],
  ["29999", "Unlisted procedure, knee joint", ""],
  ["27700", "Open treatment of tibial fracture, with or without manipulation", ""],
  ["27750", "Open treatment of ankle fracture, with or without manipulation", ""],
  ["27830", "Open treatment of calcaneal fracture, with or without manipulation", ""],
  ["28400", "Open treatment of metatarsal fracture, with or without fixation", ""],
  ["28405", "Treatment of toe fracture, with or without manipulation", ""],
  ["29405", "Application of short leg splint", ""],
  ["29425", "Application of short leg cast", ""],
  ["29515", "Application of short leg cast and walking boot", ""],
  ["27610", "Arthrocentesis, ankle joint", ""],
  ["27620", "Arthrocentesis, knee or ankle", ""],
  ["28705", "Excision, tumor, soft tissue of lower extremity, subcutaneous; less than 3 cm", ""],
  ["28706", "Excision, tumor, soft tissue of lower extremity, subfascial; less than 5 cm", ""],
  ["28707", "Radical resection, lower extremity soft tissue tumor; less than 5 cm", ""],
  ["28708", "Radical resection, lower extremity soft tissue tumor; 5 cm or greater", ""],
  ["20930", "Allograft, morselized, for spine surgery only", ""],
  ["20931", "Allograft, structural, for spine surgery only", ""],
  ["20936", "Autograft for spine surgery only; local", ""],
  ["20937", "Morselized autograft through separate skin or fascial incision", ""],
  ["20938", "Structural autograft through separate skin or fascial incision", ""],
  ["22840", "Posterior non-segmental instrumentation", ""],
  ["22841", "Posterior segmental instrumentation", ""],
  ["22842", "Anterior instrumentation", ""],
  ["22844", "Anterior instrumentation with plate", ""],
  ["22845", "Anterior instrumentation with fixation", ""],
  ["22846", "Posterior instrumentation with fixation", ""],
  ["22850", "Application of spinal fixation device", ""],
  ["22851", "Application of spinal fixation device; with bone graft", ""],
  ["22852", "Application of spinal fixation device; with bone graft and instrumentation", ""],
  ["22855", "Revision of instrumentation", ""],
  ["22859", "Application of interbody cage", ""],
];

export default function CptBookPageThree() {
  return (
    <main className="cpt-book-page">
      <header className="book-header">
        <div className="book-kicker">CPT 20,000 SERIES</div>
        <h1>Musculoskeletal System</h1>
        <p>Page 3 · CPT book codes and guidelines</p>
      </header>

      <nav className="book-nav" aria-label="CPT book pages">
        <Link href="/cpt/surgery/20,000-series-cpt-book/page-1">Page 1</Link>
        <Link href="/cpt/surgery/20,000-series-cpt-book/page-2">Page 2</Link>
        <Link href="/cpt/surgery/20,000-series-cpt-book/page-3" aria-current="page">Page 3</Link>
        <Link href="/cpt/surgery/20,000-series-study-tips">Study tips</Link>
      </nav>

      {sections.map((section) => (
        <section key={section.title} className="book-section">
          <h2>{section.title}</h2>
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>
      ))}

      <section className="book-section">
        <h2>Lower Extremity and Additional Reference Codes</h2>
        <div className="code-list">
          {codeEntries.map(([code, description, reference]) => (
            <article className="code-entry" key={code + description}>
              <div className="code-number">{code}</div>
              <div>
                <div className="code-description">{description}</div>
                {reference && <div className="code-reference">➲ {reference}</div>}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
