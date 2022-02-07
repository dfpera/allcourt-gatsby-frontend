module.exports = {
  siteMetadata: {
       title: `all-court`,
    subtitle: `a tennis project`,
     siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    `gatsby-plugin-image`,
    // `gatsby-plugin-mdx`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        'name': 'images',
        'path': './src/images/'
      },
      __key: 'images'
    }, {
      resolve: `gatsby-source-filesystem`,
      options: {
        'name': 'pages',
        'path': './src/pages/'
      },
      __key: 'pages'
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/
        }
      }
    }
  ]
};