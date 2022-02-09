import * as React from 'react'
import { Link, graphql } from 'gatsby'
import { slugify } from '../helpers/slugify.js'
import Layout from '../components/Layout'
import Arrow from '../components/Arrow'
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

      <section className='mb-32 w-[40rem]'>
        <h2>Process</h2>
        {data.allProcessJson.nodes.map((post, i) => (
          // also need a slug for linking
          // a better way to handle this maybe?
          <Link to={`/process${slugify(post.header)}`}
                className='relative block p-8 my-4'>
            <h3 className='text-xl font-[620]'>
              <span className='absolute left-0 pt-0.5 inline-block
                               text-base text-primary'>
                {/* Count backwards from the total length
                    There's probably a better way to do this haha */}
                0{data.allProcessJson.nodes.length-1-i}
              </span>
              {post.header}
            </h3>
            <p className='text-sm italic text-gray'>{post.subheader}</p>
            <p className='mt-4'>{post.excerpt}</p>
            <Arrow className='bottom-6 right-4' />
            <span className='absolute h-[75%] w-full z-[-1] bottom-0 left-0
                             bg-bg border-b border-kumquat
                             rotate-[-1deg]' aria-hidden></span>
          </Link>
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
    allProcessJson(sort: {order: DESC, fields: date}) {
      nodes {
        header
        subheader
        excerpt
      }
    }
  }
`

export default IndexPage