import React from 'react';
import { Row, Column } from 'Components/Grid';
import Layout from 'Components/Layout';
import SEO from 'Components/SEO';
import Type from 'Components/Type';
import Banner from 'Components/Banner';
import Section from 'Components/Section';
import FamilyImage from 'Images/ahlberg-family.jpg';
import FamilyImageMobile from 'Images/ahlberg-family.jpg';

const AboutBanner = (
  <Banner
    css={`
      background: url(${FamilyImageMobile}) no-repeat center center;
      background-size: cover;
      @media screen and (min-width: ${(props) => props.theme.viewPort.md}) {
        background: url(${FamilyImage}) no-repeat center center;
        background-size: cover;
      }
      @media screen and (min-width: ${(props) => props.theme.viewPort.xxl}) {
        background: url(${FamilyImage}) no-repeat center center;
        background-size: contain;
      }
    `}
  ></Banner>
);

const About = () => (
  <Layout banner={AboutBanner}>
    <SEO title="My Story" />

    <Section>
      <Row>
        <Column md={9}>
          <Type el="h4">My Story</Type>
          <Type el="h1">Etiam ac felis sed diam consequat molestie.</Type>
          <Type>
            Sed ut sapien fringilla, aliquet tortor et, rhoncus nisi. Sed
            iaculis nec ante sed condimentum. Aenean non cursus sem. Proin
            scelerisque volutpat est sit amet sodales. Etiam id ligula porta,
            commodo sapien et, scelerisque tortor. Donec erat lorem, iaculis id
            congue nec, sollicitudin eleifend tortor. Orci varius natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Ut non feugiat felis. Mauris a elit congue, tempus eros nec, dapibus
            augue. Suspendisse sit amet libero vitae ipsum venenatis suscipit.
            Duis venenatis pretium nisl at aliquam. Integer bibendum sapien eu
            posuere bibendum.
          </Type>

          <Type>
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Etiam ac felis sed diam consequat molestie.
            Vivamus dictum enim ut urna hendrerit facilisis pulvinar ac nunc.
            Donec a nibh cursus, rutrum arcu bibendum, volutpat elit. In eget
            suscipit elit. Proin tincidunt ultrices rhoncus. Integer lobortis
            mollis lectus, non convallis lacus tempor at. Praesent in iaculis
            ipsum, ut porttitor massa. Cras sed libero varius, venenatis nisl
            sit amet, condimentum nisl. Ut eget nunc egestas, fringilla elit
            vel, consequat urna. Nulla odio odio, condimentum a enim eu,
            tincidunt ornare risus. Ut sem dui, dignissim at purus a, feugiat
            condimentum turpis. Orci varius natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus.
          </Type>

          <Type>
            Aliquam non nulla nulla. Quisque mattis semper ante, ut aliquam mi
            feugiat ac. Fusce dolor velit, bibendum sit amet placerat quis,
            imperdiet quis ante. Sed mattis suscipit ex, pellentesque molestie
            odio vulputate non. Pellentesque eu congue quam, nec scelerisque
            nunc. Curabitur eget lacinia neque. Nullam quis porta felis.
            Maecenas eu quam porta, aliquet risus pulvinar, pellentesque augue.
            Fusce ultricies urna sit amet diam malesuada luctus.
          </Type>
        </Column>
      </Row>
    </Section>

    <Section
      background="ltGrey"
      css={`
        margin-bottom: 0;
      `}
    >
      <Row>
        <Column
          md={4}
          xxl={3}
          css={`
            margin-bottom: ${(props) => props.theme.rhythm()};
          `}
        >
          <Type el="h2">Accomplishment 1</Type>
          <Type>
            Vestibulum id pretium erat. Morbi porta blandit mi, non pretium
            lacus consectetur eu. Nam et sapien dapibus, vulputate ante a,
            bibendum odio. Donec eget ultrices nisl. Vivamus turpis orci,
            fermentum sit amet volutpat at, dignissim id mi.
          </Type>
        </Column>
        <Column
          md={4}
          xxl={{ column: 3, offset: 1 }}
          css={`
            margin-bottom: ${(props) => props.theme.rhythm()};
          `}
        >
          <Type el="h2">Accomplishment 2</Type>
          <Type>
            Aliquam condimentum in orci et semper. Fusce feugiat molestie
            dignissim. Suspendisse potenti. Fusce vitae auctor erat. Sed vel
            urna risus. Fusce vitae metus enim. Mauris dapibus mi ut accumsan
            euismod.
          </Type>
        </Column>
        <Column md={4} xxl={{ column: 3, offset: 1 }}>
          <Type el="h2">Accomplishment 3</Type>
          <Type>
            Etiam ex sapien, ullamcorper sit amet lobortis in, consectetur vitae
            tortor. Suspendisse eget ullamcorper sem, in pulvinar nisi.
            Vestibulum suscipit, nulla non ultricies hendrerit, nibh nisi tempus
            lacus, in accumsan mauris turpis in tellus.
          </Type>
        </Column>
      </Row>
    </Section>
  </Layout>
);

export default About;
