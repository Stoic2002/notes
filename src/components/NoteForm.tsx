import React, { useState, useEffect } from 'react';

interface Note {
  id: string;
  title: string;
  content: string;
}

interface NoteFormProps {
  onSubmit: (title: string, content: string) => void;
  initialNote: Note | null;
  onCancel: () => void;
}

const NoteForm: React.FC<NoteFormProps> = ({
  onSubmit,
  initialNote,
  onCancel,
}) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (initialNote) {
      setTitle(initialNote.title);
      setContent(initialNote.content);
    } else {
      setTitle('');
      setContent('');
    }
  }, [initialNote]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(title, content);
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8 bg-white p-6 rounded-lg shadow-md">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="title"
        className="w-full mb-4 p-2 border border-purple-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-800"
        required
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
        className="w-full mb-4 p-2 border border-purple-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-800"
        rows={4}
        required
      />
      <div className="flex justify-end space-x-2">
        {initialNote && (
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Batal
          </button>
        )}
        <button
          type="submit"
          className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          {initialNote ? 'Update' : 'Save'} Note
        </button>
      </div>
    </form>
  );
};

export default NoteForm;