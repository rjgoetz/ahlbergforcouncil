import React from 'react';
import { Row, Column } from 'Components/Grid';
import Layout from 'Components/Layout';
import Section from 'Components/Section';
import Type from 'Components/Type';
import ContactForm from 'Components/ContactForm';

const Contact = () => {
  return (
    <Layout title="Contact">
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
                <Type el="h4">Contact</Type>
                <Type el="h1">Get in touch.</Type>
                <Type>
                  Thank you for your interest in our campaign. Please complete
                  the form to send me a message. Thank you!
                </Type>
              </Column>

              <Column
                md={6}
                lg={{ column: 5, offset: 1 }}
                xl={{ column: 5, offset: 2 }}
              >
                <ContactForm></ContactForm>
              </Column>
            </Row>
          </Column>
        </Row>
      </Section>
    </Layout>
  );
};

export default Contact;
