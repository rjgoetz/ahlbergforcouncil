import React, { useState } from 'react';
import styled from 'styled-components';
import Layout from 'Components/Layout';
import { Row, Column } from 'Components/Grid';
import Type from 'Components/Type';
import Section from 'Components/Section';
import ReceiptForm from 'Components/ReceiptForm';

const StyledDiv = styled.div`
  background: ${(props) => props.theme.colors.ltGrey};
  padding: ${(props) => props.theme.rhythm()} 20px;
`;

const DonateSuccess = ({ location }) => {
  let details = {};
  let occupation = '';

  if (location.state && location.state.details && location.state.occupation) {
    details = location.state.details;
    occupation = location.state.occupation;
  }

  return (
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
                <Type el="h1">Thank you for donating.</Type>
              </Column>
              <Column
                md={6}
                lg={{ column: 5, offset: 1 }}
                xl={{ column: 5, offset: 2 }}
              >
                <StyledDiv>
                  <ReceiptForm
                    details={details}
                    occupation={occupation}
                  ></ReceiptForm>
                </StyledDiv>
              </Column>
            </Row>
          </Column>
        </Row>
      </Section>
    </Layout>
  );
};

export default DonateSuccess;
