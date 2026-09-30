import { SeriesSchematicPage, type SchematicNode } from "../_digestive/schematic";
import { BLUE } from "../_digestive/players";

const nodes: SchematicNode[] = [
  {
    n: 1,
    title: "Chapter Map & the Smaller Removal Families",
    range: "10004–11201",
    points: [
      "Whole chapter (10004–19499) runs simplest → most reconstructive",
      "FNA biopsy: primary + add-on pair by imaging guidance (10021/+10004 no guidance … 10011/10012 MRI), billed per LESION per session",
      "Debridement: eczematous/infected skin (11000–11001) vs. depth-based WOUND debridement (11042–11047), billed by deepest layer then area",
      "Biopsy (11102–11107) organized by TECHNIQUE — one PRIMARY code per encounter, every other lesion billed on its own technique's add-on",
      "Skin tags: 11200 (up to 15) / +11201 (each additional 10)",
    ],
    callout: "Ask: is tissue being SAMPLED to look at it, or REMOVED because it's unwanted? That split picks the family.",
  },
  {
    n: 2,
    title: "Shaving & Lesion Excision",
    range: "11300–11313 · 11400–11471 · 11600–11646",
    points: [
      "Shaving = partial-thickness, billed by lesion diameter alone (no margin)",
      "Excision = full-thickness; billed by EXCISED diameter (lesion + margin, measured before the cut)",
      "Benign (11400–11471) vs. malignant (11600–11646), each split into 3 anatomic groups × 6 size tiers",
      "Simple closure is bundled; intermediate/complex closure billed separately; an ATT absorbs the excision entirely",
      "Same-session re-excision = widest single diameter only; different-session re-excision = that day's diameter + modifier 58",
    ],
    callout: "Two lesions are NEVER summed for excision — each gets its own code (modifier 51 on the second).",
  },
  {
    n: 3,
    title: "Destruction",
    range: "17000–17004 · 17106–17111 · 17260–17286",
    points: [
      "Ablation by any method, no specimen sent for margins — that's what separates it from excision",
      "Three severity families: premalignant (17000/+17003, or stand-alone 17004 for 15+), benign (by area or by count), malignant (by group + lesion diameter)",
      "Malignant destruction sized by LESION diameter only — no margin added, unlike excision",
      "Reuses the same 3 anatomic groups as malignant excision, just different numbers",
    ],
    callout: "Destruction has THREE severity tiers; excision only has two — don't cross-apply the habit.",
  },
  {
    n: 4,
    title: "Mohs Micrographic Surgery",
    range: "17311–17315",
    points: [
      "Surgeon reads their own specimens in real time — examines 100% of margins",
      "Only TWO anatomic groups: head/neck/hands/feet/genitalia (17311/+17312) vs. trunk/arms/legs (17313/+17314)",
      "+17315 = each block beyond the first 5, in any stage, either group",
      "Multiple distinct lesions each get their own first-stage code (modifier 59 on the second)",
    ],
    callout: "There is no separate face/eyelid/lip Mohs family — those sit under 17311's head/neck group.",
  },
  {
    n: 5,
    title: "Repair (Closure)",
    range: "12001–13160",
    points: [
      "Classify first — simple (one layer), intermediate (layered, or contaminated single-layer), or complex (+ exposed bone/cartilage/tendon, debridement, undermining, free margin)",
      "Anatomic groups SHIFT by classification — hands/feet ride with the easy group for simple repair, but move to their own group (with neck) for intermediate",
      "Same classification + same group → add lengths, one code; same classification + different group → code separately",
      "Different classifications → never add; modifier 59 goes on the LESS complicated repair",
      "Normal debridement, simple ligation, and simple nerve/vessel/tendon exploration are packaged in",
    ],
    callout: "Complex repair has no ≤1.0 cm tier — a defect that small defaults to simple or intermediate instead.",
  },
  {
    n: 6,
    title: "Adjacent Tissue Transfer",
    range: "14000–14302",
    points: [
      "Z-plasty, W-plasty, rotation/advancement/island flaps — all coded the SAME way, by group + total defect area, never by technique name",
      "Defect = primary (excision) + secondary (flap design), measured together in sq cm",
      "4 anatomic groups, but only for the two SMALLER tiers (≤10 sq cm, 10.1–30.0 sq cm)",
      "Past 30 sq cm, every group funnels into the universal 14301/+14302 — no group-specific code exists above 30 sq cm",
      "Excision feeding directly into the ATT is bundled in, not billed separately; simple repair of the secondary defect is bundled too",
    ],
    callout: "The single most-missed rule in this chapter: past 30 sq cm, anatomic group stops mattering entirely.",
  },
  {
    n: 7,
    title: "Skin Replacement Surgery & Skin Substitutes",
    range: "15002–15278",
    points: [
      "Two separate billable steps: surgical PREPARATION of the recipient site, then PLACEMENT of an autograft or skin substitute",
      "Prep and skin substitutes: only 2 anatomic groups (trunk/arms/legs vs. all other areas); full-thickness autografts use 4 groups",
      "Code always picked by RECIPIENT area, never donor site",
      "Sum multiple wounds only WITHIN the same anatomic group; different groups both billed same day get modifier 59 on each primary",
      "Donor-site suture repair, routine dressing supplies, and normal debridement are packaged; a donor-site graft/flap or the substitute material's own supply are billed separately",
    ],
    callout: "Same anatomic-group-summing rule as Repair — learn it once, it reuses across three different topics.",
  },
  {
    n: 8,
    title: "Flaps",
    range: "15570–15778",
    points: [
      "Flap keeps (or reconnects) a living blood supply — that's what separates it from a graft",
      "Pedicle flap (15570–15738) stays attached throughout; free flap (15756–15758) is detached and microvascular-reattached",
      "Region named = RECIPIENT site by default — flips to DONOR site only for tube pedicle formation or a \"delay\"",
      "Direct closure of the donor site is packaged; a graft or local flap closing the donor site is billed separately",
      "\"Other flaps and grafts\" (15740–15778) catches island pedicle flaps, fat grafting, composite grafts, hair punch grafts, biologic implants",
    ],
    callout: "\"Delay\" is the one word that flips a flap code from recipient to donor — everywhere else, default recipient.",
  },
  {
    n: 9,
    title: "I&D, Nails, Pilonidal Cysts & Drug Implants",
    range: "10040–10180 · 11719–11765 · 10080–10081/11770–11772 · 11981–11983",
    points: [
      "I&D coded first by CONDITION (acne, abscess, pilonidal, hematoma/seroma, postop wound infection), then by complexity where that split exists",
      "No specific site documented → default to the general \"skin\" I&D codes (10040–10180)",
      "Pilonidal: I&D (10080/10081) only drains an acute abscess; excision (11770–11772) is the definitive, lasting removal — not interchangeable",
      "Nails: mostly one code per distinct action (trim, debride, avulse, evacuate hematoma) — 11750/11765 both address ingrown/deformed nails but at different depths",
      "Drug-delivery implants (11981–11983) billed ONCE per procedure, regardless of how many rods/capsules",
    ],
    callout: "Small, non-overlapping families — treat this node as vocabulary to recognize, not a size ladder to climb.",
  },
  {
    n: 10,
    title: "Pressure Ulcers (Decubitus)",
    range: "15920–15958",
    points: [
      "Condition-specific excision codes — coccygeal, sacral, ischial, trochanteric each get their own block",
      "Closure tier matters: primary suture, skin flap closure, or excision only IN PREPARATION for a later flap/graft",
      "Most sites split with/without ostectomy at each tier; coccygeal always bundles the coccygectomy in",
      "Flap-or-graft-prep tier needs a SECOND code — 15734/15738 for a muscle flap, or 15100/15101 for a split-thickness graft",
    ],
    callout: "Coccygeal (2 codes) and ischial's flap-prep tier (1 code) are the two exceptions to the usual with/without-ostectomy pair.",
  },
  {
    n: 11,
    title: "Burns, Local Treatment",
    range: "16000–16036",
    points: [
      "Local treatment only — reportable alongside E/M and Medicine-section services the same encounter",
      "First-degree, initial treatment only → 16000",
      "Second-degree dressing/debridement sized small / medium / large by TBSA (16020/16025/16030)",
      "Escharotomy (16035/+16036) counted by NUMBER OF INCISIONS, a different axis entirely",
      "A graft or skin substitute closing the burn is reported additionally — never bundled into 16000-series",
    ],
    callout: "Escharotomy breaks the area-based pattern of this family — it's counted by incisions, not TBSA.",
  },
  {
    n: 12,
    title: "Procedures on the Breasts",
    range: "19081–19369",
    points: [
      "Excisions split by image guidance (19081–19086) vs. none (19100/19101), plus non-margin excisions (19110–19126)",
      "Same-modality multiple biopsies use that modality's add-on; a different modality gets its own primary code",
      "Localization device placed before an open biopsy → report BOTH the biopsy code and the placement code",
      "5-type mastectomy ladder (19303–19307): partial → simple/complete → subcutaneous → radical (± Urban-type internal mammary) → modified radical",
      "Pectoralis MAJOR is never removed outside 19305/19306 — its presence/absence is the fastest way to rule 19307 in or out",
    ],
    callout: "19306 is the ONLY ladder code touching internal mammary nodes — if the note doesn't mention them, it isn't 19306.",
  },
];

export default function IntegumentarySchematicPage() {
  return (
    <SeriesSchematicPage
      theme={BLUE}
      kicker="10,000 SERIES · STRATEGIC SCHEMATIC"
      title="Integumentary System at a Glance"
      blurb="The whole 10004–19499 chapter as one visual roadmap — twelve stops, top to bottom, from the smallest removal codes to the mastectomy ladder."
      nav={[
        { href: "/cpt/surgery/10,000", label: "10,000 Series home" },
        { href: "/cpt/surgery/10000-series-guidelines-reviewer", label: "Reviewer Part 1" },
        { href: "/cpt/surgery/10000-series-guidelines-reviewer-part-2", label: "Part 2" },
        { href: "/cpt/surgery/10000-series-guidelines-reviewer-part-3", label: "Part 3" },
        { href: "/cpt/surgery/10000-series-discussion-guide", label: "Discussion Guide" },
      ]}
      backHref="/cpt/surgery/10,000"
      backLabel="← Back to the 10,000 Series"
      nodes={nodes}
      strategyTitle="The Biggest CPC Strategy for Integumentary"
      strategyText={
        <>
          <p style={{ margin: "0 0 10px" }}>
            Every Integumentary case resolves with the same three questions, in order: (1) What happened to the tissue — was it
            just SAMPLED (biopsy/FNA), REMOVED (shave, excision, destruction), or REPLACED/RECONSTRUCTED (graft, ATT, flap)?
            (2) If tissue was removed, is the closure already BUNDLED into that code, or does it cross a threshold that makes
            it separately billable? (3) If more than one wound or defect is on the table, do they share the SAME anatomic
            group — because that one rule repeats almost word-for-word across Repair, Adjacent Tissue Transfer, and Skin
            Replacement Surgery: sum within a group, never across groups.
          </p>
          <p style={{ margin: "0 0 10px" }}>
            Walk a single note through it: a 2.0 cm malignant lesion is excised from the trunk with 1.0 cm margins on each
            side, and the resulting defect — excision plus the flap's own design — measures 34 sq cm, closed with a rotation
            flap. Step 1: the tissue was both excised AND reconstructed with an ATT. Step 2: excised diameter would be 4.0 cm
            (trunk, malignant, 11600-series tier) — but because the excision fed directly into the ATT, the ATT rule
            overrides it: the excision is not separately reportable at all. Step 3: 34 sq cm is over the 30 sq cm line, so the
            trunk's own group-specific ATT codes no longer apply — the case funnels into the universal 14301, regardless of
            body location.
          </p>
          <p style={{ margin: 0, fontWeight: 800, fontSize: "17px" }}>
            Final answer: 14301 alone — no excision code, no trunk-specific ATT code. Work the three questions in order and
            the five-digit code stops being a guess and becomes something you build.
          </p>
        </>
      }
    />
  );
}
