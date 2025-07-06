import Link from 'next/link';

export default function Login() {
  return (
    <div style={{ padding: 40, fontFamily: 'sans-serif' }}>
      <h1>🔐 Login</h1>
      <form>
        <input type="email" placeholder="Email" required style={{ display: 'block', marginBottom: 10 }} />
        <input type="password" placeholder="Password" required style={{ display: 'block', marginBottom: 10 }} />
        <button type="submit">Log In</button>
      </form>
      <p style={{ marginTop: 20 }}>
        Don’t have an account? <Link href="/register">Register</Link>
      </p>
    </div>
  );
}
