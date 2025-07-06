import React from 'react';
import { useRouter } from 'next/router';

const Dashboard = () => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('auth'); // or your token system
    router.push('/login');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '60px' }}>
      <h1>Welcome to VibaAI 🚀</h1>
      <p>Select an action below:</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '32px' }}>
        <button onClick={() => router.push('/generate')}>🎬 Generate Video</button>
        <button onClick={() => router.push('/results')}>📁 My Projects</button>
        <button onClick={() => router.push('/pricing')}>💳 Upgrade Plan</button>
        <button onClick={handleLogout} style={{ color: 'red' }}>Logout</button>
      </div>
    </div>
  );
};

export default Dashboard;
