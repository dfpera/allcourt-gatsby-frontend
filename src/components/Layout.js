import * as React from 'react'
import { Helmet } from 'react-helmet'
import Navigation from '../components/Navigation.js'
import Footer from '../components/Footer.js'

const Layout = ({children}) => {

  return (
    <>
      <Helmet>
        <body className='border-t-8 border-secondary px-8' />
      </Helmet>

      <div className='max-w-4xl mx-[auto] mt-32'>
        <div className='fixed'>
          <Navigation />
        </div>

        <main className='ml-40'>
          {children}
        </main>

        <Footer />
      </div>
    </>
  )
}

export default Layout