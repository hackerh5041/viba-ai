import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ padding: 40, fontFamily: 'sans-serif' }}>
      <h1>🎬 Welcome to VibaAI</h1>
      <p>Generate realistic videos with just a script.</p>

      <h2>🎁 Free Preview Videos:</h2>
      <div style={{ marginBottom: 20 }}>
        <video width="400" controls>
          <source src="/free1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div>
        <video width="400" controls>
          <source src="/free2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div style={{ marginTop: 40 }}>
        <Link href="/login">Login</Link> | <Link href="/register">Register</Link> | <Link href="/pricing">Pricing</Link>
      </div>
    </div>
  );
}
