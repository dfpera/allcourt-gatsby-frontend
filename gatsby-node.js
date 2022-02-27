// Components
const {slugify} = require('./src/helpers/slugify.js')
const {generatePath} = require('./src/helpers/generatePath')

/**
 * Default GraphQL method for generating most pages. Use this method for creating
 * pages that don't require any custom GraphQL. In most cases it is better to use
 * a page level query to get more specific data.
 *
 * @param {*} graphql graphql parameter supplied by createPages method
 * @param {*} {createPage} actions parameter supplied by createPages method
 * @param {*} reporter reporter parameter supplied by createPages method
 * @param {*} pageName name of the document in Sanity
 * @param {*} pathDirectory directory of page if you want to override the pageName
 */
const sanityCreatePages = async (
  graphql,
  {createPage},
  reporter,
  pageName,
  pathDirectory = null
) => {
  const query = await graphql(`
    {
      allSanity${pageName}(
        filter: {
          slug: { current: { ne: null } },
        }
      ) {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
    }
  `)

  if (query.errors) {
    reporter.panic(`[Gatsby-Node] Error retrieving GraphQL for ${pageName}`, query.errors)
    throw query.errors
  }
  reporter.info(`[Gatsby-Node] Settings successfully retrieved GraphQL for ${pageName}`)

  const queryEdges = (query.data[`allSanity${pageName}`] || {}).edges || []
  queryEdges
    .forEach(edge => {
      const {id, slug = {}} = edge.node

      createPage({
        path: generatePath(
          pathDirectory || pageName,
          slug.current
        ),
        component: require.resolve(`./src/templates/${pageName}Template.js`),
        ownerNodeId: id,
        context: {
          id,
        }
      })
    })
  reporter.info(`[Gatsby-Node] Pages created for ${pageName}`)
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  await sanityCreatePages(graphql, actions, reporter, 'Page')
  await sanityCreatePages(graphql, actions, reporter, 'Process')
}