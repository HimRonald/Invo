# Invo.

![Invo](https://github.com/user-attachments/assets/e272a961-7e0e-4133-b0dc-a1df631104e0)

A Invoice Generator.

A modern, type-safe fullstack starter For Next 15. Features built-in database mangament with Prisma ORM, authentication with better-auth, API routes with Hono, and a component library with shadcn/ui. From Bong Maneth

## Usage

1. Clone and install dependencies:

```bash
git clone https://github.com/HimRonald/Invo
cd Invo
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

