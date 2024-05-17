import React, { useState } from 'react';
import axios from 'axios';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.get('https://api.airtable.com/v0/app4lxZO80azsrlm0/tblYmziTZzvMCuXa2', {
        headers: {
          Authorization: 'Bearer pat1InfNwwVqpt9O4.e8f304668c28ef1831a57f332183dcb0a89c0cb37ffb4ebe0b451cdd60a7a2b2'
        }
      });
      const users = response.data.records;
      const user = users.find(u => u.fields.ID.trim() === email && u.fields.Password === password);
      if (user) {
        onLogin(user.fields);
      } else {
        setError('Invalid email or password');
      }
    } catch (ex) {
      setError('Failed to login');
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="form-control"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="form-control"
      />
      {error && <div className="alert alert-danger">{error}</div>}
      <button onClick={handleLogin} className="btn btn-primary">Login</button>
    </div>
  );
}

export default Login;
