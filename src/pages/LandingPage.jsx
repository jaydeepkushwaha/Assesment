import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <main className="screen center-screen">
      <section className="hero-card">
        <div className="hero-copy">
          <h1>Welcome to PopX</h1>
          <p>Fast, clean onboarding for your next digital experience.</p>
        </div>
        <div className="hero-actions">
          <Link to="/create-account" className="button primary-button">
            Create Account
          </Link>
          <Link to="/signin" className="button secondary-button">
            Already Registered? Login
          </Link>
        </div>
      </section>
    </main>
  );
};

export default LandingPage;
