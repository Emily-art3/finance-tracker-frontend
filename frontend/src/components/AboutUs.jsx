import React from "react";
import { useNavigate } from "react-router-dom"; 
import "../styles/AboutUs.css";

const AboutUs = () => {
    const navigate = useNavigate();

  const handleStartUsing = () => {
        navigate("/",  { state: { scrollToSignup: true } }); // Navigate to the homepage
        setTimeout(() => {
          const form = document.getElementById("signup-form");
          if (form) form.scrollIntoView({ behavior: "smooth" });
        }, 100); // Delay to ensure the page has loaded
      };
  return (
    <div className="about-us-container">
      {/* About FinanceFlair Section */}
      <section className="about-section">
        <h2>About FinanceFlair</h2>
        <p className="intro">
          Discover our commitment to providing a seamless financial tracking
          experience with elegance and functionality.
        </p>
      </section>

      {/* Mission Section */}
      <section className="mission-container">
        <h3>Our Mission</h3>
        <p>
          Our mission is to empower users to take control of their finances
          effortlessly, with intuitive tools and reliable data insights.
        </p>
        <div className="about-us-card">
                    <h3>Our Vision</h3>
                    <p>
                        A world where financial literacy and independence are within everyone's reach, enabling 
                        better opportunities for all.
                    </p>
        </div>
        <h3>Our Journey</h3>
        <p>
          FinanceFlair began with a vision to simplify personal finance
          management. Over the years, we've evolved, integrating advanced
          features without compromising user-friendliness. <br />Join us as we
          continue to innovate and lead in financial technology.
        </p>
      </section>

      <button
          className="start-using-btn"
          onClick={handleStartUsing}
        >
          Start Using FinanceFlair
        </button>

      {/* Team Section */}
      <section>
        <h2>Meet the FinanceFlair Experts</h2>
        <div className="team">
          {[
            {
              img: "/assets/download (1).jpeg",
              name: "Hermes Munene",
              role: "Senior Financial Analyst",
              description:
                "Hermes specializes in financial analytics, bringing precision and insight to every project.",
            },
            {
              img: "/assets/download (2).jpeg",
              name: "Aubrey Amani",
              role: "Lead Developer",
              description:
                "Aubrey ensures our platform is robust and user-friendly, blending technology with finance.",
            },
            {
              img: "/assets/download (3).jpeg",
              name: "Tanya Leila",
              role: "Strategy Consultant",
              description:
                "Tanya guides our strategic direction, leveraging trends to keep us ahead in the finance sector.",
            },
          ].map((member, index) => (
            <div key={index} className="team-member">
              <img
                src={member.img}
                alt={member.name}
                className="team-img"
              />
              <h4>{member.name}</h4>
              <p>{member.role}</p>
              <p>{member.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Statistics Section */}
<section className="statistics-section">
  <h2>Our Impact</h2>
  <div className="statistics-container">
    {[
      { value: "50k+", label: "Satisfied Users", icon: "fas fa-users" },
      { value: "30+", label: "Media Features", icon: "fas fa-newspaper" },
      { value: "150%", label: "Annual Growth", icon: "fas fa-chart-line" },
    ].map((stat, index) => (
      <div key={index} className="stat-item">
        <i className={stat.icon}></i>
        <div>
          <h4>{stat.value}</h4>
          <p>{stat.label}</p>
        </div>
      </div>
    ))}
  </div>
</section>


      {/* Contact Section */}
<section className="contact-section">
  <h2>Connect with FinanceFlair</h2>
  <div className="contact-details">
    <div className="contact-item">
      <i className="fas fa-map-marker-alt"></i>
      <div>
        <h4>Headquarters</h4>
        <p>Jubavu Rd, Hurlingham, Nairobi</p>
      </div>
    </div>
    <div className="contact-item">
      <i className="fas fa-phone"></i>
      <div>
        <h4>Contact</h4>
        <p>+254 700 706 050</p>
      </div>
    </div>
    <div className="contact-item">
      <i className="fas fa-clock"></i>
      <div>
        <h4>Office Hours</h4>
        <p>Monday - Friday, 9:00 am to 6:00 pm</p>
      </div>
    </div>
  </div>
</section>


      {/* Office Image */}
      <div className="mt-12">
        <img
          src="/assets/green-office-space.webp"
          alt="FinanceFlair Office"
          className="w-full max-w-lg mx-auto rounded-lg shadow-md hover:scale-105 transition-transform"
        />
      </div>

      {/* Footer */}
      <footer class="footer">
  <div class="footer-links">
    <a href="/about-us">About</a>
    <a href="/support">Support</a>
    <a href="/blog">Blog</a>
    <a href="/terms">Terms</a>
  </div>
  <p>© 2023 FinanceFlair. All Rights Reserved.</p>
</footer>

    </div>
  );
};

export default AboutUs;
