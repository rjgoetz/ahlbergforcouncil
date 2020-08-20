import React from 'react';
import styled from 'styled-components';
import { Container, Row, Column } from 'Components/Grid';
import Navigation from 'Components/Navigation';

const BannerBox = styled.div`
  background: url(${(props) => props.image}) no-repeat center right,
    ${(props) => props.theme.colors.primary};
  background-size: cover;
  height: ${(props) => props.theme.rhythm(70)};
  overflow: hidden;
  position: relative;
  @media screen and (min-width: ${(props) => props.theme.viewPort.lg}) {
    height: ${(props) => props.theme.rhythm(80)};
  }
  @media screen and (min-width: ${(props) => props.theme.viewPort.xl}) {
    height: ${(props) => props.theme.rhythm(90)};
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

const OpacityLayer = styled.div`
  background: rgba(255, 255, 255, 0);
  background: linear-gradient(
    360deg,
    rgba(255, 255, 255, 0) 66%,
    rgba(27, 86, 51, 0.25) 100%
  );
  height: 100%;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 9;
`;

const Banner = ({ children, image }) => {
  return (
    <BannerBox image={image}>
      <OpacityLayer></OpacityLayer>

      <Navigation></Navigation>

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
            lg={{ column: 10, offset: 1 }}
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
