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
      <div className='md:px-12'>

        {heroImageData &&
          <GatsbyImage
            image={heroImageData.childImageSharp.gatsbyImageData}
            alt=''
            className='rotate-[-1deg] z-[-1] -mx-9 md:-mx-12'
          />
        }
        <header className='mb-8 -mt-4'>
          <span className='block mb-12 text-primary text-3xl' aria-hidden>
            {entryNum < 10 ? `0${entryNum}` : entryNum }
          </span>
          <h1 className='mb-4 tracking-tighter'>{title}</h1>
          <p className='italic text-gray'>{subtitle}</p>
        </header>

        <ContentBlocks content={_rawContentBlocks} />

        <hr className='my-12 rotate-[-1deg] text-secondary mx-[-3rem]' />

        {/* Pagination */}
        <section className='mb-16
                            sm:grid sm:grid-cols-[1fr_1.5rem_1fr]
                            lg:grid-cols-[1fr_3rem_1fr]'>
          {pageContext.next &&
            <PaginationItem entry={pageContext.next}
              direction='right'
              className='self-end mb-6 order-1 sm:order-3 text-right sm:text-left' />
          }
          <div aria-hidden
               className='relative self-center order-2
                          p-4 text-center
                          sm:p-0 sm:text-left' >
            <span className='absolute border-b border-kumquat rotate-[30deg] w-6 lg:w-10' aria-hidden></span>
            <span className='absolute border-b border-kumquat rotate-[-60deg] w-6 lg:w-10' aria-hidden></span>
          </div>
          {pageContext.prev &&
            <PaginationItem entry={pageContext.prev}
              direction='left'
              className='self-start mt-6 order-3 sm:order-1' />
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