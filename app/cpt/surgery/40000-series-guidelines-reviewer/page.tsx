import { ReviewerShell, type Subsection } from "../_digestive/kit";
import { UpperReachDiagram, ErcpDiagram } from "../_digestive/diagrams";

const sections: Subsection[] = [
  {
    id: "endoscopy-rules",
    n: 1,
    title: "Endoscopy Rules That Apply Everywhere",
    range: "43180–43273 · 44360–44408 · 45300–45398 · 46600–46615",
    intro: [
      "In the Digestive System, codes are grouped by organ first and then by what was done. Endoscopy takes up a big share of the section, so learn these few universal rules once and they work for every scope in Parts 1 and 2.",
      "Endoscopy means looking inside a hollow organ or canal with a scope, through a natural opening (mouth, nose, anus) or a stoma. Laparoscopy is different — the scope goes through small cuts in the abdominal wall — and it has its own codes.",
      "Endoscopy codes are anchored on HOW FAR THE TIP OF THE SCOPE WENT. Same scope, farther reach = a different code family.",
    ],
    diagram: <UpperReachDiagram />,
    definitions: [
      ["Diagnostic endoscopy", "looking only; the code carries the phrase 'separate procedure' and may include brushing or washing to collect a specimen."],
      ["Surgical (therapeutic) endoscopy", "the scope is used to DO something — biopsy, remove a polyp, dilate, stent, stop bleeding. It always includes the diagnostic look."],
      ["Stoma", "a surgically created opening in the abdomen. A scope can enter through it instead of through the anus."],
      ["Landmark", "an anatomic point (like the pylorus, splenic flexure, or cecum) that decides which code family a scope belongs to."],
    ],
    steps: [
      "① Which organ, and how far did the scope tip go? That picks the code FAMILY (Parts 1–2 diagrams show the reach of each family).",
      "② Which route — mouth, nose, anus, or a stoma? Each route has its own code range.",
      "③ Was anything DONE beyond looking? If yes, report only the therapeutic code — never the diagnostic code with it.",
      "④ Multiple lesions? Read the descriptor: '(s)' after tumor/polyp/lesion means one or many, so the code is reported once for that technique.",
      "⑤ Was the exam cut short? Use modifier 52 or 53 as the section directs, and document why.",
    ],
    categories: [
      {
        name: "Modifiers you will meet in this section",
        codes: [
          ["52", "Reduced service — part of the planned exam was not done (for example the duodenum was skipped)"],
          ["53", "Discontinued — the doctor stopped the procedure because continuing was unsafe"],
          ["59", "Distinct service — a separate stricture, stent, or site. Add it ONLY where the code's own note says to"],
          ["63", "Infant under 4 kg — never with some hernia codes (listed in Part 3)"],
          ["50", "Both sides — never with the anterior abdominal hernia codes 49591–49622"],
        ],
      },
      {
        name: "52 vs 53 — the same two modifiers behave differently in EGD and colonoscopy",
        codes: [
          ["EGD, duodenum not reached", "Modifier 52 if no repeat exam is planned · modifier 53 if a repeat exam IS planned"],
          ["Colonoscopy stopped short — looking only", "Diagnostic or screening code 45378 with modifier 53"],
          ["Colonoscopy stopped short — therapy done", "The therapeutic code with modifier 52 (never 45378)"],
        ],
      },
      {
        name: "Once per session — never repeat these in upper GI and ERCP",
        codes: [
          ["EGD / esophagus EUS", "43231 · 43232 · 43237 · 43238 · 43240 · 43242 · 43253 · 43259"],
          ["ERCP", "43263 (pressure measurement) · 43275 (stent/foreign-body removal) · +43273 (once per procedure)"],
        ],
      },
    ],
    rules: [
      "A therapeutic scope already contains the diagnostic look. If the doctor looks, finds a problem, and treats it in the same session, report ONLY the therapeutic code.",
      "When bleeding happens as a RESULT of the endoscopic procedure, controlling that bleeding is not reported separately during the same operative session.",
      "Surgical laparoscopy always includes diagnostic laparoscopy; a diagnostic-only laparoscopy uses its own code (49320).",
      "The 'Do not report … in conjunction with …' lines printed under each code are the tie-breakers when two endoscopy codes look like they both fit.",
    ],
    tips: [
      "Ask 'how far did it go?' before you ask 'what was done?'. The reach decides the family; the technique decides the code inside it.",
      "Endoscopy and laparoscopy get mixed up in conversation, but they are indexed apart. Through the abdominal wall = laparoscopy. Through an opening = endoscopy.",
    ],
    traps: [
      "Adding 43235 (diagnostic EGD) or 45378 (diagnostic colonoscopy) to a code where something was done — the therapeutic code already holds the look.",
      "Using 52 and 53 as if they mean the same thing everywhere. Check the section: EGD chooses by whether a repeat exam is planned; colonoscopy chooses by whether therapy was done.",
      "Reporting a 'once per session' code twice because the doctor treated several lesions — the code already says one or many.",
    ],
  },
  {
    id: "esophagoscopy",
    n: 2,
    title: "Esophagoscopy",
    range: "43180–43232",
    intro: [
      "Esophagoscopy is a look at the esophagus only — from its very top (the upper esophageal sphincter) down to the point where it joins the stomach (the GE junction). Bending the scope back to peek at the upper stomach does NOT change the code.",
      "The range is split by scope type and route, so the first question is always: rigid or flexible, and through the mouth or the nose?",
    ],
    definitions: [
      ["Upper esophageal sphincter (UES)", "the muscle at the top of the esophagus — where every esophagoscopy 'starts counting'."],
      ["Transoral / transnasal", "the scope enters through the mouth / through the nose."],
      ["Retroflexion", "bending the scope back to look at the upper stomach from below — still part of esophagoscopy."],
    ],
    categories: [
      {
        name: "Layout by scope type",
        codes: [
          ["43180–43196", "RIGID, transoral. 43191 diagnostic, 43192 injection, 43193 biopsy, 43194 foreign body, 43195 balloon dilation (under 30 mm), 43196 guidewire dilation. 43180 is the special one with diverticulectomy and cricopharyngeal myotomy."],
          ["43197–43198", "FLEXIBLE, transnasal. 43197 diagnostic, 43198 with biopsy."],
          ["43200–43232", "FLEXIBLE, transoral — the biggest family. 43200 is the diagnostic base."],
        ],
      },
      {
        name: "Flexible transoral therapeutic steps (each built on 43200)",
        codes: [
          ["43201 · 43202", "Directed submucosal injection · biopsy"],
          ["43204 · 43205", "Sclerosis / band ligation of esophageal varices"],
          ["43206", "Optical endomicroscopy"],
          ["43211 · 43212", "Endoscopic mucosal resection · stent placement"],
          ["43213–43214 · 43220 · 43226", "Dilation by balloon or dilator (retrograde) · balloon dilation 30 mm or more · under 30 mm · guidewire dilation"],
          ["43215–43217", "Foreign-body removal · lesion removal by hot biopsy forceps/bipolar · lesion removal by snare"],
          ["43227 · 43229", "Control of bleeding · ablation of a lesion"],
          ["43231 · 43232", "Endoscopic ultrasound (EUS) · EUS-guided needle aspiration/biopsy"],
        ],
      },
    ],
    rules: [
      "43191 (rigid diagnostic) is not reported with 43192–43198 — the therapeutic code already contains the look.",
      "Fluoroscopy: 74360 is added for the dilation codes 43195, 43196, 43220, 43226 (and 43212 stent placement). 43213 and 43214 (and EGD 43233) already include fluoroscopic guidance — never add 74360 or 76000 to them.",
      "Several strictures dilated in one session: report 43213 once for the first and again with modifier 59 for each additional stricture. Dilation done WITHOUT endoscopic visualization is a different code family (43450, 43453).",
      "43180 already includes the telescope or operating microscope and the repair when performed — do not add 69990 to it.",
      "43195 and 43196 (the dilation codes) are not reported with the diagnostic bases 43191 and 43197.",
    ],
    tips: [
      "Three quick questions build any esophagoscopy code: rigid or flexible? mouth or nose? diagnostic or which therapeutic step?",
      "If the scope goes past the GE junction and examines the stomach and duodenum, stop — that is an EGD (next section), not an esophagoscopy.",
    ],
  },
  {
    id: "egd",
    n: 3,
    title: "Esophagogastroduodenoscopy (EGD)",
    range: "43235–43259 · 43233 · 43266 · 43270",
    intro: [
      "An EGD examines the esophagus (UES to the GE junction), the stomach, the pylorus, and the duodenum — or a short way (under 50 cm) past the pylorus into the early jejunum.",
      "The 43235–43259 family is the 'workhorse' of upper GI endoscopy. 43235 is the diagnostic base and every other code adds one therapeutic step to it.",
    ],
    definitions: [
      ["EGD", "esophagus + stomach + pylorus + duodenum (or less than 50 cm beyond the pylorus)."],
      ["Esophagogastroscopy", "an EGD in which the duodenum is NOT examined. It has no code of its own — it is reported with an EGD code plus a modifier."],
      ["Surgically altered stomach", "for example a gastric bypass. If the scope reaches jejunum beyond the join (anastomosis), the EGD codes (43233, 43235–43259, 43266, 43270) are still used."],
    ],
    steps: [
      "① Did the scope reach the duodenum (or less than 50 cm past the pylorus)? Yes → EGD family. No → go to step ②.",
      "② The duodenum was skipped on purpose (not clinically pertinent) or could not be reached (for example severe gastric retention) → report the EGD code with modifier 52 if no repeat exam is planned, or modifier 53 if a repeat exam IS planned.",
      "③ Was anything done beyond looking? Pick the ONE therapeutic code for the technique used. The diagnostic 43235 is never added.",
      "④ Reached 50 cm or more past the pylorus? Leave the EGD family — that is enteroscopy (Section 4).",
    ],
    categories: [
      {
        name: "Diagnostic base and injection/biopsy steps",
        codes: [
          ["43235", "Diagnostic EGD (separate procedure)"],
          ["43236 · 43239", "Directed submucosal injection · biopsy, single or multiple"],
          ["43237 · 43259", "EUS limited to esophagus/stomach/duodenum · EUS complete"],
          ["43238 · 43242", "EUS-guided needle aspiration/biopsy — limited · complete"],
          ["43240 · 43241", "Transmural drainage of a pseudocyst · tube or catheter placement"],
        ],
      },
      {
        name: "Removal, control, and treatment steps",
        codes: [
          ["43243 · 43244", "Sclerosis injection of varices · band ligation of varices"],
          ["43247 · 43250 · 43251", "Foreign-body removal · lesion removal by hot biopsy forceps/bipolar · lesion removal by snare"],
          ["43254 · 43255", "Endoscopic mucosal resection · control of bleeding"],
          ["43257 · 43270", "Thermal energy to the lower esophageal sphincter for reflux · ablation of a lesion"],
        ],
      },
      {
        name: "Dilation, tube, and stent steps",
        codes: [
          ["43233 · 43245 · 43248 · 43249", "Balloon dilation 30 mm or more · dilation of gastric/duodenal stricture · guidewire dilation · balloon dilation under 30 mm"],
          ["43246", "Percutaneous endoscopic gastrostomy (PEG) tube placement"],
          ["43266", "Stent placement"],
        ],
      },
    ],
    rules: [
      "43235 is not reported with any other EGD therapeutic code, with esophagoscopy codes (43197, 43198, 43210), or with the small-intestine enteroscopy codes (Section 4) — the bigger code already contains it.",
      "43238 and 43259 (the EUS codes) are each reported only ONCE per session. 43236 is not reported with 43243, 43254, or 43255 for the same lesion.",
      "For varices, use the variceal codes (43243, 43244) — not the general injection or band codes.",
      "Do not report 43259 with the other EGD therapeutic codes it replaces (43235, 43237, 43240, 43242, 43253) or with enteroscopy codes.",
    ],
    tips: [
      "The 'EGD family' test: does it include the duodenum? If not, EGD + modifier 52/53 — never a new code.",
      "43255 is for a bleeding lesion that was a reason for the scope. Bleeding CAUSED by the scope during the same session is packaged and not reported.",
      "On a gastric bypass patient, do not jump to enteroscopy — if the scope only reaches the jejunum past the join, EGD codes still apply.",
    ],
    traps: [
      "Coding 43235 plus 43239 for a biopsy EGD. Biopsy is 43239 alone.",
      "Looking for an 'esophagogastroscopy' code — there is none. It is an EGD code with modifier 52 or 53.",
    ],
    cases: [
      {
        label: "HARD SCENARIO",
        title: "Biopsy EGD when the scope cannot pass the pylorus",
        scenario: "A patient with severe gastric retention has an EGD. The scope cannot be advanced through the pylorus, so the duodenum is not examined. The doctor takes three biopsies of the stomach lining. No repeat exam is planned.",
        steps: [
          "Which family? The EGD family — the scope covered the esophagus and stomach.",
          "Was something done? Yes, biopsy → the therapeutic code 43239 (single or multiple biopsies — reported once). Do not add 43235.",
          "Was the duodenum reached? No, and no repeat exam is planned → modifier 52 (it would be 53 if a repeat were planned).",
        ],
        answer: "43239-52",
      },
    ],
  },
  {
    id: "enteroscopy",
    n: 4,
    title: "Small Intestinal Endoscopy (Enteroscopy)",
    range: "44360–44379 · 44380–44384",
    intro: [
      "Enteroscopy goes past the EGD reach. Antegrade (from the mouth) enteroscopy is named by the MOST DISTAL segment of small intestine actually examined.",
      "The dividing line is 50 cm past the pylorus: less than that stays in the EGD family; 50 cm or more moves you to enteroscopy — jejunum only, or through the ileum.",
    ],
    definitions: [
      ["Antegrade enteroscopy", "the scope travels forward from the mouth; reach is measured to the farthest small-intestine segment examined."],
      ["Ileoscopy through stoma", "a scope enters an ileostomy and examines the ileum — its own codes."],
    ],
    steps: [
      "① Could the scope be advanced at least 50 cm past the pylorus? No → EGD family (Section 3).",
      "② Yes, but only into the jejunum → 44360–44373. Through the ileum → 44376–44379.",
      "③ Pick the therapeutic step (biopsy, foreign body, snare, ablation, stent, tube) exactly as you would in the EGD family.",
      "④ The scope entered through an ileostomy → ileoscopy through stoma (44380–44384). Retrograde small-intestine exam via the anus or a colon stoma → unlisted 44799.",
    ],
    categories: [
      {
        name: "Layout by how far the scope went",
        codes: [
          ["43235–43259", "Esophagus to less than 50 cm beyond the pylorus (EGD family)"],
          ["44360–44373", "Esophagus to the JEJUNUM, 50 cm or more beyond the pylorus (44360 diagnostic; then biopsy, foreign body, control of bleeding 44366, snare, hot biopsy, ablation, stent, jejunostomy tube, conversion of a gastrostomy tube)"],
          ["44376–44379", "Esophagus through the ILEUM (44376 diagnostic; 44377 biopsy; 44378 with control of bleeding; 44379 with stent)"],
          ["44380–44384", "Ileoscopy through a stoma (44385–44386 cover pouch endoscopy, for example after ileoanal J-pouch surgery)"],
          ["44799", "Unlisted procedure, intestine — retrograde small-intestine exam via the anus or a colon stoma"],
        ],
      },
    ],
    rules: [
      "44360–44373 are not reported with EGD codes (43233, 43235–43259, 43266, 43270) or with 44376–44379, and 44376–44379 are not reported with EGD or 44360–44373.",
      "Pouch endoscopy (44385, 44386) is used for a patient who has had the colon removed with an ileo-anal connection, such as a J-pouch.",
    ],
    tips: [
      "Only the DEEPEST reach counts. Do not stack an EGD and an enteroscopy for the same pass of the scope.",
      "'Jejunum vs. ileum' is the whole enteroscopy decision once you are past the 50 cm line.",
    ],
  },
  {
    id: "ercp",
    n: 5,
    title: "Endoscopic Retrograde Cholangiopancreatography (ERCP)",
    range: "43260–43278 · +43273",
    intro: [
      "ERCP looks at the bile ducts and pancreatic ducts. A side-viewing scope goes to the papilla of Vater, a catheter is placed into the duct(s), and contrast is injected.",
      "43260 is the diagnostic base. Every therapeutic ERCP code already includes it — you never report 43260 with a therapeutic ERCP code.",
    ],
    diagram: <ErcpDiagram />,
    definitions: [
      ["ERCP", "an endoscopic exam of the gallbladder, bile (biliary) ducts, or pancreatic ducts — complete if AT LEAST ONE ductal system is visualized."],
      ["Papilla of Vater (ampulla)", "the small opening where the bile duct and pancreatic duct empty into the duodenum."],
      ["Sphincterotomy vs. sphincteroplasty", "cutting the papilla muscle (43262) vs. stretching the papilla with a balloon (43277)."],
      ["Stent 'exchange'", "removing an old stent and placing a new one — the same as stent 'replacement'."],
    ],
    steps: [
      "① Was at least one duct (biliary or pancreatic) actually visualized? Yes → ERCP codes. If no duct could be entered and visualized → report an EGD code instead.",
      "② Pick the diagnostic 43260 only when nothing else was done. Anything therapeutic replaces it.",
      "③ Stones: removal of stones/debris 43264; destruction of stones (any method, including lithotripsy) 43265. Stone destruction already includes removing stones in the same ductal system.",
      "④ Stents: placement 43274 and removal-plus-exchange 43276 are counted per stent — the first plain, each additional with modifier 59 (only for stents in separate ducts, such as one in the pancreatic duct and one in the bile duct, or separate right and left hepatic duct stents, or two side-by-side stents in one duct). Removal 43275 is reported ONCE per session no matter how many stents or foreign bodies come out — no modifier 59.",
      "⑤ Balloon dilation of a duct or the ampulla (sphincteroplasty) = 43277 for the first duct; each additional duct or stricture with modifier 59. Sphincteroplasty already includes sphincterotomy.",
      "⑥ ERCP through altered anatomy that still uses the natural route (for example a Billroth II gastroenterostomy) uses the regular ERCP codes. When the scope is passed other than through the natural route (for example after a gastric bypass), the codebook points to unlisted 47999 (biliary tract) or 48999 (pancreas).",
    ],
    categories: [
      {
        name: "The ERCP ladder",
        codes: [
          ["43260", "Diagnostic ERCP (separate procedure) — the base; includes guidewire passage"],
          ["43261", "With biopsy, single or multiple"],
          ["43262", "With sphincterotomy / papillotomy"],
          ["43263", "With pressure measurement of the sphincter of Oddi (once per session)"],
          ["43264 · 43265", "Removal of stones/debris · destruction of stones (lithotripsy)"],
          ["43274 · 43275 · 43276", "Stent placement (each stent) · removal of stent(s) or foreign body(s) (ONCE per session) · removal AND exchange of a stent (each stent)"],
          ["43277", "Balloon dilation of a bile/pancreatic duct or the ampulla (sphincteroplasty), each duct"],
          ["43278", "Ablation of a tumor, polyp, or other lesion (includes pre- and post-dilation and guidewire passage when performed)"],
          ["+43273", "ADD-ON: cannulation of the papilla with direct visualization of the ducts (cholangioscopy) — once per procedure"],
        ],
      },
      {
        name: "Ducts that can be stented or balloon-dilated",
        codes: [
          ["Pancreas", "Major and minor pancreatic ducts"],
          ["Biliary tree", "Common bile duct · right hepatic duct · left hepatic duct · cystic duct/gallbladder"],
        ],
      },
    ],
    rules: [
      "Guidewire passage is part of ERCP and is not reported separately.",
      "An ERCP counts as complete if at least ONE ductal system is visualized — so if the bile duct fails but the pancreatic duct works, it is still an ERCP. Only when NO ductal system is visualized do you fall back to an EGD code (43235–43259, 43266, 43270).",
      "Balloon dilation is packaged with stent placement and is not reported separately. Do not report 43277 with 43274 or 43276 for dilation and stent in the same duct.",
      "Do not report sphincterotomy (43262) with 43274 for a stent in the same duct, with 43276 for a stent exchange, or with 43277 — sphincteroplasty already includes it.",
      "43277 counts as its own service when a narrowed duct has to be opened up before stones or debris can be cleared. Stretching that is only incidental to getting an instrument through is NOT reported. A balloon catheter used simply to sweep stones out is a stone-removal service (43264), never 43277.",
      "43262 (sphincterotomy) may be reported together with 43261, 43263, 43264, 43265, 43275, and 43278 when the papilla is also cut — but not with 43260, 43277, or a stent placed or exchanged in the same location.",
      "If ERCP imaging of the ducts is performed and images are saved with a report, the imaging is reported with 74328, 74329, or 74330.",
    ],
    tips: [
      "Build ERCP in this order: was a duct seen? → what was done? → how many stents/ducts/strictures? — and add modifier 59 only for the SECOND and later repeats of the same code.",
      "Mnemonic: 43262 CUTS, 43277 STRETCHES. If both were done, only 43277 is reported.",
      "43264 (remove stones) and 43265 (destroy stones) are 'either/or' for the same ductal system — destruction already includes removal.",
    ],
    traps: [
      "Putting modifier 59 on 43275. Stent removal is reported ONCE per session, however many stents come out.",
      "Reporting 43277 (dilation) with 43274 (stent) for the same duct — dilation is packaged with the stent.",
      "Reporting 43262 (cut) together with 43277 (stretch). The stretch code already includes the cut.",
      "Coding an ERCP as 43260 when a stent, stone removal, or biopsy was done — 43260 is for looking only.",
    ],
    cases: [
      {
        label: "HARD SCENARIO",
        title: "Two stents in two different ducts",
        scenario: "During one ERCP the doctor places a plastic stent in the common bile duct and a second stent in the pancreatic duct. Nothing else is done.",
        steps: [
          "At least one duct was visualized, and something was done → therapeutic ERCP. Do not report 43260.",
          "Stent placement is 43274, counted per stent.",
          "The two stents sit in two different ducts, so the second one is reported with modifier 59.",
        ],
        answer: "43274, 43274-59",
      },
    ],
  },
];

export default function DigestiveReviewerPart1Page() {
  return (
    <ReviewerShell
      part={1}
      subtitle="Part 1 — Endoscopy rules, Esophagoscopy, EGD, Enteroscopy & ERCP (43180–43278, 44360–44384)"
      sections={sections}
      intro={
        <>
          <strong>How this series is organized.</strong> The 40,000 series follows your training deck: (1) Code listing, (2) Endoscopy, (3) Bariatric surgery, (4) Hernia repair, (5) Hemorrhoid treatment. Part 1 covers the UPPER GI half of Endoscopy, Part 2 the LOWER GI half, and Part 3 covers Bariatric, Hernia, and Hemorrhoids. Every code and rule was cross-checked against the 2026 CPT codebook, and the guidelines are paraphrased, not copied. Where the deck disagrees with CPT 2026, this reviewer follows the codebook and says so.
        </>
      }
    />
  );
}
