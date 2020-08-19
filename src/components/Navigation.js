import React from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';
import { Container } from 'Components/Grid';

const StyledNav = styled.nav`
  background: ${(props) => rgba(props.theme.colors.black, 0.25)};
  border-bottom: 1px solid ${(props) => props.theme.colors.white};
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 10;
`;

const StyledLinks = styled.ul`
  padding: 0;
  margin: 0;
  li {
    color: ${(props) => props.theme.colors.white};
    display: inline-block;
    font-weight: ${(props) => props.theme.fontWeight.bold};
    line-height: ${(props) => props.theme.rhythm(6)};
    margin-right: 15px;
    &:active,
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Navigation = () => {
  return (
    <StyledNav>
      <Container>
        <StyledLinks>
          <li>Home</li>
          <li>My Goals</li>
          <li>My Story</li>
        </StyledLinks>
      </Container>
    </StyledNav>
  );
};

export default Navigation;
