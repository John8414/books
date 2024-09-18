import { useEffect, useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import axios from 'axios';

// const setupOrder = (arr) => {
//   for (var i = 0; i < arr.length; i++) {
//     for (var j = 0; j < arr.length - i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         var temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// };
// console.log(setupOrder([2, 4, 1, 0, 5, 8]));
function App() {
  const [books, setBooks] = useState([]);


};
useEffect(() => {
  fetchBooks();
}, []);
const editBookById = (id, newTitle) => {
  const updatedBooks = books.map((book) => {
    if (book.id === id) {
      return { ...book, title: newTitle };
    }

    return book;
  });

  setBooks(updatedBooks);
};

const deleteBookById = (id) => {
  const updatedBooks = books.filter((book) => {
    return book.id !== id;
  });

  setBooks(updatedBooks);
};

const createBook = async (title) => {

  const response = await axios.post("http://localhost:3001/books", {
    title
  });

  const updatedBooks = [
    ...books, response.data
  ];
  setBooks(updatedBooks);
};

return (
  <div className="app">
    <h1>Reading List</h1>
    <BookList onEdit={editBookById} books={books} onDelete={deleteBookById} />
    <BookCreate onCreate={createBook} />
  </div>
);

export default App;