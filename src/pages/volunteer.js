import React from 'react';
import { Row, Column } from 'Components/Grid';
import Layout from 'Components/Layout';
import Section from 'Components/Section';
import SEO from 'Components/SEO';
import Type from 'Components/Type';
import VolunteerForm from 'Components/VolunteerForm';

const Volunteer = () => {
  return (
    <Layout>
      <SEO title="Volunteer"></SEO>

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
                <Type el="h4">Volunteer</Type>
                <Type el="h1">Join the campaign.</Type>
                <Type>
                  I would be honored to have you join the Ahlberg for Edina City
                  Council campaign. Please complete the volunteer interest form
                  and I will be in touch.
                </Type>
              </Column>

              <Column
                md={6}
                lg={{ column: 5, offset: 1 }}
                xl={{ column: 5, offset: 2 }}
              >
                <VolunteerForm></VolunteerForm>
              </Column>
            </Row>
          </Column>
        </Row>
      </Section>
    </Layout>
  );
};

export default Volunteer;
