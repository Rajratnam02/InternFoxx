import "./StudentLanding.css";
const StudentLanding = () => {
  return (
    <div className="student-landing">
      <div className="landing-badge">30 days Internship System</div>
      <div className="landing-title">
        Land Internship in <span>30 days</span>
      </div>
      <div className="landing-description">
        A step-by-step system that helps you find the right oppertunities, craft
        winning applications, and land offers &ndash; faster, smarter and with
        confidence.
      </div>
      <div className="landing-cta">
        <div className="primary-btn">Art of cold reachout &rarr;</div>
        {/* Add secondary button here (.secondary-btn) */}
        <div className="secondary-btn">Explore the system &rarr;</div>
      </div>
    </div>
  );
};

export default StudentLanding;
