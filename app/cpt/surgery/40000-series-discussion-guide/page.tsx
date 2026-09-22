import { DiscussionGuidePage, DGList, type DGTopic } from "../_digestive/discussion-guide";
import { ORANGE } from "../_digestive/players";

const topics: DGTopic[] = [
  {
    n: 1,
    title: "Organization of the Digestive System Chapter",
    range: "40490–49999",
    items: [
      {
        q: "Be able to identify the organization of the Chapter (e.g., 43K is Esophagus and Stomach).",
        approach: "Read only the FIRST TWO DIGITS of the code to find its body-region block — do not try to memorize the whole chapter in numeric order. The chapter runs mouth-to-anus, front to back.",
        answer: (
          <>
            <p style={{ margin: "0 0 8px" }}>The Digestive System chapter is organized by BODY REGION, moving roughly from the mouth down to the anus:</p>
            <DGList
              items={[
                "40K — Lips and vestibule of the mouth (40490–40899)",
                "41K — Floor and front of the mouth: tongue, floor of mouth, teeth and gums (41000–41599, 41800–41899)",
                "42K — Top and back of the mouth: palate, uvula, salivary glands, pharynx, adenoids, tonsils (42000–42599, 42700–42999)",
                "43K — Esophagus and stomach — includes endoscopy, ERCP (43260–43278), and bariatric surgery (43020–43999)",
                "44K — Small intestines, Meckel's diverticulum, and appendix (44005–44979)",
                "45K — Colon and rectum (45000–45999)",
                "46K — Anus, including hemorrhoids and anoscopy (46020–46999)",
                "47K — Liver and biliary tract (47000–47999)",
                "48K — Pancreas (48000–48999)",
                "49K — Abdomen, peritoneum, and omentum — includes hernia repair (49000–49999)",
              ]}
            />
            <p style={{ margin: "8px 0 0" }}>Two ranges cross block boundaries that beginners often miss: ERCP (bile and pancreatic duct endoscopy) is filed under 43K with the esophagus/stomach codes, not under 47K or 48K where the liver and pancreas otherwise live. And hernia repair is filed under 49K (abdomen), not under whichever organ the hernia happens to involve.</p>
          </>
        ),
      },
    ],
  },
  {
    n: 2,
    title: "Endoscopies",
    range: "43180–43273 · 44360–44408 · 45300–45398 · 46600–46615",
    lead: "Every endoscopy in this chapter is built the same way: the FARTHEST landmark the scope tip reaches picks the code family, and the technique used (look only, biopsy, remove, dilate, stent…) picks the code inside that family.",
    items: [
      {
        q: "What endoscopies are performed on the upper GI?",
        approach: "List them shortest reach to longest reach — that order is also the order they appear in the codebook and in the reviewer.",
        answer: (
          <DGList
            items={[
              <><strong>Esophagoscopy</strong> (43180–43232) — rigid or flexible, through the mouth or the nose; views the esophagus only.</>,
              <><strong>Esophagogastroduodenoscopy (EGD)</strong> (43233, 43235–43259, 43266, 43270) — the workhorse upper-GI scope.</>,
              <><strong>Enteroscopy (small intestine)</strong> (44360–44384) — antegrade, past the EGD's reach, into the jejunum or through the ileum; or ileoscopy/pouch endoscopy through a stoma.</>,
              <><strong>ERCP</strong> (43260–43278, +43273) — a side-viewing scope reaches the papilla of Vater to examine the bile and/or pancreatic ducts.</>,
            ]}
          />
        ),
      },
      {
        q: "What are the required structures examined by the provider for each of these upper GI endoscopies?",
        approach: "Each scope family's name IS its structure list — match the family to the anatomy it is defined to cover.",
        answer: (
          <DGList
            items={[
              <><strong>Esophagoscopy:</strong> the esophagus only, from the upper esophageal sphincter (UES) down to the gastroesophageal (GE) junction. Retroflexing to peek at the upper stomach does not change the code.</>,
              <><strong>EGD:</strong> esophagus + stomach + pylorus + duodenum, or a short way (under 50 cm) past the pylorus into the early jejunum.</>,
              <><strong>Enteroscopy:</strong> everything an EGD covers, PLUS 50 cm or more past the pylorus — either into the jejunum only (44360–44373) or all the way through the ileum (44376–44379).</>,
              <><strong>ERCP:</strong> at least one ductal system — the biliary tree (common bile duct, right/left hepatic ducts, cystic duct/gallbladder) or the pancreatic duct(s) — visualized through the papilla of Vater.</>,
            ]}
          />
        ),
      },
      {
        q: "What endoscopies are performed on the lower GI?",
        approach: "Same shortest-to-longest approach as upper GI, plus the extra wrinkle that the lower GI scopes can also enter through a stoma instead of the anus.",
        answer: (
          <DGList
            items={[
              <><strong>Anoscopy</strong> (46600–46615) — shortest reach.</>,
              <><strong>Proctosigmoidoscopy</strong> (45300–45327) — rigid scope.</>,
              <><strong>Sigmoidoscopy</strong> (45330–45350) — flexible scope.</>,
              <><strong>Colonoscopy</strong> (45378–45398 through the rectum, or 44388–44408 through a stoma) — longest reach.</>,
              <><strong>Ileoscopy and pouch endoscopy through a stoma</strong> (44380–44386) — for a patient with an ileostomy or an internal pouch (for example an ileoanal J-pouch).</>,
            ]}
          />
        ),
      },
      {
        q: "What are the required structures examined by the provider for each of these lower GI endoscopies?",
        approach: "The splenic flexure and the cecum are the two landmarks that separate these four scopes — learn where each one is required to stop or reach.",
        answer: (
          <DGList
            items={[
              <><strong>Anoscopy:</strong> the anal canal and the lowest part of the rectum.</>,
              <><strong>Proctosigmoidoscopy (rigid):</strong> the rectum, plus a short way into the sigmoid colon.</>,
              <><strong>Sigmoidoscopy (flexible):</strong> the rectum and sigmoid colon, plus a little farther up the descending colon — by design it stops at or before the splenic flexure.</>,
              <><strong>Colonoscopy:</strong> the WHOLE colon, from the rectum to the cecum. It may also examine the terminal ileum, or extend into small bowel up to a surgical connection (anastomosis) in a patient who has had part of the colon removed.</>,
            ]}
          />
        ),
      },
      {
        q: "If not all of the structures are examined, how is the service reported?",
        approach: "First figure out which family you are in — EGD or colonoscopy — because the two families use modifier 52 and 53 differently.",
        answer: (
          <>
            <DGList
              items={[
                <><strong>EGD family:</strong> if the duodenum is skipped or cannot be reached, report the EGD code with modifier 52 (no repeat exam planned) or modifier 53 (a repeat exam IS planned).</>,
                <><strong>Colonoscopy family:</strong> if a PLANNED total colonoscopy falls short, it stays a colonoscopy code — it never turns into a sigmoidoscopy code. Looking only → the diagnostic base 45378 with modifier 53. Therapy was done before stopping → the therapeutic code with modifier 52 (never 45378).</>,
                "In every case, the operative note must document WHY the exam stopped short.",
              ]}
            />
          </>
        ),
        codes: [["52", "Reduced service — part of the planned exam was not done"], ["53", "Discontinued — the provider stopped because continuing was unsafe"]],
      },
    ],
  },
  {
    n: 3,
    title: "Bariatric Surgery",
    range: "43644–43645 · 43770–43775 · 43842–43848 · 43886–43888 · 43290–43291",
    lead: "Bariatric surgery codes are built in two steps: pick the OPERATION first, then the APPROACH — the approach is what actually decides the code number.",
    items: [
      {
        q: "What are the two (2) approaches to bariatric surgery?",
        approach: "Ask 'through small cuts, or through one open incision?' — that is the whole question.",
        answer: (
          <>
            <p style={{ margin: 0 }}>Laparoscopic and open. (A gastric balloon placed and removed through an EGD, 43290/43291, is a separate, endoscopic route and is not described as 'laparoscopic' or 'open'.)</p>
          </>
        ),
      },
      {
        q: "What are the common bariatric procedures listed in the CPT system?",
        approach: "Group them by what they physically do to the stomach or intestine — restrict capacity, remove tissue, or re-route the gut.",
        answer: (
          <DGList
            items={[
              <><strong>Adjustable gastric band</strong> — a band placed around the upper stomach, with a subcutaneous port to adjust it.</>,
              <><strong>Sleeve gastrectomy</strong> (longitudinal gastrectomy) — most of the stomach along its outer curve is removed.</>,
              <><strong>Gastric bypass (Roux-en-Y)</strong> — a small stomach pouch is connected to a limb of small intestine.</>,
              <><strong>Biliopancreatic diversion with duodenal switch (BPD-DS)</strong> — partial gastrectomy plus a re-routed small intestine with a short common channel.</>,
              <><strong>Gastroplasty</strong> (vertical banded gastroplasty) — the stomach is stapled to create a small pouch.</>,
              <><strong>Intragastric balloon</strong> — a balloon placed endoscopically to take up stomach space.</>,
            ]}
          />
        ),
      },
      {
        q: "Identify the code(s) according to (1) approach and (2) procedure.",
        approach: "Say the operation out loud, then the approach, and read the code straight off — 'lap sleeve', 'open bypass', and so on.",
        answer: (
          <DGList
            items={[
              <><strong>Gastric bypass:</strong> laparoscopic 43644 (Roux limb 150 cm or less) / 43645 (more than 150 cm, or with small-intestine reconstruction to limit absorption). Open 43846 / 43847 (same two splits).</>,
              <><strong>Sleeve gastrectomy:</strong> laparoscopic 43775. Open restrictive procedure without bypass (other than vertical banded gastroplasty, and this includes the open sleeve) 43843.</>,
              <><strong>Adjustable gastric band, laparoscopic:</strong> insert 43770 (complete system) or 43770-52 (one component only); revise (component only) 43771; remove 43774 (complete system) or 43772 (one component); replace both components 43659 (unlisted); replace one component 43773.</>,
              <><strong>Adjustable gastric band, open:</strong> port-component work only — 43886 revise, 43887 remove, 43888 remove and replace.</>,
              <><strong>Gastroplasty (vertical banded), open:</strong> 43842. Revision of a gastric restrictive procedure other than an adjustable band, open: 43848.</>,
              <><strong>BPD-DS:</strong> 43845 (open).</>,
              <><strong>Intragastric balloon, by EGD:</strong> 43290 deployment · 43291 removal.</>,
            ]}
          />
        ),
      },
      {
        q: "What services are packaged with bariatric procedures?",
        approach: "Ask whether the extra service is something done TO adjust the same device later, or a different problem found during the same operative session.",
        answer: (
          <>
            <p style={{ margin: 0 }}>Adjusting a gastric band after surgery — injecting or removing fluid through the port to change the band's size — is part of the surgical package for the typical patient and is NOT reported separately. Surgical laparoscopy also always includes diagnostic laparoscopy, so a separate diagnostic-laparoscopy code is never added on top of a laparoscopic bariatric code.</p>
          </>
        ),
      },
      {
        q: "Where applicable, how are system and component codes represented in bariatric surgery?",
        approach: "This applies to the adjustable gastric band only — ask 'was the whole system touched, or just one piece (the band, or the port)?'",
        answer: (
          <>
            <p style={{ margin: "0 0 8px" }}>The laparoscopic adjustable gastric band is the one bariatric procedure with a true system-vs-component split, because it has two physical parts — the band itself and the subcutaneous port:</p>
            <DGList
              items={[
                "INSERT — complete system (band + port): 43770. One component only: 43770 with modifier 52.",
                "REVISE — component only: 43771.",
                "REMOVE — complete system (band + port): 43774. ONE component only (band or port): 43772.",
                "REPLACE — removal and replacement of BOTH band and port: unlisted 43659 (no dedicated code exists). One component: 43773.",
              ]}
            />
            <p style={{ margin: "8px 0 0" }}>Open surgery only reaches the port component, never the whole system: 43886 (revise), 43887 (remove), 43888 (remove and replace).</p>
          </>
        ),
      },
    ],
  },
  {
    n: 4,
    title: "Hernia Treatments",
    range: "49491–49659",
    lead: "Hernia codes sort first by TYPE (inguinal, femoral, lumbar, anterior abdominal, parastomal). Inguinal, femoral, and lumbar hernias are split by patient AGE; anterior abdominal and parastomal hernias are split by defect SIZE instead.",
    items: [
      {
        q: "How is the Post-Conception Age (PCA) computed?",
        approach: "PCA only ever matters for a preterm baby (born before 37 weeks) who is still younger than 6 months old at the time of repair — check both conditions before you bother computing it.",
        answer: (
          <>
            <p style={{ margin: "0 0 8px" }}><strong>PCA = gestational age at birth (in weeks) + the baby's age in weeks at the time of the repair.</strong></p>
            <p style={{ margin: 0 }}>Compare the result to the 50-week line: 50 weeks PCA or less is the first (youngest) inguinal-hernia tier (49491/49492); over 50 weeks PCA, but still under 6 months old, is the next tier (49495/49496). Once the baby is 6 months old or older, stop using PCA — code from ordinary chronologic age instead.</p>
          </>
        ),
      },
      {
        q: "What services are packaged with hernia procedures?",
        approach: "Look for the phrase 'with or without' in a code's own descriptor, and remember mesh's special rule for anterior abdominal hernias.",
        answer: (
          <DGList
            items={[
              "The initial inguinal hernia codes are 'with or without hydrocelectomy' — a hydrocele repaired during the same operative session is not reported separately.",
              "Mesh (or another prosthesis) placed during an anterior abdominal or parastomal hernia repair (49591–49622) is INCLUDED and not reported separately, regardless of approach.",
              "Surgical laparoscopy always includes diagnostic laparoscopy.",
            ]}
          />
        ),
      },
      {
        q: "What services are NOT packaged with hernia procedures and may be reported separately?",
        approach: "Look for a separate CPT code number tied to the extra work — a true add-on code, or a wholly different procedure code, is the sign that it is billed on its own.",
        answer: (
          <DGList
            items={[
              <><strong>Repair or removal of a strangulated organ</strong> — reported IN ADDITION to the hernia code, only when the organ was actually removed or repaired: 44120 (intestine), 54520 (testicle), 58940 (ovary).</>,
              <><strong>Removal of old mesh</strong> — add-on +49623 for total or near-total NON-infected mesh; infected mesh removal is reported with 11008 instead.</>,
              <><strong>A different hernia type repaired at the same session</strong> — for example an inguinal repair plus an anterior abdominal repair — each is reported separately, generally with modifier 59.</>,
              "Debridement of the abdominal wall — 11042–11043.",
            ]}
          />
        ),
      },
      {
        q: 'Identify the "code pairs" for hernia repairs performed via "open" and "laparoscopic" approach.',
        approach: "Only ONE hernia type in this chapter keeps separate open and laparoscopic code families — check whether the hernia is inguinal before you go looking for a lap/open pair.",
        answer: (
          <>
            <p style={{ margin: "0 0 8px" }}>Inguinal hernia repair is the only type with a true open/laparoscopic code pair. The laparoscopic codes do not split by age the way the open ladder does — they simply pair against the whole open ladder by initial-vs-recurrent:</p>
            <DGList
              items={[
                <><strong>Initial inguinal:</strong> open 49491–49507 (chosen by PCA/age and reducible vs. incarcerated/strangulated) pairs with laparoscopic 49650.</>,
                <><strong>Recurrent inguinal:</strong> open 49520/49521 pairs with laparoscopic 49651.</>,
              ]}
            />
            <p style={{ margin: "8px 0 0" }}>No other hernia type in this series has a dedicated laparoscopic code family: femoral, lumbar, anterior abdominal, and parastomal hernias are each reported with ONE code set that applies to any approach (open, laparoscopic, or robotic).</p>
          </>
        ),
        codes: [["49650", "Laparoscopic inguinal hernia repair — INITIAL"], ["49651", "Laparoscopic inguinal hernia repair — RECURRENT"]],
      },
    ],
  },
  {
    n: 5,
    title: "Hemorrhoid Treatments",
    range: "46020–46999",
    lead: "Hemorrhoid codes are picked by TREATMENT first, then by internal vs. external vs. both, then by how many columns or groups were treated.",
    items: [
      {
        q: "What are the three (3) types of hemorrhoid treatments?",
        approach: "Ask what physically happens to the hemorrhoid tissue — is it cut out, strangled off, or destroyed/shrunk in place?",
        answer: (
          <DGList
            items={[
              <><strong>Excision (hemorrhoidectomy)</strong> — the hemorrhoid tissue is surgically removed.</>,
              <><strong>Ligation</strong> — the hemorrhoid's blood supply is cut off, by rubber band, another banding method, transanal hemorrhoidal dearterialization (THD), or hemorrhoidopexy (stapling).</>,
              <><strong>Injection or destruction</strong> — the hemorrhoid is shrunk in place, by sclerosing injection, thermal energy, or cryosurgery, without removing tissue.</>,
            ]}
          />
        ),
      },
      {
        q: "Identify the codes representing the different modalities used to treat hemorrhoids.",
        approach: "Sort the codes into the same three buckets as the previous answer, then split each bucket by internal/external and column count.",
        answer: (
          <DGList
            items={[
              <><strong>Excision:</strong> 46250 (external, 2+ columns/groups — single column has no dedicated code and goes to unlisted 46999) · 46320 (excision of a thrombosed external hemorrhoid) · 46255/46257/46258 (internal + external, single column, plain/with fissurectomy/with fistulectomy) · 46260/46261/46262 (internal + external, 2+ columns, same three variations).</>,
              <><strong>Ligation:</strong> 46221 (internal, rubber band) · 46945/46946 (internal, ligation other than rubber band, without imaging — single column · 2+ columns) · 46948 (internal, THD, 2+ columns) · 46947 (hemorrhoidopexy/stapling).</>,
              <><strong>Injection / destruction:</strong> 46500 (injection of sclerosing solution) · 46930 (destruction of internal hemorrhoid(s) by thermal energy) · 46999 (destruction by cryosurgery; also single-column THD or single-column external hemorrhoidectomy, since neither has its own code).</>,
            ]}
          />
        ),
        codes: [["46250", "External hemorrhoidectomy, 2+ columns"], ["46221", "Internal, rubber band ligation"], ["46500", "Injection of sclerosing solution"]],
      },
      {
        q: "How are hemorrhoid treatment procedures performed concurrently with endoscopy reported?",
        approach: "Ask whether a scope was actually used to do the banding — if yes, the scope code IS the hemorrhoid code; there is no second code to add.",
        answer: (
          <>
            <DGList
              items={[
                "Band ligation of hemorrhoids done THROUGH a scope is coded with the scope code, not with a separate hemorrhoid code: 45350 (flexible sigmoidoscopy with band ligation) or 45398 (colonoscopy with band ligation).",
                "Rubber-band ligation done WITHOUT a scope, directly on the anal canal, is 46221 instead — 46221 is never reported together with 45350 or 45398.",
                "Anoscopy (46600) is not reported separately in the same session as the anal procedures 46020–46947 — it is considered part of them.",
              ]}
            />
          </>
        ),
      },
    ],
  },
];

export default function DigestiveDiscussionGuidePage() {
  return (
    <DiscussionGuidePage
      theme={ORANGE}
      kicker="40,000 SERIES · DISCUSSION GUIDE"
      title="Digestive System Discussion Guide — Answered"
      blurb="Every question from the training discussion guide, answered step by step and cross-checked against the CPT 2026 codebook and this series' Guidelines Reviewer."
      nav={[
        { href: "/cpt/surgery/40,000", label: "40,000 Series home" },
        { href: "/cpt/surgery/40000-series-guidelines-reviewer", label: "Reviewer Pt. 1" },
        { href: "/cpt/surgery/40000-series-guidelines-reviewer-part-2", label: "Pt. 2" },
        { href: "/cpt/surgery/40000-series-guidelines-reviewer-part-3", label: "Pt. 3" },
        { href: "/cpt/surgery/40000-series-practice-quiz", label: "Practice Quiz" },
        { href: "/cpt/surgery/40000-series-flashcards", label: "Flashcards" },
      ]}
      backHref="/cpt/surgery/40,000"
      backLabel="← Back to the 40,000 Series"
      topics={topics}
      approach={[
        "Read the question first and decide which topic it belongs to — chapter layout, endoscopy, bariatric, hernia, or hemorrhoids — that tells you which rule family to reach for.",
        "For any endoscopy question, ask 'how far did the scope go?' before 'what was done?' — reach picks the family, technique picks the code.",
        "Check the code chips for the exact codes tied to each answer, and follow the reviewer links for the full walkthroughs, diagrams, and solved cases.",
      ]}
      sourceNote="Answers are paraphrased from CPT 2026 and cross-checked against the 40,000-series Guidelines Reviewer in this series."
    />
  );
}
