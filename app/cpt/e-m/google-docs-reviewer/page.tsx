import Link from "next/link";
import { Highlightable, HighlightToolbar } from "../../surgery/_digestive/highlighter";

const cardStyle = {
  background: "#ffffff",
  border: "1px solid #d7e2df",
  borderRadius: "12px",
  padding: "20px",
  boxShadow: "0 4px 12px rgba(20,60,55,0.06)",
};

const codeGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "10px",
  marginTop: "14px",
};

const topics = [
  ["Office and outpatient", "99202-99205 and 99211-99215", "Choose new or established status, then select the level by documented medical decision making or qualifying total time."],
  ["Hospital and observation", "99221-99223, 99231-99233, 99234-99236", "Separate initial care, subsequent care, and same-day admission and discharge. Match the documented MDM level."],
  ["Consultations", "99242-99245 and 99252-99255", "A consultation requires a request from an appropriate source, an opinion or service, and communication back to the requesting source."],
  ["Emergency department", "99281-99285 and 99288", "The ED family does not distinguish between new and established patients. Select the level by MDM."],
  ["Critical care", "99291-99292 and age-based 99468-99476", "Identify setting, patient age, initial or subsequent service, and total critical-care time before choosing the code."],
  ["Nursing facility and home", "99304-99316 and 99341-99350", "Identify initial, subsequent, discharge, home, or residence service and apply the family-specific MDM or time rules."],
  ["Preventive medicine", "99381-99397 and 99401-99404", "Use patient status, age, and service purpose. Do not substitute a problem-oriented office visit for a preventive service."],
  ["Prolonged and standby", "99358-99360, 99417, and 99418", "Separate prolonged work on another date, prolonged time on the E/M date, and standby attendance."],
];

const checkpoints = [
  "Start with the place of service and identify the E/M code family.",
  "Determine whether the patient is new or established using the three-year rule when that rule applies.",
  "Check whether the service is initial, subsequent, discharge, consultation, preventive, critical care, or standby.",
  "Select the level using the applicable MDM or total-time guidance and the documentation in the record.",
  "Check parenthetical notes, bundled services, modifiers, and current-year CPT instructions before final assignment.",
];

function TopicCard({ id, title, codes, detail }: { id: string; title: string; codes: string; detail: string }) {
  return (
    <article style={{ ...cardStyle, borderTop: "5px solid #0f766e" }}>
      <h3 style={{ margin: "0 0 8px", color: "#0f766e", fontSize: "20px" }}>{title}</h3>
      <p style={{ margin: "0 0 10px", color: "#92400e", fontWeight: 800 }}>{codes}</p>
      <p style={{ margin: 0, lineHeight: 1.65 }}><Highlightable id={id} as="span">{detail}</Highlightable></p>
    </article>
  );
}

export default function EMGoogleDocsReviewerPage() {
  return (
    <main style={{ maxWidth: "1180px", margin: "0 auto", padding: "32px 24px 60px", color: "#17212b", background: "#f7faf9", minHeight: "100vh", fontFamily: "Arial, sans-serif" }}>
      <HighlightToolbar />
      <header style={{ background: "linear-gradient(135deg, #12343b, #0f766e)", color: "white", padding: "42px 44px", borderRadius: "18px", marginBottom: "28px", boxShadow: "0 12px 28px rgba(15,118,110,0.2)" }}>
        <p style={{ margin: "0 0 10px", color: "#b7f7e8", fontWeight: 700 }}>E/M SERIES | REVIEWER EDITION</p>
        <h1 style={{ fontSize: "clamp(36px, 6vw, 64px)", margin: 0 }}>Complete E/M Reviewer</h1>
        <p style={{ fontSize: "20px", lineHeight: 1.5, margin: "12px 0 0", maxWidth: "820px" }}>A consolidated, reviewer-friendly reference for the E/M topics and code families represented in the supplied study material.</p>
      </header>

      <nav aria-label="E/M pages" style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "28px" }}>
        <Link href="/cpt/e-m" style={navLinkStyle}>E/M home</Link>
        <Link href="/cpt/e-m/guidelines" style={navLinkStyle}>Original guidelines</Link>
        <Link href="/cpt/e-m/guidelines-quiz" style={navLinkStyle}>Practice quiz</Link>
      </nav>

      <section style={{ ...cardStyle, background: "#fff7df", borderColor: "#f2d58a", borderLeft: "7px solid #d97706", marginBottom: "30px" }}>
        <h2 style={{ margin: "0 0 10px", color: "#92400e" }}>How to use this reviewer</h2>
        <p style={{ margin: 0, lineHeight: 1.7 }}><Highlightable id="how-to-use" as="span">Use the code-family cards for fast review, then apply the five-step checkpoint to a coding question. This page organizes the supplied guideline material for study; confirm the current CPT manual, payer policy, and official guidance before assigning codes for a real claim.</Highlightable></p>
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h2 style={headingStyle}>Code-family map</h2>
        <div style={codeGridStyle}>
          {topics.map(([title, codes, detail], index) => <TopicCard key={title} id={`topic-${index}`} title={title} codes={codes} detail={detail} />)}
        </div>
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h2 style={headingStyle}>Core definitions</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "14px" }}>
          <article style={cardStyle}><h3 style={subheadingStyle}>New patient</h3><p style={paragraphStyle}><Highlightable id="def-newpt" as="span">A patient who has not received professional services from the physician, or another physician of the same specialty in the same group practice, within the past three years.</Highlightable></p><p style={tipStyle}><Highlightable id="def-newpt-tip" as="span">Memory aid: no qualifying service in the prior three years.</Highlightable></p></article>
          <article style={cardStyle}><h3 style={subheadingStyle}>Established patient</h3><p style={paragraphStyle}><Highlightable id="def-estpt" as="span">A patient who has received professional services from the physician, or another physician in the same group and same specialty, within the prior three years.</Highlightable></p><p style={tipStyle}><Highlightable id="def-estpt-tip" as="span">Memory aid: qualifying service within the prior three years.</Highlightable></p></article>
          <article style={cardStyle}><h3 style={subheadingStyle}>Consultation</h3><p style={paragraphStyle}><Highlightable id="def-consult" as="span">An E/M service provided at the request of another physician, qualified health care professional, or appropriate source to recommend care for a specific condition or problem. The opinion or ordered service must be communicated back.</Highlightable></p></article>
          <article style={cardStyle}><h3 style={subheadingStyle}>Critical care</h3><p style={paragraphStyle}><Highlightable id="def-critcare" as="span">Direct care for a critically ill or critically injured patient whose condition acutely impairs vital organ systems and creates a high probability of imminent or life-threatening deterioration.</Highlightable></p></article>
        </div>
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h2 style={headingStyle}>High-yield rules</h2>
        <div style={{ display: "grid", gap: "12px" }}>
          <Highlightable id="rule-1" as="div" style={ruleStyle}><strong>MDM and time:</strong> For code families that allow either method, select the level supported by the documented MDM or qualifying total time. Do not assume history and examination alone determine the level.</Highlightable>
          <Highlightable id="rule-2" as="div" style={ruleStyle}><strong>Outpatient to inpatient or observation:</strong> When a significant, separately identifiable outpatient service occurs before admission, report it with modifier 25 when supported, along with the initial inpatient or observation service. Do not use modifier 51 with E/M codes.</Highlightable>
          <Highlightable id="rule-3" as="div" style={ruleStyle}><strong>Same-day admission and discharge:</strong> Use 99234, 99235, or 99236 according to the documented MDM. Different-day discharge uses 99238 for 30 minutes or less and 99239 for more than 30 minutes.</Highlightable>
          <Highlightable id="rule-4" as="div" style={ruleStyle}><strong>Critical-care bundling:</strong> Services included in the critical-care guidelines are not separately reported by the physician providing critical care during that period. Review services performed before or after critical care separately when supported.</Highlightable>
          <Highlightable id="rule-5" as="div" style={ruleStyle}><strong>Prolonged services:</strong> Keep 99358-99359 for prolonged work without direct patient contact on another date separate from 99417 and 99418, which are prolonged-service add-ons used with eligible E/M services on the encounter date.</Highlightable>
          <Highlightable id="rule-6" as="div" style={ruleStyle}><strong>Standby:</strong> Code 99360 is reported in 30-minute units when the clinician remains available for a possible service and the patient does not ultimately require that clinician's care. Do not report it for less than 30 minutes.</Highlightable>
        </div>
      </section>

      <section style={{ ...cardStyle, borderTop: "6px solid #2563eb", marginBottom: "30px" }}>
        <h2 style={{ marginTop: 0, color: "#1d4ed8" }}>Five-step coding checkpoint</h2>
        <ol style={{ lineHeight: 1.8, paddingLeft: "24px", marginBottom: 0 }}>
          {checkpoints.map((checkpoint, index) => <li key={checkpoint}><Highlightable id={`checkpoint-${index}`} as="span">{checkpoint}</Highlightable></li>)}
        </ol>
      </section>

      <section style={{ background: "#17212b", color: "white", borderRadius: "14px", padding: "22px 24px", marginBottom: "30px" }}>
        <h2 style={{ margin: "0 0 10px", color: "#fbbf24" }}>Final memory line</h2>
        <p style={{ margin: 0, fontSize: "20px", lineHeight: 1.6 }}><Highlightable id="memory-line" as="span">SETTING - STATUS - SERVICE TYPE - MDM OR TIME - CPT GUIDELINES</Highlightable></p>
      </section>

      <Link href="/cpt/e-m" style={{ textDecoration: "none", color: "#0f766e", fontWeight: 700 }}>Back to E/M Series</Link>
    </main>
  );
}

const headingStyle = { fontSize: "30px", margin: "0 0 14px" };
const subheadingStyle = { margin: "0 0 8px", color: "#0f766e", fontSize: "20px" };
const paragraphStyle = { margin: 0, lineHeight: 1.65 };
const tipStyle = { margin: "14px 0 0", color: "#92400e", fontWeight: 700, lineHeight: 1.5 };
const ruleStyle = { background: "#e0f2fe", border: "1px solid #7dd3fc", borderRadius: "10px", padding: "16px 18px", lineHeight: 1.65 };
const navLinkStyle = { textDecoration: "none", color: "#0f766e", background: "#ffffff", border: "1px solid #b7d7d1", borderRadius: "999px", padding: "10px 14px", fontWeight: 700 };
