import { useState } from 'react';
import './BookForm.css';

const BookForm = () => {
    const [title, setTitle] = useState('');
    const [autor, setAutor] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();

        if (title && autor) {
            console.log(title, autor);
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
                    <labe htmlFor="autor">Autor: </labe>
                    <input
                        type='text'
                        id='autor'
                        value={autor}
                        onChange={(e) => setAutor(e.target.value)} />
                </div>
                <button type='submit'>Add Book</button>
            </form>
        </div>
    )
}

export default BookForm;