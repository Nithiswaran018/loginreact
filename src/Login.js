import React, { useState } from 'react';
import { Col, Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap';
import axios from 'axios';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    try {
      
      if (username.trim() === '' | password.trim() === '') {
        setError('Username/Password cannot be empty');
        return;
      }

       const response = await axios.post('https://jsonplaceholder.typicode.com/users', {
         username,
         password,
       });

      setError(null);

       onLogin(response.data); 
    } catch (error) {
      console.error('Error logging in:', error);
      setError('Invalid username or password');
    }
  };

  return (
    <Col sm="6" className="login-form">
      <h2 className="text-center">Login</h2>
      <Form>
        {error && <Alert color="danger">{error}</Alert>}
        <FormGroup>
          <Label for="username">Username</Label>
          <Input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </FormGroup>
        <Button onClick={handleLogin} className="btn-lg btn-dark btn-block">Login</Button>
      </Form>
    </Col>
  );
};

export default Login;

