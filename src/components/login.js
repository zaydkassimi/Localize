import React, { useState } from "react";
import '../index.css';
import Footer from './footer';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
    
        try {
          const response = await axios.post('http://localhost:8000/api/login', {
            email,
            password,
          });
    
          localStorage.setItem('token', response.data.access_token);
          setError('');
          alert('Login successful!');
        } catch (err) {
          setError('Invalid login details');
        }
      };
    
    return(
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-10 col-lg-12 col-md-9">
                        <div className="card o-hidden border-0 shadow-lg my-5">
                            <div className="card-body p-0">
                                <div className="row">
                                    <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                                    <div className="col-lg-6">
                                        <div className="p-5">
                                            <div className="text-center">
                                                <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                            </div>
                                            <form className="user" onSubmit={handleLogin}>
                                                <div className="form-group">
                                                    <input type="email" className="form-control form-control-user"
                                                        id="exampleInputEmail" aria-describedby="emailHelp"
                                                        placeholder="Enter Email Address..." value={email} onChange={(e) => setEmail(e.target.value)} required/>
                                                </div>
                                                <div className="form-group">
                                                    <input type="password" className="form-control form-control-user"
                                                        id="exampleInputPassword" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                                                </div>
                                               
                                                {error && <p className="text-danger">{error}</p>}
                                                <button type="submit" className="btn btn-success btn-user btn-block">
                                                    Login
                                                </button>
                                            </form>
                                            <hr/>
                                           
                                            <div className="text-center">
                                                <a className="small" href="register.html">Create an Account!</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
export default Login;