// Packages
import React from 'react'
import {PortableText} from '@portabletext/react'

const BioBlock = ({content}) => {
  return (
    <section className='mb-32'>
      <h2>{content.title}</h2>
      <p className='text-primary italic mb-10'>
        {content.subtitle}
      </p>
      <div className='max-w-lg mb-6'>
        {content?.content && <PortableText value={content.content} />}
      </div>
      <ul>
        {content?.contributors?.map(person => (
          <li key={person._key}>
            <strong>{person.name}</strong>: {person.description}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default BioBlock