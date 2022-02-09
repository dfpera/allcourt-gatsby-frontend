import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from './Layout.js'

const PostTemplate = ({data, pageContext}) => {

  const { header, subheader, content } = data.processJson

  return (
    <Layout>
      <header>
        <h1>{header}</h1>
        <p>{subheader}</p>
      </header>

      <section>
        {content}
      </section>

      <section>
        {/* pagination stuff goes here */}
      </section>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    processJson(id: {eq: $id}) {
      header
      subheader
      content
    }
  }
`

export default PostTemplate