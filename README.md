# InFinance - Modern Financial Dashboard

InFinance is a high-performance, professional financial management platform designed to help users track transactions, manage accounts, and visualize financial health with clarity and ease.

Built with a state-of-the-art tech stack, InFinance offers a seamless, responsive experience with real-time data visualization and secure authentication.

## 🚀 Technical Excellence

This project has been recently upgraded to the latest industry standards:

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router) for superior performance and developer experience.
- **UI Library**: [React 19](https://react.dev/) utilizing the latest concurrent features.
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with a modern CSS-first architecture.
- **Backend API**: [Hono](https://hono.dev/) for ultra-lightweight and fast edge-ready routes.
- **Database ORM**: [Drizzle ORM](https://orm.drizzle.team/) with [Neon](https://neon.tech/) (Serverless PostgreSQL).
- **Authentication**: [Clerk v7](https://clerk.com/) for secure, scalable user management.
- **Data Fetching**: [TanStack Query v5](https://tanstack.com/query/latest) for robust server state management.
- **Components**: [Shadcn/ui](https://ui.shadcn.com/) for beautiful, accessible UI components.

## ✨ Core Features

- **Intuitive Dashboard**: At-a-glance summary of income, expenses, and remaining balance.
- **Financial Visualization**: Interactive charts (Area, Bar, Line, Pie) for analyzing spending patterns.
- **Account Management**: Seamlessly create and manage multiple financial accounts.
- **Transaction Tracking**: Detailed transaction history with category tagging and notes.
- **CSV Data Import**: Bulk upload transactions via CSV for easy migration.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop viewing.
- **Theme Support**: Premium look and feel with Tailwind CSS v4's dynamic spacing and color system.

## 🛠️ Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (Recommended runtime)
- Node.js (v20 or higher)

### Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/earhengleap/infinance.git
   cd infinance
   ```

2. **Install dependencies:**
   ```bash
   bun install
   ```

3. **Configure Environment Variables:**
   Create a `.env.local` file in the root directory and add the following:
   ```env
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_key
   CLERK_SECRET_KEY=your_key
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   DATABASE_URL=your_postgres_url
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   ```

4. **Initialize the Database:**
   ```bash
   bunx drizzle-kit push
   ```

5. **Run the development server:**
   ```bash
   bun dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📦 Project Structure

- `app/`: Next.js App Router pages and API routes.
- `components/`: Shared UI components and layout elements.
- `features/`: Specific domain logic (Accounts, Categories, Transactions, Summary) including state hooks and API clients.
- `db/`: Database schema and drizzle configuration.
- `providers/`: Context providers for Query, Sheets, and Authentication.
- `hooks/`: Custom React hooks for global utilities.

## 📄 License

This project is [MIT](https://choosealicense.com/licenses/mit/) licensed.

---
Built with ❤️ by [Ear Hengleap](https://github.com/earhengleap)
