//without USEQuery....

/*import React, { useState } from 'react';
import { Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

const Login1 = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username !== '' && password !== '') {
      onLogin();
    }
  };

  return (
    <Col sm="6" className="login-form">
      <h2 className="text-center">Login</h2>
      <Form>
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

export default Login1;
*/



//withusequery  Login1


import React, { useState, useEffect } from 'react';
import { Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { useQuery } from 'react-query';
import axios from 'axios';

const fetchData = async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return response.data;
};

const Login1 = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username !== '' && password !== '') {
      onLogin();
    }
  };

  const { data } = useQuery('postsData', fetchData);

  useEffect(() => {
    // You can access the data fetched by useQuery here, if needed
    console.log(data);
  }, [data]);

  return (
    <Col sm="6" className="login-form">
      <h2 className="text-center">Login</h2>
      <Form>
        {/* Your login form JSX here */}
        <Button onClick={handleLogin} className="btn-lg btn-dark btn-block">
          Login
        </Button>
      </Form>
    </Col>
  );
};

export default Login1;