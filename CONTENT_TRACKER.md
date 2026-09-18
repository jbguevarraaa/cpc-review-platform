# CPC Exam Content Tracker

_Last updated: 2026-09-18. This tracks study-content coverage across the site against the actual CPC exam blueprint — separate from PROJECT_MEMORY.md, which tracks codebase/architecture health. Read this at the start of a session to see what's built, what's pending, and what to prioritize given the exam timeline. Update it whenever a reviewer/quiz/flashcard page is added or a series is completed._

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
| 30,000 (Respiratory) | ✅ Parts 1–2 | — | — | No dedicated quiz/flashcards yet |
| 33,000 (Cardiovascular) | ✅ Parts 1–2 | — | — | No dedicated quiz/flashcards yet |
| 40,000 (Digestive) | ⬜ | ⬜ | ⬜ | Not started |
| 50,000 (Urinary/Genital) | ⬜ | ⬜ | ⬜ | Not started |
| 60,000 (Nervous System) | ⬜ | ⬜ | ⬜ | Not started |
| Eye/Ocular Adnexa, Auditory | ⬜ | ⬜ | ⬜ | Not started |

## CPT — Other Sections

| Section | Status | Notes |
|---|---|---|
| Evaluation & Management (E/M) | ✅ Guidelines + quiz + consolidated reviewer | High exam weight — already solid |
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
| 13 (Musculoskeletal) | ✅ | — | — | — |
| 18 (Symptoms/Signs/Abnormal Findings) | ✅ | ✅ | ✅ | ✅ |
| 2–12, 14–17, 19–21 (16 chapters) | ⬜ | ⬜ | ⬜ | ⬜ | Not started — this is the biggest content gap on the site relative to exam weight |

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

- Full CPT 2026 codebook and ICD-10-CM 2026 codebook are available as large PDFs in `~/Downloads/`. A `pdftotext`-based extraction workflow now exists (validated 2026-09-18) that converts the whole book to searchable plain text in ~15 seconds and can pull any code range's exact text on demand — no more manual copy-pasting required for future sections.
