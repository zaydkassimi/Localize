import SmartImage from './SmartImage.jsx'

function ImageGallery({ images = [] }) {
  return (
    <div className="image-gallery">
      {images.map((img) => {
        const key = img.src || img.caption || JSON.stringify(img)
        const isRemote = typeof img.src === 'string' && (img.src.startsWith('http') || img.src.startsWith('/'))

        return (
          <figure key={key} className="gallery-card">
            {isRemote ? (
              <img src={img.src} alt={img.alt || ''} className="gallery-image" />
            ) : (
              <SmartImage src={img.src} publicName={img.publicName || img.caption || img.src} alt={img.alt || ''} className="gallery-image" fallbackEmoji={'📷'} />
            )}

            {img.caption && <figcaption className="gallery-caption">{img.caption}</figcaption>}
          </figure>
        )
      })}
    </div>
  )
}

export default ImageGallery


