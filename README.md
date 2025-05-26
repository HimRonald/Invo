# Next.js Fullstack Starter

A modern, type-safe fullstack starter For Next 15. Features built-in database mangament with Prisma ORM, authentication with better-auth, API routes with Hono, and a component library with shadcn/ui. From Bong Maneth

## Usage

1. Clone and install dependencies:

```bash
git clone https://github.com/manethpak/next-fullstack-starter.git
cd next-fullstack-starter
pnpm install
```

2. Set up the database:

```bash
npx prisma generate
npx prisma db push
```

3. Start development server:

```bash
pnpm dev
```

## Project Structure

```bash
├── prisma/
│   ├── migrations/     # Database migration history
│   ├── data/           # Seed data and database files
│   └── schema.prisma   # Database schema definition
├── public/             # Static assets
├── src/
│   ├── app/           # Next.js app router pages and layouts
│   │   ├── api/       # API routes using Hono
│   │   └── auth/      # Authentication pages
│   ├── components/    # React components
│   │   ├── common/    # Shared components
│   │   ├── module/    # Feature-specific components
│   │   └── ui/        # shadcn/ui components
│   ├── generated/     # Generated Prisma client
│   ├── lib/           # Shared utilities
│   └── server/        # Server-side code
│       ├── factory/   # Factory patterns
│       ├── middleware/# Server middleware
│       └── module/    # Server modules

```

