import React from 'react';
import styled from 'styled-components';
import { Container, Row, Column } from 'Components/Grid';
import Logo from 'Components/Logo';
import Button from 'Components/Button';
import Link from 'Components/Link';
import { Facebook, Instagram, Mail } from '@styled-icons/feather';

const StyledHeader = styled.header`
  padding-top: ${(props) => props.theme.rhythm(2)};
  padding-bottom: ${(props) => props.theme.rhythm(2)};
  @media screen and (min-width: ${(props) => props.theme.viewPort.xl}) {
    padding-top: ${(props) => props.theme.rhythm(3)};
    padding-bottom: ${(props) => props.theme.rhythm(3)};
  }
`;

const StyledLogo = styled(Logo)`
  vertical-align: middle;
  width: 100px;
  @media screen and (min-width: ${(props) => props.theme.viewPort.md}) {
    width: 125px;
  }
`;

const GetInTouch = styled.div`
  width: 100%;
  @media screen and (min-width: ${(props) => props.theme.viewPort.md}) {
    text-align: center;
  }
  @media screen and (min-width: ${(props) => props.theme.viewPort.lg}) {
    border-right: 2px solid ${(props) => props.theme.colors.primary};
    display: inline-block;
    padding-right: 20px;
    text-align: left;
    width: auto;
  }
`;

const Social = styled.div`
  display: none;
  @media screen and (min-width: ${(props) => props.theme.viewPort.lg}) {
    align-items: center;
    display: flex;
    padding-left: 20px;
  }
`;

const YardSign = styled(Button)`
  background: transparent;
  color: ${(props) => props.theme.colors.primary};
  margin-right: 20px;
  &:hover,
  &:active {
    background: transparent;
    color: ${(props) => props.theme.colors.secondary};
    svg {
      path {
        stroke: ${(props) => props.theme.colors.secondary};
      }
    }
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Row>
          <Column xxl={{ column: 10, offset: 1 }}>
            <Row>
              <Column xs={4} lg={3} xxl={2} align="center">
                <Link to="/">
                  <StyledLogo></StyledLogo>
                </Link>
              </Column>

              <Column
                lg={6}
                align="center"
                css={`
                  display: none;
                  @media screen and (min-width: ${(props) =>
                      props.theme.viewPort.lg}) {
                    display: flex;
                  }
                `}
              >
                <GetInTouch>
                  <Link
                    to="tel: 6124584817"
                    css={`
                      font-size: ${(props) => props.theme.fontSize.sm};
                    `}
                    external
                  >
                    (612) 458-4817
                  </Link>
                </GetInTouch>
                <Social>
                  <Link
                    to="/"
                    css={`
                      line-height: 22px;
                    `}
                  >
                    <Facebook
                      size={22}
                      css={`
                        fill: ${(props) => props.theme.colors.primary};
                        stroke: ${(props) => props.theme.colors.primary};
                        margin: 0 5px;
                      `}
                    ></Facebook>
                  </Link>

                  <Link
                    to="/"
                    css={`
                      line-height: 22px;
                    `}
                  >
                    <Instagram
                      size={22}
                      css={`
                        fill: ${(props) => props.theme.colors.primary};
                        stroke: white;
                        margin: 0 5px;
                      `}
                    ></Instagram>
                  </Link>

                  <Link
                    to="mailto: josh@ahlbergforcouncil.org"
                    css={`
                      font-size: ${(props) => props.theme.fontSize.sm};
                    `}
                    external
                  >
                    <Mail
                      size={22}
                      css={`
                        fill: ${(props) => props.theme.colors.primary};
                        stroke: white;
                        margin: 0 5px;
                        margin-right: 10px;
                      `}
                    ></Mail>
                    josh@ahlbergforcouncil.org
                  </Link>
                </Social>
              </Column>

              <Column
                xs={8}
                lg={3}
                xxl={4}
                css={`
                  display: flex;
                  align-items: center;
                  justify-content: flex-end;
                `}
              >
                <YardSign>
                  <span
                    css={`
                      display: none;
                      @media screen and (min-width: ${(props) =>
                          props.theme.viewPort.xl}) {
                        display: inline;
                      }
                    `}
                  >
                    Get a
                  </span>{' '}
                  Yard Sign{' '}
                  <svg
                    width="18px"
                    height="18px"
                    viewBox="0 0 150 150"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    css={`
                      margin-left: 5px;
                      vertical-align: middle;
                    `}
                  >
                    <title>yard-sign</title>
                    <desc>Created with Sketch.</desc>
                    <g
                      id="yard-sign"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <path
                        d="M7.5,7.74223625 L7.5,82.2577637 L142.5,77.9657222 L142.5,12.0342778 L7.5,7.74223625 Z"
                        id="Rectangle"
                        stroke="#1B5633"
                        strokeWidth="15"
                        fill="#FFFFFF"
                        fillRule="nonzero"
                      ></path>
                      <path
                        d="M45.5,86.5 L45.5,143.679687"
                        id="Line-2"
                        stroke="#1B5633"
                        strokeWidth="15"
                        strokeLinecap="square"
                        fillRule="nonzero"
                      ></path>
                      <path
                        d="M111.5,80.5 L111.5,137.001953"
                        id="Line-2-Copy"
                        stroke="#1B5633"
                        strokeWidth="15"
                        strokeLinecap="square"
                        fillRule="nonzero"
                      ></path>
                    </g>
                  </svg>
                </YardSign>
                <Button background="white">Donate</Button>
              </Column>
            </Row>
          </Column>
        </Row>
      </Container>
    </StyledHeader>
  );
};

export default Header;
