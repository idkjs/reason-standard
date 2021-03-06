const path = require('path')

module.exports = {
  pathPrefix: '/',
  siteMetadata: {
    title: 'Standard',
    description: 'A standard library for Bucklescript and Native',
    docsLocation: 'https://github.com/Dean177/reason-standard/tree/master/docs',
    githubUrl: 'https://github.com/Dean177/reason-standard',
    siteUrl: 'https://reason-standard.github.io',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-sentry',
      options: {
        dsn: 'https://702b0527aa914b4197bbd3eefa1eb460@sentry.io/2461811',
        environment: process.env.NODE_ENV,
        enabled: ['production', 'stage'].indexOf(process.env.NODE_ENV) !== -1,
      },
    },
    'gatsby-plugin-remove-trailing-slashes',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'docs',
        path: path.resolve(__dirname, `../docs`),
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1035,
              sizeByPixelDensity: true,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
          },
        ],
        extensions: ['.mdx', '.md'],
      },
    },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: 'UA-11024491-3',
        anonymize: false,
      },
    },
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: 'Reason Standard',
    //     short_name: 'Standard',
    //     start_url: '/',
    //     background_color: '#FFFFFF',
    //     theme_color: '#6b37bf',
    //     display: 'standalone',
    //     crossOrigin: 'use-credentials',
    //     icons: [
    //       {
    //         src: 'src/pwa-512.png',
    //         sizes: `512x512`,
    //         type: `image/png`,
    //       },
    //     ],
    //   },
    // },
    // 'gatsby-plugin-offline',
  ],
};
