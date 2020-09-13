import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Type from 'Components/Type';
import ErrorBox from 'Components/ErrorBox';
import Loader from 'Components/Loader';
import { Input, Control, Label, encode } from 'Components/Form';
import { navigate } from 'gatsby';

const ReceiptForm = ({ user }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const {
    firstName,
    lastName,
    email,
    occupation,
    amount,
    date,
    transactionId,
  } = user;
  const fullName = `${firstName || ''} ${lastName || ''}`;

  function handleSubmit(e) {
    console.log('submitted donation receipt');
    e.preventDefault();

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'donation-receipt',
        date,
        fullName,
        occupation,
        email,
        amount,
        transactionId,
      }),
    })
      .then(() => {
        setLoading(false);
        navigate('/donate/receipt', { state: { user } });
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  }

  const buttonRef = useRef(null);

  useEffect(() => {
    buttonRef.current.click();
  }, []);

  return (
    <form
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      name="donation-receipt"
    >
      <Type
        el="h2"
        css={`
          margin-bottom: ${(props) => props.theme.rhythm()};
        `}
      >
        Processing Payment {loading && <Loader size="24"></Loader>}
      </Type>

      {error && <ErrorBox>{error}</ErrorBox>}

      <Control>
        <Label htmlFor="date">Date</Label>
        <Input type="text" id="date" name="date" readOnly value={date}></Input>
      </Control>

      <Control>
        <Label htmlFor="fullName">Name</Label>
        <Input
          type="text"
          id="fullName"
          name="fullName"
          readOnly
          value={fullName}
        ></Input>
      </Control>

      <Control>
        <Label htmlFor="occupation">Occupation</Label>
        <Input
          type="text"
          id="occupation"
          name="occupation"
          readOnly
          value={occupation}
        ></Input>
      </Control>

      <Control>
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          name="email"
          readOnly
          value={email}
        ></Input>
      </Control>

      <Control>
        <Label htmlFor="amount">Amount</Label>
        <Input
          type="text"
          id="amount"
          name="amount"
          readOnly
          value={amount}
        ></Input>
      </Control>

      <Control>
        <Label htmlFor="transactionId">Transaction ID</Label>
        <Input
          type="text"
          id="transactionId"
          name="transactionId"
          readOnly
          value={transactionId}
        ></Input>
      </Control>

      <button
        ref={buttonRef}
        onClick={handleSubmit}
        css={`
          display: none;
        `}
      >
        Send &gt;
      </button>
    </form>
  );
};

ReceiptForm.propTypes = {
  user: PropTypes.object.isRequired,
};

export default ReceiptForm;
