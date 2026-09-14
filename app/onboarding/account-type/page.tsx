"use client";

import { useRouter } from "next/navigation";
import "./AccountType.css";

const AccountTypePage = () => {
  const router = useRouter();

  const handleSelect = (type: "student" | "organization") => {
    if (type === "student") {
      router.push("/student");
      return;
    }

    router.push("/organization");
  };

  return (
    <main className="account-type-page">
      <div className="account-type-overlay"></div>

      <div className="account-type-content">
        <div className="account-type-logo">
          <div className="account-type-logo-icon"></div>
          <span>InternFoxx</span>
        </div>

        <header className="account-type-header">
          <h1>How will you use InternFoxx?</h1>

          <p>
            Choose the experience that fits you best.
          </p>
        </header>

        <div className="account-type-options">
          <button
            type="button"
            className="account-type-card"
            onClick={() => handleSelect("student")}
          >
            <div className="account-type-card-icon">🎓</div>

            <div className="account-type-card-content">
              <h2>Student</h2>

              <p>
                Find internships, build your skills, and launch
                your career.
              </p>
            </div>

            <span className="account-type-card-action">
              Select →
            </span>
          </button>

          <button
            type="button"
            className="account-type-card"
            onClick={() => handleSelect("organization")}
          >
            <div className="account-type-card-icon">🏢</div>

            <div className="account-type-card-content">
              <h2>Organization</h2>

              <p>
                Hire talent, build teams, and grow your business.
              </p>
            </div>

            <span className="account-type-card-action">
              Select →
            </span>
          </button>
        </div>

        <div className="account-type-footer">
          <span>Already have an account?</span>

          <button
            type="button"
            onClick={() => router.push("/login")}
          >
            Log in
          </button>
        </div>

        <button
          type="button"
          className="account-type-back"
          onClick={() => router.back()}
        >
          ← Back
        </button>
      </div>
    </main>
  );
};

export default AccountTypePage;