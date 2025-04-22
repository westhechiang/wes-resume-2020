// Initialize dotenv
require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `Wesley Chiang`,
    description: `Wesley Chiang resume 2020`,
    author: `Wesley Chiang`,
    siteUrl: `https://wchiang.com`,
  },
  plugins: [
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
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaultQuality: 80,
        stripMetadata: true,
      },
    },
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
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
        cache_busting_mode: 'none',
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
    // Enable offline functionality
    `gatsby-plugin-offline`,
  ],
};
