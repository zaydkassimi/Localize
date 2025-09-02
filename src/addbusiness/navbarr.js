import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

export default function Navbarr(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light shadow-sm">
            <div className="container-fluid">
                <Link to={"/"}><img src="/logo.png" alt="LocaliZe Logo" width="180" height="55"/></Link>
                
                <ul className="navbar-nav me-auto mb-2 mb-lg-0"> 
                    <li className="nav-item">
                        <p className='text-secondary'>For Business</p>
                    </li>
                </ul>
            </div>
        </nav>
    )
}