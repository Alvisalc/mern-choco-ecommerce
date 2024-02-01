import './Newsletter.css';

export const Newsletter = () => {

  return (
    <div className="newsletter">
      <div className="newsletter-section">
      <h2>Subscribe to Our Newsletter</h2>
      <p>Stay updated with our latest chocolate offerings and promotions!</p>
      <div className="newsletter-form">
        <input
          className="newsletter-email"
          id="email"
          type="email"
          placeholder="Enter your email"
          autoComplete="off"
        />
        <button>Subscribe</button>
      </div>
    </div>
    </div>
    
  );
};

