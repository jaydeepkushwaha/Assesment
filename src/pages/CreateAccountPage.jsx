import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const CreateAccountPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/profile');
  };

  return (
    <main className="screen center-screen">
      <section className="auth-card">
        <div className="auth-header">
          <h2>Create your PopX account</h2>
        </div>
        <form className="auth-form" onSubmit={handleSubmit}>
          <label>
            Full Name
            <input type="text" placeholder="Enter full name" />
          </label>
          <label>
            Phone number
            <input type="tel" placeholder="Enter phone number" />
          </label>
          <label>
            Email address
            <input type="email" placeholder="Enter email address" />
          </label>
          <label>
            Password
            <input type="password" placeholder="Enter password" />
          </label>
          <label>
            Company name
            <input type="text" placeholder="Enter company name" />
          </label>
          <fieldset className="radio-group">
            <legend>Are you an Agency?</legend>
            <label>
              <input type="radio" name="agency" value="yes" />
              Yes
            </label>
            <label>
              <input type="radio" name="agency" value="no" defaultChecked />
              No
            </label>
          </fieldset>
          <button type="submit" className="button primary-button">
            Create Account
          </button>
        </form>
        <div className="auth-footer">
          <span>Already registered?</span>
          <Link to="/signin">Login</Link>
        </div>
      </section>
    </main>
  );
};

export default CreateAccountPage;
