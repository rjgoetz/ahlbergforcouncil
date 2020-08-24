import React from 'react';
import { Container, Row, Column } from 'Components/Grid';
import Layout from 'Components/Layout';
import Logo from 'Components/Logo';
import Image from 'Components/Image';
import Type from 'Components/Type';
import styled from 'styled-components';

const TextBox = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: ${(props) => props.theme.rhythm(12)};

  @media screen and (min-width: ${(props) => props.theme.viewPort.lg}) {
    height: 800px;
    margin-top: 0;
    flex-direction: row;
  }
`;

const IndexPage = () => {
  return (
    <Layout>
      <TextBox>
        <div
          css={`
            text-align: center;
            @media screen and (min-width: ${(props) =>
                props.theme.viewPort.sm}) {
              width: 66%;
            }
            @media screen and (min-width: ${(props) =>
                props.theme.viewPort.lg}) {
              margin: auto;
            }
          `}
        >
          <Logo
            css={`
              margin-bottom: ${(props) => props.theme.rhythm(12)};
              max-width: 300px;
            `}
          ></Logo>
          <Type
            el="h1"
            banner
            css={`
              text-align: center;
            `}
          >
            <span
              css={`
                font-size: ${(props) => props.theme.fontSize.xl};
                line-height: ${(props) => props.theme.rhythm(7)};
                margin: 0 5px;
              `}
            >
              HELP IS ON THE WAY.
              <br />
              COMING SOON.
            </span>
          </Type>
        </div>
        <Image
          src="ahlberg-family.jpg"
          srcSet={{ '1x': 'ahlberg-family.jpg', '2x': 'ahlberg-family@2x.jpg' }}
          alt="Ahlberg Family"
          responsive
          css={`
            @media screen and (min-width: ${(props) =>
                props.theme.viewPort.lg}) {
              display: block;
              width: 50%;
            }
          `}
        ></Image>
      </TextBox>
    </Layout>
  );
};

export default IndexPage;
