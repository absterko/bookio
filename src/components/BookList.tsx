import React, { useState } from "react";

interface Book {
  id: number;
  title: string;
  author?: string;
  description?: string;
}

interface Props {
  books: Book[];
  onSelectBook: (book: Book) => void;
}

const BookList: React.FC<Props> = ({ books, onSelectBook }) => {
  const [filter, setFilter] = useState("");

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="p-6 bg-white shadow-md rounded-lg mb-20">
      <div className="mb-4">
        <input
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Filter by title..."
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <ul className="divide-y divide-gray-200">
        {filteredBooks.map((book) => (
          <li
            key={book.id}
            className="py-4 mt-2 bg-yellow-400 cursor-pointer flex flex-col border border-gray-200 rounded-lg"
            onClick={() => onSelectBook(book)}
          >
            <div className="flex items-center space-x-2 justify-between">
              <p className="text-lg ml-2 overflow-hidden text-ellipsis whitespace-nowrap">
                {book.title}
              </p>
              <i className="fas fa-search pr-2"></i>
            </div>
            <p className="text-sm ml-2 mt-1 truncate">
              {book.author || "Unknown Author"}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
