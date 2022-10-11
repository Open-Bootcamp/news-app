import React from 'react'
import github from '@/assets/github.svg'
import linkedin from '@/assets/linkedin.svg'
import twitter from '@/assets/twitter.svg'
import openbootcamp from '@/assets/openbootcamp.svg'

const socials = [
  {
    image: github,
    alt: 'github icon',
    url: 'https://github.com/Open-Bootcamp/news-app'
  },
  {
    image: linkedin,
    alt: 'linkedin icon',
    url: 'https://www.linkedin.com/school/openbootcamp-escuela/'
  },
  {
    image: twitter,
    alt: 'twitter icon',
    url: 'https://twitter.com/Open_Bootcamp'
  }
]

export function Footer() {
  return (
    <footer className='flex flex-col w-full items-center justify-center gap-4 bg-primary p-8 text-white'>
      <div className='flex gap-8'>
        {socials.map((social, index) => (
          <a
            key={`social-${index}}`}
            href={social.url}
            target='_blank'
          >
            <img
              className='h-6 w-6 md:h-8 md:w-8 hover:scale-110 transition-transform'
              src={social.image}
              alt={social.alt}
            />
          </a>
        ))}
      </div>
      <p>OpenWeekApps project developed by</p>
      <div className='flex items-center justify-center gap-4'>
        <a
          href='https://open-bootcamp.com/'
          target='_blank'
        >
          <img
            src={openbootcamp}
            alt='openbootcamp logo'
            className='hover:scale-110 transition-transform'
          />
        </a>
        <span>community</span>
      </div>
      <p>Copyright © 2022 - OpenWeekApps</p>
    </footer>
  )
}

export default Footer
