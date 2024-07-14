import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import letes_about from '../assets/Images/lete-about.jpg';
import ProgressBar from 'react-bootstrap/ProgressBar';

export default function appabout() {
  const now = 100;
  return(
    
       <main id='aboutus' className='about'>
          <div className='section-title'>
            <h3>About Letes Insurance</h3>
<p>Your Trusted Partner in Comprehensive Coverage</p>
          </div>
          <Container fluid>
            <Row>
              <Col md={12} lg={6} ><img src={letes_about} className='about-img'/></Col>
              <Col md={12} lg={6}>
<p1> Welcome to Letes Insurance, where your peace of mind is our top priority. With years of experience in the insurance industry, we are dedicated to providing comprehensive and affordable insurance solutions tailored to meet the unique needs of individuals, families, and businesses.</p1><br/>

<p2>At Letes Insurance, we understand that life is unpredictable, and having the right insurance coverage is essential for safeguarding your future. Our mission is to offer a diverse range of insurance plans that ensure you are well-protected against lifes uncertainties. From health and life insurance to property and casualty coverage, we have you covered.</p2><br/>

<p3>What sets us apart is our unwavering commitment to customer satisfaction. We pride ourselves on our personalized approach, taking the time to understand your specific requirements and providing you with the best possible solutions. Our team of experienced insurance professionals is always ready to assist you, offering expert advice and support whenever you need it.</p3><br/><br/>


<div>
  <p>Customer satifaction</p>
  <ProgressBar now={now} label={`${now}%`} />
</div>

<div>
  <p>Claims Processed</p>
  <ProgressBar now={now} label={`${now}%`} />
</div>

<div>
  <p>Coverage Plans Sold</p>
  <ProgressBar now={now} label={`${now}%`} />
</div>

              </Col>
            </Row>
          </Container>
       </main>
      );
    }
    