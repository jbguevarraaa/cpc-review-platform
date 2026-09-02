import Link from "next/link";
export default function SurgeryPage() {
  return (
    <main style={{ padding: "40px" }}>
     <div
  style={{
    background: "linear-gradient(135deg, #2563eb, #7c3aed)",
    color: "white",
    padding: "50px",
    borderRadius: "20px",
    marginBottom: "40px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
  }}
>
  <h1
    style={{
      fontSize: "60px",
      fontWeight: "800",
      marginBottom: "20px",
    }}
  >
    SURGERY SERIES
  </h1>

  <p
    style={{
      fontSize: "22px",
      opacity: 0.95,
    }}
  >
    Master CPT Surgery Coding (10021–69990)
  </p>
</div>

      <div
        style={{
          display: "flex",
          gap: "15px",
          flexWrap: "wrap",
          marginTop: "20px",
        }}
      >
        <Link
  href="/cpt/surgery/10000-series-post-work-quiz"
  style={{
    textDecoration: "none",
    color: "inherit",
  }}
>
  <div
    style={{
      border: "1px solid #ddd",
      borderRadius: "12px",
      padding: "20px",
      width: "220px",
      backgroundColor: "white",
      cursor: "pointer",
      transition: "0.2s",
    }}
  >
    <h3>10,000 Series</h3>
    <p>Integumentary System</p>
  </div>
</Link> 

        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: "12px",
            padding: "20px",
            width: "220px",
            backgroundColor: "white",
          }}
        >
          <h3>20,000 Series</h3>
          <p>Musculoskeletal System</p>
        </div>

        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: "12px",
            padding: "20px",
            width: "220px",
            backgroundColor: "white",
          }}
        >
          <h3>30,000 Series</h3>
          <p>Respiratory System</p>
        </div>

        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: "12px",
            padding: "20px",
            width: "220px",
            backgroundColor: "white",
          }}
        >
          <h3>40,000 Series</h3>
          <p>Digestive System</p>
        </div>

        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: "12px",
            padding: "20px",
            width: "220px",
            backgroundColor: "white",
          }}
        >
          <h3>50,000 Series</h3>
          <p>Urinary & Genital Systems</p>
        </div>

        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: "12px",
            padding: "20px",
            width: "220px",
            backgroundColor: "white",
          }}
        >
          <h3>60,000 Series</h3>
          <p>Nervous System</p>
        </div>
      </div>
    </main>
  );
}const questions = [
{
  question:
    "Edith had a dermal lesion on her left foot. Dr. Roger completed a punch biopsy and then removed the lesion by shaving during the same session. The lesion diameter was documented as 3.6 cm. Which code(s) should Dr. Roger use to report these services?",
  options: [
    "11308",
    "11424, 11104-59",
    "11303",
    "11308, 11104-59"
  ],
  correct: "A",
  explanation:
    "When a lesion is biopsied and then completely removed during the same operative session, the biopsy is not separately reported because it is considered part of the definitive procedure. A shave removal of a lesion on the foot measuring 3.1–4.0 cm is reported with 11308."
},
{
  question:
    "Which code describes a cutaneous flap, transposed into a nearby but not immediately adjacent defect, with a pedicle that incorporates an axial vessel into its design?",
  options: [
    "15740",
    "15756",
    "15757",
    "15758"
  ],
  correct: "A",
  explanation:
    "15740 describes an island pedicle flap requiring identification and preservation of a named axial vessel. The flap is transferred to a nearby but not immediately adjacent defect."
},
{
  question:
    "Dr. Tapper completed a percutaneous image-guided biopsy and placement of a localized clip in the right breast under ultrasonic guidance following a diagnostic mammogram. How do you report the doctor's services?",
  options: [
    "19081, 19084-51, 77002-26",
    "19083",
    "19085, 76942-26",
    "19100-51, 77012-26"
  ],
  correct: "B",
  explanation:
    "19083 includes the percutaneous breast biopsy, ultrasound guidance, and placement of localization device."
},
{
  question:
    "Dr. Armstrong, a plastic surgeon, completed a bilateral rhytidectomy of the neck and a suction-assisted lipectomy of the right upper arm. Which code(s) should be reported for Dr. Armstrong's services?",
  options: [
    "15826-59, 15879-RT-59",
    "15828-RT, 15828-50, 15878-RT-59",
    "15828-50, 15879-RT-59",
    "15828-50, 15878-RT-59"
  ],
  correct: "D",
  explanation:
    "15828-50 reports bilateral neck rhytidectomy. 15878-RT reports suction-assisted lipectomy of the upper extremity. Modifier 59 identifies a separate procedure."
},
{
  question:
    "A patient has an ulcer on his left ischial tuberosity. After examination, a decision was made to complete debridement. The documented area debrided was 32 sq cm, including muscle and subcutaneous tissue. How should you report this service?",
  options: [
    "11044, 11047-51",
    "11043, 11046",
    "11043, 11046, 97597-59, 97598-51",
    "97597, 97598-51"
  ],
  correct: "B",
  explanation:
    "11043 reports the first 20 sq cm of debridement including muscle/fascia. 11046 reports each additional 20 sq cm or part thereof."
},
{
  question:
    "A surgeon excised a benign 5 cm lesion from the patient's back. Adjacent tissue transfer was performed to repair the 11 sq cm defect resulting from the lesion excision. What are the correct code(s) for these services?",
  options: [
    "14000",
    "11406, 14001-51",
    "14001",
    "11406, 14000-51"
  ],
  correct: "C",
  explanation:
    "Adjacent tissue transfer codes include lesion excision and repair. Defect size of 11 sq cm is reported with 14001."
},
{
  question:
    "A 55-year-old patient had seven toenails debrided. How should you report this service?",
  options: [
    "11720, 11721-51",
    "11000, 11721-59",
    "11000, 11001-51",
    "11721"
  ],
  correct: "D",
  explanation:
    "11721 reports debridement of six or more nails."
},
{
  question:
    "A patient presents for excision of an infected 3 cm sebaceous cyst on her right anterior lower leg. The cyst involved the non-muscle fascia. After excision, the doctor closed the non-muscle fascia as well as the skin and subcutaneous tissues. What CPT code(s) should be reported?",
  options: [
    "11403, 12032-51",
    "11403, 12032-59",
    "11423, 12002-51",
    "11404, 12042-51"
  ],
  correct: "A",
  explanation:
    "11403 reports excision of benign lesion 2.1–3.0 cm. Layered closure qualifies for intermediate repair 12032."
},
{
  question:
    "Dr. Long completed an excision of a malignant lesion from the scalp of a 45-year-old patient. The total excised diameter of lesion and margins was 5.4 cm and closed with layered 3-0 Prolene. How should these services be reported?",
  options: [
    "11626, 12032-51",
    "11422, 12032-51, 96372, J2001",
    "11624, 12032-51, 96372, J2001",
    "11624, 12032-51"
  ],
  correct: "A",
  explanation:
    "11626 reports malignant lesion excision over 4.0 cm. 12032 reports intermediate layered repair."
},
{
  question:
    "A patient presents for destruction of premalignant lesions. The patient had five lesions. What are the correct code(s) for these services?",
  options: [
    "17000, 17003 × 4",
    "11200",
    "17000, 17003",
    "17000 × 5"
  ],
  correct: "A",
  explanation:
    "17000 reports the first premalignant lesion and 17003 is reported for each additional lesion."
}
];