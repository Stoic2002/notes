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
   git clone https://github.com/username/notes_app.git
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

## Usage

### Creating a New Note
To create a new note, click the "New Note" button on the homepage. This will open a form where you can enter the title and content of your note. Once you're done, click "Save" to add the note.

### Editing a Note
To edit a note, select the note from the list that you want to modify. The note will open in edit mode. After making the necessary changes, click "Save" to update the note.

### Deleting a Note
To delete a note, click the delete icon next to the note. A confirmation prompt will appear, asking if you're sure you want to delete the note. If confirmed, the note will be removed from the list.

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

## Deployment

For deployment, platforms like [Vercel](https://vercel.com/) or [Heroku](https://www.heroku.com/) are suitable as they support Next.js and PostgreSQL natively.

### Deployment Steps for Vercel:

1. Push your code to a repository on GitHub or GitLab.
2. Log in to [Vercel](https://vercel.com/), import your project from the repository, and follow the deployment instructions.
3. Set the required environment variables (e.g., `DATABASE_URL`) in the Vercel dashboard.
4. Deploy the application.

## Conclusion

The Notes App provides a simple and effective way to manage notes, with modern web technologies like Next.js and Prisma making it easy to extend and scale. Feel free to modify and customize it to suit your needs!
```

This version starts from the beginning, explaining the purpose of the app, the technologies used, and the setup instructions. Let me know if you'd like to make any changes!