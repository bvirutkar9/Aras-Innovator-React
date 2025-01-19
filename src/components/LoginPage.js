import React, { useState } from 'react';
import { LoginToken } from '../services/arasAmlService';
import crypto from 'crypto-js';
import '../LoginPageStyle.css'; // Import a separate CSS file for styling
function LoginPage({ onLoginSuccess }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const hash_pass = crypto.MD5(password).toString(crypto.enc.Hex); 
            const data = await LoginToken(username, hash_pass);
            if (data) {
                setError(null);
                console.log('Token:', data.access_token);
                onLoginSuccess(); // Notify parent component of successful login
            }
        } catch (err) {
            setError('Login failed. Please check your credentials.');
            console.error('Error during login:', err);
        }
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <h1>Login</h1>
                <form onSubmit={handleLogin}>
                    <div className="input-group">
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            className="input-field"
                            placeholder="Username"
                        />
                    </div>
                    <div className="input-group">
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="input-field"
                            placeholder="Password"
                        />
                    </div>
                    <button type="submit" className="login-btn">Login</button>
                </form>
                {error && <p className="error-msg">{error}</p>}
            </div>
        </div>
    );
}

export default LoginPage;
