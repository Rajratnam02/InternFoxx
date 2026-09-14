import StudentNavbar from "@/components/navbar/StudentNavbar";
import "./dashboard.css";
import FeatureCard from "@/components/student/feature-card/featurecard";

const StudentDashboard = () => {
  const dashTools = [
    {
      name: "ATS Checker",
      description:
        "Check your resume against job descriptions and improve its ATS compatibility.",
      url: "/student/ats-checker",
      actionLabel: "Check Resume",
      icon: "🤖",
    },
    {
      name: "1-on-1 Sessions",
      description:
        "Get personalized career guidance, resume feedback, and interview support from mentors.",
      url: "/student/sessions",
      actionLabel: "Book a Session",
      icon: "👤",
    },
    {
      name: "Mail Merge",
      description:
        "Create personalized outreach campaigns and connect with recruiters and opportunities at scale.",
      url: "/student/mail-merge",
      actionLabel: "Start Outreach",
      icon: "✉️",
    },
  ];

  const learningResources = [
    {
      name: "Courses",
      description:
        "Build practical skills through courses designed to make you career-ready.",
      url: "/student/courses",
      actionLabel: "Explore Courses",
      icon: "🎓",
    },
    {
      name: "Resources",
      description:
        "Access guides, templates, examples, and practical resources for your career.",
      url: "/student/resources",
      actionLabel: "Browse Resources",
      icon: "📚",
    },
  ];

  return (
    <div className="student-dashboard">
      <StudentNavbar />

      <main className="dashboard-main">
        {/* ========================================
            HERO
        ======================================== */}

        <section className="dashboard-hero">
          <div className="dashboard-hero-content">
            <p className="dashboard-eyebrow">
              WELCOME TO INTERNFOXX
            </p>

            <h1 className="dashboard-title">
              Everything you need to{" "}
              <span>level up your career.</span>
            </h1>

            <p className="dashboard-subtitle">
              Build your skills, improve your resume, connect with
              mentors, and discover opportunities to take your career
              forward.
            </p>
          </div>
        </section>

        {/* ========================================
            CAREER TOOLS
        ======================================== */}

        <section className="dashboard-tools">
          <div className="section-heading">
            <p className="section-eyebrow">EXPLORE</p>

            <h2>Career tools</h2>

            <p>
              Tools designed to help you prepare, connect, and grow.
            </p>
          </div>

          <div className="tools-grid">
            {dashTools.map((tool) => (
              <FeatureCard
                key={tool.name}
                title={tool.name}
                description={tool.description}
                href={tool.url}
                actionLabel={tool.actionLabel}
                icon={tool.icon}
              />
            ))}
          </div>
        </section>

        {/* ========================================
            LEARNING RESOURCES
        ======================================== */}

        <section className="dashboard-tools">
          <div className="section-heading">
            <p className="section-eyebrow">LEARN</p>

            <h2>Courses & resources</h2>

            <p>
              Practical knowledge and resources to help you move
              forward.
            </p>
          </div>

          <div className="tools-grid learning-grid">
            {learningResources.map((resource) => (
              <FeatureCard
                key={resource.name}
                title={resource.name}
                description={resource.description}
                href={resource.url}
                actionLabel={resource.actionLabel}
                icon={resource.icon}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default StudentDashboard;