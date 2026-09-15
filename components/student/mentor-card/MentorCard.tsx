import "./MentorCard.css";

type MentorCardProps = {
  name: string;
  role: string;
  company: string;
  tags: string[];
  rating: number;
  sessions: number;
  avatarColor?: string;
  href?: string;
};

const MentorCard = ({
  name,
  role,
  company,
  tags,
  rating,
  sessions,
  avatarColor = "#7d6ce7",
  href = "#",
}: MentorCardProps) => {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const stars = Math.round(rating);

  return (
    <div className="MentorCard">
      <div className="MentorCard__header">
        <div className="MentorCard__avatar" style={{ background: avatarColor }}>
          {initials}
        </div>

        <div className="MentorCard__identity">
          <h3 className="MentorCard__name">{name}</h3>
          <p className="MentorCard__role">
            {role} · {company}
          </p>
        </div>
      </div>

      <div className="MentorCard__tags">
        {tags.map((tag) => (
          <span key={tag} className="MentorCard__tag">
            {tag}
          </span>
        ))}
      </div>

      <div className="MentorCard__footer">
        <div className="MentorCard__meta">
          <span className="MentorCard__stars">
            {"★".repeat(stars)}
            {"☆".repeat(5 - stars)}
          </span>
          <span className="MentorCard__sessions">{sessions} sessions</span>
        </div>

        <a href={href} className="MentorCard__btn">
          Book Session →
        </a>
      </div>
    </div>
  );
};

export default MentorCard;
