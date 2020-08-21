import React from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';
import { Container, Column, Row } from 'Components/Grid';
import Type from 'Components/Type';
import Button from 'Components/Button';

const OuterBox = styled(Container)`
  background: ${(props) => props.theme.colors.white};
  box-shadow: 0 10px 48px -6px ${(props) => rgba(props.theme.colors.black, 0.5)};
  padding: 20px;
  position: relative;
  bottom: 50%;
`;

const DonateBox = () => {
  return (
    <OuterBox>
      <Row>
        <Column
          lg={6}
          css={`
            text-align: center;
            @media screen and (min-width: ${(props) =>
                props.theme.viewPort.lg}) {
              text-align: left;
            }
          `}
        >
          <div
            css={`
              display: inline-block;
              vertical-align: middle;
              margin-right: 30px;
            `}
          >
            <Type el="h2" align="center">
              Get Involved!
            </Type>
            <Type
              lead
              align="center"
              css={`
                margin-bottom: 0;
              `}
            >
              Become a Volunteer
            </Type>
          </div>
          <Button>Sign Up!</Button>
        </Column>
      </Row>
    </OuterBox>
  );
};

export default DonateBox;
