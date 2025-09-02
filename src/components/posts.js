import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Casa from '../Casa.json';
import Navbar from './navbar';
import Footer from './footer';

const Posts = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedCity, setSelectedCity] = useState('All');

    // Get unique categories and cities
    const categories = useMemo(() => {
        const cats = [...new Set(Casa.map(item => item.catigory))];
        return ['All', ...cats];
    }, []);

    const cities = useMemo(() => {
        const cityList = [...new Set(Casa.map(item => item.ville))];
        return ['All', ...cityList];
    }, []);

    // Filter businesses based on selected category and city
    const filteredBusinesses = useMemo(() => {
        return Casa.filter(item => {
            const categoryMatch = selectedCategory === 'All' || item.catigory === selectedCategory;
            const cityMatch = selectedCity === 'All' || item.ville === selectedCity;
            return categoryMatch && cityMatch;
        });
    }, [selectedCategory, selectedCity]);

    return (
        <>
            <Navbar />
            <div className="container mt-5 pt-5">
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-center mb-4">All Businesses</h1>
                        <p className="text-center text-muted mb-5">Discover amazing places in Casablanca and beyond</p>
                        
                        {/* Filters */}
                        <div className="row mb-4">
                            <div className="col-md-6">
                                <label className="form-label">Category:</label>
                                <select 
                                    className="form-select" 
                                    value={selectedCategory} 
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                >
                                    {categories.map(cat => (
                                        <option key={cat} value={cat}>{cat}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="col-md-6">
                                <label className="form-label">City:</label>
                                <select 
                                    className="form-select" 
                                    value={selectedCity} 
                                    onChange={(e) => setSelectedCity(e.target.value)}
                                >
                                    {cities.map(city => (
                                        <option key={city} value={city}>{city}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Results count */}
                        <div className="mb-4">
                            <p className="text-muted">
                                Showing {filteredBusinesses.length} of {Casa.length} businesses
                                {selectedCategory !== 'All' && ` in ${selectedCategory}`}
                                {selectedCity !== 'All' && ` from ${selectedCity}`}
                            </p>
                        </div>
                        
                        {/* Business Grid */}
                        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4'>
                            {filteredBusinesses.map(item => (
                                <div key={item.id} className="col">
                                    <div className="card h-100 shadow-sm hover-shadow">
                                        <Link to={`/pub/${item.id}`} className="text-decoration-none">
                                            <img 
                                                src={item.image1} 
                                                alt={item.name1} 
                                                className="card-img-top" 
                                                style={{height: "200px", objectFit: "cover"}} 
                                            />
                                        </Link>
                                        <div className="card-body">
                                            <Link to={`/pub/${item.id}`} className="text-decoration-none">
                                                <h5 className="card-title text-dark">{item.name1}</h5>
                                            </Link>
                                            <p className="card-text text-muted small">{item.title1}</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <span className="badge bg-primary">{item.catigory}</span>
                                                <div className="d-flex align-items-center">
                                                    <span className="me-2">{item.note1}</span>
                                                    <i className="fa fa-star text-warning"></i>
                                                </div>
                                            </div>
                                            <p className="card-text mt-2">
                                                <small className="text-muted">
                                                    <i className="fa fa-map-marker-alt me-1"></i>
                                                    {item.ville}
                                                </small>
                                            </p>
                                        </div>
                                        <div className="card-footer bg-transparent">
                                            <Link to={`/pub/${item.id}`} className="btn btn-outline-primary btn-sm w-100">
                                                View Details
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        {filteredBusinesses.length === 0 && (
                            <div className="text-center mt-5">
                                <h4>No businesses found</h4>
                                <p className="text-muted">Try adjusting your filters</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Posts;