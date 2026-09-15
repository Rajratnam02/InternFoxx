'use client';

import React, { useState } from 'react';
import StudentNavbar from '@/components/navbar/StudentNavbar';
import CourseCard from '@/components/student/course-card/CourseCard';
import './courses.css';

/* ── Course data ─────────────────────────────────────────────── */
type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced';

interface Course {
  eyebrow: string;
  title: string;
  description: string;
  instructor: string;
  lessons: number;
  duration: string;
  difficulty: Difficulty;
  accentColor: string;
  filterTag: string;   // Used for filter matching
}

const COURSES: Course[] = [
  {
    eyebrow: 'RESUME & CV',
    title: 'Craft a Resume That Gets You Hired',
    description:
      'Step-by-step guidance to write a compelling, ATS-friendly resume for your target role.',
    instructor: 'Priya Sharma',
    lessons: 8,
    duration: '2h 30m',
    difficulty: 'Beginner',
    accentColor: '#7c3aed',
    filterTag: 'Resume & CV',
  },
  {
    eyebrow: 'INTERVIEW PREP',
    title: 'Master Behavioral Interviews',
    description:
      'The STAR method, powerful stories, and frameworks to impress any interviewer.',
    instructor: 'Arjun Mehta',
    lessons: 10,
    duration: '3h 15m',
    difficulty: 'Intermediate',
    accentColor: '#4f46e5',
    filterTag: 'Interview Prep',
  },
  {
    eyebrow: 'TECHNICAL SKILLS',
    title: 'DSA for Tech Interviews',
    description:
      'The most frequently tested data structures and algorithms — explained clearly.',
    instructor: 'Rahul Nair',
    lessons: 18,
    duration: '6h 00m',
    difficulty: 'Intermediate',
    accentColor: '#0ea5e9',
    filterTag: 'Technical Skills',
  },
  {
    eyebrow: 'NETWORKING',
    title: 'The Art of Cold Outreach',
    description:
      'Build genuine connections with professionals and turn cold messages into warm replies.',
    instructor: 'Sara Ali',
    lessons: 6,
    duration: '1h 45m',
    difficulty: 'Beginner',
    accentColor: '#10b981',
    filterTag: 'Networking',
  },
  {
    eyebrow: 'SOFT SKILLS',
    title: 'Communicate with Confidence',
    description:
      'From emails to presentations — clear, compelling communication for the workplace.',
    instructor: 'Meera Patel',
    lessons: 7,
    duration: '2h 10m',
    difficulty: 'Beginner',
    accentColor: '#f59e0b',
    filterTag: 'Soft Skills',
  },
  {
    eyebrow: 'INTERVIEW PREP',
    title: 'System Design for Beginners',
    description:
      'Learn to design scalable systems and answer system design interview questions confidently.',
    instructor: 'Dev Kapoor',
    lessons: 12,
    duration: '4h 30m',
    difficulty: 'Advanced',
    accentColor: '#ef4444',
    filterTag: 'Interview Prep',
  },
];

/* ── Filter tabs ─────────────────────────────────────────────── */
const FILTERS = [
  'All',
  'Resume & CV',
  'Interview Prep',
  'Technical Skills',
  'Soft Skills',
  'Networking',
];

/* ── Component ───────────────────────────────────────────────── */
export default function CoursesPage() {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  /* Filter courses by selected tag */
  const visibleCourses =
    activeFilter === 'All'
      ? COURSES
      : COURSES.filter((c) => c.filterTag === activeFilter);

  return (
    <div className="courses-page">
      <StudentNavbar />

      <main className="courses-main">
        {/* ══════════════════════════════════════
            HERO
        ══════════════════════════════════════ */}
        <section className="courses-hero" aria-label="Courses hero">
          <div className="courses-hero-inner">
            {/* Eyebrow */}
            <p className="courses-eyebrow">LEARN</p>

            {/* Headline */}
            <h1 className="courses-title">
              Build the skills that{' '}
              <span className="gradient-text">get you hired.</span>
            </h1>

            {/* Subtitle */}
            <p className="courses-subtitle">
              Self-paced, mentor-built courses covering every stage of the internship
              journey — from crafting your resume to acing technical interviews.
            </p>

            {/* CTA row */}
            <div className="courses-hero-cta">
              <a href="#browse-courses" className="primary-btn">
                Browse Courses →
              </a>

              {/* Stat pills */}
              <div className="courses-hero-pills">
                <span className="courses-pill">30+ courses</span>
                <span className="courses-pill">Expert instructors</span>
                <span className="courses-pill">Free to start</span>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            FEATURED COURSE WIDE CARD
        ══════════════════════════════════════ */}
        <section className="courses-featured-section" aria-label="Featured course">
          <div className="courses-featured-inner">
            <div className="courses-featured-card">
              {/* Left: text content */}
              <div className="courses-featured-content">
                <p className="courses-featured-eyebrow">⭐ FEATURED COURSE</p>
                <h2 className="courses-featured-title">
                  The 30-Day Internship Accelerator
                </h2>
                <p className="courses-featured-desc">
                  A structured, all-in-one program that takes you from zero to
                  offer-ready in 30 days. Covers resume, applications, networking,
                  interviews, and negotiation.
                </p>

                {/* Meta row */}
                <div className="courses-featured-meta">
                  <span className="courses-featured-meta-item">
                    <span className="courses-featured-meta-icon">📚</span>
                    42 lessons
                  </span>
                  <span className="courses-featured-meta-item">
                    <span className="courses-featured-meta-icon">⏱</span>
                    12h total
                  </span>
                  <span className="courses-featured-meta-item">
                    <span className="courses-featured-meta-icon">🎯</span>
                    All levels
                  </span>
                </div>

                <a href="#" className="primary-btn courses-featured-btn">
                  Start for Free →
                </a>
              </div>

              {/* Right: CSS mockup */}
              <div className="courses-mockup" aria-hidden="true">
                {/* Browser chrome */}
                <div className="courses-mockup__chrome">
                  <span className="courses-mockup__dot courses-mockup__dot--red" />
                  <span className="courses-mockup__dot courses-mockup__dot--yellow" />
                  <span className="courses-mockup__dot courses-mockup__dot--green" />
                  <span className="courses-mockup__title">Internship Accelerator</span>
                </div>

                {/* Course progress */}
                <div className="courses-mockup__body">
                  <p className="courses-mockup__label">Your Progress</p>
                  <div className="courses-mockup__progress-bar">
                    <div className="courses-mockup__progress-fill" />
                  </div>
                  <p className="courses-mockup__progress-text">14 / 42 lessons complete</p>

                  <div className="courses-mockup__divider" />

                  {/* Lesson list */}
                  <p className="courses-mockup__label">Up Next</p>
                  <ul className="courses-mockup__lessons">
                    <li className="courses-mockup__lesson courses-mockup__lesson--done">
                      <span className="courses-mockup__check">✓</span>
                      Crafting your target list
                    </li>
                    <li className="courses-mockup__lesson courses-mockup__lesson--done">
                      <span className="courses-mockup__check">✓</span>
                      ATS resume formatting
                    </li>
                    <li className="courses-mockup__lesson courses-mockup__lesson--active">
                      <span className="courses-mockup__play">▶</span>
                      Cold email mastery
                    </li>
                    <li className="courses-mockup__lesson">
                      <span className="courses-mockup__num">4</span>
                      LinkedIn optimisation
                    </li>
                    <li className="courses-mockup__lesson">
                      <span className="courses-mockup__num">5</span>
                      STAR stories workshop
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            BROWSE COURSES GRID
        ══════════════════════════════════════ */}
        <section
          className="courses-browse"
          id="browse-courses"
          aria-label="Browse all courses"
        >
          <div className="courses-browse-inner">
            {/* Section heading */}
            <p className="courses-eyebrow">ALL COURSES</p>
            <h2 className="courses-section-title">
              Explore by <span className="gradient-text">topic.</span>
            </h2>

            {/* Filter tabs */}
            <div
              className="courses-filters"
              role="tablist"
              aria-label="Filter courses by topic"
            >
              {FILTERS.map((filter) => (
                <button
                  key={filter}
                  role="tab"
                  aria-selected={activeFilter === filter}
                  className={`courses-filter-btn${
                    activeFilter === filter ? ' courses-filter-btn--active' : ''
                  }`}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Course grid */}
            <div
              className="courses-grid"
              role="list"
              aria-label="Course cards"
            >
              {visibleCourses.length > 0 ? (
                visibleCourses.map((course) => (
                  <div key={course.title} role="listitem">
                    <CourseCard
                      eyebrow={course.eyebrow}
                      title={course.title}
                      description={course.description}
                      instructor={course.instructor}
                      lessons={course.lessons}
                      duration={course.duration}
                      difficulty={course.difficulty}
                      accentColor={course.accentColor}
                    />
                  </div>
                ))
              ) : (
                <p className="courses-empty">
                  No courses found for &ldquo;{activeFilter}&rdquo;.
                </p>
              )}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            CTA BANNER
        ══════════════════════════════════════ */}
        <section className="courses-cta-section" aria-label="Mentor CTA">
          <div className="courses-cta-card">
            <div className="courses-cta-text">
              <p className="courses-cta-eyebrow">WANT TO TEACH?</p>
              <h2>Turn your expertise <br />into a course.</h2>
              <p>
                Help the next wave of interns by sharing what you know.
                Applications are open for course contributors.
              </p>
            </div>
            <a href="#" className="courses-cta-btn">
              Apply to Teach →
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
