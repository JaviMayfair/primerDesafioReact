import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function MyNavbar() {
  const precio = 25000
  const token = false;

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Pizzería Mamma Mía!</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">🍕 Home</Nav.Link>
            {token ? (<><Nav.Link href="#action2">👤 Profile</Nav.Link>
              <Nav.Link href="#action3">🔒 Logout</Nav.Link></>) : (<><Nav.Link href="#action4">🔒 Login</Nav.Link>
                <Nav.Link href="#action5">📄 Register</Nav.Link></>)}
            <Nav.Link href="#" disabled></Nav.Link>
          </Nav>
          <Button variant="outline-success">🛒 Total: ${precio.toLocaleString()}</Button>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
};
export default MyNavbar;
