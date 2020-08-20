import React from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';
import Type from 'Components/Type';
import Button from 'Components/Button';

const OuterBox = styled.div`
  position: relative;
  bottom: 50%;
`;

const InnerBox = styled.div`
  background: ${(props) => props.theme.colors.white};
  box-shadow: 0 10px 48px -6px ${(props) => rgba(props.theme.colors.black, 0.5)};
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${(props) => props.theme.rhythm(16)};
  text-align: center;
`;

const DonateBox = () => {
  return (
    <OuterBox>
      <InnerBox>
        <div
          css={`
            display: flex;
          `}
        >
          <div
            css={`
              margin-right: 30px;
            `}
          >
            <Type el="h2">Get Involved!</Type>
            <Type
              lead
              css={`
                margin-bottom: 0;
              `}
            >
              Become a Volunteer
            </Type>
          </div>
          <Button css={'align-self: center;'}>Sign Up!</Button>
        </div>
        <div></div>
      </InnerBox>
    </OuterBox>
  );
};

export default DonateBox;
