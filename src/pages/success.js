import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'Components/Layout';
import Section from 'Components/Section';
import SEO from 'Components/SEO';
import Type from 'Components/Type';
import Link from 'Components/Link';

const Success = ({ location }) => {
  const { message } = location.state;

  return (
    <Layout>
      <SEO title="Thank you"></SEO>

      <Section>
        <Type el="h4">Success</Type>
        <Type el="h1">Thank you!</Type>
        <Type lead>{message}</Type>
        <Type
          css={`
            margin-bottom: ${(props) => props.theme.rhythm(8)};
          `}
        >
          &mdash; Ahlberg for City Council
        </Type>
        <Type>
          <Link to="/">&lt; Back Home</Link>
        </Type>
      </Section>
    </Layout>
  );
};

Success.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Success;
