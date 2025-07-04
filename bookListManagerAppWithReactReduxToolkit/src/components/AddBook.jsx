import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../features/books/bookSlice.js';
const BookForm = () => {
    const [title, setTitle] = useState('');
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.trim() === '') return;
        dispatch(addBook(title));
        setTitle('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter book name"
            />
            <button type="submit">Add Book</button>
        </form>
    )
}
export default BookForm;