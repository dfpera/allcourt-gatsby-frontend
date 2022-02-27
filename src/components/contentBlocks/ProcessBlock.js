// Packages
import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { generatePath } from '../../helpers/generatePath'

// Components
import Arrow from '../Arrow'

const ProcessBlock = ({content}) => {
  const allProcessPosts = useStaticQuery(graphql`
    query {
      allSanityProcess(
        sort: {order: DESC, fields: date}
      ) {
        nodes {
          id
          title
          subtitle
          excerpt
          slug {
            current
          }
        }
      }
    }
  `)

  console.log(allProcessPosts)

  return (
    <section className='mb-32 w-[40rem]'>
      <h2>Process</h2>
      {allProcessPosts.allSanityProcess.nodes.map((post, i) => (
        // also need a slug for linking
        // a better way to handle this maybe?
        <Link
          to={generatePath('process', post.slug.current)}
          className='relative block p-8 my-4'
          key={post.id}
        >
          <h3 className='text-xl font-[620]'>
            <span className='absolute left-0 pt-0.5 inline-block
                              text-base text-primary'
                              aria-hidden >
              {/* Count backwards from the total length
                There's probably a better way to do this haha */}
              0{allProcessPosts.allSanityProcess.nodes.length-1-i}
            </span>
            {post.title}
          </h3>
          <p className='text-sm italic text-gray'>{post.subtitle}</p>
          <p className='mt-4'>{post.excerpt}</p>
          <Arrow className='bottom-6 right-4' />

          {/* Container for the tilted background */}
          <span className='absolute h-[75%] w-full z-[-1] bottom-0 left-0
                            bg-bg border-b border-kumquat
                            rotate-[-1deg]' aria-hidden></span>
        </Link>
      ))}
    </section>
  )
}

export default ProcessBlock