import React from 'react';
import '../index.css';
import Navbar from "./navbar"

export default function Header(){
    return(
        <>
            <Navbar/>
            <header className="masthead">
                <div className="container px-5">
                    <div className="row gx-5 align-items-center">
                        <div className="col-lg-6">
                            <div className="mb-5 mb-lg-0 text-lg-start fade-in-up">
                                <h1 className="h11 mb-4" style={{
                                    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                                    fontWeight: '800',
                                    lineHeight: '1.1',
                                    marginBottom: '1.5rem'
                                }}>
                                    Discover your city like never before
                                </h1>
                                <p className="lead mb-4" style={{
                                    fontSize: '1.25rem',
                                    color: 'var(--text-secondary)',
                                    marginBottom: '2rem',
                                    fontWeight: '400',
                                    lineHeight: '1.6'
                                }}>
                                    Find the best restaurants, hotels, bars, and shops in Casablanca with our intelligent discovery platform
                                </p>
                                
                                {/* Enhanced Search Section */}
                                <div className="search-section mb-4">
                                    <div className="search-container" style={{
                                        position: 'relative',
                                        maxWidth: '500px',
                                        marginBottom: '1.5rem'
                                    }}>
                                        <div className="search-input-wrapper" style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            background: 'var(--bg-white)',
                                            borderRadius: '50px',
                                            boxShadow: 'var(--shadow-xl)',
                                            border: '2px solid transparent',
                                            transition: 'var(--transition)',
                                            overflow: 'hidden'
                                        }}>
                                            <input 
                                                type='text' 
                                                placeholder='Search for restaurants, hotels, bars...' 
                                                className='inp'
                                                style={{
                                                    flex: 1,
                                                    border: 'none',
                                                    padding: '1.2rem 1.5rem',
                                                    fontSize: '1rem',
                                                    background: 'transparent',
                                                    outline: 'none'
                                                }}
                                            />
                                            <button type='submit' className='bttt' style={{
                                                margin: '8px',
                                                width: '44px',
                                                height: '44px',
                                                borderRadius: '50%',
                                                background: 'linear-gradient(135deg, var(--primary-color), var(--accent-purple))',
                                                border: 'none',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                cursor: 'pointer',
                                                transition: 'var(--transition)',
                                                boxShadow: 'var(--shadow-md)',
                                                position: 'relative'
                                            }}>
                                                <i className="bi bi-search" style={{
                                                    color: 'white',
                                                    fontSize: '1.1rem',
                                                    position: 'absolute',
                                                    top: '50%',
                                                    left: '50%',
                                                    transform: 'translate(-50%, -50%)'
                                                }}></i>
                                            </button>
                                        </div>
                                    </div>
                                    
                                    {/* Feature Highlights */}
                                    <div className="feature-highlights" style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '2rem',
                                        flexWrap: 'wrap'
                                    }}>
                                        <div className="feature-item" style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            fontSize: '0.9rem',
                                            color: 'var(--text-secondary)'
                                        }}>
                                            <span style={{
                                                background: 'var(--primary-color)',
                                                color: 'white',
                                                width: '24px',
                                                height: '24px',
                                                borderRadius: '50%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontSize: '0.8rem',
                                                fontWeight: '600'
                                            }}>🔍</span>
                                            <span>Over 1000+ businesses</span>
                                        </div>
                                        
                                        <div className="feature-item" style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            fontSize: '0.9rem',
                                            color: 'var(--text-secondary)'
                                        }}>
                                            <span style={{
                                                background: 'var(--accent-color)',
                                                color: 'white',
                                                width: '24px',
                                                height: '24px',
                                                borderRadius: '50%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontSize: '0.8rem',
                                                fontWeight: '600'
                                            }}>⭐</span>
                                            <span>4.8/5 user rating</span>
                                        </div>
                                        
                                        <div className="feature-item" style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            fontSize: '0.9rem',
                                            color: 'var(--text-secondary)'
                                        }}>
                                            <span style={{
                                                background: 'var(--accent-purple)',
                                                color: 'white',
                                                width: '24px',
                                                height: '24px',
                                                borderRadius: '50%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontSize: '0.8rem',
                                                fontWeight: '600'
                                            }}>🚀</span>
                                            <span>Instant results</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="masthead-device-mockup fade-in-up" style={{
                                animationDelay: '0.3s'
                            }}>
                                <svg className="circle" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <linearGradient id="circleGradient" gradientTransform="rotate(45)">
                                            <stop className="gradient-start-color" offset="0%"></stop>
                                            <stop className="gradient-end-color" offset="100%"></stop>
                                        </linearGradient>
                                    </defs>
                                    <circle cx="50" cy="50" r="50"></circle>
                                </svg>
                                <svg className="shape-1 d-none d-sm-block" viewBox="0 0 240.83 240.83" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="-32.54" y="78.39" width="305.92" height="84.05" rx="42.03" transform="translate(120.42 -49.88) rotate(45)"></rect>
                                    <rect x="-32.54" y="78.39" width="305.92" height="84.05" rx="42.03" transform="translate(-49.88 120.42) rotate(-45)"></rect>
                                </svg>
                                <svg className="shape-2 d-none d-sm-block" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="50" cy="50" r="50"></circle>
                                </svg>
                                <div className="device-wrapper">
                                    <div className="device" data-device="iPhoneX" data-orientation="portrait" data-color="black">
                                        <div className="screen bg-black" style={{
                                            borderRadius: '20px',
                                            overflow: 'hidden',
                                            boxShadow: 'var(--shadow-xl)',
                                            background: 'white'
                                        }}>
                                            {/* iPhone Screen Content - LocaliZe App */}
                                            <div style={{
                                                height: '100%',
                                                background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
                                                padding: '1rem',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                gap: '0.5rem'
                                            }}>
                                                {/* App Header */}
                                                <div style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'space-between',
                                                    padding: '0.5rem 0',
                                                    borderBottom: '1px solid rgba(0,0,0,0.1)'
                                                }}>
                                                    <div style={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '0.5rem'
                                                    }}>
                                                        <div style={{
                                                            width: '20px',
                                                            height: '20px',
                                                            background: 'var(--primary-color)',
                                                            borderRadius: '50%'
                                                        }}></div>
                                                        <span style={{
                                                            fontSize: '0.8rem',
                                                            fontWeight: '600',
                                                            color: 'var(--text-primary)'
                                                        }}>LocaliZe</span>
                                                    </div>
                                                    <div style={{
                                                        width: '16px',
                                                        height: '16px',
                                                        background: 'var(--accent-purple)',
                                                        borderRadius: '50%'
                                                    }}></div>
                                                </div>

                                                {/* Search Bar */}
                                                <div style={{
                                                    background: 'white',
                                                    borderRadius: '20px',
                                                    padding: '0.5rem',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '0.5rem',
                                                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                                                }}>
                                                    <div style={{
                                                        width: '12px',
                                                        height: '12px',
                                                        background: 'var(--text-secondary)',
                                                        borderRadius: '50%'
                                                    }}></div>
                                                    <span style={{
                                                        fontSize: '0.6rem',
                                                        color: 'var(--text-secondary)',
                                                        flex: 1
                                                    }}>Search businesses...</span>
                                                    <div style={{
                                                        width: '16px',
                                                        height: '16px',
                                                        background: 'var(--primary-color)',
                                                        borderRadius: '50%'
                                                    }}></div>
                                                </div>

                                                {/* Business Cards */}
                                                <div style={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    gap: '0.5rem',
                                                    flex: 1
                                                }}>
                                                    {/* Card 1 */}
                                                    <div style={{
                                                        background: 'white',
                                                        borderRadius: '12px',
                                                        padding: '0.5rem',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '0.5rem',
                                                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                                                    }}>
                                                        <div style={{
                                                            width: '24px',
                                                            height: '24px',
                                                            background: 'var(--primary-color)',
                                                            borderRadius: '6px'
                                                        }}></div>
                                                        <div style={{ flex: 1 }}>
                                                            <div style={{
                                                                fontSize: '0.6rem',
                                                                fontWeight: '600',
                                                                color: 'var(--text-primary)'
                                                            }}>Da Alfredo</div>
                                                            <div style={{
                                                                fontSize: '0.5rem',
                                                                color: 'var(--text-secondary)'
                                                            }}>Italian Restaurant</div>
                                                        </div>
                                                        <div style={{
                                                            fontSize: '0.5rem',
                                                            color: 'var(--accent-color)',
                                                            fontWeight: '600'
                                                        }}>4.9★</div>
                                                    </div>

                                                    {/* Card 2 */}
                                                    <div style={{
                                                        background: 'white',
                                                        borderRadius: '12px',
                                                        padding: '0.5rem',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '0.5rem',
                                                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                                                    }}>
                                                        <div style={{
                                                            width: '24px',
                                                            height: '24px',
                                                            background: 'var(--accent-purple)',
                                                            borderRadius: '6px'
                                                        }}></div>
                                                        <div style={{ flex: 1 }}>
                                                            <div style={{
                                                                fontSize: '0.6rem',
                                                                fontWeight: '600',
                                                                color: 'var(--text-primary)'
                                                            }}>Sky Bar</div>
                                                            <div style={{
                                                                fontSize: '0.5rem',
                                                                color: 'var(--text-secondary)'
                                                            }}>Rooftop Bar</div>
                                                        </div>
                                                        <div style={{
                                                            fontSize: '0.5rem',
                                                            color: 'var(--accent-color)',
                                                            fontWeight: '600'
                                                        }}>4.8★</div>
                                                    </div>

                                                    {/* Card 3 */}
                                                    <div style={{
                                                        background: 'white',
                                                        borderRadius: '12px',
                                                        padding: '0.5rem',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '0.5rem',
                                                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                                                    }}>
                                                        <div style={{
                                                            width: '24px',
                                                            height: '24px',
                                                            background: 'var(--accent-pink)',
                                                            borderRadius: '6px'
                                                        }}></div>
                                                        <div style={{ flex: 1 }}>
                                                            <div style={{
                                                                fontSize: '0.6rem',
                                                                fontWeight: '600',
                                                                color: 'var(--text-primary)'
                                                            }}>Hotel Barcelo</div>
                                                            <div style={{
                                                                fontSize: '0.5rem',
                                                                color: 'var(--text-secondary)'
                                                            }}>Luxury Hotel</div>
                                                        </div>
                                                        <div style={{
                                                            fontSize: '0.5rem',
                                                            color: 'var(--accent-color)',
                                                            fontWeight: '600'
                                                        }}>4.7★</div>
                                                    </div>
                                                </div>

                                                {/* Bottom Navigation */}
                                                <div style={{
                                                    display: 'flex',
                                                    justifyContent: 'space-around',
                                                    padding: '0.5rem 0',
                                                    borderTop: '1px solid rgba(0,0,0,0.1)'
                                                }}>
                                                    {['🏠', '🔍', '⭐', '👤'].map((icon, index) => (
                                                        <div key={index} style={{
                                                            width: '20px',
                                                            height: '20px',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            fontSize: '0.8rem',
                                                            color: index === 0 ? 'var(--primary-color)' : 'var(--text-secondary)'
                                                        }}>
                                                            {icon}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}