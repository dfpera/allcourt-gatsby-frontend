import * as React from 'react'
import { Helmet } from 'react-helmet'
import Navigation from '../components/Navigation.js'
import Footer from '../components/Footer.js'

const Layout = ({children}) => {

  return (
    <>
      <Helmet>
        <body className='border-t-8 border-secondary
                         px-8
                         min-h-screen' />
      </Helmet>

      <div className='relative max-w-5xl mx-[auto] mt-32'>
        <div className='fixed'>
          <Navigation />
        </div>

        <main className='relative ml-56'>
          {children}
        </main>

        <Footer />
      </div>
    </>
  )
}

export default Layout