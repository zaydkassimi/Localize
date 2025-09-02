import React from 'react';
import '../index.css'; 
import Navbarr from './navbarr';
import { Link } from 'react-router-dom';
import Footer from '../components/footer'

export default function Page7(){
    return(
        <>
            <Navbarr/> 
            <div className="container page1">
                <div className="row">
                    <div className="col-md-6 col-12 form1">
                        <Link to={"/"}> <p className='text-start iconn'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
                            </svg>
                        </p></Link>
                        <div className="alert alert-success" role="alert">
                            <h2 className='end'>
                                Now your post is on display!
                            </h2>
                        </div>
                    </div>
                    <div className="col-md-6 col-9 imagee">
                        <img src="./vectors/4351373.jpg" className="vector1" alt="Success illustration"/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}