import React, { useState } from 'react';
import axios from '../api/api';

const VerifyToken = () => {
  const [token, setToken] = useState('');
  const [verificationStatus, setVerificationStatus] = useState('');

  const handleVerifyToken = async () => {
    try {
      const response = await axios.post('/api/auth/verify-token', { token });
      if (response.data.verified) {
        setVerificationStatus('Token verified successfully');
      } else {
        setVerificationStatus('Invalid token');
      }
    } catch (error) {
      console.error('Token verification error:', error);
      // Handle error message display
    }
  };

  return (
    <div>
      <h2>Verify Two-Factor Authentication</h2>
      <input
        type="text"
        placeholder="Enter token"
        value={token}
        onChange={(e) => setToken(e.target.value)}
        required
      />
      <button onClick={handleVerifyToken}>Verify Token</button>
      {verificationStatus && <p>{verificationStatus}</p>}
    </div>
  );
};

export default VerifyToken;
