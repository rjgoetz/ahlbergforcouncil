import React from 'react';
import styled from 'styled-components';
import { Row, Column } from 'Components/Grid';
import Layout from 'Components/Layout';
import Section from 'Components/Section';
import SEO from 'Components/SEO';
import Type from 'Components/Type';
import Button from 'Components/Button';

const StyledControl = styled.div`
  margin-bottom: ${(props) => props.theme.rhythm(2)};
`;

const StyledLabel = styled.label`
  font-size: ${(props) => props.theme.fontSize.sm};
  margin-right: 20px;
`;

const StyledInput = styled.input`
  border: 2px solid ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.fontSize.sm};
  height: ${(props) => props.theme.rhythm(5)};
  padding: 5px;
  width: 100%;
  &:focus {
    border-radius: 0px;
    outline-color: ${(props) => props.theme.colors.secondary};
  }
`;

const Volunteer = () => {
  return (
    <Layout>
      <SEO title="Volunteer"></SEO>

      <Section>
        <Row>
          <Column
            sm={8}
            md={6}
            xl={4}
            css={`
              margin-bottom: ${(props) => props.theme.rhythm()};
            `}
          >
            <Type el="h4">Volunteer</Type>
            <Type el="h1">Join the Ahlberg for Council Campaign</Type>
            <Type>
              I would be honored to have you join the Ahlberg for Edina City
              Council campaign. Please complete the volunteer interest form and
              I will be in touch.
            </Type>
          </Column>

          <Column sm={8} md={6} lg={{ column: 4, offset: 2 }}>
            <form
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              name="volunteer"
            >
              <StyledControl>
                <StyledLabel htmlFor="firstName">First Name </StyledLabel>

                <StyledInput type="text" id="firstName" name="firstName" />
              </StyledControl>

              <StyledControl>
                <StyledLabel htmlFor="lastName">Last Name </StyledLabel>

                <StyledInput type="text" id="lastName" name="lastName" />
              </StyledControl>

              <StyledControl>
                <StyledLabel htmlFor="telephone">Telephone Number</StyledLabel>

                <StyledInput type="telephone" id="telephone" name="telephone" />
              </StyledControl>

              <StyledControl
                css={`
                  margin-bottom: ${(props) => props.theme.rhythm()};
                `}
              >
                <StyledLabel htmlFor="email">Email Address </StyledLabel>

                <StyledInput type="email" id="email" name="email" />
              </StyledControl>

              <StyledControl>
                <Button block>Submit</Button>
              </StyledControl>
            </form>
          </Column>
        </Row>
      </Section>
    </Layout>
  );
};

export default Volunteer;
