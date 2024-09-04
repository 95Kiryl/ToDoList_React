import './BookList.css';
import { useSelector } from 'react-redux';
const BookList = () => {
    const books = useSelector((state) => state.books);
    return (
        <div className='app-block book-list'>
            <h2>Book List</h2>
            {books.length === 0 ? (
                <p>No books availabel</p>
            ) : (
                <ul>
                    {books.map((book, i) => (
                        <li key={book.id}>
                            <div className='book-info'>
                                {++i}. {book.title} by {book.autor}
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default BookList