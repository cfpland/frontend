module.exports = {
  siteMetadata: {
    title: 'CFP Land',
    description: 'Calls for Proposals, Tech Conferences, and Speaking Tips',
    siteUrl: 'https://www.cfpland.com',
    author: 'Karl L. Hughes',
    twitter: 'cfp_land',
    image: '/img/default.png',
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/posts/`,
        name: 'posts',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/guides/`,
        name: 'guides',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
              wrapperStyle: 'margin-bottom: 1.0725rem;',
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'CFP Land',
        short_name: 'CFP Land',
        description: 'Calls for Proposals, Tech Conferences, and Speaking Tips',
        homepage_url: 'https://www.cfpland.com',
        start_url: '/',
        background_color: '#67597A',
        theme_color: '#F7468A',
        display: 'standalone',
        icons: [
          {
            src: '/img/android-icon-1024x1024.png',
            sizes: '1024x1024',
            type: 'image/png',
          },
          {
            src: '/img/android-icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/img/android-icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/img/apple-icon-180x180.png',
            sizes: '180x180',
            type: 'image/png',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-19700764-14',
      },
    },
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        mergeSecurityHeaders: true,
        mergeLinkHeaders: true,
        mergeCachingHeaders: true,
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: `YOUR_AIRTABLE_KEY`,
        tables: [
          {
            baseId: `app5JdxyWF41oHa5k`,
            tableName: `conferences`,
            tableView: `closing_in_21`,
            tableLinks: [`category`],
          },
          {
            baseId: `app5JdxyWF41oHa5k`,
            tableName: `categories`,
            tableView: `all`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/c/account/*`, `/c/saved/*`, `/c/searches/*`] },
    },
    'gatsby-plugin-catch-links',
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-react-next',
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-twitter',
    'gatsby-transformer-sharp',
  ],
}
