/**
 * ResourceCard.tsx
 * Reusable card component for Learning Resources page.
 * Displays a resource with a coloured top accent bar, type badge,
 * title, description, category pill, and a "View →" link.
 */

import React from 'react';
import './ResourceCard.css';

/* ── Types ────────────────────────────────────────────────── */
export type ResourceType = 'Guide' | 'Template' | 'Roadmap' | 'Tool' | 'Video';

export interface ResourceCardProps {
  /** Resource content type — drives badge colour */
  type: ResourceType;
  /** Card title */
  title: string;
  /** Short description shown on the card */
  description: string;
  /** Category label shown in footer pill */
  category: string;
  /** Right-aligned meta string, e.g. "15 min read" or "Instant use" */
  readTime: string;
  /** Hex or CSS colour for the 3px top accent bar */
  accentColor?: string;
  /** Destination URL; defaults to '#' */
  href?: string;
}

/* ── Component ────────────────────────────────────────────── */
const ResourceCard: React.FC<ResourceCardProps> = ({
  type,
  title,
  description,
  category,
  readTime,
  accentColor = '#4f46e5',
  href = '#',
}) => {
  return (
    <a className="ResourceCard" href={href}>
      {/* Coloured top bar — inline colour from prop */}
      <div
        className="ResourceCard__bar"
        style={{ backgroundColor: accentColor }}
        aria-hidden="true"
      />

      <div className="ResourceCard__body">
        {/* Top row: type badge + read time */}
        <div className="ResourceCard__top">
          <span className={`ResourceCard__type ResourceCard__type--${type}`}>{type}</span>
          <span className="ResourceCard__read-time">{readTime}</span>
        </div>

        {/* Title */}
        <h3 className="ResourceCard__title">{title}</h3>

        {/* Description */}
        <p className="ResourceCard__description">{description}</p>

        {/* Footer: category pill + view link */}
        <div className="ResourceCard__footer">
          <span className="ResourceCard__category">{category}</span>
          <span className="ResourceCard__link">
            View
            <span className="ResourceCard__arrow" aria-hidden="true">
              →
            </span>
          </span>
        </div>
      </div>
    </a>
  );
};

export default ResourceCard;
