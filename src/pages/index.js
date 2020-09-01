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

const HomeBanner = (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "josh-hero.jpg" }) {
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
                Your Voice.
                <br />
                Our Edina.
              </Type>
              <Type>
                My name is Josh Ahlberg and I want to be your voice in our city.
                I am not running for Edina City Council because I have political
                motivations or aspirations. I am a 40-year old husband and
                father of two young children who wants to make a positive impact
                on our community by focusing on what matters most: the desires
                of the residents.
              </Type>

              <Type
                css={`
                  margin-bottom: ${(props) => props.theme.rhythm(8)};
                `}
              >
                <Link to="/about/">My Story &gt;</Link>
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
                I will ask how City decisions enhance the quality of life for
                Edina residents.
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
                I will approach Council work and resident communications with
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
                I will ensure decision making includes resident engagement and
                alignment with community needs.
              </Type>
            </Column>
          </Row>
          <Type>
            <Link to="/positions">My Positions &gt;</Link>
          </Type>
        </Column>
      </Row>
    </Section>
  </Layout>
);

export default IndexPage;
