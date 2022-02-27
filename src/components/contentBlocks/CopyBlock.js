// Packages
import React from 'react'
import {PortableText} from '@portabletext/react'

const CopyBlock = ({content}) => {
  return (
    <section className='mb-32'>
      {content?.title &&
        <h2
          className={!content?.subtitle ? 'mb-10' : ''}
        >{content.title}</h2>
      }
      {content?.subtitle &&
        <p className='text-primary italic mb-10'>{content?.subtitle}</p>
      }
      <div className='max-w-lg mb-6'>
        {content?.content && <PortableText value={content.content} />}
      </div>
    </section>
  )
}

export default CopyBlock