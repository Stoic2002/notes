# Notes App

The Notes App is a simple web application for creating, editing, and deleting notes. This app is built using Next.js, Prisma ORM, PostgreSQL, and Tailwind CSS.

## Technologies Used

- [Next.js](https://nextjs.org/) - A React framework for production
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript
- [Prisma](https://www.prisma.io/) - ORM for Node.js and TypeScript
- [PostgreSQL](https://www.postgresql.org/) - Open-source relational database
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [React Icons](https://react-icons.github.io/react-icons/) - Popular icons for React projects

## Prerequisites

Before starting, make sure you have the following installed:

- Node.js (version 14 or higher)
- npm (typically installed with Node.js)
- PostgreSQL

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/Stoic2002/notes_app.git
   cd notes_app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the project root and add your database URL:
   ```bash
   DATABASE_URL="postgresql://username:password@localhost:5432/notes_app"
   ```

4. Push the Prisma schema to your database:
   ```bash
   npx prisma db push
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

   The app will run at `http://localhost:3000`.


## Prisma Schema

The Prisma schema defines the `Note` model, which is stored in the PostgreSQL database. Here’s an example of the schema:

```prisma
model Note {
  id        Int      @id @default(autoincrement())
  title     String
  content   String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

## Environment Variables

You need to configure the following environment variable in your `.env` file:

- `DATABASE_URL`: The URL of your PostgreSQL database.

  Example:
  ```env
  DATABASE_URL="postgresql://username:password@localhost:5432/notes_app"
  ```
