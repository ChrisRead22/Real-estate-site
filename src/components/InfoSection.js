import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
width: 100%;
height: 100%;
padding: 4rem 0rem;
`;

const Container = styled.div`
padding: 3rem calc((100vw - 1300px) / 2);
display: grid;
grid-template-columns: 1fr 1fr;

`;

const ColumnLeft = styled.div``;
const ColumnRight = styled.div``;

const InfoSection = ({heading, paragraphOne, paragraphTwo, buttonLabel, reverse, image}) => {
  return (
    <Section>
      <Container>
        <ColumnLeft>
          <h1>{heading}</h1>
          <p>{paragraphOne}</p>
          <p>{paragraphTwo}</p>
          <Button to="/homes">{buttonLabel}</Button>
        </ColumnLeft>
        <ColumnRight reverse={reverse}>
          <img src={image} alt="home" />
        </ColumnRight>
      </Container>
    </Section>
  );
};

export default InfoSection;