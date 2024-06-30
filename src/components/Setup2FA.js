import React, { useState, useEffect } from 'react';
import axios from '../api/api';

const Setup2FA = () => {
  const [qrImageUrl, setQrImageUrl] = useState('');

  useEffect(() => {
    const fetchQRCode = async () => {
      try {
        const response = await axios.get('/api/auth/setup-2fa');
        setQrImageUrl(response.data.imageUrl);
      } catch (error) {
        console.error('Failed to fetch QR code:', error);
        // Handle error message display
      }
    };

    fetchQRCode();
  }, []);

  return (
    <div>
      <h2>Setup Two-Factor Authentication</h2>
      {qrImageUrl && <img src={qrImageUrl} alt="QR Code" />}
    </div>
  );
};

export default Setup2FA;
