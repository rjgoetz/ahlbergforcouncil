import React from 'react';
import { Grommet, Text, Footer, Box } from 'grommet';
import Header from '../components/Header';
import PropTypes from 'prop-types';

const myTheme = {
  global: {
    font: {
      family: 'Roboto',
      size: '19px',
      height: '28.5px',
    },
    colors: {
      brand: '#1b5633',
    },
  },
};

const Layout = ({ children }) => {
  return (
    <Grommet theme={myTheme}>
      <Box direction="column" background="brand">
        <Header></Header>
        <div>
          <main>{children}</main>
          <Footer background="brand" align="center" pad="medium">
            <Text>© {new Date().getFullYear()} Joshua Michael Ahlberg</Text>
          </Footer>
        </div>
      </Box>
    </Grommet>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
