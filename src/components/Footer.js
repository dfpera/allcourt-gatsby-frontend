import React from 'react'

const Footer = () => {
  return (
    <footer className='
      pt-10
      pb-3
      -mb-[3.5rem]
      text-right
    '>
      &copy; {new Date().getFullYear()} Dubu Studios Ltd.
    </footer>
  )
}

export default Footer