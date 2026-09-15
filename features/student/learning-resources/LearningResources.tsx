/**
 * LearningResources.tsx
 * InternFoxx — Student Learning Resources page.
 * Sections: Hero → Category strip → Stats bar → Resource grid → Contribute banner
 */

import React from 'react';
import StudentNavbar from '@/components/navbar/StudentNavbar';
import ResourceCard, { ResourceType } from '@/components/student/resource-card/ResourceCard';
import './LearningResources.css';

/* ── Resource data ────────────────────────────────────────── */
interface Resource {
  type: ResourceType;
  title: string;
  description: string;
  category: string;
  readTime: string;
  accentColor: string;
}

const RESOURCES: Resource[] = [
  {
    type: 'Guide',
    title: 'The Ultimate Interview Prep Guide',
    description:
      'From behavioral to technical rounds — everything you need to walk into any interview with confidence.',
    category: 'Interview',
    readTime: '15 min read',
    accentColor: '#4f46e5',
  },
  {
    type: 'Template',
    title: 'ATS-Optimized Resume Template',
    description:
      'A recruiter-approved resume template built to pass Applicant Tracking Systems.',
    category: 'Resume',
    readTime: 'Instant use',
    accentColor: '#7c3aed',
  },
  {
    type: 'Roadmap',
    title: 'Software Engineering Internship Roadmap',
    description:
      'Step-by-step path from zero to landing your first SWE internship — with timelines and milestones.',
    category: 'Roadmaps',
    readTime: '10 min read',
    accentColor: '#f59e0b',
  },
  {
    type: 'Guide',
    title: 'Cold Email Masterclass',
    description:
      'How to write cold emails that actually get replies, including subject line formulas and real examples.',
    category: 'Outreach',
    readTime: '8 min read',
    accentColor: '#0ea5e9',
  },
  {
    type: 'Tool',
    title: 'LinkedIn Profile Optimizer Checklist',
    description:
      'A 30-point checklist to make your LinkedIn stand out to recruiters and hiring managers.',
    category: 'Networking',
    readTime: 'Checklist',
    accentColor: '#10b981',
  },
  {
    type: 'Video',
    title: 'How to Negotiate Your First Offer',
    description:
      'Step-by-step video guide to negotiating salary and benefits as a first-time intern.',
    category: 'Interview',
    readTime: '22 min watch',
    accentColor: '#ef4444',
  },
  {
    type: 'Template',
    title: 'Cold Outreach Message Templates',
    description:
      '10 plug-and-play message templates for reaching out to recruiters, founders, and potential mentors.',
    category: 'Outreach',
    readTime: 'Instant use',
    accentColor: '#7c3aed',
  },
  {
    type: 'Roadmap',
    title: 'Product Management Internship Roadmap',
    description:
      'Everything you need to break into PM internships — skills, projects, interview prep, and networking.',
    category: 'Roadmaps',
    readTime: '12 min read',
    accentColor: '#f59e0b',
  },
  {
    type: 'Tool',
    title: 'Free Resume Builder Tools Compared',
    description:
      'An honest comparison of the top free resume builders — which ones are ATS-friendly and which to avoid.',
    category: 'Tools',
    readTime: '6 min read',
    accentColor: '#10b981',
  },
];

/* ── Category filter data ─────────────────────────────────── */
interface Category {
  icon: string;
  label: string;
}

const CATEGORIES: Category[] = [
  { icon: '📄', label: 'Resume' },
  { icon: '🎯', label: 'Interview' },
  { icon: '🗺️', label: 'Roadmaps' },
  { icon: '📧', label: 'Outreach' },
  { icon: '🔗', label: 'Networking' },
  { icon: '🛠️', label: 'Tools' },
];

/* ── Stats data ───────────────────────────────────────────── */
const STATS = [
  { value: '50+', label: 'Resources' },
  { value: '9', label: 'Categories' },
  { value: '100%', label: 'Free' },
];

/* ── Page component ───────────────────────────────────────── */
const LearningResources: React.FC = () => {
  return (
    <div className="resources-page">
      {/* ── Navbar ────────────────────────────────────────── */}
      <StudentNavbar />

      <main className="resources-main">
        {/* ══════════════════════════════════════════════════
            HERO
        ══════════════════════════════════════════════════ */}
        <section className="resources-hero">
          <div className="resources-hero-inner">
            <p className="resources-eyebrow">Resources</p>
            <h1 className="resources-title">
              Everything you need,{' '}
              <span className="gradient-text">in one place.</span>
            </h1>
            <p className="resources-subtitle">
              Guides, templates, roadmaps, and tools — hand-picked to help you
              land internships faster. All completely free.
            </p>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            CATEGORY STRIP
        ══════════════════════════════════════════════════ */}
        <section className="resources-categories">
          <div className="resources-categories-inner">
            {CATEGORIES.map((cat) => (
              <button key={cat.label} className="resources-category-pill">
                <span className="resources-category-icon" aria-hidden="true">
                  {cat.icon}
                </span>
                {cat.label}
              </button>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            STATS BAR
        ══════════════════════════════════════════════════ */}
        <div className="resources-stats">
          <div className="resources-stats-inner">
            {STATS.map((stat) => (
              <div key={stat.label} className="resources-stat">
                <div className="resources-stat-value">{stat.value}</div>
                <div className="resources-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════════════════════
            RESOURCE GRID
        ══════════════════════════════════════════════════ */}
        <section className="resources-grid-section">
          <div className="resources-grid-inner">
            <p className="resources-section-label">All Resources</p>
            <div className="resources-grid">
              {RESOURCES.map((resource) => (
                <ResourceCard
                  key={resource.title}
                  type={resource.type}
                  title={resource.title}
                  description={resource.description}
                  category={resource.category}
                  readTime={resource.readTime}
                  accentColor={resource.accentColor}
                  href="#"
                />
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            CONTRIBUTION BANNER
        ══════════════════════════════════════════════════ */}
        <section className="resources-contribute-section">
          <div className="resources-contribute">
            <div className="resources-contribute-copy">
              <h2>Got a resource to share?</h2>
              <p>
                We&apos;re always looking for high-quality guides, templates, and
                tools contributed by students and industry professionals. Submit
                yours and help the community grow.
              </p>
            </div>
            <a href="#" className="resources-contribute-btn">
              Submit a Resource →
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LearningResources;
