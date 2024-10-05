import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../utils/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    switch (req.method) {
      case 'GET':
        const notes = await prisma.note.findMany({
          orderBy: { createdAt: 'desc' },
        });
        return res.status(200).json(notes);

      case 'POST':
        const { title, content } = req.body;
        if (!title || !content) {
          return res.status(400).json({ message: 'Title and content are required' });
        }
        const newNote = await prisma.note.create({
          data: { title, content },
        });
        return res.status(201).json(newNote);

      default:
        res.setHeader('Allow', ['GET', 'POST']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}