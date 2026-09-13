"use client";
import { useState } from "react";
import { AudienceToggle } from "./AudienceToggle";
import "./LandingPage.css";
import { Audience } from "@/types/AudienceType";
import StudentLanding from "../student/StudentLanding";
import OrganisationsLanding from "../organization/OrganizationLanding";
import StudentNavbar from "@/components/navbar/StudentNavbar";
import OrganizationNavbar from "@/components/navbar/OrganizationNavbar";

const LandingPage = () => {
  const [audience, setAudience] = useState<Audience>("student");

  return (
    <div>
      <AudienceToggle audience={audience} onChange={setAudience} />
      {audience == "student" && <StudentNavbar />}
      {audience == "student" && <StudentLanding />}
      {audience == "organization" && <OrganizationNavbar />}
      {audience == "organization" && <OrganisationsLanding />}
    </div>
  );
};

export default LandingPage;
