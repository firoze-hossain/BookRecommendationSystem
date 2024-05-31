import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../Login.css'; // Optional for additional custom styles

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const login = async () => {
        const response = await axios.post('http://localhost:8085/api/v1/auth/authenticate', { email, password });
        localStorage.setItem('token', response.data.token);
        navigate('/');
    };

    return (
        <div className="container d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
            <div className="card p-4" style={{ width: '300px' }}>
                <h1 className="text-center">Login</h1>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter email"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter password"
                    />
                </div>
                <button className="btn btn-primary btn-block mt-3" onClick={login}>Login</button>
            </div>
        </div>
    );
}

export default Login;
