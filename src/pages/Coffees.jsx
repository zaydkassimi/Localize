import ImageGallery from '../components/ImageGallery.jsx'

const coffeeImages = [
  { src: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=11', alt: 'Casa Brew', caption: 'Casa Brew — Casablanca' },
  { src: 'https://images.unsplash.com/photo-1523942839745-7849d7b17f2a?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=12', alt: 'Rabat Roasters', caption: 'Rabat Roasters — Rabat' },
  { src: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=13', alt: 'Marrakech Mocha', caption: 'Marrakech Mocha — Marrakesh' },
  { src: 'https://images.unsplash.com/photo-1509460913899-8b16a5f0b2f2?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=14', alt: 'Tangier Espresso', caption: 'Tangier Espresso — Tangier' },
]

function Coffees() {
  return (
    <div className="page coffees-page">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">☕ Coffee Culture</div>
          <h1 className="section-title">Best Coffee Spots</h1>
          <p className="section-subtitle">Discover where locals get their caffeine fix and unwind</p>
        </div>

        <ImageGallery images={coffeeImages} />
      </div>
    </div>
  )
}

export default Coffees


