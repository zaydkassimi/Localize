import React from 'react';
import '../index.css';
import Header from './header';
import Top from './Top/Top';
import Us from './Us';
import Faqs from './faqss';
import Footer from './footer';

export default function Home(){
    return(
        <>
            {/* Creative Floating Background Elements */}
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: -1,
                overflow: 'hidden'
            }}>
                {/* Floating circles */}
                <div className="floating" style={{
                    position: 'absolute',
                    top: '20%',
                    left: '10%',
                    width: '100px',
                    height: '100px',
                    background: 'radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 70%)',
                    borderRadius: '50%',
                    animation: 'floating 6s ease-in-out infinite'
                }}></div>
                
                <div className="floating" style={{
                    position: 'absolute',
                    top: '60%',
                    right: '15%',
                    width: '150px',
                    height: '150px',
                    background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)',
                    borderRadius: '50%',
                    animation: 'floating 8s ease-in-out infinite reverse'
                }}></div>
                
                <div className="floating" style={{
                    position: 'absolute',
                    top: '80%',
                    left: '20%',
                    width: '80px',
                    height: '80px',
                    background: 'radial-gradient(circle, rgba(236, 72, 153, 0.1) 0%, transparent 70%)',
                    borderRadius: '50%',
                    animation: 'floating 7s ease-in-out infinite'
                }}></div>
                
                {/* Geometric shapes */}
                <div style={{
                    position: 'absolute',
                    top: '30%',
                    right: '25%',
                    width: '60px',
                    height: '60px',
                    background: 'linear-gradient(45deg, rgba(16, 185, 129, 0.1), rgba(139, 92, 246, 0.1))',
                    transform: 'rotate(45deg)',
                    animation: 'floating 9s ease-in-out infinite reverse'
                }}></div>
                
                <div style={{
                    position: 'absolute',
                    top: '70%',
                    right: '5%',
                    width: '40px',
                    height: '40px',
                    background: 'linear-gradient(45deg, rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1))',
                    borderRadius: '50%',
                    animation: 'floating 5s ease-in-out infinite'
                }}></div>
            </div>

            {/* Main Content */}
            <Header/>
            <Top/>
            
            {/* Creative Stats Section */}
            <section style={{
                background: 'linear-gradient(135deg, var(--primary-color), var(--accent-purple))',
                padding: '4rem 0',
                margin: '2rem 0',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div className="container">
                    <div className="row text-center">
                        <div className="col-md-3 col-6 mb-4">
                            <div className="fade-in-up" style={{
                                animationDelay: '0.1s'
                            }}>
                                <div style={{
                                    fontSize: '3rem',
                                    fontWeight: '800',
                                    color: 'white',
                                    marginBottom: '0.5rem'
                                }}>1000+</div>
                                <div style={{
                                    fontSize: '1.1rem',
                                    color: 'rgba(255,255,255,0.9)',
                                    fontWeight: '500'
                                }}>Businesses</div>
                            </div>
                        </div>
                        <div className="col-md-3 col-6 mb-4">
                            <div className="fade-in-up" style={{
                                animationDelay: '0.2s'
                            }}>
                                <div style={{
                                    fontSize: '3rem',
                                    fontWeight: '800',
                                    color: 'white',
                                    marginBottom: '0.5rem'
                                }}>50K+</div>
                                <div style={{
                                    fontSize: '1.1rem',
                                    color: 'rgba(255,255,255,0.9)',
                                    fontWeight: '500'
                                }}>Happy Users</div>
                            </div>
                        </div>
                        <div className="col-md-3 col-6 mb-4">
                            <div className="fade-in-up" style={{
                                animationDelay: '0.3s'
                            }}>
                                <div style={{
                                    fontSize: '3rem',
                                    fontWeight: '800',
                                    color: 'white',
                                    marginBottom: '0.5rem'
                                }}>4.8★</div>
                                <div style={{
                                    fontSize: '1.1rem',
                                    color: 'rgba(255,255,255,0.9)',
                                    fontWeight: '500'
                                }}>User Rating</div>
                            </div>
                        </div>
                        <div className="col-md-3 col-6 mb-4">
                            <div className="fade-in-up" style={{
                                animationDelay: '0.4s'
                            }}>
                                <div style={{
                                    fontSize: '3rem',
                                    fontWeight: '800',
                                    color: 'white',
                                    marginBottom: '0.5rem'
                                }}>24/7</div>
                                <div style={{
                                    fontSize: '1.1rem',
                                    color: 'rgba(255,255,255,0.9)',
                                    fontWeight: '500'
                                }}>Support</div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Creative background elements */}
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '300px',
                    height: '300px',
                    background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
                    borderRadius: '50%',
                    animation: 'floating 10s ease-in-out infinite'
                }}></div>
            </section>
            
            <Us/>
            <Faqs/>
            <Footer/>
            
            {/* Creative Scroll Progress Bar */}
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '3px',
                background: 'linear-gradient(90deg, var(--primary-color), var(--accent-purple), var(--accent-pink))',
                transform: 'scaleX(0)',
                transformOrigin: 'left',
                zIndex: 9999,
                transition: 'transform 0.1s ease-out'
            }} id="scroll-progress"></div>
            
            {/* Creative Back to Top Button */}
            <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                style={{
                    position: 'fixed',
                    bottom: '30px',
                    right: '30px',
                    width: '50px',
                    height: '50px',
                    background: 'linear-gradient(135deg, var(--primary-color), var(--accent-purple))',
                    border: 'none',
                    borderRadius: '50%',
                    color: 'white',
                    fontSize: '1.2rem',
                    cursor: 'pointer',
                    boxShadow: 'var(--shadow-lg)',
                    transition: 'var(--transition)',
                    zIndex: 1000,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: 0,
                    visibility: 'hidden'
                }}
                onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.1) translateY(-5px)';
                    e.target.style.boxShadow = 'var(--shadow-xl)';
                }}
                onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1) translateY(0)';
                    e.target.style.boxShadow = 'var(--shadow-lg)';
                }}
                id="back-to-top"
            >
                ↑
            </button>
        </>
    )
}