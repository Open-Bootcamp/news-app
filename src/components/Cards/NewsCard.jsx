import React from 'react'

const NewsCard = ({ image, title, description, url }) => {
  return (
    <article className='mb-4 max-w-7xl flex flex-col border-b border-b-black-25 pb-4 sm:m-4 sm:border-b-0'>
      <a
        href={url}
        target='_blank'
        rel='noopener noreferrer'
      >
        <img
          className='mb-4 w-full h-full md:h-60 lg:h-72 max-w-2xl object-cover'
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
          <h2 className='mb-4 text-2xl font-bold   '>{title}</h2>
        </a>
        <p className='text-md text-black/75 leading-5'>
          {description}
        </p>
      </div>
    </article>
  )
}

export default NewsCard
