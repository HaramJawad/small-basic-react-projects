import React from 'react';
import AddBook from './components/AddBook';
import BookList from './components/BookList';
import './App.css'

function App() {
 

  return (
     <div className="App">
      <h1>My Book List 📚</h1>
      <AddBook/>   {/* Just import and use */}
      <BookList />
    </div>
  )
}

export default App
