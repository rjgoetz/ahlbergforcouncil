import React from 'react';
import { Row, Column } from 'Components/Grid';
import Layout from 'Components/Layout';
import SEO from 'Components/SEO';
import Type from 'Components/Type';
import Section from 'Components/Section';
import BigNumber from 'Components/BigNumber';

const Goals = () => (
  <Layout>
    <SEO title="My Goals" />

    <Section>
      <Row>
        <Column md={9}>
          <Type el="h4">My Goals</Type>
          <Type el="h1">
            Sensible.
            <br />
            Open.
            <br />
            Accountable.
          </Type>

          <Type>
            Having lived in Edina for the better part of a decade, I have
            personally witnessed the impact of closed-door city government
            decisions have made on our neighborhoods. Whether we’re talking
            about special-interest redevelopment at one of our treasured parks,
            packing in new and tall housing in our fully developed city, a lid
            that was studied to augment the city complexion beyond repair, or
            completely redeveloping neighborhoods by way of bulldozing and
            reconstructing, it’s the same pattern of developing without a clear
            and transparent vision.
          </Type>

          <Type>
            Consistently, Edina surveys call for sensible, sustainable growth
            and development, traffic abatement, and availability of affordable
            housing - while maintaining low property taxes. And yet, we’re
            surrounded by developments being constructed at a breakneck pace.
            This development creates traffic and infrastructure needs &mdash;
            schools, fire stations, and deferred maintenance to assets we own
            and can’t afford to maintain. This development comes at a cost to
            our city, and the residents &mdash; by way of money, quality of
            life, or both.
          </Type>

          <Type>
            It's time to take a thoughtful pause on development in Edina and ask
            important long-term questions. How are new developments meeting the
            needs of Edina residents, current and prospective? What are unmet
            needs and how does the City set policy to meet those needs? How do
            changes in zoning impact neighborhoods and our community? How does
            the current development push impact residents' stated goals of
            walkability and livability both now and into the future?
          </Type>

          <Type>
            If I am elected and honored to serve your Edina City Council member
            I vow to ask these questions and bring a more open and honest dialog
            &mdash; allowing ample time for community engagement to allow us to
            hit the mark with resident-driven changes made to our city.
          </Type>
        </Column>
      </Row>
    </Section>
  </Layout>
);

export default Goals;
