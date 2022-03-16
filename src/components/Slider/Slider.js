import React from 'react'
import {Carousel} from 'react-bootstrap'
import slide from '../images/slide.jpg'
const Slider = () => {
  return (
    <Carousel interval={3000} className='carousel'>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={slide}
        alt="First slide"
      />
      <Carousel.Caption>
        <h3 className='text-white'>First slide label</h3>
        <p className='text-white'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={slide}
        alt="Second slide"
      />
  
      <Carousel.Caption>
        <h3 className='text-white'>Second slide label</h3>
        <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={slide}
        alt="Third slide"
      />
  
      <Carousel.Caption>
        <h3 className='text-white'>Third slide label</h3>
        <p className='text-white'>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  )
}

export default Slider
