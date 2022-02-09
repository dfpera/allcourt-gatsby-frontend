const path = require('path')
const slugify = require('./src/helpers/slugify.js')

const customCreatePages = async (graphql, actions, jsonDataName) => {
  const { createPage } = actions
  const queryJsonFileName = `all${jsonDataName}Json`
  const query = await graphql(`
    query {
       ${queryJsonFileName} {
        nodes {
          id
          header
          subheader
          entryNum
        }
      }
    }
  `)

  if (query.errors) throw query.errors

  const allEntries = query.data[queryJsonFileName].nodes

  allEntries.forEach((entry, index) => {
    const pathVar = `/${jsonDataName.toLowerCase()}${slugify.slugify(entry.header)}`
    var nextEntry, prevEntry = null

    // Next post info
    if (index !== 0) {
      nextEntry = allEntries[index - 1]
      nextEntry.slug = `/${jsonDataName.toLowerCase()}${slugify.slugify(nextEntry.header)}`
      nextEntry.index = index - 1
    }

    // Prev post info
    if (index !== allEntries.length - 1) {
      prevEntry = allEntries[index + 1]
      prevEntry.slug = `/${jsonDataName.toLowerCase()}${slugify.slugify(prevEntry.header)}`
      prevEntry.index = index + 1
    }

    createPage({
      path: pathVar,
      component: path.resolve(`./src/components/${jsonDataName}Template.js`),
      context: {
        id: entry.id,
        index: index,
        next: nextEntry,
        prev: prevEntry
      }
    })
  })
}

exports.createPages = async ({ graphql, actions }) => {
  await customCreatePages(graphql, actions, 'Process')
}