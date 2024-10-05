import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../utils/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const notes = await prisma.note.findMany({
        orderBy: { createdAt: 'desc' },
      });
      res.status(200).json(notes);
    } catch (e) {
        console.log(e)
      res.status(500).json({ message: 'Error fetching notes' });
    }
  } else if (req.method === 'POST') {
    const { title, content } = req.body;
    try {
      const note = await prisma.note.create({
        data: { title, content },
      });
      res.status(201).json(note);
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: 'Error creating note' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}