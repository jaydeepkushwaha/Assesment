import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SignInPage from './pages/SignInPage';
import CreateAccountPage from './pages/CreateAccountPage';
import ProfilePage from './pages/ProfilePage';
import PageShell from './components/PageShell';

const App = () => {
  return (
    <BrowserRouter>
      <PageShell>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/create-account" element={<CreateAccountPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </PageShell>
    </BrowserRouter>
  );
};

export default App;
