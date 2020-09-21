import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'Components/Link';
import { Container, Row, Column } from 'Components/Grid';
import { Menu, X } from '@styled-icons/feather';

const StyledNav = styled.nav`
  background: ${(props) => props.theme.colors.primary};
  height: ${(props) => props.theme.rhythm(6)};
  overflow-y: ${(props) => (props.isOpen ? 'visible' : 'hidden')};
  white-space: nowrap;
  width: 100%;
`;

const Hamburger = styled.button`
  background: transparent;
  border: none;
  height: ${(props) => props.theme.rhythm(6)};
  padding: 0 10px;
  margin-left: -10px;
  &:focus,
  &:hover {
    outline-color: ${(props) => props.theme.colors.secondary};
  }

  @media screen and (min-width: ${(props) => props.theme.viewPort.sm}) {
    display: none;
  }
`;

const NavLinks = styled.ul`
  background: ${(props) => props.theme.colors.primary};
  left: 0;
  list-style-type: none;
  margin: 0;
  padding: 0 20px;
  position: absolute;
  top: ${(props) => props.theme.rhythm(6)};
  width: 100%;
  z-index: 100;
  li {
    a {
      color: ${(props) => props.theme.colors.white};
      line-height: ${(props) => props.theme.rhythm(6)};
      &:active,
      &:hover {
        text-decoration: none;
      }
    }
    &:last-of-type {
      margin-bottom: ${(props) => props.theme.rhythm(2)};
    }
  }

  @media screen and (min-width: ${(props) => props.theme.viewPort.sm}) {
    position: static;
    padding: 0;
    li {
      display: inline-block;
      a {
        font-size: ${(props) => props.theme.fontSize.sm};
        font-weight: ${(props) => props.theme.fontWeight.medium};
        margin-right: 20px;
      }
      &:last-of-type {
        margin-bottom: 0;
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
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <StyledNav isOpen={isOpen}>
      <Container>
        <Row>
          <Column xxl={{ column: 10, offset: 1 }}>
            <Hamburger onClick={toggleMenu}>
              {isOpen ? (
                <X size="24" color="white" strokeWidth="2"></X>
              ) : (
                <Menu size="24" color="white" strokeWidth="2"></Menu>
              )}
            </Hamburger>
            <NavLinks>
              <li>
                <Link to="/about">My Story</Link>
              </li>
              <li>
                <Link to="/my-approach">My Approach</Link>
              </li>
              <li>
                <Link to="/media">Media</Link>
              </li>
              <li>
                <Link to="/volunteer">Volunteer</Link>
              </li>
              <li>
                <Link to="/endorse">Endorse</Link>
              </li>
            </NavLinks>
          </Column>
        </Row>
      </Container>
    </StyledNav>
  );
};

export default Navigation;
