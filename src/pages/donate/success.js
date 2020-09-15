import React from 'react';
import ReceiptForm from 'Components/ReceiptForm';
import DonatePage from 'Components/DonatePage';
import { Helmet } from 'react-helmet';

const DonateSuccess = ({ location }) => {
  return (
    <DonatePage>
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>
      <ReceiptForm
        user={(location.state && location.state.user) || {}}
      ></ReceiptForm>
    </DonatePage>
  );
};

export default DonateSuccess;
