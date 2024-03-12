import React, { useState } from 'react';

// Mock authentication service
const AuthService = {
  isAuthenticated: false,
  login: (username, password) => {
    // Mock authentication logic
    AuthService.isAuthenticated = true;
  },
  logout: () => {
    // Mock logout logic
    AuthService.isAuthenticated = false;
  }
};

// Higher-order component (HOC) for adding authentication functionality
const withAuthentication = (WrappedComponent) => {
  const WithAuthentication = (props) => {
    const [isAuthenticated, setIsAuthenticated] = useState(AuthService.isAuthenticated);

    const handleLogin = (username, password) => {
      AuthService.login(username, password);
      setIsAuthenticated(true);
    };

    const handleLogout = () => {
      AuthService.logout();
      setIsAuthenticated(false);
    };

    return (
      <WrappedComponent
        {...props}
        isAuthenticated={isAuthenticated}
        onLogin={handleLogin}
        onLogout={handleLogout}
      />
    );
  };

  return WithAuthentication;
};

export default withAuthentication;
