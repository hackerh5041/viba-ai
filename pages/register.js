import Link from 'next/link';

export default function Register() {
  return (
    <div style={{ padding: 40, fontFamily: 'sans-serif' }}>
      <h1>📝 Register</h1>
      <form>
        <input type="text" placeholder="Name" required style={{ display: 'block', marginBottom: 10 }} />
        <input type="email" placeholder="Email" required style={{ display: 'block', marginBottom: 10 }} />
        <input type="password" placeholder="Password" required style={{ display: 'block', marginBottom: 10 }} />
        <button type="submit">Sign Up</button>
      </form>
      <p style={{ marginTop: 20 }}>
        Already have an account? <Link href="/login">Login</Link>
      </p>
    </div>
  );
}
