import React from 'react';
import Layout from 'Components/Layout';
import SEO from 'Components/SEO';
import Type from 'Components/Type';
import Link from 'Components/Link';
import Section from 'Components/Section';

const NotFoundPage = () => (
  <Layout>
    <Section>
      <SEO title="404: Not found" />

      <Type el="h4">Error 404</Type>
      <Type el="h1">Page Not Found</Type>
      <Type
        css={`
          margin-bottom: ${(props) => props.theme.rhythm(8)};
        `}
      >
        Looks like you stumbled into Hopkins...
      </Type>
      <Type>
        <Link to="/">&lt; Back Home</Link>
      </Type>
    </Section>
  </Layout>
);

export default NotFoundPage;
