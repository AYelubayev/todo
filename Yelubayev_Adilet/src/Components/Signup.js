import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  const handleSignUp = () => {
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form className="signup-form">
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
        <button className="signup-btn" onClick={handleSignUp}>
          Sign Up
        </button>
      </form>
      <Link to="/" className="cancel-link">
        Cancel
      </Link>
    </div>
  );
};

export default Signup;
