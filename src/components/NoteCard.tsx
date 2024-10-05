import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

interface NoteCardProps {
  id: string;
  title: string;
  content: string;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const NoteCard: React.FC<NoteCardProps> = ({ id, title, content, onEdit, onDelete }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4 transition-all duration-300 hover:shadow-lg">
      <h3 className="text-xl font-semibold mb-2 text-purple-800">{title}</h3>
      <p className="text-gray-600 mb-4">{content}</p>
      <div className="flex justify-end">
        <button
          onClick={() => onEdit(id)}
          className="mr-2 text-pink-500 hover:text-pink-600 transition-colors duration-300"
          aria-label="Edit note"
        >
          <FaEdit size={20} />
        </button>
        <button
          onClick={() => onDelete(id)}
          className="text-red-500 hover:text-red-600 transition-colors duration-300"
          aria-label="Delete note"
        >
          <FaTrash size={20} />
        </button>
      </div>
    </div>
  );
};

export default NoteCard;