export default function Pricing() {
  return (
    <div style={{ padding: 40, fontFamily: 'sans-serif' }}>
      <h1>💳 Upgrade to Premium</h1>
      <p>Access full AI video generation for just $20/month.</p>
      <button onClick={() => alert('Stripe payment coming soon!')}>Subscribe Now</button>
    </div>
  );
}
