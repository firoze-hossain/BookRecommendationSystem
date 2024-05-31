import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

function Recommendations() {
    const [genre, setGenre] = useState('');
    const [recommendedBooks, setRecommendedBooks] = useState([]);

    const fetchRecommendations = async () => {
        const token = localStorage.getItem('token');
        const decoded = jwtDecode(token);
        const response = await axios.get(`/api/recommendations?genre=${genre}`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        setRecommendedBooks(response.data);
    };

    useEffect(() => {
        if (genre) {
            fetchRecommendations();
        }
    }, [genre]);

    return (
        <div>
            <h1>Recommendations</h1>
            <input
                type="text"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
            />
            <button onClick={fetchRecommendations}>Get Recommendations</button>
            <div>
                {recommendedBooks.map((book) => (
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

export default Recommendations;
