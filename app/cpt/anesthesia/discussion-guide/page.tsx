import { DiscussionGuidePage, DGList, DGSteps, type DGTopic } from "../../surgery/_digestive/discussion-guide";
import type { Theme } from "../../surgery/_digestive/players";

const CYAN: Theme = { dark: "#0f172a", accent: "#0e7490", soft: "#ecfeff", border: "#cbeaf1", bg: "#f6f8fb", text: "#1b2233", muted: "#475569", light: "#a5f3fc" };

const topics: DGTopic[] = [
  {
    n: 1,
    title: "Organization of the Chapter",
    range: "00100–01999",
    items: [
      {
        q: "Be able to identify the organization of the Chapter (e.g., 00's is for anesthesia to procedures on the axial portion of the body)",
        approach: "Anesthesia codes are grouped anatomically, head to toe, then closed out by a handful of special categories that aren't tied to one body part.",
        answer: (
          <>
            <p style={{ margin: "0 0 8px" }}>The Anesthesia chapter (00100–01999) is organized by BODY AREA, running roughly head-to-toe, then closing with categories that cut across the whole body:</p>
            <DGList
              items={[
                "00100–00222 — Head",
                "00300–00352 — Neck",
                "00400–00474 — Thorax (Chest Wall and Shoulder Girdle)",
                "00500–00580 — Intrathoracic",
                "00600–00670 — Spine and Spinal Cord",
                "00700–00797 — Upper Abdomen",
                "00800–00882 — Lower Abdomen",
                "00902–00952 — Perineum",
                "01112–01173 — Pelvis (Except Hip)",
                "01200–01274 — Upper Leg, including Hip (Except Knee)",
                "01320–01444 — Knee and Popliteal Area",
                "01462–01522 — Lower Leg (Below Knee, Includes Ankle and Foot)",
                "01610–01680 — Shoulder and Axilla",
                "01710–01782 — Upper Arm and Elbow",
                "01810–01860 — Forearm, Wrist, and Hand",
                "01916–01942 — Radiological Procedures",
                "01951–01953 — Burn Excisions or Debridement",
                "01958–01969 — Obstetric",
                "01990–01999 — Other Procedures",
              ]}
            />
            <p style={{ margin: "8px 0 0" }}>Many anesthesia code descriptors are written as &ldquo;NOS&rdquo; (not otherwise specified) because a single anesthesia code often covers several different surgical procedures performed in that same anatomic area — you don&apos;t crosswalk one surgical code to one anesthesia code the way you might expect; you crosswalk it to whichever anesthesia code&apos;s descriptor best matches the anatomic area and type of work.</p>
          </>
        ),
      },
    ],
  },
  {
    n: 2,
    title: "Packaged vs. Separately Reportable Services",
    range: "Anesthesia Guidelines — CPT Surgical/Anesthesia Package",
    items: [
      {
        q: "What services are packaged to the Anesthesia codes and will not be reported separately? What services are NOT packaged to the Anesthesia codes and may be reported separately?",
        approach: "The CPT guideline text spells this out almost word for word — the trick is remembering which few things sit on each side of the line, especially the 4 specific \"unusual monitoring\" codes.",
        answer: (
          <>
            <p style={{ margin: "0 0 10px" }}>Per the CPT Anesthesia Guidelines, every anesthesia code already includes: &ldquo;the usual preoperative and postoperative visits, the anesthesia care during the procedure, the administration of fluids and/or blood, and the usual monitoring services (eg, ECG, temperature, blood pressure, oximetry, capnography, and mass spectrometry).&rdquo;</p>
            <DGList
              items={[
                <><strong>Packaged (never billed separately):</strong> standard pre-op and post-op visits, anesthesia care during the procedure, IV fluid/blood administration, routine non-invasive monitoring (ECG, temperature, BP, oximetry, capnography, mass spectrometry), and local anesthesia (which is part of the surgical package, not the anesthesia service, and is never reported with an anesthesia code at all).</>,
                <><strong>Not packaged (separately reportable when the anesthesia provider performs them):</strong> &ldquo;Unusual forms of monitoring&rdquo; are explicitly excluded from the package — intra-arterial (36620, arterial line), central venous (36555 patient &lt;5 years / 36556 patient 5+ years, non-tunneled central catheter), and Swan-Ganz (93503, pulmonary artery catheter). Also separately billable: 31500, emergency endotracheal intubation — but ONLY when the patient was not already scheduled for anesthesia (routine intubation for a planned anesthesia case is bundled).</>,
              ]}
            />
          </>
        ),
        codes: [
          ["36620", "Arterial line placement"],
          ["36555 / 36556", "Non-tunneled central catheter — under 5 / 5 and older"],
          ["93503", "Swan-Ganz (pulmonary artery) catheter insertion"],
          ["31500", "Emergency intubation (only if not already having anesthesia)"],
        ],
      },
    ],
  },
  {
    n: 3,
    title: "Type of Anesthesia & MAC",
    range: "Anesthesia Guidelines — Types of Anesthesia",
    items: [
      {
        q: "What type of anesthesia is being reported by the Anesthesia codes? How is Monitored Anesthesia Care (MAC) reported?",
        approach: "The 00100–01999 codes themselves are type-agnostic — the same code can represent general, regional, OR MAC for that body area. What changes with MAC is the modifier/documentation, not the base code.",
        answer: (
          <>
            <p style={{ margin: "0 0 8px" }}>The anesthesia codes (00100–01999) may represent <strong>general anesthesia, regional anesthesia (spinal, epidural, or nerve block), or Monitored Anesthesia Care (MAC)</strong> — the same body-area code is used regardless of which of the three was provided; the type is captured through documentation and modifiers, not a different code family.</p>
            <p style={{ margin: 0 }}><strong>MAC is reported</strong> using the standard anesthesia code for that body area/procedure, appending modifier <strong>QS</strong> (monitored anesthesia care service) — and, where applicable, G8 (MAC for a deep, complex, complicated, or markedly invasive procedure) or G9 (MAC for a patient with a history of severe pulmonary disease) in place of QS, since QS is not reported separately alongside G8/G9. MAC requires a qualified anesthesia provider with the ability to convert to general anesthesia if necessary, and the patient does not lose consciousness — remaining arousable and able to maintain an open airway independently.</p>
          </>
        ),
        codes: [
          ["QS", "Monitored anesthesia care service"],
          ["G8", "MAC for deep, complex, complicated, or markedly invasive procedure"],
          ["G9", "MAC for patient with severe pulmonary disease history"],
        ],
      },
    ],
  },
  {
    n: 4,
    title: "Moderate Conscious Sedation vs. MAC",
    range: "99151–99157",
    items: [
      {
        q: "What is Moderate Conscious Sedation? How is moderate sedation reported? What makes for the difference between moderate sedation and MAC?",
        approach: "Two questions decide this every time: (1) who is giving the sedation, and (2) is there an anesthesia machine/backup plan for converting to general anesthesia.",
        answer: (
          <>
            <p style={{ margin: "0 0 8px" }}>Moderate (conscious) sedation is sedation provided without an anesthesia machine or a back-up plan for converting to general anesthesia — it does NOT include minimal sedation (anxiolysis), deep sedation, or MAC. It can be provided by a physician OTHER than the surgeon (such as an anesthesiologist), or by the same physician/QHP who is also performing the procedure requiring sedation.</p>
            <DGSteps
              items={[
                <>If the physician performing the diagnostic/therapeutic procedure ALSO personally provides the moderate sedation, report <strong>99151–99153</strong> (split by patient age and additional time increments).</>,
                <>If a SECOND physician (not the one doing the procedure) provides moderate sedation in a facility setting (hospital, ASC, skilled nursing facility), that second physician reports <strong>99155–99157</strong>.</>,
                <>In a NON-facility setting (physician office, freestanding imaging center), 99155–99157 would not be reported for that second-physician scenario.</>,
              ]}
            />
            <p style={{ margin: "8px 0 0" }}><strong>The difference from MAC:</strong> MAC is provided only by a qualified anesthesia provider using the 00100–01999 anesthesia codes, with an anesthesia machine and the ability to convert to general anesthesia on hand. Moderate sedation has neither of those — no anesthesia machine, no conversion back-up — and is coded from an entirely separate family (99151–99157), not the anesthesia chapter at all.</p>
          </>
        ),
        codes: [
          ["99151–99153", "Moderate sedation, same physician performing the procedure"],
          ["99155–99157", "Moderate sedation, different (second) physician, facility setting"],
        ],
      },
    ],
  },
  {
    n: 5,
    title: "Modifiers & Sequencing",
    range: "CPT Modifiers 23/47/53/59 · HCPCS Level II AA/AD/QK/QY/QX/QZ/GC/QS/G8/G9",
    items: [
      {
        q: "How do modifiers work with Anesthesia services? How are multiple modifiers appended to the Anesthesia service codes sequenced?",
        approach: "Split modifiers into two families first — CPT (Level I) vs. HCPCS Level II — then apply the 3-position sequencing rule for combining them on one line.",
        answer: (
          <>
            <p style={{ margin: "0 0 8px" }}><strong>CPT modifiers</strong> that apply to anesthesia: 23 (Unusual Anesthesia — appended to the anesthesia code when a procedure that normally needs no or local anesthesia instead requires general anesthesia due to unusual circumstances; used only by anesthesiologists/CRNAs); 47 (Anesthesia by Surgeon — appended to the SURGICAL code, not the anesthesia code, when the operating surgeon personally provides regional or general anesthesia); 53 (Discontinued Procedure); 59 (Distinct Procedural Service).</p>
            <p style={{ margin: "0 0 8px" }}><strong>HCPCS Level II modifiers</strong> identify who performed the service and the direction/supervision arrangement: AA (personally performed by anesthesiologist), AD (medical supervision, 5+ concurrent cases), QK (medical direction, 2–4 concurrent cases), QY (medical direction of one CRNA), QX (CRNA service, with medical direction), QZ (CRNA service, without medical direction), GC (performed in part by a resident under teaching-physician direction), QS (MAC service).</p>
            <p style={{ margin: "0 0 8px" }}><strong>Sequencing multiple modifiers</strong> on one anesthesia line follows a fixed 3-position order: 1st position = medical direction modifiers (AA, AD, QK, QY, QX, QZ); 2nd position = modifiers affecting payment, including the physical status modifier (P1–P6) or MAC (QS); 3rd position = other anesthesia-related modifiers. Example: <code>00142-QK-QS-P3</code> — medical direction of 2–4 concurrent cases, MAC flagged, patient physical status P3, in that exact order.</p>
            <p style={{ margin: 0 }}>The physical status modifier itself is a "2nd position" payment modifier because, for non-Medicare payers, it adds extra units on top of base + time: P1/P2/P6 add 0 units, P3 adds 1 unit, P4 adds 2 units, and P5 adds 3 units.</p>
          </>
        ),
        codes: [
          ["23", "Unusual Anesthesia (on the anesthesia code)"],
          ["47", "Anesthesia by Surgeon (on the surgical code)"],
          ["AA / QK / QY / QX / QZ / AD", "Provider & direction/supervision modifiers"],
        ],
      },
    ],
  },
  {
    n: 6,
    title: "Qualifying Circumstances",
    range: "+99100 · +99116 · +99135 · +99140",
    items: [
      {
        q: "What qualifying circumstances must be considered when reporting Anesthesia services? What codes are used to represent these qualifying circumstances?",
        approach: "These are add-on codes only — they never stand alone, they reflect a specific difficult condition/factor, and more than one can apply to the same case.",
        answer: (
          <>
            <p style={{ margin: "0 0 8px" }}>Qualifying circumstances reflect anesthesia services performed under particularly difficult circumstances — extraordinary patient condition, notable operative conditions, and/or unusual risk factors. They are reported as ADD-ON codes qualifying a primary anesthesia procedure — never reported alone — and documentation must support each one assigned. <strong>More than one qualifying circumstance may be selected</strong> for a single case.</p>
            <DGList
              items={[
                <><strong>+99100</strong> — Anesthesia for a patient of extreme age: younger than 1 year, or older than 70.</>,
                <><strong>+99116</strong> — Anesthesia complicated by utilization of total body hypothermia.</>,
                <><strong>+99135</strong> — Anesthesia complicated by utilization of controlled hypotension.</>,
                <><strong>+99140</strong> — Anesthesia complicated by emergency conditions (specify) — an emergency exists when delay in treatment would lead to a significant increase in the threat to life or body part.</>,
              ]}
            />
          </>
        ),
        codes: [
          ["+99100", "Extreme age (<1 or >70)"],
          ["+99116", "Total body hypothermia"],
          ["+99135", "Controlled hypotension"],
          ["+99140", "Emergency conditions"],
        ],
      },
    ],
  },
];

export default function AnesthesiaDiscussionGuidePage() {
  return (
    <DiscussionGuidePage
      theme={CYAN}
      kicker="ANESTHESIA SERIES · DISCUSSION GUIDE"
      title="CPT Anesthesia Discussion Guide — Answered"
      blurb="Every question from the training discussion guide, answered step by step and checked against the CPT 2026 codebook and this series' Guidelines Reviewer."
      nav={[
        { href: "/cpt/anesthesia", label: "Anesthesia home" },
        { href: "/cpt/anesthesia/guidelines-reviewer", label: "Guidelines Reviewer" },
        { href: "/cpt/anesthesia/schematic", label: "Schematic (visual map)" },
        { href: "/cpt", label: "CPT home" },
      ]}
      backHref="/cpt/anesthesia"
      backLabel="← Back to Anesthesia"
      topics={topics}
      approach={[
        "Read each question with the reviewer open alongside it — every answer here maps directly to a numbered section in the Guidelines Reviewer.",
        "The exam rewards understanding the PACKAGE (bundled vs. billable), TIME, and MODIFIERS far more than memorizing individual body-area codes — focus your review there first.",
        "Check the code chips under each answer for the specific codes tied to that question, then confirm you can rebuild the answer from scratch without looking.",
      ]}
      sourceNote="Answers are paraphrased from the CPT 2026 Anesthesia Guidelines (package definition, time reporting, physical status modifiers, and qualifying circumstances are quoted or closely paraphrased from the codebook's own guideline text) and cross-checked against this series' Guidelines Reviewer. HCPCS Level II modifier definitions (AA/AD/QK/QY/QX/QZ/GC/QS/G8/G9) and the medical direction/supervision rules are CMS policy, not CPT guideline text, and are presented as such."
    />
  );
}
