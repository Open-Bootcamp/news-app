import React from 'react'

const NewsCard = ({ image, title, description, url }) => {
  return (
    <article className='mb-4 max-w-7xl border-b border-b-black-25 pb-4 md:m-4 md:border-b-0 '>
      <a
        href={url}
        target='_blank'
        rel='noopener noreferrer'
      >
        <img
          className='mb-4 h-auto w-full max-w-2xl '
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
