import { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState('')

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    // For now just log; can wire to navigate/search later
    console.log('Searching for:', search)
  }

  return (
    <nav className="navbar" aria-label="Main navigation">
      <div className="navbar-inner">
        <Link to="/" className="brand" aria-label="Localize home">
          <img src="/logo.png" alt="Localize" className="brand-logo" />
        </Link>

        <div className="nav-center">
          <div className="nav-links">
            <Link to="/hotels" className="nav-link">Hotels</Link>
            <Link to="/coffees" className="nav-link">Coffees</Link>
            <Link to="/stadiums" className="nav-link">Stadiums</Link>
            <Link to="/bars" className="nav-link">Bars</Link>
          </div>
        </div>

        <div className="nav-right">
          <form className="nav-search" onSubmit={handleSearchSubmit} role="search">
            <input
              className="search-input"
              placeholder="Search places, cities..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              aria-label="Search places"
            />
            <button type="submit" className="search-btn">Search</button>
          </form>

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
              <Link to="/hotels" onClick={() => setOpen(false)}>Hotels</Link>
              <Link to="/coffees" onClick={() => setOpen(false)}>Coffees</Link>
              <Link to="/stadiums" onClick={() => setOpen(false)}>Stadiums</Link>
              <Link to="/bars" onClick={() => setOpen(false)}>Bars</Link>
              <Link to="/auth" className="mobile-login" onClick={() => setOpen(false)}>Login</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
