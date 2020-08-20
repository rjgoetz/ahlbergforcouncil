import React from 'react';
import styled from 'styled-components';
import { Container, Row, Column } from 'Components/Grid';
import Type from 'Components/Type';
import Link from 'Components/Link';
import { lighten } from 'polished';
import { Facebook, Instagram, Mail } from '@styled-icons/feather';

const StyledFooter = styled.footer`
  background: ${(props) => props.theme.colors.primary};
  padding: ${(props) => props.theme.rhythm(8)} 0 0;
`;

const FooterNav = styled.nav`
  display: flex;
  justify-content: space-between;
  margin: 0 0 ${(props) => props.theme.rhythm(6)};
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    &:nth-of-type(2) {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    li {
      a {
        color: ${(props) => lighten(0.3, props.theme.colors.primary)};
        i {
          margin-right: 6px;
          svg {
            fill: ${(props) => lighten(0.3, props.theme.colors.primary)};
          }
        }
      }
    }
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <Row>
          <Column>
            <FooterNav>
              <ul>
                <li>
                  <Link to="/about/">My Story</Link>
                </li>
                <li>
                  <Link to="/goals/">My Goals</Link>
                </li>
                <li>
                  <Link to="/donate/">Donate</Link>
                </li>
                <li>
                  <Link to="/volunteer/">Volunteer</Link>
                </li>
              </ul>

              <ul>
                <li>
                  <Link to="#">
                    <i>
                      <Facebook size={20}></Facebook>
                    </i>
                    facebook/ahlbergforcouncil
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i>
                      <Instagram
                        size={20}
                        stroke="#1b5633"
                        strokeWidth={2}
                      ></Instagram>
                    </i>
                    @ahlbergforcoucil
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i>
                      <Mail size={20} stroke="#1b5633" strokeWidth={2}></Mail>
                    </i>
                    josh@ahlbergforcouncil.com
                  </Link>
                </li>
              </ul>
            </FooterNav>

            <Type color="white" weight="normal" size="sm" align="center">
              &copy; 2020 Ahlberg for Edina City Council
            </Type>
          </Column>
        </Row>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
