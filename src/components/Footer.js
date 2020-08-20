import React from 'react';
import styled from 'styled-components';
import { Container, Row, Column } from 'Components/Grid';
import Type from 'Components/Type';
import Link from 'Components/Link';
import Image from 'Components/Image';
import Logo from 'Components/Logo';
import { lighten } from 'polished';
import { Facebook, Instagram, Mail } from '@styled-icons/feather';

const StyledFooter = styled.footer`
  background: ${(props) => props.theme.colors.primary};
  padding: ${(props) => props.theme.rhythm(8)} 0 0;
`;

const FooterNav = styled.nav`
  margin: 0 0 ${(props) => props.theme.rhythm(2)};
  ul {
    list-style-type: none;
    margin: 0;
    margin-bottom: ${(props) => props.theme.rhythm()};
    padding: 0;
    &:nth-of-type(2) {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    li {
      line-height: ${(props) => props.theme.rhythm(5)};
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
          <Column lg={{ column: 10, offset: 1 }}>
            <FooterNav>
              <Row
                css={`
                  margin-bottom: ${(props) => props.theme.rhythm()};
                `}
              >
                <Column sm={3} md={3} xl={2}>
                  <Type el="h4" color="white" weight="bold">
                    My Campaign
                  </Type>
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
                </Column>

                <Column sm={6} md={6} lg={4}>
                  <Type el="h4" color="white" weight="bold">
                    Engage
                  </Type>
                  <ul>
                    <li>
                      <Link to="#">
                        <i>
                          <Facebook size={20}></Facebook>
                        </i>
                        fb/ahlbergforcouncil
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
                          <Mail
                            size={20}
                            stroke="#1b5633"
                            strokeWidth={2}
                          ></Mail>
                        </i>
                        josh@ahlbergforcouncil.org
                      </Link>
                    </li>
                  </ul>
                </Column>

                <Column
                  sm={3}
                  lg={2}
                  css={`@media screen and (min-width: ${(props) =>
                    props.theme.viewPort.sm}) {
                  text-align: right;
                  
                  @media screen and (min-width: ${(props) =>
                    props.theme.viewPort.lg}) {
                  text-align: center;`}
                >
                  <Image
                    src={'edina-city-seal.png'}
                    srcSet={{
                      '1x': 'edina-city-seal.png',
                      '2x': 'edina-city-seal.png',
                    }}
                    alt="Edina City Seal"
                    css={`
                      margin-bottom: ${(props) => props.theme.rhythm()};
                      width: 100px;
                    `}
                  ></Image>
                </Column>

                <Column lg={3} xl={4}>
                  <div
                    css={`
                      background: white;
                      display: inline-block;
                      padding: 4px 4px 0;
                      margin-bottom: ${(props) => props.theme.rhythm(2)};
                    `}
                  >
                    <Logo
                      css={`
                        width: 150px;
                      `}
                    ></Logo>
                  </div>
                  <Type
                    color="white"
                    weight="normal"
                    size="sm"
                    css={`
                      line-height: ${(props) => props.theme.rhythm(3)};
                    `}
                  >
                    &copy; 2020 Ahlberg for Edina City Council
                  </Type>
                </Column>
              </Row>
            </FooterNav>
          </Column>
        </Row>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
