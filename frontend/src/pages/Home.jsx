import React from 'react';
import TrackYourFinances from '../components/HeroSection';  // Correct path for HeroSection

const Home = () => {
  return (
    <div className="home-container">
      <TrackYourFinances />

      <div className="content-section">
        <h2>Welcome to FinanceFlair</h2>
        <p>Where managing your finances is both elegant and effortless.</p>
      </div>
    </div>
  );
};

export default Home;
