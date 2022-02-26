// Packages
import React from 'react'
import {graphql} from 'gatsby'
import {PortableText} from '@portabletext/react'

// Components
import ContentBlocks from '../components/contentBlocks/contentBlocks'
import Layout from '../components/Layout'
import TennisCourtSvg from '../images/svg/tenniscourt.inline.svg'

const PageTemplate = ({data}) => {
  console.log("Data", data.page)
  const {
    title,
    subtitle,
    _rawHeaderCopy,
    _rawContentBlocks
  } = data.page

  return (
    <Layout>
      <header className='relative mb-32'>
        <h1>{title}</h1>
        <p className='text-primary italic mb-10'>
          {subtitle}
        </p>
        <div className='max-w-lg'>
          {_rawHeaderCopy && <PortableText value={_rawHeaderCopy} />}
        </div>
        <TennisCourtSvg className='absolute right-0 top-[-3rem] w-72' />
      </header>

      <ContentBlocks content={_rawContentBlocks} />

    </Layout>
  )
}

export const data = graphql`
  query MyQuery($id: String) {
    page: sanityPage(id: {eq: $id}) {
      title
      subtitle
      _rawHeaderCopy
      _rawContentBlocks(resolveReferences: {maxDepth: 10})
    }
  }
`

export default PageTemplate