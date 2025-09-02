// FamousShopSection.js
import React from 'react';

export default function FamousShopSection() {
  // Sample data for shops with enhanced information
  const shops = [
    { 
      name: 'Victoria Secretes', 
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop',
      category: 'Fashion & Beauty',
      rating: 4.8,
      location: 'Marina Mall'
    },
    { 
      name: 'Louis Vuitton', 
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
      category: 'Luxury Fashion',
      rating: 4.9,
      location: 'Morocco Mall'
    },
    { 
      name: 'Burberry', 
      image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=300&fit=crop',
      category: 'Premium Fashion',
      rating: 4.7,
      location: 'Anfa Place'
    },
    { 
      name: 'Pinko', 
      image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=300&fit=crop',
      category: 'Contemporary Fashion',
      rating: 4.6,
      location: 'Twin Center'
    }
  ];

  return (
    <>
        <div className="container">
            <div className="row add_bottom_30 pt-5">
                <div className="col-md-12">
                    <div className="main_title_3 clearfix fade-in-up" style={{
                        animationDelay: '0.1s'
                    }}>
                        <span style={{
                            display: 'block',
                            width: '60px',
                            height: '4px',
                            background: 'linear-gradient(90deg, var(--primary-color), var(--accent-purple))',
                            borderRadius: '2px',
                            marginBottom: '1rem'
                        }}></span>
                        <h2 style={{
                            fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                            fontWeight: '700',
                            color: 'var(--text-primary)',
                            marginBottom: '1rem'
                        }}>Famous Shops</h2>
                        <p style={{
                            fontSize: '1.1rem',
                            color: 'var(--text-secondary)',
                            lineHeight: '1.7',
                            maxWidth: '600px'
                        }}>Explore the most popular shopping destinations in Casablanca with exclusive brands and premium shopping experiences.</p>
                    </div>
                </div>
            </div>
            <section className="image">
                <div className="container">
                    <div className="row">
                        {shops.map((shop, index) => (
                            <div key={index} className="col-6 col-lg-3 col-sm-6 mb-4">
                                <div className="over hover-lift fade-in-up" style={{
                                    animationDelay: `${0.2 + index * 0.1}s`
                                }}>
                                    <img src={shop.image} alt={shop.name} style={{
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
                                            }}>{shop.name}</h3>
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
                                                <span>{shop.rating}</span>
                                            </div>
                                        </div>
                                        <p style={{
                                            fontSize: '0.9rem',
                                            margin: '0.5rem 0',
                                            opacity: 0.9
                                        }}>{shop.category}</p>
                                        <div style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            fontSize: '0.8rem',
                                            opacity: 0.8
                                        }}>
                                            <span>📍</span>
                                            <span>{shop.location}</span>
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


