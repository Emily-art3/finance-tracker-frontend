import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartPie, faShieldAlt, faWallet, faFileInvoiceDollar, faChartLine, faUsers, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../styles/HeroSection.css';
import { useLocation } from "react-router-dom";


const HeroSection = () => {
  const [showForm, setShowForm] = useState(false);

  const handleSignUpClick = () => {
    setShowForm(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.animated-section');
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          section.classList.add('in-view');
        } else {
          section.classList.remove('in-view');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
   
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToSignup) {
      const form = document.getElementById("signup-form");
      if (form) form.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);
  return (
    <section className="hero-section">
  <div className="hero-header">
    <h1 className="animated-heading">
      <span className="highlight">GET ON TOP</span>  
      <br />
      OF YOUR FINANCES
    </h1>
  </div>

  <div className="hero-overlay">
    <div className="hero-content">
    </div>
  </div>

      <div className="hero-footer animated-section">
        <p className="welcome-message">
          <b>Welcome to FinanceFlair, where managing your finances is both elegant and effortless.</b>
        </p>
        <button className="get-started-btn" onClick={handleSignUpClick}>Get Started</button>
      </div>

      <div className="empower-financial-journey">
        <h2 className="empower-heading animated-section">Empower Your Financial Journey</h2>
        <h3 className="bigger-bold-heading">All-in-One Finance Tracker</h3>
        <p className="empower-description">
          <b>FinanceFlair offers everything you need to manage your finances in one place.</b>
        </p>

        <div className="services-container">
          <div className="service">
            <FontAwesomeIcon icon={faChartPie} className="service-logo" />
            <h3 className="service-heading">Intuitive Dashboard</h3>
            <p className="service-description">Navigate your finances with a user-friendly dashboard that provides clear insights.</p>
          </div>

          <div className="service">
            <FontAwesomeIcon icon={faShieldAlt} className="service-logo" />
            <h3 className="service-heading">Secure Transactions</h3>
            <p className="service-description">Your financial data is protected with top-notch security features.</p>
          </div>

          <div className="service">
            <FontAwesomeIcon icon={faWallet} className="service-logo" />
            <h3 className="service-heading">Budget Planning</h3>
            <p className="service-description">Plan your budget effortlessly with our comprehensive tools.</p>
          </div>

          <div className="service">
            <FontAwesomeIcon icon={faFileInvoiceDollar} className="service-logo" />
            <h3 className="service-heading">Expense Tracking</h3>
            <p className="service-description">Keep track of your expenses with real-time updates.</p>
          </div>

          <div className="service">
            <FontAwesomeIcon icon={faChartLine} className="service-logo" />
            <h3 className="service-heading">Investment Analysis</h3>
            <p className="service-description">Analyze and optimize your investments for better returns.</p>
          </div>

          <div className="service">
            <FontAwesomeIcon icon={faUsers} className="service-logo" />
            <h3 className="service-heading">Collaborative Tools</h3>
            <p className="service-description">Work together with your team using our collaborative finance tools.</p>
          </div>
        </div>
      </div>

     
        <div className="text-container">
          <h2 className="journey-heading">Start Your Financial Journey</h2>
          <p className="journey-description">Join FinanceFlair today and take control of your financial future.</p>
          <p className="journey-description">Experience the elegance and functionality of our finance tracker.</p>
          <button className="sign-up-button" onClick={handleSignUpClick}>Sign Up Now →</button>

          {showForm && (
            <form className="signup-form">
              <h3>Sign Up for FinanceFlair</h3>
              <label>
          Name:
          <input type="text" name="name" required />
        </label>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <label>
          Age:
          <input type="number" name="age" min="18" required />
        </label>
        <button type="submit" className="submit-btn">Sign Up</button>
            </form>
          )}
        </div>
        <div className="start-journey-container animated-section">
        <div className="image-container">
          <img
            src="/assets/getty_black-women-finance_013121.webp"
            alt="Financial Dashboard"
            className="start-journey-image"
          />
        </div>

      </div>

      <section className="features-overview">
      <h1 className="section-heading animated-heading">
  Unleash the Power of Your Finances
</h1>

      <div className="feature-section reverse">
        <h2>Budget Effortlessly</h2>
        <p>Our budgeting tools empower you to manage your finances with accuracy and ease. Gain full control over your spending and savings.</p>
        <button className="explore-btn">Explore Budgeting Tools</button>
        <img
          src="/assets/Power-of-budgeting.jpg"
          alt="Budgeting Tools"
          className="feature-image"
          style={{ maxWidth: '800px', height: 'auto', borderRadius: '10px' }}

        />
      </div>

      <div className="feature-section animated-section">
        <h2>Track Expenses with Ease</h2>
        <p>Our advanced expense tracking feature ensures you never lose sight of where your money goes. Stay informed and make smarter financial decisions.</p>
        <ul>
          <li><b>Real-Time Updates:</b> Get instant notifications on your spending habits and adjust accordingly.</li>
          <li><b>Categorize Expenses:</b> Organize your expenses into categories for a clearer financial overview.</li>
          <li><b>Expense Reports:</b> Generate detailed reports to analyze your spending patterns.</li>
        </ul>
        <button className="explore-btn">Track Expenses</button>
        <img
          src="/assets/2023120816543586458721-Benefits_of_Efficient_Expense_Tracking_business_expense_tracker.png"
          alt="Expense Tracking"
          className="feature-image"
        />
      </div>

      <div className="feature-section animated-section">
        <h2>Optimize Earnings</h2>
        <p>Utilize our comprehensive income analysis tools to understand your earnings better and identify potential areas for growth.</p>
        <ul>
          <li><b>Visualize your income sources:</b> See where your money comes from.</li>
          <li><b>Identify trends:</b> Optimize your income streams for maximum efficiency.</li>
        </ul>
        <button className="explore-btn">Explore Income Analysis</button>
        <img
          src="/assets/How-to-create-a-budget-and-stick-to-it-like-1024x700.png.webp"
          alt="Income Analysis"
          className="feature-image"
          style={{ maxWidth: '800px', height: 'auto', borderRadius: '10px' }}

        />
      </div>

      <div className="feature-section reverse">
        <h2>Engaging Reports</h2>
        <p>Visualize Your Financial Data and gain actionable insights to enhance your financial strategy.</p>
        <ul>
          <li><b>Interactive Dashboards:</b> Get a clear overview of your financial health.</li>
          <li><b>Data Insights:</b> Make informed decisions based on your spending patterns.</li>
          <li><b>Customizable Reports:</b> Tailor reports to fit your needs and preferences.</li>
        </ul>
        <button className="explore-btn">Create Reports</button>
        <img
          src="/assets/streamlining-laptop.4d7a49d458c6.png"
          alt="Engaging Reports"
          className="feature-image"
        />
      </div>

      <div className="feature-section ">
        <h2>Secure Your Financial Data</h2>
        <p>Experience peace of mind knowing your financial data is protected with state-of-the-art security features.</p>
        <ul>
          <li><b>Advanced Encryption:</b> Your data is protected with state-of-the-art encryption technology.</li>
          <li><b>Data Privacy:</b> We prioritize your privacy and ensure your information is safe.</li>
          <li><b>Regular Backups:</b> Automatic backups ensure your data is never lost.</li>
        </ul>
        <button className="explore-btn">Learn More</button>
        <img
          src="/assets/e27d8554-35b7-4501-8600-3174648aaaf0_1024x1024.jpg"
          alt="Secure Financial Data"
          className="feature-image"
          style={{ maxWidth: '800px', height: 'auto', borderRadius: '10px' }}

        />
      </div>

      <div className="feature-section reverse">
        <h2>User-Friendly Interface</h2>
        <p>Our interface is designed with you in mind, offering a seamless experience that makes managing your finances a breeze.</p>
        <ul>
          <li><b>Effortless Navigation:</b> Easy navigation for a smooth user journey.</li>
        </ul>
        <button className="explore-btn">Explore Interface</button>
        <img
          src="/assets/unnamed.webp"
          alt="User-Friendly Interface"
          className="feature-image"
        />
      </div>
      </section>

      <footer className="footer-section">
        <p>© FinanceFlair 2025, Your Trusted Financial Companion</p>
        <div className="social-icons">
          <FontAwesomeIcon icon={faPhone} className="social-icon" />
          <FontAwesomeIcon icon={faEnvelope} className="social-icon" />
        </div>
        <div className="footer-links">
          <a href="/about-us">About Us</a>
          <a href="/support">Support</a>
          <a href="/blog">Blog</a>
          <a href="/terms">Terms</a>
        </div>
        <div className="contact-info">
          <p><FontAwesomeIcon icon={faPhone} /> +254 700 706 050</p>
          <p><FontAwesomeIcon icon={faEnvelope} /> support@financeflair.co.ke</p>
        </div>
      </footer>
    </section>
  );
};

export default HeroSection;
