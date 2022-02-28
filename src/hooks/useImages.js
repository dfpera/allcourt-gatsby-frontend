import { useStaticQuery, graphql } from "gatsby"

export const useImages = () => {
  const { allFile } = useStaticQuery(
    graphql`
      query Images {
        allFile(
          filter: { sourceInstanceName: {eq: "images"} }
        ) {
          nodes {
            name
            relativePath
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    `)

  return allFile.nodes
}