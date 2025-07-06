import React from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_live_51Rerg7E7PKB0vRxYGM1g...'); // Use your real publishable key

const Pricing = () => {
  const handleCheckout = async () => {
    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
    });

    const session = await response.json();

    const stripe = await stripePromise;
    await stripe.redirectToCheckout({ sessionId: session.id });
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Viba AI Pro - $20/month</h1>
      <p>Access realistic AI video generation tools</p>
      <button 
        onClick={handleCheckout} 
        style={{
          padding: '12px 24px',
          fontSize: '18px',
          backgroundColor: '#000',
          color: '#fff',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer'
        }}
      >
        Subscribe Now
      </button>
    </div>
  );
};

export default Pricing;
