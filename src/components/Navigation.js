import React from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';
import { Container, Row, Column } from 'Components/Grid';

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
    line-height: ${(props) => props.theme.rhythm(8)};
    margin-right: 20px;
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
        <Row>
          <Column lg={{ column: 10, offset: 1 }} xxl={{ column: 8, offset: 2 }}>
            <StyledLinks>
              <li>Home</li>
              <li>My Goals</li>
              <li>My Story</li>
            </StyledLinks>
          </Column>
        </Row>
      </Container>
    </StyledNav>
  );
};

export default Navigation;
