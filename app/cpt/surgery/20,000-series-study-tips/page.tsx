import Link from "next/link";
import type { ReactNode } from "react";

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
          <li>Was the procedure open, closed, percutaneous, or arthroscopic?</li>
          <li>Was manipulation performed?</li>
          <li>Was internal fixation or instrumentation used?</li>
        </ol>
      </Section>

      <Section title="📌 Essential Guideline Points to Preserve">
        <div style={styles.essentialGrid}>
          <div style={styles.essentialCard}>
            <h3 style={styles.essentialTitle}>Wound exploration</h3>
            <p>Wound exploration codes are 20100 to 20103. These are used for trauma such as penetrating gunshot or stab wounds.</p>
            <div style={styles.noteBox}>Do not report repair and debridement with 20100 to 20103.</div>
            <p>If wound exploration is performed with laparotomy or thoracotomy, do not code 20100 to 20103 for that portion.</p>
          </div>

          <div style={styles.essentialCard}>
            <h3 style={styles.essentialTitle}>Trigger point injections</h3>
            <p>Codes 20552 and 20553 are commonly tested. You must count the number of muscles, not the number of trigger points.</p>
            <div style={styles.noteBox}>If a question says five muscles and four trigger points, code based on the five muscles.</div>
          </div>

          <div style={styles.essentialCard}>
            <h3 style={styles.essentialTitle}>Fracture types</h3>
            <p>Transverse fracture: straight-line break across the bone. Linear fracture: break in the bone without displacement. Oblique fracture: diagonal break. Spiral fracture: twisting injury. Greenstick fracture: partial break. Comminuted fracture: bone broken into fragments.</p>
            <div style={styles.noteBox}>Comminuted is not an open fracture unless the bone protrudes through the skin.</div>
          </div>

          <div style={styles.essentialCard}>
            <h3 style={styles.essentialTitle}>Fracture treatment definitions</h3>
            <p>Manipulation is the manual force used to restore alignment. Traction is a distracting force applied to a limb or spine. Skeletal traction uses a wire, pin, screw, or clamp. Skin traction applies force through skin strapping or a device. Closed treatment means no surgical opening. Percutaneous skeletal fixation is placed without direct visualization. Open treatment exposes the fracture through an incision. External fixation uses pins or wires with connecting devices.</p>
          </div>

          <div style={styles.essentialCard}>
            <h3 style={styles.essentialTitle}>Arthrodesis</h3>
            <p>Arthrodesis codes 22585, 22614, and 22632 are add-on codes and should not be used with modifier 51.</p>
            <div style={styles.noteBox}>Documentation of instrumentation and bone grafting is often reported separately when allowed by the specific code description.</div>
          </div>

          <div style={styles.essentialCard}>
            <h3 style={styles.essentialTitle}>Instrumentation</h3>
            <p>Instrumentation codes 22840 to 22855 and 22859 are reported in addition to the definitive procedure. These are separate from the definitive procedure and should not be appended with modifier 62 unless the code descriptor specifically allows it.</p>
          </div>

          <div style={styles.essentialCard}>
            <h3 style={styles.essentialTitle}>Bone grafting</h3>
            <p>Bone graft codes 20930 to 20938 should not be reported with modifier 62.</p>
            <div style={styles.noteBox}>These codes are often associated with fusion and arthrodesis questions.</div>
          </div>

          <div style={styles.essentialCard}>
            <h3 style={styles.essentialTitle}>Tumor excision</h3>
            <p>Soft tissue tumor excision codes include simple and intermediate repair. This means you do not separately code simple or intermediate repair when it is already included.</p>
          </div>

          <div style={styles.essentialCard}>
            <h3 style={styles.essentialTitle}>Percutaneous vertebroplasty</h3>
            <p>These codes are inclusive of bone biopsy when performed with the procedure. Do not separately report bone biopsy with vertebral augmentation if it is included.</p>
            <div style={styles.noteBox}>Vertebral augmentation includes cavity creation followed by injection of material under image guidance.</div>
          </div>
        </div>
      </Section>

      <Section title="� Additional Key Guideline Points">
        <div style={styles.essentialGrid}>
          <div style={styles.essentialCard}>
            <h3 style={styles.essentialTitle}>Arthroscopy</h3>
            <p>Surgical endoscopy always includes diagnostic endoscopy. Do not report diagnostic endoscopy separately when the surgeon performs surgical arthroscopy.</p>
            <div style={styles.noteBox}>When arthroscopy is performed with arthrotomy, modifier 51 may apply.</div>
          </div>

          <div style={styles.essentialCard}>
            <h3 style={styles.essentialTitle}>Bone grafting and instrumentation</h3>
            <p>Codes are often added to fusion and arthrodesis procedures. Review the code descriptor carefully because the graft or instrumentation may be inherent to the primary code or may require separate reporting only through a separate incision.</p>
            <div style={styles.noteBox}>Modifier 51 and modifier 62 must be reviewed based on the specific procedure descriptor.</div>
          </div>

          <div style={styles.essentialCard}>
            <h3 style={styles.essentialTitle}>Arthrography</h3>
            <p>Arthrography procedures are commonly paired with therapeutic or diagnostic joint injection. Know whether the service is the injection itself or the imaging interpretation.</p>
            <div style={styles.noteBox}>The joint injection and the imaging guidance are separate concepts and should be reviewed independently.</div>
          </div>
        </div>
      </Section>

      <Section title="🧬 Core Coding Concepts">
        <div style={styles.essentialGrid}>
          <div style={styles.essentialCard}>
            <h3 style={styles.essentialTitle}>Fracture/dislocation treatment</h3>
            <p>These codes are categorized by treatment type and stabilization, not by whether the fracture is open or closed. A closed fracture can still require open treatment.</p>
            <div style={styles.noteBox}>The treatment category is based on how the fracture was managed, not how it was named.</div>
          </div>

          <div style={styles.essentialCard}>
            <h3 style={styles.essentialTitle}>Casting, splinting, and strapping</h3>
            <p>Casting, splinting, or strapping used solely to temporarily stabilize the fracture for patient comfort is not considered closed treatment.</p>
            <div style={styles.noteBox}>Initial immobilization may be included in the fracture code; replacement devices may be separately reportable.</div>
          </div>

          <div style={styles.essentialCard}>
            <h3 style={styles.essentialTitle}>Soft tissue tumor resection</h3>
            <p>Subcutaneous, subfascial, and radical resection have different scope and reporting rules. The measurement is made at the time of excision and includes the necessary margin for complete excision.</p>
            <div style={styles.noteBox}>Appreciable vessel exploration and neuroplasty may require separate reporting.</div>
          </div>
        </div>
      </Section>

      <Section title="🩻 1. Wound Exploration">
        <p><strong>Wound exploration codes are 20100 to 20103.</strong> These are for trauma such as penetrating gunshot or stab wounds.</p>
        <Tip>Do not report repair and debridement with 20100 to 20103.</Tip>
        <p>If wound exploration is performed with laparotomy or thoracotomy, do not code 20100 to 20103 for that portion.</p>
      </Section>

      <Section title="💉 2. Trigger Point Injections">
        <p><strong>Trigger point injection codes are 20552 and 20553.</strong> The key is the number of muscles, not the number of trigger points.</p>
        <Tip>If the question states five muscles and four trigger points, code based on the five muscles.</Tip>
      </Section>

      <Section title="🦴 3. Fracture Repair">
        <h3>Open or closed treatment?</h3>
        <p><strong>Closed treatment:</strong> The skin remains intact.</p>
        <p><strong>Open treatment:</strong> The fracture is surgically exposed through an incision.</p>
        <Tip><strong>Exam trap:</strong> Reduction does not automatically mean open treatment. The important point is how the fracture was accessed.</Tip>

        <h3>Manipulation or no manipulation?</h3>
        <p><strong>Without manipulation:</strong> The physician evaluates and immobilizes the fracture without reduction.</p>
        <p><strong>With manipulation:</strong> The physician restores alignment through traction, reduction, or repositioning.</p>
        <Tip>Manipulation means moving the bone into alignment.</Tip>

        <h3>Internal fixation?</h3>
        <p>Look for screws, rods, plates, and pins. If fixation is used, it often changes the code family.</p>
        <Tip><strong>ORIF</strong> means open reduction internal fixation: open treatment plus fixation.</Tip>
      </Section>

      <Section title="🧱 4. Fracture Global Package">
        <p>Many fracture-care codes include initial casting, splinting, and strapping. Do not separately report those when they are already included in the fracture-care code.</p>
        <Tip><strong>Initial cast = included.</strong> <strong>Replacement cast = often separately reportable.</strong></Tip>
      </Section>

      <Section title="🔍 5. Arthroscopy vs Open Procedure">
        <p>Arthroscopy uses small portals and a camera. Look for <strong>scope</strong>, <strong>arthroscopic</strong>, or <strong>arthroscope</strong>.</p>
        <p>Open procedures use an incision and direct visualization.</p>
        <Tip>When you see <strong>scope</strong>, think arthroscopy.</Tip>
      </Section>

      <Section title="🦵 6. Knee Arthroplasty">
        <ul>
          <li>Partial knee replacement replaces one compartment.</li>
          <li>Total knee arthroplasty replaces the entire knee joint.</li>
          <li>Revision arthroplasty uses a different code family.</li>
          <li>Removal of an old prosthesis is a different code family.</li>
        </ul>
        <Tip><strong>New = arthroplasty</strong>; <strong>Revision = revision code</strong>; <strong>Removed = removal code</strong>.</Tip>
      </Section>

      <Section title="🧰 7. Ligament Repair vs Reconstruction">
        <p><strong>Repair:</strong> Fixes the existing ligament.</p>
        <p><strong>Reconstruction:</strong> Creates a new support structure, often using a graft, tendon graft, allograft, or autograft.</p>
        <Tip>Repair = fix. Reconstruction = rebuild.</Tip>
      </Section>

      <Section title="🧬 8. Biopsy vs Excision">
        <p><strong>Biopsy:</strong> A diagnostic sample is obtained.</p>
        <p><strong>Excision:</strong> A lesion is therapeutically removed.</p>
        <Tip>Intent controls coding. A procedure remains a biopsy even if pathology later shows the lesion was benign.</Tip>
      </Section>

      <Section title="🩺 9. Soft Tissue Tumors">
        <p>Determine both depth and size.</p>
        <ul>
          <li>Subcutaneous</li>
          <li>Subfascial</li>
          <li>Radical resection</li>
        </ul>
        <Tip>Think: skin → subcutaneous → fascia → muscle. Depth matters.</Tip>
      </Section>

      <Section title="🦿 10. Arthrocentesis / Joint Injection">
        <p>Identify whether the joint is small, intermediate, or major.</p>
        <p>Major joints include the knee, shoulder, and hip.</p>
        <Tip>Ultrasound guidance may require separate assessment depending on the code description.</Tip>
      </Section>

      <Section title="📸 11. Arthrography">
        <p>The guideline includes <strong>27369</strong>, arthrography of the knee.</p>
        <Tip>Know the difference between the injection procedure and imaging interpretation.</Tip>
      </Section>

      <Section title="🩹 12. Casts and Strapping">
        <p>Initial casting is generally included in fracture care. Replacement casting is usually separately reportable.</p>
        <Tip><strong>Initial = included.</strong> <strong>Replacement = reportable.</strong></Tip>
      </Section>

      <Section title="🏃 13. Meniscus Procedures">
        <ul>
          <li>Meniscectomy means removal.</li>
          <li>Meniscus repair means repair.</li>
          <li>Determine whether the approach was arthroscopic or open.</li>
        </ul>
      </Section>

      <Section title="🧭 14. Dislocations">
        <p>Ask:</p>
        <ol>
          <li>Was treatment closed or open?</li>
          <li>Was manipulation performed?</li>
          <li>Was fixation used?</li>
        </ol>
        <p>Look for terms such as reduced, repositioned, and restored alignment.</p>
      </Section>

      <Section title="🧠 Final Musculoskeletal Recall Rules">
        <div style={styles.essentialGrid}>
          <div style={styles.essentialCard}>
            <h3 style={styles.essentialTitle}>Approach matters</h3>
            <p>Always start with approach: open, closed, percutaneous, or arthroscopic. The same diagnosis can require different code families depending on the approach used.</p>
            <div style={styles.noteBox}>A closed fracture may still require open treatment.</div>
          </div>

          <div style={styles.essentialCard}>
            <h3 style={styles.essentialTitle}>Revision vs removal</h3>
            <p>Revision means a component is changed or corrected. Removal means the implant is taken out. Replacement means a new implant is placed, often in a different code family.</p>
            <div style={styles.noteBox}>Do not confuse removal, replacement, and revision when reading the operative note.</div>
          </div>

          <div style={styles.essentialCard}>
            <h3 style={styles.essentialTitle}>Depth and size rule</h3>
            <p>For soft tissue tumors, depth and size drive selection. Subcutaneous, subfascial, and radical resection have different coding logic.</p>
            <div style={styles.noteBox}>The more invasive the resection, the greater the likelihood of a separate repair or reconstruction component.</div>
          </div>
        </div>
      </Section>

      <Section title="✅ High-Yield Code Reminders">
        <ul>
          <li><strong>29880:</strong> both medial and lateral are present.</li>
          <li><strong>29881:</strong> either medial or lateral is present.</li>
          <li><strong>29879:</strong> drilling or multiple drilling is mentioned.</li>
          <li><strong>29885:</strong> drilling with bone grafting is mentioned.</li>
          <li><strong>20552 and 20553:</strong> code by the number of muscles.</li>
          <li><strong>20100 to 20103:</strong> trauma wound exploration only.</li>
        </ul>
      </Section>

      <Section title="🔥 20,000 Series Decision Tree">
        <ol>
          <li>Identify the body part: shoulder, elbow, wrist, hand, hip, femur, knee, tibia/fibula, ankle, or foot.</li>
          <li>Determine whether the approach was open, closed, percutaneous, or arthroscopic.</li>
          <li>For fractures, identify treatment, manipulation, and fixation.</li>
          <li>For tumors, identify depth and size.</li>
          <li>For ligaments, identify repair or reconstruction.</li>
          <li>For replacements, identify primary, revision, or removal.</li>
        </ol>
      </Section>

      <Section title="🚨 Biggest CPC Traps">
        <ul>
          <li>Coding a cast separately from fracture care.</li>
          <li>Confusing repair with reconstruction.</li>
          <li>Missing manipulation language.</li>
          <li>Missing internal fixation.</li>
          <li>Ignoring soft-tissue tumor depth.</li>
          <li>Coding only from the diagnosis instead of the procedure.</li>
          <li>Ignoring arthroscopic versus open approach.</li>
          <li>Confusing revision, removal, and replacement.</li>
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
                  <td style={styles.cell}>{topic}</td>
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
          <li>What was the approach: open, closed, percutaneous, or arthroscopic?</li>
          <li>Was manipulation performed?</li>
          <li>Was fixation or instrumentation used?</li>
          <li>Was it a repair, reconstruction, revision, or removal?</li>
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
