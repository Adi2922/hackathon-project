import React from 'react';
import { Navbar as BootstrapNavbar, Nav, Container, Button, NavDropdown, Form } from 'react-bootstrap';
import './Navbar.module.css'; // Custom styles

const Navbar = () => {
  return (
    <BootstrapNavbar expand="lg" className="navbar-custom">
      <Container fluid>
        <BootstrapNavbar.Brand href="#">Navbar scroll</BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="navbarScroll" />
        <BootstrapNavbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-light">Search</Button>
          </Form>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
