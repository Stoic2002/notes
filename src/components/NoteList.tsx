import React from 'react';
import NoteCard from './NoteCard';

interface Note {
  id: string;
  title: string;
  content: string;
}

interface NoteListProps {
  notes: Note[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const NoteList: React.FC<NoteListProps> = ({ notes, onEdit, onDelete }) => {
  return (
    <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {notes.map((note) => (
        <NoteCard
          key={note.id}
          id={note.id}
          title={note.title}
          content={note.content}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default NoteList;