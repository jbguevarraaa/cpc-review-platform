import { FlashcardPlayer, type FlashItem } from "../_digestive/players";

const cards: FlashItem[] = [
  // ---- Endoscopy rules ----
  { topic: "Endoscopy rules", front: "What decides the code FAMILY for any endoscopy?", back: "How far the TIP of the scope went — the farthest landmark reached. Same scope, farther reach = a different family. Then the technique picks the code inside the family." },
  { topic: "Endoscopy rules", front: "Diagnostic scope code plus a therapeutic scope code in the same session — allowed?", back: "No. The therapeutic code already includes the diagnostic look. Report ONLY the therapeutic code." },
  { topic: "Endoscopy rules", front: "The scope itself caused bleeding and the doctor controlled it — report the bleeding-control code?", back: "No. Bleeding that results from the endoscopic procedure, controlled in the same session, is packaged. A bleeding lesion that was the REASON for the scope is different." },
  { topic: "Endoscopy rules", front: "What does '(s)' after tumor, polyp, or lesion mean in a descriptor?", back: "One OR many lesions, removed by that technique — the code is reported ONCE." },
  { topic: "Endoscopy rules", front: "52 vs. 53 — how does each section use them?", back: "EGD with the duodenum skipped: 52 if no repeat exam is planned, 53 if a repeat IS planned. Colonoscopy stopped short: diagnostic = 45378-53, therapeutic = therapeutic code-52." },
  { topic: "Endoscopy rules", front: "Modifier 59 on a repeated endoscopy code — when?", back: "Only where the code's own note says so: an additional stricture, a stent in a separate duct, and so on. It never overrides a 'once per session' limit." },
  { topic: "Endoscopy rules", front: "Endoscopy vs. laparoscopy — the difference?", back: "Endoscopy goes through a natural opening or a stoma. Laparoscopy goes through small cuts in the abdominal wall. They are indexed apart, and surgical laparoscopy always includes diagnostic laparoscopy (49320)." },

  // ---- Esophagoscopy ----
  { topic: "Esophagoscopy", front: "The 3-question build for any esophagoscopy code?", back: "(1) Rigid or flexible? (2) Mouth (transoral) or nose (transnasal)? (3) Diagnostic, or which therapeutic step?" },
  { topic: "Esophagoscopy", front: "Where do the esophagoscopy families live?", back: "43180–43196 = rigid transoral. 43197–43198 = flexible transnasal. 43200–43232 = flexible transoral (43200 is the diagnostic base)." },
  { topic: "Esophagoscopy", front: "Which esophagoscopy dilation codes already include fluoroscopy?", back: "43213 and 43214 (and EGD 43233). Never add 74360 or 76000. 74360 IS added for 43195, 43196, 43220, and 43226 (and 43212 stent placement)." },
  { topic: "Esophagoscopy", front: "43213 vs. 43214 vs. 43220?", back: "43213 = dilation by balloon or dilator, retrograde. 43214 = balloon 30 mm or larger. 43220 = balloon under 30 mm. Several strictures: 43213 once, then with modifier 59 for each additional." },
  { topic: "Esophagoscopy", front: "Which scope goes past the GE junction and looks at the stomach and duodenum?", back: "Not esophagoscopy. That is an EGD (43235–43259). Esophagoscopy ends at the GE junction, and retroflexion to peek at the upper stomach does not change the code." },

  // ---- EGD ----
  { topic: "EGD", front: "What does an EGD examine?", back: "Esophagus, stomach, pylorus, and duodenum — or a short way (under 50 cm) past the pylorus into the early jejunum. 43235 is the diagnostic base." },
  { topic: "EGD", front: "Is there a code for 'esophagogastroscopy' (duodenum not examined)?", back: "No. Use the EGD code with modifier 52 (no repeat exam planned) or 53 (repeat exam planned)." },
  { topic: "EGD", front: "EGD biopsy — 43235 plus 43239?", back: "No. Biopsy, single or multiple, is 43239 alone. The diagnostic 43235 is never added." },
  { topic: "EGD", front: "Variceal codes in the EGD family?", back: "43243 = sclerosis injection of varices. 43244 = band ligation of varices. Use these instead of the general injection or band codes." },
  { topic: "EGD", front: "Which EGD dilation code is for a gastric or duodenal stricture?", back: "43245. The esophageal dilation codes are 43248 (guidewire), 43249 (balloon under 30 mm), and 43233 (balloon 30 mm or more, includes fluoroscopy)." },
  { topic: "EGD", front: "EUS codes in the EGD family — what should you remember?", back: "43237 and 43259 are EUS. 43238 and 43242 are EUS-guided needle aspiration/biopsy. 43237, 43238, 43240, 43242, 43253, and 43259 are each reported only ONCE per session." },
  { topic: "EGD", front: "Gastric bypass patient, scope goes past the join into the jejunum — enteroscopy?", back: "Not automatically. On a surgically altered stomach, examining the jejunum just past the join still uses the EGD codes." },
  { topic: "EGD", front: "Other useful EGD codes to recognize?", back: "43246 = PEG tube placement. 43266 = stent placement. 43270 = ablation. 43255 = control of bleeding (a bleeding lesion that was the reason). 43290/43291 = intragastric balloon deployment/removal." },

  // ---- Enteroscopy ----
  { topic: "Enteroscopy", front: "What is the dividing line between EGD and enteroscopy?", back: "50 cm past the pylorus. Under 50 cm stays EGD. 50 cm or more is enteroscopy." },
  { topic: "Enteroscopy", front: "Jejunum vs. ileum in enteroscopy?", back: "Past the 50 cm line: jejunum only = 44360–44373. Through the ileum = 44376–44379. Only the DEEPEST reach counts." },
  { topic: "Enteroscopy", front: "Scope through an ileostomy?", back: "Ileoscopy through a stoma, 44380–44384 (44380 diagnostic). Pouch endoscopy (for example a J-pouch) is 44385/44386." },
  { topic: "Enteroscopy", front: "Retrograde small-intestine exam through the anus or a colon stoma?", back: "No dedicated code. It goes to unlisted 44799." },

  // ---- ERCP ----
  { topic: "ERCP", front: "When is an ERCP considered complete?", back: "If at least ONE ductal system (bile or pancreatic) is visualized. If NO duct is visualized, report an EGD code instead." },
  { topic: "ERCP", front: "43260 with a therapeutic ERCP code?", back: "Never. Every therapeutic ERCP code already includes the diagnostic 43260, and guidewire passage is part of ERCP." },
  { topic: "ERCP", front: "Mnemonic for 43262 vs. 43277?", back: "43262 CUTS (sphincterotomy). 43277 STRETCHES (balloon dilation / sphincteroplasty). If both are done, only 43277 is reported." },
  { topic: "ERCP", front: "Stones: 43264 vs. 43265?", back: "43264 = removal of stones or debris. 43265 = destruction (for example lithotripsy) and it already includes removal from the same ductal system. Either/or, not both." },
  { topic: "ERCP", front: "Stents: which codes are per stent and which are once per session?", back: "43274 (placement) and 43276 (removal AND exchange) are per stent. 43275 (removal) is reported ONCE per session, however many stents or foreign bodies come out. No 59 on 43275." },
  { topic: "ERCP", front: "When does the second stent get modifier 59?", back: "For a stent in a separate duct (pancreatic vs. common bile duct), separate right and left hepatic duct stents, or two side-by-side stents in one duct." },
  { topic: "ERCP", front: "43277 (balloon dilation) — how is it repeated?", back: "Reported for each duct or stricture, with modifier 59 on the additional ones. It is packaged with a stent in the same duct, and 43277 is reported when a stricture must be opened BEFORE stones can be cleared." },
  { topic: "ERCP", front: "+43273 — what is it and how often?", back: "An add-on for cannulation of the papilla with direct visualization of the ducts (cholangioscopy). Once per procedure, with a primary ERCP code. 43263 (sphincter of Oddi pressure) is also once per session." },
  { topic: "ERCP", front: "Where are the ERCP codes — the 47,000s?", back: "No. ERCP is 43260–43278, in the esophagus/stomach section. The 47,000s are liver and biliary tract surgery." },
  { topic: "ERCP", front: "ERCP through a Billroth II vs. after a gastric bypass?", back: "Billroth II keeps the natural route, so the regular ERCP codes apply. When the scope is passed other than through the natural route (for example after a gastric bypass), the codebook points to unlisted 47999 (biliary) or 48999 (pancreas)." },

  // ---- Lower GI ----
  { topic: "Lower GI", front: "The four lower GI scopes from shortest to longest reach?", back: "Anoscopy, proctosigmoidoscopy (rigid), sigmoidoscopy (flexible), colonoscopy." },
  { topic: "Lower GI", front: "Where does each lower GI family live?", back: "Anoscopy 46600–46615 · rigid proctosigmoidoscopy 45300–45327 · flexible sigmoidoscopy 45330–45350 · colonoscopy 45378–45398 · colonoscopy via stoma 44388–44408." },
  { topic: "Lower GI", front: "The pivot landmark between sigmoidoscopy and colonoscopy?", back: "The splenic flexure. A PLANNED sigmoidoscopy stops at or before it. A PLANNED colonoscopy goes to the cecum, and if it falls short it stays in the colonoscopy family." },
  { topic: "Lower GI", front: "Which lower GI codes split SINGLE lesion from MULTIPLE lesions?", back: "Anoscopy (46610/46611 single, 46612 multiple) and rigid proctosigmoidoscopy (45308/45309 single, 45315 multiple). Flexible sigmoidoscopy and colonoscopy use '(s)' and are reported once." },
  { topic: "Lower GI", front: "High-resolution anoscopy codes?", back: "46601 = diagnostic HRA. 46607 = HRA with biopsy. 46600 (standard anoscopy) is not reported with 46020–46947 anal procedures." },

  // ---- Colonoscopy ----
  { topic: "Colonoscopy", front: "Snare vs. hot forceps vs. biopsy in colonoscopy?", back: "Snare removal = 45385. Hot biopsy forceps removal = 45384. Biopsy = 45380. Match the code to the TOOL, not the word 'polypectomy'." },
  { topic: "Colonoscopy", front: "Screening colonoscopy, several polyps removed with a snare?", back: "45385, reported ONCE. The screening becomes therapeutic, so 45378 is not reported. Modifier 33 is a CPT preventive-service modifier; whether a payer wants 33 or PT (Medicare) is payer policy." },
  { topic: "Colonoscopy", front: "Planned total colonoscopy stops early — how do you code it?", back: "Diagnostic (looking only): 45378-53. Therapeutic: the therapeutic code with modifier 52. Never switch to a sigmoidoscopy code." },
  { topic: "Colonoscopy", front: "Colonoscopy — bleeding control 45382?", back: "Not reported with 45381 or 45398 for the same lesion, and bleeding caused by the scope itself is packaged." },
  { topic: "Colonoscopy", front: "Which colonoscopy code carries band ligation of hemorrhoids?", back: "45398 for colonoscopy, 45350 for sigmoidoscopy. 46221 (banding without a scope) is not reported with either." },
  { topic: "Colonoscopy", front: "Once-per-session lower GI codes?", back: "Sigmoidoscopy 45337, 45341, 45342, 45350. Colonoscopy 45391, 45392, 45393, 45398. Stoma colonoscopy 44406, 44407, 44408." },
  { topic: "Colonoscopy", front: "Colonoscopy through a stoma?", back: "Its own range, 44388–44408, with the same technique ladder (44388 diagnostic, 44389 biopsy, and so on). Incomplete diagnostic: 44388-53." },

  // ---- Bariatric ----
  { topic: "Bariatric", front: "The bariatric decision order?", back: "Pick the OPERATION first (band, sleeve, bypass, duodenal switch), then the APPROACH (laparoscopic or open). The approach decides the code." },
  { topic: "Bariatric", front: "Gastric bypass codes?", back: "Laparoscopic: 43644 (Roux limb 150 cm or less), 43645 (more than 150 cm or small-intestine reconstruction). Open: 43846 (150 cm or less), 43847 (more than 150 cm)." },
  { topic: "Bariatric", front: "Sleeve gastrectomy codes?", back: "Laparoscopic: 43775. Open (restriction without bypass): 43843." },
  { topic: "Bariatric", front: "BPD-DS — the code and its landmark?", back: "43845: partial gastrectomy, duodenoileostomy, ileoileostomy with a 50–100 cm common channel. Open." },
  { topic: "Bariatric", front: "Lap adjustable band codes?", back: "43770 insert (complete system) · 43771 revise (one component) · 43772 remove ONE component · 43774 remove the complete system · 43773 remove and replace ONE component. Removal AND replacement of both = unlisted 43659." },
  { topic: "Bariatric", front: "Open band work?", back: "Open port only: 43886 revision, 43887 removal, 43888 removal and replacement. An open revision of a non-adjustable restrictive procedure is 43848." },
  { topic: "Bariatric", front: "Are band adjustments after surgery reported?", back: "Not for the typical patient. Adjusting the band by injecting or removing fluid through the port is part of the surgical package." },

  // ---- Hernia ----
  { topic: "Hernia", front: "How are inguinal hernia codes sorted?", back: "By AGE (or PCA for preterm babies), then initial vs. recurrent, then reducible vs. incarcerated/strangulated. Anterior abdominal hernias are sorted by SIZE instead." },
  { topic: "Hernia", front: "How do you calculate PCA?", back: "Gestational age at birth + the baby's age in weeks at the time of repair. Used for preterm babies (born before 37 weeks)." },
  { topic: "Hernia", front: "The initial inguinal age tiers?", back: "49491/49492: preterm up to 50 wk PCA. 49495/49496: preterm over 50 wk PCA and under 6 months, or full-term under 6 months. 49500/49501: 6 months to under 5 years. 49505/49507: age 5 and older. First code = reducible, second = incarcerated/strangulated." },
  { topic: "Hernia", front: "Trap: when does PCA STOP mattering?", back: "PCA only decides the tier for babies still younger than 6 months. A 32-week-old baby is about 7.4 months, so use the chronologic-age tier (49500/49501)." },
  { topic: "Hernia", front: "Recurrent, sliding, and laparoscopic inguinal?", back: "Recurrent: 49520/49521, any age. Sliding: 49525, but a sliding hernia that is incarcerated or strangulated uses the incarcerated codes. Laparoscopic: 49650 initial, 49651 recurrent." },
  { topic: "Hernia", front: "Femoral and lumbar hernia codes?", back: "Initial femoral: 49550 reducible, 49553 incarcerated. Recurrent femoral: 49555, 49557. Lumbar: 49540. No age split." },
  { topic: "Hernia", front: "Strangulated hernia — do you add an organ code?", back: "Only if an organ was actually removed or repaired: 44120 (intestine), 54520 (testicle), 58940 (ovary). Otherwise the hernia code alone." },
  { topic: "Hernia", front: "Modifiers 50 and 63 with hernia codes?", back: "Modifier 50 (bilateral) goes on unilateral inguinal/femoral codes but NEVER with 49591–49622. Modifier 63 (infant under 4 kg) is not used with 49491, 49492, 49495, 49496, 49600, 49605, 49606, 49610, 49611." },
  { topic: "Hernia", front: "The 2023 anterior abdominal hernia system?", back: "49591–49596 initial and 49613–49618 recurrent, by total defect size (under 3 cm, 3–10 cm, over 10 cm), reducible vs. incarcerated/strangulated. Any approach, mesh included." },
  { topic: "Hernia", front: "Which old hernia codes are gone?", back: "49560–49566, 49568 (mesh), 49570–49590, and the laparoscopic ventral 49652–49657. Old slides may still show them. They are not in CPT 2026." },
  { topic: "Hernia", front: "How do you measure the total defect length?", back: "The largest span across the outer edges of ALL repaired defects, measured before the hernia is opened. Separate defects 10 cm or more apart are measured and added." },
  { topic: "Hernia", front: "A reducible and an incarcerated anterior hernia repaired together?", back: "Report the whole repair as incarcerated/strangulated, once, using the total defect length. Example: 2 cm reducible + 4 cm incarcerated, 2 cm apart = 8 cm = 49594." },
  { topic: "Hernia", front: "Parastomal hernia and mesh removal?", back: "Parastomal: 49621 (reducible), 49622 (incarcerated/strangulated). +49623 is an add-on for removing total or near-total NON-infected mesh. Infected mesh removal is 11008." },

  // ---- Hemorrhoids ----
  { topic: "Hemorrhoids", front: "How are hemorrhoid codes picked?", back: "By the TREATMENT (excise, ligate, inject, destroy), then internal, external, or both, then the number of COLUMNS or groups treated." },
  { topic: "Hemorrhoids", front: "External hemorrhoidectomy codes?", back: "46250 = 2 or more columns/groups. A single column has no dedicated code, so unlisted 46999. 46320 = excision of one thrombosed external hemorrhoid." },
  { topic: "Hemorrhoids", front: "Internal and external hemorrhoidectomy?", back: "46255 single column, 46257 with fissurectomy, 46258 with fistulectomy. 46260 2+ columns, 46261 with fissurectomy, 46262 with fistulectomy." },
  { topic: "Hemorrhoids", front: "Incision vs. excision of a thrombosed external hemorrhoid?", back: "Incision (drain the clot): 46083. Excision (cut it out): 46320." },
  { topic: "Hemorrhoids", front: "Ligation and destruction codes?", back: "46221 rubber band (no scope) · 46945/46946 ligation other than rubber band, single/2+ columns · 46948 THD (2+ columns, includes ultrasound and mucopexy) · 46947 hemorrhoidopexy · 46500 injection · 46930 thermal destruction." },
  { topic: "Hemorrhoids", front: "Scope + rubber band vs. no scope + rubber band?", back: "Scope: use the scope code (45350 or 45398). No scope: 46221. 46221 is not reported with 45350 or 45398." },
  { topic: "Hemorrhoids", front: "How do you count columns?", back: "Count the columns treated, not the lumps. The anal canal has three major hemorrhoid areas. Several hemorrhoids in different columns still make '2 or more columns/groups'." },
];

export default function DigestiveFlashcardsPage() {
  return (
    <FlashcardPlayer
      kicker="40,000 SERIES · FLASHCARDS"
      title="5-Minute Commute Review"
      nav={[
        { href: "/cpt/surgery/40,000", label: "Digestive home" },
        { href: "/cpt/surgery/40000-series-guidelines-reviewer", label: "Reviewer Part 1" },
        { href: "/cpt/surgery/40000-series-guidelines-reviewer-part-2", label: "Part 2" },
        { href: "/cpt/surgery/40000-series-guidelines-reviewer-part-3", label: "Part 3" },
        { href: "/cpt/surgery/40000-series-practice-quiz", label: "Quiz" },
        { href: "/cpt/surgery/40000-series-discussion-guide", label: "Discussion Guide" },
      ]}
      cards={cards}
    />
  );
}
