import PlaceCard from '../components/PlaceCard.jsx'
import { hotels, coffees } from '../data/recommendations.js'

function Home() {
  return (
    <>
      <header className="hero">
        <div className="hero-bg">
          <div className="hero-shape hero-shape-1"></div>
          <div className="hero-shape hero-shape-2"></div>
          <div className="hero-shape hero-shape-3"></div>
        </div>
        <div className="container hero-content">
          <div className="hero-text">
            <div className="hero-badge">🇲🇦 Discover Morocco</div>
            <h1 className="hero-title">
              Find amazing places
              <span className="gradient-text"> anywhere you land</span>
            </h1>
            <p className="hero-subtitle">
              From luxury riads to hidden coffee gems, discover the best spots 
              locals love across Morocco's vibrant cities.
            </p>
            <div className="hero-actions">
              <button className="btn-primary">Start Exploring</button>
              <button className="btn-secondary">View Map</button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-card hotel-preview">
              <div className="preview-icon">🏨</div>
              <div className="preview-text">
                <div className="preview-title">Luxury Riads</div>
                <div className="preview-rating">⭐ 4.8 rating</div>
              </div>
            </div>
            <div className="hero-card coffee-preview">
              <div className="preview-icon">☕</div>
              <div className="preview-text">
                <div className="preview-title">Local Cafés</div>
                <div className="preview-rating">⭐ 4.6 rating</div>
              </div>
            </div>
            <div className="hero-card stadium-preview">
              <div className="preview-icon">🏟️</div>
              <div className="preview-text">
                <div className="preview-title">Sports Venues</div>
                <div className="preview-rating">⭐ 4.5 rating</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section id="hotels" className="section">
          <div className="container">
            <div className="section-header">
              <div className="section-badge">🏨 Accommodation</div>
              <h2 className="section-title">Handpicked Hotels</h2>
              <p className="section-subtitle">From traditional riads to modern luxury - find your perfect stay</p>
            </div>
            <div className="cards-grid">
              {hotels.map((h) => (
                <PlaceCard key={h.id} place={h} />
              ))}
            </div>
          </div>
        </section>

        <section id="coffees" className="section section-alt">
          <div className="container">
            <div className="section-header">
              <div className="section-badge">☕ Coffee Culture</div>
              <h2 className="section-title">Best Coffee Spots</h2>
              <p className="section-subtitle">Discover where locals get their caffeine fix and unwind</p>
            </div>
            <div className="cards-grid">
              {coffees.map((c) => (
                <PlaceCard key={c.id} place={c} />
              ))}
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h2>Ready to explore Morocco?</h2>
              <p>Join thousands of travelers discovering authentic experiences</p>
              <button className="btn-primary">Get Started</button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Home