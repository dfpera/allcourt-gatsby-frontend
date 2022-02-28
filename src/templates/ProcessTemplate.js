// Packages
import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

// Components
import { useImages } from '../hooks/useImages'
import { getImageNodeFromObject } from '../helpers/getImageNodeFromObject'
import ContentBlocks from '../components/contentBlocks/contentBlocks'
import Layout from '../components/Layout'
import PaginationItem from '../components/PaginationItem'

const ProcessTemplate = ({data, pageContext}) => {
  console.log("Data", data.page)
  const {
    title,
    subtitle,
    date,
    entryNum,
    heroImage,
    excerpt,
    _rawContentBlocks
  } = data.page

  // console.log('hook for all images', useImages())
  // console.log('test get image', heroImage, getImageNodeFromObject(useImages(), heroImage))

  const heroImageData = getImageNodeFromObject(useImages(), heroImage)
  console.log(heroImageData.childImageSharp.gatsbyImageData)

  return (
    <Layout>
      <div className='px-12'>

        {heroImageData &&
          <GatsbyImage
            image={heroImageData.childImageSharp.gatsbyImageData}
            alt=''
            className='-mx-12 rotate-[-1deg] z-[-1]'
          />
        }
        <header className='mb-8 -mt-4'>
          <span className='block mb-12 text-primary text-3xl' aria-hidden>
            {entryNum < 10
              ? `0${entryNum}`
              : entryNum }
          </span>
          <h1 className='mb-4 tracking-tighter'>{title}</h1>
          <p className='italic text-gray'>{subtitle}</p>
        </header>

        <ContentBlocks content={_rawContentBlocks} />

        <hr className='my-12 rotate-[-1deg] text-secondary mx-[-3rem]' />

        {/* Pagination */}
        <section className='grid grid-cols-[1fr_3rem_1fr] mb-16'>
          {pageContext.next &&
            <PaginationItem entry={pageContext.next}
              direction='left'
              className='self-end' />
          }
          <div className='relative self-center col-start-2' aria-hidden>
            <span className='absolute border-b border-kumquat w-12 rotate-[30deg]' aria-hidden></span>
            <span className='absolute border-b border-kumquat w-12 rotate-[-60deg]' aria-hidden></span>
          </div>
          {pageContext.prev &&
            <PaginationItem entry={pageContext.prev}
              direction='right'
              className='self-start col-start-3' />
          }
        </section>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ProcessQuery($id: String) {
    page: sanityProcess(id: {eq: $id}) {
      title
      subtitle
      heroImage
      entryNum
      _rawContentBlocks(resolveReferences: {maxDepth: 10})
    }
  }
`

export default ProcessTemplate