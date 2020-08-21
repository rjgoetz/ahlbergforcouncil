import React from 'react';
import styled from 'styled-components';
import { Container, Row, Column } from 'Components/Grid';
import Type from 'Components/Type';
import Logo from 'Components/Logo';
import Button from 'Components/Button';
import { DollarSign, Facebook, Instagram, Mail } from '@styled-icons/feather';

const StyledHeader = styled.header`
  padding-top: ${(props) => props.theme.rhythm()};
  padding-bottom: ${(props) => props.theme.rhythm()};
`;

const StyledLogo = styled(Logo)`
  vertical-align: middle;
  width: 150px;
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

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Row>
          <Column xl={{ column: 10, offset: 1 }} xxl={{ column: 8, offset: 2 }}>
            <Row>
              <Column xs={6} md={4} lg={3} xxl={2}>
                <StyledLogo></StyledLogo>
              </Column>

              <Column
                md={4}
                lg={6}
                align="center"
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
                xxl={4}
                css={`
                  display: flex;
                  align-items: center;
                  justify-content: flex-end;
                `}
              >
                <Button background="primary">
                  <DollarSign
                    size={18}
                    strokeWidth={2}
                    css={`
                      margin-right: 5px;
                    `}
                  ></DollarSign>
                  Donate Now!
                </Button>
              </Column>
            </Row>
          </Column>
        </Row>
      </Container>
    </StyledHeader>
  );
};

export default Header;
