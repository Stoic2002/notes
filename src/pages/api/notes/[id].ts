import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../utils/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (typeof id !== 'string') {
    return res.status(400).json({ message: 'Invalid note ID' });
  }

  switch (req.method) {
    case 'GET':
      return handleGet(id, res);
    case 'PUT':
      return handlePut(id, req, res);
    case 'DELETE':
      return handleDelete(id, res);
    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

async function handleGet(id: string, res: NextApiResponse) {
  try {
    const note = await prisma.note.findUnique({ where: { id } });
    if (note) {
      return res.status(200).json(note);
    } else {
      return res.status(404).json({ message: 'Note not found' });
    }
  } catch (error) {
    console.error('Error fetching note:', error);
    return res.status(500).json({ message: 'Error fetching note' });
  }
}

async function handlePut(id: string, req: NextApiRequest, res: NextApiResponse) {
  const { title, content } = req.body;
  if (typeof title !== 'string' || typeof content !== 'string') {
    return res.status(400).json({ message: 'Invalid title or content' });
  }
  try {
    const updatedNote = await prisma.note.update({
      where: { id },
      data: { title, content },
    });
    return res.status(200).json(updatedNote);
  } catch (error) {
    console.error('Error updating note:', error);
    return res.status(500).json({ message: 'Error updating note' });
  }
}

async function handleDelete(id: string, res: NextApiResponse) {
  try {
    await prisma.note.delete({ where: { id } });
    return res.status(204).end();
  } catch (error) {
    console.error('Error deleting note:', error);
    return res.status(500).json({ message: 'Error deleting note' });
  }
}