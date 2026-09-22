import Link from "next/link";
import type { ReactNode } from "react";
import { Highlightable, HighlightToolbar } from "../_digestive/highlighter";

const priorities = [
  ["Fracture Care", "⭐⭐⭐⭐⭐"],
  ["Manipulation Rules", "⭐⭐⭐⭐⭐"],
  ["Arthroscopy vs Open", "⭐⭐⭐⭐⭐"],
  ["Knee Arthroplasty", "⭐⭐⭐⭐⭐"],
  ["Ligament Reconstruction", "⭐⭐⭐⭐⭐"],
  ["Soft Tissue Tumors", "⭐⭐⭐⭐⭐"],
  ["Arthrocentesis", "⭐⭐⭐⭐⭐"],
  ["Meniscus Procedures", "⭐⭐⭐⭐"],
  ["Arthrography", "⭐⭐⭐⭐"],
  ["Casts & Strapping", "⭐⭐⭐⭐"],
  ["Dislocations", "⭐⭐⭐⭐"],
  ["Revision Procedures", "⭐⭐⭐"],
];

type SectionProps = {
  title: string;
  children: ReactNode;
};

function Section({ title, children }: SectionProps) {
  return (
    <section style={styles.section}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

function Tip({ children }: { children: ReactNode }) {
  return <div style={styles.tip}>{children}</div>;
}

export default function TwentyThousandStudyTipsPage() {
  return (
    <main className="study-tips-reviewer" style={styles.main}>
      <HighlightToolbar />
      <header style={styles.header}>
        <div style={styles.kicker}>CPT 20,000 SERIES</div>
        <h1>STUDY GUIDELINES</h1>
        <p>Musculoskeletal System</p>
        <small>Exam-ready review notes from the transcript and reference material</small>
      </header>

      <Section title="🎯 Core CPC Rule: Approach → Manipulation → Fixation">
        <p>Use this sequence for every 20,000-series question:</p>
        <h3 style={styles.highlight}>APPROACH → MANIPULATION → FIXATION</h3>
        <ol>
          <li><Highlightable id="core-rule-1" as="span">Was the procedure open, closed, percutaneous, or arthroscopic?</Highlightable></li>
          <li><Highlightable id="core-rule-2" as="span">Was manipulation performed?</Highlightable></li>
          <li><Highlightable id="core-rule-3" as="span">Was internal fixation or instrumentation used?</Highlightable></li>
        </ol>
      </Section>

      <Section title="📌 Essential Guideline Points to Preserve">
        <div style={styles.essentialGrid}>
          <div style={styles.essentialCard}>
            <h3 style={styles.essentialTitle}>Wound exploration</h3>
            <p><Highlightable id="ess1-p1" as="span">Wound exploration codes are 20100 to 20103. These are used for trauma such as penetrating gunshot or stab wounds.</Highlightable></p>
            <div style={styles.noteBox}><Highlightable id="ess1-note" as="span">Do not report repair and debridement with 20100 to 20103.</Highlightable></div>
            <p><Highlightable id="ess1-p2" as="span">If wound exploration is performed with laparotomy or thoracotomy, do not code 20100 to 20103 for that portion.</Highlightable></p>
          </div>

          <div style={styles.essentialCard}>
            <h3 style={styles.essentialTitle}>Trigger point injections</h3>
            <p><Highlightable id="ess2-p1" as="span">Codes 20552 and 20553 are commonly tested. You must count the number of muscles, not the number of trigger points.</Highlightable></p>
            <div style={styles.noteBox}><Highlightable id="ess2-note" as="span">If a question says five muscles and four trigger points, code based on the five muscles.</Highlightable></div>
          </div>

          <div style={styles.essentialCard}>
            <h3 style={styles.essentialTitle}>Fracture types</h3>
            <p><Highlightable id="ess3-p1" as="span">Transverse fracture: straight-line break across the bone. Linear fracture: break in the bone without displacement. Oblique fracture: diagonal break. Spiral fracture: twisting injury. Greenstick fracture: partial break. Comminuted fracture: bone broken into fragments.</Highlightable></p>
            <div style={styles.noteBox}><Highlightable id="ess3-note" as="span">Comminuted is not an open fracture unless the bone protrudes through the skin.</Highlightable></div>
          </div>

          <div style={styles.essentialCard}>
            <h3 style={styles.essentialTitle}>Fracture treatment definitions</h3>
            <p><Highlightable id="ess4-p1" as="span">Manipulation is the manual force used to restore alignment. Traction is a distracting force applied to a limb or spine. Skeletal traction uses a wire, pin, screw, or clamp. Skin traction applies force through skin strapping or a device. Closed treatment means no surgical opening. Percutaneous skeletal fixation is placed without direct visualization. Open treatment exposes the fracture through an incision. External fixation uses pins or wires with connecting devices.</Highlightable></p>
          </div>

          <div style={styles.essentialCard}>
            <h3 style={styles.essentialTitle}>Arthrodesis</h3>
            <p><Highlightable id="ess5-p1" as="span">Arthrodesis codes 22585, 22614, and 22632 are add-on codes and should not be used with modifier 51.</Highlightable></p>
            <div style={styles.noteBox}><Highlightable id="ess5-note" as="span">Documentation of instrumentation and bone grafting is often reported separately when allowed by the specific code description.</Highlightable></div>
          </div>

          <div style={styles.essentialCard}>
            <h3 style={styles.essentialTitle}>Instrumentation</h3>
            <p><Highlightable id="ess6-p1" as="span">Instrumentation codes 22840 to 22855 and 22859 are reported in addition to the definitive procedure. These are separate from the definitive procedure and should not be appended with modifier 62 unless the code descriptor specifically allows it.</Highlightable></p>
          </div>

          <div style={styles.essentialCard}>
            <h3 style={styles.essentialTitle}>Bone grafting</h3>
            <p><Highlightable id="ess7-p1" as="span">Bone graft codes 20930 to 20938 should not be reported with modifier 62.</Highlightable></p>
            <div style={styles.noteBox}><Highlightable id="ess7-note" as="span">These codes are often associated with fusion and arthrodesis questions.</Highlightable></div>
          </div>

          <div style={styles.essentialCard}>
            <h3 style={styles.essentialTitle}>Tumor excision</h3>
            <p><Highlightable id="ess8-p1" as="span">Soft tissue tumor excision codes include simple and intermediate repair. This means you do not separately code simple or intermediate repair when it is already included.</Highlightable></p>
          </div>

          <div style={styles.essentialCard}>
            <h3 style={styles.essentialTitle}>Percutaneous vertebroplasty</h3>
            <p><Highlightable id="ess9-p1" as="span">These codes are inclusive of bone biopsy when performed with the procedure. Do not separately report bone biopsy with vertebral augmentation if it is included.</Highlightable></p>
            <div style={styles.noteBox}><Highlightable id="ess9-note" as="span">Vertebral augmentation includes cavity creation followed by injection of material under image guidance.</Highlightable></div>
          </div>
        </div>
      </Section>

      <Section title="� Additional Key Guideline Points">
        <div style={styles.essentialGrid}>
          <div style={styles.essentialCard}>
            <h3 style={styles.essentialTitle}>Arthroscopy</h3>
            <p><Highlightable id="add1-p1" as="span">Surgical endoscopy always includes diagnostic endoscopy. Do not report diagnostic endoscopy separately when the surgeon performs surgical arthroscopy.</Highlightable></p>
            <div style={styles.noteBox}><Highlightable id="add1-note" as="span">When arthroscopy is performed with arthrotomy, modifier 51 may apply.</Highlightable></div>
          </div>

          <div style={styles.essentialCard}>
            <h3 style={styles.essentialTitle}>Bone grafting and instrumentation</h3>
            <p><Highlightable id="add2-p1" as="span">Codes are often added to fusion and arthrodesis procedures. Review the code descriptor carefully because the graft or instrumentation may be inherent to the primary code or may require separate reporting only through a separate incision.</Highlightable></p>
            <div style={styles.noteBox}><Highlightable id="add2-note" as="span">Modifier 51 and modifier 62 must be reviewed based on the specific procedure descriptor.</Highlightable></div>
          </div>

          <div style={styles.essentialCard}>
            <h3 style={styles.essentialTitle}>Arthrography</h3>
            <p><Highlightable id="add3-p1" as="span">Arthrography procedures are commonly paired with therapeutic or diagnostic joint injection. Know whether the service is the injection itself or the imaging interpretation.</Highlightable></p>
            <div style={styles.noteBox}><Highlightable id="add3-note" as="span">The joint injection and the imaging guidance are separate concepts and should be reviewed independently.</Highlightable></div>
          </div>
        </div>
      </Section>

      <Section title="🧬 Core Coding Concepts">
        <div style={styles.essentialGrid}>
          <div style={styles.essentialCard}>
            <h3 style={styles.essentialTitle}>Fracture/dislocation treatment</h3>
            <p><Highlightable id="concept1-p1" as="span">These codes are categorized by treatment type and stabilization, not by whether the fracture is open or closed. A closed fracture can still require open treatment.</Highlightable></p>
            <div style={styles.noteBox}><Highlightable id="concept1-note" as="span">The treatment category is based on how the fracture was managed, not how it was named.</Highlightable></div>
          </div>

          <div style={styles.essentialCard}>
            <h3 style={styles.essentialTitle}>Casting, splinting, and strapping</h3>
            <p><Highlightable id="concept2-p1" as="span">Casting, splinting, or strapping used solely to temporarily stabilize the fracture for patient comfort is not considered closed treatment.</Highlightable></p>
            <div style={styles.noteBox}><Highlightable id="concept2-note" as="span">Initial immobilization may be included in the fracture code; replacement devices may be separately reportable.</Highlightable></div>
          </div>

          <div style={styles.essentialCard}>
            <h3 style={styles.essentialTitle}>Soft tissue tumor resection</h3>
            <p><Highlightable id="concept3-p1" as="span">Subcutaneous, subfascial, and radical resection have different scope and reporting rules. The measurement is made at the time of excision and includes the necessary margin for complete excision.</Highlightable></p>
            <div style={styles.noteBox}><Highlightable id="concept3-note" as="span">Appreciable vessel exploration and neuroplasty may require separate reporting.</Highlightable></div>
          </div>
        </div>
      </Section>

      <Section title="🩻 1. Wound Exploration">
        <p><Highlightable id="s1-p1" as="span"><strong>Wound exploration codes are 20100 to 20103.</strong> These are for trauma such as penetrating gunshot or stab wounds.</Highlightable></p>
        <Tip><Highlightable id="s1-tip1" as="span">Do not report repair and debridement with 20100 to 20103.</Highlightable></Tip>
        <p><Highlightable id="s1-p2" as="span">If wound exploration is performed with laparotomy or thoracotomy, do not code 20100 to 20103 for that portion.</Highlightable></p>
      </Section>

      <Section title="💉 2. Trigger Point Injections">
        <p><Highlightable id="s2-p1" as="span"><strong>Trigger point injection codes are 20552 and 20553.</strong> The key is the number of muscles, not the number of trigger points.</Highlightable></p>
        <Tip><Highlightable id="s2-tip1" as="span">If the question states five muscles and four trigger points, code based on the five muscles.</Highlightable></Tip>
      </Section>

      <Section title="🦴 3. Fracture Repair">
        <h3>Open or closed treatment?</h3>
        <p><Highlightable id="s3-p1" as="span"><strong>Closed treatment:</strong> The skin remains intact.</Highlightable></p>
        <p><Highlightable id="s3-p2" as="span"><strong>Open treatment:</strong> The fracture is surgically exposed through an incision.</Highlightable></p>
        <Tip><Highlightable id="s3-tip1" as="span"><strong>Exam trap:</strong> Reduction does not automatically mean open treatment. The important point is how the fracture was accessed.</Highlightable></Tip>

        <h3>Manipulation or no manipulation?</h3>
        <p><Highlightable id="s3-p3" as="span"><strong>Without manipulation:</strong> The physician evaluates and immobilizes the fracture without reduction.</Highlightable></p>
        <p><Highlightable id="s3-p4" as="span"><strong>With manipulation:</strong> The physician restores alignment through traction, reduction, or repositioning.</Highlightable></p>
        <Tip><Highlightable id="s3-tip2" as="span">Manipulation means moving the bone into alignment.</Highlightable></Tip>

        <h3>Internal fixation?</h3>
        <p><Highlightable id="s3-p5" as="span">Look for screws, rods, plates, and pins. If fixation is used, it often changes the code family.</Highlightable></p>
        <Tip><Highlightable id="s3-tip3" as="span"><strong>ORIF</strong> means open reduction internal fixation: open treatment plus fixation.</Highlightable></Tip>
      </Section>

      <Section title="🧱 4. Fracture Global Package">
        <p><Highlightable id="s4-p1" as="span">Many fracture-care codes include initial casting, splinting, and strapping. Do not separately report those when they are already included in the fracture-care code.</Highlightable></p>
        <Tip><Highlightable id="s4-tip1" as="span"><strong>Initial cast = included.</strong> <strong>Replacement cast = often separately reportable.</strong></Highlightable></Tip>
      </Section>

      <Section title="🔍 5. Arthroscopy vs Open Procedure">
        <p><Highlightable id="s5-p1" as="span">Arthroscopy uses small portals and a camera. Look for <strong>scope</strong>, <strong>arthroscopic</strong>, or <strong>arthroscope</strong>.</Highlightable></p>
        <p><Highlightable id="s5-p2" as="span">Open procedures use an incision and direct visualization.</Highlightable></p>
        <Tip><Highlightable id="s5-tip1" as="span">When you see <strong>scope</strong>, think arthroscopy.</Highlightable></Tip>
      </Section>

      <Section title="🦵 6. Knee Arthroplasty">
        <ul>
          <li><Highlightable id="s6-li1" as="span">Partial knee replacement replaces one compartment.</Highlightable></li>
          <li><Highlightable id="s6-li2" as="span">Total knee arthroplasty replaces the entire knee joint.</Highlightable></li>
          <li><Highlightable id="s6-li3" as="span">Revision arthroplasty uses a different code family.</Highlightable></li>
          <li><Highlightable id="s6-li4" as="span">Removal of an old prosthesis is a different code family.</Highlightable></li>
        </ul>
        <Tip><Highlightable id="s6-tip1" as="span"><strong>New = arthroplasty</strong>; <strong>Revision = revision code</strong>; <strong>Removed = removal code</strong>.</Highlightable></Tip>
      </Section>

      <Section title="🧰 7. Ligament Repair vs Reconstruction">
        <p><Highlightable id="s7-p1" as="span"><strong>Repair:</strong> Fixes the existing ligament.</Highlightable></p>
        <p><Highlightable id="s7-p2" as="span"><strong>Reconstruction:</strong> Creates a new support structure, often using a graft, tendon graft, allograft, or autograft.</Highlightable></p>
        <Tip><Highlightable id="s7-tip1" as="span">Repair = fix. Reconstruction = rebuild.</Highlightable></Tip>
      </Section>

      <Section title="🧬 8. Biopsy vs Excision">
        <p><Highlightable id="s8-p1" as="span"><strong>Biopsy:</strong> A diagnostic sample is obtained.</Highlightable></p>
        <p><Highlightable id="s8-p2" as="span"><strong>Excision:</strong> A lesion is therapeutically removed.</Highlightable></p>
        <Tip><Highlightable id="s8-tip1" as="span">Intent controls coding. A procedure remains a biopsy even if pathology later shows the lesion was benign.</Highlightable></Tip>
      </Section>

      <Section title="🩺 9. Soft Tissue Tumors">
        <p><Highlightable id="s9-p1" as="span">Determine both depth and size.</Highlightable></p>
        <ul>
          <li><Highlightable id="s9-li1" as="span">Subcutaneous</Highlightable></li>
          <li><Highlightable id="s9-li2" as="span">Subfascial</Highlightable></li>
          <li><Highlightable id="s9-li3" as="span">Radical resection</Highlightable></li>
        </ul>
        <Tip><Highlightable id="s9-tip1" as="span">Think: skin → subcutaneous → fascia → muscle. Depth matters.</Highlightable></Tip>
      </Section>

      <Section title="🦿 10. Arthrocentesis / Joint Injection">
        <p><Highlightable id="s10-p1" as="span">Identify whether the joint is small, intermediate, or major.</Highlightable></p>
        <p><Highlightable id="s10-p2" as="span">Major joints include the knee, shoulder, and hip.</Highlightable></p>
        <Tip><Highlightable id="s10-tip1" as="span">Ultrasound guidance may require separate assessment depending on the code description.</Highlightable></Tip>
      </Section>

      <Section title="📸 11. Arthrography">
        <p><Highlightable id="s11-p1" as="span">The guideline includes <strong>27369</strong>, arthrography of the knee.</Highlightable></p>
        <Tip><Highlightable id="s11-tip1" as="span">Know the difference between the injection procedure and imaging interpretation.</Highlightable></Tip>
      </Section>

      <Section title="🩹 12. Casts and Strapping">
        <p><Highlightable id="s12-p1" as="span">Initial casting is generally included in fracture care. Replacement casting is usually separately reportable.</Highlightable></p>
        <Tip><Highlightable id="s12-tip1" as="span"><strong>Initial = included.</strong> <strong>Replacement = reportable.</strong></Highlightable></Tip>
      </Section>

      <Section title="🏃 13. Meniscus Procedures">
        <ul>
          <li><Highlightable id="s13-li1" as="span">Meniscectomy means removal.</Highlightable></li>
          <li><Highlightable id="s13-li2" as="span">Meniscus repair means repair.</Highlightable></li>
          <li><Highlightable id="s13-li3" as="span">Determine whether the approach was arthroscopic or open.</Highlightable></li>
        </ul>
      </Section>

      <Section title="🧭 14. Dislocations">
        <p>Ask:</p>
        <ol>
          <li><Highlightable id="s14-li1" as="span">Was treatment closed or open?</Highlightable></li>
          <li><Highlightable id="s14-li2" as="span">Was manipulation performed?</Highlightable></li>
          <li><Highlightable id="s14-li3" as="span">Was fixation used?</Highlightable></li>
        </ol>
        <p><Highlightable id="s14-p1" as="span">Look for terms such as reduced, repositioned, and restored alignment.</Highlightable></p>
      </Section>

      <Section title="🧠 Final Musculoskeletal Recall Rules">
        <div style={styles.essentialGrid}>
          <div style={styles.essentialCard}>
            <h3 style={styles.essentialTitle}>Approach matters</h3>
            <p><Highlightable id="final1-p1" as="span">Always start with approach: open, closed, percutaneous, or arthroscopic. The same diagnosis can require different code families depending on the approach used.</Highlightable></p>
            <div style={styles.noteBox}><Highlightable id="final1-note" as="span">A closed fracture may still require open treatment.</Highlightable></div>
          </div>

          <div style={styles.essentialCard}>
            <h3 style={styles.essentialTitle}>Revision vs removal</h3>
            <p><Highlightable id="final2-p1" as="span">Revision means a component is changed or corrected. Removal means the implant is taken out. Replacement means a new implant is placed, often in a different code family.</Highlightable></p>
            <div style={styles.noteBox}><Highlightable id="final2-note" as="span">Do not confuse removal, replacement, and revision when reading the operative note.</Highlightable></div>
          </div>

          <div style={styles.essentialCard}>
            <h3 style={styles.essentialTitle}>Depth and size rule</h3>
            <p><Highlightable id="final3-p1" as="span">For soft tissue tumors, depth and size drive selection. Subcutaneous, subfascial, and radical resection have different coding logic.</Highlightable></p>
            <div style={styles.noteBox}><Highlightable id="final3-note" as="span">The more invasive the resection, the greater the likelihood of a separate repair or reconstruction component.</Highlightable></div>
          </div>
        </div>
      </Section>

      <Section title="✅ High-Yield Code Reminders">
        <ul>
          <li><Highlightable id="hy-li1" as="span"><strong>29880:</strong> both medial and lateral are present.</Highlightable></li>
          <li><Highlightable id="hy-li2" as="span"><strong>29881:</strong> either medial or lateral is present.</Highlightable></li>
          <li><Highlightable id="hy-li3" as="span"><strong>29879:</strong> drilling or multiple drilling is mentioned.</Highlightable></li>
          <li><Highlightable id="hy-li4" as="span"><strong>29885:</strong> drilling with bone grafting is mentioned.</Highlightable></li>
          <li><Highlightable id="hy-li5" as="span"><strong>20552 and 20553:</strong> code by the number of muscles.</Highlightable></li>
          <li><Highlightable id="hy-li6" as="span"><strong>20100 to 20103:</strong> trauma wound exploration only.</Highlightable></li>
        </ul>
      </Section>

      <Section title="🔥 20,000 Series Decision Tree">
        <ol>
          <li><Highlightable id="tree-li1" as="span">Identify the body part: shoulder, elbow, wrist, hand, hip, femur, knee, tibia/fibula, ankle, or foot.</Highlightable></li>
          <li><Highlightable id="tree-li2" as="span">Determine whether the approach was open, closed, percutaneous, or arthroscopic.</Highlightable></li>
          <li><Highlightable id="tree-li3" as="span">For fractures, identify treatment, manipulation, and fixation.</Highlightable></li>
          <li><Highlightable id="tree-li4" as="span">For tumors, identify depth and size.</Highlightable></li>
          <li><Highlightable id="tree-li5" as="span">For ligaments, identify repair or reconstruction.</Highlightable></li>
          <li><Highlightable id="tree-li6" as="span">For replacements, identify primary, revision, or removal.</Highlightable></li>
        </ol>
      </Section>

      <Section title="🚨 Biggest CPC Traps">
        <ul>
          <li><Highlightable id="trap-li1" as="span">Coding a cast separately from fracture care.</Highlightable></li>
          <li><Highlightable id="trap-li2" as="span">Confusing repair with reconstruction.</Highlightable></li>
          <li><Highlightable id="trap-li3" as="span">Missing manipulation language.</Highlightable></li>
          <li><Highlightable id="trap-li4" as="span">Missing internal fixation.</Highlightable></li>
          <li><Highlightable id="trap-li5" as="span">Ignoring soft-tissue tumor depth.</Highlightable></li>
          <li><Highlightable id="trap-li6" as="span">Coding only from the diagnosis instead of the procedure.</Highlightable></li>
          <li><Highlightable id="trap-li7" as="span">Ignoring arthroscopic versus open approach.</Highlightable></li>
          <li><Highlightable id="trap-li8" as="span">Confusing revision, removal, and replacement.</Highlightable></li>
        </ul>
      </Section>

      <Section title="⭐ High-Yield Exam Priorities">
        <div style={{ overflowX: "auto" }}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.cell}>Priority</th>
                <th style={styles.cell}>Topic</th>
                <th style={styles.cell}>Importance</th>
              </tr>
            </thead>
            <tbody>
              {priorities.map(([topic, importance], index) => (
                <tr key={topic}>
                  <td style={styles.cell}>{index + 1}</td>
                  <Highlightable id={`priority-${index}`} as="td" style={styles.cell}>{topic}</Highlightable>
                  <td style={styles.cell}>{importance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section title="🎯 Final Memory Rule">
        <p>For the 20,000 Series, always ask:</p>
        <h3 style={styles.highlight}>APPROACH → MANIPULATION → FIXATION</h3>
        <ol>
          <li><Highlightable id="memory-li1" as="span">What was the approach: open, closed, percutaneous, or arthroscopic?</Highlightable></li>
          <li><Highlightable id="memory-li2" as="span">Was manipulation performed?</Highlightable></li>
          <li><Highlightable id="memory-li3" as="span">Was fixation or instrumentation used?</Highlightable></li>
          <li><Highlightable id="memory-li4" as="span">Was it a repair, reconstruction, revision, or removal?</Highlightable></li>
        </ol>
      </Section>

      <Link href="/cpt/surgery/20,000" style={styles.backLink}>← Back to 20,000 Series</Link>
    </main>
  );
}

const styles = {
  main: { padding: "40px", maxWidth: "1100px", margin: "auto" },
  header: {
    background: "linear-gradient(135deg, #2563eb, #7c3aed)",
    color: "white",
    padding: "45px",
    borderRadius: "20px",
    marginBottom: "30px",
    boxShadow: "0 10px 30px rgba(37, 99, 235, 0.25)",
  },
  kicker: { fontWeight: 700, letterSpacing: "0.12em", opacity: 0.9, marginBottom: "10px", fontSize: "12px" },
  section: {
    border: "1px solid #e5e7eb",
    borderRadius: "14px",
    padding: "25px",
    marginBottom: "24px",
    backgroundColor: "white",
    boxShadow: "0 3px 10px rgba(0,0,0,0.05)",
  },
  tip: { backgroundColor: "#eff6ff", borderLeft: "5px solid #2563eb", padding: "16px", marginTop: "16px", borderRadius: "6px" },
  highlight: { color: "#2563eb", fontSize: "24px" },
  essentialGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))", gap: "18px", marginTop: "12px" },
  essentialCard: { background: "#f3f9ff", border: "1px solid #cfe3f2", borderRadius: "12px", padding: "18px 18px 16px", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.3)", position: "relative" as const, minHeight: "220px" },
  essentialTitle: { color: "#0d6ea7", fontSize: "22px", fontWeight: 800, margin: "0 0 12px", lineHeight: 1.2 },
  noteBox: { background: "#dfeef9", borderLeft: "4px solid #2f8fd3", padding: "10px 12px", margin: "14px 0 12px", color: "#0c2d42", fontWeight: 600, borderRadius: "4px" },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "16px" },
  card: { background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "18px" },
  table: { width: "100%", borderCollapse: "collapse" as const },
  cell: { border: "1px solid #d1d5db", padding: "10px", textAlign: "left" as const },
  backLink: { color: "#2563eb", fontWeight: "600" },
};
