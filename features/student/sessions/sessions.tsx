import StudentNavbar from '@/components/navbar/StudentNavbar';
import MentorCard from '@/components/student/mentor-card/MentorCard';
import './sessions.css';

const MENTORS = [
  {
    name: 'Priya Sharma',
    role: 'Senior SWE',
    company: 'Google',
    tags: ['Tech Skills', 'Interview Prep', 'Resume Review'],
    rating: 5,
    sessions: 142,
    avatarColor: '#7d6ce7',
  },
  {
    name: 'Arjun Mehta',
    role: 'Product Manager',
    company: 'Microsoft',
    tags: ['Career Advice', 'Networking', 'PM Prep'],
    rating: 5,
    sessions: 98,
    avatarColor: '#62b7aa',
  },
  {
    name: 'Sara Ali',
    role: 'Startup Founder',
    company: 'TechVenture',
    tags: ['Startup', 'Career Advice', 'Fundraising'],
    rating: 4,
    sessions: 77,
    avatarColor: '#e07a5f',
  },
  {
    name: 'Rahul Nair',
    role: 'Data Scientist',
    company: 'Amazon',
    tags: ['Tech Skills', 'Interview Prep', 'ML/AI'],
    rating: 5,
    sessions: 115,
    avatarColor: '#3d405b',
  },
  {
    name: 'Meera Patel',
    role: 'UX Designer',
    company: 'Figma',
    tags: ['Design', 'Portfolio Review', 'Career Advice'],
    rating: 4,
    sessions: 63,
    avatarColor: '#f2cc8f',
  },
  {
    name: 'Dev Kapoor',
    role: 'Backend Engineer',
    company: 'Stripe',
    tags: ['Tech Skills', 'System Design', 'Interview Prep'],
    rating: 5,
    sessions: 134,
    avatarColor: '#81b29a',
  },
];

const FILTERS = [
  'All',
  'Career Advice',
  'Resume Review',
  'Interview Prep',
  'Tech Skills',
  'Startup',
  'Design',
];

const STEPS = [
  {
    number: '01',
    title: 'Pick a mentor',
    description:
      'Browse mentors by expertise. Find someone whose experience matches what you need.',
  },
  {
    number: '02',
    title: 'Book a slot',
    description:
      'Choose a time that works for you. Sessions are 30–60 minutes, fully flexible.',
  },
  {
    number: '03',
    title: 'Join the call',
    description:
      'Meet 1-on-1 over video. Come prepared with your questions and goals.',
  },
];

const Sessions = () => {
  return (
    <div className="sessions-page">
      <StudentNavbar />

      <main className="sessions-main">
        {/* ========================
            HERO
        ======================== */}
        <section className="sessions-hero">
          <div className="sessions-hero-content">
            <p className="sessions-eyebrow">1-ON-1 LIVE SESSIONS</p>

            <h1 className="sessions-title">
              Learn from people who've
              <span> been there.</span>
            </h1>

            <p className="sessions-subtitle">
              Book personalized sessions with experienced mentors who can help
              you navigate your career, ace interviews, and grow your skills.
            </p>

            <div className="sessions-hero-cta">
              <a href="#mentors" className="primary-btn">
                Find a Mentor →
              </a>

              <div className="sessions-hero-stats">
                <span>
                  <strong>50+</strong> mentors
                </span>
                <span>
                  <strong>1,000+</strong> sessions held
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ========================
            HOW IT WORKS
        ======================== */}
        <section className="sessions-how">
          <div className="sessions-how-inner">
            <div className="sessions-section-header">
              <p className="sessions-eyebrow">HOW IT WORKS</p>
              <h2>Three steps to your next breakthrough.</h2>
            </div>

            <div className="sessions-steps">
              {STEPS.map((step) => (
                <div key={step.number} className="sessions-step">
                  <span className="sessions-step-number">{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================
            MENTOR GRID
        ======================== */}
        <section className="sessions-browse" id="mentors">
          <div className="sessions-browse-inner">
            <div className="sessions-section-header">
              <p className="sessions-eyebrow">EXPLORE</p>
              <h2>Browse our mentors.</h2>
              <p className="sessions-section-sub">
                Each mentor brings real-world experience in their field. Filter
                by what you need most.
              </p>
            </div>

            {/* Filter bar */}
            <div className="sessions-filters">
              {FILTERS.map((filter, i) => (
                <button
                  key={filter}
                  className={`sessions-filter-btn${i === 0 ? ' sessions-filter-btn--active' : ''}`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Grid */}
            <div className="sessions-grid">
              {MENTORS.map((mentor) => (
                <MentorCard key={mentor.name} {...mentor} />
              ))}
            </div>
          </div>
        </section>

        {/* ========================
            CTA BANNER
        ======================== */}
        <section className="sessions-cta-section">
          <div className="sessions-cta-card">
            <div>
              <p className="sessions-eyebrow sessions-eyebrow--light">
                BECOME A MENTOR
              </p>
              <h2>Share your experience. Help the next generation.</h2>
              <p>
                Join InternFoxx as a mentor and guide students toward
                their first big opportunity.
              </p>
            </div>

            <a href="#" className="sessions-cta-btn">
              Apply to Mentor →
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Sessions;

