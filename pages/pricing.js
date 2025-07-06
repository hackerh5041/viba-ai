import React from 'react';

export default function Pricing() {
  return (
    <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Our Pricing Plans</h1>
      <p>Select the plan that suits you best.</p>

      <div style={{ display: 'flex', gap: '20px', marginTop: '30px' }}>
        <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '20px', width: '250px' }}>
          <h2>Free</h2>
          <p>$0/month</p>
          <ul>
            <li>Limited access</li>
            <li>Basic support</li>
          </ul>
        </div>

        <div style={{ border: '2px solid #0070f3', borderRadius: '8px', padding: '20px', width: '250px' }}>
          <h2>Pro</h2>
          <p>$9.99/month</p>
          <ul>
            <li>Unlimited AI video generation</li>
            <li>Priority support</li>
            <li>Access to future tools</li>
          </ul>
        </div>

        <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '20px', width: '250px' }}>
          <h2>Enterprise</h2>
          <p>Contact us</p>
          <ul>
            <li>Custom solutions</li>
            <li>Dedicated support</li>
            <li>Team training</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
