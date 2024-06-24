import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import image4 from './images/image4.jpg';
import image5 from './images/image5.jpg';

const SlideshowContainer = styled.div`
  width: 100%;
  position: relative;
  margin: auto;
  overflow: hidden;
`;

const Slide = styled.div`
  display: none;
`;

const SlideImage = styled.img`
  width: 100%;
  height: auto; /* Maintain aspect ratio */
  max-height: 400px; /* Reduce height */
  object-fit: cover; /* Ensure the image covers the entire width */
`;

const PrevNextButtons = styled.a`
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 16px;
  margin-top: -22px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  user-select: none;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

const NextButton = styled(PrevNextButtons)`
  right: 0;
`;

const DotsContainer = styled.div`
  text-align: center;
  padding: 20px;
`;

const Dot = styled.span`
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;

  &.active,
  &:hover {
    background-color: #717171;
  }
`;

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [image1, image2, image3, image4, image5];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 5000ms = 5s

    return () => clearInterval(timer);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const setSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <SlideshowContainer>
      {images.map((image, index) => (
        <Slide key={index} style={{ display: currentIndex === index ? 'block' : 'none' }}>
          <SlideImage src={image} alt={`Slide ${index + 1}`} />
        </Slide>
      ))}

      <PrevNextButtons onClick={prevSlide}>&#10094;</PrevNextButtons>
      <NextButton onClick={nextSlide}>&#10095;</NextButton>

      <DotsContainer>
        {images.map((_, index) => (
          <Dot
            key={index}
            className={currentIndex === index ? 'active' : ''}
            onClick={() => setSlide(index)}
          ></Dot>
        ))}
      </DotsContainer>
    </SlideshowContainer>
  );
};

export default Slideshow;
