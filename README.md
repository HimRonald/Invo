# Next.js Fullstack Starter

A modern, type-safe fullstack starter kit built with Next.js 15, React 19, and Prisma. Features built-in authentication, API routes with Hono, and a component library using shadcn/ui.

## Motivation

I'm creating this starter kit to addresses common challenges when developing a fullstack application using Next.js. When working with a fullstack next app, the layer between the client and server is vague and often leads to confusion and errors. This starter kit aims to simplify and streamline the development process, providing a solid foundation for building scalable and maintainable fullstack applications.

- **Type Safety**: Ensures end-to-end type safety using Prisma's generated types and TypeScript
- **Authentication Complexity**: Implements Better Auth for secure, flexible and extendable authentication solution without the overhead of complex auth providers
- **Database Management**: Prisma ORM for simplified database access and type-safe queries
- **API Development**: Exclusive use of Hono for API development, providing great DX, type safety and performance
- **UI Development**: Tailwindcss and shadcn/ui for maintainable, customizable components without the complexity of styling systems

## Key Features

- **Type-safe Backend**: Uses [Prisma](https://www.prisma.io/) with SQLite and generated client types
- **Modern Authentication**: Implements [Better Auth](https://github.com/better-auth/better-auth) with email/password and cross-domain cookie support
- **API Layer**: Built with [Hono](https://hono.dev/), a fast, lightweight, and type-safe web framework
- **UI Components**: Uses [shadcn/ui](https://ui.shadcn.com/) with the New York style variant and neutral color scheme
- **Styling**: Implements [Tailwind CSS](https://tailwindcss.com/) with [CVA](https://cva.style/docs) for variant management

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

### Key Directories

- src/app : Next.js app router implementation with API routes and auth pages
- src/components/ui : shadcn/ui components with New York style variant
- src/server : Server-side logic with middleware and module patterns
- prisma : Database schema, migrations, and seed data
