"use client";

import { useState } from "react";
import StudentNavbar from "@/components/navbar/StudentNavbar";
import "./MailMerge.css";

const TEMPLATES = [
  {
    id: "cold-intro",
    label: "Cold Intro",
    subject: "Quick intro from a student admirer of {{company}}",
    body: `Hi {{name}},

My name is {{yourName}}, a {{year}} year student studying {{major}}. I've been following {{company}}'s work on {{topic}} and I'm genuinely excited about the direction you're heading.

I'd love to learn more about your journey and how you got to your current role as {{role}}. Even a 15-minute call would mean a lot.

Would you be open to a brief chat sometime this or next week?

Best,
{{yourName}}`,
  },
  {
    id: "referral",
    label: "Referral Request",
    subject: "Referral for {{role}} at {{company}} — {{yourName}}",
    body: `Hi {{name}},

I hope this message finds you well. I came across your profile on LinkedIn and noticed you work at {{company}} — I'm currently applying for the {{role}} position and would love to connect.

I have experience in {{skills}} and I believe I'd be a strong fit for the team. If you'd be comfortable, a referral from you would mean a great deal.

Happy to share my resume or jump on a quick call. Let me know what works best.

Thanks so much,
{{yourName}}`,
  },
  {
    id: "followup",
    label: "Follow-Up",
    subject: "Following up — {{role}} application at {{company}}",
    body: `Hi {{name}},

I wanted to follow up on my application for the {{role}} position at {{company}} that I submitted on {{date}}.

I'm very excited about this opportunity and remain confident that my background in {{skills}} would allow me to contribute meaningfully to the team.

Please let me know if there's any additional information I can provide. I'd love to discuss next steps.

Thank you for your time,
{{yourName}}`,
  },
];

const STATS = [
  { label: "Emails Sent", value: "0", change: "Get started →" },
  { label: "Reply Rate", value: "—", change: "Track responses" },
  { label: "Interviews Booked", value: "0", change: "Land your first" },
];

const TIPS = [
  {
    icon: "🎯",
    title: "Personalise every message",
    body: "Reference something specific about the person or company. Generic messages get ignored.",
  },
  {
    icon: "✂️",
    title: "Keep it short",
    body: "Aim for 3–5 sentences. Busy professionals won't read a wall of text from a stranger.",
  },
  {
    icon: "⏰",
    title: "Follow up once",
    body: "If you don't hear back in 5–7 days, send one polite follow-up. After that, move on.",
  },
];

const MailMerge = () => {
  const [activeTemplate, setActiveTemplate] = useState(TEMPLATES[0]);
  const [fields, setFields] = useState({
    name: "",
    company: "",
    role: "",
    topic: "",
    yourName: "",
    year: "",
    major: "",
    skills: "",
    date: "",
  });

  const renderPreview = (text: string) => {
    return text.replace(/\{\{(\w+)\}\}/g, (_, key) => {
      const value = fields[key as keyof typeof fields];
      if (value) {
        return `<mark class="mailmerge-highlight">${value}</mark>`;
      }
      return `<span class="mailmerge-placeholder">{{${key}}}</span>`;
    });
  };

  return (
    <div className="mailmerge-page">
      <StudentNavbar />

      <main className="mailmerge-main">
        {/* ========================
            HERO
        ======================== */}
        <section className="mailmerge-hero">
          <div className="mailmerge-hero-content">
            <p className="mailmerge-eyebrow">COLD OUTREACH</p>

            <h1 className="mailmerge-title">
              Reach out smarter,
              <span> not harder.</span>
            </h1>

            <p className="mailmerge-subtitle">
              Craft personalised outreach messages at scale. Fill in your
              variables, pick a template, and send messages that actually get
              replies.
            </p>
          </div>
        </section>

        {/* ========================
            STATS BAR
        ======================== */}
        <section className="mailmerge-stats-section">
          <div className="mailmerge-stats-inner">
            {STATS.map((stat) => (
              <div key={stat.label} className="mailmerge-stat-card">
                <p className="mailmerge-stat-value">{stat.value}</p>
                <p className="mailmerge-stat-label">{stat.label}</p>
                <p className="mailmerge-stat-change">{stat.change}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ========================
            COMPOSER
        ======================== */}
        <section className="mailmerge-composer-section">
          <div className="mailmerge-composer-inner">
            <div className="mailmerge-section-header">
              <p className="mailmerge-eyebrow">COMPOSE</p>
              <h2>Build your message.</h2>
              <p className="mailmerge-section-sub">
                Fill in your variables on the left and watch the preview update
                in real time on the right.
              </p>
            </div>

            {/* Template picker */}
            <div className="mailmerge-template-picker">
              {TEMPLATES.map((tpl) => (
                <button
                  key={tpl.id}
                  onClick={() => setActiveTemplate(tpl)}
                  className={`mailmerge-template-btn${activeTemplate.id === tpl.id ? " mailmerge-template-btn--active" : ""}`}
                >
                  {tpl.label}
                </button>
              ))}
            </div>

            {/* Split panel composer */}
            <div className="mailmerge-composer">
              {/* LEFT: Variable Fields */}
              <div className="mailmerge-fields-panel">
                <p className="mailmerge-panel-label">Your Variables</p>

                <div className="mailmerge-field-group">
                  <label htmlFor="mm-yourName">Your Name</label>
                  <input
                    id="mm-yourName"
                    type="text"
                    placeholder="e.g. Raj Ratnam"
                    value={fields.yourName}
                    onChange={(e) =>
                      setFields({ ...fields, yourName: e.target.value })
                    }
                  />
                </div>

                <div className="mailmerge-field-group">
                  <label htmlFor="mm-name">Recipient Name</label>
                  <input
                    id="mm-name"
                    type="text"
                    placeholder="e.g. Priya"
                    value={fields.name}
                    onChange={(e) =>
                      setFields({ ...fields, name: e.target.value })
                    }
                  />
                </div>

                <div className="mailmerge-field-group">
                  <label htmlFor="mm-company">Company</label>
                  <input
                    id="mm-company"
                    type="text"
                    placeholder="e.g. Google"
                    value={fields.company}
                    onChange={(e) =>
                      setFields({ ...fields, company: e.target.value })
                    }
                  />
                </div>

                <div className="mailmerge-field-group">
                  <label htmlFor="mm-role">Role</label>
                  <input
                    id="mm-role"
                    type="text"
                    placeholder="e.g. SWE Intern"
                    value={fields.role}
                    onChange={(e) =>
                      setFields({ ...fields, role: e.target.value })
                    }
                  />
                </div>

                <div className="mailmerge-field-group">
                  <label htmlFor="mm-topic">Topic / Product</label>
                  <input
                    id="mm-topic"
                    type="text"
                    placeholder="e.g. search algorithms"
                    value={fields.topic}
                    onChange={(e) =>
                      setFields({ ...fields, topic: e.target.value })
                    }
                  />
                </div>

                <div className="mailmerge-field-group">
                  <label htmlFor="mm-skills">Skills</label>
                  <input
                    id="mm-skills"
                    type="text"
                    placeholder="e.g. React, TypeScript"
                    value={fields.skills}
                    onChange={(e) =>
                      setFields({ ...fields, skills: e.target.value })
                    }
                  />
                </div>

                <div className="mailmerge-field-row">
                  <div className="mailmerge-field-group">
                    <label htmlFor="mm-year">Year</label>
                    <input
                      id="mm-year"
                      type="text"
                      placeholder="e.g. 2nd"
                      value={fields.year}
                      onChange={(e) =>
                        setFields({ ...fields, year: e.target.value })
                      }
                    />
                  </div>
                  <div className="mailmerge-field-group">
                    <label htmlFor="mm-major">Major</label>
                    <input
                      id="mm-major"
                      type="text"
                      placeholder="e.g. CS"
                      value={fields.major}
                      onChange={(e) =>
                        setFields({ ...fields, major: e.target.value })
                      }
                    />
                  </div>
                </div>

                <button className="mailmerge-copy-btn primary-btn">
                  Copy Message →
                </button>
              </div>

              {/* RIGHT: Preview */}
              <div className="mailmerge-preview-panel">
                <p className="mailmerge-panel-label">Live Preview</p>

                <div className="mailmerge-preview-email">
                  <div className="mailmerge-preview-meta">
                    <div className="mailmerge-preview-row">
                      <span className="mailmerge-preview-meta-label">To:</span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html:
                            renderPreview("{{name}}") ||
                            '<span class="mailmerge-placeholder">{{name}}</span>',
                        }}
                      />
                      {fields.company && (
                        <span className="mailmerge-preview-company">
                          @ {fields.company}
                        </span>
                      )}
                    </div>
                    <div className="mailmerge-preview-row">
                      <span className="mailmerge-preview-meta-label">
                        Subject:
                      </span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: renderPreview(activeTemplate.subject),
                        }}
                      />
                    </div>
                  </div>

                  <div
                    className="mailmerge-preview-body"
                    dangerouslySetInnerHTML={{
                      __html: renderPreview(activeTemplate.body).replace(
                        /\n/g,
                        "<br />",
                      ),
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================
            TIPS SECTION
        ======================== */}
        <section className="mailmerge-tips-section">
          <div className="mailmerge-tips-inner">
            <div className="mailmerge-section-header">
              <p className="mailmerge-eyebrow">BEST PRACTICES</p>
              <h2>Tips for cold outreach that works.</h2>
            </div>

            <div className="mailmerge-tips-grid">
              {TIPS.map((tip) => (
                <div key={tip.title} className="mailmerge-tip-card">
                  <span className="mailmerge-tip-icon">{tip.icon}</span>
                  <h3>{tip.title}</h3>
                  <p>{tip.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MailMerge;
