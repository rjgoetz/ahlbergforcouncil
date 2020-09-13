import React from 'react';
import ReceiptForm from 'Components/ReceiptForm';
import DonatePage from 'Components/DonatePage';

const DonateSuccess = ({ location }) => {
  return (
    <DonatePage>
      <ReceiptForm
        user={(location.state && location.state.user) || {}}
      ></ReceiptForm>
    </DonatePage>
  );
};

export default DonateSuccess;
