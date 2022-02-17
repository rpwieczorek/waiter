import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar bg="primary" variant="dark" className="justify-content-between p-2 rounded">
      <Navbar.Brand>Waiter.app</Navbar.Brand>
      <Nav  >
        <Nav.Link as={NavLink} to="/">Home</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavBar;