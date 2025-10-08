import StarRating from './StarRating.jsx'

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
  const { name, city, rating, category } = place
  return (
    <article className="card" aria-label={`${name} in ${city}`}>
      <div className="thumb" aria-hidden="true">{emojiFor(category)}</div>
      <div className="card-body">
        <h3 className="place-name">{name}</h3>
        <div className="place-meta">{city}</div>
        <StarRating value={rating} />
      </div>
    </article>
  )
}

export default PlaceCard
