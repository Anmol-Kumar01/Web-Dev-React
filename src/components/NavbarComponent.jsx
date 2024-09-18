import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarComponent({text}) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary-custom-bg" variant='dark'>
      <Container className='nav-container'>
        <Navbar.Brand href="#home" className='text-white'>{text}</Navbar.Brand>
       
          <Nav>
            <Button className="rounded-pill bg-white">
                <Nav.Link href="#contact" className='contact-text'>CONTACT</Nav.Link>
            </Button>
          </Nav>
       
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;