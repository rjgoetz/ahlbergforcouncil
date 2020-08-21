import React from 'react';
import styled from 'styled-components';
import { Container, Row, Column } from 'Components/Grid';
import Banner from 'Components/Banner';
import Layout from 'Components/Layout';
import Image from 'Components/Image';
import SEO from 'Components/SEO';
import Type from 'Components/Type';
import DonateBox from 'Components/DonateBox';
import Section from 'Components/Section';
import Link from 'Components/Link';
import JoshImage from 'Images/josh-hero-mobile.jpg';

const BigNumberBox = styled.div`
  padding: ${(props) => props.theme.rhythm(8)} 0;
  h2 {
    display: inline-block;
  }
  @media screen and (min-width: ${(props) => props.theme.viewPort.md}) {
    h2 {
      width: 100%;
    }
  }
  @media screen and (min-width: ${(props) => props.theme.viewPort.xxl}) {
    h2 {
      width: auto;
    }
  }
`;

const BigNumber = styled.span`
  color: ${(props) => props.theme.colors.primary};
  display: block;
  font-size: 64px;
  font-weight: ${(props) => props.theme.fontWeight.light};
  line-height: ${(props) => props.theme.rhythm(10)};
  margin-right: 15px;
  margin-bottom: ${(props) => props.theme.rhythm()};
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Banner image={JoshImage}>
      <Type
        el="h1"
        banner
        css={`
          margin-bottom: 0px;
        `}
      >
        <span
          css={`
            background: ${(props) => props.theme.colors.primary};
            line-height: ${(props) => props.theme.rhythm(7)};
            outline: 5px solid ${(props) => props.theme.colors.primary};
          `}
        >
          #THE SENSIBLE CHOICE FOR EDINA
        </span>
      </Type>
    </Banner>

    <Container>
      <Row>
        <Column
          md={{ column: 12, offset: 0 }}
          lg={{ column: 10, offset: 1 }}
          xl={{ column: 8, offset: 2 }}
        >
          <DonateBox></DonateBox>
        </Column>
      </Row>
    </Container>

    <Container
      css={`
        margin-top: ${(props) => props.theme.rhythm()};
        margin-bottom: ${(props) => props.theme.rhythm(16)};
      `}
    >
      <Row>
        <Column
          sm={{ column: 8, offset: 2 }}
          md={{ column: 12, offset: 0 }}
          lg={{ column: 10, offset: 1 }}
          xl={{ column: 8, offset: 2 }}
        >
          <Row>
            <Column md={6}>
              <Type el="h4">About Me</Type>
              <Type el="h1" align="left">
                Excited to Run!
              </Type>
              <Type
                css={`
                  border-left: 3px solid
                    ${(props) => props.theme.colors.primary};
                  padding-left: 30px;
                  margin-bottom: ${(props) => props.theme.rhythm(8)};
                `}
              >
                Aliquam id consequat urna. Nam felis dolor, cursus a nulla
                euismod, ullamcorper interdum massa. Praesent bibendum velit at
                dictum placerat. Sed in maximus mi, id lacinia risus. Maecenas
                volutpat ultrices justo, a luctus tellus euismod ac. Suspendisse
                vehicula erat id lacinia viverra.
              </Type>

              <div
                css={`
                  display: inline-block;
                `}
              >
                <Image
                  src="ahlberg-icon.png"
                  srcSet={{
                    '1x': 'ahlberg-icon.png',
                    '2x': 'ahlberg-icon.png',
                  }}
                  alt="Ahlberg Crown"
                  css={`
                    margin-right: 40px;
                    width: 50px;
                  `}
                ></Image>
              </div>
              <div
                css={`
                  display: inline-block;
                `}
              >
                <Type weight="medium">-- Josh Ahlberg</Type>
                <Link to="/about/">More about me &gt;</Link>
              </div>
            </Column>
          </Row>
        </Column>
      </Row>
    </Container>

    <Section
      background="ltGrey"
      css={`
        margin-bottom: 0;
      `}
    >
      <Container>
        <Row
          css={`
            padding-top: ${(props) => props.theme.rhythm(8)};
            padding-bottom: ${(props) => props.theme.rhythm(8)};
          `}
        >
          <Column
            sm={{ column: 8, offset: 2 }}
            md={{ column: 12, offset: 0 }}
            lg={{ column: 10, offset: 1 }}
            xl={{ column: 8, offset: 2 }}
          >
            <Row>
              <Column md={4} xxl={3}>
                <BigNumberBox>
                  <BigNumber>01</BigNumber>
                  <Type
                    el="h2"
                    color="black"
                    size="xl"
                    css={`
                      line-height: ${(props) => props.theme.rhythm(6)};
                      margin-bottom: ${(props) => props.theme.rhythm()};
                    `}
                  >
                    Sensible<span css={'display: block;'}>Solutions</span>
                  </Type>
                  <Type
                    lead
                    css={`
                      margin-bottom: 0;
                    `}
                  >
                    Donec sollicitudin urna ut orci pellentesque, eu tempus
                    lacus aliquet. Phasellus aliquet at eros eu commodo. Fusce
                    ultricies turpis ac accumsan euismod.
                  </Type>
                </BigNumberBox>
              </Column>
              <Column md={4} xxl={{ column: 3, offset: 1 }}>
                <BigNumberBox>
                  <BigNumber>02</BigNumber>
                  <Type
                    el="h2"
                    color="black"
                    size="xl"
                    css={`
                      line-height: ${(props) => props.theme.rhythm(6)};
                      margin-bottom: ${(props) => props.theme.rhythm()};
                    `}
                  >
                    Neutral <span css={'display: block;'}>Impact</span>
                  </Type>
                  <Type
                    lead
                    css={`
                      margin-bottom: 0;
                    `}
                  >
                    Vivamus et tincidunt erat. Vivamus quis dignissim elit,
                    semper blandit est. Aliquam eget dignissim elit, eu
                    dignissim erat. Suspendisse potenti.
                  </Type>
                </BigNumberBox>
              </Column>
              <Column md={4} xxl={{ column: 3, offset: 1 }}>
                <BigNumberBox>
                  <BigNumber>03</BigNumber>
                  <Type
                    el="h2"
                    color="black"
                    size="xl"
                    css={`
                      line-height: ${(props) => props.theme.rhythm(6)};
                      margin-bottom: ${(props) => props.theme.rhythm()};
                    `}
                  >
                    Always <span css={'display: block;'}>Accountable</span>
                  </Type>
                  <Type
                    lead
                    css={`
                      margin-bottom: 0;
                    `}
                  >
                    Pellentesque habitant morbi tristique senectus et netus et
                    malesuada fames ac turpis egestas. Quisque viverra erat eget
                    suscipit ultricies.
                  </Type>
                </BigNumberBox>
              </Column>
            </Row>
          </Column>
        </Row>
      </Container>
    </Section>
  </Layout>
);

export default IndexPage;
