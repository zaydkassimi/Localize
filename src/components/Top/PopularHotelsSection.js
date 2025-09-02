
import React, { useState } from 'react';
import PubsH from './PubsHotel.json'
import { Link } from 'react-router-dom';

export default function PopularHotelsSection(){
    const [items, setItems] = useState(PubsH);
    
    // Enhanced hotel data with additional information
    const enhancedHotels = items.map((hotel, index) => ({
        ...hotel,
        rating: (4.5 + Math.random() * 0.5).toFixed(1), // Random rating between 4.5-5.0
        amenities: ['WiFi', 'Pool', 'Spa', 'Restaurant'],
        price: Math.floor(Math.random() * 200) + 100, // Random price $100-300
        location: ['Marina District', 'Anfa Place', 'Twin Center', 'Morocco Mall'][index % 4]
    }));

    return (
        <>
            <div className='container'>
                <div className="row add_bottom_30 pt-5">
                    <div className="col-md-12">
                        <div className="main_title_3 clearfix fade-in-up" style={{
                            animationDelay: '0.3s'
                        }}>
                            <span style={{
                                display: 'block',
                                width: '60px',
                                height: '4px',
                                background: 'linear-gradient(90deg, var(--accent-pink), var(--primary-color))',
                                borderRadius: '2px',
                                marginBottom: '1rem'
                            }}></span>
                            <h2 style={{
                                fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                                fontWeight: '700',
                                color: 'var(--text-primary)',
                                marginBottom: '1rem'
                            }}>Popular Hotels</h2>
                            <p style={{
                                fontSize: '1.1rem',
                                color: 'var(--text-secondary)',
                                lineHeight: '1.7',
                                maxWidth: '600px'
                            }}>Discover the best hotels in Casablanca with amazing amenities, luxury services, and unforgettable experiences.</p>
                        </div>
                    </div>
                </div>
                <section className="image">
                    <div className="container">
                        <div className="row">
                            {enhancedHotels.map((hotel, index) => (
                                <div key={index} className="col-lg-3 col-sm-6 col-6 mb-4">
                                    <div className="over hover-lift fade-in-up" style={{
                                        animationDelay: `${0.4 + index * 0.1}s`
                                    }}>
                                        <Link to={`/pub/${hotel.id}`} style={{ textDecoration: 'none' }}>
                                            <img src={hotel.image} alt={hotel.name} style={{
                                                width: '100%',
                                                height: '250px',
                                                objectFit: 'cover',
                                                borderRadius: 'var(--border-radius-lg)'
                                            }} />
                                        </Link>
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
                                                }}>{hotel.name}</h3>
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
                                                    <span>{hotel.rating}</span>
                                                </div>
                                            </div>
                                            <div style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '0.5rem',
                                                marginBottom: '0.5rem',
                                                fontSize: '0.8rem',
                                                opacity: 0.8
                                            }}>
                                                <span>📍</span>
                                                <span>{hotel.location}</span>
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
                                                    {hotel.amenities.slice(0, 3).map((amenity, idx) => (
                                                        <span key={idx} style={{
                                                            background: 'rgba(255,255,255,0.2)',
                                                            padding: '0.2rem 0.4rem',
                                                            borderRadius: '10px',
                                                            fontSize: '0.7rem',
                                                            opacity: 0.9
                                                        }}>{amenity}</span>
                                                    ))}
                                                </div>
                                                <div style={{
                                                    fontSize: '1rem',
                                                    fontWeight: '600',
                                                    color: 'var(--primary-color)'
                                                }}>
                                                    ${hotel.price}
                                                </div>
                                            </div>
                                            <div className="cat_star" style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '0.25rem'
                                            }}>
                                                {[...Array(5)].map((_, i) => (
                                                    <i key={i} className="fa fa-star" style={{
                                                        color: i < Math.floor(parseFloat(hotel.rating)) ? 'var(--accent-color)' : 'rgba(255,255,255,0.3)',
                                                        fontSize: '0.8rem'
                                                    }}></i>
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


