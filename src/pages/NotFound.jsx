import React from 'react'

const NotFound = () => {
  return (
    <main className='flex w-full flex-col items-center justify-center  gap-4 p-4 font-lora md:m-4 md:mx-auto md:w-max md:max-w-2/3 md:flex-row'>
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
    </main>
  )
}

export default NotFound
