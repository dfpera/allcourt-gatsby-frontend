const slugify = str => {
  const basePath = '/'

  const slug = str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '')

  return `/${basePath}/${slug}`.replace(/\/\/+/g, '/')
}

module.exports.slugify = slugify