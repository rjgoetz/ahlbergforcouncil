import React from 'react';
import styled from 'styled-components';
import { Container, Row, Column } from 'Components/Grid';

const BannerBox = styled.div`
  height: ${(props) => props.theme.rhythm(60)};
  overflow: hidden;
  position: relative;
  @media screen and (min-width: ${(props) => props.theme.viewPort.lg}) {
    height: ${(props) => props.theme.rhythm(70)};
  }
  @media screen and (min-width: ${(props) => props.theme.viewPort.xl}) {
    height: ${(props) => props.theme.rhythm(80)};
  }
  @media screen and (min-width: ${(props) => props.theme.viewPort.xxl}) {
    background-position-x: center;
    background-size: contain;
  }
`;

const BannerText = styled.div`
  width: 50%;
  @media screen and (min-width: ${(props) => props.theme.viewPort.lg}) {
    width: 33%;
  }
  @media screen and (min-width: ${(props) => props.theme.viewPort.xl}) {
    width: 25%;
  }
`;

const Banner = ({ children, ...props }) => {
  return (
    <BannerBox {...props}>
      <Container
        css={`
          height: 100%;
        `}
      >
        <Row
          css={`
            height: 100%;
          `}
        >
          <Column
            xl={{ column: 10, offset: 1 }}
            xxl={{ column: 8, offset: 2 }}
            css={`
              display: flex;
              align-items: center;
              height: 100%;
            `}
          >
            <BannerText>{children}</BannerText>
          </Column>
        </Row>
      </Container>
    </BannerBox>
  );
};

export default Banner;
