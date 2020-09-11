import React, { useState } from 'react';
import styled from 'styled-components';
import Layout from 'Components/Layout';
import { Row, Column } from 'Components/Grid';
import Type from 'Components/Type';
import Section from 'Components/Section';
import { DollarSign } from '@styled-icons/feather';
import { Control, Input, Label } from 'Components/Form';
import { PayPalButton } from 'react-paypal-button-v2';

const clientId = `AVz2qRwC7fR8Qqkv3uhKhMwbKyQKdHk4h8kGQydue-keCdNueNNhGdGF8UbDGm8Kbs62wGBzNmUvHQHV`;

const StyledDiv = styled.div`
  background: ${(props) => props.theme.colors.ltGrey};
  padding: ${(props) => props.theme.rhythm()} 20px;
`;

const StyledHr = styled.hr`
  margin: ${(props) => props.theme.rhythm()} 0;
`;

const Donate = () => {
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
                  {success.success && (
                    <Type
                      el="h2"
                      css={`
                        margin-bottom: ${(props) => props.theme.rhythm()};
                      `}
                    >
                      Thank you for your support!
                    </Type>
                  )}

                  <Type
                    el="h3"
                    css={`
                      margin-bottom: ${(props) => props.theme.rhythm()};
                    `}
                  >
                    {success.success ? 'Your Receipt' : 'Your Donation'}
                  </Type>

                  {success.success && (
                    <Type>Please print for your records.</Type>
                  )}

                  {success.success ? (
                    <>
                      <Type
                        css={`
                          margin-bottom: ${(props) => props.theme.rhythm(1)};
                        `}
                      >
                        <span
                          css={`
                            font-weight: ${(props) =>
                              props.theme.fontWeight.bold};
                          `}
                        >
                          Date:
                        </span>{' '}
                        {new Date(
                          success.details.update_time
                        ).toLocaleDateString()}
                      </Type>
                      <Type
                        css={`
                          margin-bottom: ${(props) => props.theme.rhythm(1)};
                        `}
                      >
                        <span
                          css={`
                            font-weight: ${(props) =>
                              props.theme.fontWeight.bold};
                          `}
                        >
                          Name:
                        </span>{' '}
                        {success.details.payer.name.given_name}{' '}
                        {success.details.payer.name.surname}
                      </Type>
                      <Type
                        css={`
                          margin-bottom: ${(props) => props.theme.rhythm(1)};
                        `}
                      >
                        <span
                          css={`
                            font-weight: ${(props) =>
                              props.theme.fontWeight.bold};
                          `}
                        >
                          Email:
                        </span>{' '}
                        {success.details.payer.email_address}
                      </Type>
                      <Type
                        css={`
                          margin-bottom: ${(props) => props.theme.rhythm(1)};
                        `}
                      >
                        <span
                          css={`
                            font-weight: ${(props) =>
                              props.theme.fontWeight.bold};
                          `}
                        >
                          Amount:
                        </span>{' '}
                        ${success.details.purchase_units[0].amount.value}
                      </Type>
                      <Type
                        css={`
                          margin-bottom: ${(props) => props.theme.rhythm(1)};
                        `}
                      >
                        <span
                          css={`
                            font-weight: ${(props) =>
                              props.theme.fontWeight.bold};
                          `}
                        >
                          Transaction ID:
                        </span>{' '}
                        {success.details.id}
                      </Type>
                    </>
                  ) : (
                    <>
                      <Control>
                        <Label
                          htmlFor="amount"
                          aria-label="Amount"
                          css={`
                            display: none;
                          `}
                        >
                          Amount
                        </Label>

                        <div
                          css={`
                            display: flex;
                          `}
                        >
                          <span
                            css={`
                              background: ${(props) =>
                                props.theme.colors.primary};
                              display: flex;
                              align-items: center;
                              padding: 0 3px;
                            `}
                          >
                            <DollarSign
                              size="24"
                              color="white"
                              strokeWidth="2"
                            ></DollarSign>
                          </span>
                          <Input
                            type="number"
                            id="amount"
                            name="amount"
                            placeholder="Amount"
                            css={`
                              height: ${(props) => props.theme.rhythm(6)};
                            `}
                            onChange={handleChange}
                          />
                        </div>
                      </Control>

                      <StyledHr></StyledHr>

                      <PayPalButton
                        amount={amount}
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
