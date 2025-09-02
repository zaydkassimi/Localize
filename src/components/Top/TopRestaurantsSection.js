// TopRestaurantsSection.js
import React from 'react';

export default function TopRestaurantsSection(){
    
  // Sample data for restaurants with enhanced information
  const restaurants = [
    { 
      name: 'Da Alfredo', 
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop',
      category: 'Italian Cuisine',
      rating: 4.9,
      location: 'Marina District',
      specialties: ['Pizza', 'Pasta', 'Seafood']
    },
    { 
      name: 'Bistroter', 
      image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&h=300&fit=crop',
      category: 'French Bistro',
      rating: 4.7,
      location: 'Anfa Place',
      specialties: ['Steak', 'Wine', 'Desserts']
    },
    { 
      name: 'Da Luigi', 
      image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=400&h=300&fit=crop',
      category: 'Authentic Italian',
      rating: 4.8,
      location: 'Twin Center',
      specialties: ['Risotto', 'Truffle', 'Gnocchi']
    },
    { 
      name: 'Marco King', 
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
      category: 'Fine Dining',
      rating: 4.9,
      location: 'Morocco Mall',
      specialties: ['Lobster', 'Wagyu', 'Champagne']
    }
  ];

  return (
    <>
        <div className='container'>
            <div className="row add_bottom_30 pt-5">
                <div className="col-md-12 container">
                    <div className="main_title_3 clearfix fade-in-up" style={{
                        animationDelay: '0.2s'
                    }}>
                        <span style={{
                            display: 'block',
                            width: '60px',
                            height: '4px',
                            background: 'linear-gradient(90deg, var(--accent-purple), var(--accent-pink))',
                            borderRadius: '2px',
                            marginBottom: '1rem'
                        }}></span>
                        <h2 style={{
                            fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                            fontWeight: '700',
                            color: 'var(--text-primary)',
                            marginBottom: '1rem'
                        }}>Top Restaurants</h2>
                        <p style={{
                            fontSize: '1.1rem',
                            color: 'var(--text-secondary)',
                            lineHeight: '1.7',
                            maxWidth: '600px'
                        }}>Experience the finest dining in Casablanca with our curated selection of world-class restaurants and authentic cuisines.</p>
                    </div>
                </div>
            </div>
            <section className="image">
                <div className="container">
                    <div className="row">
                        {restaurants.map((restaurant, index) => (
                            <div key={index} className="col-6 col-lg-3 col-sm-6 mb-4">
                                <div className="over hover-lift fade-in-up" style={{
                                    animationDelay: `${0.3 + index * 0.1}s`
                                }}>
                                    <img src={restaurant.image} alt={restaurant.name} style={{
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
                                            }}>{restaurant.name}</h3>
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
                                                <span>{restaurant.rating}</span>
                                            </div>
                                        </div>
                                        <p style={{
                                            fontSize: '0.9rem',
                                            margin: '0.5rem 0',
                                            opacity: 0.9
                                        }}>{restaurant.category}</p>
                                        <div style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            marginBottom: '0.5rem',
                                            fontSize: '0.8rem',
                                            opacity: 0.8
                                        }}>
                                            <span>📍</span>
                                            <span>{restaurant.location}</span>
                                        </div>
                                        <div style={{
                                            display: 'flex',
                                            flexWrap: 'wrap',
                                            gap: '0.25rem'
                                        }}>
                                            {restaurant.specialties.map((specialty, idx) => (
                                                <span key={idx} style={{
                                                    background: 'rgba(255,255,255,0.2)',
                                                    padding: '0.2rem 0.5rem',
                                                    borderRadius: '12px',
                                                    fontSize: '0.7rem',
                                                    opacity: 0.9
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


