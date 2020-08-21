import React from 'react';
import styled from 'styled-components';
import { Container, Row, Column } from 'Components/Grid';
import Type from 'Components/Type';
import Logo from 'Components/Logo';
import Button from 'Components/Button';
import { DollarSign, Facebook, Instagram, Mail } from '@styled-icons/feather';

const GetInTouch = styled.div`
  width: 100%;
  @media screen and (min-width: ${(props) => props.theme.viewPort.md}) {
    text-align: center;
  }
  @media screen and (min-width: ${(props) => props.theme.viewPort.lg}) {
    border-right: 2px solid ${(props) => props.theme.colors.primary};
    display: inline-block;
    padding-right: 24px;
    text-align: left;
    width: auto;
  }
`;

const Social = styled.div`
  display: none;
  @media screen and (min-width: ${(props) => props.theme.viewPort.lg}) {
    align-items: center;
    display: flex;
    padding-left: 24px;
  }
`;

const Header = () => {
  return (
    <Container
      css={`
        padding-top: ${(props) => props.theme.rhythm()};
        padding-bottom: ${(props) => props.theme.rhythm()};
      `}
    >
      <Row>
        <Column xl={{ column: 10, offset: 1 }}>
          <Row>
            <Column xs={6} md={4} lg={3} xxl={2}>
              <Logo
                css={`
                  vertical-align: middle;
                  width: 150px;
                `}
              ></Logo>
            </Column>

            <Column
              md={4}
              lg={6}
              xxl={4}
              css={`
                display: none;
                @media screen and (min-width: ${(props) =>
                    props.theme.viewPort.md}) {
                  display: flex;
                }
              `}
            >
              <GetInTouch>
                <Type el="h4">Get in Touch</Type>
                <Type weight="bold" css={'margin-bottom: 0;'}>
                  (612) 458-4817
                </Type>
              </GetInTouch>
              <Social>
                <Facebook
                  size={22}
                  css={`
                    fill: ${(props) => props.theme.colors.primary};
                    stroke: ${(props) => props.theme.colors.primary};
                    margin-right: 8px;
                  `}
                ></Facebook>
                <Instagram
                  size={22}
                  css={`
                    fill: ${(props) => props.theme.colors.primary};
                    stroke: white;
                    margin-right: 8px;
                  `}
                ></Instagram>
                <Mail
                  size={22}
                  css={`
                    fill: ${(props) => props.theme.colors.primary};
                    stroke: white;
                    margin-right: 8px;
                  `}
                ></Mail>
                <Type
                  css={`
                    margin-bottom: 0;
                  `}
                >
                  josh@ahlbergforcouncil.org
                </Type>
              </Social>
            </Column>

            <Column
              xs={6}
              md={4}
              lg={3}
              xxl={6}
              css={`
                display: flex;
                align-items: center;
                justify-content: flex-end;
              `}
            >
              <Button background="white">
                <DollarSign
                  size={18}
                  strokeWidth={2}
                  css={`
                    background: ${(props) => props.theme.colors.primary};
                    border-radius: 50%;
                    color: ${(props) => props.theme.colors.white};
                    display: inline-block;
                    margin-right: 5px;
                    padding: 2px;
                  `}
                ></DollarSign>
                Donate Now!
              </Button>
            </Column>
          </Row>
        </Column>
      </Row>
    </Container>
  );
};

export default Header;
