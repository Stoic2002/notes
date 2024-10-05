import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../utils/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (typeof id !== 'string') {
    return res.status(400).json({ message: 'Invalid note ID' });
  }

  try {
    switch (req.method) {
      case 'GET':
        const note = await prisma.note.findUnique({ where: { id } });
        if (note) {
          return res.status(200).json(note);
        }
        return res.status(404).json({ message: 'Note not found' });

      case 'PUT':
        const { title, content } = req.body;
        if (!title || !content) {
          return res.status(400).json({ message: 'Title and content are required' });
        }
        const updatedNote = await prisma.note.update({
          where: { id },
          data: { title, content },
        });
        return res.status(200).json(updatedNote);

      case 'DELETE':
        await prisma.note.delete({ where: { id } });
        return res.status(204).end();

      default:
        res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (e) {
    return res.status(500).json({ message: 'Internal server error' });
  }
}