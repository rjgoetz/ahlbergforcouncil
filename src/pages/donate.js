import React, { useState } from 'react';
import styled from 'styled-components';
import Layout from 'Components/Layout';
import { Row, Column } from 'Components/Grid';
import Type from 'Components/Type';
import Section from 'Components/Section';
import DonationAmount from 'Components/DonationAmount';
import Receipt from 'Components/Receipt';

import { PayPalButton } from 'react-paypal-button-v2';
import Loader from 'Components/Loader';

const clientId = process.env.GATSBY_CLIENT_ID;

const StyledDiv = styled.div`
  background: ${(props) => props.theme.colors.ltGrey};
  padding: ${(props) => props.theme.rhythm()} 20px;
`;

const StyledHr = styled.hr`
  margin: ${(props) => props.theme.rhythm()} 0;
`;

const Donate = () => {
  const [loading, setLoading] = useState(true);
  const [amount, setAmount] = useState(0);
  const [success, setSuccess] = useState({ success: false, details: {} });

  const handleChange = (e) => {
    setAmount(e.target.value);
  };

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
                  {success.success ? (
                    <Receipt details={success.details}></Receipt>
                  ) : (
                    <>
                      <DonationAmount
                        handleChange={handleChange}
                      ></DonationAmount>
                      <StyledHr></StyledHr>

                      {loading && (
                        <div
                          css={`
                            display: flex;
                            justify-content: center;
                          `}
                        >
                          <Loader size="48"></Loader>
                        </div>
                      )}
                      <PayPalButton
                        amount={amount}
                        onButtonReady={() => {
                          return setLoading(false);
                        }}
                        onSuccess={(details) => {
                          setSuccess({
                            success: true,
                            details,
                          });
                        }}
                        options={{ clientId }}
                      ></PayPalButton>
                    </>
                  )}
                </StyledDiv>
              </Column>
            </Row>
          </Column>
        </Row>
      </Section>
    </Layout>
  );
};

export default Donate;
