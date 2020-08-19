/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        Components: path.resolve(__dirname, 'src/components/'),
        Context: path.resolve(__dirname, 'src/context/'),
        Data: path.resolve(__dirname, 'src/data/'),
        Documents: path.resolve(__dirname, 'src/documents/'),
        Images: path.resolve(__dirname, 'src/images/'),
        Pages: path.resolve(__dirname, 'src/pages/'),
        Styles: path.resolve(__dirname, 'src/styles/'),
        Utilities: path.resolve(__dirname, 'src/utilities/'),
        Videos: path.resolve(__dirname, 'src/videos/'),
      },
    },
  });
};
