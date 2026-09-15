'use client';

import React, { useState } from 'react';
import StudentNavbar from '@/components/navbar/StudentNavbar';
import MentorCard from '@/components/student/mentor-card/MentorCard';
import './sessions.css';

/* ── Mentor data ────────────────────────────────────────────── */
interface Mentor {
  name: string;
  role: string;
  company: string;
  tags: string[];
  rating: number;
  sessions: number;
  avatarColor: string;
}

const MENTORS: Mentor[] = [
  {
    name: 'Priya Sharma',
    role: 'Senior SWE',
    company: 'Google',
    tags: ['Interview Prep', 'Tech Skills', 'Resume Review'],
    rating: 5,
    sessions: 142,
    avatarColor: '#7c3aed',
  },
  {
    name: 'Arjun Mehta',
    role: 'Product Manager',
    company: 'Microsoft',
    tags: ['PM Prep', 'Career Advice', 'Networking'],
    rating: 5,
    sessions: 98,
    avatarColor: '#4f46e5',
  },
  {
    name: 'Sara Ali',
    role: 'Startup Founder',
    company: 'TechVenture',
    tags: ['Startup', 'Fundraising', 'Career Advice'],
    rating: 4,
    sessions: 77,
    avatarColor: '#0ea5e9',
  },
  {
    name: 'Rahul Nair',
    role: 'Data Scientist',
    company: 'Amazon',
    tags: ['ML/AI', 'Tech Skills', 'Interview Prep'],
    rating: 5,
    sessions: 115,
    avatarColor: '#10b981',
  },
  {
    name: 'Meera Patel',
    role: 'UX Designer',
    company: 'Figma',
    tags: ['Design', 'Portfolio Review', 'Career Advice'],
    rating: 4,
    sessions: 63,
    avatarColor: '#f59e0b',
  },
  {
    name: 'Dev Kapoor',
    role: 'Backend Engineer',
    company: 'Stripe',
    tags: ['System Design', 'Tech Skills', 'Interview Prep'],
    rating: 5,
    sessions: 134,
    avatarColor: '#ef4444',
  },
];

/* ── Filter tabs ─────────────────────────────────────────────── */
const FILTERS = [
  'All',
  'Career Advice',
  'Interview Prep',
  'Tech Skills',
  'Startup',
  'Design',
];

/* ── How it works steps ──────────────────────────────────────── */
const STEPS = [
  {
    number: '01',
    title: 'Pick a mentor',
    description:
      'Browse by expertise. Find someone whose experience matches your goals.',
  },
  {
    number: '02',
    title: 'Book a slot',
    description:
      'Choose from available times. Sessions are 30–60 mins, fully flexible.',
  },
  {
    number: '03',
    title: 'Join the call',
    description:
      'Meet 1-on-1 over video. Come with your questions ready.',
  },
];

/* ── Component ───────────────────────────────────────────────── */
export default function SessionsPage() {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  /* Filter mentors by selected tag (or show all) */
  const visibleMentors =
    activeFilter === 'All'
      ? MENTORS
      : MENTORS.filter((m) => m.tags.includes(activeFilter));

  return (
    <div className="sessions-page">
      <StudentNavbar />

      <main className="sessions-main">
        {/* ══════════════════════════════════════
            HERO
        ══════════════════════════════════════ */}
        <section className="sessions-hero" aria-label="Sessions hero">
          <div className="sessions-hero-inner">
            {/* Eyebrow */}
            <p className="sessions-eyebrow">1-ON-1 LIVE SESSIONS</p>

            {/* Headline */}
            <h1 className="sessions-title">
              Learn from people{' '}
              <span className="gradient-text">who&apos;ve been there.</span>
            </h1>

            {/* Subtitle */}
            <p className="sessions-subtitle">
              Book a live, private session with a professional who&apos;s already navigated
              the path you&apos;re on — and walk away with clarity, confidence, and a plan.
            </p>

            {/* CTA row */}
            <div className="sessions-hero-cta">
              <a href="#browse" className="primary-btn">
                Find a Mentor →
              </a>

              <div className="sessions-hero-stats">
                <span>
                  <strong>50+</strong> mentors
                </span>
                <span>
                  <strong>1,000+</strong> sessions held
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            HOW IT WORKS
        ══════════════════════════════════════ */}
        <section className="sessions-how" aria-label="How it works">
          <div className="sessions-how-inner">
            {/* Section heading */}
            <p className="sessions-eyebrow">HOW IT WORKS</p>
            <h2 className="sessions-section-title">
              Three steps to your next{' '}
              <span className="gradient-text">breakthrough.</span>
            </h2>

            {/* Steps strip */}
            <div className="sessions-how-grid" role="list">
              {STEPS.map((step) => (
                <div className="sessions-step" key={step.number} role="listitem">
                  <span className="sessions-step-number" aria-hidden="true">
                    {step.number}
                  </span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            BROWSE MENTORS
        ══════════════════════════════════════ */}
        <section
          className="sessions-browse"
          id="browse"
          aria-label="Browse mentors"
        >
          <div className="sessions-browse-inner">
            {/* Section heading */}
            <p className="sessions-eyebrow">FIND YOUR MENTOR</p>
            <h2 className="sessions-section-title">
              Browse by <span className="gradient-text">expertise.</span>
            </h2>

            {/* Filter tabs */}
            <div
              className="sessions-filters"
              role="tablist"
              aria-label="Filter mentors by topic"
            >
              {FILTERS.map((filter) => (
                <button
                  key={filter}
                  role="tab"
                  aria-selected={activeFilter === filter}
                  className={`sessions-filter-btn${
                    activeFilter === filter ? ' sessions-filter-btn--active' : ''
                  }`}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Mentor grid */}
            <div
              className="sessions-grid"
              role="list"
              aria-label="Mentor cards"
            >
              {visibleMentors.length > 0 ? (
                visibleMentors.map((mentor) => (
                  <div key={mentor.name} role="listitem">
                    <MentorCard {...mentor} />
                  </div>
                ))
              ) : (
                <p className="sessions-empty">
                  No mentors found for &ldquo;{activeFilter}&rdquo;.
                </p>
              )}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            CTA BANNER
        ══════════════════════════════════════ */}
        <section className="sessions-cta-section" aria-label="Become a mentor CTA">
          <div className="sessions-cta-card">
            <div className="sessions-cta-text">
              <p className="sessions-cta-eyebrow">FOR PROFESSIONALS</p>
              <h2>Share your experience. <br />Inspire the next generation.</h2>
              <p>
                Join InternFoxx as a mentor and help students land their dream
                opportunities — on your schedule.
              </p>
            </div>
            <a href="#" className="sessions-cta-btn">
              Apply as a Mentor →
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
