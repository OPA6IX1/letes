import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import  Why from '../assets/Images/team working.jpg';

export default function Appwhychooseus() {
  return (
   <section id='whychooseus'>

    <Container fluid className='why-choose'>

    <Row>
        <Col sm={12} lg={6} className='why-choose1'>
        <img src={Why}></img>
        </Col>

        <Col sm={12} lg={6} className='why-choose2'>
        <h3>Why Choose Letes Insurance?</h3>
        <ul>
          <li><strong>Comprehensive Coverage:</strong> We offer a wide range of insurance services to meet all your needs.</li>
          <li><strong>Affordable Premiums:</strong> Our competitive pricing ensures you get the best value for your money.</li>
          <li><strong>Exceptional Customer Service:</strong> Our dedicated team is here to assist you every step of the way.</li>
          <li><strong>Expert Advice:</strong> We provide personalized support and guidance to help you make informed decisions.</li>
          <li><strong>Reliable Protection:</strong> Trust us to protect what matters most with our reliable and comprehensive insurance solutions.</li>
        </ul>
        <p>Explore our services and find the perfect insurance plan to fit your needs. At Letes Insurance, we are committed to providing you with the peace of mind that comes from knowing you are fully covered.</p>
        </Col>
    </Row>
      
    </Container>
   </section>
  )}