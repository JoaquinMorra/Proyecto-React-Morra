import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';

const NavbarComponent = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
        <Navbar.Brand href="#">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
            <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
            >
            <Nav.Link href="#action1">Inicio</Nav.Link>
            <Nav.Link href="#action2">Sobre Nosotros</Nav.Link>
            <NavDropdown title="Productos" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Corderos</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                Articulos de Campo
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                Recados
                </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
                Link
            </Nav.Link>
            3 <CartWidget/>
            </Nav>
            <Form className="d-flex">
            <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
            </Form>
        </Navbar.Collapse>
        </Container>
    </Navbar>
  );
};
export default NavbarComponent;