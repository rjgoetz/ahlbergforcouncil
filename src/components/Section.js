import React from 'react';
import styled from 'styled-components';
import { oneOf } from 'prop-types';

const StyledSection = styled.section`
  background: ${(props) =>
    props.background ? props.theme.colors[props.background] : 'transparent'};
  padding: ${(props) => props.theme.rhythm(8)} 0;
  @media screen and (min-width: ${(props) => props.theme.viewPort.md}) {
    padding: ${(props) => props.theme.rhythm(16)} 0;
  }
`;

const Section = ({ children, background, ...props }) => {
  return (
    <StyledSection background={background} {...props}>
      {children}
    </StyledSection>
  );
};

Section.propTypes = {
  background: oneOf(['primary', 'ltGrey', 'black', 'white']),
};

export default Section;
