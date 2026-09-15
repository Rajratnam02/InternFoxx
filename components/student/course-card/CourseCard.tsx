import React from 'react';
import './CourseCard.css';

type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced';

interface CourseCardProps {
  eyebrow: string;
  title: string;
  description: string;
  instructor: string;
  lessons: number;
  duration: string;
  difficulty: Difficulty;
  accentColor?: string;  // top accent bar color, defaults to #7c3aed
  href?: string;         // defaults to '#'
}

/**
 * Map difficulty level to its badge CSS modifier class.
 */
const difficultyClass: Record<Difficulty, string> = {
  Beginner:     'CourseCard__difficulty--beginner',
  Intermediate: 'CourseCard__difficulty--intermediate',
  Advanced:     'CourseCard__difficulty--advanced',
};

/**
 * Generate a single-character avatar initial from an instructor name.
 */
function instructorInitial(name: string): string {
  return name.trim()[0]?.toUpperCase() ?? '?';
}

/**
 * Derive a stable accent color for the instructor avatar bubble
 * from the accentColor prop (same hue as card accent bar).
 */
function avatarBg(accentColor: string): string {
  return accentColor;
}

/**
 * CourseCard — a linked card representing a course.
 * Used in the Courses page grid and featured section.
 */
export default function CourseCard({
  eyebrow,
  title,
  description,
  instructor,
  lessons,
  duration,
  difficulty,
  accentColor = '#7c3aed',
  href = '#',
}: CourseCardProps) {
  return (
    <a className="CourseCard" href={href} aria-label={`View course: ${title}`}>
      {/* ── Coloured top accent bar ── */}
      <div
        className="CourseCard__accent"
        style={{ background: accentColor }}
        aria-hidden="true"
      />

      {/* ── Card body ── */}
      <div className="CourseCard__body">
        {/* Top row: eyebrow + difficulty badge */}
        <div className="CourseCard__top">
          <span className="CourseCard__eyebrow">{eyebrow}</span>
          <span className={`CourseCard__difficulty ${difficultyClass[difficulty]}`}>
            {difficulty}
          </span>
        </div>

        {/* Title */}
        <h3 className="CourseCard__title">{title}</h3>

        {/* Description */}
        <p className="CourseCard__description">{description}</p>

        {/* Footer: instructor + meta */}
        <div className="CourseCard__footer">
          <div className="CourseCard__instructor">
            <div
              className="CourseCard__instructor-avatar"
              style={{ background: avatarBg(accentColor) }}
              aria-hidden="true"
            >
              {instructorInitial(instructor)}
            </div>
            <span className="CourseCard__instructor-name">{instructor}</span>
          </div>

          <div className="CourseCard__meta" aria-label={`${lessons} lessons, ${duration}`}>
            <span>{lessons} lessons</span>
            <span>·</span>
            <span>{duration}</span>
          </div>
        </div>

        {/* Inline CTA link */}
        <span className="CourseCard__link">
          Start learning
          <span className="CourseCard__arrow" aria-hidden="true">→</span>
        </span>
      </div>
    </a>
  );
}
