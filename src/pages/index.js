import * as React from 'react'
import { graphql } from 'gatsby'
import { slugify } from '../helpers/slugify.js'
import Layout from '../components/Layout'
import TennisCourtSvg from '../images/svg/tenniscourt.inline.svg'

const IndexPage = ({data}) => {

  return (
    <Layout>

      <header className='relative mb-32'>
        <h1>{data.dataJson.header}</h1>
        <p className='text-primary italic mb-10'>
          {data.dataJson.subheader}
        </p>
        <p className='max-w-lg'>
          {data.dataJson.content}
        </p>
        <TennisCourtSvg className='absolute right-0 top-[-3rem] w-72' />
      </header>

      <section className='mb-32'>
        <h2>{data.bioJson.header}</h2>
        <p className='text-primary italic mb-10'>
          {data.bioJson.subheader}
        </p>
        <p className='max-w-lg mb-6'>
          {data.bioJson.content}
        </p>
        <ul>
          {data.bioJson.contributors.map(person => (
            <li key={person.name}>
              <strong>{person.name}</strong>: {person.description}
            </li>
          ))}
        </ul>
      </section>

      <section className='mb-32'>
        <h2>Process</h2>
        {data.allProcessJson.nodes.map((post, i) => (
          // also need a slug for linking
          <article className='p-8'>
            <h3 className='font-[720]'>
              <span className='absolute left-0 pt-0.5 inline-block
                               text-base text-primary italic'>
                0{i}
              </span>
              {post.header}
            </h3>
            <p className='mb-4'>{post.subheader}</p>
            <p>{post.excerpt}</p>
            process{slugify(post.header)}
          </article>
        ))}
      </section>

    </Layout>
  )
}

export const data = graphql`
  query {
    dataJson {
      header
      subheader
      content
    }
    bioJson {
      header
      subheader
      content
      contributors {
        name
        description
      }
    }
    allProcessJson {
      nodes {
        header
        subheader
        excerpt
      }
    }
  }
`

export default IndexPage