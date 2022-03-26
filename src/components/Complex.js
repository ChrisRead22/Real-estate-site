import React from 'react'
import styled, {css} from 'styled-components/macro';
import { Button } from './Button';
import {IoMdArrowRoundForward} from 'react-icons/io';
import {IoArrowForward, IoArrowBack} from 'react-icons/io5';

const SliderButtons = styled.div`
position: absolute;
bottom: 50px;
right: 50px;
display: flex;
z-index: 10;
`;

const ComplexSection = styled.section`
height: 100vh;
max-height: 1100px;
position: relative;
overflow: hidden;
`;

const ComplexWrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;
position: relative;
`;

const ComplexSlide = styled.div`
z-index: 1;
width: 100%;
height: 100%;
`;

const ComplexSlider = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;

&::before {
  content: '';
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100vh;
  bottom: ovh;
  left: 0;
  overflow: hidden;
  opacity: 0.4;
  background: linear-gradient(
    0deg,
    rgba(0,0,0,0.2) 0%,
    rgba(0,0,0,0.2) 50%,
    rgba(0,0,0,0.2) 100%);
}
`;

const ComplexImage = styled.img`
position: absolute;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
object-fit: cover;
`;

const ComplexContent = styled.div``;

const Arrow = styled(IoMdArrowRoundForward)``;

const arrowButtons = css`
width: 50px;
height: 50px;
color: #fff;
cursor: pointer;
background: #000d1a;
border-radius: 50px;
padding: 10px;
margin-right: 1rem;
user-select: none;
transition: 0.3s;

&:hover {
  background: #cd853f;
  transform: scale(1.05);
}
`;

const PrevArrow = styled(IoArrowBack)`
${arrowButtons}
`

const NextArrow = styled(IoArrowForward)`
${arrowButtons}
`

const Complex = ({ slides }) => {
  return (
    <ComplexSection>
      <ComplexWrapper>
      {slides.map((slide, index) => {
        return (
          <ComplexSlide key={index}>
            <ComplexSlider>
              <ComplexImage src={slide.image} alt={slide.alt} />
                <ComplexContent>
                  <h1>{slide.title}</h1>
                  <p>{slide.price}</p>
                  <Button to={slide.path} primary="true"
                  css={`
                  max-width: 160px;
                  `}
                  >
                    {slide.label}
                    <Arrow />
                  </Button>
                </ComplexContent>
            </ComplexSlider>
          </ComplexSlide>
        );
      })};
      <SliderButtons>
        <PrevArrow />
        <NextArrow />
      </SliderButtons>
      </ComplexWrapper>
    </ComplexSection>
  );
};

export default Complex;