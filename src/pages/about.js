import React from 'react';
import { Row, Column } from 'Components/Grid';
import Layout from 'Components/Layout';
import SEO from 'Components/SEO';
import Type from 'Components/Type';
import Banner from 'Components/Banner';
import Section from 'Components/Section';
import { StaticQuery, graphql } from 'gatsby';

const AboutBanner = (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "ahlberg-family.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
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
  <Layout banner={AboutBanner}>
    <SEO title="My Story" />

    <Section>
      <Row>
        <Column md={9}>
          <Type el="h4">My Story</Type>
          <Type el="h1">Proud to call Edina my home</Type>
          <Type>
            I'm proud to be a homegrown Minnesotan. I grew up just west of here
            in Wayzata as one of 5 children who attended Orono Public Schools.
            Throughout my early years I was inspired by my parents who instilled
            in me a sense of humility, integrity, sticktoitness, and humanity.
            To this day they inspire me to be a better person, always actively
            listening, challenging conventional thought, and encouraging me to
            do more.
          </Type>

          <Type>
            After graduating from Orono High School in 1998, I attended the
            University of Minnesota and graduated, landing a job as a
            professional marketer. That career choice has led me to work with
            some incredibly talented people &mdash; and created opportunity for
            me to move to Connecticut, New York, and eventually back to
            Minnesota where I met my wife.
          </Type>

          <Type>
            Kelli and I moved to Edina in 2011, and could not be happier. Over
            those past 9 years, we've moved once, had two children, adopted 3
            dogs, and pulled a ton of buckthorn along the way.
          </Type>

          <Type>
            I love this city, and I want to ensure we make the right strategic
            decisions to preserve it for those who made the same choice as we
            did and bought a home here, but also consider the long-term needs of
            the community to ensure its livability and ongoing marketability as
            a premier place to live in the metro area.
          </Type>

          <Type>&mdash; Josh</Type>
        </Column>
      </Row>
    </Section>
  </Layout>
);

export default About;
