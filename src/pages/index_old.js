import React from 'react';
import { Container, Row, Column } from 'Components/Grid';
import { Banner, BannerText, OpacityLayer } from 'Components/Banner';
import Navigation from 'Components/Navigation';
import Layout from 'Components/Layout';
import Image from 'Components/Image';
import SEO from 'Components/SEO';
import Type from 'Components/Type';
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
        <Column>
          <Type el="h1">Joshua Ahlberg for Edina City Council</Type>
          <Type lead>Welcome to your new site.</Type>
          <Link to="/about/">Go to About</Link>
        </Column>
      </Row>
    </Container>
  </Layout>
);

export default IndexPage;
