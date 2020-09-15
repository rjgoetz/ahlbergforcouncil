import React from 'react';
import Layout from 'Components/Layout';
import Type from 'Components/Type';
import Link from 'Components/Link';
import Section from 'Components/Section';
import { Helmet } from 'react-helmet';

const NotFoundPage = () => (
  <Layout title="404: Page Not Found">
    <Helmet>
      <meta name="robots" content="noindex" />
    </Helmet>
    <Section>
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
