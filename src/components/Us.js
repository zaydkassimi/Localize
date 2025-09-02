import React from 'react';
import '../index.css';

export default function Us(){
    return (
        <>
            <div className="call_section">
                <div className="wrapper">
                    <div className="container">
                        <div className="main_title_2 text-center">
                            <span><em></em></span>
                            <h2 className="fade-in-up">Why Choose LocaliZe</h2>
                            <p className="fade-in-up" style={{
                                fontSize: '1.1rem',
                                color: 'var(--text-secondary)',
                                maxWidth: '600px',
                                margin: '0 auto 3rem',
                                lineHeight: '1.6'
                            }}>
                                Experience the future of local business discovery with our innovative platform
                            </p>
                        </div>
                        <div className="row">
                            <div className="col-md-4 mb-4">
                                <div className="box_how text-center hover-lift fade-in-up" style={{
                                    animationDelay: '0.1s'
                                }}>
                                    <div style={{
                                        width: '80px',
                                        height: '80px',
                                        borderRadius: '50%',
                                        background: 'linear-gradient(135deg, var(--primary-color), var(--primary-light))',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        margin: '0 auto 1.5rem',
                                        boxShadow: 'var(--shadow-md)'
                                    }}>
                                        <i className="bi bi-search" style={{
                                            fontSize: '2rem',
                                            color: 'white'
                                        }}></i>
                                    </div>
                                    <h3>Discover Amazing Places</h3>
                                    <p>Find the best restaurants, hotels, bars, and shops in Casablanca with our comprehensive directory and intelligent search.</p>
                                </div>
                            </div>
                            <div className="col-md-4 mb-4">
                                <div className="box_how text-center hover-lift fade-in-up" style={{
                                    animationDelay: '0.2s'
                                }}>
                                    <div style={{
                                        width: '80px',
                                        height: '80px',
                                        borderRadius: '50%',
                                        background: 'linear-gradient(135deg, var(--primary-color), var(--primary-light))',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        margin: '0 auto 1.5rem',
                                        boxShadow: 'var(--shadow-md)'
                                    }}>
                                        <i className="bi bi-info-lg" style={{
                                            fontSize: '2rem',
                                            color: 'white'
                                        }}></i>
                                    </div>
                                    <h3>Detailed Business Info</h3>
                                    <p>Get complete information about each business including ratings, reviews, location, photos, and contact details.</p>
                                </div>
                            </div>
                            <div className="col-md-4 mb-4">
                                <div className="box_how text-center hover-lift fade-in-up" style={{
                                    animationDelay: '0.3s'
                                }}>
                                    <div style={{
                                        width: '80px',
                                        height: '80px',
                                        borderRadius: '50%',
                                        background: 'linear-gradient(135deg, var(--primary-color), var(--primary-light))',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        margin: '0 auto 1.5rem',
                                        boxShadow: 'var(--shadow-md)'
                                    }}>
                                        <i className="bi bi-trophy-fill" style={{
                                            fontSize: '2rem',
                                            color: 'white'
                                        }}></i>
                                    </div>
                                    <h3>Connect & Engage</h3>
                                    <p>Rate businesses, leave reviews, and connect directly with local businesses for the best experience possible.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}