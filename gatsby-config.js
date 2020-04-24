// Initialize dotenv
require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `Wesley Chiang`,
    description: `Wesley Chiang resume 2020`,
    author: `Wesley Chiang`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: '',
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
      },
    },
    `gatsby-plugin-chakra-ui`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-typescript`,
    {
      resolve: 'gatsby-transformer-json',
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Wesley Chiang`,
        short_name: `WC`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Vollkorn:400,600,700,900`, `Raleway`],
        display: 'swap',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
