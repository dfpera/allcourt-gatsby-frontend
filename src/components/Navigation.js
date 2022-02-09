import * as React from 'react'
import { Link } from 'gatsby'
import Logo from '../images/svg/logo.inline.svg'

const Navigation = () => {
  const navLinks = [
    ['/', 'Project Brief'],
    ['/', 'The Squad'],
    ['/', 'Process']
  ]

  return (
    <nav>
      <Logo className='w-20 mb-6' />
      <ul>
        {navLinks.map(link => (
          <li className='mb-2' key={link[1]}>
            <Link to={link[0]}>{link[1]}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation