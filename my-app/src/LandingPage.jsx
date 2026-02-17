import { useNavigate } from 'react-router-dom';
import './LandingPage.css'; // Changed import
import logo from './assets/download.png';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <header className="landing-header">
        <img 
          src={logo} 
          alt="Logo" 
          className="landing-logo"
          style={{
            maxHeight: "60px",
            backgroundColor: "black",
            borderRadius: "50%",
            padding: "4px"
          }}
        />
      </header>

      <main className="landing-main">
        <div className="hero-content">
          <h1 className="hero-title-primary">
            Transform Your Life
          </h1>
          <h1 className="hero-title-secondary">
            One step at a time
          </h1>
          <p className="hero-description">
            Track your progress<br />
            Celebrate achievements<br />
            Grow consistently.
          </p>

          <div className="hero-buttons">
            <button 
              onClick={() => navigate("/LoginPage")}
              className="btn btn-login"
            >
              Login
            </button>
            
            <button 
              onClick={() => navigate("/Items")}
              className="btn btn-get-started"
            >
              Get Started
            </button>
          </div>
        </div>

        {/* Optional: Add a subtle background decoration */}
        <div className="hero-decoration">
          <div className="circle circle-1"></div>
          <div className="circle circle-2"></div>
        </div>
      </main>
    </div>
  );
}