import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './LoginPage.css';

function LoginPage({ onLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false); 
    const navigate = useNavigate(); 


    useEffect(() => {
        const handleKeyUp = (event) => {
            if (event.key === 'Enter') {
                document.querySelector("input[type='password']").focus();
            }
        };

        const emailInput = document.querySelector("input[type='email']");
        if (emailInput) {
            emailInput.focus();
            emailInput.addEventListener('keyup', handleKeyUp);
        }

        return () => {
            if (emailInput) {
                emailInput.removeEventListener('keyup', handleKeyUp);
            }
        };
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true); // Start to loaingd
        try {
            const result = await onLogin({ email, password });
            setIsLoading(false); // Loading fnish
            if (result) {
                navigate('/leaveapplication'); // login successful, go to leave application page
            } else {
                setError('Ogiltig e-post eller lösenord'); // Set error information
            }
        } catch (error) {
            setIsLoading(false); 
            setError('Inloggningen misslyckades: ' + error.message); // Show error
        }
    };

    return (
        <div className="login-page container mt-5">
            <form onSubmit={handleSubmit} className="card p-4 shadow">
                <div className="form-group">
                    <label htmlFor="email">E-post</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <div className="mb-3 form-group">
                    <label htmlFor="password">Lösenord</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        required
                    />
                </div>
                <button type="submit" className="mb-3 col-12 btn custom-login-btn text-white" disabled={isLoading}>
                    {isLoading ? 'Loggar in...' : 'Logga in'}
                </button>
                {error && <div className="alert alert-danger mt-2">{error}</div>}
            </form>
        </div>
    );
}

export default LoginPage;
