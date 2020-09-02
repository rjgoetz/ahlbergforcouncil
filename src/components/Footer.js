import React from 'react';
import styled from 'styled-components';
import { Row, Column } from 'Components/Grid';
import Wrapper from 'Components/Wrapper';
import Type from 'Components/Type';
import Link from 'Components/Link';
import Logo from 'Components/Logo';
import { lighten } from 'polished';
import { Facebook, Instagram } from '@styled-icons/feather';

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

const StyledLogo = styled(Logo)`
  background: white;
  padding: 5px;
  width: 150px;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Wrapper>
        <FooterNav>
          <Row
            css={`
              margin-bottom: ${(props) => props.theme.rhythm()};
            `}
          >
            <Column
              sm={6}
              md={4}
              lg={3}
              xxl={2}
              css={`
                @media screen and (min-width: ${(props) =>
                    props.theme.viewPort.md}) {
                  order: 2;
                }
              `}
            >
              <Type el="h4" color="white" weight="bold">
                My Campaign
              </Type>
              <ul>
                <li>
                  <Link to="/about/">My Story</Link>
                </li>
                <li>
                  <Link to="/my-take/">My Take</Link>
                </li>
                <li>
                  <Link to="/donate/">Donate</Link>
                </li>
                <li>
                  <Link to="/volunteer/">Volunteer</Link>
                </li>
                <li>
                  <Link to="/endorse/">Endorse</Link>
                </li>
              </ul>
            </Column>

            <Column
              sm={6}
              md={4}
              lg={3}
              css={`
                @media screen and (min-width: ${(props) =>
                    props.theme.viewPort.md}) {
                  order: 3;
                }
              `}
            >
              <Type el="h4" color="white" weight="bold">
                Get in touch
              </Type>
              <ul>
                <li>
                  <Link to="/contact">josh@ahlbergforcouncil.org</Link>
                </li>
                <li
                  css={`
                    margin-bottom: ${(props) => props.theme.rhythm()};
                  `}
                >
                  <Link to="tel: 6124584817" external>
                    (612) 458-4817
                  </Link>
                </li>
                <li
                  css={`
                    display: inline-block;
                    margin-right: 10px;
                  `}
                >
                  <Link
                    to="https://www.facebook.com/pages/category/Political-Organization/Ahlberg-for-Council-104298258075316"
                    external
                  >
                    <i>
                      <Facebook size={30}></Facebook>
                    </i>
                  </Link>
                </li>
                <li
                  css={`
                    display: inline-block;
                  `}
                >
                  <Link
                    to="https://www.instagram.com/ahlbergforcouncil"
                    external
                  >
                    <i>
                      <Instagram
                        size={30}
                        stroke="#1b5633"
                        strokeWidth={2}
                      ></Instagram>
                    </i>
                  </Link>
                </li>
              </ul>
            </Column>

            <Column
              md={4}
              lg={6}
              xxl={4}
              css={`
                @media screen and (min-width: ${(props) =>
                    props.theme.viewPort.md}) {
                  order: 1;
                }
              `}
            >
              <Link to="/">
                <StyledLogo></StyledLogo>
              </Link>
              <Type
                color="white"
                size="sm"
                css={`
                  line-height: ${(props) => props.theme.rhythm(3)};
                  margin-bottom: 0;
                `}
              >
                Paid for by Ahlberg for Council.
                <br />
                6825 Valley View Rd. Edina, MN 55439
              </Type>
            </Column>
          </Row>
        </FooterNav>
      </Wrapper>
    </StyledFooter>
  );
};

export default Footer;
