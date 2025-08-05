import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Admin-Styling/Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === 'ankit kumar' && password === 'ankit12345') {
      navigate('/admin'); // Ensure this route matches your dashboard route
    } else {
      setShowError(true);
    }
  };

  return (
    <div className="login-wrapper d-flex align-items-center justify-content-center min-vh-100">
      <div className="login-card p-5 rounded-4 bg-white w-100" style={{ maxWidth: '420px' }}>
        <div className="text-center mb-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Admin Logo"
            style={{ maxHeight: '80px' }}
            className="mb-3"
          />
          <h3 className="fw-bold text-dark">Welcome Admin</h3>
          <p className="text-muted">Login to manage your website</p>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-4">
            <label htmlFor="username" className="form-label fw-semibold">Username</label>
            <input
              type="text"
              id="username"
              className="form-control form-control-lg"
              placeholder="e.g. Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              autoFocus
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="form-label fw-semibold">Password</label>
            <input
              type="password"
              id="password"
              className="form-control form-control-lg"
              placeholder="e.g. Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary btn-lg w-100 fw-semibold">
            Login
          </button>

          {showError && (
            <div className="alert alert-danger mt-3 text-center" role="alert">
              Invalid username or password.
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
