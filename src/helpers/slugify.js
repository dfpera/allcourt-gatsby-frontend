/**
 * Takes an input path string and converts it into a valid path with only a-z, 0-9, or - (for spaces) characters. This method also makes sure that the path does not have duplicate / throughout the path.
 *
 * @param {String} path Any path to be converted into a valid string path
 * @returns A valid string path
 */
 const slugify = (path) => {
  const slug = path
    .toLowerCase()
    .replace(/[^a-z0-9/#]+/g, '-')
    .replace(/(^-|-$)+/g, '')

  return slug.replace(/\/\/+/g, '/')
}

module.exports.slugify = slugify