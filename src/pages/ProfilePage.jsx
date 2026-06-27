import React from 'react';
import { Link } from 'react-router-dom';

const ProfilePage = () => {
  return (
    <main className="screen center-screen">
      <section className="profile-card">
        <h2>Account Settings</h2>
        <div className="profile-summary">
          <div className="profile-avatar-holder">
            <div className="profile-avatar">M</div>
            <div>
              <p className="profile-name">Marry Doe</p>
              <p className="profile-email">Marry@Gmail.Com</p>
            </div>
          </div>
          <p className="profile-bio">
            Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
          </p>
        </div>
        <Link to="/" className="button primary-button profile-link">
          Back to Landing
        </Link>
      </section>
    </main>
  );
};

export default ProfilePage;
