import React from 'react'
import styled, {css} from 'styled-components/macro'

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

const Complex = () => {
  return (
    <ComplexSection>
      <ComplexWrapper>
      {slides.map((slide, index) => {
        return (
          <ComplexSlide key={index}>
            <ComplexSlider>
              <ComplexImage/>
                <ComplexContent>
                  
                </ComplexContent>
            </ComplexSlider>
          </ComplexSlide>
        )
      })}
      </ComplexWrapper>
    </ComplexSection>
  )
}

export default Complex;