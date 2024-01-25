import React, { useState } from 'react';
import './Newsletter.css';

export const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    // Handle the subscription logic here, e.g., send the email to your backend
    console.log(`Subscribed with email: ${email}`);
    // Reset the input field after submission
    setEmail('');
  };

  return (
    <section className="newsletter-section">
      <h2>Subscribe to Our Newsletter</h2>
      <p>Stay updated with our latest chocolate offerings and promotions!</p>
      <div className="newsletter-form">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleSubscribe}>Subscribe</button>
      </div>
    </section>
  );
};

