import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
  margin: ${(props) => props.theme.rhythm(16)} 0;
`;

const Section = ({ children }) => {
  return <StyledSection>{children}</StyledSection>;
};

export default Section;
