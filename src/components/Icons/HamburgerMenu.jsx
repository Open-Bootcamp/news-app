import React from 'react'

export const HamburgerMenu = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='h-full w-full fill-white'
    >
      <line
        x1='3'
        y1='12'
        x2='21'
        y2='12'
      ></line>
      <line
        x1='3'
        y1='6'
        x2='21'
        y2='6'
      ></line>
      <line
        x1='3'
        y1='18'
        x2='21'
        y2='18'
      ></line>
    </svg>
  )
}
