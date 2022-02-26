const {slugify} = require('./slugify')

/**
 * Constructs the path to be used when calling createPages
 *
 * @param {String} directory Directory where the slug is within, do not include trailing or prepended slashes (ie. 'dreamforce' or 'jobs/tech' are acceptable)
 * @param {String} slug Slug provided from graphql query
 * @returns String of path with begining and trailing slashes
 */
const generatePath = (
  directory = null,
  slug
) => {
  let path = ''

  // Append slug if not index
  if (slug !== 'index') {
    path = `/${slug}/${path}/`
  }

  // Append directory if exists and does not equal page
  // Page is reserved for root directory pages
  if (directory && directory !== '' && directory !== 'Page') {
    path = `/${directory}/${path}/`
  }

  return slugify(path) || '/'
}

module.exports.generatePath = generatePath