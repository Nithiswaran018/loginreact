//without USEQuery....


/*import React from 'react';
import { Row, Col, Table } from 'reactstrap';

const LandingPage1 = ({ data }) => (
  <Row>
    <Col sm="12" className="mt-5">
      <h2 className="mb-4">Data Table</h2>
      <Table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.userId}</td>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.body}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Col>
  </Row>
);

export default LandingPage1;
*/

// LandingPage1.js
import React from 'react';
import { Row, Col, Table } from 'reactstrap';
import { useQuery } from 'react-query';
import axios from 'axios';

const fetchData = async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return response.data;
};

const LandingPage1 = () => {
  const { data } = useQuery('postsData', fetchData);

  return (
    <Row>
      <Col sm="12" className="mt-5">
        <h2 className="mb-4">Data Table</h2>
        <Table>
          <thead>
            <tr>
              <th>User ID</th>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((item) => (
                <tr key={item.id}>
                  <td>{item.userId}</td>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.body}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};

export default LandingPage1;