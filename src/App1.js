//with Out USEQuery....

import React, { useState } from 'react';
import { Container } from 'reactstrap';
import axios from 'axios';
import './App.css';
import Login1 from './Login1';
import LandingPage1 from './LandingPage1';

function App1() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [data, setData] = useState([]);

  const handleLogin = () => {

    
    setIsLoggedIn(true);
    fetchData();
  };

  const fetchData = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <Container>
      {!isLoggedIn ? (
        <Login1 onLogin={handleLogin} />
      ) : (
        <LandingPage1 data={data} />
      )}
    </Container>
  );
}

export default App1;
