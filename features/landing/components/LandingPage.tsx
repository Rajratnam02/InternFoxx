"use client";
import { useState } from "react";
import { AudienceToggle } from "./AudienceToggle";
import "./LandingPage.css";
import { Audience } from "@/types/AudienceType";

const LandingPage = () => {
  const [audience, setAudience] = useState<Audience>("student");

  return (
    <div>
      <AudienceToggle audience={audience} onChange={setAudience} />
      
    </div>
  );
};

export default LandingPage;
