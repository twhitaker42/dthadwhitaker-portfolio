import Container from 'react-bootstrap/Container';
import { NavLink as RouterLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import routes from '../data/Routes'

function Navigation () {
  return (
    <Navbar expand="md" className="navigation bg-body-tertiary" fixed="top">
      <Container>
        <Navbar.Brand href="/">D. Thad Whitaker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
             {routes
                .filter((route) => route.showInNav !== false)
                .map((route) => (
              <Nav.Link as={RouterLink} to={route.path} key={route.path}>
                {route.name}
              </Nav.Link>
            ))}
            <Nav.Link href="https://www.linkedin.com/in/d-thad-whitaker/">LinkedIn</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

// The nav bar, when in a more mobile window size, has a dropdown option (hamburger stack), but these options are not within it

export default Navigation;