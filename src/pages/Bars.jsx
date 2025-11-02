import ImageGallery from '../components/ImageGallery.jsx'

const barImages = [
  { src: 'https://images.unsplash.com/photo-1504274066651-8d31a536b11a?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=4', alt: 'Sky Lounge Casablanca', caption: 'Sky Lounge — Casablanca' },
  { src: 'https://images.unsplash.com/photo-1533777324565-a040eb52fac2?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=5', alt: 'Le Privé Marrakech', caption: 'Le Privé — Marrakech' },
  { src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=6', alt: 'Bar 13 Rabat', caption: 'Bar 13 — Rabat' },
]

function Bars() {
  return (
    <div className="page bars-page">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">🍸 Nightlife</div>
          <h1 className="section-title">Bars & Nightlife</h1>
          <p className="section-subtitle">Explore popular bars, lounges, and nightlife spots.</p>
        </div>

        <ImageGallery images={barImages} />
      </div>
    </div>
  )
}

export default Bars


