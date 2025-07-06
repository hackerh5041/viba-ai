import { useState } from 'react';

export default function Generate() {
  const [prompt, setPrompt] = useState('');
  const [videoScript, setVideoScript] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    setVideoScript(null);

    try {
      const res = await fetch('/api/generate-video', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();
      setLoading(false);

      if (data.success) {
        setVideoScript(data.data.script);
      } else {
        alert(data.error || 'Something went wrong.');
      }
    } catch (err) {
      console.error('Error:', err);
      alert('Failed to generate video.');
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial' }}>
      <h1>🎬 Generate Your AI Video Script</h1>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Type your video topic or idea here..."
        rows="6"
        cols="60"
        style={{ padding: '12px', fontSize: '16px' }}
      />

      <br />
      <button
        onClick={handleGenerate}
        disabled={loading}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
        }}
      >
        {loading ? 'Generating...' : 'Generate Video Script'}
      </button>

      {videoScript && (
        <div style={{ marginTop: '40px', background: '#f2f2f2', padding: '20px' }}>
          <h3>📝 Generated Script:</h3>
          <p>{videoScript}</p>
        </div>
      )}
    </div>
  );
}
