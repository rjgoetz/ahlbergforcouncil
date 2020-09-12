import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Type from 'Components/Type';
import ErrorBox from 'Components/ErrorBox';
import Loader from 'Components/Loader';
import { Input, Control, Label, encode } from 'Components/Form';
import Button from 'Components/Button';

const ReceiptForm = ({ details, occupation }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { payer, update_time, id, purchase_units } = details;

  function handleSubmit(e) {
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
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  }

  useEffect(() => {
    document.getElementById('receipt-btn').click();
  });

  return (
    <form
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
        <Input
          type="text"
          id="date"
          name="date"
          readOnly
          value={new Date(update_time).toLocaleDateString()}
        ></Input>
      </Control>

      <Control>
        <Label htmlFor="fullName">Name</Label>
        <Input
          type="text"
          id="fullName"
          name="fullName"
          readOnly
          value={`${payer.name.given_name} ${payer.name.surname}`}
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
          value={payer.email_address}
        ></Input>
      </Control>

      <Control>
        <Label htmlFor="amount">Amount</Label>
        <Input
          type="text"
          id="amount"
          name="amount"
          readOnly
          value={`$${purchase_units[0].amount.value}`}
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
        id="receipt-btn"
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
