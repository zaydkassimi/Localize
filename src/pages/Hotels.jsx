import ImageGallery from '../components/ImageGallery.jsx'

const hotelImages = [
  { src: 'https://images.unsplash.com/photo-1501117716987-c8e3a9b9b5c7?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=7', alt: 'Riad Emerald', caption: 'Riad Emerald — Marrakesh' },
  { src: 'https://images.unsplash.com/photo-1501117716987-8b9b1f3f2c2a?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=8', alt: 'Atlas View Hotel', caption: 'Atlas View Hotel — Imlil' },
  { src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=9', alt: 'Ocean Casa', caption: 'Ocean Casa — Casablanca' },
  { src: 'https://images.unsplash.com/photo-1501117716987-6b8e4d2e1f1c?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=10', alt: 'Medina Luxe', caption: 'Medina Luxe — Fes' },
]

function Hotels() {
  return (
    <div className="page hotels-page">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">🏨 Accommodation</div>
          <h1 className="section-title">Handpicked Hotels</h1>
          <p className="section-subtitle">From traditional riads to modern luxury - find your perfect stay</p>
        </div>

        <ImageGallery images={hotelImages} />
      </div>
    </div>
  )
}

export default Hotels


