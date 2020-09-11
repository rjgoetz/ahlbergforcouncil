import React from 'react';
import PropTypes from 'prop-types';
import Type from 'Components/Type';

const Receipt = ({ details }) => {
  const { payer, update_time, id, purchase_units } = details;

  return (
    <>
      <Type
        el="h2"
        css={`
          margin-bottom: ${(props) => props.theme.rhythm()};
        `}
      >
        Thank you for your support!
      </Type>
      <Type
        el="h3"
        css={`
          margin-bottom: ${(props) => props.theme.rhythm()};
        `}
      >
        Your Receipt
      </Type>
      <Type>Please print for your records.</Type>
      <Type
        css={`
          margin-bottom: ${(props) => props.theme.rhythm(1)};
        `}
      >
        <span
          css={`
            font-weight: ${(props) => props.theme.fontWeight.bold};
          `}
        >
          Date:
        </span>{' '}
        {new Date(update_time).toLocaleDateString()}
      </Type>
      <Type
        css={`
          margin-bottom: ${(props) => props.theme.rhythm(1)};
        `}
      >
        <span
          css={`
            font-weight: ${(props) => props.theme.fontWeight.bold};
          `}
        >
          Name:
        </span>{' '}
        {payer.name.given_name} {payer.name.surname}
      </Type>
      <Type
        css={`
          margin-bottom: ${(props) => props.theme.rhythm(1)};
        `}
      >
        <span
          css={`
            font-weight: ${(props) => props.theme.fontWeight.bold};
          `}
        >
          Email:
        </span>{' '}
        {payer.email_address}
      </Type>
      <Type
        css={`
          margin-bottom: ${(props) => props.theme.rhythm(1)};
        `}
      >
        <span
          css={`
            font-weight: ${(props) => props.theme.fontWeight.bold};
          `}
        >
          Amount:
        </span>{' '}
        ${purchase_units[0].amount.value}
      </Type>
      <Type
        css={`
          margin-bottom: ${(props) => props.theme.rhythm(1)};
        `}
      >
        <span
          css={`
            font-weight: ${(props) => props.theme.fontWeight.bold};
          `}
        >
          Transaction ID:
        </span>{' '}
        {id}
      </Type>
    </>
  );
};

Receipt.propTypes = {
  details: PropTypes.object.isRequired,
};

export default Receipt;
