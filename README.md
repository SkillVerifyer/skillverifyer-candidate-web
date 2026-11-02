# SkillVerifyer: Candidate Web

React + Vite + TypeScript app for candidates (CV upload, assessments, results).

## Setup

Node 24 and pnpm.

```bash
pnpm i
cp .env.example .env
pnpm dev     # http://localhost:3000
```

## Structure

```
src/
├── routes/        page entry points and routing
├── features/      one folder per area (auth, cv, assessment, results, interview)
├── shared/
│   ├── api/       http client
│   ├── components/
│   ├── config/
│   └── lib/       helpers
├── styles/
└── main.tsx
```

## Rules

- Branches: feat/ fix/ chore/ docs/ + short name. PRs go into `develop`.
- Conventional commits (feat:, fix:, chore:).
