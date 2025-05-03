import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./LandingPage.css";
import mainLogo from "./assets/main-logo.png";
import logoOnly from "./assets/logo-only.png";
import workingVideo from "./assets/working-video.mp4";
import TermsAndConditions from "./components/TermsAndConditions";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Contact from "./components/Contact";

// Add ScrollToTop component at the top level
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoRef = React.useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [formData, setFormData] = useState({
    restaurantName: "",
    email: "",
    number: "",
    location: "",
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoRef.current?.play();
          } else {
            videoRef.current?.pause();
          }
        });
      },
      {
        threshold: 0.5, // Video will play when 50% is visible
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  const handleMuteToggle = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://harvest-direct-backend.vercel.app/api/waitlist",
        formData
      );
      toast.success("Thank you for joining the waitlist!");
      setFormData({ restaurantName: "", email: "", number: "", location: "" });
      setIsModalOpen(false);
    } catch (error) {
      toast.error("There was an error submitting the form. Please try again.");
    }
  };

  return (
    <div className="landing-page">
      <ToastContainer />
      
      <nav>
        <div className="nav-brand">
          <Link to="/">
            <img src={logoOnly} alt="Harvest Direct" className="nav-logo" />
            <span className="nav-text">Harvest Direct</span>
          </Link>
        </div>
      </nav>

      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Revolutionize Your Kitchen Supply Chain</h1>
          <p className="hero-subtitle">
            Get Priority Access to Harvest Direct — Mumbai's Smartest B2B Food Supply Platform
          </p>
          <p className="hero-subtitle">
            Tired of late deliveries, inconsistent quality, and endless supplier calls? We're fixing the broken food supply chain — and you're invited to be among the first.
          </p>
          <button className="cta-button" onClick={() => setIsModalOpen(true)}>
            Join the Waitlist Now
          </button>
        </div>
        <div className="hero-image">
          <img src={mainLogo} alt="Harvest Direct Logo" />
        </div>
      </section>

      <section className="features-section">
        <h2 className="section-title">Why Choose Harvest Direct?</h2>
        <p className="section-subtitle">
          Experience the future of food supply with features designed for efficiency and reliability.
        </p>
        
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🚚</div>
            <h3 className="feature-title">Daily Fresh Deliveries</h3>
            <p className="feature-description">
              From farm to kitchen, on time, every day. Ensure your ingredients are always at their peak.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">💰</div>
            <h3 className="feature-title">Transparent Pricing</h3>
            <p className="feature-description">
              No more market surprises. Access clear, upfront pricing for better budget management.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🏪</div>
            <h3 className="feature-title">All Categories, One Vendor</h3>
            <p className="feature-description">
              Fruits, vegetables, dairy, meat, dry goods & more. Simplify your sourcing.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3 className="feature-title">Smart Dashboard</h3>
            <p className="feature-description">
              Track orders, plan inventory, and reorder in seconds with our intuitive dashboard.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">✨</div>
            <h3 className="feature-title">Reliable Quality</h3>
            <p className="feature-description">
              Handpicked partners ensure zero compromise on the quality your kitchen demands.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3 className="feature-title">Exclusive Support</h3>
            <p className="feature-description">
              Get early access, exclusive onboarding support, and priority delivery slots as a waitlist member.
            </p>
          </div>
        </div>
      </section>

      <section className="video-section">
        <h2 className="section-title">See How Harvest Direct Works</h2>
        <p className="section-subtitle">
          Watch how we're transforming the food supply chain in Mumbai
        </p>
        <div className="video-container">
          <video
            ref={videoRef}
            muted
            loop
            playsInline
            poster={mainLogo}
            className="video-player"
            controlsList="nodownload noplaybackrate"
            disablePictureInPicture
            onContextMenu={(e) => e.preventDefault()}
          >
            <source src={workingVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <button 
            className="mute-button"
            onClick={handleMuteToggle}
            aria-label={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? "🔇" : "🔊"}
          </button>
        </div>
      </section>

      <section className="ready-section">
        <h2 className="section-title">Ready to Optimize Your Supply Chain?</h2>
        <p className="section-subtitle">
          Join the waitlist and be the first to experience a smarter way to source your kitchen supplies in Mumbai.
        </p>
        <button className="cta-button" onClick={() => setIsModalOpen(true)}>
          Join the Waitlist Today
        </button>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-copyright">© 2025 Harvest Direct. All rights reserved.</div>
          <div className="footer-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/terms">Terms & Conditions</Link>
          </div>
          <div className="social-links">
            <a href="https://www.instagram.com/harvestdirect.co_india/?utm_source=ig_web_button_share_sheet" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fab fa-facebook"></i>
            </a>
          </div>
        </div>
      </footer>

      {isModalOpen && (
        <div className="modal-overlay" onClick={(e) => {
          if (e.target === e.currentTarget) setIsModalOpen(false);
        }}>
          <div className="modal-content">
            <button className="close-button" onClick={() => setIsModalOpen(false)}>
              ×
            </button>
            <h2 className="section-title">Join Our Waitlist</h2>
            <p className="section-subtitle">
              Be among the first to experience a smarter way to source fresh produce for your restaurant.
            </p>
            <form onSubmit={handleSubmit} className="form-container">
              <div className="form-group">
                <input
                  type="text"
                  name="restaurantName"
                  id="restaurantName"
                  value={formData.restaurantName}
                  onChange={handleChange}
                  placeholder="e.g., Spice Garden Restaurant"
                  required
                />
                <label htmlFor="restaurantName">Restaurant Name<span className="required-mark">*</span></label>
                <span className="input-hint">Enter your restaurant's official business name</span>
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g., contact@restaurant.com"
                  required
                />
                <label htmlFor="email">Email Address<span className="required-mark">*</span></label>
                <span className="input-hint">We'll send your waitlist confirmation here</span>
              </div>

              <div className="form-group">
                <input
                  type="tel"
                  name="number"
                  id="number"
                  value={formData.number}
                  onChange={handleChange}
                  placeholder="e.g., 9876543210"
                  minLength={10}
                  maxLength={10}
                  pattern="[0-9]{10}"
                  required
                />
                <label htmlFor="number">Contact Number<span className="required-mark">*</span></label>
                <span className="input-hint">Enter a valid 10-digit mobile number</span>
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="location"
                  id="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="e.g., Bandra West, Mumbai"
                  required
                />
                <label htmlFor="location">Restaurant Location<span className="required-mark">*</span></label>
                <span className="input-hint">Specify your restaurant's primary location</span>
              </div>

              <button type="submit" className="submit-button">
                Join Waitlist
              </button>

              <div className="form-footer">
                By joining, you agree to our{' '}
                <Link to="/terms">Terms of Service</Link>
                {' '}and{' '}
                <Link to="/privacy-policy">Privacy Policy</Link>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
