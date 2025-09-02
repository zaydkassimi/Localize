import React from 'react';
import Hotels from './PopularHotelsSection';
import Shops from './FamousShopSection';
import Restaurants from './TopRestaurantsSection';
import Bars from './TopBars'

export default function Top(){
    return(
        <>
            <section className="hotel-bg" style={{
                position: 'relative',
                background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
                padding: '4rem 0',
                overflow: 'hidden'
            }}>
                <div className="hotel-overlay" style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    opacity: 0.1,
                    pointerEvents: 'none'
                }}>
                    <svg id="Layer_1" x="0px" y="0px" viewBox="0 0 300 300" style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '600px',
                        height: '600px'
                    }}>
                        <circle fill="var(--primary-color)" cx="585.24" cy="345.001" r="174.523" opacity="0.1"/>
                        <path fill="var(--accent-purple)" d="M849.874-71.046L744.595-2.283c50.05,30.524,94.241,72.338,128.376,124.602
                            C995.76,310.315,942.711,563.15,754.714,685.94l-633.173,413.554L87.752,1260.53l730.587-477.178
                            c241.708-157.87,309.915-482.952,152.045-724.66C936.934,7.479,895.954-35.914,849.874-71.046z" opacity="0.05"/>
                        <path fill="var(--accent-pink)" d="M214.189,761.051l105.28-68.764c-50.052-30.525-94.242-72.341-128.378-124.604
                            C68.304,379.688,121.354,126.85,309.348,4.061l633.177-413.556l33.785-161.035L245.725-93.351
                            C4.016,64.52-64.191,389.6,93.68,631.309C127.129,682.521,168.107,725.911,214.189,761.051z" opacity="0.05"/>
                        <path fill="var(--primary-color)" d="M374.464,656.367l124.208-81.126c-63.787-9.27-123.446-44.787-161.463-102.992
                            c-70.277-107.6-40.022-251.794,67.575-322.071l487.058-318.119l33.787-161.036L341.159,52.766
                            c-161.14,105.248-206.61,321.967-101.364,483.106C274.539,589.063,321.433,629.643,374.464,656.367z" opacity="0.1"/>
                    </svg>
                </div>
                <div className="container position-relative" style={{ zIndex: 2 }}>
                    <div className="text-center mb-5 fade-in-up">
                        <h2 className="gradient-text" style={{
                            fontSize: 'clamp(2rem, 4vw, 3rem)',
                            fontWeight: '800',
                            marginBottom: '1rem'
                        }}>
                            Discover Amazing Places
                        </h2>
                        <p style={{
                            fontSize: '1.1rem',
                            color: 'var(--text-secondary)',
                            maxWidth: '600px',
                            margin: '0 auto',
                            lineHeight: '1.6'
                        }}>
                            Explore the best businesses in Casablanca - from luxury hotels to trendy restaurants and vibrant nightlife spots
                        </p>
                    </div>
                </div>
                <Shops/>
                <Restaurants/>
                <Hotels/>
                <Bars/>
            </section>
        </>
    )
}