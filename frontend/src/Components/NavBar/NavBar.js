import React from "react"
import {Navbar,Nav,NavDropdown} from "react-bootstrap"

const NavBar = () => {
  return(
      <Navbar expand="lg" style={{ backgroundColor: '#DCDCDC'}}>
        <Navbar.Brand href="/home">Librarian.mk</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <NavDropdown title="Menu" id="basic-nav-dropdown">
              <NavDropdown.Item href="/books">Books</NavDropdown.Item>
              <NavDropdown.Item href="/categories">Categories</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Authors</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Countries</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  );
}

export default NavBar;