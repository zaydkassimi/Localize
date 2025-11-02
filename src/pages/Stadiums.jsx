import ImageGallery from '../components/ImageGallery.jsx'

const stadiumImages = [
  { src: 'https://images.unsplash.com/photo-1542736667-069246bdbc6d?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=1', alt: 'Mohammed V Stadium', caption: 'Mohammed V Stadium — Casablanca' },
  { src: 'https://images.unsplash.com/photo-1563720224779-2f5b6ef8b3b3?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=2', alt: 'Stade Adrar', caption: 'Stade Adrar — Agadir' },
  { src: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=3', alt: 'Grand Stade de Marrakech', caption: 'Grand Stade de Marrakech — Marrakech' },
]

function Stadiums() {
  return (
    <div className="page stadiums-page">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">🏟️ Sports</div>
          <h1 className="section-title">Stadiums & Venues</h1>
          <p className="section-subtitle">Find major stadiums and sports venues across Morocco.</p>
        </div>

        <ImageGallery images={stadiumImages} />
      </div>
    </div>
  )
}

export default Stadiums


