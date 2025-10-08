function Star({ filled }) {
  return (
    <svg className={`star ${filled ? 'filled' : ''}`} viewBox="0 0 20 20" aria-hidden="true">
      <path d="M10 1.5l2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.8-5.4 2.8 1-6.1L1.2 7.9l6.1-.9L10 1.5z" />
    </svg>
  )
}

function StarRating({ value = 0 }) {
  const rounded = Math.round(value * 10) / 10
  return (
    <div className="rating" aria-label={`${rounded} out of 5 stars`}>
      <div className="stars">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} filled={i < Math.round(value)} />
        ))}
      </div>
      <span className="score">{rounded.toFixed(1)}</span>
    </div>
  )
}

export default StarRating
