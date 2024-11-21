import React from 'react';
import logo from './logo.svg';
import './App.css';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Add Google OAuth 2.0 Login</p>
      </header>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log('Login Success:', credentialResponse);
          const token = credentialResponse.credential; // Get the JWT token
          const decodedToken = jwtDecode(token); // Decode the JWT
          console.log('Decoded Token:', decodedToken); // Log the decoded token
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      />
    </div>
  );
}

export default App;
