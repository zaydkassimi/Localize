import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Casa from '../Casa.json';
import Navbar from './navbar';
import Footer from './footer';

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredData = useMemo(() => {
        const search = searchTerm.toLowerCase();
        return Casa.filter(item => {
            const name = item.name1 ? item.name1.toLowerCase() : '';
            const title = item.title1 ? item.title1.toLowerCase() : '';
            const category = item.catigory ? item.catigory.toLowerCase() : '';
            const city = item.ville ? item.ville.toLowerCase() : '';
            
            return (
                name.includes(search) ||
                title.includes(search) ||
                category.includes(search) ||
                city.includes(search)
            );
        });
    }, [searchTerm]);

    return (
        <>
            <Navbar />
            <div className="container mt-5 pt-5">
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-center mb-4">Search Businesses</h1>
                        <form className='text-center mb-5'>
                            <div className="input-group mx-auto" style={{maxWidth: '500px'}}>
                                <input
                                    type="text"
                                    placeholder="Search for restaurants, hotels, bars, gyms..."
                                    value={searchTerm}
                                    onChange={handleChange}
                                    className='form-control form-control-lg'
                                />
                                <button className="btn btn-primary" type="submit">
                                    <i className="fa fa-search"></i>
                                </button>
                            </div>
                        </form>
                        
                        {searchTerm && (
                            <p className="text-center text-muted mb-4">
                                Found {filteredData.length} results for "{searchTerm}"
                            </p>
                        )}
                        
                        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4'>
                            {filteredData.map(item => (
                                <div key={item.id} className="col">
                                    <div className="card h-100 shadow-sm">
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
                                            <p className="card-text text-muted">{item.title1}</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <span className="badge bg-primary">{item.catigory}</span>
                                                <div className="d-flex align-items-center">
                                                    <span className="me-2">{item.note1}</span>
                                                    <i className="fa fa-star text-warning"></i>
                                                </div>
                                            </div>
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
                        
                        {filteredData.length === 0 && searchTerm && (
                            <div className="text-center mt-5">
                                <h4>No results found</h4>
                                <p className="text-muted">Try searching with different keywords</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Search;