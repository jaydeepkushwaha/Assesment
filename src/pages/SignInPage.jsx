import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignInPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/profile');
  };

  return (
    <main className="screen center-screen">
      <section className="auth-card">
        <div className="auth-header">
          <h2>Signin to your PopX account</h2>
          <p>Enter your credentials to start managing your account.</p>
        </div>
        <form className="auth-form" onSubmit={handleSubmit}>
          <label>
            Email Address
            <input type="email" placeholder="Enter email address" />
          </label>
          <label>
            Password
            <input type="password" placeholder="Enter password" />
          </label>
          <button type="submit" className="button primary-button">
            Login
          </button>
        </form>
        <div className="auth-footer">
          <span>New here?</span>
          <Link to="/create-account">Create account</Link>
        </div>
      </section>
    </main>
  );
};

export default SignInPage;
