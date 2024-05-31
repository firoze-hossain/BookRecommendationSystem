import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Pagination, Button } from 'react-bootstrap';

function Profile() {
    const [searchHistory, setSearchHistory] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [booksPerPage] = useState(5); // Number of books per page

    useEffect(() => {
        const fetchSearchHistory = async () => {
            const token = localStorage.getItem('token');
            const config = {
                headers: { Authorization: `Bearer ${token}` }
            };
            const response = await axios.get(`http://localhost:8085/api/v1/books/history`, config);
            setSearchHistory(response.data);
        };
        fetchSearchHistory();
    }, []);

    const indexOfLastBook = currentPage * booksPerPage;
    const indexOfFirstBook = indexOfLastBook - booksPerPage;
    const currentBooks = searchHistory.slice(indexOfFirstBook, indexOfLastBook);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const totalPages = Math.ceil(searchHistory.length / booksPerPage);

    return (
        <div className="container mt-5">
            <h1>Search History</h1>
            <div className="row">
                {currentBooks.map((history) => (
                    <div key={history.id} className="col-lg-4 mb-4">
                        <Card>
                            <Card.Img variant="top" src={history.book.thumbnail} alt={history.book.title} />
                            <Card.Body>
                                <Card.Title>{history.book.title}</Card.Title>
                                <Card.Text>Author: {history.book.author}</Card.Text>
                                <Card.Text>Genre: {history.book.genre}</Card.Text>
                                <Card.Text>Search Date: {history.searchDate}</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
            <div className="d-flex justify-content-center mt-3">
                <Pagination>
                    <Pagination.Item disabled={currentPage === 1} onClick={() => paginate(1)}>First</Pagination.Item>
                    <Pagination.Item disabled={currentPage === 1} onClick={() => paginate(currentPage - 1)}>Previous</Pagination.Item>
                    <Pagination.Item disabled={currentPage === totalPages} onClick={() => paginate(currentPage + 1)}>Next</Pagination.Item>
                    <Pagination.Item disabled={currentPage === totalPages} onClick={() => paginate(totalPages)}>Last</Pagination.Item>
                </Pagination>
            </div>
        </div>
    );
}

export default Profile;
