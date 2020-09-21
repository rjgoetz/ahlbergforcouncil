import React from 'react';
import { Row, Column } from 'Components/Grid';
import Layout from 'Components/Layout';
import MediaBit from 'Components/MediaBit';
import Type from 'Components/Type';
import Section from 'Components/Section';

const Media = () => (
  <Layout title="Media">
    <Section>
      <Row>
        <Column md={9}>
          <Type el="h4">Media</Type>
          <Type el="h1">Ahlberg in the media</Type>

          <MediaBit
            date="9 / 2020"
            title="League of Women Voters Candidate Forum"
            caption="Suspendisse id sem ultricies, sodales massa ultrices, rutrum lorem. Pellentesque vel pharetra dolor. Donec tempor est sed lorem dignissim, id accumsan est posuere."
          >
            <embed
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen={true}
              src="//edina.granicus.com/player/clip/3239?view_id=7&redirect=true&stoptime=6144&autostart=0&embed=1"
            ></embed>
          </MediaBit>

          <Type
            css={`
              margin-bottom: ${(props) => props.theme.rhythm()};
            `}
          >
            Consistently, Edina surveys call for sensible, sustainable growth
            and development, traffic abatement, and housing that working
            families and seniors can afford &mdash; while maintaining low
            property taxes. And yet, we’re surrounded by developments being
            constructed at a breakneck pace. This development creates traffic
            and infrastructure needs &mdash; schools, fire stations, and
            deferred maintenance to existing assets we can’t afford to maintain
            &mdash; and needs to be carefully taken into consideration before
            action. Said differently, these developmental changes come at a cost
            to our city &mdash; and the residents &mdash; in taxes, quality of
            life, or both.
          </Type>

          <Type>
            It’s time to take a thoughtful pause on development in Edina and ask
            important long-term questions.
          </Type>

          <Type el="ul" bullets>
            <li>
              How are we maintaining public safety and supporting our valued
              police and first responder communities during this time of
              increasing density?
            </li>

            <li>
              What are the city’s unmet needs? How can we start discerning
              between wants and needs?
            </li>

            <li>
              How do changes in zoning impact neighborhoods and our community?
            </li>

            <li>
              How does the current focus on development impact the community’s
              goals of walkability, safety and livability both now and into the
              future?
            </li>
          </Type>

          <Type>
            I would be honored to serve as an Edina City Council member. I vow
            to create a resident-driven development process by:
          </Type>

          <Type el="ul" bullets>
            <li>Asking the above questions about development proposals</li>

            <li>Bringing an open and honest dialog to the planning process</li>

            <li>Allowing ample time for community engagement</li>
          </Type>
          <Type>&mdash; Josh</Type>
        </Column>
      </Row>
    </Section>
  </Layout>
);

export default Media;
