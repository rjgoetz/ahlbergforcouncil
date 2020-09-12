import React, { useState } from 'react';
import styled from 'styled-components';
import Layout from 'Components/Layout';
import { Row, Column } from 'Components/Grid';
import Type from 'Components/Type';
import Section from 'Components/Section';
import DonationAmount from 'Components/DonationAmount';
import { navigate } from 'gatsby';

import { PayPalButton } from 'react-paypal-button-v2';
import Loader from 'Components/Loader';

const clientId =
  process.env.NODE_ENV === 'development'
    ? process.env.GATSBY_CLIENT_ID_DEV
    : process.env.GATSBY_CLIENT_ID;

const StyledDiv = styled.div`
  background: ${(props) => props.theme.colors.ltGrey};
  padding: ${(props) => props.theme.rhythm()} 20px;
`;

const StyledHr = styled.hr`
  margin: ${(props) => props.theme.rhythm()} 0;
`;

const Donate = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [amount, setAmount] = useState(0);
  const [occupation, setOccupation] = useState('');
  const [paymentReady, setPaymentReady] = useState(false);
  const [success, setSuccess] = useState({ success: false, details: {} });

  const paymentButtonClick = () => {
    if (!occupation || !amount) {
      setError('Please complete all fields.');
    } else if (amount < 5 || amount > 1200) {
      setError('Amount must be greater than $5 and no more than $1200.');
    } else {
      setError('');
      setPaymentReady(true);
    }
  };

  const handleChange = (e) => {
    switch (e.target.name) {
      case 'amount':
        setAmount(parseInt(e.target.value));
        break;
      case 'occupation':
        setOccupation(e.target.value);
        break;
    }
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
                    navigate('/donate/success', {
                      state: { details: success.details, occupation },
                    })
                  ) : (
                    <>
                      {!paymentReady && (
                        <DonationAmount
                          handleChange={handleChange}
                          paymentButtonClick={paymentButtonClick}
                          error={error}
                        ></DonationAmount>
                      )}

                      {paymentReady && (
                        <>
                          <Type el="h2">Your Payment</Type>
                          <StyledHr></StyledHr>

                          {loading && (
                            <div
                              css={`
                                display: flex;
                                margin-bottom: ${(props) =>
                                  props.theme.rhythm()};
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
                            target="_blank"
                          ></PayPalButton>
                        </>
                      )}
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
