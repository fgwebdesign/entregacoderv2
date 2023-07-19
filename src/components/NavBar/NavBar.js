import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  const [cartItems, setCartItems] = useState(0);

  return (
    <Navbar expand="lg" bg="dark" variant="dark" className="my-navbar">
      <Container>
        <Navbar.Brand as={Link} to="/" className="navbar-logo">DUKI</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">HOME PAGE</Nav.Link>
            <Nav.Link as={Link} to="/aboutDuketo">ABOUT DUKETO</Nav.Link>
            <Nav.Link as={Link} to="/originalMerch">ORIGINAL MERCH</Nav.Link>
            <NavDropdown title="ALBUMS" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/albums" className="ver-todos">MOSTRAR TODOS</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/album1">SSJ</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/album2">24</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/album3">DESDE EL FIN DEL MUNDO</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/album4">DESDE EL FIN DEL MUNDO | LIVE</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/album5">TEMP DE REGGEATON I</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/album6">TEMP DE REGGEATON II</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/album7">ANTES DE AMERI</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <div className="btn btn-light">
            <FontAwesomeIcon icon={faShoppingCart} />
            <span className="cart-items">{cartItems}</span>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
