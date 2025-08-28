// NavbarComponent.js
import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { useTheme } from './Themecontext';

function NavbarComponent() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <Navbar expand="lg" className="navbar-custom fixed-top" variant={darkMode ? "dark" : "light"} bg={darkMode ? "dark" : "light"}>
      <Container>
        <Navbar.Brand href="#">MyBrand</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          <Nav className="me-3">
            <Nav.Link href="/" className="active">Home</Nav.Link>
            <Nav.Link href="/upload">Upload</Nav.Link>
            <Nav.Link href="/card">Services</Nav.Link>
            <Nav.Link href="/email">Email</Nav.Link>
            <Nav.Link href="/caro">Caro</Nav.Link>
            <Nav.Link href="/baday">Baday</Nav.Link>
          </Nav>

          {/* 👇 Dark/Light Toggle Button */}
          <Button variant={darkMode ? "light" : "dark"} onClick={toggleTheme}>
            {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
