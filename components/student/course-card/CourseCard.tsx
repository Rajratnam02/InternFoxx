import "./CourseCard.css";

type CourseCardProps = {
  eyebrow: string;
  title: string;
  description: string;
  instructor: string;
  lessons: number;
  duration: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  variant?: "purple" | "teal" | "orange" | "blue";
  href?: string;
};

const DIFFICULTY_COLORS: Record<string, string> = {
  Beginner: "CourseCard__difficulty--beginner",
  Intermediate: "CourseCard__difficulty--intermediate",
  Advanced: "CourseCard__difficulty--advanced",
};

const INSTRUCTOR_COLORS = [
  "#7d6ce7",
  "#62b7aa",
  "#e07a5f",
  "#3d405b",
  "#81b29a",
];

const CourseCard = ({
  eyebrow,
  title,
  description,
  instructor,
  lessons,
  duration,
  difficulty,
  variant = "purple",
  href = "#",
}: CourseCardProps) => {
  const initials = instructor
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const colorIndex = instructor.charCodeAt(0) % INSTRUCTOR_COLORS.length;

  return (
    <a href={href} className={`CourseCard CourseCard--${variant}`}>
      <div className="CourseCard__top">
        <p className="CourseCard__eyebrow">{eyebrow}</p>

        <span
          className={`CourseCard__difficulty ${DIFFICULTY_COLORS[difficulty]}`}
        >
          {difficulty}
        </span>
      </div>

      <h3 className="CourseCard__title">{title}</h3>

      <p className="CourseCard__description">{description}</p>

      <div className="CourseCard__footer">
        <div className="CourseCard__instructor">
          <div
            className="CourseCard__instructor-avatar"
            style={{ background: INSTRUCTOR_COLORS[colorIndex] }}
          >
            {initials}
          </div>
          <span className="CourseCard__instructor-name">{instructor}</span>
        </div>

        <div className="CourseCard__meta">
          <span>{lessons} lessons</span>
          <span className="CourseCard__dot">·</span>
          <span>{duration}</span>
        </div>
      </div>

      <span className="CourseCard__link">
        Start Course
        <span className="CourseCard__arrow"> →</span>
      </span>
    </a>
  );
};

export default CourseCard;
