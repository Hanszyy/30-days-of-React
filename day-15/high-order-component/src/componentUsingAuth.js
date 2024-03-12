import React from 'react';
import withAuthentication from './withAuthentication';
import './styles.css';

const ComponentUsingAuthentication = ({ isAuthenticated, onLogin, onLogout }) => {
  return (
    <div className ="container">
      {isAuthenticated ? (
        <div>
          <p>Welcome! You are authenticated.</p>
          <button onClick={onLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <p>Please login to continue.</p>
          <button onClick={() => onLogin('username', 'password')}>Login</button>
        </div>
      )}
    </div>
  );
};

export default withAuthentication(ComponentUsingAuthentication);
