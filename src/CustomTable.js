// CustomTable With Usequery 
/*import React from 'react';
import { Row, Col, Table } from 'reactstrap';


const CustomTable = ({ data, error, tableHeader }) => {
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Row>
      <Col sm="12" className="mt-5">
        <Table>
          <thead>
            <tr>
              {tableHeader.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((item) => (
                <tr key={item.id}>
                  {tableHeader.map((header, index) => (
                    <td key={index}>{item[header]}</td>
                  ))}
                </tr>
              ))}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};

export default CustomTable;*/





// With Out React Query - USE Query...

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Row, Col, Table } from 'reactstrap';

const CustomTable = ({ uri, tableHeader }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com${uri}`);
      setData(response.data);
      setError(response.error);
    } catch (response) {
      setData([]);
      setError(error.response ? error.response.data : 'Network error');
    }
  };

  useEffect(() => {
    fetchData(uri); 
  },) 

  return (
    <Row>
      <Col sm="12" className="mt-5">
        <h2 className="mb-4">Data Table</h2>
        <Table>
          <thead>
            <tr>
              {tableHeader.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                {tableHeader.map((header, index) => (
                  <td key={index}>{item[header]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};

export default CustomTable;
