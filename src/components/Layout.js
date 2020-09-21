import React from 'react';
import PropTypes from 'prop-types';
import Theme from 'Styles/Theme';
import GlobalStyle from 'Styles/GlobalStyle';
import Aside from 'Components/Aside';
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
          content="Vote for Joshua Ahlberg, 2020 Candidate for Edina City Council. Sensible. Open. Accountable."
        />
      </Helmet>
      <GlobalStyle></GlobalStyle>

      <Aside></Aside>
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
