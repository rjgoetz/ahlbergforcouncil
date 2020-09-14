import React, { useState } from 'react';
import styled from 'styled-components';
import Type from 'Components/Type';
import DonatePage from 'Components/DonatePage';
import DonationAmount from 'Components/DonationAmount';
import { navigate } from 'gatsby';

import { PayPalButton } from 'react-paypal-button-v2';
import Loader from 'Components/Loader';

const clientId =
  process.env.NODE_ENV === 'development'
    ? process.env.GATSBY_CLIENT_ID_DEV
    : process.env.GATSBY_CLIENT_ID;

const StyledHr = styled.hr`
  margin: ${(props) => props.theme.rhythm()} 0;
`;

const Donate = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [amount, setAmount] = useState(0);
  const [occupation, setOccupation] = useState('');
  const [isSingle, setIsSingle] = useState(true);
  const [spouseName, setSpouseName] = useState('');
  const [spouseOccupation, setSpouseOccupation] = useState('');
  const [paymentReady, setPaymentReady] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [user, setUser] = useState({});

  const paymentButtonClick = () => {
    if (
      isSingle
        ? !occupation || !amount
        : !occupation || !amount || !spouseName || !spouseOccupation
    ) {
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
      case 'spouseName':
        setSpouseName(e.target.value);
        break;
      case 'spouseOccupation':
        setSpouseOccupation(e.target.value);
        break;
    }
  };

  const submitPayment = (details) => {
    const { payer, update_time, id } = details;
    const user = {
      firstName: payer.name.given_name,
      lastName: payer.name.surname,
      spouseName,
      spouseOccupation,
      email: payer.email_address,
      transactionId: id,
      date: new Date(update_time).toLocaleDateString(),
      occupation,
      amount,
    };

    setUser(user);
    setRedirect(true);
  };

  return (
    <DonatePage>
      {redirect ? (
        navigate('/donate/success', {
          state: { user },
        })
      ) : (
        <>
          {!paymentReady && (
            <DonationAmount
              isSingle={isSingle}
              setIsSingle={setIsSingle}
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
                    margin-bottom: ${(props) => props.theme.rhythm()};
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
                  submitPayment(details);
                }}
                options={{ clientId }}
              ></PayPalButton>
            </>
          )}
        </>
      )}
    </DonatePage>
  );
};

export default Donate;
