import { useState } from 'react';

export default function Pricing() {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    const res = await fetch('/api/create-checkout-session', {
      method: 'POST',
    });
    const data = await res.json();

    if (data.id) {
      window.location.href = data.url;
    } else {
      alert('Checkout failed.');
    }
    setLoading(false);
  };

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Upgrade to Pro</h1>
      <p>Access full video AI generation tools.</p>
      <h2>$10/month</h2>
      <button onClick={handleCheckout} disabled={loading}>
        {loading ? 'Redirecting...' : 'Subscribe Now'}
      </button>
    </div>
  );
}
