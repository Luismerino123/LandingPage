import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import "./NavBar.css"; 

function NavBarPage() {
  return (
    <Navbar expand="md" className="bg-body-tertiary" id="NavBar-content">  
      <Container>
      <Navbar.Brand as={Link} to="/" href="#home" className="navbar-brand-foodies">Foodies</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" href="#home">Acerca de</Nav.Link>
            <Nav.Link as={Link} to="/" href="#restaurants">Restaurantes</Nav.Link>
            <Nav.Link as={Link} to="/menu" href="#menu">Menú</Nav.Link>
            <Nav.Link as={Link} to="/" href="#contact">Contáctanos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarPage;
