import { useState, useEffect } from 'react'

function slugify(text = '') {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-_]/g, '')
}

function SmartImage({ src, publicName, alt = '', className = '', fallbackEmoji = '📷' }) {
  const isAbsolute = typeof src === 'string' && (src.startsWith('http') || src.startsWith('/'))

  const baseName = publicName || (typeof src === 'string' && !isAbsolute ? src : null)

  const candidates = []
  if (isAbsolute && src) candidates.push(src)
  if (baseName) {
    const name = slugify(baseName)
    candidates.push(`/${name}.png`)
    candidates.push(`/${name}.webp`)
    candidates.push(`/${name}.jpg`)
  }

  const [index, setIndex] = useState(0)
  const [currentSrc, setCurrentSrc] = useState(candidates[0] || '')
  const [failed, setFailed] = useState(candidates.length === 0)

  useEffect(() => {
    setIndex(0)
    setCurrentSrc(candidates[0] || '')
    setFailed(candidates.length === 0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [src, publicName])

  const handleError = () => {
    const next = index + 1
    if (next < candidates.length) {
      setIndex(next)
      setCurrentSrc(candidates[next])
    } else {
      setFailed(true)
    }
  }

  if (failed) {
    return (
      <div className={`smart-image-fallback ${className}`} aria-hidden="true">
        <div className="fallback-emoji">{fallbackEmoji}</div>
      </div>
    )
  }

  return (
    // eslint-disable-next-line jsx-a11y/img-redundant-alt
    <img src={currentSrc} alt={alt} className={className} onError={handleError} />
  )
}

export default SmartImage


