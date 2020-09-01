import React from 'react';
import PropTypes from 'prop-types';
import Theme from 'Styles/Theme';
import GlobalStyle from 'Styles/GlobalStyle';
import Header from 'Components/Header';
import Navigation from 'Components/Navigation';
import Footer from 'Components/Footer';
import Helmet from 'react-helmet';
import 'normalize.css';
import 'typeface-roboto';

const Layout = ({ children, banner, title }) => {
  return (
    <Theme>
      <Helmet>
        {title ? (
          <title>{title} | Ahlberg for Edina City Council</title>
        ) : (
          <title>Ahlberg for Edina City Council</title>
        )}
        <meta
          name="description"
          content="Sensible. Open. Accountable. Vote for Joshua Ahlberg for Edina City Council this Fall 2020."
        />
      </Helmet>
      <GlobalStyle></GlobalStyle>

      <Header></Header>
      <Navigation></Navigation>
      {banner}
      <main
        css={`
          position: relative;
        `}
      >
        {children}
      </main>
      <Footer></Footer>
    </Theme>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  banner: PropTypes.element,
  title: PropTypes.string,
};

export default Layout;
