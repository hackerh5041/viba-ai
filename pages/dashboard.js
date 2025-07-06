import { useState } from 'react';

export default function Dashboard() {
  const [scriptText, setScriptText] = useState('');
  const [videoURL, setVideoURL] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleGenerateVideo = async () => {
    setLoading(true);
    setVideoURL(null);

    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ scriptText }),
      });

      const data = await res.json();

      if (res.ok) {
        setVideoURL(data.videoURL);
      } else {
        alert(data.message || 'Failed to generate video');
      }
    } catch (err) {
      alert('Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>🎬 AI Video Generator</h1>

      <textarea
        rows={8}
        placeholder="Type your script here..."
        value={scriptText}
        onChange={(e) => setScriptText(e.target.value)}
        style={{ width: '100%', padding: '1rem', fontSize: '1rem' }}
      />

      <button
        onClick={handleGenerateVideo}
        disabled={loading || !scriptText.trim()}
        style={{
          marginTop: '1rem',
          padding: '0.75rem 1.5rem',
          fontSize: '1rem',
          backgroundColor: '#0070f3',
          color: '#fff',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        {loading ? 'Generating...' : 'Generate Video'}
      </button>

      {videoURL && (
        <div style={{ marginTop: '2rem' }}>
          <h2>Your AI-Generated Video</h2>
          <video controls width="100%">
            <source src={videoURL} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  );
}
