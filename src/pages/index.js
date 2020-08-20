import React from 'react';
import { Container, Row, Column } from 'Components/Grid';
import { Banner, BannerText, OpacityLayer } from 'Components/Banner';
import Navigation from 'Components/Navigation';
import Layout from 'Components/Layout';
import Image from 'Components/Image';
import SEO from 'Components/SEO';
import Type from 'Components/Type';
import DonateBox from 'Components/DonateBox';
import Section from 'Components/Section';
import Link from 'Components/Link';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Banner>
      <OpacityLayer></OpacityLayer>

      <Navigation></Navigation>

      <Image
        src="josh-hero-mobile.jpg"
        srcSet={{
          '1x': 'josh-hero-mobile.jpg',
          '2x': 'josh-hero-mobile@2x.jpg',
        }}
        alt="Josh Ahlberg headshot"
      ></Image>
      <Container>
        <BannerText>
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
        </BannerText>
      </Container>
    </Banner>

    <Container>
      <Row>
        <Column sm={{ column: 10, offset: 1 }}>
          <DonateBox></DonateBox>
        </Column>
      </Row>
    </Container>

    <Container>
      <Row>
        <Column>
          <Section>
            <Type el="h4">About Me</Type>
            <Type el="h1" align="left">
              Excited to Run!
            </Type>
            <Type
              css={`
                border-left: 3px solid ${(props) => props.theme.colors.primary};
                padding-left: 15px;
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
                display: flex;
                justify-content: space-evenly;
              `}
            >
              <div>
                <Image
                  src="ahlberg-icon.png"
                  srcSet={{
                    '1x': 'ahlberg-icon.png',
                    '2x': 'ahlberg-icon.png',
                  }}
                  alt="Ahlberg Crown"
                  css={`
                    width: 50px;
                  `}
                ></Image>
              </div>
              <div>
                <Type weight="medium">-- Josh Ahlberg</Type>
                <Link to="/about/">More about me &gt;</Link>
              </div>
            </div>
          </Section>
        </Column>
      </Row>
    </Container>
  </Layout>
);

export default IndexPage;
