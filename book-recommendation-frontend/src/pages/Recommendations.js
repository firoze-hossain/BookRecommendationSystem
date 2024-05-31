import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Recommendations() {
    const [genre, setGenre] = useState('');
    const [recommendedBooks, setRecommendedBooks] = useState([]);

    const fetchRecommendations = async () => {
        const token = localStorage.getItem('token');
        const response = await axios.get(`http://localhost:8085/api/v1/books/recommendations?genre=${genre}`, {
            headers: {Authorization: `Bearer ${token}`},
        });
        setRecommendedBooks(response.data);
    };

    useEffect(() => {
        if (genre) {
            fetchRecommendations();
        }
    }, [genre]);

    return (
        <div className="container mt-5">
            <h1>Recommendations</h1>
            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter genre"
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                />
                <div className="input-group-append">
                    <button className="btn btn-primary" type="button" onClick={fetchRecommendations}>Get
                        Recommendations
                    </button>
                </div>
            </div>
            <div className="row">
                {recommendedBooks.map((book) => (
                    <div key={book.id} className="col-lg-4 mb-4">
                        <div className="card">
                            <img src={book.thumbnail} className="card-img-top" alt={book.title}/>
                            <div className="card-body">
                                <h5 className="card-title">{book.title}</h5>
                                <p className="card-text">Author: {book.author}</p>
                                {/* Add additional details if needed */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Recommendations;
