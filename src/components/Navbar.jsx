import { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="navbar" aria-label="Main navigation">
      <div className="navbar-inner">
        <Link to="/" className="brand" aria-label="Localize home">
          <img src="/logo.png" alt="Localize" className="brand-logo" />
        </Link>

        <div className="nav-center">
          <div className="nav-links">
            <a href="#hotels" className="nav-link">Hotels</a>
            <a href="#coffees" className="nav-link">Coffees</a>
            <a href="#stadiums" className="nav-link">Stadiums</a>
            <a href="#bars" className="nav-link">Bars</a>
          </div>
        </div>

        <div className="nav-right">
          <Link to="/auth" className="login-btn">Login</Link>
          <button
            className="mobile-menu"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <div className={`hamburger ${open ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>

        {open && (
          <div className="mobile-overlay">
            <div className="mobile-menu-content">
              <a href="#hotels" onClick={() => setOpen(false)}>Hotels</a>
              <a href="#coffees" onClick={() => setOpen(false)}>Coffees</a>
              <a href="#stadiums" onClick={() => setOpen(false)}>Stadiums</a>
              <a href="#bars" onClick={() => setOpen(false)}>Bars</a>
              <Link to="/auth" className="mobile-login" onClick={() => setOpen(false)}>Login</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
