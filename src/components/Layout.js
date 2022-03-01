import React from 'react'
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

      <div className='relative max-w-5xl mx-[auto] mt-8 lg:mt-32'>
        <nav className='flex flex-auto items-center justify-between
                        lg:block lg:fixed' >
          <Navigation />
        </nav>

        <main className='relative lg:ml-56'>
          {children}
        </main>

        <Footer className='pt-10 pb-3 -mb-[3.5rem] text-right' />
      </div>

      {/* <div className='px-64 -mx-8 mt-20
                      border-b-[5rem] border-bg' >
      </div> */}
    </>
  )
}

export default Layout