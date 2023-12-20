import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
  const handleLogin = () => {
  };

  return (
    <div className="login-container">
      <h2>Log In</h2>
      <form className="login-form">
        <label className="form-label">
          Username:
          <input type="text" className="form-input" />
        </label>
        <br />
        <label className="form-label">
          Password:
          <input type="password" className="form-input" />
        </label>
        <br />
        <button className="login-btn" onClick={handleLogin}>
          Log In
        </button>
      </form>
      <Link to="/" className="cancel-link">
          Cancel
        </Link>
    </div>
  );

}

export default Login;
