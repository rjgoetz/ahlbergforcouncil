import React from 'react';
import { Container, Row, Column } from 'Components/Grid';

const Wrapper = ({ children }) => {
  return (
    <Container>
      <Row>
        <Column xl={{ column: 10, offset: 1 }} xxl={{ column: 8, offset: 2 }}>
          {children}
        </Column>
      </Row>
    </Container>
  );
};

export default Wrapper;
