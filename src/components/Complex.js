import React from 'react'
import styled, {css} from 'styled-components/macro';
import { Button } from './Button';
import {IoMdArrowRoundForward} from 'react-icons/io';
import {IoArrowForward, IoArrowBack} from 'react-icons/io5';

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

const ComplexSlide = styled.div``;
const ComplexSlider = styled.div``;
const ComplexImage = styled.img``;
const ComplexContent = styled.div``;
const Arrow = styled(IoMdArrowRoundForward)``;

const Complex = ({ slides }) => {
  return (
    <ComplexSection>
      <ComplexWrapper>
      {slides.map((slide, index) => {
        return (
          <ComplexSlide key={index}>
            <ComplexSlider>
              <ComplexImage/>
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
      
      </ComplexWrapper>
    </ComplexSection>
  );
};

export default Complex;