import React from 'react';
import styled from 'styled-components';
import { Row, Column } from 'Components/Grid';
import Banner from 'Components/Banner';
import Layout from 'Components/Layout';
import Type from 'Components/Type';
import BigNumber from 'Components/BigNumber';
import Section from 'Components/Section';
import Link from 'Components/Link';
import SuggestionForm from 'Components/SuggestionForm';
import { StaticQuery, graphql } from 'gatsby';

const VideoBox = styled.div`
  height: 301px;
  width: 100%;
  @media screen and (min-width: ${(props) => props.theme.viewPort.sm}) {
    height: 338px;
  }
  @media screen and (min-width: ${(props) => props.theme.viewPort.md}) {
    height: 428px;
  }
  @media screen and (min-width: ${(props) => props.theme.viewPort.xl}) {
    margin: 0 auto;
    width: 720px;
    height: 405px;
  }
`;

const HomeBanner = (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "ahlberg-family.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 70) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        tablet: file(relativePath: { eq: "ahlberg-family-tablet.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 768, quality: 70) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        mobile: file(relativePath: { eq: "ahlberg-family-mobile.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 576, quality: 70) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={(data) => {
      return <Banner data={data}></Banner>;
    }}
  ></StaticQuery>
);

const IndexPage = () => (
  <Layout banner={HomeBanner}>
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
                I am not an aspiring politician. I am a 40-year-old husband and
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

    <Section>
      <Row>
        <Column
          sm={{ column: 10, offset: 1 }}
          md={{ column: 8, offset: 2 }}
          xl={{ column: 10, offset: 1 }}
        >
          <a name="video">
            <Type
              el="h2"
              align="center"
              size="xl"
              css={`
                margin-bottom: ${(props) => props.theme.rhythm(8)};
                line-height: ${(props) => props.theme.rhythm(8)};
              `}
            >
              Watch Me at the League of Women Voters Candidate Forum
            </Type>
          </a>

          <VideoBox>
            <embed
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen={true}
              src="//edina.granicus.com/player/clip/3239?view_id=7&redirect=true&stoptime=6144&autostart=0&embed=1"
            ></embed>
          </VideoBox>
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
                I will ask how city decisions enhance the quality of life for
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
                I will approach council work and resident communications with
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
                I will ensure decision-making includes resident engagement and
                alignment with community needs.
              </Type>
            </Column>
          </Row>
          <Type>
            <Link to="/my-approach">My Approach &gt;</Link>
          </Type>
        </Column>
      </Row>
    </Section>
  </Layout>
);

export default IndexPage;
