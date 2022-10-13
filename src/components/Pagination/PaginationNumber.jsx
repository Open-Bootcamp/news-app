import React from 'react'

const PaginationNumber = ({ children, handleClick, isActive }) => {
  const active = isActive
    ? 'bg-primary text-white'
    : 'bg-white text-black-50'
  return (
    <button
      className={`duration-250 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-primary p-4 text-base transition-colors ease-in-out hover:bg-primary hover:text-white md:text-xl ${active}`}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}

export default PaginationNumber
