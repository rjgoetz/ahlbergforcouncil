import React from 'react';
import styled from 'styled-components';
import { Container, Row, Column } from 'Components/Grid';
import Type from 'Components/Type';
import Link from 'Components/Link';

const StyledAside = styled.aside`
  background: ${(props) => props.theme.colors.yellow};
  height: ${(props) => props.theme.rhythm()};
`;

const RollingText = styled(Type)`
  overflow-x: auto;
  white-space: nowrap;
  margin: 0;
  text-align: center;
`;

const Anchor = styled.a`
  color: ${(props) => props.theme.colors.primary};
  text-decoration: none;
  &:hover,
  &:focus {
    color: ${(props) => props.theme.colors.secondary};
  }
`;

const Aside = () => {
  return (
    <StyledAside>
      <Container>
        <Row>
          <Column>
            <RollingText size="sm" weight="medium">
              <Anchor href="/#video">
                Watch League of Women Voters Candidate Forum
              </Anchor>
            </RollingText>
          </Column>
        </Row>
      </Container>
    </StyledAside>
  );
};

export default Aside;
