import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/books/actionCreators';
import booksData from '../../data/books.json';
import './BookForm.css';
import createBookWithID from '../../utils/createBookWithID';

const BookForm = () => {
    const [title, setTitle] = useState('');
    const [autor, setAutor] = useState('');
    const dispatch = useDispatch();

    const handelAddRandomBook = () => {
        const randomIndex = Math.floor(Math.random() * booksData.length);
        const randomBook = booksData[randomIndex];
        dispatch(addBook(createBookWithID(randomBook)));
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (title && autor) {
            dispatch(addBook(createBookWithID({ title, autor })));
            setTitle('');
            setAutor('');
        }
    }

    return (
        <div className='app-block book-form'>
            <h2>Add a New Book</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title: </label>
                    <input
                        type='text'
                        id='title'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="autor">Autor: </label>
                    <input
                        type='text'
                        id='autor'
                        value={autor}
                        onChange={(e) => setAutor(e.target.value)} />
                </div>
                <button type='submit'>Add Book</button>
                <button type="button" onClick={handelAddRandomBook}>Add Random</button>
            </form>
        </div>
    )
}

export default BookForm;