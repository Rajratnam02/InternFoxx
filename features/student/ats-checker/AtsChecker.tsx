import StudentNavbar from "@/components/navbar/StudentNavbar";
import "./AtsChecker.css";

const ATSChecker = () => {
  return (
    <div className="ats-checker">
      <StudentNavbar />

      <main className="ats-checker-main">
        {/* ========================================
            HERO
        ======================================== */}

        <section className="ats-checker-hero">
          <div className="ats-checker-hero-content">
            {/* LEFT SIDE */}
            <div className="ats-checker-hero-text">
              <p className="ats-checker-eyebrow">
                AI-POWERED ATS CHECKER
              </p>

              <h1 className="ats-checker-title">
                Make your resume
                <span> ATS-ready.</span>
              </h1>

              <p className="ats-checker-subtitle">
                See how well your resume matches a job description,
                identify missing keywords, and improve your chances
                of getting past applicant tracking systems.
              </p>

              <div className="ats-checker-upload">
                <input
                  type="file"
                  id="resume-upload"
                  accept=".pdf,.doc,.docx"
                  hidden
                />

                <label
                  htmlFor="resume-upload"
                  className="primary-btn"
                >
                  Upload Resume →
                </label>

                <p>
                  PDF, DOC, or DOCX
                </p>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="ats-checker-hero-visual">
              <div className="ats-checker-image-wrapper">
                <img
                  src="/ats-checker-hero.png"
                  alt="ATS resume analysis dashboard preview"
                  className="ats-checker-hero-image"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ========================================
            HOW IT WORKS
        ======================================== */}

        <section className="ats-checker-info">
          <div className="ats-checker-info-header">
            <p className="ats-checker-eyebrow">
              HOW IT WORKS
            </p>

            <h2>
              Optimize your resume before you apply.
            </h2>

            <p>
              Upload your resume, provide the job description,
              and get a detailed breakdown of how your resume
              performs against ATS requirements.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ATSChecker;