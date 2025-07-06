import React from 'react';
import { useRouter } from 'next/router';

const Dashboard = () => {
  const router = useRouter();

  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1>🎛️ Welcome to Your Dashboard</h1>
      <p>Select a feature below:</p>

      <button
        onClick={() => router.push('/generate')}
        style={{ margin: '20px', padding: '10px 20px', fontSize: '16px' }}
      >
        🎬 Generate a Video
      </button>

      <br />

      <button
        onClick={() => router.push('/pricing')}
        style={{ margin: '20px', padding: '10px 20px', fontSize: '16px' }}
      >
        💳 Upgrade Plan
      </button>
    </div>
  );
};

export default Dashboard;
