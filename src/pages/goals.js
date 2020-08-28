import React from 'react';
import { Row, Column } from 'Components/Grid';
import Layout from 'Components/Layout';
import SEO from 'Components/SEO';
import Type from 'Components/Type';
import Section from 'Components/Section';
import BigNumber from 'Components/BigNumber';

const Goals = () => (
  <Layout>
    <SEO title="My Goals" />

    <Section>
      <Row>
        <Column md={9}>
          <Type el="h4">My Goals</Type>
          <Type
            el="h1"
            css={`
              margin-bottom: ${(props) => props.theme.rhythm(8)};
            `}
          >
            Etiam ac felis sed diam consequat molestie.
          </Type>

          <BigNumber>01</BigNumber>
          <Type el="h2">Sensible</Type>
          <Type>
            I plan to start asking ourselves how the initiatives were we have
            under review for our city enhance the quality of life for the
            residents of Edina. Pellentesque habitant morbi tristique senectus
            et netus et malesuada fames ac turpis egestas. Etiam ac felis sed
            diam consequat molestie. Vivamus dictum enim ut urna hendrerit
            facilisis pulvinar ac nunc. Donec a nibh cursus, rutrum arcu
            bibendum, volutpat elit. In eget suscipit elit.
          </Type>

          <Type
            css={`
              margin-bottom: ${(props) => props.theme.rhythm(8)};
            `}
          >
            Aliquam non nulla nulla. Quisque mattis semper ante, ut aliquam mi
            feugiat ac. Fusce dolor velit, bibendum sit amet placerat quis,
            imperdiet quis ante. Sed mattis suscipit ex, pellentesque molestie
            odio vulputate non. Pellentesque eu congue quam, nec scelerisque
            nunc. Curabitur eget lacinia neque. Nullam quis porta felis.
            Maecenas eu quam porta, aliquet risus pulvinar, pellentesque augue.
            Fusce ultricies urna sit amet diam malesuada luctus.
          </Type>

          <BigNumber>02</BigNumber>
          <Type el="h2">Open</Type>
          <Type>
            Municipal government is apolitical. I plan on approaching each and
            every interaction and proposal from a position of independence and
            neutrality. Pellentesque eu congue quam, nec scelerisque nunc.
            Aliquam condimentum in orci et semper. Fusce feugiat molestie
            dignissim. Suspendisse potenti. Fusce vitae auctor erat. Sed vel
            urna risus. Fusce vitae metus enim. Mauris dapibus mi ut accumsan
            euismod. Nunc pulvinar eget purus vel auctor. Phasellus semper magna
            ut vestibulum vestibulum.
          </Type>

          <Type
            css={`
              margin-bottom: ${(props) => props.theme.rhythm(8)};
            `}
          >
            Nunc tincidunt et justo in consequat. Nunc eget blandit nulla, ut
            finibus magna. Nulla non ullamcorper diam, id dapibus nisi. Vivamus
            dignissim finibus enim, non varius leo semper congue. Phasellus
            pellentesque ac turpis at dignissim. Nulla convallis neque quis
            lacus tincidunt, nec blandit sapien posuere. Nunc id nulla ut massa
            feugiat finibus. Nunc condimentum fermentum quam, sit amet mattis
            nisl sollicitudin at. Fusce a leo quam. Cras non faucibus felis.
            Praesent viverra non urna ut eleifend. Proin a convallis augue.
            Donec ut mauris porta, dictum velit id, viverra turpis. Ut rhoncus,
            libero vel molestie congue, erat odio ultrices lorem, vel malesuada
            justo urna venenatis nunc.
          </Type>

          <BigNumber>03</BigNumber>
          <Type el="h2">Accountable</Type>
          <Type>
            There is a pattern of outcry surrounding development /
            overdevelopment, which tells me there are real communication,
            engagement, and planning breakdowns between the city and its
            residents. It's time to break that cycle. Etiam ex sapien,
            ullamcorper sit amet lobortis in, consectetur vitae tortor.
            Suspendisse eget ullamcorper sem, in pulvinar nisi. Vestibulum
            suscipit, nulla non ultricies hendrerit, nibh nisi tempus lacus, in
            accumsan mauris turpis in tellus. Etiam efficitur vehicula
            fermentum. Aliquam iaculis in dui id rhoncus.
          </Type>

          <Type>
            Aliquam non risus enim. In accumsan placerat tincidunt. Pellentesque
            dictum faucibus urna, nec semper eros. Pellentesque tellus turpis,
            tincidunt quis fringilla a, placerat non odio. Nullam aliquet
            posuere nisi, sit amet dictum odio cursus nec. Proin vel ullamcorper
            quam. Duis bibendum et urna in dignissim. Fusce vel erat et odio
            ornare commodo. Nulla vestibulum sapien enim, at euismod lectus
            eleifend sed. Praesent hendrerit vehicula tortor, id vulputate ex
            pellentesque eget. Praesent commodo aliquam magna, id gravida nisl.
            Vivamus dictum scelerisque mauris, non tristique ante tempor
            pulvinar. Suspendisse a malesuada ante, nec malesuada nisi.
          </Type>
        </Column>
      </Row>
    </Section>
  </Layout>
);

export default Goals;
