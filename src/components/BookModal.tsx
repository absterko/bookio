import React from "react";

interface Book {
  title: string;
  author?: string;
  description?: string;
}

interface Props {
  book: Book;
  onClose: () => void;
}

const BookModal: React.FC<Props> = ({ book, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-gray-700 bg-opacity-50 flex justify-center items-center p-4">
      <div className="w-full max-w-3xl max-h-[90vh] bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-yellow-400 p-5 flex justify-between items-center">
          <h3 className="text-lg text-white overflow-hidden text-ellipsis whitespace-nowrap">
            {book.author || "Unknown Author"} : {book.title}
          </h3>
          <button onClick={onClose} className="text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <div className="bg-gray-50 p-5 overflow-y-auto">
          <p className="break-words">
            {book.description ||
              "Description not found. Perhaps it's a book of silence?"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookModal;
