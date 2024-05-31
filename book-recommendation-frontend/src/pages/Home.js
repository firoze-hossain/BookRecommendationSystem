import React, {useState} from 'react';
import axios from 'axios';
import {Card, Button, Modal} from 'react-bootstrap'; // Import Bootstrap components

function Home() {
    const [query, setQuery] = useState('');
    const [books, setBooks] = useState([]);
    const [selectedBook, setSelectedBook] = useState(null);

    const searchBooks = async () => {
        const token = localStorage.getItem('token');
        const config = {
            headers: {Authorization: `Bearer ${token}`}
        };

        try {
            const response = await axios.get(`http://localhost:8085/api/v1/books/search?query=${query}`, config); // Update API endpoint
            setBooks(response.data);
        } catch (error) {
            console.error("Error searching books", error);
        }
    };

    const handleViewDetails = (book) => {
        setSelectedBook(book);
    };

    const handleCloseModal = () => {
        setSelectedBook(null);
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
                            <Card.Img variant="top" src={book.thumbnail} alt={book.title}/>
                            <Card.Body>
                                <Card.Title>{book.title}</Card.Title>
                                <Card.Text>Author: {book.author}</Card.Text>
                                <Button variant="primary" onClick={() => handleViewDetails(book)}>View Details</Button>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
            <Modal show={selectedBook !== null} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{selectedBook?.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Author: {selectedBook?.author}</p>
                    <p>Genre: {selectedBook?.genre}</p>
                    <img src={selectedBook?.thumbnail} alt={selectedBook?.title} className="img-fluid"/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Home;
