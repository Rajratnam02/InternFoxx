import React from 'react';
import './MentorCard.css';

interface MentorCardProps {
  name: string;
  role: string;
  company: string;
  tags: string[];
  rating: number;        // 1–5
  sessions: number;
  avatarColor?: string;  // defaults to #7c3aed
  href?: string;         // defaults to '#'
}

/**
 * Compute 2-letter initials from a full name.
 * e.g. "Priya Sharma" → "PS"
 */
function getInitials(name: string): string {
  const words = name.trim().split(/\s+/);
  return words
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? '')
    .join('');
}

/**
 * Render a star rating row.
 * Filled stars (★) up to rating, empty (☆) for the rest out of 5.
 */
function Stars({ rating }: { rating: number }) {
  return (
    <span className="MentorCard__stars" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} style={{ opacity: i < rating ? 1 : 0.25 }}>★</span>
      ))}
    </span>
  );
}

/**
 * MentorCard — displays a mentor's profile with booking CTA.
 * Used in the Sessions page grid.
 */
export default function MentorCard({
  name,
  role,
  company,
  tags,
  rating,
  sessions,
  avatarColor = '#7c3aed',
  href = '#',
}: MentorCardProps) {
  const initials = getInitials(name);

  return (
    <a className="MentorCard" href={href} aria-label={`Book a session with ${name}`}>
      {/* ── Header: avatar + name/role ── */}
      <div className="MentorCard__header">
        <div
          className="MentorCard__avatar"
          style={{ background: avatarColor }}
          aria-hidden="true"
        >
          {initials}
        </div>

        <div className="MentorCard__info">
          <h3 className="MentorCard__name">{name}</h3>
          <p className="MentorCard__role">
            {role} · <span className="MentorCard__company">{company}</span>
          </p>
        </div>
      </div>

      {/* ── Expertise tags ── */}
      <div className="MentorCard__tags" aria-label="Expertise areas">
        {tags.map((tag) => (
          <span key={tag} className="MentorCard__tag">
            {tag}
          </span>
        ))}
      </div>

      {/* ── Footer: rating + CTA ── */}
      <div className="MentorCard__footer">
        <div>
          <Stars rating={rating} />
          <p className="MentorCard__sessions">{sessions.toLocaleString()} sessions</p>
        </div>

        <span className="MentorCard__btn" aria-label={`Book a session with ${name}`}>
          Book Session
        </span>
      </div>
    </a>
  );
}
