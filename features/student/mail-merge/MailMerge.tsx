/**
 * MailMerge.tsx
 * InternFoxx — Cold Outreach / Mail Merge page.
 * Interactive email template composer with live variable preview.
 *
 * Sections:
 *   1. StudentNavbar
 *   2. Hero
 *   3. Composer (template tabs + split panel: fields left, preview right)
 *   4. Tips
 */

'use client';

import React, { useState } from 'react';
import StudentNavbar from '@/components/navbar/StudentNavbar';
import './MailMerge.css';

/* ── Template definitions ─────────────────────────────────── */

interface Template {
  id: string;
  label: string;
  subject: string;
  body: string;
}

const TEMPLATES: Template[] = [
  {
    id: 'cold-intro',
    label: 'Cold Intro',
    subject: 'Aspiring {{role}} — Would love to connect, {{name}}',
    body: `Hi {{name}},

My name is {{yourName}}, and I'm a {{year}} studying {{major}}. I came across your profile and was really impressed by your work at {{company}}.

I'm passionate about {{topic}} and have been building skills in {{skills}}. I'd love to learn more about your journey and any advice you might have for someone trying to break into the industry.

Would you be open to a quick 15-minute chat at your convenience?

Thank you so much for your time,
{{yourName}}`,
  },
  {
    id: 'referral',
    label: 'Referral Request',
    subject: 'Referral Request for {{role}} Internship at {{company}}',
    body: `Hi {{name}},

I hope you're doing well! My name is {{yourName}}, a {{year}} majoring in {{major}}.

I noticed you work at {{company}} and I'm incredibly interested in the {{role}} internship opening. I've been honing my skills in {{skills}} and I believe I'd be a strong fit for the team.

I know this is a big ask, but would you be willing to refer me or point me in the right direction? I'd be happy to share my resume and portfolio.

Thanks so much, {{name}} — I really appreciate it.

Best,
{{yourName}}`,
  },
  {
    id: 'follow-up',
    label: 'Follow-Up',
    subject: 'Following up — {{role}} application at {{company}}',
    body: `Hi {{name}},

I wanted to follow up on my application for the {{role}} internship at {{company}}. I submitted my materials on {{date}} and am still very excited about the opportunity.

I've continued working on {{topic}} and recently expanded my experience in {{skills}}, which I believe aligns well with what your team is building.

I'd love to hear if there are any updates on the process. Please let me know if you need anything else from me.

Thank you again for your time,
{{yourName}}`,
  },
];

/* ── Fields state type ────────────────────────────────────── */

interface Fields {
  name: string;
  company: string;
  role: string;
  yourName: string;
  topic: string;
  skills: string;
  year: string;
  major: string;
  date: string;
}

const INITIAL_FIELDS: Fields = {
  name: '',
  company: '',
  role: '',
  yourName: '',
  topic: '',
  skills: '',
  year: '',
  major: '',
  date: '',
};

/* ── Tips data ────────────────────────────────────────────── */

const TIPS = [
  {
    icon: '✍️',
    title: 'Personalise every message',
    body: "Generic emails get ignored. Reference a specific project, article, or achievement of the recipient to show you've done your homework.",
  },
  {
    icon: '⚡',
    title: 'Keep it under 150 words',
    body: "Recruiters and professionals are busy. Get to the point fast — who you are, why you're reaching out, and what you're asking for.",
  },
  {
    icon: '📅',
    title: 'Follow up exactly once',
    body: "If you don't hear back in 5–7 business days, send a single polite follow-up. After that, move on — chasing hurts your reputation.",
  },
];

/* ── Render preview with highlighted / placeholder spans ──── */

function renderPreview(
  text: string,
  fields: Fields
): React.ReactNode[] {
  /**
   * Splits the template string on {{variable}} tokens and maps each
   * segment to either plain text, a filled <mark>, or an empty <span>.
   */

  const parts = text.split(/({{[a-zA-Z]+}})/g);

  return parts.map((part, idx) => {
    const match = part.match(/^{{([a-zA-Z]+)}}$/);

    if (!match) {
      return <React.Fragment key={idx}>{part}</React.Fragment>;
    }

    const key = match[1] as keyof Fields;
    const value = fields[key];

    if (value) {
      return (
        <mark key={idx} className="mm-highlight">
          {value}
        </mark>
      );
    }

    return (
      <span key={idx} className="mm-placeholder">
        {`{{${key}}}`}
      </span>
    );
  });
}

/* ── Page component ───────────────────────────────────────── */

const MailMerge: React.FC = () => {
  const [activeTemplate, setActiveTemplate] = useState<string>(
    TEMPLATES[0].id
  );
  const [fields, setFields] = useState<Fields>(INITIAL_FIELDS);
  const [copied, setCopied] = useState(false);

  /* Derive current template object */
  const template =
    TEMPLATES.find((t) => t.id === activeTemplate) ?? TEMPLATES[0];

  /* Update a single field */
  const handleFieldChange = (
    key: keyof Fields,
    value: string
  ) => {
    setFields((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  /* Copy plain-text body to clipboard */
  const handleCopy = async () => {
    const plain = template.body.replace(
      /{{([a-zA-Z]+)}}/g,
      (_, k) => {
        const val = fields[k as keyof Fields];
        return val || `{{${k}}}`;
      }
    );

    try {
      await navigator.clipboard.writeText(plain);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* Clipboard API unavailable — silent fail */
    }
  };

  return (
    <div className="mailmerge-page">
      <StudentNavbar />

      <main className="mailmerge-main">
        {/* HERO */}
        <section className="mailmerge-hero">
          <div className="mailmerge-hero-inner">
            <p className="mailmerge-eyebrow">Cold Outreach</p>

            <h1 className="mailmerge-title">
              Reach out smarter,{' '}
              <span className="gradient-text">not harder.</span>
            </h1>

            <p className="mailmerge-subtitle">
              Fill in your details once and instantly generate personalised
              cold emails that sound human — not like a mass blast.
            </p>
          </div>
        </section>

        {/* COMPOSER */}
        <section className="mailmerge-composer">
          <div className="mailmerge-composer-inner">
            {/* Template tabs */}
            <div className="mm-tabs" role="tablist">
              {TEMPLATES.map((t) => (
                <button
                  key={t.id}
                  role="tab"
                  aria-selected={activeTemplate === t.id}
                  className={`mm-tab${
                    activeTemplate === t.id
                      ? ' mm-tab--active'
                      : ''
                  }`}
                  onClick={() => setActiveTemplate(t.id)}
                >
                  {t.label}
                </button>
              ))}
            </div>

            {/* Split panel */}
            <div className="mm-split">
              {/* Left: Fields */}
              <div className="mm-fields-panel">
                <p className="mm-panel-title">Your Details</p>

                {/* Your name */}
                <div className="mm-field">
                  <label htmlFor="mm-yourName">Your Name</label>
                  <input
                    id="mm-yourName"
                    type="text"
                    placeholder="e.g. Alex Johnson"
                    value={fields.yourName}
                    onChange={(e) =>
                      handleFieldChange(
                        'yourName',
                        e.target.value
                      )
                    }
                  />
                </div>

                {/* Recipient name */}
                <div className="mm-field">
                  <label htmlFor="mm-name">Recipient Name</label>
                  <input
                    id="mm-name"
                    type="text"
                    placeholder="e.g. Sarah"
                    value={fields.name}
                    onChange={(e) =>
                      handleFieldChange(
                        'name',
                        e.target.value
                      )
                    }
                  />
                </div>

                {/* Company */}
                <div className="mm-field">
                  <label htmlFor="mm-company">Company</label>
                  <input
                    id="mm-company"
                    type="text"
                    placeholder="e.g. Stripe"
                    value={fields.company}
                    onChange={(e) =>
                      handleFieldChange(
                        'company',
                        e.target.value
                      )
                    }
                  />
                </div>

                {/* Role */}
                <div className="mm-field">
                  <label htmlFor="mm-role">Role / Position</label>
                  <input
                    id="mm-role"
                    type="text"
                    placeholder="e.g. Software Engineering"
                    value={fields.role}
                    onChange={(e) =>
                      handleFieldChange(
                        'role',
                        e.target.value
                      )
                    }
                  />
                </div>

                {/* Topic */}
                <div className="mm-field">
                  <label htmlFor="mm-topic">
                    Topic / Interest
                  </label>
                  <input
                    id="mm-topic"
                    type="text"
                    placeholder="e.g. product strategy, fintech"
                    value={fields.topic}
                    onChange={(e) =>
                      handleFieldChange(
                        'topic',
                        e.target.value
                      )
                    }
                  />
                </div>

                {/* Skills */}
                <div className="mm-field">
                  <label htmlFor="mm-skills">Key Skills</label>
                  <input
                    id="mm-skills"
                    type="text"
                    placeholder="e.g. React, Python, SQL"
                    value={fields.skills}
                    onChange={(e) =>
                      handleFieldChange(
                        'skills',
                        e.target.value
                      )
                    }
                  />
                </div>

                {/* Year + Major */}
                <div className="mm-field-row">
                  <div className="mm-field">
                    <label htmlFor="mm-year">Year</label>
                    <input
                      id="mm-year"
                      type="text"
                      placeholder="e.g. 2nd year"
                      value={fields.year}
                      onChange={(e) =>
                        handleFieldChange(
                          'year',
                          e.target.value
                        )
                      }
                    />
                  </div>

                  <div className="mm-field">
                    <label htmlFor="mm-major">Major</label>
                    <input
                      id="mm-major"
                      type="text"
                      placeholder="e.g. CS"
                      value={fields.major}
                      onChange={(e) =>
                        handleFieldChange(
                          'major',
                          e.target.value
                        )
                      }
                    />
                  </div>
                </div>

                {/* Date */}
                {activeTemplate === 'follow-up' && (
                  <div className="mm-field">
                    <label htmlFor="mm-date">
                      Application Date
                    </label>
                    <input
                      id="mm-date"
                      type="text"
                      placeholder="e.g. September 10th"
                      value={fields.date}
                      onChange={(e) =>
                        handleFieldChange(
                          'date',
                          e.target.value
                        )
                      }
                    />
                  </div>
                )}

                {/* Copy button */}
                <button
                  className="mm-copy-btn"
                  onClick={handleCopy}
                >
                  {copied ? '✓ Copied!' : 'Copy Message'}
                </button>
              </div>

              {/* Right: Preview */}
              <div className="mm-preview-panel">
                <div className="mm-preview-email">
                  {/* Email header */}
                  <div className="mm-preview-header">
                    <div className="mm-preview-row">
                      <span className="mm-preview-label">
                        To
                      </span>

                      <span className="mm-preview-value">
                        {fields.name ? (
                          `${fields.name}${
                            fields.company
                              ? ` @ ${fields.company}`
                              : ''
                          }`
                        ) : (
                          <span className="mm-placeholder">
                            recipient
                          </span>
                        )}
                      </span>
                    </div>

                    <div className="mm-preview-row">
                      <span className="mm-preview-label">
                        Subject
                      </span>

                      <span className="mm-preview-value">
                        {renderPreview(
                          template.subject,
                          fields
                        )}
                      </span>
                    </div>
                  </div>

                  {/* Email body */}
                  <div className="mm-preview-body">
                    {renderPreview(
                      template.body,
                      fields
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TIPS */}
        <section className="mm-tips-section">
          <div className="mm-tips-inner">
            <p className="mm-tips-eyebrow">Pro Tips</p>

            <h2 className="mm-tips-heading">
              Write emails people actually reply to.
            </h2>

            <div className="mm-tips-grid">
              {TIPS.map((tip) => (
                <div
                  key={tip.title}
                  className="mm-tip-card"
                >
                  <span
                    className="mm-tip-icon"
                    aria-hidden="true"
                  >
                    {tip.icon}
                  </span>

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