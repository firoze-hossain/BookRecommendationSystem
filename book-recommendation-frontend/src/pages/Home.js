import React, { useState } from 'react';
import axios from 'axios';

function Home() {
    const [query, setQuery] = useState('');
    const [books, setBooks] = useState([]);

    const searchBooks = async () => {
        const response = await axios.get(`/api/search?query=${query}`);
        setBooks(response.data);
    };

    return (
        <div>
            <h1>Search Books</h1>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={searchBooks}>Search</button>
            <div>
                {books.map((book) => (
                    <div key={book.id}>
                        <h2>{book.title}</h2>
                        <p>{book.author}</p>
                        <img src={book.thumbnail} alt={book.title} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
