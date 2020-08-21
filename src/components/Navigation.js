import React from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';
import { Container, Row, Column } from 'Components/Grid';
import { Link } from 'gatsby';

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
    display: inline-block;
    margin-right: 20px;
    a {
      color: ${(props) => props.theme.colors.white};
      display: inline-block;
      font-weight: ${(props) => props.theme.fontWeight.bold};
      height: 100%;
      line-height: ${(props) => props.theme.rhythm(8)};
      padding: 0 5px;
      text-decoration: none;
      &:active,
      &:hover {
        background: ${(props) => props.theme.colors.primary};
      }
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
              <li>
                <Link to="#">Home</Link>
              </li>
              <li>
                <Link to="#">My Goals</Link>
              </li>
              <li>
                <Link to="#">My Story</Link>
              </li>
            </StyledLinks>
          </Column>
        </Row>
      </Container>
    </StyledNav>
  );
};

export default Navigation;
