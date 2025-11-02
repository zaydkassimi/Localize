import StarRating from './StarRating.jsx'
import SmartImage from './SmartImage.jsx'

function emojiFor(category) {
  switch ((category || '').toLowerCase()) {
    case 'hotel':
    case 'hotels':
      return '🏨'
    case 'coffee':
    case 'coffees':
      return '☕'
    case 'stadium':
    case 'stadiums':
      return '🏟️'
    case 'bar':
    case 'bars':
      return '🍹'
    default:
      return '📍'
  }
}

function PlaceCard({ place }) {
  const { name, city, rating, category, image } = place
  return (
    <article className="card place-card" aria-label={`${name} in ${city}`}>
      {image ? (
        <div className="thumb image-thumb">
          <SmartImage src={image} publicName={null} alt={name} className="thumb-img" fallbackEmoji={emojiFor(category)} />
        </div>
      ) : (
        <div className="thumb image-thumb">
          <SmartImage src={null} publicName={name} alt={name} className="thumb-img" fallbackEmoji={emojiFor(category)} />
        </div>
      )}

      <div className="card-body">
        <h3 className="place-name">{name}</h3>
        <div className="place-meta">{city}</div>
        <div className="meta-row">
          <StarRating value={rating} />
        </div>
      </div>
    </article>
  )
}

export default PlaceCard
