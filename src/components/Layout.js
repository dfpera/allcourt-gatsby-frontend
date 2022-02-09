import * as React from 'react'
import { Helmet } from 'react-helmet'
import Navigation from '../components/Navigation.js'
import Footer from '../components/Footer.js'

const Layout = ({children}) => {

  return (
    <>
      <Helmet>
        <body className='px-8 relative min-h-screen
                         border-b-[5rem] border-bg' />
      </Helmet>

      {/* Top orange border thing for aesthetics */}
      <div className='border-t-8 border-secondary fixed top-0 left-0 right-0 z-10' aria-hidden></div>

      <div className='relative max-w-5xl mx-[auto] pt-32'>
        <div className='fixed'>
          <Navigation />
        </div>

        <main className='relative ml-56'>
          {children}
        </main>

        <Footer />
      </div>

      {/* <div className='border-b-[5rem] ' aria-hidden></div> */}
    </>
  )
}

export default Layout