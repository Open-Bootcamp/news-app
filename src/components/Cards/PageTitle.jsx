import React from 'react'

export const PageTitle = ({ children }) => {
  return (
    <h3 className='mb-4 w-max bg-primary px-4 py-2 text-lg font-semibold text-white sm:text-xl md:ml-4 md:px-6  md:py-3 lg:px-8 lg:text-2xl'>
      {children}
    </h3>
  )
}
