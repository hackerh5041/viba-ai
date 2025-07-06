import React, { useState } from 'react';
import { useRouter } from 'next/router';

const Generate = () => {
  const [topic, setTopic] = useState('');
  const [status, setStatus] = useState('');
  const router = useRouter();

  const handleGenerate = async () => {
    if (!topic) {
      alert('Please enter a topic.');
      return;
    }

    setStatus('Generating your video...');

    // Simulate generation process
    setTimeout(() => {
      setStatus('✅ Video generated successfully!');
    }, 2000);
  };

  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1>🎥 Generate a Short Video</h1>
      <input
        type="text"
        placeholder="Enter your video topic..."
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        style={{ padding: '10px', width: '300px', fontSize: '16px' }}
      />
      <br /><br />
      <button onClick={handleGenerate} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Generate
      </button>
      <br /><br />
      <p>{status}</p>
      <br />
      <button onClick={() => router.push('/dashboard')}>⬅ Back to Dashboard</button>
    </div>
  );
};

export default Generate;
