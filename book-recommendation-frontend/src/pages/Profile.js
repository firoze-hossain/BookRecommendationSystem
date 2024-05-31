import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';


function Profile() {
    const [searchHistory, setSearchHistory] = useState([]);

    useEffect(() => {
        const fetchSearchHistory = async () => {
            const token = localStorage.getItem('token');
            const decoded = jwtDecode(token);
            const response = await axios.get(`/api/user/${decoded.sub}/search-history`);
            setSearchHistory(response.data);
        };
        fetchSearchHistory();
    }, []);

    return (
        <div>
            <h1>Search History</h1>
            <div>
                {searchHistory.map((history) => (
                    <div key={history.id}>
                        <h2>{history.book.title}</h2>
                        <p>{history.book.author}</p>
                        <img src={history.book.thumbnail} alt={history.book.title} />
                        <p>Genre: {history.book.genre}</p>
                        <p>Search Date: {history.searchDate}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Profile;
