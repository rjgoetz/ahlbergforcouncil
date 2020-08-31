import React from 'react';
import { Row, Column } from 'Components/Grid';
import Banner from 'Components/Banner';
import Layout from 'Components/Layout';
import SEO from 'Components/SEO';
import Type from 'Components/Type';
import BigNumber from 'Components/BigNumber';
import Section from 'Components/Section';
import Link from 'Components/Link';
import SuggestionForm from 'Components/SuggestionForm';
import { StaticQuery, graphql } from 'gatsby';

import JoshImage2x from 'Images/josh-hero@2x.jpg';
import JoshImageMobile2x from 'Images/josh-hero-mobile@2x.jpg';
import JoshImageTablet2x from 'Images/josh-hero-tablet@2x.jpg';

// css={`
//       background: url(${JoshImageMobile2x}) no-repeat center right;
//       background-size: cover;
//       @media screen and (min-width: ${(props) => props.theme.viewPort.sm}) {
//         background: url(${JoshImageTablet2x}) no-repeat center center;
//         background-size: cover;
//       }
//       @media screen and (min-width: ${(props) => props.theme.viewPort.md}) {
//         background: url(${JoshImage2x}) no-repeat center center;
//         background-size: cover;
//       }
//       @media screen and (min-width: ${(props) => props.theme.viewPort.xxl}) {
//         background: url(${JoshImage2x}) no-repeat center center;
//         background-size: contain;
//       }
//     `}

const HomeBanner = (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "josh-hero@2x.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={(data) => {
      return (
        <Banner data={data}>
          <Type
            el="h1"
            css={`
              color: white;
              margin-bottom: 0px;
              text-shadow: 2px 2px 4px ${(props) => props.theme.colors.black};
            `}
          >
            Sensible.
            <br />
            Open.
            <br />
            Accountable.
          </Type>
        </Banner>
      );
    }}
  ></StaticQuery>
);

const IndexPage = () => (
  <Layout banner={HomeBanner}>
    <SEO title="Home" />

    <Section>
      <Row>
        <Column sm={{ column: 10, offset: 1 }} md={{ column: 12, offset: 0 }}>
          <Row>
            <Column md={6} xl={5}>
              <Type el="h1">
                Your voice.
                <br />
                Our Edina.
              </Type>
              <Type>
                My name is Joshua Ahlberg and I want to be your voice in our
                city. I am not a politician. I am a 40-year old husband and
                father of two young kids who wants to make a positive impact on
                his community by focusing on what matters most: the desires of
                the residents.
              </Type>

              <Type
                css={`
                  margin-bottom: ${(props) => props.theme.rhythm(8)};
                `}
              >
                <Link to="/about/">More about my story &gt;</Link>
              </Type>
            </Column>

            <Column
              md={6}
              lg={{ column: 5, offset: 1 }}
              xl={{ column: 5, offset: 2 }}
            >
              <SuggestionForm></SuggestionForm>
            </Column>
          </Row>
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
        <Column sm={{ column: 10, offset: 1 }} md={{ column: 12, offset: 0 }}>
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
                I plan to start asking ourselves how the initiatives were we
                have under review for our city enhance the quality of life for
                the residents of Edina.
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
                Municipal government is apolitical. I plan on approaching each
                and every interaction and proposal from a position of
                independence and neutrality.
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
                There is a pattern of outcry coming from all areas of the
                community surrounding development / overdevelopment, which tells
                me there are real communication, engagement, and planning
                breakdowns between the city and its residents. It's time to
                break that cycle.
              </Type>
            </Column>
          </Row>
          <Type>
            <Link to="/goals">More about my goals &gt;</Link>
          </Type>
        </Column>
      </Row>
    </Section>
  </Layout>
);

export default IndexPage;
