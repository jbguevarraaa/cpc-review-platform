# CPC Exam Content Tracker

_Last updated: 2026-09-21 (E/M 99,000-series reviewer, quiz, and flashcards added; 60,000-series Neuro-Endocrine reviewer, quiz, and flashcards added; 50,000-series Genitourinary reviewer, quiz, and flashcards added; 40,000-series Digestive reviewer, quiz, and flashcards added; ICD-10 complete for every chapter with narrative guidelines). This tracks study-content coverage across the site against the actual CPC exam blueprint — separate from PROJECT_MEMORY.md, which tracks codebase/architecture health. Read this at the start of a session to see what's built, what's pending, and what to prioritize given the exam timeline. Update it whenever a reviewer/quiz/flashcard page is added or a series is completed._

**Exam date target: within ~3 months of 2026-09-18.**

## How to read this

- ✅ = built and pushed
- 🟡 = partially built (some parts done, some pending — see notes)
- ⬜ = not started
- Priority is my rough read of CPC exam weight, not a promise — Surgery and E/M carry the most questions; Anesthesia, Path/Lab, and Medicine are comparatively small on the actual exam.

## CPT — Surgery Series

| Series | Guidelines Reviewer | Study Tips | Quiz | Notes |
|---|---|---|---|---|
| 10,000 (Integumentary) | ✅ (2026-updated) | ✅ | ✅ (3 quizzes) | Fully built |
| 20,000 (Musculoskeletal) | 🟡 Parts 1–3 done (General, Head–Spine, Abdomen–Wrist); **Part 4 (Hand & Fingers, Pelvis & Hip, Femur & Knee) and Part 5 (Leg/Ankle/Foot, Casts, Arthroscopy) pending** | ✅ | ✅ | Largest series in scope — source text fully in hand via PDF extraction now |
| 30,000 (Respiratory) | ✅ Parts 1–2 (merged with training-deck content, code range map, definitions/hierarchy boxes; 9 step-by-step solved cases added 2026-09-21 — the respiratory deck has no practice questions, so they are built from its rules) | ✅ beginner guide | ✅ practice quiz + flashcards | Fully built |
| 33,000 (Cardiovascular) | ✅ Parts 1–3 (+ 13 step-by-step solved cases from the deck slides and study notes, added 2026-09-21), expanded 2026-09-20 from a training deck cross-checked against CPT 2026: pacemaker/ICD steps + schematic, TAVR/CABG steps and worked examples, ECMO & cardiac assist rewrite, heart/heart-lung transplant + artificial heart (Part 2 §8), EVAR/FEVAR, bypass grafts, catheter placement/angiography, venipuncture/sclerotherapy/ablation (Part 3 §1–4), SVG schematics | ✅ "how to approach" decision-hierarchy page | ✅ 40-Q practice quiz + 61 flashcards | Deck codes deleted in CPT 2026 (37221, 37223, 33884) were replaced with current codes; Part 3 still stops at 37214 — endovascular revascularization 37220+ and embolectomy 34001–34490 not yet built |
| 40,000 (Digestive) | ✅ Parts 1–3 built 2026-09-21 from a training deck cross-checked to CPT 2026: upper GI endoscopy + ERCP, lower GI endoscopy, bariatric, hernia (2026 codes 49591–49618, split into inguinal and anterior-abdominal sections), hemorrhoids; 7 slide cases solved plus hard scenarios and common-traps boxes; 6 SVG schematics; hub with range map; QC-reviewed against the codebook | ✅ (56 Q) | ✅ (73 cards) | Deck hernia slides use deleted codes (49560–49566, 49568, 49652–49657) — reviewer follows the codebook. Not yet built: mouth/pharynx (40490–42999), appendix, liver/biliary surgery, pancreas, abdomen/peritoneum beyond hernia; reviewers for those ranges deliberately held until requested |
| 50,000 (Genitourinary) | ✅ Parts 1–3 built 2026-09-21 from a training deck cross-checked to CPT 2026: urinary + female endoscopy, hysterectomy/myomectomy, prostate, maternal care and delivery; 3 slide cases solved plus hard scenarios; 3 SVG schematics; hub with range map | ⬜ | ✅ (10 Q) + ✅ flashcards (48 cards) | Deck differences flagged on the hub (52000–52010 is only the diagnostic part, 52647 deleted / 52597 new, 55831, 59514/59525). Not yet built: kidney/ureter/bladder/urethra surgery beyond endoscopy, male genital surgery (54K, most of 55K), vulva/vagina/cervix surgery beyond colposcopy, tubes/ovaries surgery, other maternity services (59000–59898) |
| 60,000 (Neuro-Endocrine) | ✅ Parts 1–3 built 2026-09-21 from a training deck and walkthrough cross-checked to CPT 2026: skull base, intracranial endovascular therapy, radiosurgery, neurostimulators, spine decompression, endocrine glands; 6 slide cases solved plus hard scenarios; 3 SVG schematics; hub with range map | ⬜ | ✅ (10 Q) + ✅ flashcards | Walkthrough differences flagged on the hub (61799 vs +61797, deleted 61870, neurostimulator programming, spinal electrode codes, sacral laminectomy 63011). Not yet built: cranial and spinal surgery beyond these topics (aneurysm, tumor, shunt, repair), peripheral nerves (64K), eye (65K–68K), ear (69K) |
| Eye/Ocular Adnexa, Auditory | ⬜ | ⬜ | ⬜ | Not started |

## CPT — Other Sections

| Section | Status | Notes |
|---|---|---|
| Evaluation & Management (E/M) | ✅ Guidelines + quiz + consolidated reviewer; ✅ 99,000 series Parts 1–3 built 2026-09-21 (E/M layout and common rules, picking the level by MDM or time, critical care, prolonged services; 3 deck cases solved; 3 SVG schematics; hub at /cpt/e-m/99,000) + ✅ quiz (10 Q) + ✅ flashcards | High exam weight — already solid. Deck differences flagged on the hub (old 3-of-3 / 2-of-3 key components and 50% counseling rule vs 2026 MDM/time, deleted 99201 and 99354–99357, 93598) |
| Anesthesia | ⬜ | Not started at all |
| Radiology (70,000) | 🟡 Master reviewer Parts 1–2 + study tips built; guidelines page still a stub | |
| Pathology & Laboratory | ⬜ | Not started |
| Medicine section | ⬜ | Not started |
| Modifiers reference | ✅ | Built |
| Module 4 practice exam | ✅ | 30-question mixed exam built |

## ICD-10-CM

| Chapter | Guidelines Reviewer | Quiz | Flashcards | Worked Examples |
|---|---|---|---|---|
| 1 (Infectious/Parasitic) | ✅ | ✅ | ✅ | — |
| 2 (Neoplasms) | ✅ | ✅ (14 Q) | ✅ (21 cards) | ✅ (9 scenarios) |
| 3 (Blood/Blood-Forming Organs) | ✅ (code-structure format — no official narrative guidelines exist for this chapter) | ✅ (10 Q) | ✅ (15 cards) | — (skipped, low sequencing content) |
| 4 (Endocrine/Nutritional/Metabolic) | ✅ | ✅ (10 Q) | ✅ (17 cards) | ✅ (9 scenarios) |
| 5 (Mental/Behavioral/Neurodevelopmental) | ✅ | ✅ (10 Q) | ✅ (18 cards) | ✅ (10 scenarios) |
| 6 (Nervous System) | ✅ | ✅ (11 Q) | ✅ (17 cards) | ✅ (11 scenarios) |
| 7 (Eye and Adnexa) | ✅ | ✅ (11 Q) | ✅ (12 cards) | ✅ (11 scenarios) |
| 8 (Ear and Mastoid Process) | ✅ (code-structure format — no official narrative guidelines exist for this chapter) | ✅ (13 Q) | ✅ (18 cards) | — (skipped, low sequencing content) |
| 9 (Circulatory System) | ✅ | ✅ (15 Q) | ✅ (21 cards) | ✅ (9 scenarios) |
| 10 (Respiratory System) | ✅ | ✅ (14 Q) | ✅ (17 cards) | ✅ (14 scenarios) |
| 11 (Digestive System) | ✅ (code-structure format — no official narrative guidelines exist for this chapter) | ✅ (19 Q) | ✅ (18 cards) | — (skipped, low sequencing content) |
| 13 (Musculoskeletal) | ✅ | ✅ (12 Q) | ✅ (15 cards) | ✅ (9 scenarios) |
| 18 (Symptoms/Signs/Abnormal Findings) | ✅ | ✅ | ✅ | ✅ |
| 12 (Skin/Subcutaneous Tissue) | ✅ | ✅ (15 Q) | ✅ (19 cards) | ✅ (15 scenarios) |
| 14 (Genitourinary System) | ✅ (narrow scope — official guidelines cover only chronic kidney disease) | ✅ (9 Q) | ✅ (13 cards) | ✅ (9 scenarios) |
| 15 (Pregnancy/Childbirth/Puerperium) | ✅ (Parts 1–2, one of the densest chapters in the book) | ✅ (28 Q) | ✅ (40 cards) | ✅ (16 scenarios) |
| 16 (Perinatal Period) | ✅ | ✅ (20 Q) | ✅ (27 cards) | ✅ (16 scenarios) |
| 17 (Congenital Malformations) | ✅ (block map + 6 topics; narrow official guidelines) | ✅ (14 Q) | ✅ (21 cards) | ✅ (13 scenarios) |
| 19 (Injury, Poisoning & Consequences of External Causes) | ✅ (Parts 1–2: injuries/fractures/burns; drug reactions/abuse/complications) | ✅ (34 Q) | ✅ (38 cards) | ✅ (18 scenarios) |
| 20 (External Causes of Morbidity) | ✅ (11 topics) | ✅ (24 Q) | ✅ (26 cards) | ✅ (12 scenarios) |
| 21 (Factors Influencing Health Status / Z-codes) | ✅ (Parts 1–2, 17 topics) | ✅ (36 Q) | ✅ (41 cards) | ✅ (14 scenarios) |

**Note on chapter format:** Not every ICD-10-CM chapter has official narrative guidelines — CMS marks several as "Reserved for future guideline expansion" (confirmed so far: Chapter 3). For those, the reviewer format shifts from sequencing-rule summaries to code-category/clinical-distinction summaries, and Worked Examples are skipped in favor of a tighter Reviewer + Quiz + Flashcards set, to keep pace sustainable across all remaining chapters.

## HCPCS Level II

| Status | Notes |
|---|---|
| ⬜ Stub only ("coming soon") | Untouched — HCPCS is a scored section on the CPC exam |

## Final / Practice Exams

| Exam | Status |
|---|---|
| Final Exam 1 (100 Q) | ✅ Built |
| Final Exam 2, 3 | ⬜ Not started (dead links exist pointing to these — see PROJECT_MEMORY.md Known Issues) |

## Honest gap assessment (given the ~3-month timeline)

The two largest untouched blocks relative to how much they're actually tested are **ICD-10-CM chapters 2–21 (minus 1/13/18)** and **HCPCS Level II** — both are scored sections and currently have almost no content. Within CPT, **Anesthesia, Pathology & Lab, and Medicine** are completely unbuilt, and **Surgery 40,000–60,000+** hasn't been started. These are worth surfacing explicitly rather than defaulting to "keep going deeper on whatever series is already in progress" — it may be more exam-efficient to get breadth (one solid guidelines reviewer per major untouched area) before going back for quizzes/flashcards on every series.

## Source material status

- Full CPT 2026 codebook and ICD-10-CM 2026 codebook are available as large PDFs in `~/Downloads/` (`CPT 2026_compressed.pdf`, `ICD-10-CM 2026.pdf`). A `pdftotext`-based extraction workflow now exists and is proven in production: converts the whole CPT book (~750 pages) to plain text in ~15 seconds, and the whole ICD-10-CM book to plain text in ~60 seconds — both well under a minute, no more manual copy-pasting required. Used successfully to build the ICD-10 Chapter 9 (Circulatory System) content suite. Note: the extracted text has a systematic OCR-style artifact where "I" renders as "1" in ICD-10 code numbers (e.g., "I10" appears as "110") — always verify code numbers against real ICD-10-CM knowledge before publishing.

## Quality control

- `.claude/agents/reviewer-quality-check.md` is a custom subagent (added 2026-09-18) that reviews any reviewer/quiz/flashcard page for beginner-friendliness, commuter-skim-friendliness, comprehensiveness vs. overwhelm, format consistency, CPC-exam readiness, and copyright discipline. Run it after building new content, before committing.
