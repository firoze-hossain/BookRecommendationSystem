import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { Card, Button } from 'react-bootstrap';

function Profile() {
    const [searchHistory, setSearchHistory] = useState([]);

    useEffect(() => {
        const fetchSearchHistory = async () => {
            const token = localStorage.getItem('token');
            const config = {
                headers: { Authorization: `Bearer ${token}` }
            };
            const response = await axios.get(`http://localhost:8085/api/v1/books/history`,config);
            setSearchHistory(response.data);
        };
        fetchSearchHistory();
    }, []);

    return (
        <div className="container mt-5">
            <h1>Search History</h1>
            <div className="row">
                {searchHistory.map((history) => (
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
        </div>
    );
}

export default Profile;
