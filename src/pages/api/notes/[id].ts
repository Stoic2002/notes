import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../utils/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method === 'GET') {
    try {
      const note = await prisma.note.findUnique({
        where: { id: String(id) },
      });
      if (note) {
        res.status(200).json(note);
      } else {
        res.status(404).json({ message: 'Note not found' });
      }
    } catch (e) {
        console.log(e);
      res.status(500).json({ message: 'Error fetching note' });
    }
  } else if (req.method === 'PUT') {
    const { title, content } = req.body;
    try {
      const updatedNote = await prisma.note.update({
        where: { id: String(id) },
        data: { title, content },
      });
      res.status(200).json(updatedNote);
    } catch (e) {
        console.log(e);
      res.status(500).json({ message: 'Error updating note' });
    }
  } else if (req.method === 'DELETE') {
    try {
      await prisma.note.delete({
        where: { id: String(id) },
      });
      res.status(204).end();
    } catch (e) {
        console.log(e);
      res.status(500).json({ message: 'Error deleting note' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}