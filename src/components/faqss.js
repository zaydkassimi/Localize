import React, { useState } from 'react';
import '../index.css';

export default function FAQ() {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const faqs = [
    {
      question: "How does it work?",
      answer: "Website localization involves adapting a website's content, design, and functionality to make it culturally and linguistically appropriate for a specific target audience in different regions or countries. This typically includes translating text, adjusting images, formats, and ensuring compliance with local regulations and preferences."
    },
    {
      question: "What documents do you need?",
      answer: "To start our proceedings, a simple list of your debtors is sufficient. Subsequently, if we deem it necessary or upon your debtor's claim, we will ask you for photocopies of supporting documents (contract, invoice, purchase order, delivery note, etc.)."
    },
    {
      question: "I don't have my debtor's address, what should I do?",
      answer: "We are able to conduct thorough investigations to find your debtors even if you no longer have their contact details."
    },
    {
      question: "Can I send you a list of debtors by email?",
      answer: "Once the processing period is exhausted or if we estimate that the file is irrecoverable, we will provide you with all the information we have been able to obtain during our processing process, and this without any consideration."
    },
    {
      question: "How do you calculate your fees?",
      answer: "We only charge our fees on the amounts recovered after our intervention, at the rate indicated in our collection conditions. We assure you that you have no costs to incur in case of collection failure."
    },
    {
      question: "How do you keep me informed of your actions?",
      answer: "You will be informed of the progress of each file by email and you will receive reports on all files entrusted at the end of each month."
    }
  ];

  return (
    <div className="container" id="faq" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
      <div className="row justify-content-center">
        <div className="col-lg-8 text-center">
          <h2 className="mb-4 fade-in-up" style={{ 
            fontSize: 'clamp(2rem, 4vw, 3rem)', 
            fontWeight: '800', 
            color: 'var(--text-primary)',
            background: 'linear-gradient(135deg, var(--text-primary), var(--primary-color))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Frequently Asked Questions
          </h2>
          <p className="mb-5 fade-in-up" style={{ 
            fontSize: '1.1rem', 
            color: 'var(--text-secondary)',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Find answers to common questions and get the information you need quickly.
          </p>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-8">
          {faqs.map((faq, index) => (
            <div key={index} className="card mb-3 fade-in-up" style={{
              animationDelay: `${index * 0.1}s`
            }}>
              <div 
                className="card-header" 
                style={{ 
                  cursor: 'pointer', 
                  backgroundColor: openAccordion === index ? 'var(--primary-color)' : 'var(--bg-white)',
                  color: openAccordion === index ? 'white' : 'var(--text-primary)',
                  border: 'none',
                  padding: '1.5rem',
                  borderRadius: 'var(--border-radius-lg)',
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'var(--transition)'
                }}
                onClick={() => toggleAccordion(index)}
              >
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="mb-0" style={{ 
                    fontWeight: '600',
                    fontSize: '1.1rem'
                  }}>
                    {faq.question}
                  </h5>
                  <span style={{ 
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    transition: 'var(--transition)',
                    transform: openAccordion === index ? 'rotate(180deg)' : 'rotate(0deg)'
                  }}>
                    {openAccordion === index ? '−' : '+'}
                  </span>
                </div>
              </div>
              {openAccordion === index && (
                <div className="card-body" style={{ 
                  padding: '1.5rem',
                  backgroundColor: 'var(--bg-light)',
                  borderTop: '1px solid rgba(0,0,0,0.05)'
                }}>
                  <p className="mb-0" style={{ 
                    color: 'var(--text-secondary)', 
                    lineHeight: '1.7',
                    fontSize: '1rem'
                  }}>
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
