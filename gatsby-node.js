// Components
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
        nodes {
          title
          subtitle
          id
          slug {
            current
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

  const allNodes = query.data[`allSanity${pageName}`].nodes

  allNodes
    .forEach((node, index) => {
      // TODO: Not sure what the best way to handle pagination for different
      // types of pages would be... is it too much to do the job all the time?
      var paginationNodes = getNextAndPrevNodes(allNodes, index, pageName)

      createPage({
        path: generatePath(
          pathDirectory || pageName,
          node.slug.current
        ),
        component: require.resolve(`./src/templates/${pageName}Template.js`),
        context: {
          id: node.id,
          index: index,
          next: paginationNodes?.next ?? '',
          prev: paginationNodes?.prev ?? ''
        }
      })
    })
  reporter.info(`[Gatsby-Node] Pages created for ${pageName}`)
}

/**
 * Get the next and previous nodes relative to the current node.
 *
 * @param {*} allNodes graphql object of all the data nodes
 * @param {*} index num of current node index
 * @param {*} pageName name of the document in Sanity
 * @param {*} pathDirectory directory of the page if you want to override the pageName
 * @returns object with the next and prev nodes
 */
const getNextAndPrevNodes = (
  allNodes,
  index,
  pageName,
  pathDirectory = null
) => {
  var next, prev = null

  // Next post info
  if (index !== 0) {
    next = allNodes[index - 1]
    next.path = generatePath(pathDirectory || pageName, next.slug.current)
    next.index = index - 1
  }

  // Prev post info
  if (index !== allNodes.length - 1) {
    prev = allNodes[index + 1]
    prev.path = generatePath(pathDirectory || pageName, prev.slug.current)
    prev.index = index + 1
  }

  return {next, prev}
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  await sanityCreatePages(graphql, actions, reporter, 'Page')
  await sanityCreatePages(graphql, actions, reporter, 'Process')
}