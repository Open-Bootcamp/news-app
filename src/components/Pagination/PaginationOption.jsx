import React from 'react'

const PaginationOption = ({ children, handleClick }) => {
  return (
    <button
      className=''
      onClick={handleClick}
    >
      {children}
    </button>
  )
}

export default PaginationOption
