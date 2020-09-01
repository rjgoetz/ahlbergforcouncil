import React from 'react';
import Layout from 'Components/Layout';
import { Row, Column } from 'Components/Grid';
import SEO from 'Components/SEO';
import Type from 'Components/Type';
import Section from 'Components/Section';

const Donate = () => (
  <Layout>
    <Section>
      <Row>
        <Column md={6}>
          <SEO title="Donate" />
          <Type el="h4">Donate</Type>
          <Type el="h1">Coming Soon</Type>
          <Type
            css={`
              margin-bottom: ${(props) => props.theme.rhythm(8)};
            `}
          >
            Thank you for your interest in donating to our campaign. Rest
            assured that we are working to make donations simple on this site.
            Come back soon!
          </Type>
        </Column>
      </Row>
    </Section>
  </Layout>
);

export default Donate;
