import React, { useState } from "react";
import "./signup.css";
import { Mail, Lock, LogIn, UserPlus } from "lucide-react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Signup Attempt:", { name, email, password });
  }

  return (
    <div className="signup-container">
      <h1>PRIME</h1>

      <article>
        <div className="images">
          <img
            className="img1"
            src="../../src/Assets/View4/CherryLimeade-Front_400x.webp"
            alt=""
          />
          <img
            className="img2"
            src="../../src/Assets/View4/PE-Original_V2_400x.webp"
            alt=""
          />
          <img
            className="img3"
            src="../../src/Assets/View4/PE-Dream_V2_400x.webp"
            alt=""
          />
        </div>

        <div className="signup-card">
          <h2 className="signup-title">Create Account</h2>
          <p className="signup-subtitle">Join us for the full experience.</p>

          <form onSubmit={handleSubmit} className="signup-form">
            <div>
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <div className="input-group">
                <div className="input-icon">
                  <UserPlus className="icon-style" />
                </div>
                <input
                  type="text"
                  id="name"
                  required
                  placeholder="Your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-input"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <div className="input-group">
                <div className="input-icon">
                  <Mail className="icon-style" />
                </div>
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="you@example.com"
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
                  <Lock className="icon-style" />
                </div>
                <input
                  type="password"
                  id="password"
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-input"
                />
              </div>
            </div>

            <div>
              <button type="submit" className="signup-button">
                <a href="#" className="login-link">
                  <i class="ri-user-add-fill icon-style-button"></i>
                  Sign Up Now
                </a>
              </button>
            </div>
          </form>

          <div className="login-redirect">
            <p className="login-text">
              Already have an account?
              <a href="/login" className="login-link">
                <LogIn className="icon-style-button" />
                Log In
              </a>
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Signup;
