import { useState, useEffect } from 'react';
import Head from 'next/head';
import NoteForm from '../components/NoteForm';
import NoteList from '../components/NoteList';

interface Note {
  id: string;
  title: string;
  content: string;
}

export default function Home() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [editingNote, setEditingNote] = useState<Note | null>(null);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    const res = await fetch('/api/notes');
    const data = await res.json();
    setNotes(data);
  };

  const handleSubmit = async (title: string, content: string) => {
    if (editingNote) {
      await fetch(`/api/notes/${editingNote.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, content }),
      });
      setEditingNote(null);
    } else {
      await fetch('/api/notes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, content }),
      });
    }
    fetchNotes();
  };

  const handleEdit = (id: string) => {
    const noteToEdit = notes.find((note) => note.id === id);
    if (noteToEdit) {
      setEditingNote(noteToEdit);
    }
  };

  const handleDelete = async (id: string) => {
    await fetch(`/api/notes/${id}`, { method: 'DELETE' });
    fetchNotes();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-red-100">
      <Head>
        <title>Notes App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center text-purple-800">My Notes</h1>
        <div className="max-w-2xl mx-auto">
          <NoteForm
            onSubmit={handleSubmit}
            initialNote={editingNote}
            onCancel={() => setEditingNote(null)}
          />
          <NoteList notes={notes} onEdit={handleEdit} onDelete={handleDelete} />
        </div>
      </main>
    </div>
  );
}