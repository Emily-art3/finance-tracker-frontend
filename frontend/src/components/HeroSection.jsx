import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartPie, faShieldAlt, faWallet, faFileInvoiceDollar, faChartLine, faUsers } from '@fortawesome/free-solid-svg-icons';
import '../styles/HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      {/* Header with GET ON TOP OF YOUR FINANCES below the navbar */}
      <div className="hero-header">
        <h1 className="animated-heading">GET ON TOP OF YOUR FINANCES</h1>
      </div>

      {/* Hero Section with Background Image */}
      <div className="hero-overlay">
        <div className="hero-content">
          {/* Background image starts here */}
        </div>
      </div>

      {/* Welcome Message Section */}
      <div className="hero-footer">
        <p className="welcome-message">
          <b>Welcome to FinanceFlair, where managing your finances is both elegant and effortless.</b>
        </p>
        <button className="get-started-btn">Get Started</button>
      </div>

      {/* Empowering Financial Journey Section */}
      <div className="empower-financial-journey">
        <h2 className="empower-heading">Empower Your Financial Journey</h2>
        <h3 className="bigger-bold-heading">All-in-One Finance Tracker</h3>
        <p className="empower-description">
          <b>FinanceFlair offers everything you need to manage your finances in one place.</b>
        </p>

        {/* Services Section */}
        <div className="services-container">
      <div className="service">
        <FontAwesomeIcon icon={faChartPie} className="service-logo" />
        <h3 className="service-heading">Intuitive Dashboard</h3>
        <p className="service-description">
          Navigate your finances with a user-friendly dashboard that provides clear insights.
        </p>
      </div>

      <div className="service">
        <FontAwesomeIcon icon={faShieldAlt} className="service-logo" />
        <h3 className="service-heading">Secure Transactions</h3>
        <p className="service-description">
          Your financial data is protected with top-notch security features.
        </p>
      </div>

      <div className="service">
        <FontAwesomeIcon icon={faWallet} className="service-logo" />
        <h3 className="service-heading">Budget Planning</h3>
        <p className="service-description">
          Plan your budget effortlessly with our comprehensive tools.
        </p>
      </div>

      <div className="service">
        <FontAwesomeIcon icon={faFileInvoiceDollar} className="service-logo" />
        <h3 className="service-heading">Expense Tracking</h3>
        <p className="service-description">
          Keep track of your expenses with real-time updates.
        </p>
      </div>

      <div className="service">
        <FontAwesomeIcon icon={faChartLine} className="service-logo" />
        <h3 className="service-heading">Investment Analysis</h3>
        <p className="service-description">
          Analyze and optimize your investments for better returns.
        </p>
      </div>

      <div className="service">
        <FontAwesomeIcon icon={faUsers} className="service-logo" />
        <h3 className="service-heading">Collaborative Tools</h3>
        <p className="service-description">
          Work together with your team using our collaborative finance tools.
        </p>
      </div>
    </div>
          </div> 
      {/* Images Section */}
      <div className="hero-images">
        <div className="image-container">
          <img 
            src="/assets/streamlining-laptop.4d7a49d458c6.png" 
            alt="Financial graphs and charts" 
            className="hero-image"
          />
          <img 
            src="/assets/download.jpeg" 
            alt="Collaborative discussion" 
            className="hero-image"
          />
          <img 
            src="/assets/Power-of-budgeting.jpg" 
            alt="Budgeting Power" 
            className="hero-image"
          />
          <img 
            src="/assets/How-to-create-a-budget-and-stick-to-it-like-1024x700.png.webp" 
            alt="Professional using finance tracker" 
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
