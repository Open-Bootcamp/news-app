import React from 'react'

const NotFound = () => {
  return (
    <section className='flex h-full w-full flex-col gap-4 justify-self-center p-4 font-lora md:my-auto md:mx-auto md:w-max md:max-w-2/3 md:flex-row'>
      <h1 className='w-full border-b-2 border-primary p-4 text-center font-inherit text-9xl font-extrabold md:w-1/2 md:border-b-0 md:border-r-2 md:p-0'>
        404
      </h1>
      <div className='font-inherit md:w-1/2'>
        <h2
          className=' text-center font-inherit text-4xl font-semibold 
        '
        >
          SORRY!
        </h2>
        <p className=' flex-wrap font-notoSerif text-xl'>
          The page you are looking for does not exist.
        </p>
      </div>
    </section>
  )
}

export default NotFound
