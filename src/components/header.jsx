import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/Images/letes.png';

export default function AppHeader() {
  return(

    <Navbar expand="lg" className="bg-body-tertiary top-head1">
    <Container className='top-head'>
      <Navbar.Brand href="#home">
        <a href='#'><img src={logo} /></a>

      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#welcome">Home</Nav.Link>
          <Nav.Link href="#aboutus">About Us</Nav.Link>
          <Nav.Link href="#services">Services</Nav.Link>
          <Nav.Link href="#whychooseus">Why-choose-us</Nav.Link>
          <Nav.Link href="#testimonial">Testimonial</Nav.Link>
          <Nav.Link href="#faqs">FAQs</Nav.Link>
          <Nav.Link href="#contact-us">Contact Us</Nav.Link>
          
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )  
}