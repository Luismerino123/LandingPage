import React from 'react';
import { Link } from 'react-router-dom'; 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./NavBar.css";

export default function NavBarMenu() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" id='NavBar-content' style={{ color: 'white' }}>
      <Container>
      <Navbar.Brand as={Link} to="/" href="#home" className="navbar-brand-foodies" style={{color:'white'}}>Foodies</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ borderColor: 'white' }}>
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" style={{ color: 'white' }}>Acerca de</Nav.Link>
            <Nav.Link as={Link} to="/" style={{ color: 'white' }}>Restaurantes</Nav.Link>
            <Nav.Link as={Link} to="/menu" style={{ color: 'white' }}>Menu</Nav.Link>
            <Nav.Link as={Link} to="/" style={{ color: 'white' }}>Contactanos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
