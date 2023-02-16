import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => (

    <Navbar bg="dark" variant="dark" expand="lg">
      <Link to="/">
        <Navbar.Brand>Spaceflight news</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link>Home</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

)

export default NavBar;
