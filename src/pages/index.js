import React from 'react';
import styled from 'styled-components';
import { Row, Column } from 'Components/Grid';
import Banner from 'Components/Banner';
import Layout from 'Components/Layout';
import SEO from 'Components/SEO';
import Type from 'Components/Type';
import DonateBox from 'Components/DonateBox';
import BigNumber from 'Components/BigNumber';
import Section from 'Components/Section';
import Link from 'Components/Link';
import JoshImage from 'Images/josh-hero.jpg';
import JoshImageMobile from 'Images/josh-hero-mobile.jpg';

const HomeBanner = (
  <Banner
    css={`
      background: url(${JoshImageMobile}) no-repeat center right;
      background-size: cover;
      @media screen and (min-width: ${(props) => props.theme.viewPort.md}) {
        background: url(${JoshImage}) no-repeat center center;
        background-size: cover;
      }
      @media screen and (min-width: ${(props) => props.theme.viewPort.xxl}) {
        background: url(${JoshImage}) no-repeat center center;
        background-size: contain;
      }
    `}
  >
    <Type
      el="h1"
      css={`
        color: white;
        margin-bottom: 0px;
      `}
    >
      <span
        css={`
          background: ${(props) => props.theme.colors.primary};
          outline: 5px solid ${(props) => props.theme.colors.primary};
          line-height: ${(props) => props.theme.rhythm(6)};
        `}
      >
        Sensible.
        <br />
        Open.
        <br />
        Accountable.
      </span>
    </Type>
  </Banner>
);

const IndexPage = () => (
  <Layout banner={HomeBanner}>
    <SEO title="Home" />

    {/* <Section noPad>
      <DonateBox></DonateBox>
    </Section> */}

    <Section>
      <Row>
        <Column md={6}>
          <Type el="h1">Your voice. Our Edina.</Type>
          <Type>
            My name is Joshua Ahlberg and I want to be your voice in our city. I
            am not a politician. I am a 40-year old husband and father of two
            young kids who wants to make a positive impact on his community by
            focusing on what matters most: the desires of the residents. Integer
            nulla nunc, feugiat at ligula vitae, efficitur faucibus ipsum. Cras
            tempus placerat auctor.
          </Type>

          <Type
            css={`
              margin-bottom: ${(props) => props.theme.rhythm(8)};
            `}
          >
            <Link to="/about/">More about my story &gt;</Link>
          </Type>
        </Column>

        <Column md={6} align="center" justify="center">
          <div
            css={`
              background: ${(props) => props.theme.colors.ltGrey};
              height: 240px;
              width: 360px;
              display: flex;
              align-items: center;
              justify-content: center;
            `}
          >
            <Type el="h3">Video</Type>
          </div>
        </Column>
      </Row>
    </Section>

    <Section
      background="ltGrey"
      css={`
        margin-bottom: 0;
      `}
    >
      <Row>
        <Column
          md={4}
          xxl={3}
          css={`
            margin-bottom: ${(props) => props.theme.rhythm()};
          `}
        >
          <BigNumber>01</BigNumber>
          <Type
            el="h2"
            size="xl"
            css={`
              line-height: ${(props) => props.theme.rhythm(6)};
              margin-bottom: ${(props) => props.theme.rhythm()};
            `}
          >
            Sensible
          </Type>
          <Type>
            I plan to start asking ourselves how the initiatives were we have
            under review for our city enhance the quality of life for the
            residents of Edina. Quisque mattis semper ante, ut aliquam mi
            feugiat ac.
          </Type>
        </Column>
        <Column
          md={4}
          xxl={{ column: 3, offset: 1 }}
          css={`
            margin-bottom: ${(props) => props.theme.rhythm()};
          `}
        >
          <BigNumber>02</BigNumber>
          <Type
            el="h2"
            size="xl"
            css={`
              line-height: ${(props) => props.theme.rhythm(6)};
              margin-bottom: ${(props) => props.theme.rhythm()};
            `}
          >
            Open
          </Type>
          <Type>
            Municipal government is apolitical. I plan on approaching each and
            every interaction and proposal from a position of independence and
            neutrality. Pellentesque eu congue quam, nec scelerisque nunc.
          </Type>
        </Column>
        <Column
          md={4}
          xxl={{ column: 3, offset: 1 }}
          css={`
            margin-bottom: ${(props) => props.theme.rhythm()};
          `}
        >
          <BigNumber>03</BigNumber>
          <Type
            el="h2"
            size="xl"
            css={`
              line-height: ${(props) => props.theme.rhythm(6)};
              margin-bottom: ${(props) => props.theme.rhythm()};
            `}
          >
            Accountable
          </Type>
          <Type>
            There is a pattern of outcry surrounding development /
            overdevelopment, which tells me there are real communication,
            engagement, and planning breakdowns between the city and its
            residents. It's time to break that cycle.
          </Type>
        </Column>
      </Row>
      <Type>
        <Link to="/goals">More about my goals &gt;</Link>
      </Type>
    </Section>
  </Layout>
);

export default IndexPage;
