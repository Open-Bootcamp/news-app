import React from 'react'

const NewsCardContainer = ({ children }) => {
  return (
    <section className='grid sm:grid-cols-auto-fit flex-1 md:border-y md:border-y-black-25'>
      {children}
    </section>
  )
}

export default NewsCardContainer
