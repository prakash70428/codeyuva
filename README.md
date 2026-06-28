# CodeYuva Academy

A modern educational platform built with Next.js 15, TypeScript, and Firebase — designed to help students learn DSA, MERN Stack, and ML with structured mentorship.

## Live Site

Deployed on Firebase Hosting via GitHub Actions CI/CD.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router, Turbopack) |
| Language | TypeScript |
| Styling | Tailwind CSS + Radix UI |
| Animations | Framer Motion |
| Forms | React Hook Form + Zod |
| Database | Firebase Firestore |
| AI | Google Genkit |
| Hosting | Firebase Hosting |
| CI/CD | GitHub Actions |

---

## Project Structure

```
src/
├── ai/               # Genkit AI flows and configuration
├── app/              # Next.js App Router pages
│   ├── page.tsx      # Home page
│   ├── blog/         # Blog and article pages
│   └── dsa/          # DSA tracker page
├── components/
│   ├── layout/       # Navbar, Footer, Section wrappers
│   ├── sections/     # Page sections (Hero, Courses, Mentors, etc.)
│   └── ui/           # Reusable UI primitives
├── hooks/            # Custom React hooks
├── lib/              # Firebase config, utilities
└── types/            # Shared TypeScript types
```

---

## Local Setup

### Prerequisites
- Node.js 18+
- npm or yarn
- Firebase project (for Firestore)

### Steps

```bash
# 1. Clone the repo
git clone https://github.com/prakash70428/codeyuva.git
cd codeyuva

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env.local
# Fill in your Firebase config values in .env.local

# 4. Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Available Scripts

```bash
npm run dev          # Start dev server with Turbopack
npm run build        # Production build
npm run start        # Start production server
npm run lint         # ESLint check
npm run typecheck    # TypeScript type check (no emit)
npm test             # Run Jest tests
npm run genkit:dev   # Start Genkit AI dev server
```

---

## Environment Variables

Create a `.env.local` file at the root with the following:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
GOOGLE_GENAI_API_KEY=
```

> Never commit `.env.local` to version control. It is already in `.gitignore`.

---

## Architecture Decisions

- **App Router over Pages Router** — Enables React Server Components for static sections (hero, courses), reducing client-side JS bundle.
- **Firestore for contact form** — Serverless write-only contact storage; Firestore rules enforce schema and deny all reads publicly.
- **Genkit for AI** — Used for FAQ/blog summarization flows; decoupled from UI so it can be replaced independently.
- **Radix UI + Tailwind** — Accessible primitives with full styling control; no opinionated design system lock-in.

---

## Contributing

1. Create a feature branch: `git checkout -b feat/your-feature`
2. Make changes with clear commit messages (`feat:`, `fix:`, `refactor:`)
3. Open a Pull Request against `main`
4. Ensure lint and typecheck pass before requesting review

---

## Security

- Firestore rules enforce strict schema validation and deny all public reads
- Firebase credentials are stored as GitHub Secrets, never in code
- Contact form submissions are write-only; only Firebase admin can read them
