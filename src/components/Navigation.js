import React from 'react';
import styled from 'styled-components';
import Link from 'Components/Link';
import { Container, Row, Column } from 'Components/Grid';

const StyledNav = styled.nav`
  background: ${(props) => props.theme.colors.primary};
`;

const StyledLinks = styled.ul`
  font-size: ${(props) => props.theme.fontSize.sm};
  padding: 0;
  margin: 0;
  li {
    display: inline-block;
    a {
      color: ${(props) => props.theme.colors.white};
      display: inline-block;
      font-size: ${(props) => props.theme.fontSize.medium};
      font-weight: ${(props) => props.theme.fontWeight.medium};
      height: 100%;
      line-height: ${(props) => props.theme.rhythm(6)};
      margin-right: 20px;
      &:active,
      &:hover {
        text-decoration: none;
      }
    }
  }
  @media screen and (min-width: ${(props) => props.theme.viewPort.md}) {
    li {
      a {
        margin-right: 40px;
      }
    }
  }
`;

const Navigation = () => {
  return (
    <StyledNav>
      <Container>
        <Row>
          <Column xxl={{ column: 10, offset: 1 }}>
            <StyledLinks>
              <li>
                <Link to="/about">My Story</Link>
              </li>
              <li>
                <Link to="/my-approach">My Approach</Link>
              </li>
              <li>
                <Link to="/volunteer">Volunteer</Link>
              </li>
              <li>
                <Link to="/endorse">Endorse</Link>
              </li>
            </StyledLinks>
          </Column>
        </Row>
      </Container>
    </StyledNav>
  );
};

export default Navigation;
