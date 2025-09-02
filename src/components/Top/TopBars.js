// TopBars.js
import React from 'react';

export default function TopBars(){
    
  // Sample data for bars with enhanced information
  const bars = [
    { 
      name: 'L\'APERO MARROKI', 
      image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=400&h=300&fit=crop',
      category: 'Moroccan Lounge',
      rating: 4.8,
      location: 'Medina Quarter',
      specialties: ['Cocktails', 'Live Music', 'Hookah'],
      atmosphere: 'Traditional'
    },
    { 
      name: 'Sky Bar', 
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
      category: 'Rooftop Bar',
      rating: 4.9,
      location: 'Twin Center',
      specialties: ['Craft Cocktails', 'City Views', 'DJ Sets'],
      atmosphere: 'Luxury'
    },
    { 
      name: 'The View 360', 
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=300&fit=crop',
      category: 'Panoramic Bar',
      rating: 4.7,
      location: 'Marina District',
      specialties: ['Wine Selection', 'Seafood', 'Sunset Views'],
      atmosphere: 'Sophisticated'
    },
    { 
      name: 'Casablanca Club', 
      image: 'https://images.unsplash.com/photo-1566733971017-fc4277cd12e0?w=400&h=300&fit=crop',
      category: 'Nightclub',
      rating: 4.6,
      location: 'Anfa Place',
      specialties: ['Electronic Music', 'Dance Floor', 'VIP Service'],
      atmosphere: 'Energetic'
    }
  ];

  return (
    <>
        <div className='container'>
            <div className="row add_bottom_30 pt-5">
                <div className="col-md-12 container">
                    <div className="main_title_3 clearfix fade-in-up" style={{
                        animationDelay: '0.4s'
                    }}>
                        <span style={{
                            display: 'block',
                            width: '60px',
                            height: '4px',
                            background: 'linear-gradient(90deg, var(--primary-color), var(--accent-pink))',
                            borderRadius: '2px',
                            marginBottom: '1rem'
                        }}></span>
                        <h2 style={{
                            fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                            fontWeight: '700',
                            color: 'var(--text-primary)',
                            marginBottom: '1rem'
                        }}>Top Bars</h2>
                        <p style={{
                            fontSize: '1.1rem',
                            color: 'var(--text-secondary)',
                            lineHeight: '1.7',
                            maxWidth: '600px'
                        }}>Discover the most vibrant nightlife spots in Casablanca with unique atmospheres, craft cocktails, and unforgettable experiences.</p>
                    </div>
                </div>
            </div>
            <section className="image">
                <div className="container">
                    <div className="row">
                        {bars.map((bar, index) => (
                            <div key={index} className="col-6 col-lg-3 col-sm-6 mb-4">
                                <div className="over hover-lift fade-in-up" style={{
                                    animationDelay: `${0.5 + index * 0.1}s`
                                }}>
                                    <img src={bar.image} alt={bar.name} style={{
                                        width: '100%',
                                        height: '250px',
                                        objectFit: 'cover',
                                        borderRadius: 'var(--border-radius-lg)'
                                    }} />
                                    <div className="info_1" style={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        padding: '1.5rem',
                                        background: 'linear-gradient(transparent, rgba(0,0,0,0.9))',
                                        color: 'white',
                                        borderRadius: '0 0 var(--border-radius-lg) var(--border-radius-lg)'
                                    }}>
                                        <div style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'flex-start',
                                            marginBottom: '0.5rem'
                                        }}>
                                            <h3 style={{
                                                fontSize: '1.1rem',
                                                fontWeight: '600',
                                                margin: 0,
                                                flex: 1
                                            }}>{bar.name}</h3>
                                            <div style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '0.25rem',
                                                background: 'rgba(255,255,255,0.2)',
                                                padding: '0.25rem 0.5rem',
                                                borderRadius: '20px',
                                                fontSize: '0.8rem'
                                            }}>
                                                <span style={{ color: 'var(--accent-color)' }}>★</span>
                                                <span>{bar.rating}</span>
                                            </div>
                                        </div>
                                        <p style={{
                                            fontSize: '0.9rem',
                                            margin: '0.5rem 0',
                                            opacity: 0.9
                                        }}>{bar.category}</p>
                                        <div style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            marginBottom: '0.5rem',
                                            fontSize: '0.8rem',
                                            opacity: 0.8
                                        }}>
                                            <span>📍</span>
                                            <span>{bar.location}</span>
                                        </div>
                                        <div style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            marginBottom: '0.5rem'
                                        }}>
                                            <div style={{
                                                display: 'flex',
                                                gap: '0.25rem'
                                            }}>
                                                {bar.specialties.slice(0, 2).map((specialty, idx) => (
                                                    <span key={idx} style={{
                                                        background: 'rgba(255,255,255,0.2)',
                                                        padding: '0.2rem 0.4rem',
                                                        borderRadius: '10px',
                                                        fontSize: '0.7rem',
                                                        opacity: 0.9
                                                    }}>{specialty}</span>
                                                ))}
                                            </div>
                                            <div style={{
                                                fontSize: '0.8rem',
                                                fontWeight: '500',
                                                background: 'rgba(255,255,255,0.2)',
                                                padding: '0.2rem 0.5rem',
                                                borderRadius: '12px',
                                                opacity: 0.9
                                            }}>
                                                {bar.atmosphere}
                                            </div>
                                        </div>
                                        <div style={{
                                            display: 'flex',
                                            flexWrap: 'wrap',
                                            gap: '0.25rem'
                                        }}>
                                            {bar.specialties.slice(2).map((specialty, idx) => (
                                                <span key={idx} style={{
                                                    background: 'rgba(255,255,255,0.15)',
                                                    padding: '0.15rem 0.4rem',
                                                    borderRadius: '8px',
                                                    fontSize: '0.7rem',
                                                    opacity: 0.8
                                                }}>{specialty}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    </>
  );
};


