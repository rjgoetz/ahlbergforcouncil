import React from 'react';
import PropTypes from 'prop-types';
import { DollarSign } from '@styled-icons/feather';
import { Control, Input, Label } from 'Components/Form';
import Type from 'Components/Type';

const DonationAmount = ({ handleChange }) => {
  return (
    <>
      <Type el="h2">Your Donation</Type>
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
              background: ${(props) => props.theme.colors.primary};
              display: flex;
              align-items: center;
              padding: 0 3px;
            `}
          >
            <DollarSign size="24" color="white" strokeWidth="2"></DollarSign>
          </span>
          <Input
            type="number"
            id="amount"
            name="amount"
            min="5"
            max="600"
            placeholder="Amount"
            css={`
              height: ${(props) => props.theme.rhythm(6)};
            `}
            onChange={handleChange}
          />
        </div>
      </Control>
    </>
  );
};

DonationAmount.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default DonationAmount;
