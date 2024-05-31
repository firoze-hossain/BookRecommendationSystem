import './App.css';
import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Recommendations from './pages/Recommendations';
import Register from './pages/Register';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
    };

    return (
        <Router>
            <div>
                <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout}/>
                <Routes>
                    <Route
                        path="/"
                        element={isLoggedIn ? <Home/> : <Navigate to="/login"/>}
                    />
                    <Route
                        path="/login"
                        element={<Login onLogin={handleLogin}/>}
                    />
                    <Route
                        path="/register"
                        element={<Register/>}
                    />
                    <Route
                        path="/profile"
                        element={isLoggedIn ? <Profile/> : <Navigate to="/login"/>}
                    />
                    <Route
                        path="/recommendations"
                        element={isLoggedIn ? <Recommendations/> : <Navigate to="/login"/>}
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
