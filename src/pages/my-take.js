import React from 'react';
import { Row, Column } from 'Components/Grid';
import Layout from 'Components/Layout';
import Type from 'Components/Type';
import Section from 'Components/Section';

const MyTake = () => (
  <Layout title="My Take">
    <Section>
      <Row>
        <Column md={9}>
          <Type el="h4">My Take</Type>
          <Type el="h1">
            Sensible.
            <br />
            Open.
            <br />
            Accountable.
          </Type>

          <Type>
            Having lived in Edina for almost a decade, I have personally
            witnessed the impact closed-door city government decisions have made
            on our neighborhoods. Whether we’re talking about special-interest
            development at one of our treasured parks, packing in new and tall
            housing in our fully developed city, a lid that was studied to
            augment the city complexion beyond repair, or completely
            redeveloping neighborhoods by way of bulldozing and reconstructing,
            it’s the same pattern of developing without a clear understanding of
            the long-term consequences.
          </Type>

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
              How are new developments improving current and future resident
              quality of life?
            </li>

            <li>
              What are the City’s unmet needs? How can we start discerning
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

export default MyTake;
