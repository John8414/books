import { useState } from 'react';
import BookCreate from './components/BookCreate';

function App() {
  const [books, setBooks] = useState([])

  const createBook = (title) => {
    console.log('createBook', title)
    const updateBook = [
      ...books,
      {id:Math.round(Math.random()*9999),
      title}
    ]
  }
 
  return (
    <div>
      <BookCreate onCreate={createBook} />
    </div>
  )
}

export default App;