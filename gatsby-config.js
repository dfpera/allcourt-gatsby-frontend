if (!process.env.NETLIFY && !process.env.GATSBY_CLOUD) {
  require("dotenv").config({
    path: `.env`,
  });
}

const IS_PROD = process.env.NODE_ENV === "production";
const PREVIEW_ENABLED = (process.env.GATSBY_IS_PREVIEW || "false").toLowerCase() === "true"
const SANITY = {
  PROJECT_ID: process.env.SANITY_PROJECT_ID,
  DATASET: process.env.SANITY_DATASET,
  READ_TOKEN: process.env.SANITY_READ_TOKEN,
  WATCH_MODE: !IS_PROD,
  OVERLAY_DRAFTS: !IS_PROD || PREVIEW_ENABLED
}

module.exports = {
  siteMetadata: {
       title: 'all-court',
    subtitle: 'a tennis project',
     siteUrl: 'https://tennis.dpera.dev'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    // 'gatsby-plugin-mdx',
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        'name': 'images',
        'path': './src/images/'
      },
      __key: 'images'
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        'name': 'pages',
        'path': './src/pages/'
      },
      __key: 'pages'
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: SANITY.PROJECT_ID,
        dataset: SANITY.DATASET,
        token: SANITY.READ_TOKEN,
        watchMode: SANITY.WATCH_MODE,
        overlayDrafts: SANITY.OVERLAY_DRAFTS,
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/
        }
      }
    },
  ]
};