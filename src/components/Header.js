import React from 'react';
import styled from 'styled-components';
import { Container, Row, Column } from 'Components/Grid';
import Type from 'Components/Type';
import Logo from 'Components/Logo';
import Button from 'Components/Button';
import { DollarSign } from '@styled-icons/feather';

const StyledHeader = styled.header`
  align-items: center;
  display: flex;
  padding: ${(props) => props.theme.rhythm()} 0;
  justify-content: space-between;
`;

const Header = () => {
  return (
    <Container>
      <Row>
        <Column>
          <StyledHeader>
            <Logo
              css={`
                vertical-align: middle;
                width: 150px;
              `}
            ></Logo>
            <Button background="white">
              <DollarSign
                size={18}
                strokeWidth={2}
                css={`
                  background: ${(props) => props.theme.colors.primary};
                  border-radius: 50%;
                  color: ${(props) => props.theme.colors.white};
                  display: inline-block;
                  margin-right: 5px;
                  padding: 2px;
                `}
              ></DollarSign>
              Donate Now!
            </Button>
          </StyledHeader>
        </Column>
      </Row>
    </Container>
  );
};

export default Header;
