//with UseQuery LandingPage.....

/*import React, { useState } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Container } from 'reactstrap';
import { useQuery } from 'react-query';
import axios from 'axios'; 

import CustomTable from './CustomTable';

const fetchData = async (uri) => {
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com${uri}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data : 'Network error');
  }
};

const LandingPage = () => {
  const [selectedSection, setSelectedSection] = useState('/posts');
  const userTableHeader = ['id', 'name', 'username', 'email'];
  const postTableHeader = ['userId', 'id', 'title', 'body'];

  const { data, error } = useQuery(['data', selectedSection], () => fetchData(selectedSection));

  const handleSectionChange = (section) => {
    setSelectedSection(section);
  };

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Table Data</NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink
              href="#"
              onClick={() => handleSectionChange('/users')}
              className={selectedSection === '/users' ? 'active' : ''}
            >
              Users
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="#"
              onClick={() => handleSectionChange('/posts')}
              className={selectedSection === '/posts' ? 'active' : ''}
            >
              Posts
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
      <Container>
        <CustomTable data={data} error={error} tableHeader={selectedSection === '/users' ? userTableHeader : postTableHeader} />
      </Container>
    </div>
  );
};

export default LandingPage;*/





//without UseQuery....



import React, { useState } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Container } from 'reactstrap';
import CustomTable from './CustomTable';

const LandingPage = () => {
  const [selectedSection, setSelectedSection] = useState('/posts');
  const userTableHeader = ['id', 'name', 'username', 'email'];
  const postTableHeader = ['userId', 'id', 'title', 'body'];

  const handleSectionChange = (section) => {
    setSelectedSection(section);
  };

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Table Data</NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink
              onClick={() => handleSectionChange('/users')}
              className={selectedSection === '/users' ? 'active' : ''}
            >
              Users
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              onClick={() => handleSectionChange('/posts')}
              className={selectedSection === '/posts' ? 'active' : ''}
            >
              Posts
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
      <Container>
        <CustomTable uri={selectedSection} tableHeader={selectedSection === '/users' ? userTableHeader : postTableHeader} />
      </Container>
    </div>
  );
};

export default LandingPage;
