# SkillVerifyer - Client

React + Vite + TypeScript frontend for the SkillVerifyer platform.

Contains all three portals (candidate, recruiter, admin) in a single app with role-based routing.

## Setup

```bash
npm install
npm run dev     # starts on http://localhost:3000
```

## Structure

```
src/
├── auth/              # AuthProvider, RoleGuard, LoginPage
├── components/
│   ├── ui/            # Shared UI components (buttons, modals, tables)
│   └── layout/        # AppLayout, Sidebar
├── features/
│   ├── candidate/     # CV upload, assessment, interview room
│   ├── recruiter/     # Dashboard, leaderboard, trust score reports
│   └── admin/         # User management, settings
├── hooks/             # Custom React hooks
├── services/          # API client (axios)
├── types/             # TypeScript type definitions
└── utils/             # Helper functions
```

## Key Dependencies

- **React Router v7** — role-based routing
- **Tailwind CSS** — utility-first styling
- **Axios** — API client
- **Recharts** — trust score visualizations
- **Lucide React** — icons
