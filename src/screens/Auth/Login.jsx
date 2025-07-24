import React, { useState } from "react";
import "./login.css"; // Import the CSS file
import { Mail, Lock, LogIn, UserPlus } from "lucide-react"; // Keeping lucide-react as per your provided code
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
    const navigate = useNavigate();


  function handleSubmit(event) {
    event.preventDefault();
    navigate("/"); // Redirect to home after login
  }

  return (
    <div className="login-container">
      <h1>PRIME</h1>

      <article>
        <div className="images">
          <img className="img1" src="../../src/Assets/View4/CherryLimeade-Front_400x.webp" alt="" />
          <img className="img2" src="../../src/Assets/View4/PE-Original_V2_400x.webp" alt="" />
          <img className="img3" src="../../src/Assets/View4/PE-Dream_V2_400x.webp" alt="" />

          {/* <img src="src/Assets/login/dd486de7b1b8daeb5f8fc333d542f16d.png" alt="" /> */}
        </div>
        <div className="login-card">
          {/* Login Form Header */}
          <h2 className="login-title">Welcome Back!</h2>
          <p className="login-subtitle">Securely sign in to your account.</p>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="login-form">
            <div>
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <div className="input-group">
                <div className="input-icon">
                  <Mail className="icon-style" aria-hidden="true" />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-input"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <div className="input-group">
                <div className="input-icon">
                  <Lock className="icon-style" aria-hidden="true" />
                </div>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  placeholder="••••••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-options">
              <div className="checkbox-group">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="checkbox-input"
                />
                <label htmlFor="remember-me" className="checkbox-label">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="forgot-password-link">
                  Forgot password?
                </a>
              </div>
            </div>

            <div>
              <button type="submit" className="login-button">
                Log In
                <i style={{ color: "white" }} class="ri-arrow-right-line"></i>
              </button>
            </div>
          </form>

          {/* Signup Link */}
          <div className="signup-section">
            <p className="signup-text">
              Don't have an account?
              <a href="/signup" className="signup-link">
                <UserPlus className="icon-style-button" />
                Sign Up Now
              </a>
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Login;
