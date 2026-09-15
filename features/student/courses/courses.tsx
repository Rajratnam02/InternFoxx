import StudentNavbar from "@/components/navbar/StudentNavbar";
import CourseCard from "@/components/student/course-card/CourseCard";
import "./courses.css";

const CATEGORIES = [
  "All",
  "Resume & CV",
  "Interview Prep",
  "Technical Skills",
  "Soft Skills",
  "Networking",
];

const COURSES = [
  {
    eyebrow: "RESUME & CV",
    title: "Craft a Resume That Gets You Hired",
    description:
      "Learn how to write a compelling resume from scratch — tailored for your target role.",
    instructor: "Priya Sharma",
    lessons: 8,
    duration: "2h 30m",
    difficulty: "Beginner" as const,
    variant: "purple" as const,
    href: "#",
  },
  {
    eyebrow: "INTERVIEW PREP",
    title: "Master Behavioral Interviews",
    description:
      "Use the STAR method to craft powerful stories that leave a lasting impression.",
    instructor: "Arjun Mehta",
    lessons: 10,
    duration: "3h 15m",
    difficulty: "Intermediate" as const,
    variant: "teal" as const,
    href: "#",
  },
  {
    eyebrow: "TECHNICAL SKILLS",
    title: "Data Structures & Algorithms for Interviews",
    description:
      "A focused course on the most frequently tested DSA concepts in tech interviews.",
    instructor: "Rahul Nair",
    lessons: 18,
    duration: "6h 00m",
    difficulty: "Intermediate" as const,
    variant: "blue" as const,
    href: "#",
  },
  {
    eyebrow: "NETWORKING",
    title: "The Art of Cold Outreach",
    description:
      "Build meaningful connections with professionals and turn cold messages into warm conversations.",
    instructor: "Sara Ali",
    lessons: 6,
    duration: "1h 45m",
    difficulty: "Beginner" as const,
    variant: "orange" as const,
    href: "#",
  },
  {
    eyebrow: "SOFT SKILLS",
    title: "Communication Skills for the Workplace",
    description:
      "From emails to presentations — how to communicate with clarity and confidence.",
    instructor: "Meera Patel",
    lessons: 7,
    duration: "2h 10m",
    difficulty: "Beginner" as const,
    variant: "teal" as const,
    href: "#",
  },
  {
    eyebrow: "INTERVIEW PREP",
    title: "System Design for Beginners",
    description:
      "Understand how large-scale systems are built and how to answer system design questions.",
    instructor: "Dev Kapoor",
    lessons: 12,
    duration: "4h 30m",
    difficulty: "Advanced" as const,
    variant: "purple" as const,
    href: "#",
  },
];

const Courses = () => {
  return (
    <div className="courses-page">
      <StudentNavbar />

      <main className="courses-main">
        {/* ========================
            HERO
        ======================== */}
        <section className="courses-hero">
          <div className="courses-hero-content">
            <p className="courses-eyebrow">LEARN</p>

            <h1 className="courses-title">
              Build the skills that
              <span> get you hired.</span>
            </h1>

            <p className="courses-subtitle">
              Structured courses designed around real-world careers. Learn at
              your own pace, from experts who've done it before.
            </p>

            <div className="courses-hero-cta">
              <a href="#courses" className="primary-btn">
                Start Learning →
              </a>

              <div className="courses-hero-pills">
                <span className="courses-hero-pill">50+ courses</span>
                <span className="courses-hero-pill">Expert instructors</span>
                <span className="courses-hero-pill">Self-paced</span>
              </div>
            </div>
          </div>
        </section>

        {/* ========================
            FEATURED COURSE
        ======================== */}
        <section className="courses-featured">
          <div className="courses-featured-inner">
            <div className="courses-featured-card">
              <div className="courses-featured-content">
                <p className="courses-eyebrow">FEATURED COURSE</p>

                <h2>The 30-Day Internship Accelerator</h2>

                <p>
                  The complete system to land your first internship. Cover
                  resume writing, LinkedIn optimisation, cold outreach,
                  interview preparation, and offer negotiation — all in one
                  structured program.
                </p>

                <div className="courses-featured-meta">
                  <span>24 lessons</span>
                  <span className="courses-featured-dot">·</span>
                  <span>8h total</span>
                  <span className="courses-featured-dot">·</span>
                  <span className="courses-featured-badge">All levels</span>
                </div>

                <a href="#" className="primary-btn courses-featured-btn">
                  Start for Free →
                </a>
              </div>

              <div className="courses-featured-visual">
                <div className="courses-featured-mockup">
                  <div className="courses-mockup-header">
                    <div className="courses-mockup-dots">
                      <span />
                      <span />
                      <span />
                    </div>
                    <span className="courses-mockup-title">
                      Module 1 · Week 1
                    </span>
                  </div>
                  <div className="courses-mockup-body">
                    <div className="courses-mockup-line courses-mockup-line--lg" />
                    <div className="courses-mockup-line" />
                    <div className="courses-mockup-line courses-mockup-line--sm" />
                    <div className="courses-mockup-progress">
                      <div className="courses-mockup-progress-fill" />
                    </div>
                    <div className="courses-mockup-lessons">
                      {[...Array(4)].map((_, i) => (
                        <div
                          key={i}
                          className={`courses-mockup-lesson${i < 2 ? " courses-mockup-lesson--done" : ""}`}
                        >
                          <span className="courses-mockup-check">
                            {i < 2 ? "✓" : String(i + 1)}
                          </span>
                          <div>
                            <div className="courses-mockup-lesson-line" />
                            <div className="courses-mockup-lesson-line courses-mockup-lesson-line--sm" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================
            COURSE GRID
        ======================== */}
        <section className="courses-grid-section" id="courses">
          <div className="courses-grid-inner">
            <div className="courses-section-header">
              <p className="courses-eyebrow">EXPLORE</p>
              <h2>All courses.</h2>
              <p className="courses-section-sub">
                Filter by topic and find what you need for your next step.
              </p>
            </div>

            {/* Filter bar */}
            <div className="courses-filters">
              {CATEGORIES.map((cat, i) => (
                <button
                  key={cat}
                  className={`courses-filter-btn${i === 0 ? " courses-filter-btn--active" : ""}`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Course Grid */}
            <div className="courses-grid">
              {COURSES.map((course) => (
                <CourseCard key={course.title} {...course} />
              ))}
            </div>
          </div>
        </section>

        {/* ========================
            BOTTOM CTA
        ======================== */}
        <section className="courses-cta-section">
          <div className="courses-cta-card">
            <div>
              <p className="courses-eyebrow courses-eyebrow--light">
                CAN'T FIND WHAT YOU NEED?
              </p>
              <h2>Request a course.</h2>
              <p>
                Tell us what topic you'd like to learn and we'll work on adding
                it to the library.
              </p>
            </div>

            <a href="#" className="courses-cta-btn">
              Submit a Request →
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Courses;
