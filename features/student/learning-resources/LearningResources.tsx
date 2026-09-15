import StudentNavbar from "@/components/navbar/StudentNavbar";
import ResourceCard from "@/components/student/resource-card/ResourceCard";
import "./LearningResources.css";

const CATEGORIES = [
  { icon: "📄", label: "Resume" },
  { icon: "🎯", label: "Interview" },
  { icon: "🗺️", label: "Roadmaps" },
  { icon: "📧", label: "Outreach" },
  { icon: "🔗", label: "Networking" },
  { icon: "🛠️", label: "Tools" },
];

const RESOURCES = [
  {
    type: "Guide" as const,
    title: "The Ultimate Interview Preparation Guide",
    description:
      "A comprehensive walkthrough of every stage of the interview process — from phone screens to final rounds.",
    category: "Interview",
    readTime: "15 min read",
  },
  {
    type: "Template" as const,
    title: "ATS-Optimized Resume Template",
    description:
      "A clean, recruiter-approved resume template with the right structure to beat applicant tracking systems.",
    category: "Resume",
    readTime: "Instant use",
  },
  {
    type: "Roadmap" as const,
    title: "Software Engineering Internship Roadmap",
    description:
      "A step-by-step path from zero to landing your first SWE internship — with timelines and milestones.",
    category: "Roadmaps",
    readTime: "10 min read",
  },
  {
    type: "Guide" as const,
    title: "Cold Email Masterclass",
    description:
      "How to write cold emails that actually get replies. Includes real examples and subject line formulas.",
    category: "Outreach",
    readTime: "8 min read",
  },
  {
    type: "Tool" as const,
    title: "LinkedIn Profile Optimizer Checklist",
    description:
      "A 30-point checklist to make your LinkedIn profile stand out to recruiters and hiring managers.",
    category: "Networking",
    readTime: "Checklist",
  },
  {
    type: "Video" as const,
    title: "How to Negotiate Your First Offer",
    description:
      "Step-by-step video guide on how to confidently negotiate salary and benefits as a first-time intern.",
    category: "Interview",
    readTime: "22 min watch",
  },
  {
    type: "Template" as const,
    title: "Cold Outreach Message Templates",
    description:
      "10 plug-and-play message templates for reaching out to recruiters, founders, and potential mentors.",
    category: "Outreach",
    readTime: "Instant use",
  },
  {
    type: "Roadmap" as const,
    title: "Product Management Internship Roadmap",
    description:
      "Everything you need to break into PM internships — skills, projects, interview prep, and networking.",
    category: "Roadmaps",
    readTime: "12 min read",
  },
  {
    type: "Tool" as const,
    title: "Free Resume Builder Tools Compared",
    description:
      "An honest comparison of the top free resume builders — which ones are ATS-friendly and which to avoid.",
    category: "Tools",
    readTime: "6 min read",
  },
];

const LearningResources = () => {
  return (
    <div className="resources-page">
      <StudentNavbar />

      <main className="resources-main">
        {/* ========================
            HERO
        ======================== */}
        <section className="resources-hero">
          <div className="resources-hero-content">
            <p className="resources-eyebrow">RESOURCES</p>

            <h1 className="resources-title">
              Everything you need,
              <span> in one place.</span>
            </h1>

            <p className="resources-subtitle">
              Curated guides, templates, roadmaps, and tools to help you
              navigate every stage of your career journey.
            </p>
          </div>
        </section>

        {/* ========================
            CATEGORY STRIP
        ======================== */}
        <section className="resources-categories">
          <div className="resources-categories-inner">
            {CATEGORIES.map((cat) => (
              <button key={cat.label} className="resources-category-pill">
                <span className="resources-category-icon">{cat.icon}</span>
                {cat.label}
              </button>
            ))}
          </div>
        </section>

        {/* ========================
            FEATURED RESOURCE
        ======================== */}
        <section className="resources-featured-section">
          <div className="resources-featured-inner">
            <div className="resources-featured-card">
              <div className="resources-featured-content">
                <p className="resources-eyebrow">MUST-READ</p>

                <h2>Ultimate Interview Preparation Guide</h2>

                <p>
                  From behavioural questions to technical rounds — everything
                  you need to walk into any interview with confidence and walk
                  out with an offer.
                </p>

                <div className="resources-featured-meta">
                  <span className="resources-featured-badge resources-featured-badge--guide">
                    Guide
                  </span>
                  <span>·</span>
                  <span>15 min read</span>
                  <span>·</span>
                  <span>Interview</span>
                </div>

                <a href="#" className="primary-btn">
                  Read Guide →
                </a>
              </div>

              <div className="resources-featured-visual">
                <div className="resources-doc">
                  <div className="resources-doc-header">
                    <div className="resources-doc-icon">📄</div>
                    <div>
                      <div className="resources-doc-title-line" />
                      <div className="resources-doc-sub-line" />
                    </div>
                  </div>
                  <div className="resources-doc-lines">
                    {[100, 85, 90, 60, 80, 70, 50].map((w, i) => (
                      <div
                        key={i}
                        className="resources-doc-line"
                        style={{ width: `${w}%` }}
                      />
                    ))}
                  </div>
                  <div className="resources-doc-tags">
                    {["Behavioral", "Technical", "Culture Fit"].map((tag) => (
                      <span key={tag} className="resources-doc-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================
            RESOURCE GRID
        ======================== */}
        <section className="resources-grid-section">
          <div className="resources-grid-inner">
            <div className="resources-section-header">
              <p className="resources-eyebrow">BROWSE ALL</p>
              <h2>All resources.</h2>
              <p className="resources-section-sub">
                Tap a category above to filter, or scroll through everything
                below.
              </p>
            </div>

            <div className="resources-grid">
              {RESOURCES.map((resource) => (
                <ResourceCard key={resource.title} {...resource} />
              ))}
            </div>
          </div>
        </section>

        {/* ========================
            SUBMIT BANNER
        ======================== */}
        <section className="resources-submit-section">
          <div className="resources-submit-card">
            <div>
              <p className="resources-eyebrow">CONTRIBUTE</p>
              <h2>Have a resource to share?</h2>
              <p>
                Submit a guide, tool, or template and help other students on
                their journey.
              </p>
            </div>
            <a href="#" className="secondary-btn">
              Submit a Resource →
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LearningResources;
