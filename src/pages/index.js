import * as React from 'react'
import TennisCourtSvg from '../images/svg/tenniscourt.inline.svg'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'

const IndexPage = ({data}) => {

  return (
    <Layout>

      <header className='relative'>
        <h1>{data.dataJson.title}</h1>
        <p>{data.dataJson.subtitle}</p>
        <p>{data.dataJson.excerpt}</p>
        <TennisCourtSvg className='absolute right-0 top-[-3rem] w-72' />
      </header>

    </Layout>
  )
}

export const data = graphql`
  query {
    dataJson {
      title
      subtitle
      excerpt
    }
  }
`

export default IndexPage