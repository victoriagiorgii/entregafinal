import './Navbar.css';
import { Navbar } from 'react-bootstrap';
import { CardWidget } from "../CartWidget/index";
import { Container, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export const NavBar=()=>{
  return(
    <Navbar expand="lg" className="navbar-mine">
      <Container>
        <Navbar.Brand as={NavLink}to='/'>GIACCE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink}to='/'>Catalogo</Nav.Link>
            <NavDropdown title="Accesorios" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink}to='/categoria/Aros'>Aros</NavDropdown.Item>
              <NavDropdown.Item as={NavLink}to='/categoria/Collares'>Collares</NavDropdown.Item>
              <NavDropdown.Item as={NavLink}to='/categoria/Pulseras'>Pulseras</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <CardWidget/> <h1 className="carrito">0</h1>
    </Navbar>
  );
}  