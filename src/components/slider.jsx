import Carousel from 'react-bootstrap/Carousel';
import sliderimage1 from '../assets/Images/slide-1.jpg';
import sliderimage2 from '../assets/Images/slide-2.jpg';
import sliderimage3 from '../assets/Images/slide-3.jpg';

var sliderData = [
  {
    id: 1,
    image: sliderimage1,
    title: 'Comprehensive Coverage',
    description: "Our comprehensive insurance plans provide extensive coverage to protect you and your family. Whether it's health, life, or property insurance, we have tailored solutions to meet all your needs. Enjoy peace of mind knowing that you're fully covered against unforeseen events.",
  },
  {
    id: 2,
    image: sliderimage2,
    title: 'Affordable Premiums',
    description: "At Letes Insurance, we believe in making quality insurance accessible to everyone. Our competitive premiums ensure that you get the best value for your money without compromising on coverage. Explore our affordable plans and find the perfect fit for your budget.",
  },
  {
    id: 3,
    image: sliderimage3,
    title: 'Exceptional Customer Service',
    description: "Our dedicated team of insurance experts is here to assist you every step of the way. From selecting the right plan to filing claims, we are committed to providing exceptional customer service. Experience personalized support and guidance whenever you need it.",
  }

]
export default function Appslider() {
  return (
   <section id='welcome' className='slide'>
      <Carousel>
        {sliderData.map(slider => (
          <Carousel.Item key={slider.id}>
            <div className='back-overly'>
              <img src={slider.image} alt="" className='slidemage' />
            <div className='img-overlay'></div>
            </div>
            <Carousel.Caption className='slide-caption'>
              <h3>{slider.title}</h3>
              <p>{slider.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
  
  
      </Carousel>
   </section>
  )
}