import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function MyNavbar() {
  const token = false;
  const {totalPagar} = useContext(CartContext)

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
            <Link to="/" className="#action1">🍕 Home</Link>
            {token ? (<><Link to="/MyProfile" className="#action2">👤 Profile</Link>
              <Link to="/MyLogin" className="#action3">🔒 Logout</Link></>) : (<><Link to="/MyLogin" className="#action4">🔒 Login</Link>
                <Link to="/MyRegister" className="#action5">📄 Register</Link><Link to="/MyProfile" className="#action6">🧙‍♂️ Mi Perfil</Link></>)}
            <Nav.Link href="#" disabled></Nav.Link>
          </Nav>
          <Button variant="outline-success"><Link to="/MyCart"> 🛒 Total: ${totalPagar.toLocaleString()} </Link></Button>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
};
export default MyNavbar;
