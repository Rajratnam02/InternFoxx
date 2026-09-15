import { ReactNode } from "react";
import "./featurecard.css";

type FeatureCardProps = {
  eyebrow: string;
  title: string;
  description: string;
  linkText: string;
  href: string;
  visual?: ReactNode;
  variant?: string;
};

const FeatureCard = ({
  eyebrow,
  title,
  description,
  linkText,
  href,
  visual,
  variant = "default",
}: FeatureCardProps) => {
  return (
    <a href={href} className={`FeatureCard FeatureCard--${variant}`}>
      <div className="FeatureCard__content">
        <p className="FeatureCard__eyebrow">{eyebrow}</p>

        <h3 className="FeatureCard__title">{title}</h3>

        <p className="FeatureCard__description">{description}</p>

        <span className="FeatureCard__link">
          {linkText}
          <span className="FeatureCard__arrow">→</span>
        </span>
      </div>

      {visual && <div className="FeatureCard__visual">{visual}</div>}
    </a>
  );
};

export default FeatureCard;
