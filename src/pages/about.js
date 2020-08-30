import React from 'react';
import { Row, Column } from 'Components/Grid';
import Layout from 'Components/Layout';
import SEO from 'Components/SEO';
import Type from 'Components/Type';
import Banner from 'Components/Banner';
import Section from 'Components/Section';
import FamilyImage from 'Images/ahlberg-family.jpg';
import FamilyImageMobile from 'Images/ahlberg-family.jpg';

const AboutBanner = (
  <Banner
    css={`
      background: url(${FamilyImageMobile}) no-repeat center center;
      background-size: cover;
      @media screen and (min-width: ${(props) => props.theme.viewPort.md}) {
        background: url(${FamilyImage}) no-repeat center center;
        background-size: cover;
      }
      @media screen and (min-width: ${(props) => props.theme.viewPort.xxl}) {
        background: url(${FamilyImage}) no-repeat center center;
        background-size: contain;
      }
    `}
  ></Banner>
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
          <Type el="h2">Accomplishment 1</Type>
          <Type>
            Vestibulum id pretium erat. Morbi porta blandit mi, non pretium
            lacus consectetur eu. Nam et sapien dapibus, vulputate ante a,
            bibendum odio. Donec eget ultrices nisl. Vivamus turpis orci,
            fermentum sit amet volutpat at, dignissim id mi.
          </Type>
        </Column>
        <Column
          md={4}
          xxl={{ column: 3, offset: 1 }}
          css={`
            margin-bottom: ${(props) => props.theme.rhythm()};
          `}
        >
          <Type el="h2">Accomplishment 2</Type>
          <Type>
            Aliquam condimentum in orci et semper. Fusce feugiat molestie
            dignissim. Suspendisse potenti. Fusce vitae auctor erat. Sed vel
            urna risus. Fusce vitae metus enim. Mauris dapibus mi ut accumsan
            euismod.
          </Type>
        </Column>
        <Column md={4} xxl={{ column: 3, offset: 1 }}>
          <Type el="h2">Accomplishment 3</Type>
          <Type>
            Etiam ex sapien, ullamcorper sit amet lobortis in, consectetur vitae
            tortor. Suspendisse eget ullamcorper sem, in pulvinar nisi.
            Vestibulum suscipit, nulla non ultricies hendrerit, nibh nisi tempus
            lacus, in accumsan mauris turpis in tellus.
          </Type>
        </Column>
      </Row>
    </Section>
  </Layout>
);

export default About;
