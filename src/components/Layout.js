import * as React from 'react'
import Navigation from '../components/Navigation.js'
import Footer from '../components/Footer.js'

const Layout = ({children}) => {

  return (
    <div className='border-t-4 border-papaya px-8
                    max-w-4xl mx-[auto]'>

      <div className='fixed'>
        <Navigation />
      </div>

      <main className='ml-40'>
        {children}
      </main>

      <Footer />

    </div>
  )
}

export default Layout