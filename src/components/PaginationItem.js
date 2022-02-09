import * as React from 'react'
import { Link } from 'gatsby'
import Arrow from './Arrow'

const PaginationItem = ({ entry: {index, header, subheader, slug}, direction, className }) => {
  // switch(String(direction)) {
  //   case 'left':
  // }
  console.log(direction)

  return (
    <Link to={slug} className={`relative block px-6 ${className}`}>
      <div className='inline-block relative pl-8'>
        <span className='absolute left-0 text-primary' aria-hidden>0{index}</span>
        <p className='font-bold tracking-tighter'>{header}</p>
        <p className='text-sm italic text-gray'>{subheader}</p>
      </div>
      <Arrow className='top-0' direction={direction ?? ''} />
    </Link>
  )
}

export default PaginationItem