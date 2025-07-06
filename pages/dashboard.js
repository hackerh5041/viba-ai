import { useEffect, useState } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../lib/firebase';
import { useRouter } from 'next/router';

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [scriptText, setScriptText] = useState('');
  const [loading, setLoading] = useState(false);
  const [videoURL, setVideoURL] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        router.push('/login');
      }
    });

    return () => unsubscribe();
  }, [router]);

  const handleLogout = async () => {
    await signOut(auth);
    router.push('/login');
  };

  const handleGenerateVideo = async () => {
    setLoading(true);
    setVideoURL(null);

    // 🔧 Simulate backend video creation (replace with real API call later)
    setTimeout(() => {
      const fakeVideo = 'https://www.w3schools.com/html/mov_bbb.mp4'; // fake preview
      setVideoURL(fakeVideo);
      setLoading(false);
    }, 3000);
  };

  if (!user) return <p>Loading...</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h1>Welcome, {user.email}</h1>
      <button onClick={handleLogout}>Logout</button>

      <h2 style={{ marginTop: '30px' }}>🎬 Generate a Video</h2>
      <textarea
        value={scriptText}
        onChange={(e) => setScriptText(e.target.value)}
        placeholder="Paste your script here..."
        rows={6}
        style={{ width: '100%', marginTop: '10px' }}
      />
      <button onClick={handleGenerateVideo} disabled={loading} style={{ marginTop: '10px' }}>
        {loading ? 'Generating...' : 'Generate Video'}
      </button>

      {videoURL && (
        <div style={{ marginTop: '20px' }}>
          <h3>Preview:</h3>
          <video controls width="100%">
            <source src={videoURL} type="video/mp4" />
          </video>
        </div>
      )}
    </div>
  );
}
