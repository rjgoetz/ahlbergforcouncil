import React from 'react';
import PropTypes from 'prop-types';
import Theme from 'Styles/Theme';
import GlobalStyle from 'Styles/GlobalStyle';
import 'normalize.css';
import 'typeface-roboto';

const Layout = ({ children }) => {
  return (
    <Theme>
      <GlobalStyle></GlobalStyle>
      <div>
        <main>{children}</main>
        <footer>
          <p>© {new Date().getFullYear()} Joshua Michael Ahlberg</p>
        </footer>
      </div>
    </Theme>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
