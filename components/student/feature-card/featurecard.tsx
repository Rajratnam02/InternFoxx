import Link from "next/link";
import type { ReactNode } from "react";
import "./featurecard.css";
interface FeatureCardProps {
  title: string;
  description: string;
  href: string;
  icon?: ReactNode;
  actionLabel?: string;
  className?: string;
  disabled?: boolean;
}

const FeatureCard = ({
  title,
  description,
  href,
  icon,
  actionLabel = "Open",
  className = "",
  disabled = false,
}: FeatureCardProps) => {
  if (disabled) {
    return (
      <article
        className={`feature-card feature-card--disabled ${className}`}
        aria-disabled="true"
      >
        {icon && (
          <div className="feature-card__icon" aria-hidden="true">
            {icon}
          </div>
        )}

        <div className="feature-card__content">
          <h3 className="feature-card__title">{title}</h3>

          <p className="feature-card__description">{description}</p>
        </div>

        <span className="feature-card__action">{actionLabel} →</span>
      </article>
    );
  }

  return (
    <Link
      href={href}
      className={`feature-card ${className}`}
      aria-label={`${title}: ${description}`}
    >
      {icon && (
        <div className="feature-card__icon" aria-hidden="true">
          {icon}
        </div>
      )}

      <div className="feature-card__content">
        <h3 className="feature-card__title">{title}</h3>

        <p className="feature-card__description">{description}</p>
      </div>

      <span className="feature-card__action">{actionLabel} →</span>
    </Link>
  );
};

export default FeatureCard;
