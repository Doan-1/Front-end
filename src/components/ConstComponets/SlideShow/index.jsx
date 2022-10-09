import React from 'react';
import { Zoom  } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import slideImg from '../../../assets/slide-img.jpg'
import slideImg1 from '../../../assets/signin.jpg'


const slideImages = [
    {
        url: slideImg,
        caption: 'Slide 1'
    },
    {
        url: slideImg1,
        caption: 'Slide 2'
    },
    {
        url: slideImg,
        caption: 'Slide 3'
    },
];

const zoomOutProperties = {
    duration: 3000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    scale: 0.8,
    arrows: false
  };

const Slideshow = () => {
    return (
        <div className="slide-container">
            <Zoom {...zoomOutProperties}>
                {slideImages.map((slideImage, index) => (
                    <div className="each-slide" style={{width: '100%', height: '500px'}} key={index}>
                        <img style={{width: '100%', height: '100%'}} src={slideImage.url} alt="" />
                    </div>
                ))}
            </Zoom>
        </div>
    )
}

export default Slideshow;