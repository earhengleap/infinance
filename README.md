<div align="center">
  <img src="./public/logo.svg" alt="InFinance Logo" width="200" />
  
  # InFinance

  ### A Premium Financial Management Dashboard
  
  [![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=nextdotjs)](https://nextjs.org/)
  [![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Bun](https://img.shields.io/badge/Bun-%23000000.svg?style=for-the-badge&logo=bun&logoColor=white)](https://bun.sh/)

  [![Clerk](https://img.shields.io/badge/Clerk-Authentication-6C47FF?style=for-the-badge&logo=clerk)](https://clerk.com/)
  [![Drizzle ORM](https://img.shields.io/badge/Drizzle_ORM-v0.45-C5F74F?style=for-the-badge&logo=drizzle)](https://orm.drizzle.team/)
  [![Neon](https://img.shields.io/badge/Neon-Database-00E599?style=for-the-badge&logo=neon&logoColor=black)](https://neon.tech/)
  [![Hono](https://img.shields.io/badge/Hono-API-E36002?style=for-the-badge&logo=hono)](https://hono.dev/)
</div>

---

## 🌟 Overview

**InFinance** is a high-performance, professional financial management platform designed to help users track transactions, manage accounts, and visualize financial health with clarity and ease. 

Built with the latest **Next.js 16 App Router** and **React 19**, it leverages **Tailwind CSS v4** for a cutting-edge UI/UX and **Hono** for blazing-fast edge API routes.

## ✨ Core Features

- 📊 **Dynamic Dashboard** — Real-time summary of income, expenses, and current balance.
- 📈 **Data Visualization** — Interactive Area, Bar, Line, and Pie charts for spending analysis.
- 💳 **Account Management** — Manage multiple bank accounts and credit cards in one place.
- 🏷️ **Categorization** — Tag transactions with custom categories for better tracking.
- 📂 **CSV Import** — Seamlessly bulk-upload transaction history.
- 🔐 **Secure Auth** — Enterprise-grade authentication powered by Clerk v7.
- 📱 **Mobile First** — Fully responsive design that feels native on any device.

## 🛠️ Tech Stack

### Frontend
- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Components**: [Shadcn/ui](https://ui.shadcn.com/)
- **State Management**: [TanStack Query v5](https://tanstack.com/query/latest)

### Backend & Database
- **API Engine**: [Hono](https://hono.dev/)
- **Database**: [PostgreSQL (Neon)](https://neon.tech/)
- **ORM**: [Drizzle ORM](https://orm.drizzle.team/)
- **Auth**: [Clerk v7](https://clerk.com/)

### Tooling
- **Package Manager**: [Bun](https://bun.sh/)
- **Validation**: [Zod](https://zod.dev/)
- **Date Handling**: [date-fns](https://date-fns.org/)

## 🚀 Getting Started

### 1. Prerequisites
- [Bun](https://bun.sh/) installed on your machine.
- A [Clerk](https://clerk.com/) account for authentication.
- A [Neon](https://neon.tech/) database instance.

### 2. Installation
```bash
git clone https://github.com/earhengleap/infinance.git
cd infinance
bun install
```

### 3. Environment Setup
Create a `.env.local` file:
```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=...
CLERK_SECRET_KEY=...
DATABASE_URL=...
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 4. Database Initialization
```bash
bunx drizzle-kit push
```

### 5. Launch
```bash
bun dev
```

Visit `http://localhost:3000` to see your dashboard in action!

## 📦 Deployment

The easiest way to deploy is via [Vercel](https://vercel.com/):

1. Push your code to GitHub.
2. Connect your repository to Vercel.
3. Configure the environment variables.
4. Deploy!

## 📄 License
Distributed under the MIT License. See `LICENSE` for more information.

---
Developed by **[Ear Hengleap](https://github.com/earhengleap)**
