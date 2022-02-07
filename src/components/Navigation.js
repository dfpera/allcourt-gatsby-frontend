import * as React from 'react'
import { Link } from 'gatsby'
import Logo from '../images/svg/logo.inline.svg'

const Navigation = () => {

  return (
    <nav>
      <Logo className='w-20' />
      <ul>
        <li><Link to='/'>Project Brief</Link></li>
        <li><Link to='/'>The Squad</Link></li>
        <li><Link to='/'>Process</Link></li>
      </ul>
    </nav>
  )
}

export default Navigation