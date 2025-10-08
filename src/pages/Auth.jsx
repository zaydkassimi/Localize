import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Auth.css'

function Auth() {
  const [isLogin, setIsLogin] = useState(true)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle authentication logic here
    console.log('Form submitted:', formData)
  }

  const toggleMode = () => {
    setIsLogin(!isLogin)
    setFormData({
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    })
  }

  return (
    <div className="auth-page">
      {/* Animated favicon background */}
      <div className="auth-bg">
        <div className="favicon-grid">
          {Array.from({ length: 60 }).map((_, i) => (
            <div 
              key={i} 
              className="favicon-item"
              style={{
                animationDelay: `${Math.random() * 3}s`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
            >
              <img src="/logo.png" alt="" />
            </div>
          ))}
        </div>
        <div className="gradient-overlay"></div>
      </div>

      {/* Navigation */}
      <nav className="auth-nav">
        <Link to="/" className="back-home">
          <div className="nav-logo">
            <img src="/logo.png" alt="Localize" />
          </div>
          <span>Back to Home</span>
        </Link>
      </nav>

      {/* Auth Form */}
      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-header">
            <h1>{isLogin ? 'Welcome Back' : 'Join Localize'}</h1>
            <p>
              {isLogin 
                ? 'Sign in to continue discovering Morocco' 
                : 'Start your journey exploring Morocco'
              }
            </p>
          </div>

          <form onSubmit={handleSubmit} className="auth-form">
            {!isLogin && (
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required={!isLogin}
                />
              </div>
            )}

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
              />
            </div>

            {!isLogin && (
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  required={!isLogin}
                />
              </div>
            )}

            {isLogin && (
              <div className="form-options">
                <label className="checkbox-label">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                  Remember me
                </label>
                <a href="#" className="forgot-link">Forgot password?</a>
              </div>
            )}

            <button type="submit" className="auth-btn">
              {isLogin ? 'Sign In' : 'Create Account'}
            </button>
          </form>

          <div className="auth-divider">
            <span>or continue with</span>
          </div>

          <div className="social-buttons">
            <button className="social-btn google-btn">
              <span>🔍</span>
              Google
            </button>
            <button className="social-btn facebook-btn">
              <span>📘</span>
              Facebook
            </button>
          </div>

          <div className="auth-toggle">
            <p>
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <button onClick={toggleMode} className="toggle-btn">
                {isLogin ? 'Sign Up' : 'Sign In'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth