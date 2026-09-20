import Link from "next/link";
import { SolvedCaseBox, type SolvedCase } from "../_cases/solved-case";
import { pacemakerCases } from "../_cases/cases-33000";

type CodeEntry = [string, string];
type Category = { name: string; codes: CodeEntry[] };
type Subsection = {
  n: number;
  title: string;
  range: string;
  intro?: string[];
  definitions?: [string, string][];
  steps?: string[];
  examples?: string[];
  categories: Category[];
  rules: string[];
  tips: string[];
  cases?: SolvedCase[];
};

const subsections: Subsection[] = [
  {
    n: 1,
    title: "Pericardium",
    range: "33016–33050",
    intro: [
      "A pericardial drainage code with an indwelling catheter (33017, 33018, 33019) only applies when the catheter is left in place at the end of the procedure — if fluid is aspirated and the catheter is then removed, use the simple pericardiocentesis code (33016) instead.",
      "A 'congenital cardiac anomaly' for choosing between 33017 and 33018 means abnormal situs (heterotaxy, dextrocardia, mesocardia), single-ventricle anatomy/physiology, or any patient still within the first 90 days after repair of a congenital cardiac defect.",
    ],
    categories: [
      {
        name: "Pericardiocentesis & Drainage",
        codes: [
          ["33016", "Pericardiocentesis, including imaging guidance when performed"],
          ["33017", "Pericardial drainage with indwelling catheter, percutaneous — age 6+ without a congenital cardiac anomaly"],
          ["33018", "Same, but birth through age 5, or any age with a congenital cardiac anomaly"],
          ["33019", "Pericardial drainage with indwelling catheter, percutaneous, using CT guidance"],
        ],
      },
      {
        name: "Pericardiotomy & Pericardiectomy",
        codes: [
          ["33020", "Pericardiotomy to remove a clot or foreign body (primary procedure)"],
          ["33025", "Creation of a pericardial window, or partial resection, for drainage"],
          ["33030 / 33031", "Subtotal or complete pericardiectomy — without vs. with cardiopulmonary bypass"],
          ["33050", "Resection of a pericardial cyst or tumor"],
        ],
      },
    ],
    rules: [
      "33016, 33017, 33018, and 33019 are each written to already include imaging guidance — ultrasound needle guidance (76942), fluoroscopy (77002), CT guidance (77012), and MRI guidance (77021) are not separately billable with any of them.",
      "33020 and 33025 cannot be reported together with chest-tube placement (32551) when the chest tube is placed on the same side as the pericardial procedure.",
      "If echocardiography (93303–93325) is performed solely to guide a pericardiocentesis or catheter drainage, it isn't separately reportable alongside 33016, 33017, or 33018.",
    ],
    tips: [
      "The catheter-stays-in-place-or-not distinction is the single fastest way to choose between 33016 (no catheter left) and 33017/33018/33019 (catheter left in).",
      "Age + congenital anomaly status decides 33017 vs. 33018 — think of 33018 as the 'higher-risk patient' code (young child, or any age with a congenital defect or recent repair).",
    ],
  },
  {
    n: 2,
    title: "Cardiac Tumor",
    range: "33120–33130",
    categories: [
      {
        name: "Excision",
        codes: [
          ["33120", "Excision of an intracardiac tumor, with resection, requiring cardiopulmonary bypass"],
          ["33130", "Resection of an external cardiac tumor"],
        ],
      },
    ],
    rules: [],
    tips: ["Intracardiac (inside the heart) always needs bypass and goes to 33120; external cardiac tumor resection (33130) does not."],
  },
  {
    n: 3,
    title: "Transmyocardial Revascularization",
    range: "33140–33141",
    categories: [
      {
        name: "Procedures",
        codes: [
          ["33140", "Transmyocardial laser revascularization by thoracotomy (separate procedure)"],
          ["33141", "Same, performed at the time of another open cardiac procedure (add-on code)"],
        ],
      },
    ],
    rules: [
      "33141 is an add-on code — it's only reported alongside a primary open cardiac procedure (e.g., certain valve or bypass codes), never billed alone.",
    ],
    tips: ["Standalone revascularization → 33140. Same session as another open-heart procedure → 33141 as the add-on."],
  },
  {
    n: 4,
    title: "Pacemaker or Implantable Defibrillator",
    cases: pacemakerCases,
    range: "33202–33275",
    intro: [
      "A pacemaker system = a pulse generator (electronics + battery) plus one or more leads. Single chamber = one lead (atrium or ventricle). Dual chamber = two leads (right atrium + right ventricle). A third lead for biventricular/CRT pacing is reported separately with 33224 (standalone) or 33225 (add-on, at the time of generator insertion) if placed transvenously into the cardiac venous system, or with 33202/33203 if placed epicardially.",
      "A leadless pacemaker (33274 insert/replace/remove, 33275 removal only) is a single self-contained unit with a built-in battery and electrode, placed transvenously into the right ventricle. Device evaluation done at the time of insertion, replacement, or removal is bundled into these codes and not billed separately.",
      "Implantable defibrillators come in three forms: transvenous ICD (antitachycardia pacing plus low-energy cardioversion or shocks), subcutaneous S-ICD (a single subcutaneous electrode, shock-only — no antitachycardia or chronic pacing), and substernal ICD (at least one substernal electrode, provides antitachycardia pacing and shocks but not chronic pacing).",
    ],
    definitions: [
      ["Pulse generator", "the part of the system that holds the electronics and the battery, placed in a subcutaneous pocket. The 'battery' is simply the power supply inside the generator case — so a 'battery change' is really a generator replacement; there is no battery-only code."],
      ["Lead (electrode)", "carries the impulse between the generator and the heart. Transvenous leads are inserted through a vein; epicardial leads are placed on the surface of the heart."],
      ["Pacemaker systems", "single-chamber (generator + one electrode in the atrium OR the ventricle); dual-chamber (two electrodes: right atrium + right ventricle); biventricular (three electrodes: right atrium, right ventricle, left ventricle); leadless (generator with built-in battery and electrode)."],
      ["Implantable defibrillators", "the transvenous ICD combines antitachycardia pacing, low-energy cardioversion, and defibrillating shocks and can also provide chronic pacing; the subcutaneous ICD (S-ICD) has a single subcutaneous electrode and does NOT provide antitachycardia or chronic pacing."],
    ],
    steps: [
      "① What was done? Lead(s) only, generator only, or a full system (generator + lead[s])?",
      "② Which device? Pacemaker, transvenous ICD, S-ICD, or leadless pacemaker?",
      "③ Generator only: count the FINAL number of existing leads (single / dual / multiple). No old generator removed → insertion codes (33212/33213/33221 pacemaker; 33240/33230/33231 ICD). Old generator removed and replaced → 33227–33229 (pacemaker) or 33262–33264 (ICD); do not add 33233/33241, because removal is already included.",
      "④ Full system: a complete system insertion or replacement is a composite of removing the old generator, removing the old electrode(s), inserting the new generator, and inserting the new electrode(s) → report the SYSTEM code (33206–33208, 33249, 33270). Removal of the old generator (33233/33241) and lead extraction (33234, 33235, 33244 transvenous; 33272 subcutaneous) may be reported separately when performed.",
      "⑤ Skin pocket: revising the pocket is included. Relocating it (33222 pacemaker, 33223 ICD) — for example at a generator replacement — is reported separately and includes opening the old pocket, draining any hematoma or abscess, closing it, and creating the new pocket.",
      "⑥ Testing: pacemaker/ICD device evaluation (93260, 93261, 93279–93298) is not reported with insertion or revision codes. Defibrillation threshold testing during transvenous ICD insertion or replacement is separately reportable (93640, 93641); during S-ICD insertion it is not; at follow-up or at replacement use 93642 or 93644.",
      "⑦ Imaging: radiological supervision and interpretation is INCLUDED in the pacemaker/ICD generator, lead, and system codes.",
    ],
    categories: [
      {
        name: "Epicardial Lead Placement",
        codes: [
          ["33202", "Insertion of epicardial electrode(s), open incision (thoracotomy, sternotomy, or subxiphoid)"],
          ["33203", "Same, endoscopic approach (thoracoscopy/pericardioscopy)"],
        ],
      },
      {
        name: "Permanent Pacemaker — Full System",
        codes: [
          ["33206", "New/replacement permanent pacemaker with transvenous lead — atrial"],
          ["33207", "Same — ventricular"],
          ["33208", "Same — atrial and ventricular (dual chamber)"],
        ],
      },
      {
        name: "Temporary Pacing",
        codes: [
          ["33210 / 33211", "Temporary transvenous pacing electrode(s) — single chamber vs. dual chamber (both separate procedures)"],
        ],
      },
      {
        name: "Generator-Only Insertion (Existing Leads)",
        codes: [
          ["33212 / 33213 / 33221", "Pacemaker generator only, onto existing single / dual / multiple leads"],
          ["33240 / 33230 / 33231", "ICD generator only, onto existing single / dual / multiple leads"],
        ],
      },
      {
        name: "Upgrades, Repairs, Repositioning",
        codes: [
          ["33214", "Upgrade single-chamber to dual-chamber pacemaker system (includes old-generator removal, lead testing, new lead, new generator)"],
          ["33215", "Repositioning of a previously placed transvenous pacemaker/ICD lead (right atrial or right ventricular)"],
          ["33216 / 33217", "Insertion of a single / two transvenous electrode(s) only, pacemaker or ICD"],
          ["33218 / 33220", "Repair of a single / two transvenous electrode(s), pacemaker or ICD"],
          ["33222 / 33223", "Relocation of the skin pocket — pacemaker vs. ICD"],
          ["33224 / 33225", "Left-ventricular (cardiac venous) pacing lead — standalone vs. add-on at time of generator insertion"],
          ["33226", "Repositioning of a previously placed left-ventricular (cardiac venous) lead"],
        ],
      },
      {
        name: "Generator Removal / Replacement",
        codes: [
          ["33233", "Removal of a pacemaker generator only"],
          ["33241", "Removal of an ICD generator only"],
          ["33227 / 33228 / 33229", "Pacemaker generator removal with replacement — single / dual / multiple lead system"],
          ["33262 / 33263 / 33264", "ICD generator removal with replacement — single / dual / multiple lead system"],
        ],
      },
      {
        name: "Electrode Removal",
        codes: [
          ["33234 / 33235", "Transvenous pacemaker electrode removal — single vs. dual lead system"],
          ["33236 / 33237", "Epicardial pacemaker + electrode removal by thoracotomy — single vs. dual lead system"],
          ["33238", "Transvenous electrode removal by thoracotomy"],
          ["33243 / 33244", "ICD electrode removal — by thoracotomy vs. by transvenous extraction"],
        ],
      },
      {
        name: "Full ICD System / Subcutaneous ICD",
        codes: [
          ["33249", "New/replacement permanent ICD system with transvenous lead(s), single or dual chamber"],
          ["33270", "New/replacement permanent subcutaneous ICD system with subcutaneous electrode (includes DFT evaluation, arrhythmia induction/sensing check, and programming)"],
          ["33271", "Insertion of the subcutaneous ICD electrode only"],
          ["33272", "Removal of the subcutaneous ICD electrode"],
          ["33273", "Repositioning of a previously placed subcutaneous ICD electrode"],
        ],
      },
      {
        name: "Leadless Pacemaker",
        codes: [
          ["33274", "Transcatheter insertion, replacement, or removal-and-replacement of a permanent right-ventricular leadless pacemaker, includes imaging guidance and device evaluation"],
          ["33275", "Transcatheter removal only of a permanent right-ventricular leadless pacemaker"],
        ],
      },
    ],
    rules: [
      "This whole family runs on a scenario → code lookup, not memorized numbers. The table below maps the common clinical scenarios directly to the pacemaker code and the matching implantable-defibrillator code.",
      "33206–33208 (full pacemaker system) cannot be reported together with 33227–33229 (generator-only replacement) or with 33216/33217 (electrode-only insertion) — they describe overlapping levels of the same work.",
      "Replacing ONLY the pulse generator (33227–33229, 33262–33264): the old generator's removal is already included, so 33233/33241 is not added. With a full SYSTEM code (33206–33208, 33249, 33270), removal of the old generator (33233/33241) and lead extraction (33234, 33235, 33244, 33272) may be reported separately when performed.",
      "Fluoroscopy (76000, 77002), ultrasound guidance for vascular access (76937), right ventriculography (93566), and femoral venography (75820) are already bundled into the leadless pacemaker codes (33274, 33275) — don't bill them separately.",
      "Right heart catheterization codes generally cannot be billed alongside the leadless pacemaker codes, unless a complete right heart catheterization is performed for a reason unrelated to the pacemaker procedure.",
    ],
    tips: [
      "Build the decision as: (1) is this a lead-only service, a generator-only service, or a full system? (2) single, dual, or multiple leads? (3) pacemaker or ICD? (4) transvenous, subcutaneous, or leadless? Answering those four questions in order gets you to the right code almost every time.",
    ],
  },
  {
    n: 5,
    title: "Pacemaker / ICD Scenario Reference",
    range: "Quick-lookup table",
    intro: [
      "This is a condensed version of the book's own procedure-to-code index — organized by clinical scenario rather than by code number, since that's how these questions are usually asked on the exam.",
    ],
    categories: [],
    rules: [],
    tips: [],
  },
  {
    n: 6,
    title: "Phrenic Nerve Stimulation System",
    range: "33276–33288",
    intro: [
      "This system also has a pulse generator (placed in a pectoral pocket) plus a transvenous stimulation lead placed into the right brachiocephalic or left pericardiophrenic vein. A separate sensing lead, when needed, goes into the azygos vein. All of these codes already include vessel catheterization and any imaging guidance used.",
    ],
    categories: [
      {
        name: "Insertion",
        codes: [
          ["33276", "Insertion of the phrenic nerve stimulator system (generator + stimulating lead), including catheterization, imaging, and initial diagnostic-mode activation"],
          ["33277", "Insertion of the transvenous sensing lead (add-on, used with 33276 or 33287)"],
        ],
      },
      {
        name: "Removal / Replacement",
        codes: [
          ["33278", "Removal of the full system (generator + lead(s))"],
          ["33279", "Removal of the transvenous lead(s) only (billed once regardless of how many leads)"],
          ["33280", "Removal of the pulse generator only"],
          ["33287", "Removal and replacement of the pulse generator"],
          ["33288", "Removal and replacement of the transvenous lead(s) (billed once regardless of how many leads)"],
        ],
      },
      {
        name: "Repositioning",
        codes: [
          ["33281", "Repositioning of the transvenous lead(s) — reported once per patient per day"],
        ],
      },
    ],
    rules: [
      "33278, 33279, and 33280 (the plain removal codes) are not reported together with 33276, 33277, 33281, 33287, or 33288 — they describe a different scope of work than the insertion, replacement, or repositioning codes.",
      "Therapeutic activation of the system afterward is reported separately with 93150–93153, but those codes are not used in the same session as the initial insertion (33276).",
    ],
    tips: ["Same insert/remove/reposition/replace pattern as the pacemaker family above — the vein just changes (brachiocephalic/pericardiophrenic for the stim lead, azygos for the sensing lead)."],
  },
  {
    n: 7,
    title: "Electrophysiologic Operative Procedures",
    range: "33250–33269",
    intro: [
      "This family covers surgical (open or thoracoscopic) treatment of supraventricular arrhythmias — distinct from the percutaneous catheter-based ablation codes elsewhere in CPT. 'Limited' ablation/reconstruction means isolating the triggers (e.g., pulmonary vein isolation). 'Extensive' means limited, plus additional ablation lines through the right atrium, atrial septum, or left atrium in continuity with the AV annulus (the classic full maze procedure).",
      "Left atrial appendage (LAA) exclusion is already bundled into the maze procedures (33254–33259, 33265, 33266) and into mitral valve repair/replacement (33420–33430) — it is not separately reported when done in the same session as those.",
    ],
    categories: [
      {
        name: "Ablation (Standalone, No Concurrent Open Procedure)",
        codes: [
          ["33250 / 33251", "Operative ablation of a supraventricular arrhythmogenic focus or pathway — without vs. with cardiopulmonary bypass"],
          ["33261", "Operative ablation of a ventricular arrhythmogenic focus, with cardiopulmonary bypass"],
        ],
      },
      {
        name: "Maze Procedure (Standalone)",
        codes: [
          ["33254", "Limited operative tissue ablation and reconstruction of the atria (modified maze)"],
          ["33255 / 33256", "Extensive operative tissue ablation and reconstruction (maze) — without vs. with cardiopulmonary bypass"],
          ["33265 / 33266", "Endoscopic (surgical endoscopy) maze without cardiopulmonary bypass — limited (modified maze) / extensive (maze)"],
        ],
      },
      {
        name: "Maze Procedure (Add-on, With Another Open Cardiac Procedure)",
        codes: [
          ["33257", "Limited maze, performed at the time of another cardiac procedure (add-on)"],
          ["33258 / 33259", "Extensive maze, performed at the time of another cardiac procedure — without vs. with cardiopulmonary bypass (add-on)"],
        ],
      },
      {
        name: "Left Atrial Appendage Exclusion",
        codes: [
          ["33267", "Open LAA exclusion, any method — standalone (no concurrent sternotomy/thoracotomy procedure)"],
          ["33268", "Open LAA exclusion, performed at the time of another sternotomy/thoracotomy procedure (add-on)"],
          ["33269", "Thoracoscopic LAA exclusion, any method, when not part of a maze or mitral valve procedure"],
        ],
      },
    ],
    rules: [
      "33254–33256 (standalone maze) are only used when there's no other concurrent procedure requiring sternotomy or bypass. As soon as maze is done alongside another open-heart procedure, switch to the add-on codes 33257–33259 instead.",
      "33267 (standalone open LAA exclusion) cannot be reported together with any other sternotomy/thoracotomy procedure in the same session — if there is one, use the add-on code 33268 instead.",
      "None of 33267, 33268, or 33269 are separately reportable when LAA exclusion is performed as part of a maze procedure (33254–33259, 33265, 33266) or a mitral valve procedure (33420–33430), since it's already bundled into those.",
    ],
    tips: [
      "Ask two questions for the maze codes: limited or extensive? Standalone or alongside another open-heart procedure? That's a direct lookup into one of six codes (33254/33255/33256 standalone, or 33257/33258/33259 add-on).",
      "For LAA exclusion, the deciding factor is context: is it standalone (33267), riding along with another sternotomy/thoracotomy procedure (33268), thoracoscopic (33269), or already bundled into a maze/mitral procedure (not separately billable at all)?",
    ],
  },
];

const pacemakerTable: [string, string, string][] = [
  ["Insert transvenous single lead only, no generator", "33216", "33216"],
  ["Insert transvenous dual leads only, no generator", "33217", "33217"],
  ["Insert transvenous multiple leads, no generator", "33217 + 33224", "33217 + 33224"],
  ["Insert subcutaneous defibrillator electrode only, no generator", "N/A", "33271"],
  ["Initial generator insertion only, existing single lead", "33212", "33240"],
  ["Initial generator insertion only, existing dual leads", "33213", "33230"],
  ["Initial generator insertion only, existing multiple leads", "33221", "33231"],
  ["Initial generator insertion/replacement + transvenous single lead", "33206 (atrial) or 33207 (ventricular)", "33249"],
  ["Initial generator insertion/replacement + transvenous dual leads", "33208", "33249"],
  ["Initial generator insertion/replacement + transvenous multiple leads", "33208 + 33225", "33249 + 33225"],
  ["Initial generator insertion/replacement + subcutaneous electrode", "N/A", "33270"],
  ["Insert, replace, or remove-and-replace permanent leadless RV pacemaker", "33274", "N/A"],
  ["Upgrade single-chamber system to dual-chamber system", "33214 (includes removal of old generator)", "33241 + 33249"],
  ["Remove generator only, no replacement", "33233", "33241"],
  ["Remove + replace generator only — single lead system", "33227", "33262"],
  ["Remove + replace generator only — dual lead system", "33228", "33263"],
  ["Remove + replace generator only — multiple lead system", "33229", "33264"],
  ["Remove transvenous electrode only — single lead system", "33234", "33244"],
  ["Remove transvenous electrode only — dual lead system", "33235", "33244"],
  ["Remove subcutaneous defibrillator lead only", "N/A", "33272"],
  ["Remove + replace generator and transvenous electrodes", "33233 + (33234 or 33235) + (33206/33207/33208), + 33225 if applicable", "33241 + 33244 + 33249, + 33225 if applicable"],
  ["Remove + replace ICD generator and subcutaneous electrode", "N/A", "33272 + 33241 + 33270"],
  ["Remove permanent leadless RV pacemaker (no replacement)", "33275", "N/A"],
  ["Convert existing system to biventricular pacing", "33225 + (33228 or 33229)", "33225 + (33263 or 33264)"],
];

const rangeMap: [string, string][] = [
  ["Heart & Pericardium", "33016–33999 — this Part 1 (pericardium through electrophysiology) and Part 2 (repair, valves, CABG, aorta, ECMO, assist, transplant)"],
  ["Arteries & Veins", "34001–37799 — Part 3 (endovascular aorta, bypass, vascular injection, venous access, dialysis, thrombectomy)"],
  ["Hemic & Lymphatic / Mediastinum & Diaphragm", "38xxx and 39000–39599 — the rest of the Cardiovascular section header range (33016–39599); not covered in this series"],
  ["Medicine — Cardiovascular", "92920–93799 — coronary therapeutic services, catheterization, monitoring, and device evaluation (a separate CPT section)"],
];

const diagramBoxStyle = { background: "#fff7f7", border: "1px solid #f0d7d7", borderRadius: "14px", padding: "18px", margin: "16px 0", textAlign: "center" as const, overflowX: "auto" as const };
const diagramCaptionStyle = { margin: "10px 0 0", fontSize: "13px", color: "#7a3a3a", fontWeight: 700 };
const rangeMapStyle = { display: "grid", gap: "8px", margin: "12px 0 0", padding: 0, listStyle: "none" };
const rangeMapRowStyle = { display: "flex", flexWrap: "wrap" as const, gap: "8px 14px", alignItems: "baseline", background: "#ffffff", border: "1px solid #fecaca", borderRadius: "8px", padding: "9px 13px" };
const rangeMapLabelStyle = { fontWeight: 800, color: "#991b1b", minWidth: "210px" };
const definitionsBoxStyle = { background: "#f5f3ff", border: "1px solid #ddd6fe", borderLeft: "5px solid #7c3aed", borderRadius: "10px", padding: "16px 18px", margin: "14px 0 0", lineHeight: 1.7 };
const definitionsTitleStyle = { margin: "0 0 8px", color: "#5b21b6", fontWeight: 800, fontSize: "14px", letterSpacing: "0.03em" };
const stepsBoxStyle = { background: "#eff6ff", border: "1px solid #bfdbfe", borderLeft: "5px solid #1d4ed8", borderRadius: "10px", padding: "16px 18px", margin: "14px 0 0", lineHeight: 1.7 };
const stepsTitleStyle = { margin: "0 0 8px", color: "#1e3a8a", fontWeight: 800, fontSize: "14px", letterSpacing: "0.03em" };
const examplesBoxStyle = { background: "#fffbeb", border: "1px solid #fde68a", borderLeft: "5px solid #d97706", borderRadius: "10px", padding: "16px 18px", margin: "14px 0 0", lineHeight: 1.7 };
const examplesTitleStyle = { margin: "0 0 8px", color: "#92400e", fontWeight: 800, fontSize: "14px", letterSpacing: "0.03em" };

function PacemakerSystemsDiagram() {
  const cards: { title: string; leads: string[]; code: string; note: string }[] = [
    { title: "Single-chamber", leads: ["RA or RV"], code: "33206 / 33207", note: "generator + 1 lead" },
    { title: "Dual-chamber", leads: ["RA", "RV"], code: "33208", note: "generator + 2 leads" },
    { title: "Biventricular (CRT)", leads: ["RA", "RV", "LV"], code: "33208 + 33225", note: "3rd lead in the cardiac vein" },
    { title: "Leadless", leads: ["in the RV"], code: "33274 / 33275", note: "battery + electrode in one capsule" },
    { title: "ICD (transvenous)", leads: ["RV (+/- RA)"], code: "33249", note: "pacing + cardioversion + shocks" },
    { title: "S-ICD", leads: ["subcutaneous"], code: "33270", note: "shock only — no pacing" },
  ];
  return (
    <div style={diagramBoxStyle}>
      <svg viewBox="0 0 720 360" role="img" aria-label="Pacemaker and defibrillator system types with their code families" style={{ width: "100%", height: "auto", maxWidth: "720px", minWidth: "560px" }}>
        {cards.map((c, i) => {
          const x = 10 + (i % 3) * 235;
          const y = 10 + Math.floor(i / 3) * 175;
          return (
            <g key={c.title}>
              <rect x={x} y={y} width="220" height="160" rx="12" fill="#ffffff" stroke="#f0d7d7" strokeWidth="1.5" />
              <text x={x + 110} y={y + 24} textAnchor="middle" fontSize="14" fontWeight="800" fill="#450a0a">{c.title}</text>
              <rect x={x + 16} y={y + 46} width="40" height="28" rx="6" fill="#7c3aed" />
              <text x={x + 36} y={y + 65} textAnchor="middle" fontSize="12" fontWeight="800" fill="#ffffff">PG</text>
              {c.leads.map((lead, j) => (
                <g key={lead}>
                  <path d={"M" + (x + 56) + " " + (y + 60) + " L" + (x + 104) + " " + (y + 52 + j * 20)} stroke="#b91c1c" strokeWidth="3" fill="none" strokeLinecap="round" />
                  <circle cx={x + 108} cy={y + 52 + j * 20} r="4.5" fill="#b91c1c" />
                  <text x={x + 118} y={y + 56 + j * 20} fontSize="12" fill="#291a1a">{lead}</text>
                </g>
              ))}
              <text x={x + 110} y={y + 120} textAnchor="middle" fontSize="13.5" fontWeight="800" fill="#991b1b">{c.code}</text>
              <text x={x + 110} y={y + 141} textAnchor="middle" fontSize="11.5" fill="#291a1a">{c.note}</text>
            </g>
          );
        })}
      </svg>
      <p style={diagramCaptionStyle}>PG = pulse generator (electronics + battery). RA = right atrium, RV = right ventricle, LV = left ventricle.</p>
    </div>
  );
}

const mainStyle = { maxWidth: "1160px", margin: "0 auto", padding: "36px clamp(12px, 4vw, 24px) 64px", minHeight: "100vh", background: "#fdf6f6", color: "#291a1a", fontFamily: "Arial, sans-serif" };
const heroStyle = { background: "linear-gradient(135deg, #450a0a, #b91c1c)", color: "white", padding: "48px 44px", borderRadius: "18px", marginBottom: "26px", boxShadow: "0 12px 28px rgba(69,10,10,0.22)" };
const kickerStyle = { margin: "0 0 10px", color: "#fecaca", fontWeight: 800, letterSpacing: "0.08em" };
const navStyle = { display: "flex", flexWrap: "wrap" as const, gap: "10px", marginBottom: "26px" };
const navLinkStyle = { textDecoration: "none", color: "#b91c1c", background: "#ffffff", border: "1px solid #f0d7d7", borderRadius: "999px", padding: "10px 15px", fontWeight: 700, fontSize: "14px" };
const pagerStyle = { display: "flex", flexWrap: "wrap" as const, gap: "10px", marginBottom: "26px" };
const pagerLinkStyle = { textDecoration: "none", color: "#b91c1c", background: "#fff1f0", border: "1px solid #fecaca", borderRadius: "999px", padding: "8px 16px", fontWeight: 700, fontSize: "14px" };
const pagerActiveStyle = { ...pagerLinkStyle, background: "#b91c1c", color: "#fff", border: "1px solid #b91c1c" };
const introBoxStyle = { background: "#fff1f0", border: "1px solid #fecaca", borderLeft: "7px solid #b91c1c", borderRadius: "12px", padding: "22px 24px", marginBottom: "30px", lineHeight: 1.7 };
const sectionStyle = { background: "#ffffff", border: "1px solid #f0e2e2", borderRadius: "14px", padding: "24px clamp(14px, 3.5vw, 28px)", marginBottom: "22px", boxShadow: "0 5px 16px rgba(69,10,10,0.06)" };
const sectionHeaderStyle = { display: "flex", alignItems: "center", gap: "14px", marginBottom: "10px", flexWrap: "wrap" as const };
const sectionNumberStyle = { background: "#b91c1c", color: "#fff", width: "36px", height: "36px", minWidth: "36px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: "15px" };
const sectionTitleStyle = { margin: 0, fontSize: "22px", color: "#111827" };
const rangeChipStyle = { background: "#fff1f0", border: "1px solid #fecaca", color: "#b91c1c", borderRadius: "999px", padding: "4px 12px", fontWeight: 800, fontSize: "13px", fontFamily: "Consolas, monospace" };
const pStyle = { lineHeight: 1.75, margin: "0 0 10px" };
const categoryTitleStyle = { margin: "18px 0 8px", fontSize: "16px", color: "#b91c1c", fontWeight: 800 };
const codeListStyle = { listStyle: "none", padding: 0, margin: "0 0 4px", display: "grid", gap: "7px" };
const codeItemStyle = { display: "flex", flexWrap: "wrap" as const, gap: "6px 12px", alignItems: "baseline", background: "#fdf8f8", border: "1px solid #f0e2e2", borderRadius: "8px", padding: "8px 13px" };
const codeChipStyle = { fontWeight: 800, color: "#b91c1c", minWidth: "130px", fontFamily: "Consolas, monospace", fontSize: "13.5px" };
const rulesBoxStyle = { background: "#fef2f2", border: "1px solid #fecaca", borderLeft: "5px solid #dc2626", borderRadius: "10px", padding: "16px 18px", margin: "18px 0 0", lineHeight: 1.7 };
const rulesTitleStyle = { margin: "0 0 8px", color: "#991b1b", fontWeight: 800, fontSize: "14px", letterSpacing: "0.03em" };
const tipsBoxStyle = { background: "#f0fdf4", border: "1px solid #bbf7d0", borderLeft: "5px solid #16a34a", borderRadius: "10px", padding: "16px 18px", margin: "14px 0 0", lineHeight: 1.7 };
const tipsTitleStyle = { margin: "0 0 8px", color: "#166534", fontWeight: 800, fontSize: "14px", letterSpacing: "0.03em" };
const tableWrapStyle = { overflowX: "auto" as const, marginTop: "10px" };
const tableStyle = { width: "100%", borderCollapse: "collapse" as const, fontSize: "13.5px" };
const thStyle = { border: "1px solid #f0d7d7", padding: "9px 11px", textAlign: "left" as const, background: "#fff1f0", color: "#991b1b" };
const tdStyle = { border: "1px solid #f0d7d7", padding: "9px 11px", textAlign: "left" as const, fontFamily: "Consolas, monospace" };
const scenarioTdStyle = { border: "1px solid #f0d7d7", padding: "9px 11px", textAlign: "left" as const, fontFamily: "Arial, sans-serif" };
const backLinkStyle = { textDecoration: "none", color: "#b91c1c", fontWeight: 700 };

export default function SurgeryCardiovascularGuidelinesReviewerPage() {
  return (
    <main style={mainStyle}>
      <header style={heroStyle}>
        <p style={kickerStyle}>33,000 SERIES · CARDIOVASCULAR SYSTEM</p>
        <h1 style={{ margin: 0, fontSize: "clamp(28px, 5.5vw, 48px)" }}>CPT Surgery Guidelines Reviewer</h1>
        <p style={{ margin: "12px 0 0", fontSize: "19px", lineHeight: 1.5 }}>Part 1 — Pericardium through Pacemakers, Phrenic Nerve Stimulation & Electrophysiology (33016–33288)</p>
      </header>

      <div style={pagerStyle}>
        <span style={pagerActiveStyle}>Part 1 (33016–33288)</span>
        <Link href="/cpt/surgery/33000-series-guidelines-reviewer-part-2" style={pagerLinkStyle}>Part 2 (33300–33999)</Link>
        <Link href="/cpt/surgery/33000-series-guidelines-reviewer-part-3" style={pagerLinkStyle}>Part 3 (34701–37214) →</Link>
      </div>

      <nav aria-label="Cardiovascular series navigation" style={navStyle}>
        <Link href="/cpt/surgery/33,000" style={navLinkStyle}>Cardiovascular System home</Link>
        <Link href="/cpt/surgery/33000-series-coding-approach" style={navLinkStyle}>How to Approach This Series</Link>
        <Link href="/cpt/surgery/33000-series-practice-quiz" style={navLinkStyle}>Practice Quiz</Link>
        <Link href="/cpt/surgery/33000-series-flashcards" style={navLinkStyle}>Flashcards</Link>
        <Link href="/cpt/surgery" style={navLinkStyle}>Surgery home</Link>
        <Link href="/cpt" style={navLinkStyle}>CPT home</Link>
      </nav>

      <section style={introBoxStyle}>
        <strong>Where this fits — the Cardiovascular System map.</strong> This page covers Pericardium through Pacemakers, Phrenic Nerve Stimulation & Electrophysiology (33016–33288). Part 2 picks up with general cardiac repair, LAA closure, heart valves (TAVR and open), coronary artery bypass grafting, aorta &amp; great vessel repair, ECMO and cardiac assist, and heart transplantation. Part 3 covers the endovascular aorta, bypass grafts, vascular injection, venous access, dialysis circuit, portal decompression, and thrombectomy.
        <ul style={rangeMapStyle}>
          {rangeMap.map(([label, codes]) => (
            <li key={label} style={rangeMapRowStyle}>
              <span style={rangeMapLabelStyle}>{label}</span>
              <span>{codes}</span>
            </li>
          ))}
        </ul>
      </section>

      {subsections.map((sub) => (
        <section key={sub.n} style={sectionStyle}>
          <div style={sectionHeaderStyle}>
            <span style={sectionNumberStyle}>{sub.n}</span>
            <h2 style={sectionTitleStyle}>{sub.title}</h2>
            <span style={rangeChipStyle}>{sub.range}</span>
          </div>
          {sub.intro?.map((p) => <p key={p} style={pStyle}>{p}</p>)}

          {sub.n === 4 && <PacemakerSystemsDiagram />}

          {sub.definitions && (
            <div style={definitionsBoxStyle}>
              <p style={definitionsTitleStyle}>📖 DEFINITIONS</p>
              <ul style={{ margin: 0, paddingLeft: "20px", display: "grid", gap: "8px" }}>
                {sub.definitions.map(([term, def]) => <li key={term}><strong>{term}:</strong> {def}</li>)}
              </ul>
            </div>
          )}

          {sub.steps && (
            <div style={stepsBoxStyle}>
              <p style={stepsTitleStyle}>🪜 STEP-BY-STEP — WHAT IS INCLUDED VS. REPORTED SEPARATELY</p>
              <ul style={{ margin: 0, paddingLeft: "20px", display: "grid", gap: "8px", listStyle: "none" }}>
                {sub.steps.map((step) => <li key={step}>{step}</li>)}
              </ul>
            </div>
          )}

          {sub.examples && (
            <div style={examplesBoxStyle}>
              <p style={examplesTitleStyle}>🧪 WORKED EXAMPLES</p>
              <ul style={{ margin: 0, paddingLeft: "20px", display: "grid", gap: "8px" }}>
                {sub.examples.map((ex) => <li key={ex}>{ex}</li>)}
              </ul>
            </div>
          )}

          {sub.categories.map((cat) => (
            <div key={cat.name}>
              <h3 style={categoryTitleStyle}>{cat.name}</h3>
              <ul style={codeListStyle}>
                {cat.codes.map(([code, desc]) => (
                  <li key={code} style={codeItemStyle}>
                    <code style={codeChipStyle}>{code}</code>
                    <span style={{ flex: "1 1 220px" }}>{desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {sub.n === 5 && (
            <div style={tableWrapStyle}>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thStyle}>Clinical scenario</th>
                    <th style={thStyle}>Pacemaker code</th>
                    <th style={thStyle}>Implantable defibrillator code</th>
                  </tr>
                </thead>
                <tbody>
                  {pacemakerTable.map((row) => (
                    <tr key={row[0]}>
                      <td style={scenarioTdStyle}>{row[0]}</td>
                      <td style={tdStyle}>{row[1]}</td>
                      <td style={tdStyle}>{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {sub.rules.length > 0 && (
            <div style={rulesBoxStyle}>
              <p style={rulesTitleStyle}>🟥 KEY CODING RULES</p>
              <ul style={{ margin: 0, paddingLeft: "20px", display: "grid", gap: "8px" }}>
                {sub.rules.map((rule) => <li key={rule}>{rule}</li>)}
              </ul>
            </div>
          )}

          {sub.tips.length > 0 && (
            <div style={tipsBoxStyle}>
              <p style={tipsTitleStyle}>🧠 CODING TIPS</p>
              <ul style={{ margin: 0, paddingLeft: "20px", display: "grid", gap: "8px" }}>
                {sub.tips.map((tip) => <li key={tip}>{tip}</li>)}
              </ul>
            </div>
          )}
          {sub.cases?.map((c) => <SolvedCaseBox key={c.title} c={c} />)}
        </section>
      ))}

      <div style={{ marginTop: "30px", display: "flex", flexWrap: "wrap" as const, gap: "16px" }}>
        <Link href="/cpt/surgery/33000-series-guidelines-reviewer-part-2" style={backLinkStyle}>Continue to Part 2 →</Link>
        <Link href="/cpt/surgery/33,000" style={backLinkStyle}>← Back to Cardiovascular System</Link>
        <Link href="/cpt/surgery" style={backLinkStyle}>← Back to Surgery</Link>
      </div>
    </main>
  );
}
