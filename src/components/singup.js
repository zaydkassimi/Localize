import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './footer';
import axios from 'axios';

function Register(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [error, setError] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
    
        try {
          const response = await axios.post('http://localhost:8000/api/register', {
            name: `${firstName} ${lastName}`,
            email,
            password,
          });
    
          localStorage.setItem('token', response.data.access_token);
          setError('');
          alert('Registration successful!');
        } catch (err) {
          setError('Registration failed');
        }
      };
   

    return(
        <>
            <div className="container">
                <div className="card o-hidden border-0 shadow-lg my-5">
                    <div className="card-body p-0">
                        <div className="row">
                            <div className="col-lg-5 d-none d-lg-block bg-register-image"></div>
                            <div className="col-lg-7">
                                <div className="p-5">
                                    <div className="text-center">
                                        <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                                    </div>
                                    <form className="user" onSubmit={handleRegister}>
                                        <div className="form-group row">
                                            <div className="col-sm-6 mb-3 mb-sm-0">
                                                <input type="text" className="form-control form-control-user" id="exampleFirstName"
                                                    placeholder="First Name" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} required/>
                                            </div>
                                            <div className="col-sm-6 mb-3 mb-sm-0">
                                                <input type="text" className="form-control form-control-user" id="exampleLastName"
                                                    placeholder="Last Name" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} required/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <input type="email" className="form-control form-control-user" id="exampleInputEmail"
                                                placeholder="Email Address" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control form-control-user"
                                                id="exampleInputPassword" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                                        </div>
                                        {error && <p className="text-danger">{error}</p>}
                                        <button type="submit" className="btn btn-success btn-user w-100">
                                            Register Account
                                        </button>
                                        <hr/>
                                    </form>
                                    
                                    <div className="text-center">
                                        <a className="small" href="login.html">Already have an account? Login!</a>
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
export default Register;