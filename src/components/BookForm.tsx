import React, { useState } from "react";

interface Book {
  title: string;
  author?: string;
  description?: string;
}

interface Props {
  onAddBook: (book: Book) => void;
}

const BookForm: React.FC<Props> = ({ onAddBook }) => {
  const [book, setBook] = useState<Book>({
    title: "",
    author: "",
    description: "",
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onAddBook(book);
    setBook({ title: "", author: "", description: "" });
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
        <input
          type="text"
          required
          placeholder="Title"
          className="border p-2"
          maxLength={30}
          value={book.title}
          onChange={(e) => setBook({ ...book, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Author"
          className="border p-2"
          maxLength={30}
          value={book.author}
          onChange={(e) => setBook({ ...book, author: e.target.value })}
        />
        <textarea
          placeholder="Description"
          className="border p-2"
          maxLength={300}
          rows={5}
          value={book.description}
          onChange={(e) => setBook({ ...book, description: e.target.value })}
        ></textarea>
        <button
          type="submit"
          className="bg-yellow-400 hover:bg-yellow-500 py-2 px-4 rounded"
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default BookForm;
