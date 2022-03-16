import React from 'react'
import styled, {css} from 'styled-components/macro'

const HeroSection = styled.section`
height: 100vh;
max-height: 1100px;
position: relative;
overflow: hidden;
`;

const Hero = () => {
  return (
    <HeroSection>
        <h1>Hero</h1>
    </HeroSection>
  )
}

export default Hero;