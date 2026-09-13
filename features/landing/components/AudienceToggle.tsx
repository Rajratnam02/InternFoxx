import { Audience } from "@/types/AudienceType";
import './AudienceLanding.css'
interface AudienceToggleProps {
  audience: Audience;
  onChange: (audience: Audience) => void;
}

export const AudienceToggle = ({
  audience,
  onChange,
}: AudienceToggleProps) => {
  return (
    <div className="audience-toggle">
      <div
        className={`student ${audience === "student" ? "active" : ""}`}
        onClick={() => onChange("student")}
      >
        For Students
      </div>

      <div
        className={`organization ${
          audience === "organization" ? "active" : ""
        }`}
        onClick={() => onChange("organization")}
      >
        For Organisations & Startups
      </div>
    </div>
  );
};