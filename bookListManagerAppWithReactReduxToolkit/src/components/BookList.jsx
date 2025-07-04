import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../features/books/bookSlice.js';
const BookList = () => {
    const books = useSelector((state) => state.books);
    const dispatch = useDispatch();
    const handleRemove = (index) => {
        dispatch(removeBook(index));
    };

    return (
        <div>
            {books.length === 0 ? (
                <p>No books added yet.</p>
            ) : (
                <ul>
                    {books.map((book, index) => (
                        <li key={index}>
                            {book}
                            <button onClick={() => handleRemove(index)}>Delete</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}
export default BookList;