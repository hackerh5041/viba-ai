export default function Home() {
  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#0c0c0c',
      color: '#fff',
      padding: '2rem',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
        Welcome to Viba
      </h1>
      <p style={{ fontSize: '1.5rem', maxWidth: '600px' }}>
        Generate cinematic videos with AI. Hyper-realistic voices, scenes, and smart editing — all in one click.
      </p>
    </main>
  );
}
