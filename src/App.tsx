import React, { useState } from "react";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";
import BookModal from "./components/BookModal";
import backgroundImage from "./assets/background.png";

interface Book {
  id: number;
  title: string;
  author?: string;
  description?: string;
}

const App: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const handleAddBook = (newBook: Omit<Book, "id">) => {
    setBooks([...books, { ...newBook, id: Date.now() }]);
  };

  const handleSelectBook = (book: Book) => {
    setSelectedBook(book);
  };

  const handleCloseModal = () => {
    setSelectedBook(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Bookio</h1>
        <p className="mb-8 text-2xl">Your digital library</p>
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:flex-1">
          <BookForm onAddBook={handleAddBook} />
        </div>
        <div className="md:flex-1">
          <BookList books={books} onSelectBook={handleSelectBook} />
        </div>
      </div>
      <footer className="flex justify-center items-center h-full">
        <img
          src={backgroundImage}
          alt="background"
          className="max-w-full max-h-full object-contain"
        ></img>
      </footer>

      {selectedBook && (
        <BookModal book={selectedBook} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default App;
