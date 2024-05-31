import React, { useState } from 'react';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap'; // Import Bootstrap components

function Home() {
    const [query, setQuery] = useState('');
    const [books, setBooks] = useState([]);

    const searchBooks = async () => {
        const response = await axios.get(`http://localhost:8085/api/v1/books/search?query=${query}`); // Update API endpoint
        setBooks(response.data);
    };

    return (
        <div className="container mt-5">
            <h1 className="mb-4">Search Books</h1>
            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search books..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <div className="input-group-append">
                    <button className="btn btn-primary" type="button" onClick={searchBooks}>Search</button>
                </div>
            </div>
            <div className="row">
                {books.map((book) => (
                    <div key={book.id} className="col-lg-4 mb-4">
                        <Card>
                            <Card.Img variant="top" src={book.thumbnail} alt={book.title} />
                            <Card.Body>
                                <Card.Title>{book.title}</Card.Title>
                                <Card.Text>Author: {book.author}</Card.Text>
                                <Button variant="primary">View Details</Button>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
