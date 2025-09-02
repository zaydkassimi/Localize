import React from 'react';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Casa from '../Casa.json';

export default function Single(){
    const { id } = useParams();
    
    // Find the business by ID
    const business = Casa.find(item => item.id === parseInt(id));
    
    if (!business) {
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12 text-center">
                        <h2>Business not found</h2>
                        <Link to="/" className="btn btn-primary">Go back home</Link>
                    </div>
                </div>
            </div>
        );
    }
    
    return(
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="box">
                            <div className="images">
                                <div className="img-holder active">
                                    <img src={business.image1} alt={business.name1} className="img-fluid rounded"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="business-details">
                            <h1 className="mb-3">{business.name1}</h1>
                            <p className="text-muted mb-2">{business.title1}</p>
                            <div className="rating mb-3">
                                <span className="badge bg-warning text-dark me-2">
                                    <i className="fa fa-star"></i> {business.note1}/5
                                </span>
                                <span className="badge bg-info">{business.catigory}</span>
                            </div>
                            <p className="mb-3"><strong>Location:</strong> {business.ville}</p>
                            
                            <div className="actions mt-4">
                                <button className="btn btn-primary me-2">
                                    <i className="fa fa-phone"></i> Contact
                                </button>
                                <button className="btn btn-outline-primary me-2">
                                    <i className="fa fa-map-marker"></i> Directions
                                </button>
                                <button className="btn btn-outline-success">
                                    <i className="fa fa-heart"></i> Save
                                </button>
                            </div>
                            
                            <div className="reviews mt-4">
                                <h4>Reviews</h4>
                                <div className="review-item border-bottom pb-2 mb-2">
                                    <div className="d-flex justify-content-between">
                                        <strong>John Doe</strong>
                                        <span className="text-warning">★★★★★</span>
                                    </div>
                                    <p className="mb-1">Great place! Highly recommended.</p>
                                    <small className="text-muted">2 days ago</small>
                                </div>
                                <div className="review-item border-bottom pb-2 mb-2">
                                    <div className="d-flex justify-content-between">
                                        <strong>Jane Smith</strong>
                                        <span className="text-warning">★★★★☆</span>
                                    </div>
                                    <p className="mb-1">Good experience overall.</p>
                                    <small className="text-muted">1 week ago</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}