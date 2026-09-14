For InternFoxx, I would make the **student dashboard task-oriented**, not a generic social feed. The student should immediately see what to do next, internship progress, applications, and the tools you've planned.

```text
┌──────────────────────────────────────────────────────────────────────────────────────────┐
│ InternFoxx                                      Search...        🔔   Raj 👤    ▾         │
├────────────────┬─────────────────────────────────────────────────────────────────────────┤
│                │                                                                         │
│  🏠 Dashboard  │  Good morning, Raj 👋                                                   │
│                │  Let's get you one step closer to your next opportunity.                │
│  🎯 My Journey │                                                                         │
│                │  ┌───────────────────────────────────────────────────────────────────┐  │
│  💼           │  │ 30-DAY INTERNSHIP JOURNEY                                           │  │
│  Applications  │  │                                                                   │  │
│                │  │   ████████████████████░░░░░░░░░░░░░░░░░░░░  18 / 30 days           │  │
│  🎓 Courses    │  │                                                                   │  │
│                │  │   Current stage: Outreach                                         │  │
│  📚 Resources  │  │   Next: Send 5 personalized cold messages                         │  │
│                │  │                                                                   │  │
│  🤖 ATS        │  │                              [ Continue Journey → ]                 │  │
│  Checker       │  └───────────────────────────────────────────────────────────────────┘  │
│                │                                                                         │
│  📄 Resume     │  ┌──────────────────┐ ┌──────────────────┐ ┌───────────────────────┐ │
│                │  │ Applications     │ │ Interviews       │ │ Response Rate         │ │
│  ✉️ Cold       │  │                  │ │                  │ │                       │ │
│  Outreach      │  │       24         │ │        5         │ │        21%            │ │
│                │  │   +4 this week   │ │   +2 this week   │ │    +6% this week      │ │
│                │  └──────────────────┘ └──────────────────┘ └───────────────────────┘ │
│                │                                                                         │
│  ⚙ Settings   │  Recent Applications                             Upcoming               │
│                │  ┌──────────────────────────────────────┐       ┌────────────────────┐ │
│                │  │ Company        Role          Status  │       │ Interview          │ │
│                │  │─────────────────────────────────────│       │                    │ │
│                │  │ Google         SWE Intern    🟡      │       │ Acme Corp          │ │
│                │  │ Microsoft      SDE Intern    🔵      │       │ Tomorrow • 11:00 AM│ │
│                │  │ Startup XYZ    Frontend      🟢      │       │                    │ │
│                │  │ Amazon         SDE Intern    🔴      │       │ [ Prepare → ]      │ │
│                │  └──────────────────────────────────────┘       └────────────────────┘ │
│                │                                                                         │
│                │  Recommended Actions                                                     │
│                │  ┌───────────────────┐ ┌───────────────────┐ ┌──────────────────────┐ │
│                │  │ 📄 Improve Resume │ │ ✉️ Start Outreach │ │ 🎯 Find Opportunities│ │
│                │  │                   │ │                   │ │                      │ │
│                │  │ ATS Score: 72     │ │ 12 contacts left  │ │ 34 new matches      │ │
│                │  │ [ Improve → ]     │ │ [ Start → ]       │ │ [ Explore → ]       │ │
│                │  └───────────────────┘ └───────────────────┘ └──────────────────────┘ │
│                │                                                                         │
└────────────────┴─────────────────────────────────────────────────────────────────────────┘
```

### The hierarchy I'd use

```text
Student Dashboard
│
├── Global Navbar
│   ├── Search
│   ├── Notifications
│   └── Profile
│
├── Sidebar
│   ├── Dashboard
│   ├── My Journey
│   ├── Applications
│   ├── Courses
│   ├── Resources
│   ├── ATS Checker
│   ├── Resume
│   ├── Cold Outreach
│   └── Settings
│
└── Main Content
    │
    ├── Welcome + next action
    │
    ├── 30-Day Internship Journey
    │
    ├── Key Metrics
    │   ├── Applications
    │   ├── Interviews
    │   └── Response Rate
    │
    ├── Recent Applications
    │
    ├── Upcoming Interviews
    │
    └── Recommended Actions
        ├── Resume
        ├── Cold Outreach
        └── Opportunities
```

The **most important component should be the 30-day journey**, because that's your differentiator. The dashboard shouldn't just tell the student what has happened. It should answer **"What should I do next?"**

I would also keep **Applications** as a proper table/page rather than trying to cram every application onto the dashboard. The dashboard gets the summary, while the dedicated page gets filtering, status changes, notes, contacts, interview rounds, and so on. Human beings love turning a useful screen into an Excel spreadsheet with 47 columns, so we'll resist that particular tradition.
