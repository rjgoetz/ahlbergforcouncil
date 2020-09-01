import React from 'react';
import styled from 'styled-components';
import { Container, Row, Column } from 'Components/Grid';
import Img from 'gatsby-image';

const BannerBox = styled.div`
  height: ${(props) => props.theme.rhythm(60)};
  overflow: hidden;
  position: relative;
  max-width: 1920px;
  margin: auto;
  @media screen and (min-width: ${(props) => props.theme.viewPort.lg}) {
    height: ${(props) => props.theme.rhythm(70)};
  }
  @media screen and (min-width: ${(props) => props.theme.viewPort.xl}) {
    height: ${(props) => props.theme.rhythm(80)};
  }
  & > div {
    height: 100%;
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

const Banner = ({ data, children, ...props }) => {
  return (
    <BannerBox {...props}>
      {data &&
        data.desktop &&
        data.desktop.childImageSharp &&
        data.desktop.childImageSharp.fluid && (
          <Img
            fluid={data.desktop.childImageSharp.fluid}
            alt="Josh Ahlberg"
          ></Img>
        )}
      <Container
        css={`
          height: 100%;
          position: absolute;
          top: 0;
          width: 100%;
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
