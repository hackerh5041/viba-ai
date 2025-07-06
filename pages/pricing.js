import React from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_live_51Rerg7E7PKB0vRxY0X...'); // replace this with your full publishable key

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
    <div style={{ textAlign: 'center', paddingTop: '100px' }}>
      <h1>Viba AI Pro - $20/month</h1>
      <p>Unlock full access to realistic video generation</p>
      <button 
        onClick={handleCheckout} 
        style={{ padding: '10px 20px', fontSize: '18px', cursor: 'pointer' }}
      >
        Subscribe Now
      </button>
    </div>
  );
};

export default Pricing;
