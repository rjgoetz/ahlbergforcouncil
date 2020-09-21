import React from 'react';
import styled from 'styled-components';
import { Container, Row, Column } from 'Components/Grid';
import Type from 'Components/Type';

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
            <RollingText size="xs" weight="medium">
              <Anchor href="/#video">
                League of Women Voters Candidate Forum &gt;
              </Anchor>
            </RollingText>
          </Column>
        </Row>
      </Container>
    </StyledAside>
  );
};

export default Aside;
