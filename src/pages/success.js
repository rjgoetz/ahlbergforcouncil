import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'Components/Layout';
import Section from 'Components/Section';
import Type from 'Components/Type';
import Link from 'Components/Link';
import Helmet from 'react-helmet';

const Success = ({ location }) => {
  let message = '';

  if (location && location.state && location.state.message) {
    message = location.state.message;
  }

  return (
    <Layout title="Success">
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <Section>
        <Type el="h4">Success</Type>
        <Type el="h1">Thank you!</Type>
        {message && <Type lead>{message}</Type>}
        <Type>
          <Link to="/">&lt; Back Home</Link>
        </Type>
      </Section>
    </Layout>
  );
};

Success.propTypes = {
  message: PropTypes.string,
};

export default Success;
