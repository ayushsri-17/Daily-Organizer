import { useNavigate } from 'react-router-dom';
import './Hero.css';

import logo from './assets/download.png'

export default function Hero() {
  const navigate = useNavigate();

  return (
    <>
    <img src={logo}  style={{height:"120px", backgroundColor:"black", borderRadius:"50%",}}></img>
    <div className="hero-container">
      <br />
      <div className="item-container">
        <h1 style={{ color: "purple", fontSize: "5rem", marginTop: "8rem" }}>Transform Your Life</h1>
        <h1 style={{ color: "black", fontSize: "5rem", marginTop: "-3rem" }}>One step at a time</h1>
        <h1 style={{ color: "grey", fontSize: "1.5rem", marginTop: "-2rem" }}>
          Track your progress, celebrate achievements, <br /> and grow consistently with our powerful self-development platform.
        </h1>
        <br />
        <button onClick={() => navigate("/LoginPage")} // Use the correct path
          style={{ height: "3rem", width: "10rem", fontSize: "1.5rem", backgroundColor: "black", color: "white", borderRadius: "15px", border: "none", cursor: "pointer", marginLeft: "0rem" }}>
          Login
        </button>
         <br></br>
        <button onClick={() => navigate("/Items")}
          style={{ height: "4rem", width: "15rem", fontSize: "1.5rem", backgroundColor: "purple", color: "white", borderRadius: "15px", border: "none", cursor: "pointer", marginTop:"2rem" }}>
          Get Started
        </button>
      </div>
    </div>
    </>
  );
}
