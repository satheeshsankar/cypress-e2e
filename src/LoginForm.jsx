import { useState } from 'react';
import './LoginForm.css';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Client-side validation
        if (!email || !password) {
            setMessage('Email and password fields are required');
            setIsSuccess(false);
        } else {
            setMessage('Successfully logged in');
            setIsSuccess(true);
        }
    };

    return (
        <div className="form-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Login</button>
            </form>
            {message && (
                <p className={`message ${isSuccess ? 'success' : 'error'}`}>
                    {message}
                </p>
            )}
        </div>
    );
}

export default LoginForm;
