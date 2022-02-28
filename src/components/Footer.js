import React from 'react'

const Footer = ({ className }) => {
  return (
    <footer className={className ?? ''}>
      &copy; {new Date().getFullYear()} Dubu Studios Ltd.
    </footer>
  )
}

export default Footer