import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export default function AppContact() {
  return (

    <section id='contact-us'>
      <Container fluid className='overall'>
        <div className='section-title'>
          <h3>Contact Us </h3>
          <p> Get intouch and get insured </p>
        </div>
        <Form className='form'>
      <Row className='contact-form'>
        <Col sm={12} md={6} lg={4}>
          <Form.Control  type='text' placeholder="Enter your Full name" required />
        </Col>
        <Col sm={12} md={6} lg={4}>
          <Form.Control  type='tel' placeholder=" Enter your contact number" required />
        </Col>
        <Col sm={12} lg={4}>
          <Form.Control  type='email' placeholder="Enter your email address" required />
        </Col>
      </Row>

      <row>
        <Col sm={12}>
        <Form.Control className='message' as='textarea' placeholder=" Enter your message" required />
        </Col>
      </row>
      <row>
        <Col sm={12} className='button'>
        <button type='Submit'>Submit</button>
        </Col>
      </row>
    </Form>
      </Container>

      <Container fluid>

      <div className='googlemap'><iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d126841.19363423495!2d3.244877355143673!3d6.5485185864167414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x103b8e0d904f5c9f%3A0xe6de4e51a71a9a7!2s46%2F48%20Awoniyi%20Elemo%20Street%2C%20Airport%20Rd%2C%20Ajao%20Estate%2C%20Lagos!3m2!1d6.5485253!2d3.3272793!5e0!3m2!1sen!2sng!4v1719147960602!5m2!1sen!2sng"  allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      </Container>

      <Container fluid className='contact-info'>
        <div>
          <ul>
          <li>
            <i className="fa-solid fa-envelope"></i>
            <p>info@letesinsurance.com</p>
          </li>
          <li>
          <i className="fa-solid fa-location-dot"></i>
          <p>42 lateef salami awoniyi elemo street ajao estate.</p>
          </li>
          <li>
          <i className="fa-solid fa-phone"></i>
          <p>+234 813 2564 428</p>
          </li>
          </ul>
        </div>

      </Container>
    </section>
  )
}