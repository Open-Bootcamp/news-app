import React from 'react'

const PrincipalCard = ({ image, title, description, url }) => {
  return (
    <article className=' mb-4 max-w-7xl border-b border-b-black/25 py-4 md:mx-auto md:flex md:items-center md:gap-8 md:border-b-0 md:px-4'>
      <img
        className='mb-4 h-auto w-full max-w-2xl md:mb-0 md:w-3/5 '
        src={image}
        alt='News Image'
      />
      <div>
        <a
          href={url}
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2 className='mb-4 text-2xl font-bold md:mb-6 md:text-3xl lg:text-4xl  '>
            {title}
          </h2>
        </a>
        <p className='text-base leading-5 text-black/75 md:text-lg'>
          {description}
        </p>
      </div>
    </article>
  )
}

export default PrincipalCard
