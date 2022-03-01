import React from 'react'
import { Link } from 'gatsby'
import Logo from '../images/svg/logo.inline.svg'

const Navigation = () => {
  const navLinks = [
    ['/', 'Project Brief'],
    ['/', 'The Squad'],
    ['/', 'Process']
  ]

  return (
    <>
      <Logo className='min-w-[5rem] w-20 mb-6' />

      <ul className='flex flex-wrap justify-evenly lg:block'>
        {navLinks.map(link => (
          <li key={link[1]}
              className='mb-2 px-5 lg:pl-3 lg:pr-5'>
            <Link to={link[0]}>{link[1]}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Navigation