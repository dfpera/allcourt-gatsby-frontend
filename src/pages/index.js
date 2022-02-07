import * as React from 'react'
import TennisCourtSvg from '../images/svg/tenniscourt.inline.svg'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'

const IndexPage = ({data}) => {

  return (
    <Layout>

      <header className='relative mt-32'>
        <h1>{data.site.siteMetadata.title}</h1>
        <p>{data.site.siteMetadata.subtitle}</p>
        <TennisCourtSvg className='absolute right-0 top-[-3rem] w-72' />
      </header>

    </Layout>
  )
}

export const data = graphql`
  query {
    site {
      siteMetadata {
        title
        subtitle
      }
    }
  }
`

export default IndexPage