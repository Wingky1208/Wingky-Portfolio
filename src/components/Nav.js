import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navbar2() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand >Nav</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">

                        <Nav.Link href="/about">About me</Nav.Link>

                        <Nav.Link herf='/porfolio'>Porfolio</Nav.Link>

                        <Nav.Link herf='/resume'>Resume</Nav.Link>

                        <Nav.Link herf='/contact'>Contact</Nav.Link>

                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>

    )
};

export default Navbar2;