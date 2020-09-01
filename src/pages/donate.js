import React from 'react';
import Layout from 'Components/Layout';
import { Row, Column } from 'Components/Grid';
import Type from 'Components/Type';
import Section from 'Components/Section';
import DonateForm from 'Components/DonateForm';

const Donate = () => (
  <Layout title="Donate">
    <Section>
      <Row>
        <Column sm={{ column: 10, offset: 1 }} md={{ column: 12, offset: 0 }}>
          <Row>
            <Column
              md={6}
              lg={5}
              css={`
                margin-bottom: ${(props) => props.theme.rhythm()};
              `}
            >
              <Type el="h4">Donate</Type>
              <Type el="h1">Coming Soon!</Type>
              <Type
                css={`
                  margin-bottom: ${(props) => props.theme.rhythm(8)};
                `}
              >
                Enter your information here and get notified once we can accept
                online donations. Thank you!
              </Type>
            </Column>
            <Column
              md={6}
              lg={{ column: 5, offset: 1 }}
              xl={{ column: 5, offset: 2 }}
            >
              <DonateForm></DonateForm>
            </Column>
          </Row>
        </Column>
      </Row>
    </Section>
  </Layout>
);

export default Donate;
