"use client";
import { useState } from "react";
import { AudienceToggle } from "./AudienceToggle";
import "./LandingPage.css";
import { Audience } from "@/types/AudienceType";
import StudentLanding from "../student/StudentLanding";

const LandingPage = () => {
  const [audience, setAudience] = useState<Audience>("student");

  return (
    <div>
      <AudienceToggle audience={audience} onChange={setAudience} />
      <StudentLanding />
    </div>
  );
};

export default LandingPage;
