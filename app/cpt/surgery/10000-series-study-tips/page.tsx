export default function StudyTipsPage() {
  return (
    <main
      className="study-tips-reviewer"
      style={{
        maxWidth: "1000px",
        margin: "40px auto",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        lineHeight: 1.6,
      }}
    >
      <h1>🔥 10,000 Series — MUST-KNOW CPC EXAM RULES</h1>

      <hr />

      <div
        style={{
          background: "linear-gradient(135deg, #eff6ff, #f5f3ff)",
          border: "1px solid #c7d2fe",
          borderRadius: "14px",
          padding: "22px",
          marginBottom: "28px",
        }}
      >
        <h2 style={{ marginTop: 0, marginBottom: "12px", color: "#1e3a8a" }}>
          📌 BDF QUICK EXTRACT — 10,000 SERIES
        </h2>

        <p>
          <strong>High-yield BDF takeaway:</strong> the 10,000 series is all about
          distinguishing <strong>skin procedures</strong> from deeper tissue work
          and matching the code to <strong>depth, location, and number of lesions</strong>.
        </p>

        <ul>
          <li>
            <strong>Debridement:</strong> select by <strong>deepest tissue removed</strong>
            {" "}first, then by <strong>surface area</strong>.
          </li>
          <li>
            <strong>Same-depth wounds:</strong> add area together. <strong>Different depths:</strong> do not add.
          </li>
          <li>
            <strong>Biopsy:</strong> code based on <strong>technique</strong> (tangential, punch, incisional).
          </li>
          <li>
            <strong>Shave removal:</strong> code by <strong>body location + lesion diameter</strong>.
          </li>
          <li>
            <strong>Excision:</strong> lesion diameter + margins = excised diameter.
          </li>
          <li>
            <strong>Simple closure:</strong> included with most lesion excisions/biopsies unless intermediate or complex repair is performed.
          </li>
          <li>
            <strong>FNA:</strong> report once per lesion with imaging guidance as defined by the modality; add-on codes apply for additional lesions.
          </li>
          <li>
            <strong>ATT/adjacent tissue transfer:</strong> report the flap/transfer code and use <strong>defect size</strong> to select the code.
          </li>
        </ul>

        <p style={{ marginBottom: 0 }}>
          <strong>Exam trigger:</strong> when a question mentions <strong>depth, size, margins, same wound, or skin vs subcutaneous</strong>, stop and classify the service before choosing the code.
        </p>
      </div>

      <div
        style={{
          background: "#f0fdf4",
          border: "1px solid #bbf7d0",
          borderLeft: "5px solid #16a34a",
          borderRadius: "14px",
          padding: "20px 22px",
          marginBottom: "28px",
        }}
      >
        <h2 style={{ marginTop: 0, marginBottom: "10px", color: "#166534" }}>
          📅 2026 UPDATE CHECK
        </h2>
        <p style={{ margin: "0 0 8px" }}>
          Cross-checked this page against the 2026 codebook text — everything already here still matches. One addition worth flagging:
        </p>
        <ul style={{ margin: 0, paddingLeft: "20px" }}>
          <li>
            <strong>10040</strong> (Extraction — e.g., marsupialization, or opening/removal of multiple milia, comedones, cysts, or pustules) carries fresh 2026 guidance and wasn&apos;t previously listed on this page. It&apos;s now added to the Incision &amp; Drainage section below.
          </li>
        </ul>
        <p style={{ margin: "10px 0 0" }}>
          Two other gaps got filled in while reviewing: <strong>Paring or Cutting (11055–11057)</strong> and <strong>Nails (11719–11732)</strong> weren&apos;t covered anywhere on this page before — both are now included as their own sections.
        </p>
      </div>

      <div
        style={{
          background: "#fff7ed",
          border: "2px solid #fdba74",
          borderRadius: "16px",
          padding: "20px",
          marginBottom: "28px",
          boxShadow: "0 4px 10px rgba(251,146,60,0.08)",
        }}
      >
        <h2 style={{ marginTop: 0, marginBottom: "16px", color: "#9a4d00" }}>
          🖼️ VISUAL STUDY SHEET — PDF STYLE
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "16px",
          }}
        >
          <div style={{ background: "white", border: "1px solid #fed7aa", borderRadius: "12px", padding: "16px" }}>
            <h3 style={{ marginTop: 0, color: "#c2410c" }}>Skin vs Deep</h3>
            <p style={{ margin: 0 }}>
              <strong>Skin only</strong> → 97597/97598<br />
              <strong>SubQ</strong> → 11042/11045<br />
              <strong>Muscle</strong> → 11043/11046<br />
              <strong>Bone</strong> → 11044/11047
            </p>
          </div>

          <div style={{ background: "white", border: "1px solid #fed7aa", borderRadius: "12px", padding: "16px" }}>
            <h3 style={{ marginTop: 0, color: "#c2410c" }}>Biopsy Clues</h3>
            <p style={{ margin: 0 }}>
              <strong>Diagnostic</strong> = biopsy<br />
              <strong>Tangential</strong> = 11102/11103<br />
              <strong>Punch</strong> = 11104/11105<br />
              <strong>Incisional</strong> = 11106/11107
            </p>
          </div>

          <div style={{ background: "white", border: "1px solid #fed7aa", borderRadius: "12px", padding: "16px" }}>
            <h3 style={{ marginTop: 0, color: "#c2410c" }}>Excision Rule</h3>
            <p style={{ margin: 0 }}>
              <strong>Lesion + margins = excised diameter</strong><br />
              If <strong>simple closure</strong> only, do not add a repair code separately.<br />
              If <strong>intermediate/complex</strong> closure is used, code repair separately.
            </p>
          </div>
        </div>

        <div
          style={{
            marginTop: "18px",
            background: "#fff",
            border: "1px solid #fdba74",
            borderRadius: "12px",
            padding: "16px",
          }}
        >
          <h3 style={{ marginTop: 0, marginBottom: "10px", color: "#9a4d00" }}>
            🔍 Decision Flow for the Exam
          </h3>
          <p style={{ margin: 0 }}>
            <strong>1. Is it skin only, subcutaneous, muscle, or bone?</strong> → determines debridement family.<br />
            <strong>2. Is it diagnostic biopsy, therapeutic shave, or excision?</strong> → choose the correct code family.<br />
            <strong>3. Are the lesions multiple and at the same depth?</strong> → add area only when appropriate.<br />
            <strong>4. Did closure become intermediate or complex?</strong> → code repair separately.
          </p>
        </div>
      </div>

      <hr />

      <h2>1. DEBRIDEMENT: DEPTH FIRST, THEN AREA</h2>

      <p>
        This is probably the single most important rule from the questions.
      </p>

      <h3>⭐ Remember:</h3>

      <p>
        <strong>1️⃣ DEPTH of tissue removed → 2️⃣ SURFACE AREA</strong>
      </p>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginBottom: "20px",
        }}
      >
        <thead>
          <tr>
            <th style={cellStyle}>Deepest Tissue Removed</th>
            <th style={cellStyle}>Primary</th>
            <th style={cellStyle}>Add-on</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td style={cellStyle}>Subcutaneous tissue</td>
            <td style={cellStyle}>11042</td>
            <td style={cellStyle}>11045</td>
          </tr>

          <tr>
            <td style={cellStyle}>Muscle/fascia</td>
            <td style={cellStyle}>11043</td>
            <td style={cellStyle}>11046</td>
          </tr>

          <tr>
            <td style={cellStyle}>Bone</td>
            <td style={cellStyle}>11044</td>
            <td style={cellStyle}>11047</td>
          </tr>
        </tbody>
      </table>

      <p>
        <strong>Memorize:</strong>
      </p>

      <ul>
        <li>42/45 = SUBQ</li>
        <li>43/46 = MUSCLE</li>
        <li>44/47 = BONE</li>
      </ul>

      <p>
        <strong>First 20 sq cm = base code</strong>
        <br />
        <strong>Each additional 20 sq cm = add-on code</strong>
      </p>

      <hr />

      <h2>2. MULTIPLE WOUNDS: COMBINE AREA ONLY AT THE SAME DEPTH</h2>

      <p>
        Add the surface areas together only when the wounds are debrided to
        the <strong>same depth</strong>.
      </p>

      <h3>⭐ Remember:</h3>

      <p>
        <strong>Same depth = ADD</strong>
        <br />
        <strong>Different depth = DON'T ADD</strong>
      </p>

      <hr />

      <h2>3. 11042–11047 vs 97597–97598</h2>

      <ul>
        <li>
          <strong>Skin only → 97597/97598</strong>
        </li>
        <li>
          <strong>SubQ → 11042/11045</strong>
        </li>
        <li>
          <strong>Muscle → 11043/11046</strong>
        </li>
        <li>
          <strong>Bone → 11044/11047</strong>
        </li>
      </ul>

      <p>
        Do not report the 11042–11047 series together with the skin-only
        debridement codes for the same wound.
      </p>

      <hr />

      <h2>4. BIOPSY vs SHAVE REMOVAL vs EXCISION</h2>

      <h3>🔬 Biopsy = Diagnostic</h3>

      <p>
        Think:
        <br />
        <strong>"I need tissue to determine what this lesion is."</strong>
      </p>

      <h3>✂️ Shave removal = Therapeutic</h3>

      <p>
        Think:
        <br />
        <strong>"I am completely removing this elevated lesion."</strong>
      </p>

      <hr />

      <h2>5. THREE SKIN BIOPSY TECHNIQUES</h2>

      <ul>
        <li>
          <strong>11102–11103 = Tangential</strong>
          <br />
          Shave / scoop / saucerize / curette
        </li>

        <li>
          <strong>11104–11105 = Punch</strong>
          <br />
          Punch tool / cylindrical full-thickness sample
        </li>

        <li>
          <strong>11106–11107 = Incisional</strong>
          <br />
          Scalpel / wedge / full thickness
        </li>
      </ul>

      <h3>🧠 Memory Trick</h3>

      <p>
        <strong>102/103 → TANGENTIAL</strong>
        <br />
        <strong>104/105 → PUNCH</strong>
        <br />
        <strong>106/107 → INCISIONAL</strong>
      </p>

      <hr />

      <h2>6. MULTIPLE BIOPSIES</h2>

      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <tbody>
          <tr>
            <td style={cellStyle}>2 tangential</td>
            <td style={cellStyle}>11102 + 11103</td>
          </tr>

          <tr>
            <td style={cellStyle}>3 punch</td>
            <td style={cellStyle}>11104 + 11105 × 2</td>
          </tr>

          <tr>
            <td style={cellStyle}>2 incisional</td>
            <td style={cellStyle}>11106 + 11107</td>
          </tr>

          <tr>
            <td style={cellStyle}>Incisional + tangential</td>
            <td style={cellStyle}>11106 + 11103</td>
          </tr>

          <tr>
            <td style={cellStyle}>Incisional + punch</td>
            <td style={cellStyle}>11106 + 11105</td>
          </tr>

          <tr>
            <td style={cellStyle}>Punch + 2 tangential</td>
            <td style={cellStyle}>11104 + 11103 × 2</td>
          </tr>
        </tbody>
      </table>

      <hr />

      <h2>7. BIOPSY + LESION REMOVAL</h2>

      <p>
        Don't automatically report both procedures when the biopsy is part of
        the definitive removal.
      </p>

      <p>
        <strong>
          Punch biopsy + subsequent shave removal of the same lesion
        </strong>
      </p>

      <p>
        The biopsy may not be separately reported when it is part of the
        definitive procedure.
      </p>

      <hr />

      <h2>8. BENIGN EXCISION: LESION + MARGINS</h2>

      <p>
        For benign lesion excision, remember:
      </p>

      <p>
        <strong>Lesion diameter + margins = excised diameter</strong>
      </p>

      <h3>⭐ Exam phrase</h3>

      <p>
        When you see <strong>"lesion and margins"</strong>, think:
        <br />
        <strong>EXCISED DIAMETER</strong>
      </p>

      <hr />

      <h2>9. MALIGNANT EXCISION</h2>

      <p>
        Same basic concept:
      </p>

      <p>
        <strong>Lesion + margins = excised diameter</strong>
      </p>

      <p>
        Then determine the appropriate malignant excision code based on
        location and size.
      </p>

      <hr />

      <h2>10. SIMPLE CLOSURE IS INCLUDED</h2>

      <p>
        Do not automatically add a repair code to an excision when only simple
        closure is performed.
      </p>

      <p>
        <strong>Excision + simple closure → excision code</strong>
        <br />
        <strong>
          Excision + intermediate/complex closure → excision + repair
        </strong>
      </p>

      <hr />

      <h2>11. ADJACENT TISSUE TRANSFER</h2>

      <p>
        Adjacent tissue transfer codes include the lesion excision/repair
        associated with the transfer.
      </p>

      <h3>⭐ Remember:</h3>

      <p>
        <strong>
          ATT → code the flap/transfer, not the lesion excision separately.
        </strong>
      </p>

      <p>
        The important measurement is the <strong>defect size</strong>.
      </p>

      <hr />

      <h2>12. SHAVE REMOVAL: LOCATION + SIZE</h2>

      <p>For 11300–11313, determine:</p>

      <ol>
        <li>Location</li>
        <li>Diameter</li>
      </ol>

      <ul>
        <li>
          <strong>11300–11303</strong> → trunk, arms, legs
        </li>
        <li>
          <strong>11305–11308</strong> → scalp, neck, hands, feet, genitalia
        </li>
        <li>
          <strong>11310–11313</strong> → face, ears, eyelids, nose, lips,
          mucous membrane
        </li>
      </ul>

      <p>
        <strong>Foot + 3.6 cm → 11308</strong>
      </p>

      <hr />

      <h2>13. SKIN TAGS</h2>

      <p>
        <strong>11200</strong> = first up to 15 skin tags
      </p>

      <p>
        <strong>11201</strong> = each additional 10 or part thereof
      </p>

      <hr />

      <h2>14. PREMALIGNANT LESIONS</h2>

      <p>
        <strong>17000</strong> = first lesion
      </p>

      <p>
        <strong>17003</strong> = each additional lesion
      </p>

      <h3>Example: 5 lesions</h3>

      <p>
        <strong>17000 + 17003 × 4</strong>
      </p>

      <hr />

      <h2>15. INCISION & DRAINAGE</h2>

      <ul>
        <li>
          <strong>10040</strong> = extraction (e.g., marsupialization, or opening/removal of multiple milia, comedones, cysts, or pustules) — <em>flagged for 2026</em>
        </li>
        <li>
          <strong>10060</strong> = simple/single abscess
        </li>
        <li>
          <strong>10061</strong> = complicated/multiple abscess
        </li>
      </ul>

      <p>
        <strong>Do first:</strong> figure out whether you&apos;re draining one simple site or something complicated/multiple before picking 10060 vs 10061 — and if it&apos;s a batch of small lesions like milia being opened/removed rather than a true abscess drainage, that&apos;s 10040, not 10060/10061.
      </p>

      <hr />

      <h2>16. PILONIDAL CYST I&D</h2>

      <ul>
        <li>
          <strong>10080</strong> = simple
        </li>
        <li>
          <strong>10081</strong> = complicated
        </li>
      </ul>

      <hr />

      <h2>17. PUNCTURE ASPIRATION</h2>

      <p>
        <strong>10160</strong> = puncture aspiration of abscess, hematoma,
        bulla, or cyst.
      </p>

      <p>
        Do not automatically treat every drainage procedure as incision and
        drainage.
      </p>

      <hr />

      <h2>18. FNA — FIRST + ADDITIONAL LESION</h2>

      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <tbody>
          <tr>
            <th style={cellStyle}>Guidance</th>
            <th style={cellStyle}>First</th>
            <th style={cellStyle}>Additional</th>
          </tr>

          <tr>
            <td style={cellStyle}>None</td>
            <td style={cellStyle}>10021</td>
            <td style={cellStyle}>10004</td>
          </tr>

          <tr>
            <td style={cellStyle}>Ultrasound</td>
            <td style={cellStyle}>10005</td>
            <td style={cellStyle}>10006</td>
          </tr>

          <tr>
            <td style={cellStyle}>Fluoroscopy</td>
            <td style={cellStyle}>10007</td>
            <td style={cellStyle}>10008</td>
          </tr>

          <tr>
            <td style={cellStyle}>CT</td>
            <td style={cellStyle}>10009</td>
            <td style={cellStyle}>10010</td>
          </tr>

          <tr>
            <td style={cellStyle}>MRI</td>
            <td style={cellStyle}>10011</td>
            <td style={cellStyle}>10012</td>
          </tr>
        </tbody>
      </table>

      <hr />

      <h2>19. FNA IS NOT CORE NEEDLE BIOPSY</h2>

      <p>
        <strong>FNA → obtains cells → cytological examination</strong>
      </p>

      <p>
        <strong>
          Core needle biopsy → obtains a core of tissue → histopathological
          examination
        </strong>
      </p>

      <hr />

      <h2>20. 10035–10036: SOFT-TISSUE MARKER</h2>

      <ul>
        <li>
          <strong>10035</strong> = first lesion/target
        </li>
        <li>
          <strong>10036</strong> = each additional lesion/target
        </li>
      </ul>

      <p>
        Report once per target regardless of how many markers are placed.
      </p>

      <hr />

      <h2>21. PARING OR CUTTING (11055–11057)</h2>

      <p>
        These codes are for shaving down a <strong>hyperkeratotic lesion</strong> — think corns and calluses — not for removing a growth entirely.
      </p>

      <ul>
        <li>
          <strong>11055</strong> = single lesion
        </li>
        <li>
          <strong>11056</strong> = 2 to 4 lesions
        </li>
        <li>
          <strong>11057</strong> = more than 4 lesions
        </li>
      </ul>

      <h3>⭐ Remember:</h3>
      <p>
        Code selection here is purely a <strong>lesion count</strong>, not a size measurement like excision or shaving. Don&apos;t reach for the destruction codes (17110/17111) for a corn or callus — paring has its own dedicated code family.
      </p>

      <hr />

      <h2>22. NAILS (11719–11732)</h2>

      <p>
        Three different levels of nail work, each with its own code — don&apos;t treat them as interchangeable.
      </p>

      <ul>
        <li>
          <strong>11719</strong> = trimming of nondystrophic nails, any number
        </li>
        <li>
          <strong>11720</strong> = debridement of nail(s), 1 to 5
        </li>
        <li>
          <strong>11721</strong> = debridement of nail(s), 6 or more
        </li>
        <li>
          <strong>11730</strong> = avulsion of nail plate, partial or complete, simple, single
        </li>
        <li>
          <strong>11732</strong> = avulsion, each additional nail plate (add-on)
        </li>
      </ul>

      <h3>⭐ Remember:</h3>
      <p>
        Trimming (11719) is the simplest/routine service. Debridement (11720/11721) splits by how many nails, not by size. Avulsion (11730 + 11732) is the most involved — removing the nail plate itself — and 11732 is an add-on, so it&apos;s never billed alone.
      </p>

      <hr />

      <h2>🧠 THE BIGGEST CPC EXAM THINKING RULES</h2>

      <h3>DEBRIDEMENT</h3>

      <p>
        <strong>DEPTH → AREA</strong>
      </p>

      <p>
        Skin → 97597/97598
        <br />
        SubQ → 11042/11045
        <br />
        Muscle → 11043/11046
        <br />
        Bone → 11044/11047
      </p>

      <p>
        <strong>Same depth = combine area.</strong>
      </p>

      <h3>BIOPSY</h3>

      <p>
        <strong>TECHNIQUE → INTENT</strong>
      </p>

      <p>
        Tangential → 11102/11103
        <br />
        Punch → 11104/11105
        <br />
        Incisional → 11106/11107
      </p>

      <p>
        <strong>Diagnostic = biopsy.</strong>
        <br />
        <strong>Therapeutic shave = 11300–11313.</strong>
      </p>

      <h3>EXCISION</h3>

      <p>
        <strong>LESION + MARGINS → EXCISED DIAMETER</strong>
      </p>

      <h3>ADJACENT TISSUE TRANSFER</h3>

      <p>
        <strong>DEFECT SIZE</strong>
      </p>

      <h3>DESTRUCTION</h3>

      <p>
        <strong>Number of lesions matters.</strong>
      </p>

      <h3>SKIN TAGS</h3>

      <p>
        <strong>11200 = first 15</strong>
        <br />
        <strong>11201 = each additional 10 or part</strong>
      </p>

      <hr />

      <h2>🎯 WHAT TO DO FIRST / WHAT TO AVOID — SECTION BY SECTION</h2>

      <p>
        A fast overview built for exam day: for each subsection, the single first question to ask, and the most common way students lose the point.
      </p>

      <h3 style={guidelineHeadingStyle}>Incision &amp; Drainage</h3>
      <p><strong>Do first:</strong> decide simple/single vs. complicated/multiple before touching a code — that alone splits 10060 from 10061.</p>
      <p><strong>Avoid:</strong> coding a puncture aspiration (10160) as if it were an incision and drainage — they&apos;re different procedures with different codes.</p>

      <h3 style={guidelineHeadingStyle}>Debridement</h3>
      <p><strong>Do first:</strong> find the single deepest tissue layer removed across the whole wound — that depth picks the code family (skin, subQ, muscle/fascia, or bone).</p>
      <p><strong>Avoid:</strong> adding surface areas together across different depths. Same depth → combine area. Different depths → keep them separate, and don&apos;t confuse epidermis/dermis-only debridement (which belongs under 97597/97598, not 11042–11047).</p>

      <h3 style={guidelineHeadingStyle}>Paring or Cutting</h3>
      <p><strong>Do first:</strong> count the lesions — this family is selected by count (1, 2–4, or 5+), not by size.</p>
      <p><strong>Avoid:</strong> reaching for a destruction code (17110/17111) or an excision code for a simple corn/callus paring — it has its own dedicated code family.</p>

      <h3 style={guidelineHeadingStyle}>Biopsy</h3>
      <p><strong>Do first:</strong> identify the technique actually used — tangential (shave/scoop/curette), punch, or incisional — since that alone determines the code, not the diagnosis.</p>
      <p><strong>Avoid:</strong> separately coding a biopsy when the tissue sample was simply a routine byproduct of another procedure (like sending tissue to pathology during an excision) — that&apos;s not a separately reportable biopsy.</p>

      <h3 style={guidelineHeadingStyle}>Shaving of Lesions</h3>
      <p><strong>Do first:</strong> confirm the intent was therapeutic removal (not diagnostic sampling), then use body location plus lesion diameter to pick the code.</p>
      <p><strong>Avoid:</strong> using a shave code when the documentation actually describes a full-thickness removal with margins — that&apos;s excision territory, not shaving.</p>

      <h3 style={guidelineHeadingStyle}>Excision — Benign &amp; Malignant</h3>
      <p><strong>Do first:</strong> measure lesion diameter plus the narrowest adequate margin to get the excised diameter, then check location (trunk/arms/legs vs. scalp/neck/hands/feet/genitalia vs. face/ears/eyelids/nose/lips) for the right code range.</p>
      <p><strong>Avoid:</strong> billing an excision code alongside an adjacent tissue transfer performed at the same session — the excision is bundled into the tissue transfer code, not reported separately.</p>

      <h3 style={guidelineHeadingStyle}>Skin Tags</h3>
      <p><strong>Do first:</strong> count the total number of tags removed in the session, not per site.</p>
      <p><strong>Avoid:</strong> using the skin tag codes for a lesion that&apos;s actually being fully excised with margins — that belongs in the excision code family instead.</p>

      <h3 style={guidelineHeadingStyle}>Nails</h3>
      <p><strong>Do first:</strong> identify the level of service — routine trimming, debridement (and how many nails), or avulsion of the nail plate.</p>
      <p><strong>Avoid:</strong> coding a simple trim as a debridement, or a debridement as an avulsion — these represent increasing levels of work and aren&apos;t interchangeable.</p>

      <hr />

      <h2>📚 ACTUAL CPT GUIDELINES — 10,000 SERIES</h2>

      <h3 style={guidelineHeadingStyle}>1. Fine Needle Aspiration (FNA) Biopsy</h3>
      <ol>
        <li>FNA obtains cells with a fine needle for cytologic examination.</li>
        <li>Report FNA once per lesion sampled during the session.</li>
        <li>When separate lesions are sampled with the same imaging modality, use the appropriate add-on code for additional lesions.</li>
        <li>When different imaging modalities are used, report the corresponding primary code with modifier 59 for the additional modality.</li>
        <li>Do not separately report imaging guidance when it is included in the FNA code.</li>
      </ol>

      <h3 style={guidelineHeadingStyle}>2. Debridement</h3>
      <ol>
        <li>Select the code by the deepest tissue removed and the wound surface area.</li>
        <li>For one wound, report the deepest level of tissue removed.</li>
        <li>For multiple wounds, add the areas only when the wounds are debrided to the same depth.</li>
        <li>Do not combine areas from different depths.</li>
        <li>Use 97597-97598 for skin-only debridement and 11042-11047 for subcutaneous tissue, muscle/fascia, or bone.</li>
        <li>Do not report 11042-11047 with 97597-97602 for the same wound.</li>
      </ol>

      <h3 style={guidelineHeadingStyle}>3. Biopsy</h3>
      <ol>
        <li>Report a biopsy when tissue is obtained independently or distinctly for diagnostic histopathologic examination.</li>
        <li>Tissue obtained during excision, destruction, or shave removal is usually included and is not a separate biopsy.</li>
        <li>Partial-thickness biopsy does not extend below the dermis or lamina propria.</li>
        <li>Full-thickness biopsy extends into the subcutaneous or submucosal space.</li>
        <li>Sampling only the stratum corneum is not a separately reportable skin biopsy.</li>
        <li>Tangential biopsy uses a shave, scoop, saucerize, or curette technique and is reported with 11102-11103.</li>
        <li>Punch biopsy uses a punch tool to obtain a cylindrical full-thickness sample and is reported with 11104-11105. Simple closure is included.</li>
        <li>Incisional biopsy uses a sharp blade to obtain a full-thickness vertical or wedge sample and is reported with 11106-11107. Simple closure is included.</li>
        <li>For multiple biopsies, report one primary biopsy code and use the appropriate add-on code for each additional lesion or technique.</li>
      </ol>

      <h3 style={guidelineHeadingStyle}>4. Skin Tags and Shave Removal</h3>
      <ol>
        <li>Report removal of up to 15 skin tags with 11200 and each additional 10 lesions, or part thereof, with 11201.</li>
        <li>Shaving is transverse or horizontal removal of an epidermal or dermal lesion without full-thickness dermal excision.</li>
        <li>Shave removal is therapeutic and includes local anesthesia and wound cauterization when performed.</li>
        <li>Use 11300-11313 according to the lesion location and diameter.</li>
      </ol>

      <h3 style={guidelineHeadingStyle}>5. Benign and Malignant Excision</h3>
      <ol>
        <li>Excision means full-thickness removal through the dermis, including margins and simple closure when performed.</li>
        <li>Measure the greatest diameter of the lesion plus the narrowest margins required for complete excision before removal.</li>
        <li>Use the same excised diameter whether the defect is closed linearly or reconstructed with a graft.</li>
        <li>Report each separate lesion excised.</li>
        <li>Report intermediate or complex closure separately when the closure meets those definitions.</li>
        <li>When adjacent tissue transfer is performed, report the adjacent tissue transfer code only; do not separately report 11400-11446 or 11600-11646.</li>
        <li>For malignant re-excision at a later operative session, report the appropriate excision code and append modifier 58 when performed during the postoperative period.</li>
      </ol>

      <h3 style={guidelineHeadingStyle}>6. Wound Repair and Closure</h3>
      <ol>
        <li>Simple repair is a superficial wound requiring a simple one-layer closure.</li>
        <li>Intermediate repair includes layered closure of deeper subcutaneous tissue and superficial non-muscle fascia, or a single-layer closure of a heavily contaminated wound requiring extensive cleaning.</li>
        <li>Complex repair includes intermediate repair plus features such as exposed bone, cartilage, tendon, named neurovascular structures, debridement of wound edges, extensive undermining, free-margin involvement, or retention sutures.</li>
        <li>Measure and record every repaired wound in centimeters.</li>
        <li>Add lengths only for wounds in the same repair classification and the same anatomic grouping.</li>
        <li>Do not add lengths from different repair classifications or different anatomic groupings.</li>
        <li>When multiple classifications are repaired, report the more complicated repair first and the less complicated repair with modifier 59.</li>
        <li>Debridement is separately reportable only when it involves prolonged cleansing, appreciable removal of devitalized or contaminated tissue, or is performed separately without immediate primary closure.</li>
        <li>Repair of exposed nerves, vessels, or tendons is reported under the appropriate body system. Simple exploration or ligation is generally included in wound closure.</li>
        <li>For wound enlargement, penetration assessment, foreign-body removal, or coagulation of minor vessels after penetrating trauma, use 20100-20103 as appropriate.</li>
      </ol>

      <h3 style={guidelineHeadingStyle}>7. Adjacent Tissue Transfer</h3>
      <ol>
        <li>Codes 14000-14302 include excision and/or repair by adjacent tissue transfer or rearrangement.</li>
        <li>Undermining alone without additional incisions is not adjacent tissue transfer; use complex repair codes when appropriate.</li>
        <li>Do not separately report benign or malignant lesion excision with an adjacent tissue transfer code.</li>
        <li>For code selection, add the primary and secondary defects together to determine the total defect size.</li>
        <li>Use the recipient area and total defect size to select the appropriate code.</li>
      </ol>

      <h3 style={guidelineHeadingStyle}>8. Skin Replacement, Grafts, and Flaps</h3>
      <ol>
        <li>Surgical preparation codes 15002-15005 prepare a clean, viable wound bed for a graft, flap, skin substitute, or negative-pressure wound therapy.</li>
        <li>Do not use 15002-15005 for chronic-wound debris removal when the wound is left to heal by secondary intention.</li>
        <li>For multiple wounds, add areas only within the same anatomic grouping.</li>
        <li>Use the recipient-area size when selecting skin replacement and graft codes.</li>
        <li>Skin substitute supply is reported separately with 15271-15278.</li>
        <li>Removal of a current graft and simple wound cleansing are included when performed.</li>
        <li>Debridement is separately reportable only when it meets the guideline requirements for gross contamination, appreciable devitalized tissue, or separate performance.</li>
        <li>Repair of a donor site requiring a skin graft or local flap is separately reportable.</li>
        <li>For flaps, the listed region generally refers to the recipient site, except when the code describes a donor site for a tube or delayed flap.</li>
      </ol>

      <h3 style={guidelineHeadingStyle}>9. Burns and Destruction</h3>
      <ol>
        <li>Burn treatment codes 16000-16036 refer to local treatment of the burned surface.</li>
        <li>List the percentage of body surface involved and the depth of the burn when required.</li>
        <li>Destruction includes ablation of benign, premalignant, or malignant tissue by methods such as electrosurgery, cryosurgery, laser, chemical treatment, or curettement.</li>
        <li>Destruction codes generally include local anesthesia and usually do not require closure.</li>
        <li>For premalignant lesions, use 17000 for the first lesion, 17003 for lesions 2 through 14, and 17004 for 15 or more lesions.</li>
        <li>For benign lesions, use 17110 for up to 14 lesions and 17111 for 15 or more lesions.</li>
        <li>Do not report 17004 with 17000-17003 for the same service.</li>
      </ol>

      <h3 style={guidelineHeadingStyle}>10. Breast Procedure Reminders</h3>
      <ol>
        <li>Percutaneous image-guided breast biopsy codes 19081-19086 include the applicable imaging guidance and localization device placement when performed.</li>
        <li>Do not separately report 76098, 76942, 77002, or 77021 for the same lesion when included in the breast biopsy service.</li>
        <li>For additional lesions using the same imaging modality, use the appropriate add-on code.</li>
        <li>For bilateral image-guided biopsies, use the primary code for the initial lesion and the add-on code for the contralateral or additional lesion.</li>
        <li>Percutaneous breast biopsy without imaging guidance is reported with 19100.</li>
        <li>Open incisional breast biopsy is reported with 19101 and does not include imaging guidance.</li>
        <li>For bilateral applicable breast procedures, report modifier 50 according to payer and current coding instructions.</li>
      </ol>

      <hr />

      <h2>🔥 10,000-SERIES EXAM PRIORITIES</h2>

      <ol>
        <li>Debridement depth + area ⭐⭐⭐⭐⭐</li>
        <li>Biopsy vs shave vs excision ⭐⭐⭐⭐⭐</li>
        <li>Benign/malignant excision + margins ⭐⭐⭐⭐⭐</li>
        <li>Adjacent tissue transfer ⭐⭐⭐⭐⭐</li>
        <li>Multiple biopsy rules ⭐⭐⭐⭐⭐</li>
        <li>Repair classifications ⭐⭐⭐⭐</li>
        <li>Shave removal location + size ⭐⭐⭐⭐</li>
        <li>FNA first/additional lesion + imaging ⭐⭐⭐⭐</li>
        <li>I&D simple vs complicated ⭐⭐⭐</li>
        <li>Skin tags ⭐⭐⭐</li>
        <li>Premalignant destruction ⭐⭐⭐</li>
      </ol>

      <hr />

      <h2>🧠 QUICK MEMORY CHECK</h2>

      <div
        style={{
          padding: "20px",
          border: "2px solid #ddd",
          borderRadius: "12px",
          background: "#f8f8f8",
        }}
      >
        <p>
          <strong>DEBRIDEMENT:</strong> DEPTH → AREA
        </p>

        <p>
          <strong>BIOPSY:</strong> TECHNIQUE → INTENT
        </p>

        <p>
          <strong>EXCISION:</strong> LESION + MARGINS
        </p>

        <p>
          <strong>ATT:</strong> DEFECT SIZE
        </p>

        <p>
          <strong>PREMALIGNANT:</strong> 17000 FIRST + 17003 ADDITIONAL
        </p>

        <p>
          <strong>SKIN TAGS:</strong> 11200 FIRST 15
        </p>
      </div>
    </main>
  );
}

const cellStyle = {
  border: "1px solid #ddd",
  padding: "10px",
  textAlign: "left" as const,
};

const guidelineHeadingStyle = {
  color: "#1d4ed8",
  fontSize: "26px",
  fontWeight: "800",
  marginTop: "30px",
  marginBottom: "14px",
};