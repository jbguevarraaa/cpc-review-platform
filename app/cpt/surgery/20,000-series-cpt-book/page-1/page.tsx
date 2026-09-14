import Link from "next/link";

const sections = [
  {
    title: "Musculoskeletal System",
    paragraphs: [
      "All services that appear in the Musculoskeletal System section include the application and removal of the first cast, splint, or traction device, when performed. Supplies may be reported separately. If a cast is removed by someone other than the physician or other qualified health care professional who applied the cast, report a cast removal code (29700, 29705, 29710).",
      "Subsequent replacement of cast, splint, or strapping (29000-29750) and/or traction device (eg, 20690, 20692) during or after the global period may be reported separately.",
      "A cast, splint, or strapping is not considered part of the preoperative care; therefore, the use of modifier 56 for preoperative management only is not applicable.",
      "Codes for obtaining autogenous bone grafts, cartilage, tendon, fascia lata grafts or other tissues through separate incisions are to be used only when the graft is not already listed as part of the basic procedure.",
    ],
  },
  {
    title: "Fracture and/or Dislocation Treatment",
    paragraphs: [
      "Fracture and dislocation treatment codes appear throughout the Musculoskeletal System section. These codes are categorized by the type of treatment (closed, percutaneous, open) and type of stabilization (fixation, immobilization). There is no coding correlation between the type of fracture/dislocation (eg, open [compound], closed) and the type of treatment (eg, closed, percutaneous, open) provided. For example, a closed fracture may require open treatment.",
    ],
  },
  {
    title: "Fracture/Dislocation Treatment Definitions",
    definitions: [
      ["Manipulation", "Reduction by the application of manually applied forces or traction to achieve satisfactory alignment of the fracture or dislocation. If satisfactory alignment (reduction) is not maintained and requires subsequent re-reduction of a fracture or dislocation by the same physician or same qualified health care professional, append modifier 76 to the fracture/dislocation treatment code."],
      ["Traction", "The application of a distracting or traction force to the spine or a limb. Skeletal traction includes a wire, pin, screw, or clamp that is attached to (penetrates) bone. Skin traction is the application of force to a limb using strapping or a device that is applied directly to the skin only."],
      ["Closed treatment", "The treatment site is not surgically opened (ie, not exposed to the external environment nor directly visualized). Closed treatment of a fracture/dislocation may be performed without manipulation (eg, application of cast, splint, or strapping), with manipulation, with skeletal traction, and/or with skin traction."],
      ["Casting, splinting, or strapping used solely to temporarily stabilize the fracture for patient comfort is not considered closed treatment.", ""],
      ["Percutaneous skeletal fixation", "Treatment that is neither open nor closed. In this procedure, the fracture fragments are not visualized, but fixation (eg, pins, screws) is placed across the fracture site, typically with imaging guidance."],
      ["Open treatment", "The site is opened surgically to expose the fracture/dislocation to the external environment for treatment, or the fracture/dislocation is treated through the traumatic wound or an extension thereof or is treated with an intramedullary nail or other internal fixation device placed through a surgical exposure that is remote from the fracture site with or without direct visualization of the fracture site."],
      ["External fixation", "The use of pins and/or wires that penetrate the bone(s) and interconnection devices (eg, clamps, bars, rings) for fracture/dislocation treatment. External fixation may be used for temporary or long-term fracture/dislocation treatment. Uniplanar external fixation places all the pins in approximately the same plane but may also include triangular fixation across a joint. Multiplanar external fixation uses transosseous wires and threaded pins placed in several planes that are held with interconnected stabilizing and/or tensioning rings and/or half rings. External fixation may be used for all types of fracture/dislocation treatment (ie, closed, percutaneous, open). Codes for external fixation are reported separately only when external fixation is not listed in the code descriptor as inherent to the procedure."],
    ],
  },
  {
    title: "Reporting Fracture and/or Dislocation Treatment Codes",
    paragraphs: [
      "The physician or other qualified health care professional providing fracture/dislocation treatment should report the appropriate fracture/dislocation treatment codes for the service he or she provided. If the person providing the initial treatment will not be providing subsequent treatment, modifier 54 should be appended to the fracture/dislocation treatment codes. If treatment of a fracture as defined above is not performed, report an evaluation and management code.",
    ],
  },
  {
    title: "Excision/Resection Soft Tissue Tumors Definitions",
    paragraphs: [
      "Excision of subcutaneous soft connective tissue tumors (including simple or intermediate repair) involves the simple or marginal resection of tumors confined to subcutaneous tissue below the skin but above the deep fascia. These tumors are usually benign and are resected without removing a significant amount of surrounding normal tissue. Code selection is based on the location and size of the tumor. Code selection is determined by measuring the greatest diameter of the tumor plus that margin required for complete excision of the tumor. The margins refer to the most narrow margin required to adequately excise the tumor, based on the physician’s judgment. The measurement of the tumor plus margin is made at the time of the excision. Appreciable vessel exploration and/or neuroplasty should be reported separately. Extensive undermining or other techniques to close a defect created by skin excision may require a complex repair which should be reported separately. Dissection or elevation of tissue planes to permit resection of the tumor is included in the excision. For excision of benign lesions of cutaneous origin (eg, sebaceous cyst), see 11400-11446.",
      "Excision of fascial or subfascial soft tissue tumors (including simple or intermediate repair) involves the resection of tumors confined to the tissue within or below the deep fascia, but not involving the bone. These tumors are usually benign, are often intramuscular, and are resected without removing a significant amount of surrounding normal tissue. Code selection is based on size and location of the tumor. Code selection is determined by measuring the greatest diameter of the tumor plus that margin required for complete excision of the tumor. The margins refer to the most narrow margin required to adequately excise the tumor, based on individual judgment. The measurement of the tumor plus margin is made at the time of the excision. Appreciable vessel exploration and/or neuroplasty should be reported separately. Extensive undermining or other techniques to close a defect created by skin excision may require a complex repair which should be reported separately. Dissection or elevation of tissue planes to permit resection of the tumor is included in the excision.",
      "Digital (ie, fingers and toes) subfascial tumors are defined as those tumors involving the tendons, tendon sheaths, or joints of the digit. Tumors which simply abut but do not breach the tendon, tendon sheath, or joint capsule are considered subcutaneous soft tissue tumors.",
      "Radical resection of soft connective tissue tumors (including simple or intermediate repair) involves the resection of the tumor with wide margins of normal tissue. Appreciable vessel exploration and/or neuroplasty repair or reconstruction (eg, adjacent tissue transfer[s], flap[s]) should be reported separately. Extensive undermining or other techniques to close a defect created by skin excision may require a complex repair which should be reported separately. Dissection or elevation of tissue planes to permit resection of the tumor is included in the excision. Although these tumors may be confined to a specific layer (eg, subcutaneous, subfascial), radical resection may involve removal of tissue from one or more layers. Radical resection of soft tissue tumors is most commonly used for malignant connective tissue tumors or very aggressive benign connective tissue tumors. Code selection is based on size and location of the tumor. Code selection is determined by measuring the greatest diameter of the tumor plus that margin required for complete excision of the tumor. The margins refer to the most narrow margin required to adequately excise the tumor, based on individual judgment. The measurement of the tumor plus margin is made at the time of the excision. For radical resection of tumor(s) of cutaneous origin (eg, melanoma), see 11600-11646.",
      "Radical resection of bone tumors (including simple or intermediate repair) involves the resection of the tumor with wide margins of normal tissue. Appreciable vessel exploration and/or neuroplasty and complex bone repair or reconstruction (eg, adjacent tissue transfer[s], flap[s]) should be reported separately. Extensive undermining or other techniques to close a defect created by skin excision may require a complex repair which should be reported separately. Dissection or elevation of tissue planes to permit resection of the tumor is included in the excision. It may require removal of the entire bone if tumor growth is extensive (eg, clavicle). Radical resection of bone tumors is usually performed for malignant tumors or very aggressive benign tumors. If surrounding soft tissue is removed during these procedures, the radical resection of soft tissue tumor codes should not be reported separately. Code selection is based solely on the location of the tumor, not on the size of the tumor or whether the tumor is benign or malignant, primary or metastatic.",
    ],
  },
];

const fullCodeIndex = [
  ["20100", "Exploration of penetrating wound (separate procedure); neck"],
  ["20101", "Exploration of penetrating wound (separate procedure); chest"],
  ["20102", "Exploration of penetrating wound (separate procedure); abdomen/flank/back"],
  ["20103", "Exploration of penetrating wound (separate procedure); extremity"],
  ["20150", "Excision of epiphyseal bar, with or without autogenous soft tissue graft obtained through same fascial incision"],
  ["20200", "Biopsy, muscle; superficial"],
  ["20205", "Biopsy, muscle; deep"],
  ["20206", "Biopsy, muscle, percutaneous needle"],
  ["20220", "Biopsy, bone, trocar, or needle; superficial (eg, ilium, sternum, spinous process, ribs)"],
  ["20225", "Biopsy, bone, trocar, or needle; deep (eg, vertebral body, femur)"],
  ["20240", "Biopsy, bone, open; superficial (eg, sternum, spinous process, rib, patella, olecranon process, calcaneus, tarsal, metatarsal, carpal, metacarpal, phalanx)"],
  ["20245", "Biopsy, bone, open; deep (eg, humeral shaft, ischium, femoral shaft)"],
  ["20250", "Biopsy, vertebral body, open; thoracic"],
  ["20251", "Biopsy, vertebral body, open; lumbar or cervical"],
  ["20500", "Injection of sinus tract; therapeutic (separate procedure)"],
  ["20501", "Injection of sinus tract; diagnostic (sinogram)"],
  ["20520", "Removal of foreign body in muscle or tendon sheath; simple"],
  ["20525", "Removal of foreign body in muscle or tendon sheath; deep or complicated"],
  ["20526", "Injection, therapeutic (eg, local anesthetic, corticosteroid), carpal tunnel"],
  ["20527", "Injection, enzyme (eg, collagenase), palmar fascial cord (ie, Dupuytren's contracture)"],
  ["20550", "Injection(s); single tendon sheath, or ligament, aponeurosis (eg, plantar fascia)"],
  ["20551", "Injection(s); single tendon origin/insertion"],
  ["20552", "Injection(s); single or multiple trigger point(s), 1 or 2 muscle(s)"],
  ["20553", "Injection(s); single or multiple trigger point(s), 3 or more muscles"],
  ["20600", "Arthrocentesis, aspiration and/or injection, small joint or bursa (eg, fingers, toes); without ultrasound guidance"],
  ["20605", "Arthrocentesis, aspiration and/or injection, intermediate joint or bursa (eg, temporomandibular, acromioclavicular, wrist, elbow or ankle, olecranon bursa); without ultrasound guidance"],
  ["20610", "Arthrocentesis, aspiration and/or injection, major joint or bursa (eg, shoulder, hip, knee, subacromial bursa); without ultrasound guidance"],
  ["20650", "Insertion of wire or pin with application of skeletal traction, including removal (separate procedure)"],
  ["20670", "Removal of implant; superficial (eg, buried wire, pin or rod) (separate procedure)"],
  ["20680", "Removal of implant; deep (eg, buried wire, pin, screw, metal band, nail, rod or plate)"],
  ["20690", "Application of a uniplane (pins or wires in 1 plane), unilateral, external fixation system"],
  ["20692", "Application of a multiplane (pins or wires in more than 1 plane), unilateral, external fixation system (eg, Ilizarov, Monticelli type)"],
  ["20900", "Bone graft, any donor area; minor or small (eg, dowel or button)"],
  ["20902", "Bone graft, any donor area; major or large"],
  ["20910", "Cartilage graft; costochondral"],
  ["20920", "Fascia lata graft; by stripper"],
  ["20922", "Fascia lata graft; by incision and area exposure, complex or sheet"],
  ["20924", "Tendon graft, from a distance (eg, palmaris, toe extensor, plantaris)"],
  ["20930", "Allograft, morselized, or placement of osteopromotive material, for spine surgery only (List separately in addition to code for primary procedure)"],
  ["20931", "Allograft, structural, for spine surgery only (List separately in addition to code for primary procedure)"],
  ["20936", "Autograft for spine surgery only (includes harvesting the graft); local (eg, ribs, spinous process, or laminar fragments) obtained from same incision (List separately in addition to code for primary procedure)"],
  ["20937", "Autograft for spine surgery only; morselized (through separate skin or fascial incision) (List separately in addition to code for primary procedure)"],
  ["20938", "Autograft for spine surgery only; structural, bicortical or tricortical (through separate skin or fascial incision) (List separately in addition to code for primary procedure)"],
  ["20950", "Monitoring of interstitial fluid pressure (includes insertion of device, eg, wick catheter technique, needle manometer technique) in detection of muscle compartment syndrome"],
  ["20979", "Low intensity ultrasound stimulation to aid bone healing, noninvasive (nonoperative)"],
  ["20999", "Unlisted procedure, musculoskeletal system, general"],
];

const groupedCodeEntries = [
  {
    title: "Wound Exploration—Trauma",
    tip: "Use these codes only for injured tissue exploration after penetrating trauma. Do not report repair or debridement in the same anatomic area when the code descriptor is limited to exploration only.",
    codes: [
      ["20100", "Exploration of penetrating wound (separate procedure); neck", "CPT Assistant Jun 96:7, Aug 96:10, Sep 06:13"],
      ["20101", "chest", "CPT Assistant Jun 96:7, Sep 06:13"],
      ["20102", "abdomen/flank/back", "CPT Assistant Jun 96:7, Sep 06:13"],
      ["20103", "extremity", "CPT Assistant Jun 96:7, Aug 96:10, Sep 06:13, Oct 23:19"],
    ],
  },
  {
    title: "Excision / Biopsy",
    tip: "Biopsy and excision are driven by the intent of the procedure and the tissue sampled. Review depth, location, and whether the event is diagnostic or therapeutic.",
    codes: [
      ["20150", "Excision of epiphyseal bar, with or without autogenous soft tissue graft obtained through same fascial incision", ""],
      ["20200", "Biopsy, muscle; superficial", ""],
      ["20205", "deep", ""],
      ["20206", "Biopsy, muscle, percutaneous needle", "Clinical Examples in Radiology Summer 08:5, Fall 10:7, Winter 17:5, Spring 22:9"],
      ["20220", "Biopsy, bone, trocar, or needle; superficial (eg, ilium, sternum, spinous process, ribs)", "CPT Assistant Winter 92:17, Jul 98:4"],
      ["20225", "deep (eg, vertebral body, femur)", "CPT Changes: An Insider’s View 2002; CPT Assistant Winter 92:17, Jul 98:4, Jun 12:10, Jan 15:8"],
      ["20240", "Biopsy, bone, open; superficial (eg, sternum, spinous process, rib, patella, olecranon process, calcaneus, tarsal, metatarsal, carpal, metacarpal, phalanx)", "CPT Changes: An Insider’s View 2004, 2017; CPT Assistant Winter 92:17, Jul 98:4, Aug 04:11, Aug 05:13, May 23:26"],
      ["20245", "deep (eg, humeral shaft, ischium, femoral shaft)", "CPT Changes: An Insider’s View 2017; CPT Assistant Winter 92:17, Jul 98:4"],
      ["20250", "Biopsy, vertebral body, open; thoracic", "CPT Assistant Winter 92:17, Jul 98:4"],
      ["20251", "lumbar or cervical", "CPT Assistant Winter 92:17, Jul 98:4"],
    ],
  },
  {
    title: "Injections / Tendon Procedures",
    tip: "For trigger point injections, count the muscles treated. For joint injections, determine whether the joint is small, intermediate, or major and whether ultrasound guidance is separately reported.",
    codes: [
      ["20500", "Injection of sinus tract; therapeutic (separate procedure)", "Clinical Examples in Radiology Summer 15:8"],
      ["20501", "diagnostic (sinogram)", ""],
      ["20520", "Removal of foreign body in muscle or tendon sheath; simple", ""],
      ["20525", "deep or complicated", ""],
      ["20526", "Injection, therapeutic (eg, local anesthetic, corticosteroid), carpal tunnel", "CPT Changes: An Insider’s View 2002; CPT Assistant Mar 02:7"],
      ["20527", "Injection, enzyme (eg, collagenase), palmar fascial cord (ie, Dupuytren’s contracture)", "CPT Changes: An Insider’s View 2012; CPT Assistant Jul 12:8, 14"],
      ["20550", "Injection(s); single tendon sheath, or ligament, aponeurosis (eg, plantar ‘fascia’)", "CPT Changes: An Insider’s View 2002, 2003, 2004; CPT Assistant Jan 96:7, Jun 98:10, Mar 02:7"],
      ["20551", "single tendon origin/insertion", "CPT Changes: An Insider’s View 2002, 2004; CPT Assistant Mar 02:7, Sep 03:13, Oct 14:9, Dec 17:16"],
      ["20552", "Injection(s); single or multiple trigger point(s), 1 or 2 muscle(s)", "CPT Changes: An Insider’s View 2002, 2003, 2004; CPT Assistant Mar 02:7, May 03:19, Sep 03:11, Feb 10:9"],
      ["20553", "single or multiple trigger point(s), 3 or more muscles", "CPT Changes: An Insider’s View 2002, 2003; CPT Assistant Mar 02:7, May 03:19, Sep 03:11, Jun 08:8"],
      ["20600", "Arthrocentesis, aspiration and/or injection, small joint or bursa (eg, fingers, toes); without ultrasound guidance", "CPT Changes: An Insider’s View 2003, 2015; CPT Assistant Dec 07:10, Feb 15:6, Nov 15:10, Aug 17:9"],
      ["20605", "Arthrocentesis, aspiration and/or injection, intermediate joint or bursa (eg, temporomandibular, acromioclavicular, wrist, elbow or ankle, olecranon bursa); without ultrasound guidance", "CPT Changes: An Insider’s View 2003, 2015"],
      ["20610", "Arthrocentesis, aspiration and/or injection, major joint or bursa (eg, shoulder, hip, knee, subacromial bursa); without ultrasound guidance", "CPT Changes: An Insider’s View 2015"],
    ],
  },
  {
    title: "Traction / External Fixation",
    tip: "External fixation may be temporary or definitive. Use the code that matches the fixation plane and whether the system is unilateral or multiplane.",
    codes: [
      ["20650", "Insertion of wire or pin with application of skeletal traction, including removal (separate procedure)", ""],
      ["20670", "Removal of implant; superficial (eg, buried wire, pin or rod) (separate procedure)", "CPT Assistant Dec 07:7-8, Jun 09:7, Apr 12:17"],
      ["20680", "deep (eg, buried wire, pin, screw, metal band, nail, rod or plate)", "CPT Assistant Spring 92:11, Jun 09:7, Sep 12:16, Mar 14:4, Nov 15:10"],
      ["20690", "Application of a uniplane (pins or wires in 1 plane), unilateral, external fixation system", "CPT Changes: An Insider’s View 2008"],
      ["20692", "Application of a multiplane (pins or wires in more than 1 plane), unilateral, external fixation system (eg, Ilizarov, Monticelli type)", "CPT Changes: An Insider’s View 2008"],
    ],
  },
  {
    title: "Bone Grafting / Tissue Transfer",
    tip: "Report graft codes only when the graft is not already included in the basic procedure; separate incisions and harvesting often create additional reporting opportunities.",
    codes: [
      ["20900", "Bone graft, any donor area; minor or small (eg, dowel or button)", "CPT Changes: An Insider’s View 2008; CPT Assistant Dec 00:15, Jul 11:18, Jul 18:14, May 20:14, Jul 21:7"],
      ["20902", "major or large", "CPT Changes: An Insider’s View 2008; CPT Assistant Dec 00:15, Jul 11:18, Jul 18:14"],
      ["20910", "Cartilage graft; costochondral", "CPT Changes: An Insider’s View 2008; CPT Assistant Jan 13:15, Jul 18:14"],
      ["20920", "Fascia lata graft; by stripper", "CPT Changes: An Insider’s View 2008; CPT Assistant Aug 99:5, Jan 05:8, Jul 18:14"],
      ["20922", "by incision and area exposure, complex or sheet", "CPT Changes: An Insider’s View 2008; CPT Assistant Jan 05:8, Jul 18:14"],
      ["20924", "Tendon graft, from a distance (eg, palmaris, toe extensor, plantaris)", "CPT Changes: An Insider’s View 2008; CPT Assistant Jul 18:14"],
      ["20930", "Allograft, morselized, or placement of osteopromotive material, for spine surgery only (List separately in addition to code for primary procedure)", "CPT Changes: An Insider’s View 2008, 2011"],
      ["20931", "Allograft, structural, for spine surgery only (List separately in addition to code for primary procedure)", "CPT Changes: An Insider’s View 2008, 2011"],
      ["20936", "Autograft for spine surgery only (includes harvesting the graft); local (eg, ribs, spinous process, or laminar fragments) obtained from same incision (List separately in addition to code for primary procedure)", "CPT Changes: An Insider’s View 2008"],
      ["20937", "morselized (through separate skin or fascial incision) (List separately in addition to code for primary procedure)", "CPT Changes: An Insider’s View 2008"],
      ["20938", "structural, bicortical or tricortical (through separate skin or fascial incision) (List separately in addition to code for primary procedure)", "CPT Changes: An Insider’s View 2008"],
      ["20950", "Monitoring of interstitial fluid pressure (includes insertion of device, eg, wick catheter technique, needle manometer technique) in detection of muscle compartment syndrome", "CPT Assistant Sep 07:10, Mar 23:32"],
      ["20979", "Low intensity ultrasound stimulation to aid bone healing, noninvasive (nonoperative)", "CPT Changes: An Insider’s View 2000"],
      ["20999", "Unlisted procedure, musculoskeletal system, general", "CPT Assistant Sep 03:13, Jul 15:8, May 18:3, Feb 23:13"],
    ],
  },
];

function BookSection({ title, paragraphs, definitions }: { title: string; paragraphs?: string[]; definitions?: string[][] }) {
  return (
    <section className="book-section">
      <h2>{title}</h2>
      {paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      {definitions?.map(([term, definition]) => (
        <p className="definition" key={term}><strong>{term}:</strong> {definition}</p>
      ))}
    </section>
  );
}

export default function CptBookPageOne() {
  return (
    <main className="cpt-book-page">
      <header className="book-header">
        <div className="book-kicker">CPT 20,000 SERIES</div>
        <h1>Musculoskeletal System</h1>
        <p>Page 1 · CPT book codes and guidelines</p>
      </header>

      <nav className="book-nav" aria-label="CPT book pages">
        <Link href="/cpt/surgery/20,000-series-cpt-book/page-1" aria-current="page">Page 1</Link>
        <Link href="/cpt/surgery/20,000-series-cpt-book/page-2">Page 2</Link>
        <Link href="/cpt/surgery/20,000-series-cpt-book/page-3">Page 3</Link>
        <Link href="/cpt/surgery/20,000-series-study-tips">Study tips</Link>
      </nav>

      {sections.map((section) => <BookSection key={section.title} {...section} />)}

      <section className="book-section">
        <h2>General</h2>
        <p className="book-note"><strong>Complete early-range musculoskeletal code families for page 1:</strong> 20100-20103, 20150, 20200-20206, 20220-20225, 20240-20245, 20250-20251, 20500-20501, 20520-20527, 20550-20553, 20600-20610, 20650, 20670-20680, 20690-20692, 20900-20902, 20910, 20920-20924, 20930-20931, 20936-20938, 20950, 20979, 20999.</p>
        <h3>Incision</h3>
        <p className="book-note">(For incision and drainage of subfascial soft tissue abscess, see appropriate incision and drainage for specific anatomic sites)</p>

        <div style={{ marginTop: "18px", marginBottom: "18px" }}>
          <h3>Full Early-Range Code Index</h3>
          <div className="code-list">
            {fullCodeIndex.map(([code, description]) => (
              <article className="code-entry" key={code + description}>
                <div className="code-number">{code}</div>
                <div>
                  <div className="code-description">{description}</div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {groupedCodeEntries.map((group) => (
          <div key={group.title} style={{ marginTop: "22px" }}>
            <h3>{group.title}</h3>
            {group.tip && <p className="book-note" style={{ marginBottom: "14px" }}><strong>Coding tip:</strong> {group.tip}</p>}
            <div className="code-list">
              {group.codes.map(([code, description, reference]) => (
                <article className="code-entry" key={code + description}>
                  <div className="code-number">{code}</div>
                  <div>
                    <div className="code-description">{description}</div>
                    {reference && <div className="code-reference">➲ {reference}</div>}
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
