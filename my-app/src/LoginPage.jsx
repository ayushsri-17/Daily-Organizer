import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import './App.css';

export default function LoginForm() {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validation = (values) => {
    const errors = {};
    if (!values.username) errors.username = "Username Required";
    if (!values.password) {
      errors.password = "Password Required";
    } else if (values.password.length < 8) {
      errors.password = "Password must be at least 8 characters long";
    }
    if (!values.email) errors.email = "Email Required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentErrors = validation({ username, email, password });
    setErrors(currentErrors);

    if (Object.keys(currentErrors).length === 0) {
      alert("Form Submitted:");
      console.log({ username, password, email });
      navigate("/Items"); // Update this to your desired path
    }
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <h1 style={{color:"purple"}}>Let's Get Started</h1>

      <label htmlFor="Username" style={{color:"purple"}}>Username</label>
      <input
        type='text' id="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      {errors.username && <span className="error">{errors.username}</span>}
      <br />

      <label htmlFor="Email" style={{color:"purple"}}>Email</label>
      <input
        type='email' id="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      {errors.email && <span className="error">{errors.email}</span>}
      <br />

      <label htmlFor="Password" style={{color:"purple"}}>Password</label>
      <input
        type='password' id="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      {errors.password && <span className="error">{errors.password}</span>}
      <br />
         
       <h3 style={{textAlign:"center"}}>Or</h3>  
       
      {/* Google Login Button */}
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log("Google login successful:", credentialResponse);
          // After a successful Google login, navigate to the 'hero' page
          navigate("/Items");
        }}
        onError={() => {
          console.log("Google login failed");
        }}
        useOneTap
        className="google-login-button"
      />

      <button id="submit" type="submit">Get Started</button>
    </form>
  );
}
