import React from 'react';
import styled from 'styled-components';
import { Container, Row, Column } from 'Components/Grid';
import { bool, oneOf } from 'prop-types';

const StyledSection = styled.section`
  background: ${(props) =>
    props.background ? props.theme.colors[props.background] : 'transparent'};
  background: ${(props) =>
    props.image && `url(${props.image}) no-repeat center bottom`};
  padding: ${(props) => (props.noPad ? `0` : props.theme.rhythm(8))} 0;
  @media screen and (min-width: ${(props) => props.theme.viewPort.md}) {
    padding: ${(props) => (props.noPad ? `0` : props.theme.rhythm(16))} 0;
  }
`;

const Section = ({ children, background, image, ...props }) => {
  return (
    <StyledSection background={background} image={image} {...props}>
      <Container>
        <Row>
          <Column
            md={{ column: 12, offset: 0 }}
            lg={{ column: 10, offset: 1 }}
            xl={{ column: 8, offset: 2 }}
          >
            {children}
          </Column>
        </Row>
      </Container>
    </StyledSection>
  );
};

Section.propTypes = {
  background: oneOf(['primary', 'ltGrey', 'black', 'white']),
  noPad: bool,
};

export default Section;
