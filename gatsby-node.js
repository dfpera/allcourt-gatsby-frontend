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
    const pathVar = `${jsonDataName.toLowerCase()}${slugify.slugify(entry.header)}`
    console.log(pathVar)
    createPage({
      path: `${jsonDataName.toLowerCase()}${slugify.slugify(entry.header)}`,
      component: path.resolve(`./src/components/${jsonDataName}Template.js`),
      context: {
        id: entry.id,
        next: index === 0 ? null : allEntries[index - 1],
        prev: index === allEntries.length - 1 ? null : allEntries[index + 1]
      }
    })
  })
}

exports.createPages = async ({ graphql, actions }) => {
  await customCreatePages(graphql, actions, 'Process')
}