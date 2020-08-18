import React from 'react';
import { Heading, Paragraph } from 'grommet';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Heading level={1} color="brand">
      Joshua Ahlberg for Edina City Council
    </Heading>
    <Paragraph>Welcome to your new site.</Paragraph>
    <div style={{ maxWidth: `200px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/about/">Go to About</Link> <br />
  </Layout>
);

export default IndexPage;
