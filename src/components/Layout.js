import React from 'react';
import PropTypes from 'prop-types';
import Theme from 'Styles/Theme';
import GlobalStyle from 'Styles/GlobalStyle';
import Header from 'Components/Header';
import Navigation from 'Components/Navigation';
import Footer from 'Components/Footer';
import 'normalize.css';
import 'typeface-roboto';

const Layout = ({ children, banner }) => {
  return (
    <Theme>
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
};

export default Layout;
