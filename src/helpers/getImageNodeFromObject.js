/**
 * Get an image object from an object of all image nodes.
 *
 * @param {*} allImages object of all the image nodes
 * @param {*} targetImageName file name with extension of the target image
 * @returns the matched image object if it exists
 */
const getImageNodeFromObject = (allImages, targetImageName) => {
  var targetImage = null

  for (const image of Object.values(allImages)) {
    if (image.relativePath === targetImageName) {
      targetImage = image
    }
  }
  return targetImage
}

module.exports.getImageNodeFromObject = getImageNodeFromObject