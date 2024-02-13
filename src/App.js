import React from 'react';
import { Container } from 'reactstrap';
import './App.css';
import Login from './Login';
import LandingPage from './LandingPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Container>
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <LandingPage />
      )}
    </Container>
  );
}

export default App;
