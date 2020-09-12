import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Type from 'Components/Type';
import ErrorBox from 'Components/ErrorBox';
import Loader from 'Components/Loader';
import { Input, Control, Label, encode } from 'Components/Form';
import Button from 'Components/Button';

const ReceiptForm = ({ details, occupation }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  let firstName = '';
  let lastName = '';
  let time = '';
  let amount = '';
  let id = '';
  let email = '';

  if (
    details.payer &&
    details.update_time &&
    details.id &&
    details.purchase_units
  ) {
    firstName = details.payer.name.given_name;
    lastName = details.payer.name.surname;
    email = details.payer.email_address;
    time = new Date(details.update_time).toLocaleDateString();
    id = details.id;
    amount = details.purchase_units[0].amount.value;
  }

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
        setSubmitted(true);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  }

  const formRef = useRef(null);

  useEffect(() => {
    const button = document.getElementById('receipt-button');

    if (!submitted) {
      formRef.current.requestSubmit(button);
    }
  });

  return (
    <form
      ref={formRef}
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      name="donation-receipt"
      onSubmit={handleSubmit}
    >
      <Type
        el="h2"
        css={`
          margin-bottom: ${(props) => props.theme.rhythm()};
        `}
      >
        Thank you for your support! {loading && <Loader size="24"></Loader>}
      </Type>

      {error && <ErrorBox>{error}</ErrorBox>}

      <Type
        el="h3"
        css={`
          margin-bottom: ${(props) => props.theme.rhythm()};
        `}
      >
        Your Receipt
      </Type>
      <Type>Please print for your records.</Type>

      <Control>
        <Label htmlFor="date">Date</Label>
        <Input type="text" id="date" name="date" readOnly value={time}></Input>
      </Control>

      <Control>
        <Label htmlFor="fullName">Name</Label>
        <Input
          type="text"
          id="fullName"
          name="fullName"
          readOnly
          value={`${firstName} ${lastName}`}
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
          value={id}
        ></Input>
      </Control>

      <Button
        id="receipt-button"
        block
        css={`
          display: none;
        `}
      >
        Send &gt;
      </Button>
    </form>
  );
};

ReceiptForm.propTypes = {
  details: PropTypes.object.isRequired,
  occupation: PropTypes.string.isRequired,
};

export default ReceiptForm;
