import Link from "next/link";

const mainStyle = { maxWidth: "1120px", margin: "0 auto", padding: "36px 24px 64px", minHeight: "100vh", background: "#f6f8fb", color: "#1b2233", fontFamily: "Arial, sans-serif" };
const heroStyle = { background: "linear-gradient(135deg, #0f172a, #0e7490)", color: "white", padding: "48px 44px", borderRadius: "18px", marginBottom: "26px", boxShadow: "0 12px 28px rgba(14,116,144,0.25)" };
const kickerStyle = { margin: "0 0 10px", color: "#a5f3fc", fontWeight: 800, letterSpacing: "0.08em" };
const navStyle = { display: "flex", flexWrap: "wrap" as const, gap: "10px", marginBottom: "26px" };
const navLinkStyle = { textDecoration: "none", color: "#0e7490", background: "#ffffff", border: "1px solid #cbeaf1", borderRadius: "999px", padding: "10px 15px", fontWeight: 700, fontSize: "14px" };
const introStyle = { background: "#ecfeff", border: "1px solid #a5f3fc", borderLeft: "7px solid #0e7490", borderRadius: "12px", padding: "22px 24px", marginBottom: "30px", lineHeight: 1.7 };
const sectionStyle = { background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "14px", padding: "26px 28px", marginBottom: "20px", boxShadow: "0 5px 16px rgba(15,23,42,0.06)" };
const sectionHeaderStyle = { display: "flex", alignItems: "center", gap: "14px", marginBottom: "14px", flexWrap: "wrap" as const };
const sectionNumberStyle = { background: "#0e7490", color: "#fff", width: "36px", height: "36px", minWidth: "36px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: "15px" };
const sectionTitleStyle = { margin: 0, fontSize: "21px", color: "#0f172a", lineHeight: 1.3 };
const pStyle = { lineHeight: 1.75, margin: "0 0 10px" };
const hackStyle = { background: "#f0fdf4", border: "1px solid #bbf7d0", borderLeft: "5px solid #16a34a", borderRadius: "10px", padding: "14px 16px", margin: "14px 0", lineHeight: 1.65 };
const trapStyle = { background: "#fef2f2", border: "1px solid #fecaca", borderLeft: "5px solid #dc2626", borderRadius: "10px", padding: "14px 16px", margin: "14px 0", lineHeight: 1.65 };
const quoteStyle = { background: "#f8fafc", border: "1px dashed #cbd5e1", borderRadius: "10px", padding: "14px 16px", margin: "14px 0", lineHeight: 1.65, fontStyle: "italic" as const, color: "#334155" };
const codeListStyle = { listStyle: "none", padding: 0, margin: "12px 0", display: "grid", gap: "8px" };
const codeItemStyle = { display: "flex", gap: "12px", alignItems: "baseline", background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "8px", padding: "9px 14px", flexWrap: "wrap" as const };
const codeChipStyle = { fontWeight: 800, color: "#0e7490", minWidth: "84px", fontFamily: "Consolas, monospace" };
const tableStyle = { width: "100%", borderCollapse: "collapse" as const, marginTop: "12px" };
const thStyle = { border: "1px solid #e2e8f0", padding: "10px 12px", textAlign: "left" as const, fontSize: "14px", background: "#f0fdff", color: "#0e7490" };
const tdStyle = { border: "1px solid #e2e8f0", padding: "10px 12px", textAlign: "left" as const, fontSize: "14px" };
const mustKnowGroupStyle = { marginBottom: "16px" };
const mustKnowTitleStyle = { margin: "0 0 8px", color: "#0e7490", fontSize: "16px", fontWeight: 800 };
const backLinkStyle = { textDecoration: "none", color: "#0e7490", fontWeight: 700 };
const formulaStyle = { fontWeight: 800, textAlign: "center" as const, fontSize: "18px", color: "#0e7490", background: "#f0fdff", border: "1px solid #a5f3fc", borderRadius: "10px", padding: "16px", margin: "12px 0" };

function Section({ n, title, range, children }: { n: string | number; title: string; range?: string; children: React.ReactNode }) {
  return (
    <section style={sectionStyle}>
      <div style={sectionHeaderStyle}>
        <span style={sectionNumberStyle}>{n}</span>
        <h2 style={sectionTitleStyle}>{title}</h2>
        {range && <span style={{ background: "#ecfeff", border: "1px solid #a5f3fc", color: "#0e7490", borderRadius: "999px", padding: "3px 11px", fontWeight: 800, fontSize: "12.5px", fontFamily: "Consolas, monospace" }}>{range}</span>}
      </div>
      {children}
    </section>
  );
}

function Hack({ children }: { children: React.ReactNode }) {
  return <div style={hackStyle}><strong>🧠 Memory hack:</strong> {children}</div>;
}

function Trap({ children }: { children: React.ReactNode }) {
  return <div style={trapStyle}><strong>🟥 CPC trap:</strong> {children}</div>;
}

function Quote({ children }: { children: React.ReactNode }) {
  return <div style={quoteStyle}>&ldquo;{children}&rdquo;</div>;
}

function CodeList({ items }: { items: [string, string][] }) {
  return (
    <ul style={codeListStyle}>
      {items.map(([code, desc]) => (
        <li key={code} style={codeItemStyle}>
          <code style={codeChipStyle}>{code}</code>
          <span>{desc}</span>
        </li>
      ))}
    </ul>
  );
}

function AnatomyTable() {
  const rows: [string, string][] = [
    ["00100–00222", "Head"],
    ["00300–00352", "Neck"],
    ["00400–00474", "Thorax (Chest Wall and Shoulder Girdle)"],
    ["00500–00580", "Intrathoracic"],
    ["00600–00670", "Spine and Spinal Cord"],
    ["00700–00797", "Upper Abdomen"],
    ["00800–00882", "Lower Abdomen"],
    ["00902–00952", "Perineum"],
    ["01112–01173", "Pelvis (Except Hip)"],
    ["01200–01274", "Upper Leg, including Hip (Except Knee)"],
    ["01320–01444", "Knee and Popliteal Area"],
    ["01462–01522", "Lower Leg (Below Knee, Includes Ankle and Foot)"],
    ["01610–01680", "Shoulder and Axilla"],
    ["01710–01782", "Upper Arm and Elbow"],
    ["01810–01860", "Forearm, Wrist, and Hand"],
    ["01916–01942", "Radiological Procedures"],
    ["01951–01953", "Burn Excisions or Debridement"],
    ["01958–01969", "Obstetric"],
    ["01990–01999", "Other Procedures"],
  ];
  return (
    <div style={{ overflowX: "auto" }}>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Code range</th>
            <th style={thStyle}>Body area</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([range, area]) => (
            <tr key={range}>
              <td style={{ ...tdStyle, fontFamily: "Consolas, monospace", fontWeight: 800, color: "#0e7490" }}>{range}</td>
              <td style={tdStyle}>{area}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ModifierTable({ rows, headers }: { rows: [string, string, string][]; headers: [string, string, string] }) {
  return (
    <div style={{ overflowX: "auto" }}>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>{headers[0]}</th>
            <th style={thStyle}>{headers[1]}</th>
            <th style={thStyle}>{headers[2]}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[0]}>
              {row.map((cell, i) => (
                <td key={i} style={i === 0 ? { ...tdStyle, fontFamily: "Consolas, monospace", fontWeight: 800, color: "#0e7490" } : tdStyle}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function MustKnowGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div style={mustKnowGroupStyle}>
      <h3 style={mustKnowTitleStyle}>{title}</h3>
      <ul style={{ margin: 0, paddingLeft: "22px", lineHeight: 1.8 }}>
        {items.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </div>
  );
}

export default function AnesthesiaGuidelinesReviewerPage() {
  return (
    <main style={mainStyle}>
      <header style={heroStyle}>
        <p style={kickerStyle}>ANESTHESIA SERIES · GUIDELINES REVIEWER</p>
        <h1 style={{ margin: 0, fontSize: "clamp(32px, 6vw, 56px)" }}>CPT Anesthesia Reviewer</h1>
        <p style={{ margin: "12px 0 0", fontSize: "20px", lineHeight: 1.5 }}>Codes 00100–01999 — the whole Anesthesia chapter in one walkthrough</p>
      </header>

      <nav aria-label="Anesthesia navigation" style={navStyle}>
        <Link href="/cpt/anesthesia" style={navLinkStyle}>Anesthesia home</Link>
        <Link href="/cpt/anesthesia/discussion-guide" style={navLinkStyle}>Discussion Guide</Link>
        <Link href="/cpt/anesthesia/schematic" style={navLinkStyle}>Schematic (visual map)</Link>
        <Link href="/cpt" style={navLinkStyle}>CPT home</Link>
      </nav>

      <section style={introStyle}>
        <strong>How to use this reviewer:</strong> Anesthesia is a small chapter (only ~270 codes) but a conceptually dense one — the exam tests whether you understand the PACKAGE (what&apos;s bundled vs. billable), TIME (how it&apos;s measured and paid), MODIFIERS (physical status + qualifying circumstances + who performed the service), and the DIRECTION/SUPERVISION rules, far more than it tests memorizing individual anatomic codes. Master the six concepts below and the code selection itself becomes easy — it&apos;s almost always &ldquo;pick the anatomic area, then apply the concepts.&rdquo;
      </section>

      <Section n={1} title="First: Understand the Chapter" range="00100–01999">
        <p style={pStyle}>Anesthesia codes are grouped <strong>anatomically</strong>, running roughly head-to-toe, the same top-to-bottom logic every CPT chapter follows. Many descriptors include &ldquo;NOS&rdquo; (not otherwise specified), since one anesthesia code often covers several different surgical procedures performed in that same body area.</p>
        <AnatomyTable />
        <Hack>You don&apos;t need to memorize every boundary number — you need to recognize the ORDER (head → neck → thorax → spine → abdomen → pelvis/perineum → leg → arm → special categories) so you can narrow a scenario to the right neighborhood fast.</Hack>
      </Section>

      <Section n={2} title="The Anesthesia Package — What's Bundled vs. Billable">
        <p style={pStyle}>This is the single highest-yield concept in the whole chapter, and it is stated directly in the CPT Anesthesia Guidelines:</p>
        <Quote>These services include the usual preoperative and postoperative visits, the anesthesia care during the procedure, the administration of fluids and/or blood, and the usual monitoring services (eg, ECG, temperature, blood pressure, oximetry, capnography, and mass spectrometry). Unusual forms of monitoring (eg, intra-arterial, central venous, and Swan-Ganz) are not included.</Quote>
        <p style={pStyle}><strong>Bundled into every anesthesia code — never billed separately:</strong></p>
        <CodeList items={[
          ["—", "Standard pre-op and post-op visits"],
          ["—", "Anesthesia care during the procedure itself"],
          ["—", "Administration of IV fluids and/or blood products"],
          ["—", "Routine (non-invasive) monitoring: ECG, temperature, blood pressure, pulse oximetry, capnography, mass spectrometry"],
          ["—", "Local anesthesia — never reported with an anesthesia code; it's part of the surgical package, not the anesthesia service"],
        ]} />
        <p style={pStyle}><strong>NOT bundled — reported separately when the anesthesia provider performs them:</strong></p>
        <CodeList items={[
          ["31500", "Emergency endotracheal intubation — only when the patient is NOT already undergoing anesthesia for a planned procedure. Routine intubation for a patient already headed to anesthesia is bundled into the base value."],
          ["36620", "Arterial line — percutaneous placement of a catheter into the radial artery"],
          ["36555 / 36556", "Insertion of a non-tunneled central venous catheter — 36555 for patients younger than 5 years, 36556 for patients 5 years and older"],
          ["93503", "Insertion of a pulmonary artery (Swan-Ganz) catheter"],
        ]} />
        <Trap>Don&apos;t bill routine intubation separately just because it happened — the ONLY time 31500 is separately reportable by the anesthesia provider is a true emergency intubation on a patient who was not already going to anesthesia. If the patient was already being prepped for the anesthesia service, intubation is part of the base value.</Trap>
      </Section>

      <Section n={3} title="Types of Anesthesia">
        <p style={pStyle}>There are three primary types you need to distinguish instantly:</p>
        <CodeList items={[
          ["General", "Produces a state of unconsciousness by affecting the brain, using anesthetic agents"]  as [string, string],
          ["Regional", "Loss of sensation in a region of the body — spinal anesthesia, epidural anesthesia, or a nerve block/local nerve block"],
          ["Monitored Anesthesia Care (MAC)", "The patient is placed in light or no sedation together with local anesthesia; the patient remains responsive and breathes independently"],
        ]} />
        <p style={pStyle}>To report regional or general anesthesia provided by the same physician who is also performing the surgical procedure, append <strong>modifier 47</strong> to the surgical code (see Section 7) — this is explicitly cross-referenced in the CPT Anesthesia Guidelines.</p>
      </Section>

      <Section n={4} title="Moderate Sedation vs. MAC — The Classic Distinction">
        <p style={pStyle}>This is one of the most commonly tested contrasts on the CPC exam, and it comes down to who performs the sedation and how deep it goes.</p>
        <CodeList items={[
          ["Moderate (conscious) sedation", "99151–99157 — can be provided by a physician OTHER than a surgeon (such as an anesthesiologist), OR by the same physician/QHP performing the procedure requiring the sedation. Coded by whether the same or a different physician provides it, and — for a different-physician facility case — by patient age and time."],
          ["Monitored Anesthesia Care (MAC)", "Provided ONLY by a qualified anesthesia provider using the standard anesthesia codes (00100–01999)"],
        ]} />
        <p style={pStyle}><strong>MAC requires:</strong> a qualified anesthesia provider, and the ability to convert to general anesthesia if necessary.</p>
        <p style={pStyle}><strong>MAC still has the patient:</strong> NOT losing consciousness, remaining arousable, and able to maintain an open airway independently.</p>
        <p style={pStyle}><strong>Moderate sedation is provided:</strong> without an anesthesia machine or a back-up plan for general-anesthesia conversion, and it does NOT include minimal sedation (anxiolysis), deep sedation, or MAC.</p>
        <p style={pStyle}>When the physician performing the diagnostic/therapeutic procedure ALSO personally provides the moderate sedation, see 99151–99153. When a SECOND physician (other than the one performing the procedure) provides moderate sedation in a facility setting (hospital, ASC, skilled nursing facility), that second physician reports 99155–99157. In a NON-facility setting (office, freestanding imaging center), 99155–99157 would not be reported.</p>
        <Hack>Ask two questions in order: (1) Who is providing the sedation — the same doctor doing the procedure, or a separate provider? (2) Is the patient still arousable and breathing on their own (moderate sedation / MAC), or fully unconscious (general)? That combination tells you the code family before you ever look at a body-part code.</Hack>
      </Section>

      <Section n={5} title="Anesthesia Time — How It's Measured and Paid">
        <p style={pStyle}>Anesthesia time begins when the anesthesiologist begins to prepare the patient for induction of anesthesia in the operating room (or an equivalent area), and ends when the anesthesiologist is no longer in personal attendance — that is, when the patient may safely be placed under postoperative supervision. Time does not need to be continuous, and it may be reported as is customary in the local area.</p>
        <p style={pStyle}><strong>Medicare specifically requires the exact time</strong> and processes payment based on 15-minute increments (fractional units are calculated, not rounded up to a whole increment).</p>
        <p style={pStyle}><strong>Worked example:</strong> Time start 11:02, time end 11:59 → total time 00:57 (57 minutes). Medicare divides 57 minutes by 15-minute increments → a total TIME value of 3.8 units.</p>
        <p style={pStyle}><strong>Payment formulas</strong> — this is unique to anesthesia and unlike any other CPT chapter&apos;s reimbursement logic:</p>
        <div style={formulaStyle}>Medicare: (BASE + TIME) × CONVERSION FACTOR</div>
        <div style={formulaStyle}>Non-Medicare: (BASE + TIME + PHYSICAL STATUS MODIFIER + QUALIFYING CIRCUMSTANCES) × CONVERSION FACTOR</div>
        <Trap>Medicare&apos;s formula leaves OUT the physical status modifier and qualifying-circumstance values entirely — those only add extra units under non-Medicare/commercial payer rules. Don&apos;t assume every payer adds P-modifier or QC units the same way.</Trap>
      </Section>

      <Section n={6} title="Physical Status Modifiers">
        <p style={pStyle}>Represented by the letter &ldquo;P&rdquo; followed by a single digit 1–6, consistent with the American Society of Anesthesiologists (ASA) ranking. Physical status distinguishes the complexity of the anesthesia service — quoted directly from the CPT guidelines:</p>
        <ModifierTable
          headers={["Modifier", "Definition", "Extra value (non-Medicare)"]}
          rows={[
            ["P1", "A normal healthy patient", "0 units"],
            ["P2", "A patient with mild systemic disease", "0 units"],
            ["P3", "A patient with severe systemic disease", "1 unit"],
            ["P4", "A patient with severe systemic disease that is a constant threat to life", "2 units"],
            ["P5", "A moribund patient who is not expected to survive without the operation", "3 units"],
            ["P6", "A declared brain-dead patient whose organs are being removed for donor purposes", "0 units"],
          ]}
        />
        <p style={pStyle}>Example format: <code style={{ fontFamily: "Consolas, monospace" }}>00100-P1</code>.</p>
      </Section>

      <Section n={7} title="Qualifying Circumstances">
        <p style={pStyle}>Add-on codes that reflect anesthesia services performed under particularly difficult circumstances — extraordinary patient condition, notable operative conditions, and/or unusual risk factors. These are never reported alone; they always qualify a primary anesthesia code, and documentation must support the assignment. <strong>More than one qualifying circumstance may be selected</strong> for the same case.</p>
        <ModifierTable
          headers={["Code", "Circumstance", "Extra value (units)"]}
          rows={[
            ["+99100", "Anesthesia for a patient of extreme age — younger than 1 year and older than 70", "1"],
            ["+99116", "Anesthesia complicated by utilization of total body hypothermia", "5"],
            ["+99135", "Anesthesia complicated by utilization of controlled hypotension", "5"],
            ["+99140", "Anesthesia complicated by emergency conditions (specify) — an emergency exists when delay in treatment would lead to a significant increase in the threat to life or body part", "2"],
          ]}
        />
      </Section>

      <Section n={8} title="Anesthesia Modifiers — CPT (Modifier Level I)">
        <CodeList items={[
          ["23", "Unusual Anesthesia — a procedure that usually requires either no anesthesia or local anesthesia must be performed under general anesthesia due to unusual circumstances. Used only by anesthesiologists and CRNAs, appended to the anesthesia code."],
          ["47", "Anesthesia by Surgeon — regional or general anesthesia provided BY THE SURGEON is reported by adding modifier 47 to the surgical procedure code (not an anesthesia code)."],
          ["53", "Discontinued Procedure — the physician or other QHP elects to terminate a surgical or diagnostic procedure due to extenuating circumstances or a threat to the patient's well-being. The usual procedure code is reported with modifier 53 added."],
          ["59", "Distinct Procedural Service — indicates a procedure/service distinct or independent from other non-E/M services performed the same day; identifies services not normally reported together but appropriate under the circumstances described."],
        ]} />
        <Trap>Modifier 47 goes on the SURGICAL code, not an anesthesia code — a very common mix-up. Modifier 23 works the opposite direction: it's appended to the anesthesia code to flag that anesthesia (typically general) was unusually necessary for a procedure that doesn't normally need it.</Trap>
      </Section>

      <Section n={9} title="Anesthesia Modifiers — HCPCS Level II">
        <p style={pStyle}>HCPCS Level II supplies the modifiers that identify WHO performed the anesthesia service and under what direction/supervision arrangement — CPT alone can&apos;t capture this, so these are essential for correct anesthesia claims.</p>
        <ModifierTable
          headers={["Modifier", "Meaning", "Provider scenario"]}
          rows={[
            ["AA", "Anesthesia services performed personally by anesthesiologist", "Anesthesiologist, solo"],
            ["AD", "Medical supervision by a physician: more than 4 concurrent anesthesia procedures", "Physician supervising 5+ cases"],
            ["QK", "Medical direction of 2, 3, or 4 concurrent anesthesia procedures involving qualified individuals", "Physician directing 2–4 cases"],
            ["QY", "Medical direction of one certified registered nurse anesthetist (CRNA) by an anesthesiologist", "1:1 physician + CRNA"],
            ["QX", "CRNA service, with medical direction by a physician", "CRNA side of a QK/QY pair"],
            ["QZ", "CRNA service, without medical direction by a physician", "CRNA acting independently"],
            ["GC", "This service has been performed in part by a resident, under the direction of a teaching physician", "Teaching setting"],
            ["QS", "Monitored anesthesia care service", "Flags a MAC claim; may be required by CMS/payers"],
            ["G8", "Monitored anesthesia care for a deep, complex, complicated, or markedly invasive surgical procedure", "MAC, specific procedure type"],
            ["G9", "Monitored anesthesia care for a patient with a history of severe pulmonary disease", "MAC, specific patient history"],
          ]}
        />
        <Trap>QX (CRNA WITH direction) and QZ (CRNA WITHOUT direction) are opposites — mixing them up flips the entire direction/supervision story for the claim. G8 and G9 are both MAC modifiers but for different reasons (procedure complexity vs. patient pulmonary history) — the QS modifier is NOT reported separately alongside G8 or G9, since MAC is already implied in those descriptions.</Trap>
      </Section>

      <Section n={10} title="Modifier Position & Sequencing">
        <p style={pStyle}>When multiple modifiers apply to a single anesthesia line, they are sequenced in a consistent order:</p>
        <ModifierTable
          headers={["Position", "Category", "Example"]}
          rows={[
            ["1st", "Medical direction modifiers (AA, AD, QK, QY, QX, QZ)", "AA"],
            ["2nd", "Modifiers affecting payment (physical status, e.g. P3) or MAC (QS)", "QS or P3"],
            ["3rd", "Other anesthesia-related modifiers", "—"],
          ]}
        />
        <CodeList items={[
          ["00910 — AA, P3, –", "Anesthesiologist performed personally, patient physical status P3"],
          ["00142 — QK, QS, P3", "Medical direction of 2–4 concurrent cases, MAC flagged, physical status P3"],
        ]} />
      </Section>

      <Section n={11} title="Direction, Supervision, and Monitoring">
        <p style={pStyle}><strong>Medical Direction</strong> exists when the anesthesiologist is involved in 2 to 4 CONCURRENT anesthesia procedures, OR is involved in a single procedure together with a qualified anesthetist (CRNA) or anesthesiologist assistant. Medical direction REQUIRES that ALL of the following are performed:</p>
        <ol style={{ lineHeight: 1.9, paddingLeft: "22px" }}>
          <li>Perform a pre-anesthetic examination and evaluation</li>
          <li>Prescribe the anesthesia plan</li>
          <li>Personally participate in the most demanding procedures of the anesthesia plan, including induction and emergence when applicable</li>
          <li>Ensure that any procedures in the anesthesia plan the physician does not personally perform are done by a qualified anesthetist</li>
          <li>Monitor the course of anesthesia administration at frequent intervals</li>
          <li>Remain physically present and available for immediate diagnosis and treatment of emergencies</li>
          <li>Provide the indicated post-anesthesia care</li>
        </ol>
        <Trap>If at least ONE of these seven services is not performed, the service is NOT considered medical direction — it falls back to medical supervision instead, even if the physician was only involved in 2–4 concurrent cases.</Trap>
        <p style={pStyle}>Medical direction PREVENTS the physician from providing other services to other patients — <strong>except</strong> for the following, which do not affect the ability to medically direct:</p>
        <CodeList items={[
          ["1", "Addressing an emergency of short duration in the immediate area"],
          ["2", "Administering an epidural or caudal anesthetic to ease labor pain"],
          ["3", "Periodic (rather than continuous) monitoring of an obstetrical patient"],
          ["4", "Receiving a patient entering the operating suite for the next surgery"],
          ["5", "Checking on or discharging patients from the post-anesthesia care unit (PACU)"],
          ["6", "Coordinating scheduling matters"],
        ]} />
        <p style={pStyle}><strong>Medical Supervision</strong> occurs when an anesthesiologist is involved in FIVE OR MORE concurrent anesthesia procedures at the same time, OR when the services fail to meet the seven requirements of medical direction above.</p>
        <Hack>2–4 concurrent + all 7 elements met = Medical Direction (QK/QY). 5+ concurrent, OR any of the 7 elements missing = Medical Supervision (AD).</Hack>
      </Section>

      <Section n={12} title="Separate or Multiple Procedures">
        <p style={pStyle}>ONLY ONE anesthesia code is reported during a single anesthesia administration — except when an anesthesia add-on code applies. When multiple surgical procedures are performed during a single anesthetic administration, only the anesthesia code representing the MOST COMPLEX procedure is reported (complexity corresponds to a higher base value). The time reported is the COMBINED total for all procedures performed under that anesthetic.</p>
        <CodeList items={[
          ["00830", "Anesthesia for inguinal hernia repair — base value 4"],
          ["00832", "Anesthesia for ventral hernia repair — base value 6"],
        ]} />
        <Trap>If both procedures are performed in the same operative session, only 00832 is reported (higher base value = more complex) — never both codes, and never the lower-value code alone.</Trap>
      </Section>

      <Section n={13} title="Supplies, Special Report, and Unlisted Procedure">
        <p style={pStyle}>Supplies and materials provided over and above those usually included with the anesthesia service (sterile trays, drugs) may be listed separately, identified with 99070 or the appropriate specific supply code.</p>
        <p style={pStyle}>A service that is rarely provided, unusual, variable, or new may require a Special Report — an adequate description of the nature, extent, and need for the procedure, plus the time, effort, and equipment required.</p>
        <CodeList items={[
          ["01999", "Unlisted anesthesia procedure(s) — used when the service isn't listed anywhere else in the codebook, supported by a Special Report"],
        ]} />
      </Section>

      <Section n={14} title="10 Steps to Coding Anesthesia Services">
        <ol style={{ lineHeight: 2, paddingLeft: "22px" }}>
          <li>Determine the appropriate CPT code(s) for the surgical procedure(s) performed</li>
          <li>Crosswalk the CPT code(s) to the appropriate ASA/anesthesia code</li>
          <li>Determine the appropriate number of base units</li>
          <li>Determine the appropriate number of time units</li>
          <li>Assign the appropriate modifier to identify the anesthesia provider (AA, QK, QY, QX, QZ, AD)</li>
          <li>Assign the appropriate modifier to identify MAC services, when appropriate (QS, G8, G9)</li>
          <li>Assign the appropriate physical status modifier (P1–P6)</li>
          <li>Assign the appropriate qualifying circumstance code(s), if applicable (+99100/+99116/+99135/+99140)</li>
          <li>Determine the appropriate CPT code(s) for any additional services or procedures performed (e.g., 31500, 36620, 36555/36556, 93503)</li>
          <li>Determine the total units for the anesthesia service (base + time [+ physical status + qualifying circumstances for non-Medicare])</li>
        </ol>
        <Hack>Walk this list top to bottom every time — the exam loves scenarios that bury a qualifying circumstance or a second billable procedure in the last sentence of the vignette. If you always finish at step 10, you won't drop points to a missed add-on.</Hack>
      </Section>

      <Section n="✓" title="Must-Know List">
        <p style={pStyle}>If you&apos;re short on study time, prioritize these:</p>
        <MustKnowGroup title="The package" items={[
          "Bundled: pre/post-op visits, intra-op care, fluids/blood, routine monitoring, local anesthesia",
          "Separate: 31500 (true emergency intubation only), 36620 (arterial line), 36555/36556 (central line, by age <5 vs 5+), 93503 (Swan-Ganz)",
        ]} />
        <MustKnowGroup title="Sedation vs. anesthesia" items={[
          "Moderate sedation 99151–99157 — physician other than the anesthesiologist, or same-physician self-administered",
          "MAC — qualified anesthesia provider only, patient stays arousable, can convert to general",
        ]} />
        <MustKnowGroup title="Time & payment" items={[
          "Time starts at prep for induction, ends when no longer in personal attendance",
          "Medicare: (BASE + TIME) × CF — no P-modifier or QC units",
          "Non-Medicare: (BASE + TIME + P-modifier + QC) × CF",
        ]} />
        <MustKnowGroup title="Modifiers" items={[
          "P1–P6 physical status (P3=1 unit, P4=2, P5=3, P1/P2/P6=0)",
          "+99100/+99116/+99135/+99140 qualifying circumstances — more than one may apply",
          "23 = unusual anesthesia (on the anesthesia code) vs. 47 = anesthesia by surgeon (on the surgical code)",
          "QX (CRNA with direction) vs. QZ (CRNA without direction) — opposites",
        ]} />
        <MustKnowGroup title="Direction vs. supervision" items={[
          "Medical direction: 2–4 concurrent + all 7 required elements",
          "Medical supervision: 5+ concurrent, or any of the 7 elements missing",
        ]} />
      </Section>

      <Section n="🧭" title="The Biggest CPC Strategy for Anesthesia">
        <p style={pStyle}>When you see an anesthesia question, don&apos;t start by hunting for a five-digit code. Run this sequence instead:</p>
        <div style={formulaStyle}>BODY AREA → TYPE OF ANESTHESIA/SEDATION → WHO PERFORMED IT → TIME → MODIFIERS → ANYTHING SEPARATELY BILLABLE</div>
        <p style={pStyle}><strong>Example:</strong> &ldquo;An anesthesiologist personally provides general anesthesia for an inguinal hernia repair on an 8-month-old. An arterial line is placed. Total time is 57 minutes. Patient has mild systemic disease.&rdquo;</p>
        <p style={pStyle}>Body area = groin/hernia → 00830. Who performed it = anesthesiologist solo → AA. Time = 57 min → time units per payer rule. Physical status = mild systemic disease → P2. Qualifying circumstance = patient younger than 1 year → +99100. Separately billable = arterial line → 36620.</p>
        <p style={pStyle}>Answer: <strong>00830-AA-P2, +99100, 36620</strong> — built piece by piece, not recalled as a memorized whole.</p>
      </Section>

      <div style={{ marginTop: "34px", display: "flex", flexWrap: "wrap" as const, gap: "16px" }}>
        <Link href="/cpt/anesthesia/discussion-guide" style={backLinkStyle}>Continue to the Discussion Guide →</Link>
        <Link href="/cpt/anesthesia" style={backLinkStyle}>← Back to Anesthesia home</Link>
      </div>
    </main>
  );
}
