import React from 'react';
import { Row, Column } from 'Components/Grid';
import Layout from 'Components/Layout';
import Type from 'Components/Type';
import Banner from 'Components/Banner';
import Section from 'Components/Section';
import { StaticQuery, graphql } from 'gatsby';

const AboutBanner = (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "josh-hero.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 70) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        tablet: file(relativePath: { eq: "josh-hero-tablet.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 768, quality: 70) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        mobile: file(relativePath: { eq: "josh-hero-mobile.jpg" }) {
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

const About = () => (
  <Layout title="My Story" banner={AboutBanner}>
    <Section>
      <Row>
        <Column md={9}>
          <Type el="h4">My Story</Type>
          <Type el="h1">Proud to call Edina my home</Type>
          <Type>
            I am a homegrown Minnesotan. I grew up in Wayzata as one of five
            children who attended Orono Public Schools. My parents are a source
            of inspiration for me. They encouraged their children to have a
            sense of humility, integrity, stick-to-it-ness, and humanity. They
            taught me to be a better person by actively listening, challenging
            conventional thought, and encouraging me to go above and beyond
            expectations.
          </Type>

          <Type>
            I graduated from Orono high school in 1998, and went on to study
            marketing at the University of Minnesota. Upon graduating, I began a
            career in marketing and advertising. This career path provided me
            the opportunity to work with some incredibly talented people and
            created moves to Connecticut, New York, and eventually back to
            Minnesota, where I met my wife.
          </Type>

          <Type>
            Kelli and I moved to Edina in 2011, attracted by the schools, parks,
            and neighborhoods. I have become an active player in our community
            through my work on sidewalk expansion and safety, and the community
            engagement related to development of Braemar. Working on these
            issues made me recognize opportunities to improve city processes.
          </Type>

          <Type>
            I love Edina, and I want to ensure that the city makes wise
            strategic decisions that will result in a livable, walkable
            community for my family and our residents &mdash; for years to come.
            Edina currently faces a set of challenges that require thoughtful
            analysis and action. As an Edina City Council member, I will ensure
            the city is a welcoming community that authentically involves its
            residents in decision-making processes.
          </Type>

          <Type>&mdash; Josh</Type>
        </Column>
      </Row>
    </Section>
  </Layout>
);

export default About;
