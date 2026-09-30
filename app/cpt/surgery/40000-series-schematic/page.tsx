import { SeriesSchematicPage, type SchematicNode } from "../_digestive/schematic";
import { ORANGE } from "../_digestive/players";

const nodes: SchematicNode[] = [
  {
    n: 1,
    title: "Chapter Map",
    range: "40490–49999",
    points: [
      "Grouped by organ, mouth to abdomen: lips/mouth (40K) → tongue/floor of mouth (41K) → palate/salivary/pharynx (42K) → esophagus/stomach (43K) → small intestine/appendix (44K) → colon/rectum (45K) → anus (46K) → liver/biliary (47K) → pancreas (48K) → abdomen/peritoneum/hernia (49K)",
      "ERCP (43260–43278) lives in the esophagus/stomach chapter (43K) — not liver (47K) or pancreas (48K), even though it images those ducts",
    ],
    callout: "Know the ORDER of body regions, not every boundary number.",
  },
  {
    n: 2,
    title: "Endoscopy Rules That Apply Everywhere",
    points: [
      "Code family = the farthest landmark the scope tip reached",
      "Route matters too — mouth/nose, anus, or a stoma each get their own code range",
      "Surgical (therapeutic) endoscopy always includes the diagnostic look — never report both",
      "'(s)' after tumor/polyp/lesion = one or many removed by that technique, reported once",
      "Exam cut short → modifier 52 (reduced) or 53 (discontinued), per that section's own rule",
    ],
    callout: "Ask \"how far did it go?\" before you ask \"what was done?\"",
  },
  {
    n: 3,
    title: "Esophagoscopy",
    range: "43180–43232",
    points: [
      "UES to the GE junction only — retroflexion into the upper stomach still counts as esophagoscopy",
      "Rigid transoral (43180–43196) vs. flexible transnasal (43197–43198) vs. flexible transoral (43200–43232, the biggest family)",
      "43200 is the diagnostic base; every therapeutic step builds on it",
    ],
    callout: "Scope reaches the stomach and duodenum → that's an EGD, not esophagoscopy.",
  },
  {
    n: 4,
    title: "EGD",
    range: "43235–43259 · 43233 · 43266 · 43270",
    points: [
      "Esophagus + stomach + pylorus + duodenum, or under 50 cm past the pylorus",
      "43235 is the diagnostic base — never reported with any therapeutic EGD code",
      "Duodenum skipped or unreachable → EGD code + modifier 52 (no repeat planned) or 53 (repeat planned)",
      "\"Esophagogastroscopy\" has no code of its own — it's an EGD code with a modifier",
    ],
    callout: "50 cm or more past the pylorus leaves the EGD family for enteroscopy.",
  },
  {
    n: 5,
    title: "Enteroscopy",
    range: "44360–44386",
    points: [
      "Antegrade, named by the most distal segment reached: jejunum only (44360–44373) or through the ileum (44376–44379)",
      "Ileoscopy through a stoma (44380–44384); pouch endoscopy, e.g. after a J-pouch (44385–44386)",
      "Not reported with EGD codes, or with each other — only the deepest reach of that pass counts",
    ],
  },
  {
    n: 6,
    title: "ERCP",
    range: "43260–43278 · +43273",
    points: [
      "Complete once AT LEAST ONE duct (biliary or pancreatic) is visualized — otherwise falls back to an EGD code",
      "43260 is the diagnostic base — never reported with a therapeutic ERCP code",
      "Stones: removal 43264 vs. destruction 43265 (destruction already includes removal)",
      "Stents counted per stent, modifier 59 only for separate ducts; removal (43275) is once per session no matter how many come out",
      "Sphincterotomy 43262 (cuts) vs. sphincteroplasty 43277 (stretches) — the stretch already includes the cut",
    ],
    callout: "Guidewire passage and dilation packaged with a stent are never billed separately.",
  },
  {
    n: 7,
    title: "Lower GI Endoscopy — the Four Scopes",
    range: "46600–46615 · 45300–45398 · 44380–44408",
    points: [
      "Shortest to longest reach: anoscopy → rigid proctosigmoidoscopy → flexible sigmoidoscopy (stops at/before the splenic flexure) → colonoscopy (rectum to cecum)",
      "Colonoscopy can also enter through a stoma (44388–44408)",
      "Same therapeutic ladder pattern repeats in every family: diagnostic → biopsy → foreign body → hot forceps → snare → bleeding → ablation → dilation → stent",
    ],
  },
  {
    n: 8,
    title: "Colonoscopy & Incomplete Exams",
    range: "45378–45398",
    points: [
      "45378 is the diagnostic base (includes brushing/washing) — never reported with a therapeutic colonoscopy code",
      "Match the tool: snare → 45385, hot biopsy forceps → 45384, cold biopsy forceps → 45380",
      "A planned total colonoscopy that falls short does NOT become a sigmoidoscopy code",
      "Incomplete DIAGNOSTIC exam → 45378-53; incomplete THERAPEUTIC exam → therapeutic code-52",
    ],
    callout: "The PLAN decides the family, not where the scope actually stopped.",
  },
  {
    n: 9,
    title: "Bariatric Surgery",
    range: "43644–43645 · 43770–43775 · 43842–43888",
    points: [
      "Pick the OPERATION first (band, sleeve, bypass, BPD-DS), then the APPROACH (laparoscopic vs. open)",
      "Gastric bypass splits by Roux limb length: 150 cm or less vs. more than 150 cm / with reconstruction",
      "Band procedures: was the COMPLETE SYSTEM (band + port) touched, or just ONE component?",
      "Post-op band adjustments (fluid in/out through the port) are bundled, not separately billable",
    ],
  },
  {
    n: 10,
    title: "Hernia Repair",
    range: "49491–49659",
    points: [
      "Inguinal/femoral/lumbar are sorted by AGE (inguinal alone has PCA tiers for preterm infants), then initial/recurrent, then reducible/incarcerated",
      "Anterior abdominal hernias (epigastric, incisional, ventral, umbilical, spigelian) are sorted by TOTAL DEFECT SIZE instead — one code set (49591–49618), any approach, mesh included since 2023",
      "Strangulated hernia with an organ removed or repaired → add 44120/54520/58940 only when that actually happened",
      "Only inguinal keeps separate laparoscopic codes (49650, 49651); anterior abdominal codes already cover any approach",
    ],
    callout: "PCA = gestational age at birth + weeks of life — but it only matters under 6 months old.",
  },
  {
    n: 11,
    title: "Hemorrhoid Treatment",
    range: "46020–46999",
    points: [
      "Pick the TREATMENT first — excise, ligate, inject, or destroy — then internal/external/both, then column count",
      "Single-column external hemorrhoidectomy has no dedicated code → unlisted 46999",
      "Scope-based band ligation uses the scope code (45350 or 45398), never a hemorrhoid code",
      "46221 (rubber band ligation) is not reported alongside those scope band-ligation codes",
    ],
  },
];

export default function DigestiveSchematicPage() {
  return (
    <SeriesSchematicPage
      theme={ORANGE}
      kicker="DIGESTIVE SYSTEM SERIES · STRATEGIC SCHEMATIC"
      title="The Digestive System at a Glance"
      blurb="The whole 40490–49999 chapter as one visual roadmap — endoscopy, ERCP, bariatric surgery, hernia repair, and hemorrhoid treatment, top to bottom."
      nav={[
        { href: "/cpt/surgery/40,000", label: "Digestive System home" },
        { href: "/cpt/surgery/40000-series-guidelines-reviewer", label: "Reviewer Pt. 1" },
        { href: "/cpt/surgery/40000-series-guidelines-reviewer-part-2", label: "Reviewer Pt. 2" },
        { href: "/cpt/surgery/40000-series-guidelines-reviewer-part-3", label: "Reviewer Pt. 3" },
        { href: "/cpt/surgery/40000-series-discussion-guide", label: "Discussion Guide" },
      ]}
      backHref="/cpt/surgery/40,000"
      backLabel="← Back to Digestive System"
      nodes={nodes}
      strategyTitle="The Rule That Repeats Across the Whole Chapter"
      strategyText={
        <>
          <p style={{ margin: "0 0 10px" }}>
            One principle governs almost every code choice from 40490 to 49999: a surgical (therapeutic) procedure always includes its own diagnostic look. Whether it&apos;s an EGD (43235 disappears once 43239 biopsies something), a colonoscopy (45378 disappears once 45385 snares a polyp), an ERCP (43260 disappears once 43264 pulls a stone), or a hernia repair (diagnostic laparoscopy is folded into surgical laparoscopy, so 49320 is never added to a laparoscopic hernia repair) — the moment the physician does something beyond looking, the base &quot;diagnostic&quot; code drops off the claim.
          </p>
          <p style={{ margin: "0 0 10px", fontWeight: 800, fontSize: "17px" }}>
            SITE/REACH → ROUTE → DIAGNOSTIC OR THERAPEUTIC → COUNT &amp; MODIFIER
          </p>
          <p style={{ margin: "0 0 10px" }}>
            Worked example: a colonoscopy is planned as total, but poor prep stops the scope at the descending colon — not before the doctor snares one polyp. <strong>Site/reach:</strong> colon, planned to the cecum. <strong>Route:</strong> through the rectum. <strong>Diagnostic or therapeutic:</strong> something was done — a snare removal — so the therapeutic code applies and the diagnostic base (45378) is never added. <strong>Count &amp; modifier:</strong> one polyp by one technique is reported once, and because a THERAPEUTIC exam fell short (not a diagnostic-only one), the modifier is 52, not 53.
          </p>
          <p style={{ margin: 0, fontWeight: 800 }}>Answer: 45385-52.</p>
        </>
      }
    />
  );
}
