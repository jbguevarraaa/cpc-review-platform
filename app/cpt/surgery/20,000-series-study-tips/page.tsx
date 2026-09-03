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
        <h1>20,000 SERIES STUDY TIPS</h1>
        <p>Musculoskeletal System</p>
        <small>CPC Exam Master Cheat Sheet</small>
      </header>

      <Section title="🎯 The Biggest CPC Rule">
        <p>Train yourself to identify:</p>
        <h3 style={styles.highlight}>APPROACH → MANIPULATION → FIXATION</h3>
        <ol>
          <li>Is the procedure open or closed?</li>
          <li>Was manipulation performed?</li>
          <li>Was internal fixation used?</li>
          <li>Was it percutaneous, arthroscopic, or open?</li>
        </ol>
      </Section>

      <Section title="🔴 Priority #1: Fracture Care">
        <h3>Step 1: Open or Closed Treatment?</h3>
        <p><strong>Closed treatment:</strong> The skin remains intact.</p>
        <p>Examples include closed treatment of femur and patella fractures.</p>
        <p><strong>Open treatment:</strong> The fracture is surgically exposed through an incision.</p>
        <Tip>
          <strong>Exam trap:</strong> A fracture being reduced does not automatically mean open treatment. Reduction can be closed or open. Determine how the physician accessed the fracture.
        </Tip>

        <h3>Step 2: Manipulation or No Manipulation?</h3>
        <p><strong>Without manipulation:</strong> The physician evaluates and immobilizes the fracture without reduction.</p>
        <p><strong>With manipulation:</strong> The physician restores alignment through traction, reduction, or repositioning.</p>
        <Tip>🧠 <strong>Manipulation = Moving Bones.</strong> No movement means no manipulation.</Tip>

        <h3>Step 3: Internal Fixation?</h3>
        <p>Look for screws, rods, plates, and pins.</p>
        <Tip><strong>ORIF</strong> means Open Reduction Internal Fixation: open treatment plus fixation.</Tip>
      </Section>

      <Section title="🔴 Priority #2: Fracture Global Package">
        <p>Many fracture-care codes include initial casting, splinting, and strapping. Do not separately report them when included in the fracture-care code.</p>
        <Tip><strong>Initial Cast = Included.</strong><br /><strong>Replacement Cast = Usually Reportable.</strong></Tip>
      </Section>

      <Section title="🔴 Priority #3: Arthroscopy vs Open Procedure">
        <p>Arthroscopy uses small portals and a camera. Look for <strong>scope</strong>, <strong>arthroscopic</strong>, or <strong>arthroscope</strong>.</p>
        <p>Open procedures use an incision and direct visualization.</p>
        <Tip>🧠 When you see <strong>scope</strong>, think arthroscopy.</Tip>
        <p>For a meniscectomy, always determine whether the procedure was arthroscopic or open because the codes differ.</p>
      </Section>

      <Section title="🔴 Priority #4: Knee Arthroplasty">
        <ul>
          <li>Partial knee replacement replaces one compartment.</li>
          <li>Total knee arthroplasty replaces the entire knee joint. Example: <strong>27447</strong>.</li>
          <li>Revision arthroplasty uses a different code family.</li>
          <li>Removal of an old prosthesis uses a different code family.</li>
        </ul>
        <Tip><strong>New?</strong> Arthroplasty.<br /><strong>Revision?</strong> Revision code.<br /><strong>Removed?</strong> Removal code.</Tip>
        <p><strong>Exam trap:</strong> A medial compartment replacement is not a total knee replacement.</p>
      </Section>

      <Section title="🔴 Priority #5: Knee Prosthesis Revision">
        <p>Commonly tested codes include <strong>27486</strong>, <strong>27487</strong>, and <strong>27488</strong>.</p>
        <Tip>Revision is not the same as replacement or removal. Read the operative description carefully.</Tip>
      </Section>

      <Section title="🔴 Priority #6: Ligament Repair vs Reconstruction">
        <p><strong>Repair:</strong> Fixes the existing ligament.</p>
        <p><strong>Reconstruction:</strong> Creates a new support structure, often using a graft, tendon graft, allograft, or autograft.</p>
        <Tip>🧠 <strong>Repair = Fix.</strong> <strong>Reconstruction = Rebuild.</strong><br />ACL reconstruction using a patellar tendon graft is reconstruction, not repair.</Tip>
      </Section>

      <Section title="🔴 Priority #7: Biopsy vs Excision">
        <p><strong>Biopsy:</strong> A diagnostic sample is obtained.</p>
        <p><strong>Excision:</strong> A lesion is therapeutically removed.</p>
        <Tip>Intent controls coding. A procedure remains a biopsy even if later pathology shows that the lesion was benign.</Tip>
      </Section>

      <Section title="🔴 Priority #8: Soft Tissue Tumors">
        <p>Determine both depth and size:</p>
        <ul><li>Subcutaneous</li><li>Subfascial</li><li>Radical resection</li></ul>
        <Tip>🧠 Think: Skin → Subcutaneous → Fascia → Muscle.<br />Do not code based on size alone. Depth matters.</Tip>
      </Section>

      <Section title="🔴 Priority #9: Arthrocentesis / Joint Injection">
        <p>Identify whether the joint is small, intermediate, or major.</p>
        <p>Major joints include the knee, shoulder, and hip. Code <strong>20610</strong> is associated with a major joint or bursa.</p>
        <Tip>If ultrasound guidance is documented, verify whether the guidance is separately reportable.</Tip>
      </Section>

      <Section title="🔴 Priority #10: Arthrography">
        <p>The guideline includes <strong>27369</strong>, arthrography of the knee.</p>
        <Tip>Distinguish the injection procedure from imaging interpretation.</Tip>
      </Section>

      <Section title="🔴 Priority #11: Casts & Strapping">
        <p>Initial casting is generally included in fracture care. Replacement casting is usually separately reportable.</p>
        <Tip>🧠 <strong>Initial = Included. Replacement = Reportable.</strong></Tip>
      </Section>

      <Section title="🔴 Priority #12: Meniscus Procedures">
        <ul><li>Meniscectomy means removal.</li><li>Meniscus repair means repair.</li><li>Identify whether the approach was arthroscopic or open.</li></ul>
      </Section>

      <Section title="🔴 Priority #13: Dislocations">
        <p>Ask:</p>
        <ol><li>Was treatment closed or open?</li><li>Was manipulation performed?</li><li>Was fixation used?</li></ol>
        <p>Look for reduced, repositioned, and restored alignment.</p>
      </Section>

      <Section title="📚 Actual CPT Guidelines — 20,000 Series">
        <h3>1. Musculoskeletal Treatment Categories</h3>
        <ol>
          <li>Fracture and dislocation codes are categorized by treatment type and stabilization.</li>
          <li>Treatment may be closed, percutaneous, or open; stabilization may involve fixation or immobilization.</li>
          <li>The type of fracture or dislocation does not determine the treatment type. A closed fracture may still receive open treatment.</li>
        </ol>

        <h3>2. Manipulation and Traction</h3>
        <ol>
          <li>Manipulation is reduction using manually applied force or traction to achieve satisfactory alignment.</li>
          <li>If the same provider must re-reduce a fracture or dislocation because alignment was not maintained, modifier 76 may apply.</li>
          <li>Skeletal traction uses a wire, pin, screw, or clamp attached to bone. Skin traction applies force through skin strapping or a device.</li>
        </ol>

        <h3>3. Closed, Percutaneous, and Open Treatment</h3>
        <ol>
          <li>Closed treatment does not surgically open or directly visualize the treatment site.</li>
          <li>Temporary casting, splinting, or strapping used only for patient comfort is not closed fracture treatment.</li>
          <li>Percutaneous skeletal fixation is neither open nor closed: the fracture is not visualized, but pins or screws cross the fracture, usually with imaging.</li>
          <li>Open treatment surgically exposes the fracture or dislocation, treats it through the traumatic wound, or uses a surgical exposure for an intramedullary nail or other internal fixation device.</li>
          <li>External fixation uses pins or wires penetrating bone with connecting clamps, bars, rings, or similar devices. Report it separately only when it is not already included in the code descriptor.</li>
        </ol>

        <h3>4. Reporting Fracture and Dislocation Care</h3>
        <ol>
          <li>The provider who performs the fracture or dislocation treatment reports the appropriate treatment code.</li>
          <li>When the provider gives initial treatment but will not provide subsequent care, modifier 54 may apply.</li>
          <li>If fracture treatment as defined by the guidelines is not performed, report the appropriate evaluation and management service instead.</li>
        </ol>

        <h3>5. Soft-Tissue Tumor Excision</h3>
        <ol>
          <li>Subcutaneous tumors are below the skin and above the deep fascia. Code selection is based on location and size.</li>
          <li>Subfascial tumors are within or below the deep fascia, often intramuscular, but do not involve bone. Code selection is based on location and size.</li>
          <li>For tumor excision, measure the greatest tumor diameter plus the narrowest margin required for complete excision.</li>
          <li>Dissection or elevation of tissue planes needed to resect the tumor is included.</li>
          <li>Appreciable vessel exploration, neuroplasty, extensive undermining, and qualifying complex repair may be separately reportable.</li>
          <li>Digital subfascial tumors involve the tendon, tendon sheath, or joint. A tumor that only abuts these structures remains subcutaneous.</li>
          <li>Radical soft-tissue resection removes the tumor with wide margins of normal tissue. Code selection is based on location and size.</li>
          <li>Radical bone-tumor resection is selected by location, not tumor size or whether the tumor is benign, malignant, primary, or metastatic.</li>
        </ol>

        <h3>6. Casts, Splints, and Strapping</h3>
        <ol>
          <li>Musculoskeletal services include application and removal of the first cast, splint, or traction device when performed.</li>
          <li>Supplies may be reported separately.</li>
          <li>If another provider removes the cast, use the appropriate cast-removal code.</li>
          <li>Subsequent replacement of a cast, splint, strapping, or traction device during or after the global period may be separately reportable.</li>
          <li>Cast, splint, and strapping services are not preoperative care, so modifier 56 does not apply to them as preoperative management only.</li>
        </ol>

        <h3>7. Grafts and Implants</h3>
        <ol>
          <li>Report separately obtained autogenous bone, cartilage, tendon, fascia lata, or other tissue only when the primary code does not already include graft harvesting.</li>
          <li>Use the specific CPT code for autologous skin, bone, nerve, tendon, fascia lata, or vessel grafts when one exists.</li>
          <li>Do not append modifier 62 to bone-graft codes 20900-20938.</li>
          <li>Manual drug-delivery device preparation and insertion codes 20700, 20702, and 20704 are add-on codes selected by the deep, intramedullary, or intra-articular location.</li>
          <li>Removal codes 20701, 20703, and 20705 are selected by the location of the removed drug-delivery device. Report these codes once per anatomic location.</li>
        </ol>

        <h3>8. Arthroscopy and Arthrography</h3>
        <ol>
          <li>Surgical arthroscopy includes diagnostic arthroscopy.</li>
          <li>When arthroscopy is performed with arthrotomy, modifier 51 may apply.</li>
          <li>Arthroscopic removal of a loose or foreign body is reported only when the body meets the size and removal requirements in the guideline.</li>
          <li>For knee arthrography, 27369 is the injection procedure for contrast. Radiological supervision and interpretation is reported separately when appropriate.</li>
          <li>Do not report 27369 with 20610, 20611, or 29871 for the same applicable service.</li>
        </ol>

        <h3>9. Joint Injections</h3>
        <ol>
          <li>Select arthrocentesis or injection codes by joint category: small, intermediate, or major.</li>
          <li>Major-joint examples include the shoulder, hip, and knee.</li>
          <li>Codes with ultrasound guidance require permanent recording and reporting when documented by the descriptor.</li>
          <li>Do not separately report imaging guidance when it is included in the injection code or when a code-specific exclusion applies.</li>
        </ol>

        <h3>10. Spine, Arthrodesis, and Instrumentation</h3>
        <ol>
          <li>Bone grafting is reported separately with arthrodesis when the code guidelines allow it. Do not append modifier 62 to bone-graft codes.</li>
          <li>Instrumentation is reported separately in addition to the definitive vertebral procedure when the code guidelines allow it.</li>
          <li>For anterior interbody arthrodesis, codes 22554-22558 describe a single interspace; use 22585 for each additional interspace.</li>
          <li>Additional spinal arthrodesis performed with another definitive procedure generally receives modifier 51, but designated add-on arthrodesis codes are not appended with modifier 51.</li>
          <li>Decompression performed only to prepare an interspace for fusion is not separately reported. Decompression performed for nerve or spinal-component relief may be separately reportable when the code guidelines support it.</li>
          <li>When two surgeons perform distinct parts of an eligible procedure as primary surgeons, modifier 62 may apply to the definitive procedure. Follow the specific exclusions for graft and instrumentation codes.</li>
        </ol>
      </Section>

      <Section title="🔥 20,000 Series Decision Tree">
        <ol>
          <li>Identify the body part: shoulder, elbow, wrist, hand, hip, femur, knee, tibia/fibula, ankle, or foot.</li>
          <li>Determine whether the approach was open or arthroscopic.</li>
          <li>For fractures, identify closed/open treatment, manipulation, and fixation.</li>
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
            <thead><tr><th style={styles.cell}>Priority</th><th style={styles.cell}>Topic</th><th style={styles.cell}>Importance</th></tr></thead>
            <tbody>{priorities.map(([topic, importance], index) => <tr key={topic}><td style={styles.cell}>{index + 1}</td><td style={styles.cell}>{topic}</td><td style={styles.cell}>{importance}</td></tr>)}</tbody>
          </table>
        </div>
      </Section>

      <Section title="🎯 Single Most Important Memory Rule">
        <p>For the 10,000 Series: <strong>DEPTH → AREA</strong></p>
        <h3 style={styles.highlight}>For the 20,000 Series: APPROACH → MANIPULATION → FIXATION</h3>
        <p>Extract these three elements from every orthopedic question to avoid common CPC mistakes.</p>
      </Section>

      <Link href="/cpt/surgery/20,000" style={styles.backLink}>← Back to 20,000 Series</Link>
    </main>
  );
}

const styles = {
  main: { padding: "40px", maxWidth: "1100px", margin: "auto" },
  header: { background: "linear-gradient(135deg, #2563eb, #7c3aed)", color: "white", padding: "45px", borderRadius: "20px", marginBottom: "30px" },
  section: { border: "1px solid #e5e7eb", borderRadius: "14px", padding: "25px", marginBottom: "24px", backgroundColor: "white", boxShadow: "0 3px 10px rgba(0,0,0,0.05)" },
  tip: { backgroundColor: "#eff6ff", borderLeft: "5px solid #2563eb", padding: "16px", marginTop: "16px", borderRadius: "6px" },
  highlight: { color: "#2563eb", fontSize: "24px" },
  table: { width: "100%", borderCollapse: "collapse" as const },
  cell: { border: "1px solid #d1d5db", padding: "10px", textAlign: "left" as const },
  backLink: { color: "#2563eb", fontWeight: "600" },
};
