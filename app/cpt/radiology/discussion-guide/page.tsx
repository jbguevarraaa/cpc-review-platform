import { DiscussionGuidePage, DGList, DGSteps, type DGTopic } from "../../surgery/_digestive/discussion-guide";
import type { Theme } from "../../surgery/_digestive/players";

const RADIOLOGY: Theme = { dark: "#3c2f2f", accent: "#8b5e3c", soft: "#fff7e8", border: "#d8d0c5", bg: "#fbfaf7", text: "#2a2926", muted: "#6b4226", light: "#f6d9a8" };

const topics: DGTopic[] = [
  {
    n: 1,
    title: "Organization of the Chapter",
    range: "70010–79999",
    items: [
      {
        q: "Be able to identify the organization of the Chapter (e.g., 76K is Diagnostic Ultrasound)",
        approach: "Radiology is organized by modality first, then by body region within each modality — learn the modality blocks in order before worrying about individual codes.",
        answer: (
          <>
            <p style={{ margin: "0 0 8px" }}>The Radiology chapter (70010–79999) is organized into modality blocks, each covering every body region for that imaging type before moving to the next modality:</p>
            <DGList
              items={[
                "70010–76499 — Diagnostic Radiology (X-ray → CT → MRI/MRA → GI/urinary/Gyn-OB studies → heart/vascular imaging), running head to foot within each technique",
                "76506–76999 — Diagnostic Ultrasound",
                "77001–77022 — Radiologic Guidance",
                "77046–77067 — Mammography / Breast Imaging",
                "77071–77086 — Bone/Joint Studies",
                "77261–77799 — Radiation Oncology",
                "78012–79999 — Nuclear Medicine (78012–78999 diagnostic, 79005–79999 therapeutic)",
              ]}
            />
            <p style={{ margin: "8px 0 0" }}>Within Diagnostic Radiology specifically, codes run by body region in this order: Head and Neck (70010–70559), Chest (71045–71555), Spine and Pelvis (72020–72295), Upper Extremities (73000–73225), Lower Extremities (73501–73725), Abdomen (74018–74190), GI Tract (74210–74363), Urinary Tract (74400–74485), Gyn-OB (74710–74775), Heart (75557–75574), and Vascular Procedures (75600–75989).</p>
          </>
        ),
      },
    ],
  },
  {
    n: 2,
    title: "Radiology Guidelines",
    range: "Contrast, intra-articular injections, spine imaging",
    items: [
      {
        q: "a. When are procedures considered performed with contrast? Without contrast?",
        approach: "The route of administration matters more than whether contrast was used at all — oral/rectal contrast doesn't count as \"with contrast\" for coding purposes.",
        answer: (
          <>
            <p style={{ margin: "0 0 8px" }}><strong>&ldquo;With contrast&rdquo;</strong> represents contrast material administered intravascularly, intra-articularly, or intrathecally.</p>
            <p style={{ margin: 0 }}><strong>&ldquo;Without contrast&rdquo;</strong> represents either: imaging procedures that do NOT employ the use of contrast material at all, OR contrast material administered either orally and/or rectally (even though contrast was technically used, this still codes as &ldquo;without contrast&rdquo;).</p>
          </>
        ),
      },
      {
        q: "b. How are intra-articular injections reported?",
        approach: "The answer branches on what kind of arthrography accompanies the injection — radiographic arthrography bundles guidance differently than CT/MR arthrography does.",
        answer: (
          <DGList
            items={[
              <><strong>If radiographic arthrography is also performed:</strong> report the appropriate joint injection code, AND report the appropriate arthrography S&amp;I (supervision and interpretation) code — that S&amp;I code already includes any fluoroscopy used, so fluoroscopy is never billed a third time.</>,
              <><strong>If CT or MR arthrography is also performed:</strong> report the appropriate joint injection code, the appropriate CT or MR code, AND the appropriate imaging guidance code — three separate codes, since CT/MR guidance is not bundled into the CT/MR code itself the way fluoroscopy is bundled into the radiographic S&amp;I code.</>,
            ]}
          />
        ),
      },
      {
        q: "c. For spine examinations performed with imaging, what route(s) is/are considered included for the \"with contrast\" version of the service? What other services are reported separately with these?",
        approach: "This is really the same intravascular-vs-intrathecal fork from the general contrast rule (2a), applied specifically to spine CT/MRI/MRA.",
        answer: (
          <>
            <p style={{ margin: "0 0 8px" }}>For spine examinations using &ldquo;with contrast&rdquo; CT, MRI, or MRA:</p>
            <DGList
              items={[
                <><strong>If contrast administration is intravascular</strong>, the injection procedure IS PART OF the surgical package and is NOT reported separately — it&apos;s included in the &ldquo;with contrast&rdquo; imaging code itself.</>,
                <><strong>If contrast administration is intrathecal</strong>, the injection procedure is NOT part of the surgical package and IS reported separately, with either 61055 or 62284.</>,
              ]}
            />
          </>
        ),
        codes: [
          ["61055", "Injection procedure for myelography (other than C1-C2)"],
          ["62284", "Injection procedure for myelography and/or CT myelography"],
        ],
      },
    ],
  },
  {
    n: 3,
    title: "Diagnostic Ultrasound",
    range: "76506–76999",
    items: [
      {
        q: "a. How are the diagnostic ultrasound codes organized?",
        approach: "Same modality-then-body-region logic as the rest of Radiology, just at a smaller scale within the ultrasound block itself.",
        answer: (
          <DGList
            items={[
              "76506–76536 — Head and Neck",
              "76604–76642 — Chest (including breast)",
              "76700–76776 — Abdomen and Retroperitoneum",
              "76800 — Spinal Canal",
              "76801–76857 — Pelvis (Obstetrical and Non-Obstetrical)",
              "76870–76873 — Genitalia",
              "76881–76886 — Extremities",
              "76930–76965 — Ultrasonic Guidance",
              "76970–76999 — Other Procedures",
            ]}
          />
        ),
      },
      {
        q: "b. What are the two types of ultrasound examinations? When is an ultrasound exam reported as \"limited\"?",
        approach: "This is a documentation-completeness rule, not a rule about how the scan itself is performed.",
        answer: (
          <>
            <p style={{ margin: "0 0 8px" }}>The two types are <strong>complete</strong> and <strong>limited</strong>. For any anatomic region that has both a complete and a limited code, ALL of the elements comprising a complete exam must be described in the report — or the report must state why an element couldn&apos;t be visualized.</p>
            <p style={{ margin: 0 }}>An ultrasound exam is reported as <strong>&ldquo;limited&rdquo;</strong> whenever FEWER than the required elements for a complete exam are documented — regardless of what the sonographer intended, or what the report is titled. The anatomic regions with a complete/limited split are: Breast, Abdomen, Retroperitoneum, Pelvic (Obstetrical and Non-Obstetrical), and Extremities.</p>
          </>
        ),
      },
      {
        q: "c. What services are considered packaged to ultrasound services and are not reported separately? What situations are these usually packaged services reported separately?",
        approach: "Guidance work (image recording + localization description) is normally bundled into the underlying procedure it supports — the exception is when guidance fails the documentation bar entirely.",
        answer: (
          <>
            <p style={{ margin: "0 0 8px" }}>Ultrasound <strong>guidance</strong> procedures require two things to be reportable at all: permanently recorded images of the site being localized, AND a documented description of the localization process.</p>
            <p style={{ margin: 0 }}>If an ultrasound is performed WITHOUT a thorough evaluation of the organ or anatomic region, OR WITHOUT image documentation, OR WITHOUT a final written report, the service is NOT separately reportable at all — it&apos;s effectively packaged away into whatever procedure it was meant to support, rather than being billed as its own line item.</p>
          </>
        ),
      },
      {
        q: "d. What are the required elements for a complete chest ultrasound? What are the required elements for a complete breast ultrasound?",
        approach: "Breast has a clean, short list; chest ultrasound isn't one of the site's classic \"complete vs. limited\" pairs the way abdomen/pelvis/breast/retroperitoneum/extremity are — treat it by the same general documentation-completeness principle from 3b.",
        answer: (
          <>
            <p style={{ margin: "0 0 8px" }}><strong>Complete breast ultrasound (76641):</strong> all four quadrants of the breast, the retroareolar region, and the axilla (if performed).</p>
            <p style={{ margin: 0 }}><strong>Chest ultrasound:</strong> CPT does not carve chest ultrasound out as a separate named complete/limited pair the way it does for breast, abdomen, retroperitoneum, pelvis, and extremities — the same general rule from 3b still applies (document every structure evaluated, or state why it couldn&apos;t be seen), but chest-specific required-element lists aren&apos;t enumerated the way the five named body areas are.</p>
          </>
        ),
      },
      {
        q: "e. What are the three (3) main types of complete obstetrical ultrasounds? What are the required elements for each of these?",
        approach: "Think of these as three tiers: first trimester, second/third trimester, and a \"deluxe\" version that's just the second/third-trimester list doubled.",
        answer: (
          <DGSteps
            items={[
              <><strong>1st trimester complete OB (76801):</strong> number of gestational sacs and fetuses; gestational sac/fetal measurements; survey of visible fetal and placental anatomic structure; qualitative assessment of amniotic fluid volume/gestational sac shape; exam of the maternal uterus and adnexa.</>,
              <><strong>2nd or 3rd trimester complete OB (76805):</strong> number of fetuses and amniotic/chorionic sacs; measurements appropriate for gestational age; survey of intracranial/spinal/abdominal anatomy; survey of the 4-chambered heart; survey of umbilical cord insertion site; survey of placenta location; amniotic fluid assessment; exam of maternal adnexa (when visible).</>,
              <><strong>Complete detailed OB (76811):</strong> all eight (8) elements of 76805/76810, PLUS: fetal brain/ventricles evaluation, face evaluation, heart/outflow tract evaluation, chest anatomy, abdominal organ-specific anatomy, limbs evaluation, umbilical cord and placenta evaluation, and other fetal anatomy as indicated.</>,
            ]}
          />
        ),
        codes: [
          ["76801", "OB ultrasound, 1st trimester, first gestation"],
          ["76805", "OB ultrasound, 2nd/3rd trimester, complete"],
          ["76811", "OB ultrasound, complete, detailed fetal anatomic exam"],
        ],
      },
      {
        q: "f. What are the required elements for a complete male ultrasound? What are the required elements for a complete female non-obstetrical ultrasound?",
        approach: "Both share a bladder-measurement element, then diverge into sex-specific organ evaluation.",
        answer: (
          <>
            <p style={{ margin: "0 0 8px" }}><strong>Complete male non-OB ultrasound:</strong> evaluation and measurement of the urinary bladder (when applicable), evaluation of the prostate and seminal vesicles, and description of any pelvic pathology.</p>
            <p style={{ margin: 0 }}><strong>Complete female non-OB ultrasound:</strong> description and measurement of the uterus and adnexal structures, measurement of the endometrium, measurement of the bladder (when applicable), and description of any pelvic pathology.</p>
          </>
        ),
      },
      {
        q: "g. What are the required elements for a complete ultrasound of the extremities?",
        approach: "A short, general list — no sub-organ breakdown the way abdomen/pelvis have.",
        answer: "Evaluation of muscles, tendons, joints, other soft tissue structures, and any identifiable abnormality.",
      },
    ],
  },
  {
    n: 4,
    title: "Radiation Treatment Management",
    range: "77261–77799",
    items: [
      {
        q: "a. Based off the Radiation Management and Treatment Table, which are the only services reported as a professional (physician) service?",
        approach: "Two categories bookend the whole radiation-oncology workflow — the ones before and after the equipment-heavy middle steps.",
        answer: (
          <>
            <p style={{ margin: "0 0 8px" }}>Only two categories on the table are &ldquo;Professional&rdquo; only: <strong>Clinical Treatment Planning</strong> (77261–77263) and <strong>Radiation Treatment Management</strong> (77427–77499).</p>
            <p style={{ margin: 0 }}>Everything else on the table — Simulation, Medical Radiation Physics/Dosimetry/Treatment Devices/Special Services, and Treatment Delivery Services — is either Global (append modifier 26 or TC as required) or Technical only, since those steps involve equipment and staff time rather than pure physician judgment.</p>
          </>
        ),
      },
      {
        q: "b. How are treatment management sessions reported?",
        approach: "This is a pure fraction-counting rule, and the asymmetry at the tail end (3-4 vs. 1-2) is the part worth memorizing precisely.",
        answer: (
          <>
            <p style={{ margin: "0 0 8px" }}>Radiation treatment management is reported in units of <strong>five fractions or treatment sessions</strong>, regardless of the actual time period over which the services are furnished — the fractions do not need to be furnished on consecutive days. Multiple fractions representing two or more treatment sessions furnished on the same day may be counted separately, as long as there&apos;s a distinct break in therapy sessions and the fractions are of the type usually furnished on different days.</p>
            <p style={{ margin: 0 }}>Code 77427 is ALSO reported if there are three or four fractions beyond a multiple of five at the end of a course of treatment — but one or two fractions beyond a multiple of five at the end of a course of treatment are NOT reported separately.</p>
          </>
        ),
        codes: [["77427", "Radiation treatment management, per 5 fractions/treatments"]],
      },
      {
        q: "c. What are the services packaged to radiation treatment management and will not be reported separately?",
        approach: "Think of everything a radiation oncologist reviews during a routine on-treatment visit — all of it is baked into the RTM code itself, not billed as a separate E/M service.",
        answer: (
          <DGList
            items={[
              "Assessment of the patient's response to treatment",
              "Coordination of care and treatment",
              "Review of imaging and/or lab test results (with documentation)",
              "Review of port images",
              "Review of dosimetry, dose delivery, and treatment parameters",
              "Review of patient treatment set-up",
            ]}
          />
        ),
      },
      {
        q: "d. What are the services packaged to 77649 (intraoperative radiation treatment management) and will not be reported separately?",
        approach: "Note: the current CPT 2026 code for intraoperative RTM is 77469, not 77649 — likely a typo in the source material for the same concept. Code 77469 works the same way as the general RTM package (question 4c), just scoped narrowly to one operative session.",
        answer: (
          <>
            <p style={{ margin: "0 0 8px" }}>Code <strong>77469</strong> (Intraoperative radiation treatment management) represents ONLY the intraoperative session management — the same bundled review items as ordinary RTM (port images, dosimetry/dose delivery/treatment parameters, patient treatment set-up), but limited strictly to that single operative session.</p>
            <p style={{ margin: 0 }}>What it does NOT package: any medical evaluation and management furnished OUTSIDE of that intraoperative session — that additional management is reported separately, since 77469&apos;s bundle stops at the edge of the intraoperative encounter itself.</p>
          </>
        ),
        codes: [["77469", "Intraoperative radiation treatment management"]],
      },
    ],
  },
  {
    n: 5,
    title: "Nuclear Medicine",
    range: "78012–79999",
    items: [
      {
        q: "a. How are Nuclear Medicine services grouped?",
        approach: "Two tiers, split by whether the radioactive material is being used to look (diagnose) or to treat (therapy).",
        answer: (
          <DGList
            items={[
              <><strong>78012–78999</strong> — Diagnostic nuclear medicine, grouped by organ system (endocrine, GI, musculoskeletal, cardiovascular, etc.).</>,
              <><strong>79005–79999</strong> — Therapeutic nuclear medicine (radiopharmaceutical therapy, including by administration route such as intra-articular).</>,
            ]}
          />
        ),
      },
      {
        q: "b. What services are NOT packaged to Nuclear Medicine and may be reported separately?",
        approach: "The services listed in this chapter describe the procedure only — they never include the substance itself.",
        answer: "Supply of the radiopharmaceutical or drug is explicitly NOT included in the listed nuclear medicine procedure codes — it is always reported separately using the appropriate HCPCS supply code, in addition to the procedure code. Nuclear medicine service codes themselves may also be reported either independently, or together with diagnostic work-up and/or follow-up care service codes.",
      },
      {
        q: "c. What services are NOT packaged to CV System Nuclear Medicine and may be reported separately?",
        approach: "This is the cardiovascular-specific version of \"what's not bundled\" — it's about the stress test, not the radiopharmaceutical.",
        answer: "When myocardial perfusion and blood pool imaging studies are performed during exercise and/or pharmacologic stress, the appropriate stress testing code from the 93015–93018 series is reported IN ADDITION to the imaging code — it is never bundled into the nuclear cardiology code itself, regardless of which specific perfusion/blood-pool code is used.",
        codes: [["93015–93018", "Cardiovascular stress test codes, reported alongside stress nuclear cardiology studies"]],
      },
    ],
  },
];

export default function RadiologyDiscussionGuidePage() {
  return (
    <DiscussionGuidePage
      theme={RADIOLOGY}
      kicker="RADIOLOGY SERIES · DISCUSSION GUIDE"
      title="CPT Radiology Discussion Guide — Answered"
      blurb="Every question from the training discussion guide, answered step by step and checked against the CPT 2026 codebook and this series' Master Reviewer."
      nav={[
        { href: "/cpt/radiology", label: "Radiology home" },
        { href: "/cpt/radiology/master-reviewer", label: "Master Reviewer Pt. 1" },
        { href: "/cpt/radiology/master-reviewer-part-2", label: "Master Reviewer Pt. 2" },
        { href: "/cpt/radiology/schematic", label: "Schematic (visual map)" },
      ]}
      backHref="/cpt/radiology"
      backLabel="← Back to Radiology"
      topics={topics}
      approach={[
        "Read each question with the Master Reviewer open alongside it — every answer here maps to a section in Part 1 or Part 2 (the ultrasound required-elements table, the intra-articular injection rule, and the radiation treatment management sections were added to Part 2 specifically to support this guide).",
        "For Diagnostic Ultrasound especially, don't try to memorize every required-element list as prose — the pattern (document everything, or state why not, or drop to \"limited\") is what actually gets tested, not the literal word lists.",
        "Check the code chips under each answer for the specific codes tied to that question, then confirm you can rebuild the answer from scratch without looking.",
      ]}
      sourceNote="Answers are paraphrased from the CPT 2026 Radiology Guidelines (contrast administration, intra-articular injection reporting, spine contrast-route rules, ultrasound completeness and guidance requirements, radiation treatment management fraction-counting and packaging, and nuclear medicine grouping/packaging are quoted or closely paraphrased from the codebook's own guideline text) and cross-checked against this series' Master Reviewer. One correction: the source discussion guide's question 4d refers to code 77649 for intraoperative radiation treatment management — the current CPT 2026 code for this service is 77469; the answer above uses the correct code."
    />
  );
}
