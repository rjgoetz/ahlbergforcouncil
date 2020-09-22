import React from 'react';
import { Row, Column } from 'Components/Grid';
import Layout from 'Components/Layout';
import Card from 'Components/Card';
import Type from 'Components/Type';
import Section from 'Components/Section';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Button from 'Components/Button';
import Link from 'Components/Link';
import { Play } from '@styled-icons/feather';
import Modal from 'Components/Modal';

const Media = ({ data }) => (
  <Layout title="Media">
    <Section>
      <Row>
        <Column>
          <Type el="h4">Media</Type>
          <Type el="h1">Joshua Ahlberg in the media</Type>
        </Column>
      </Row>

      <Row>
        <Column md={6} xl={4}>
          <Card
            title="League of Women Voters Candidate Forum"
            date="9 / 2020"
            media={
              <Img
                fluid={data.leagueOfWomen.childImageSharp.fluid}
                alt="Josh Ahlberg at League of Women Voters Candidate Forum"
              ></Img>
            }
          >
            <Type>
              Suspendisse id sem ultricies, sodales massa ultrices, rutrum
              lorem. Pellentesque vel pharetra dolor. Donec tempor est sed lorem
              dignissim, id accumsan est posuere.
            </Type>

            <Modal title={'League of Women Voters Candidate Forum'}>
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen
                src="//edina.granicus.com/player/clip/3239?view_id=7&redirect=true&stoptime=6144&autostart=0&embed=1"
              ></iframe>
            </Modal>
          </Card>
        </Column>

        <Column md={6} xl={4}>
          <Card
            title="Candidate Interview with Edina Indivisible"
            date="9 / 2020"
            media={
              <Img
                fluid={data.edinaIndivisible.childImageSharp.fluid}
                alt="Josh Ahlberg Interviews with Edina Indivisible"
              ></Img>
            }
          >
            <Type>
              Suspendisse id sem ultricies, sodales massa ultrices, rutrum
              lorem. Pellentesque vel pharetra dolor. Donec tempor est sed lorem
              dignissim, id accumsan est posuere.
            </Type>

            <Modal title="Joshua Ahlberg Interview with Edina Indivisible">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/_EIwV6DTn9Q"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </Modal>
          </Card>
        </Column>

        <Column md={6} xl={4}>
          <Card
            title="Keep Edina's Braemar Green and Safe"
            date="10 / 2016"
            media={
              <Img
                fluid={data.braemarPark.childImageSharp.fluid}
                alt="Josh Ahlberg Braemar Nordic Ski Petition"
              ></Img>
            }
          >
            <Type>
              Suspendisse id sem ultricies, sodales massa ultrices, rutrum
              lorem. Pellentesque vel pharetra dolor. Donec tempor est sed lorem
              dignissim, id accumsan est posuere.
            </Type>

            <Type>
              <Link
                to="https://www.change.org/p/the-edina-city-council-keep-edina-s-braemar-green-and-safe"
                external
              >
                Read more &gt;
              </Link>
            </Type>
          </Card>
        </Column>

        <Column md={6} xl={4}>
          <Card
            title="Edina Neighbors Get a Sidewalk on Busy Valley View Rd"
            date="7 / 2016"
            media={
              <Img
                fluid={data.sidewalkProject.childImageSharp.fluid}
                alt="Josh Ahlberg Edina Sidewalk"
              ></Img>
            }
          >
            <Type>
              Suspendisse id sem ultricies, sodales massa ultrices, rutrum
              lorem. Pellentesque vel pharetra dolor. Donec tempor est sed lorem
              dignissim, id accumsan est posuere.
            </Type>

            <Type>
              <Link
                to="https://www.startribune.com/edina-neighbors-get-a-sidewalk-on-busy-valley-view-road/386888981/"
                external
              >
                Read more &gt;
              </Link>
            </Type>
          </Card>
        </Column>
      </Row>
    </Section>
  </Layout>
);

export const query = graphql`
  query {
    leagueOfWomen: file(relativePath: { eq: "league-of-women-voters.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 576, quality: 70) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    sidewalkProject: file(relativePath: { eq: "josh-sidewalk-project.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 576, quality: 70) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    braemarPark: file(relativePath: { eq: "change-nordic-ski-petition.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 576, quality: 70) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    edinaIndivisible: file(relativePath: { eq: "edina-indivisible.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 576, quality: 70) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default Media;
