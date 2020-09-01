module.exports = {
  siteMetadata: {
    title: `Ahlberg for Edina City Council`,
    description: `Sensible. Open. Accountable. Vote for Joshua Ahlberg for Edina City Council this Fall 2020.`,
    author: `Joshua Ahlberg`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ahlberg For Edina City Council`,
        short_name: `Ahlberg For Council`,
        start_url: `/`,
        background_color: `#1b5633`,
        theme_color: `#1b5633`,
        display: `minimal-ui`,
        icon: `src/images/ahlberg-icon.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-netlify',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'YOUR_GOOGLE_ANALYTICS_TRACKING_ID',
        respectDNT: false,
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: 'auto',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
