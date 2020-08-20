import React from 'react';
import PropTypes from 'prop-types';
import Theme from 'Styles/Theme';
import GlobalStyle from 'Styles/GlobalStyle';
import Header from 'Components/Header';
import Footer from 'Components/Footer';
import 'normalize.css';
import 'typeface-roboto';

const Layout = ({ children }) => {
  return (
    <Theme>
      <GlobalStyle></GlobalStyle>

      <Header></Header>
      <main>{children}</main>
      <Footer></Footer>
    </Theme>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
