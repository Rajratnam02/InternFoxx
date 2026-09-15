import "./ResourceCard.css";

type ResourceType = "Guide" | "Template" | "Roadmap" | "Tool" | "Video";

type ResourceCardProps = {
  type: ResourceType;
  title: string;
  description: string;
  category: string;
  readTime: string;
  href?: string;
};

const TYPE_COLORS: Record<ResourceType, string> = {
  Guide: "ResourceCard__type--guide",
  Template: "ResourceCard__type--template",
  Roadmap: "ResourceCard__type--roadmap",
  Tool: "ResourceCard__type--tool",
  Video: "ResourceCard__type--video",
};

const ResourceCard = ({
  type,
  title,
  description,
  category,
  readTime,
  href = "#",
}: ResourceCardProps) => {
  return (
    <a href={href} className="ResourceCard">
      <div className="ResourceCard__top">
        <span className={`ResourceCard__type ${TYPE_COLORS[type]}`}>
          {type}
        </span>

        <span className="ResourceCard__read-time">{readTime}</span>
      </div>

      <h3 className="ResourceCard__title">{title}</h3>

      <p className="ResourceCard__description">{description}</p>

      <div className="ResourceCard__footer">
        <span className="ResourceCard__category">{category}</span>

        <span className="ResourceCard__link">
          View Resource
          <span className="ResourceCard__arrow"> →</span>
        </span>
      </div>
    </a>
  );
};

export default ResourceCard;
