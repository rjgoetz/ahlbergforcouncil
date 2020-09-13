import React from 'react';
import DonatePage from 'Components/DonatePage';
import Type from 'Components/Type';

const DonateReceipt = ({ location }) => {
  const user = (location.state && location.state.user) || {};

  return (
    <DonatePage>
      <Type el="h2">Your Receipt</Type>
      <Type>Date: {user.date}</Type>
      <Type>Amount: ${user.amount}</Type>
      <Type>First Name: {user.firstName}</Type>
      <Type>Last Name: {user.lastName}</Type>
      <Type>Occupation: {user.occupation}</Type>
      <Type>Email: {user.email}</Type>
      <Type>Transaction ID: {user.transactionId}</Type>
    </DonatePage>
  );
};

export default DonateReceipt;
