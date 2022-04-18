import React from 'react'
import styled from 'styled-components'

const Section = styled.section``
const Container = styled.div``
const ColumnLeft = styled.div``
const ColumnRight = styled.div``

const InfoSection = () => {
  return (
    <Section>
      <Container>
        <ColumnLeft>
          <h1>heading</h1>
          <p>paragraph</p>
          <p>paragraph</p>
          <Button to="/homes"></Button>
        </ColumnLeft>
        <ColumnRight>
          <img src="" alt="home" />
        </ColumnRight>
      </Container>
    </Section>
  );
};

export default InfoSection;