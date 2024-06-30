import React from 'react';
import RegistrationForm from './components/RegistrationForm';
import Setup2FA from './components/Setup2FA';
import VerifyToken from './components/VerifyToken';

const App = () => {
  return (
    <div>
      <h1>Two-Factor Authentication</h1>
      <RegistrationForm />
      <Setup2FA />
      <VerifyToken />
    </div>
  );
};

export default App;
