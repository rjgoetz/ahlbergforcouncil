import React from 'react';
import { Row, Column } from 'Components/Grid';
import Layout from 'Components/Layout';
import Section from 'Components/Section';
import Type from 'Components/Type';
import EndorseForm from 'Components/EndorseForm';

const Endorse = () => {
  return (
    <Layout title="Endorse">
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
                <Type el="h4">Endorse</Type>
                <Type el="h1">Thank you for your endorsement</Type>
              </Column>

              <Column
                md={6}
                lg={{ column: 5, offset: 1 }}
                xl={{ column: 5, offset: 2 }}
              >
                <EndorseForm></EndorseForm>
              </Column>
            </Row>
          </Column>
        </Row>
      </Section>
    </Layout>
  );
};

export default Endorse;
