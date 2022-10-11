import React from 'react'

const PrincipalCard = ({ image, title, description, url }) => {
  return (
    <article className=' mb-4 w-full border-b border-b-black-25 py-4 md:mx-auto md:flex md:items-center md:gap-8 md:border-b-0 md:px-4'>
      <a
        href={url}
        target='_blank'
        rel='noopener noreferrer'
        className='h-full w-full'
      >
        <img
          className='mb-4 h-full w-full object-cover md:mb-0 '
          src={image}
          alt='News Image'
        />
      </a>
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
        <p className='text-black/75 text-base leading-5 md:text-lg'>
          {description}
        </p>
      </div>
    </article>
  )
}

export default PrincipalCard
