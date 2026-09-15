/**
 * dashboard.tsx — InternFoxx Student Dashboard
 * Bento grid layout: ATS Checker (large), Sessions (tall), + 3 small cards
 */

import StudentNavbar from '@/components/navbar/StudentNavbar';
import './dashboard.css';

const Dashboard = () => {
  /** Avatar stack data: initials + brand colours */
  const mentors = [
    { initials: 'PS', color: '#7c3aed' },
    { initials: 'AM', color: '#4f46e5' },
    { initials: 'SK', color: '#0ea5e9' },
    { initials: 'RN', color: '#10b981' },
    { initials: 'MP', color: '#f59e0b' },
  ];

  return (
    <div className="dashboard">
      <StudentNavbar />

      <main className="dashboard-main">

        {/* ── HEADER ─────────────────────────────────────────── */}
        <section className="dashboard-header">
          <div className="dashboard-header-inner">
            <p className="dashboard-eyebrow">STUDENT DASHBOARD</p>
            <h1 className="dashboard-title">
              Good to see you.{' '}
              <span className="gradient-text">Let&apos;s build.</span>
            </h1>
            <p className="dashboard-subtitle">
              Everything you need to land your next opportunity — in one place.
            </p>
          </div>
        </section>

        {/* ── BENTO GRID ─────────────────────────────────────── */}
        <section className="dashboard-bento-section">
          <div className="dashboard-bento">

            {/* LARGE (2 cols): ATS Checker ─────────────────── */}
            <a
              href="/student/ats-checker"
              className="bento-card bento-card--large bento-card--ats"
            >
              <div className="bento-card-content">
                <p className="bento-eyebrow">FEATURED AI TOOL</p>
                <h2 className="bento-title">
                  Make your resume{' '}
                  <span className="gradient-text">ATS-ready.</span>
                </h2>
                <p className="bento-desc">
                  Analyze, find weaknesses, and optimize your resume for
                  Applicant Tracking Systems in seconds.
                </p>
                <span className="bento-link">
                  Check Resume <span className="bento-arrow">→</span>
                </span>
              </div>

              {/* Hero image — swap src for actual asset */}
              <div className="bento-card-visual">
                <img src="/images/ats-checker-hero.png" alt="ATS Resume Checker" />
              </div>
            </a>

            {/* TALL (1 col): Sessions ───────────────────────── */}
            <a
              href="/student/sessions"
              className="bento-card bento-card--tall bento-card--sessions"
            >
              <div className="bento-card-content">
                <p className="bento-eyebrow">1-ON-1 SESSIONS</p>
                <h2 className="bento-title">Book a mentor.</h2>
                <p className="bento-desc">
                  Get personalized guidance from people who&apos;ve done exactly
                  what you&apos;re trying to do.
                </p>
                <span className="bento-link">
                  Find a Mentor <span className="bento-arrow">→</span>
                </span>
              </div>

              {/* Stacked mentor avatars */}
              <div className="bento-avatars">
                {mentors.map((mentor, i) => (
                  <div
                    key={mentor.initials}
                    className="bento-avatar"
                    style={{
                      background: mentor.color,
                      zIndex: mentors.length - i,
                      marginLeft: i === 0 ? 0 : -14,
                    }}
                    aria-label={`Mentor ${mentor.initials}`}
                  >
                    {mentor.initials}
                  </div>
                ))}
                <span className="bento-avatar-label">+47 mentors</span>
              </div>
            </a>

            {/* SMALL: Courses ───────────────────────────────── */}
            <a
              href="/student/courses"
              className="bento-card bento-card--small bento-card--courses"
            >
              <p className="bento-eyebrow">COURSES</p>
              <h3 className="bento-title-sm">Build skills that get you hired.</h3>
              <span className="bento-link">
                Explore <span className="bento-arrow">→</span>
              </span>
            </a>

            {/* SMALL: Resources ─────────────────────────────── */}
            <a
              href="/student/resources"
              className="bento-card bento-card--small bento-card--resources"
            >
              <p className="bento-eyebrow">RESOURCES</p>
              <h3 className="bento-title-sm">Guides, templates &amp; roadmaps.</h3>
              <span className="bento-link">
                Browse <span className="bento-arrow">→</span>
              </span>
            </a>

            {/* SMALL: Mail Merge ────────────────────────────── */}
            <a
              href="/student/mail-merge"
              className="bento-card bento-card--small bento-card--mail"
            >
              <p className="bento-eyebrow">COLD OUTREACH</p>
              <h3 className="bento-title-sm">Reach out smarter, not harder.</h3>
              <span className="bento-link">
                Try Mail Merge <span className="bento-arrow">→</span>
              </span>
            </a>

          </div>
        </section>

        {/* ── CTA BANNER ─────────────────────────────────────── */}
        <section className="dashboard-cta-section">
          <div className="dashboard-cta">
            <div className="dashboard-cta-copy">
              <p className="bento-eyebrow dashboard-cta-eyebrow">KEEP GOING</p>
              <h2>Your next opportunity starts here.</h2>
              <p>Keep building, keep preparing, keep moving forward.</p>
            </div>
            <a href="/student/courses" className="dashboard-cta-btn">
              Continue Learning →
            </a>
          </div>
        </section>

      </main>
    </div>
  );
};

export default Dashboard;