import React from 'react';
import styled from 'styled-components';
import Wrapper from 'Components/Wrapper';
import PropTypes from 'prop-types';

const StyledSection = styled.section`
  background: ${(props) =>
    props.background ? props.theme.colors[props.background] : 'transparent'};
  background: ${(props) =>
    props.image && `url(${props.image}) no-repeat center bottom`};
  background-size: cover;
  padding: ${(props) => (props.noPad ? `0` : props.theme.rhythm(8))} 0;
  @media screen and (min-width: ${(props) => props.theme.viewPort.md}) {
    padding: ${(props) => (props.noPad ? `0` : props.theme.rhythm(16))} 0;
  }
`;

const Section = ({ children, background, image, ...props }) => {
  return (
    <StyledSection background={background} image={image} {...props}>
      <Wrapper>{children}</Wrapper>
    </StyledSection>
  );
};

Section.propTypes = {
  background: PropTypes.oneOf(['primary', 'ltGrey', 'black', 'white']),
  children: PropTypes.node.isRequired,
  noPad: PropTypes.bool,
};

export default Section;
