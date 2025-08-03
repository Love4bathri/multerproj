// NavbarComponent.js
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
 

function NavbarComponent() {
  return (
    <Navbar expand="lg" className="navbar-custom fixed-top" variant="dark">
      <Container>
        <Navbar.Brand href="#">MyBrand</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="/" className="active">Home</Nav.Link>
            <Nav.Link href="/upload">Upload</Nav.Link>
            <Nav.Link href="/card">Services</Nav.Link>
            <Nav.Link href="/email">Email</Nav.Link>
            <Nav.Link href="/caro">Caro</Nav.Link>
            <Nav.Link href="/baday">baday</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
