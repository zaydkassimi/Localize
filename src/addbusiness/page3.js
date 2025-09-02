import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css'; 
import Navbarr from './navbarr';
import Footer from '../components/footer'

export default function Page3(){
    return(
        <>
            <Navbarr/>
            <div className="container page1">
                <div className="row">
                    <div className="col-md-6 col-12 form1">
                        <Link to={"/page2"}><p className='text-start iconn'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
                            </svg>
                        </p></Link> 

                        <h2 className='hello'>Give customers a phone number and email so they can communicate with you</h2>
                        <form className='mt-4 form2'>
                            <input type='text' className='inputB form-control' placeholder='Business phone number' /><br/>
                            <input type="email" className='inputB form-control' placeholder='name@example.com' /><br/>
                            <Link to={"/page4"}> <button type="submit" className="btn btn-success mt-4 btttn">Next</button></Link> 
                        </form>
                    </div>
                    <div className="col-md-6 col-9 imagee">
                        <img src="./vectors/4578429.jpg" className="vector1" alt="Contact illustration"/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}