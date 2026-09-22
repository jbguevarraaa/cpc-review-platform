# CPC Review Platform — Project Memory

_Last updated: 2026-09-14, based on a full codebase audit. This document is the shared reference for future development sessions — read it before making changes, and keep it updated as the project evolves._

## 1. Current Architecture

- **Framework:** Next.js 16.3.3 (App Router), React 19.2.8, TypeScript 5.
- **Styling:** Tailwind CSS v4 (`@tailwindcss/postcss`) is installed and configured, but only actually used on the homepage (`app/globals.css`, `premium-*` classes). Every other page uses raw inline `style={{...}}` objects.
- **State:** Client-side only, via `useState` in `"use client"` components. No global state manager.
- **Backend:** None. No API routes, no database, no auth. This is a purely static content + client-rendered-quiz site.
- **Persistence:** None. No localStorage, no accounts, no server. Quiz progress resets on refresh/navigation.
- **Hosting:** Vercel (`.vercel/` present, `VERCEL_OIDC_TOKEN` in `.env.local`).
- **Tooling:** ESLint 9 + `eslint-config-next`. No test suite. No GitHub Actions CI — `.github/` only contains a custom agent definition (`agents/cpc-study-platform-builder.agent.md`), not a workflow.
- **Special note:** `AGENTS.md`/`CLAUDE.md` are real, auto-generated Next.js "agent files" pointing to `node_modules/next/dist/docs/` — this Next.js version has API/convention differences from older training data, so that docs folder should be checked before writing code that touches newer Next.js APIs.

## 2. Existing Routes

| Route | Status |
|---|---|
| `/` | Working — fully designed homepage |
| `/icd10` | Stub (3 bullet points, no real content) |
| `/hcpcs` | Stub ("coming soon") |
| `/business-medicine` | Complete, well-written reviewer article |
| `/cpt` | Working, but duplicates most of `/cpt/surgery`'s content |
| `/cpt/surgery` | Working |
| `/cpt/surgery/10,000` | **Unreachable** — no working link points to it anywhere |
| `/cpt/surgery/10000-series-post-work-quiz` | Working |
| `/cpt/surgery/10000-series-study-tips` | Working |
| `/cpt/surgery/10000-series-transcript-quiz` | Working |
| `/cpt/surgery/10000-series-guidelines-quiz` | Working |
| `/cpt/surgery/20,000` | Working |
| `/cpt/surgery/20,000-series-study-tips` | Working |
| `/cpt/surgery/20,000-series-cpt-book/page-1` / `page-2` / `page-3` | Working (3-page reader) |
| `/cpt/surgery/20000-series-post-work-quiz` | Working (note: no comma, unlike siblings) |
| `/cpt/e-m` | Working |
| `/cpt/e-m/guidelines` | Working |
| `/cpt/e-m/guidelines-quiz` | Working (has real questions, despite hub page text calling it a placeholder) |
| `/cpt/e-m/google-docs-reviewer` | Working |
| `/cpt/radiology` | Working (hub) |
| `/cpt/radiology/guidelines` | Stub — "Ready for your guidelines" placeholder |
| `/cpt/radiology/study-tips` | Stub — placeholder |
| `/final-exams` | Working (hub) |
| `/final-exams/exam1` | Working — 1493-line file, 100 questions |
| `/final-exams/exam2`, `/final-exams/exam3` | **Broken** — cards link here, folders don't exist |

## 3. Existing Features

- Homepage with custom design system and links to all four top-level study lanes plus final exams.
- Business of Medicine reviewer — complete article (payers, RBRVS, HIPAA, compliance, fraud/abuse, TCM).
- CPT Surgery 10,000 & 20,000 Series — landing pages, study tips, post-work quizzes, transcript/guidelines quizzes, and a 3-page "CPT book" reader.
- CPT E/M Series — hub, guidelines reviewer, guidelines quiz (populated), consolidated Google-Docs-style reviewer.
- CPT Radiology (70,000 Series) — hub only; guidelines/study-tips are stubs awaiting content.
- Final Exams — Exam 1 fully built (100-question mock exam); Exam 2/3 not built.
- Quiz mechanic (reimplemented independently per page): single-question view → option select → "Check Answer" reveal with explanation → "Next".
- Click-to-highlight reading-progress tool (`app/cpt/surgery/_digestive/highlighter.tsx`, `Highlightable`/`HighlightToolbar`): click any rule, tip, step, definition, or answer to highlight it yellow, click again to remove it; a floating "N highlighted / Clear all" pill shows the count. Persisted per-browser via localStorage, keyed by page path (there is no account system, so this is the only persistence available). As of 2026-09-22, rewritten as true text-selection highlighting: drag over exactly the text you want (not the whole containing paragraph/block), then pick yellow or green from a small popup that appears at the selection; click an existing highlight to remove it. The mechanism now lives entirely in `HighlightToolbar` (a page-wide selection listener scoped to the nearest `<main>`, using character-offset serialization so it survives reloads) — `Highlightable` is kept only as an inert pass-through for the ~50 files that already wrap content in it, so none of them needed edits for the rewrite. `<HighlightToolbar />` is now live on all 85 ICD-10 pages as well as every CPT page listed above — the whole site has it.

## 4. Coding Style Used

- Functional components, default exports, App Router `page.tsx` convention.
- Heavy use of inline `style={{...}}` objects (not Tailwind classes) on every page except the homepage — colors/gradients/shadows are hand-duplicated across files.
- Quiz pages are `"use client"` components with `useState` for `current`/`selected`/`showAnswer`, and a local `const questions = [...]` array defined in the same file as the page component (no separate data layer).
- No shared layout/header — every non-home page hand-rolls its own "Back to X" `<Link>`.
- No comments/JSDoc conventions; content-heavy files (quizzes, reviewers) are long single files with inline data.
- Prior development (before this session) was done with Codex/OpenAI, per the user; the `.github/agents/cpc-study-platform-builder.agent.md` file reflects that workflow's guardrails (smallest focused edits, verify routes against real folders, don't add backend/auth/persistence unless asked, never commit/push without explicit request).

## 5. Folder Structure

```
app/
├── layout.tsx                 (default create-next-app metadata, no shared nav)
├── page.tsx                   (homepage)
├── globals.css                (Tailwind + homepage design system + .cpt-book-page style)
├── components/QuizPage.tsx    (generic quiz component — currently UNUSED)
├── icd10/page.tsx
├── hcpcs/page.tsx
├── business-medicine/page.tsx
├── final-exams/
│   ├── page.tsx
│   └── exam1/{page.tsx, globals.css (orphaned, unused)}
└── cpt/
    ├── page.tsx
    ├── surgery/
    │   ├── page.tsx (has an orphaned dead `questions` array after the component)
    │   ├── 10,000/page.tsx           (comma — unreachable, see Known Issues)
    │   ├── 10000-series-*/page.tsx   (no comma: post-work-quiz, study-tips, transcript-quiz, guidelines-quiz)
    │   ├── 20,000/page.tsx           (comma)
    │   ├── 20,000-series-study-tips/page.tsx (comma)
    │   ├── 20,000-series-cpt-book/page-1|2|3/page.tsx (comma)
    │   └── 20000-series-post-work-quiz/page.tsx (no comma — inconsistent with siblings above)
    ├── e-m/{page.tsx, guidelines/, guidelines-quiz/, google-docs-reviewer/}
    └── radiology/{page.tsx, guidelines/ (stub), study-tips/ (stub)}
```

**Naming inconsistency to remember:** some 10,000/20,000-series folders use a literal comma in the name, others don't — this already caused a broken link (`/cpt/surgery/10000` vs actual `/cpt/surgery/10,000`) and should be standardized before adding more series folders.

## 6. Development Priorities (as of last audit)

1. Fix the three broken/dead links (`/cpt/surgery/10000`, `/final-exams/exam2`, `/final-exams/exam3`) and resolve the orphaned `10,000` series page.
2. Remove dead code: unused `QuizPage.tsx` (or adopt it), the orphaned `questions` array in `surgery/page.tsx`, the orphaned `exam1/globals.css`.
3. Add a shared layout/nav so users aren't stranded on pages with no way back.
4. Build a real reusable quiz engine (scoring + results screen) and migrate the 6+ duplicated quiz implementations onto it.
5. Add basic progress persistence (localStorage first — no backend exists).
6. Fill content gaps: ICD-10-CM, HCPCS, Radiology guidelines/study-tips, Final Exams 2 & 3.

## 7. Known Issues

- ~~**Broken link:** `app/cpt/page.tsx` → `/cpt/surgery/10000` (no comma; real folder has a comma) → 404.~~ Fixed 2026-09-22.
- **Broken links:** `app/final-exams/page.tsx` → `/final-exams/exam2` and `/exam3` → folders don't exist.
- ~~**Unreachable page:** `app/cpt/surgery/10,000/page.tsx` has no incoming link from anywhere in the app.~~ Fixed 2026-09-22 (the /cpt page.tsx link above was the missing incoming link; now corrected).
- **Dead component:** `app/components/QuizPage.tsx` is never imported anywhere.
- **Dead code:** `app/cpt/surgery/page.tsx` has an unused `questions` array (~130 lines) after the component's closing brace.
- **Dead file:** `app/final-exams/exam1/globals.css` is never imported (only root `app/globals.css` is used, via `layout.tsx`).
- **Stale copy:** E/M hub page describes the guidelines quiz as awaiting "future" content; it's actually already populated.
- **tsconfig.json** `include` array has the same path listed twice (leftover manual edit, harmless but sloppy).
- **Default scaffold metadata:** `layout.tsx` still has the "Create Next App" title/description — shows in every browser tab and search result.
- **No shared navigation:** every page (other than home) hand-rolls its own back-link; some (e.g. `/icd10`, `/hcpcs`) have none at all.
- **Massive duplication:** `/cpt` and `/cpt/surgery` render nearly the same series-grid markup; 6+ quiz pages duplicate the same quiz-taking logic and inline styles.
- **No CI:** nothing runs lint/typecheck/build automatically on push — the broken links above would not have been caught by automation.

## 8. Future Roadmap

1. **Stabilize:** fix broken links, delete dead code/files, fix tsconfig duplicate, set real page metadata.
2. **Unify navigation & design system:** shared header/layout, migrate inline styles to Tailwind, consolidate `/cpt` and `/cpt/surgery` duplication.
3. **Build a real Quiz engine:** shared component with scoring, results screen, per-option feedback; migrate all existing quizzes onto it; extract question banks into separate data files.
4. **Add persistence:** localStorage-based progress/score tracking, "resume where you left off."
5. **Fill content gaps:** ICD-10-CM, HCPCS, Radiology guidelines/study tips, Final Exams 2 & 3.
6. **Add CI:** lint/typecheck GitHub Action on push/PR.
7. **(Later, if scope grows)** Consider a lightweight backend for accounts, cross-device progress sync, or exam analytics — not needed for the current static architecture otherwise.

---
_Assessment as of last audit: front-end only, no backend/persistence. Engineering maturity is basic (heavy duplication, inline styles, naming inconsistencies, no shared architecture), while content quality (reviewer articles, quiz question writing) is decent to good. Not yet full-stack._
