import React from 'react';

interface WelcomeScreenProps {
  onStart: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  return (
    <div className="welcome-screen-wrapper">
      <div className="welcome-illustration">📝</div>
      <div className="welcome-content">
        <h1>Customer Feedback Survey</h1>
        <div className="welcome-divider"></div>
        <p className="welcome-subtitle">We Value Your Opinion</p>
        <p className="welcome-description">
          Thank you for shopping with us! Your feedback helps us improve our products and services. 
          This survey takes about 2-3 minutes to complete.
        </p>
        <div className="welcome-benefits">
          <div className="benefit-item">
            <span className="benefit-icon">✓</span>
            <span>Quick & Easy</span>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">✓</span>
            <span>Your Voice Matters</span>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">✓</span>
            <span>Help Us Improve</span>
          </div>
        </div>
        <button onClick={onStart} className="start-button">
          Start Survey Now
        </button>
      </div>
    </div>
  );
};

export default WelcomeScreen;