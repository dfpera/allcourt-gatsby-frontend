import React from 'react'
import { Link } from 'gatsby'
import Arrow from './Arrow'

const PaginationItem = ({
  entry: {
    index,
    entryNum,
    title,
    subtitle,
    path
  },
  direction,
  className
}) => {

  return (
    <Link to={path} className={`relative block px-6 ${className}`}>
      <div className='inline-block relative pl-8'>
        <span className='absolute left-0 text-primary' aria-hidden>
          {entryNum < 10 ? `0${entryNum}` : entryNum }
        </span>
        <p className='font-bold tracking-tighter'>{title}</p>
        <p className='text-sm italic text-gray'>{subtitle}</p>
      </div>
      <Arrow className='top-0' direction={direction ?? ''} />
    </Link>
  )
}

export default PaginationItem