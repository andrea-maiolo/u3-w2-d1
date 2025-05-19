import { Component } from "react";
import { Container, Nav, Navbar, NavbarBrand } from "react-bootstrap";

class Mynav extends Component {
  render() {
    return (
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <NavbarBrand className="text-success">Libreria online</NavbarBrand>
          <Nav>
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Browse</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}

export default Mynav;
