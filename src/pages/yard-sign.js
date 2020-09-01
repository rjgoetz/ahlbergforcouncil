import React from 'react';
import { Row, Column } from 'Components/Grid';
import Layout from 'Components/Layout';
import Section from 'Components/Section';
import Type from 'Components/Type';
import YardSignForm from 'Components/YardSignForm';

const YardSign = () => {
  return (
    <Layout title="Get a Yard Sign">
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
                <Type el="h4">Get a Yard Sign</Type>
                <Type el="h1">Support our campaign.</Type>
                <Type>
                  Show your support by getting a yard sign. Simply fill out the
                  form and a campaign representative will follow up with you
                  soon.
                </Type>
              </Column>

              <Column
                md={6}
                lg={{ column: 5, offset: 1 }}
                xl={{ column: 5, offset: 2 }}
              >
                <YardSignForm></YardSignForm>
              </Column>
            </Row>
          </Column>
        </Row>
      </Section>
    </Layout>
  );
};

export default YardSign;
