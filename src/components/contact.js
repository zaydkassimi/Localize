import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import '../index.css';
import { Helmet } from 'react-helmet';
import Navbar from './navbar';
import Footer from './footer'

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Basic form validation
    if (!formData.user_name || !formData.user_email || !formData.message) {
      setStateMessage('Please fill in all the fields..');
      return;
    }

    setIsSubmitting(true);

    emailjs
    .send(
        "service_ctjbn1e",
        
        "template_ir3el1p",
        {
          form_name: formData.user_name,
          to_name: "akram",
          from_email: formData.user_email,
          to_email: "akram.ahil123@gmail.com",
          message: formData.message,
        },
        "26a1ByQML61pjivDm"
      )
      .then(
        (result) => {
          setStateMessage('message sent!');
          setIsSubmitting(false);
          setFormData({
            user_name: '',
            user_email: '',
            message: ''
          });
          setTimeout(() => {
            setStateMessage(null);
          }, 5000);
        },
        (error) => {
          setStateMessage('Something went wrong, please try again later');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000);
        }
      );
  };

  return (
    <>
        <Helmet>
            <title>Contact - LocaliZe</title>
            <meta name="og:title" property="og:title" content="Contact - LocaliZe"></meta>
            <meta name="description" content="Contact
                                              Nous aimerions avoir de vos nouvelles!
                                              Name
                                              Email
                                              Sujet
                                              Écrire un message" 
            />
            
        </Helmet>

        <Navbar />

        <div className="container ">
          <div className='inpuut'>
          <div className="row mt-5 ">
            <h1>Contact </h1>
          </div>
          <div className="row">
            <h4 style={{ textAlign: 'center' }}>We would love to hear from you!</h4>
          </div>
          </div>
          <div className="row input-container  ">
            <div className="col-xs-12">
              <div className="styled-input wide">
                <input type="text" name="user_name" className='color' value={formData.user_name} onChange={handleChange} required />
                <label>Name</label>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="styled-input">
                <input type="email" name="user_email"  className='color' value={formData.user_email} onChange={handleChange} required />
                <label>Email</label>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="styled-input" style={{ float: 'right' }}>
                <input type="text" className='color' name="subject" required />
                <label>Subject</label>
              </div>
            </div>
            <div className="col-xs-12">
              <div className="styled-input wide">
                <textarea name="message" className='color' value={formData.message} onChange={handleChange} required></textarea>
                <label>Write a message</label>
              </div>
            </div>
            <div className="col-xs-12 text-center ">
              <input type="submit" className="btttn  " onClick={sendEmail} value="Send A Message" disabled={isSubmitting} />
              {stateMessage && <p>{stateMessage}</p>}
            </div>
          </div>
        </div>

        <Footer/>
    </>
  );
};

export default Contact;
