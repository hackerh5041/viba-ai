import { useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [videoURL, setVideoURL] = useState('');

  const handleGenerateVideo = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        'https://api.runwayml.com/v1/ai/generate',
        {
          prompt: 'A peaceful sunset over the ocean with birds flying', // change this later to user input
          model: 'stable-video-diffusion',
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.RUNWAY_API_KEY}`,
            'Content-Type': 'application/json',
          },
        }
      );

      const video = response.data.video_url || '';
      setVideoURL(video);
      alert('✅ Video generated successfully!');
    } catch (error) {
      console.error('❌ Video generation error:', error.response?.data || error);
      alert('❌ Failed to generate video. Check console for details.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>🎬 Welcome to VibaAI</h1>
      <p>Generate realistic videos with just a script.</p>

      <button
        onClick={handleGenerateVideo}
        style={{
          padding: '12px 24px',
          background: '#6c63ff',
          color: '#fff',
          border: 'none',
          borderRadius: '6px',
          marginTop: '16px',
          cursor: 'pointer',
        }}
        disabled={loading}
      >
        {loading ? 'Generating...' : '🎥 Generate Video'}
      </button>

      {videoURL && (
        <div style={{ marginTop: '2rem' }}>
          <h2>🎁 Your Generated Video:</h2>
          <video src={videoURL} controls width="600" />
        </div>
      )}

      <div style={{ marginTop: '3rem' }}>
        <a href="/login">Login</a> | <a href="/register">Register</a> | <a href="/pricing">Pricing</a>
      </div>
    </div>
  );
}
