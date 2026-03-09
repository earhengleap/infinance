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
  [![Hono](https://img.shields.io/badge/Hono-API-E36002?style=for-the-badge&logo=hono)](https://hono.dev/)
  [![Drizzle ORM](https://img.shields.io/badge/Drizzle_ORM-v0.45-C5F74F?style=for-the-badge&logo=drizzle)](https://orm.drizzle.team/)
  [![Neon](https://img.shields.io/badge/Neon-Database-00E599?style=for-the-badge&logo=neon&logoColor=black)](https://neon.tech/)

  [![Zod](https://img.shields.io/badge/Zod-%233068b7.svg?style=for-the-badge&logo=zod&logoColor=white)](https://zod.dev/)
  [![TanStack Query](https://img.shields.io/badge/-TanStack_Query-FF4154?style=for-the-badge&logo=react-query&logoColor=white)](https://tanstack.com/query)
  [![TanStack Table](https://img.shields.io/badge/-TanStack_Table-000000?style=for-the-badge&logo=react-table&logoColor=white)](https://tanstack.com/table)
  [![Radix UI](https://img.shields.io/badge/-Radix_UI-161618?style=for-the-badge&logo=radix-ui&logoColor=white)](https://www.radix-ui.com/)
  [![Zustand](https://img.shields.io/badge/-Zustand-443e38?style=for-the-badge&logo=zustand&logoColor=white)](https://zustand-demo.pmnd.rs/)
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

### Frontend Ecosystem
- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **State Management**: [Zustand](https://zustand-demo.pmnd.rs/) & [TanStack Query v5](https://tanstack.com/query)
- **Forms**: [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)
- **UI Components**: [Shadcn/ui](https://ui.shadcn.com/) powered by [Radix UI](https://www.radix-ui.com/)
- **Charts**: [Recharts](https://recharts.org/)
- **Icons**: [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **Utils**: `date-fns`, `clsx`, `tailwind-merge`

### Backend & Infrastructure
- **API Engine**: [Hono](https://hono.dev/)
- **Database**: [PostgreSQL (Neon Serverless)](https://neon.tech/)
- **ORM**: [Drizzle ORM](https://orm.drizzle.team/)
- **Auth**: [Clerk v7](https://clerk.com/)
- **Deployment**: [Vercel](https://vercel.com/)

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

## 📦 Project Structure

- `app/` — Next.js App Router pages and API routes.
- `features/` — Encapsulated domain logic (Accounts, Categories, Transactions).
- `db/` — Drizzle schema and database configuration.
- `components/` — Shared UI components and layout.
- `providers/` — React Context providers (Query, UI, Auth).
- `hooks/` — Global re-usable hooks.

## 📄 License
Distributed under the MIT License. See `LICENSE` for more information.

---
Developed by **[Ear Hengleap](https://github.com/earhengleap)**
