# 🚀 Next.js Dashboard

A modern, full-stack dashboard application built with Next.js 15, featuring real-time data visualization, authentication, and a sleek user interface.

## ✨ Features

- 📊 **Interactive Dashboard** - Real-time revenue charts and analytics
- 👥 **Customer Management** - Complete CRUD operations for customer data
- 🧾 **Invoice System** - Create, edit, and manage invoices
- 🔐 **Authentication** - Secure login with NextAuth.js
- 📱 **Responsive Design** - Mobile-first approach with Tailwind CSS
- ⚡ **Performance Optimized** - Built with Next.js App Router and Turbopack
- 🗃️ **Database Integration** - PostgreSQL with type-safe queries
- 🎨 **Modern UI** - Beautiful components with Heroicons and custom fonts

## 🌟 Live Demo

**[View Live Application](https://acme-kisbr7g4x-hatems-projects-e664f35c.vercel.app/dashboard)**

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Database:** PostgreSQL
- **Authentication:** NextAuth.js 5.0 (Beta)
- **Icons:** Heroicons
- **Validation:** Zod
- **Package Manager:** pnpm
- **Deployment:** Vercel

## 📦 Dependencies

```json
{
  "dependencies": {
    "next": "latest",
    "react": "latest",
    "react-dom": "latest",
    "typescript": "5.7.3",
    "next-auth": "5.0.0-beta.25",
    "postgres": "^3.4.5",
    "tailwindcss": "3.4.17",
    "zod": "^3.24.1",
    "@heroicons/react": "^2.2.0",
    "bcryptjs": "^3.0.2",
    "clsx": "^2.1.1",
    "use-debounce": "^10.0.4"
  }
}
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm
- PostgreSQL database

### Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd nextjs-dashboard
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env
   ```

   Configure your `.env` file:

   ```env
   POSTGRES_URL="your-postgres-connection-string"
   NEXTAUTH_SECRET="your-nextauth-secret"
   NEXTAUTH_URL="http://localhost:3000"
   ```

4. **Run the development server**

   ```bash
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
nextjs-dashboard/
├── app/                    # Next.js App Router
│   ├── dashboard/         # Dashboard pages
│   ├── lib/              # Utilities and data fetching
│   ├── ui/               # Reusable UI components
│   └── query/            # API routes
├── public/               # Static assets
├── .next/               # Build output (auto-generated)
└── package.json         # Dependencies and scripts
```

## 🎯 Key Features

### Dashboard Analytics

- **Revenue Chart** - Visual representation of monthly revenue with [`RevenueChart`](app/ui/dashboard/revenue-chart.tsx)
- **Card Metrics** - Key performance indicators with [`CardWrapper`](app/ui/dashboard/cards.tsx)
- **Latest Invoices** - Recent transaction overview

### Database Operations

- **Data Fetching** - Optimized queries with PostgreSQL
- **Type Safety** - Full TypeScript integration with Zod validation
- **Performance** - Dynamic rendering with `force-dynamic` export

### API Routes

- **Query Endpoint** - [`/query`](app/query/route.ts) for database operations
- **Cleanup Utilities** - Database maintenance and duplicate removal

## 🔧 Available Scripts

```bash
# Development
pnpm dev          # Start development server with Turbopack

# Production
pnpm build        # Build for production
pnpm start        # Start production server

# Database
pnpm seed         # Seed database with sample data
```

## 🌐 Deployment

This application is deployed on **Vercel** with automatic deployments from the main branch.

### Deploy Your Own

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=<your-repo-url>)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure environment variables
4. Deploy automatically on every push

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📚 Learning Resources

This project follows the official [Next.js Learn Course](https://nextjs.org/learn). Perfect for:

- Learning Next.js App Router
- Understanding modern React patterns
- Building full-stack applications
- Database integration with PostgreSQL

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js Team](https://nextjs.org/) for the amazing framework
- [Vercel](https://vercel.com/) for hosting and deployment
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Heroicons](https://heroicons.com/) for beautiful icons

---

**Built with ❤️ using Next.js**
