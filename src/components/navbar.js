import { Link } from 'react-router-dom';
import React from 'react';
import '../index.css';
import { Helmet } from 'react-helmet';

export default function Navbar(){
    return(
        <>
            <Helmet>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" rel="stylesheet" />
                
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Newsreader:ital,wght@0,600;1,600&amp;display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,300;0,500;0,600;0,700;1,300;1,500;1,600;1,700&amp;display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,400;1,400&amp;display=swap" rel="stylesheet" />
              </Helmet>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm" id="mainNav">
                <div className="container-fluid">
                    <Link to={"/"}><img src="/logo.png" alt="LocaliZe Logo" width="180" height="55"/></Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                        <i className="bi-list"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ms-auto me-4 my-3 my-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to={"/posts"}>All Businesses</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/search"}>Search</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/Login"}>LogIn</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/SingUp"}>Sign Up</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/contact"}>Contact</Link>
                            </li>
                        </ul>

                        <Link className="nav-link" to={"/page1"}>
                            <button className="btn btn-success rounded-pill px-3 mb-2 mb-lg-0" data-bs-toggle="modal" data-bs-target="#feedbackModal">
                                <span className="d-flex align-items-center">
                                    <i className="bi bi-patch-plus-fill me-2"></i>
                                    <span className="small">Add business</span>
                                </span>
                            </button>
                        </Link>
                        
                        <div className="dropdown-center dropstart">
                            <i className="bi bi-person-fill" type="button" data-bs-toggle="dropdown" aria-expanded="false"></i>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Profile</a></li>
                                <li><a className="dropdown-item text-danger" href="#">Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}