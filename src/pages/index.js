import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import Image from '../components/Image';
import SEO from '../components/SEO';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Joshua Ahlberg for Edina City Council</h1>
    <p>Welcome to your new site.</p>
    <div style={{ maxWidth: `200px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/about/">Go to About</Link> <br />
  </Layout>
);

export default IndexPage;
