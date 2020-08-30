import React, { useState } from 'react';
import { Row, Column } from 'Components/Grid';
import Layout from 'Components/Layout';
import { Form, Control, Label, Input, encode } from 'Components/Form';
import Section from 'Components/Section';
import SEO from 'Components/SEO';
import Type from 'Components/Type';
import Button from 'Components/Button';
import ErrorBox from 'Components/ErrorBox';

const Volunteer = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [telephone, setTelephone] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    switch (name) {
      case 'firstName':
        setFirstName(value);
        break;
      case 'lastName':
        setLastName(value);
        break;
      case 'telephone':
        setTelephone(value);
        break;
      case 'email':
        setEmail(value);
        break;
      default:
        console.log(e);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!firstName || !lastName || !telephone || !email) {
      setError(true);
      window.scroll(0, 0);
    } else {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'volunteer',
          firstName,
          lastName,
          telephone,
          email,
        }),
      })
        .then(() => {
          console.log('fire redirect');
        })
        .catch((error) => console.log(error));
    }
  }

  return (
    <Layout>
      <SEO title="Volunteer"></SEO>

      <Section>
        <Row>
          <Column
            sm={{ column: 10, offset: 1 }}
            md={{ column: 12, offset: 0 }}
            lg={{ column: 10, offset: 1 }}
            xl={{ column: 11, offset: 0 }}
          >
            <Row>
              <Column
                md={6}
                xl={5}
                css={`
                  margin-bottom: ${(props) => props.theme.rhythm()};
                `}
              >
                <Type el="h4">Volunteer</Type>
                <Type el="h1">Join the Ahlberg for Council Campaign</Type>
                <Type>
                  I would be honored to have you join the Ahlberg for Edina City
                  Council campaign. Please complete the volunteer interest form
                  and I will be in touch.
                </Type>
              </Column>

              <Column md={6} xl={{ column: 5, offset: 1 }}>
                <Form name="volunteer" onSubmit={handleSubmit}>
                  {error && <ErrorBox>Please complete all fields.</ErrorBox>}

                  <Type el="h3">Volunteer Interest</Type>
                  <Control>
                    <Label htmlFor="firstName">First Name </Label>

                    <Input
                      type="text"
                      id="firstName"
                      name="firstName"
                      onChange={handleChange}
                    />
                  </Control>

                  <Control>
                    <Label htmlFor="lastName">Last Name </Label>

                    <Input
                      type="text"
                      id="lastName"
                      name="lastName"
                      onChange={handleChange}
                    />
                  </Control>

                  <Control>
                    <Label htmlFor="telephone">Telephone Number</Label>

                    <Input
                      type="telephone"
                      id="telephone"
                      name="telephone"
                      onChange={handleChange}
                    />
                  </Control>

                  <Control
                    css={`
                      margin-bottom: ${(props) => props.theme.rhythm()};
                    `}
                  >
                    <Label htmlFor="email">Email Address </Label>

                    <Input
                      type="email"
                      id="email"
                      name="email"
                      onChange={handleChange}
                    />
                  </Control>

                  <Button block>Submit</Button>
                </Form>
              </Column>
            </Row>
          </Column>
        </Row>
      </Section>
    </Layout>
  );
};

export default Volunteer;
