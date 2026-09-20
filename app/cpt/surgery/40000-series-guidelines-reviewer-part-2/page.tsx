import { ReviewerShell, type Subsection } from "../_digestive/kit";
import { LowerReachDiagram } from "../_digestive/diagrams";

const sections: Subsection[] = [
  {
    id: "lower-gi-overview",
    n: 1,
    title: "Lower GI Endoscopy — The Four Scopes and How Far Each Goes",
    range: "45300–45398 · 46600–46615 · 44380–44408",
    intro: [
      "Lower GI endoscopy works exactly like upper GI: the code family is picked by the FARTHEST landmark the scope tip reached, then the technique inside the family is picked from the diagnostic base upward.",
      "There are four scopes, from shortest to longest reach: anoscopy, proctosigmoidoscopy, sigmoidoscopy, and colonoscopy. Each can enter through the anus (rectum) or, for the colon, through a stoma.",
    ],
    diagram: <LowerReachDiagram />,
    definitions: [
      ["Anoscopy", "a short tube look at the anal canal and the lowest part of the rectum (background definition — the codebook lists the codes, not a definition)."],
      ["Proctosigmoidoscopy", "a rigid scope that views the rectum and can reach a little way into the sigmoid colon."],
      ["Sigmoidoscopy", "a flexible scope that views the rectum and sigmoid colon and can go a little farther up the descending colon."],
      ["Colonoscopy", "a flexible scope that views the whole colon, rectum to cecum. It may also peek into the last bit of ileum, or into small bowel up to a surgical connection (anastomosis)."],
      ["Colonoscopy through a stoma", "the same whole-colon look, but the scope enters through the colostomy opening instead of the anus."],
    ],
    steps: [
      "① Which landmark did the scope tip reach — anus/lower rectum, rectum/sigmoid, splenic flexure, or the cecum?",
      "② Which route — through the anus (rectum) or through a stoma?",
      "③ Was anything done besides looking? Pick the therapeutic code; never add the diagnostic code with it.",
      "④ Did the scope fall short of where it was planned to go? Use the incomplete-exam rules in Section 3.",
    ],
    categories: [
      {
        name: "Where each family lives",
        codes: [
          ["46600–46615", "ANOSCOPY (anus, anal canal, lower rectum)"],
          ["45300–45327", "PROCTOSIGMOIDOSCOPY, rigid"],
          ["45330–45350", "SIGMOIDOSCOPY, flexible — the scope did not go beyond the splenic flexure"],
          ["45378–45398", "COLONOSCOPY through the rectum"],
          ["44388–44408", "COLONOSCOPY through a stoma"],
          ["44380–44386", "ILEOSCOPY through a stoma and pouch endoscopy"],
        ],
      },
    ],
    rules: [
      "Flexible sigmoidoscopy codes are for a scope that, by design, stops at or before the splenic flexure.",
      "When bleeding occurs as a result of an endoscopic procedure, controlling it is not reported separately during the same operative session.",
      "For computed tomographic colonography, see 74261–74263 — not the endoscopy codes.",
    ],
    tips: [
      "The splenic flexure is the pivot for PLANNED exams: a planned sigmoidoscopy ends there; a planned colonoscopy goes to the cecum — and if it falls short for unforeseen reasons, it is 45378-53, not a sigmoidoscopy code.",
      "'Through the rectum' and 'through a stoma' are separate code ranges even when the technique is identical.",
    ],
  },
  {
    id: "anoscopy-sigmoidoscopy",
    n: 2,
    title: "Anoscopy, Proctosigmoidoscopy & Sigmoidoscopy",
    range: "46600–46615 · 45300–45327 · 45330–45350",
    intro: [
      "These three short scopes each have a diagnostic base and a short ladder of therapeutic steps. The therapeutic steps follow nearly the same pattern as the colonoscopy ladder — so learn the pattern once, and watch for the exceptions in the tip below.",
    ],
    categories: [
      {
        name: "Anoscopy (46600–46615)",
        codes: [
          ["46600", "Diagnostic anoscopy (separate procedure)"],
          ["46604 · 46606 · 46608", "With dilation · with biopsy · with removal of foreign body"],
          ["46610 · 46611 · 46612", "With removal of a single lesion by hot biopsy forceps or bipolar cautery · by snare · with removal of MULTIPLE lesions by any of those techniques"],
          ["46614 · 46615", "With control of bleeding · with ablation of a lesion not removable by forceps, cautery, or snare"],
          ["46601 · 46607", "High-resolution anoscopy (HRA, magnified with chemical enhancement): diagnostic · with biopsy"],
        ],
      },
      {
        name: "Rigid proctosigmoidoscopy (45300–45327)",
        codes: [
          ["45300", "Diagnostic (separate procedure)"],
          ["45303", "With dilation (balloon, guidewire, or bougie)"],
          ["45305 · 45307", "With biopsy · with removal of a foreign body"],
          ["45308 · 45309 · 45315", "Lesion removal by hot biopsy forceps/bipolar · by snare · multiple lesions by any technique"],
          ["45317 · 45320 · 45321 · 45327", "Control of bleeding · ablation · decompression of a volvulus · stent placement"],
        ],
      },
      {
        name: "Flexible sigmoidoscopy (45330–45350)",
        codes: [
          ["45330", "Diagnostic (separate procedure)"],
          ["45331 · 45332 · 45333", "Biopsy · foreign-body removal · lesion removal by hot biopsy forceps/bipolar"],
          ["45334 · 45335 · 45337", "Control of bleeding · submucosal injection · decompression"],
          ["45338 · 45340", "Lesion removal by snare · balloon dilation"],
          ["45341 · 45342", "Endoscopic ultrasound · EUS-guided needle aspiration/biopsy"],
          ["45346 · 45347 · 45349 · 45350", "Ablation · stent placement · endoscopic mucosal resection · band ligation (for example, of hemorrhoids)"],
        ],
      },
    ],
    rules: [
      "Do not report 46600 (anoscopy) with the anal codes 46020–46947 during the same session — anoscopy is already part of those anal procedures.",
      "45338 (snare) is not reported with 45330 (the diagnostic look), and not with 45349 (mucosal resection) for the same lesion.",
      "Sigmoidoscopy (45330–45350) is also the code family for a patient whose colon was removed above the sigmoid, leaving an ileo-sigmoid or ileo-rectal connection.",
      "Rectal or distal-colon exams after a colectomy (the defunctionalized rectum or distal colon) use proctosigmoidoscopy, sigmoidoscopy, or anoscopy codes — added to any stoma colonoscopy or ileoscopy that was also done.",
    ],
    tips: [
      "Pattern to memorize for lower endoscopy: dx → biopsy → foreign body → hot forceps → snare → bleeding → ablation → dilation → stent. The code numbers change, but the order stays. Exception: anoscopy (46610–46612) and rigid proctosigmoidoscopy (45308, 45309, 45315) split a SINGLE lesion from MULTIPLE lesions; flexible sigmoidoscopy and colonoscopy use '(s)' and are reported once.",
      "Band ligation of hemorrhoids through a scope is coded with the scope, not with the hemorrhoid codes: 45350 (sigmoidoscopy) or 45398 (colonoscopy).",
    ],
  },
  {
    id: "colonoscopy",
    n: 3,
    title: "Colonoscopy Through the Rectum",
    range: "45378–45398",
    intro: [
      "Colonoscopy examines the whole colon from the rectum to the cecum. 45378 is the diagnostic base — including collecting a specimen by brushing or washing when performed — and every other code adds one therapeutic step to it.",
      "Colonoscopy codes are also used for a patient who has had part of the colon removed (for example a hemicolectomy, sigmoid colectomy, or low anterior resection) and still has a colon to examine.",
    ],
    steps: [
      "① Did the scope reach the cecum (or the small-intestine connection)? If yes, go to step ③.",
      "② If NOT (planned as total, but the scope could not advance): looking only → 45378-53. Therapy was done → the therapeutic code with modifier 52. Document why it stopped.",
      "②b A planned total colonoscopy that falls short does NOT turn into a sigmoidoscopy code — the sigmoidoscopy family is only for exams meant to stop at the splenic flexure.",
      "③ Was anything done besides looking? Pick the therapeutic code — never add 45378.",
      "④ Multiple lesions removed by the SAME technique → that code once. Different techniques on different lesions → each technique's code, generally with modifier 59 on the additional ones (payer and NCCI conventions apply).",
      "⑤ Reason for the exam was screening? Modifier 33 (preventive service) is a CPT modifier, and PT is the Medicare version (HCPCS). Which one a payer wants when a screening turns therapeutic is payer policy — check it.",
    ],
    categories: [
      {
        name: "The colonoscopy ladder",
        codes: [
          ["45378", "Diagnostic colonoscopy (separate procedure) — the base"],
          ["45379 · 45380 · 45381", "Foreign-body removal · biopsy, single or multiple · directed submucosal injection"],
          ["45382", "Control of bleeding, any method"],
          ["45384", "Removal of tumor(s), polyp(s), or lesion(s) by hot biopsy forceps"],
          ["45385", "Removal of tumor(s), polyp(s), or lesion(s) by SNARE technique"],
          ["45386 · 45388 · 45389", "Balloon dilation · ablation of a lesion · endoscopic stent placement"],
          ["45390", "Endoscopic mucosal resection"],
          ["45391 · 45392", "Endoscopic ultrasound · EUS-guided needle aspiration/biopsy"],
          ["45393 · 45398", "Decompression for pathologic distention (for example volvulus or megacolon) · band ligation (for example of hemorrhoids)"],
        ],
      },
      {
        name: "Special situations",
        codes: [
          ["44388–44408", "Colonoscopy THROUGH A STOMA — same ladder, its own code range"],
        ],
      },
      {
        name: "Once per session — never repeat these in lower GI",
        codes: [
          ["Sigmoidoscopy", "45337 · 45341 · 45342 · 45350"],
          ["Colonoscopy", "45391 · 45392 · 45393 · 45398"],
          ["Stoma colonoscopy", "44406 · 44407 · 44408"],
        ],
      },
    ],
    rules: [
      "45378 (diagnostic) is not reported with 45379–45393 or 45398 — a therapeutic colonoscopy already includes the look.",
      "45380 (biopsy) and 45385 (snare) are not reported with 45390 (mucosal resection) for the same lesion. 45382 (control of bleeding) is not reported with 45381 or 45398 for the same lesion.",
      "Several strictures dilated in one session: report the dilation code once for the first and with modifier 59 for each additional stricture (45386 here; also 44381, 44405, and 45340).",
      "Descriptors with '(s)' — tumor(s), polyp(s), lesion(s) — cover one OR many lesions removed by that technique, so the code is reported once.",
      "An incomplete DIAGNOSTIC colonoscopy that was planned as total: 45378 (or 44388 through a stoma) with modifier 53. An incomplete THERAPEUTIC colonoscopy: the therapeutic code with modifier 52.",
      "For a colectomy patient: colonoscopy through a stoma uses 44388–44408; the leftover rectum or distal colon may also be examined with proctosigmoidoscopy or sigmoidoscopy codes in addition.",
    ],
    tips: [
      "Match the code to the TOOL that removed the polyp, not to the word 'polypectomy'. Snare → 45385. Hot forceps → 45384. Cold biopsy forceps → 45380 (by convention — the code itself just says 'biopsy', so the note must show forceps only).",
      "Phrases like 'cold snare' still describe a SNARE technique — 45385. What matters is that a snare was used.",
      "A screening colonoscopy that finds a polyp is coded from the therapeutic family (the screening becomes therapeutic). The diagnosis side (ICD-10-CM) carries the screening reason first.",
    ],
    traps: [
      "Reporting 45378 with a therapeutic colonoscopy code, or one polyp code per polyp when the same technique was used.",
      "Turning an incomplete colonoscopy into a sigmoidoscopy code. The plan decides the family, not where the scope ended up.",
      "Using modifier 53 on a therapeutic colonoscopy that fell short — that case takes modifier 52 on the therapeutic code.",
      "Forgetting the split: incomplete DIAGNOSTIC = 45378-53; incomplete THERAPEUTIC = therapeutic code-52.",
    ],
    cases: [
      {
        title: "Screening colonoscopy, multiple polyps removed",
        scenario: "A 40-year-old patient is admitted to the Endoscopy Unit for a screening colonoscopy. Polyps of the colon are found and it is decided to proceed with polypectomy. Multiple small polyps are removed with cold forceps using snare technique. What CPT code(s) are reported?",
        steps: [
          "Site and reach: a colonoscopy through the rectum — the colonoscopy family, 45378–45398.",
          "Was anything done besides looking? Yes — polyps were removed. That makes it a SURGICAL endoscopy, which always includes the diagnostic look, so 45378 is NOT reported.",
          "Which technique removed the polyps? The slide says 'snare technique' — that is the removal-by-snare code, 45385. (Forceps alone would have been biopsy 45380, and hot forceps would have been 45384. If BOTH a snare and cold forceps were used on different polyps, add 45380 with modifier 59.)",
          "How many times? The descriptor says 'polyp(s)', so one OR many polyps removed by the same technique is reported ONCE.",
          "Screening flag: the visit was a screening, so add the preventive-service modifier the payer requires — 33 (a CPT modifier) or PT for Medicare. Which one applies is payer policy.",
        ],
        answer: "45385 — reported once (no separate 45378).",
      },
      {
        label: "HARD SCENARIO",
        title: "Planned total colonoscopy that stops early",
        scenario: "A planned colonoscopy is stopped at the descending colon because of a fixed, angulated bowel and poor prep. The doctor only looks — nothing is biopsied or removed. A second patient has the same problem, but the doctor removes one polyp with a snare before stopping.",
        steps: [
          "It was PLANNED as a total colonoscopy, so it stays in the colonoscopy family even though it fell short — do not switch to a sigmoidoscopy code.",
          "Patient 1: looking only → the diagnostic base 45378, with modifier 53 (discontinued).",
          "Patient 2: therapy was done → the therapeutic snare code 45385, with modifier 52 (reduced), and no 45378.",
          "Document why the scope could not go farther in both notes.",
        ],
        answer: "Patient 1: 45378-53 · Patient 2: 45385-52",
      },
    ],
  },
  {
    id: "stoma-endoscopy",
    n: 4,
    title: "Ileoscopy & Colonoscopy Through a Stoma, and Pouch Endoscopy",
    range: "44380–44408",
    intro: [
      "When the patient has an ileostomy or colostomy, the scope can enter through the stoma. These codes mirror the rectal ladders but live in the 44,000 range.",
    ],
    categories: [
      {
        name: "Stoma and pouch endoscopy",
        codes: [
          ["44380 · 44381 · 44382 · 44384", "Ileoscopy through an ileostomy: diagnostic · with balloon dilation · with biopsy · with stent placement"],
          ["44385 · 44386", "Endoscopic evaluation of an internal pouch (for example an ileoanal J-pouch): diagnostic · with biopsy"],
          ["44388", "Colonoscopy through a stoma — diagnostic (separate procedure)"],
          ["44389 · 44390 · 44391", "With biopsy · foreign-body removal · control of bleeding"],
          ["44392 · 44394", "Lesion removal by hot biopsy forceps/bipolar · by snare"],
          ["44401–44408", "Ablation · stent · mucosal resection · injection · balloon dilation · EUS · EUS-guided needle aspiration/biopsy · decompression"],
        ],
      },
    ],
    rules: [
      "If a total stoma colonoscopy cannot reach the cecum or the small-intestine connection for unforeseen reasons, report 44388 with modifier 53 and document why.",
      "Do not report 44390 with 44388 — the therapeutic code already includes the look.",
    ],
    tips: [
      "Ask: rectum or stoma? The technique ladder is the same; only the code range changes.",
    ],
  },
];

export default function DigestiveReviewerPart2Page() {
  return (
    <ReviewerShell
      part={2}
      subtitle="Part 2 — Lower GI Endoscopy: Anoscopy, Sigmoidoscopy, Colonoscopy & Stoma Endoscopy (44380–44408, 45300–45398, 46600–46615)"
      sections={sections}
      intro={
        <>
          <strong>Lower GI endoscopy in one idea:</strong> the farthest landmark the scope reached picks the family, and the tool used picks the code inside it. The slide question (multiple polyps removed during a screening colonoscopy) is solved step-by-step in Section 3, followed by a harder incomplete-exam scenario.
        </>
      }
    />
  );
}
