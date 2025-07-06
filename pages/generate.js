import React, { useState } from 'react';

export default function Generate() {
  const [topic, setTopic] = useState('');
  const [style, setStyle] = useState('motivational');
  const [loading, setLoading] = useState(false);
  const [videoURL, setVideoURL] = useState(null);

  const handleGenerate = async () => {
    if (!topic) return alert('Please enter a video topic.');

    setLoading(true);
    setVideoURL(null);

    // Simulate AI video generation (replace this with real backend call later)
    setTimeout(() => {
      setLoading(false);
      setVideoURL(`https://example.com/generated-video.mp4?topic=${topic}&style=${style}`);
    }, 3000);
  };

  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1>🎥 Generate a Video</h1>

      <input
        type="text"
        placeholder="Enter a video topic (e.g. Discipline, Purpose)"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        style={{ width: '80%', padding: '10px', marginBottom: '20px', fontSize: '16px' }}
      />

      <br />

      <select
        value={style}
        onChange={(e) => setStyle(e.target.value)}
        style={{ padding: '10px', fontSize: '16px' }}
      >
        <option value="motivational">Motivational</option>
        <option value="masculine">Masculine Energy</option>
        <option value="cinematic">Cinematic</option>
      </select>

      <br /><br />

      <button
        onClick={handleGenerate}
        style={{ padding: '10px 30px', fontSize: '18px' }}
      >
        ⚡ Generate
      </button>

      {loading && <p style={{ marginTop: '20px' }}>⏳ Generating your video...</p>}

      {videoURL && (
        <div style={{ marginTop: '30px' }}>
          <h3>✅ Video Ready:</h3>
          <a href={videoURL} target="_blank" rel="noopener noreferrer">
            {videoURL}
          </a>
        </div>
      )}
    </div>
  );
}
