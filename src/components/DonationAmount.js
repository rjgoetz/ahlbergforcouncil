import React from 'react';
import PropTypes from 'prop-types';
import { DollarSign } from '@styled-icons/feather';
import { Control, Input, Label } from 'Components/Form';
import Type from 'Components/Type';
import Button from 'Components/Button';
import ErrorBox from 'Components/ErrorBox';

const DonationAmount = ({ handleChange, paymentButtonClick, error }) => {
  return (
    <>
      <Type el="h2">Please complete</Type>

      {error && <ErrorBox>{error}</ErrorBox>}

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

      <Control>
        <Label
          htmlFor="occupation"
          aria-label="Occupation"
          css={`
            display: none;
          `}
        ></Label>
        <Input
          type="text"
          id="occupation"
          name="occupation"
          placeholder="Your Occupation"
          css={`
            height: ${(props) => props.theme.rhythm(6)};
          `}
          onChange={handleChange}
        ></Input>
      </Control>

      <Type size="sm">
        Campaign finance rules require us to capture your occupation. Donations
        cannot exceed $600 per person or $1200 per couple.
      </Type>

      <Button block onClick={paymentButtonClick}>
        Payment &gt;
      </Button>
    </>
  );
};

DonationAmount.propTypes = {
  handleChange: PropTypes.func.isRequired,
  paymentButtonClick: PropTypes.func.isRequired,
  error: PropTypes.string,
};

export default DonationAmount;
