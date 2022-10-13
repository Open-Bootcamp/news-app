import React from 'react'

const PaginationOption = ({
  children,
  handleClick,
  className = ''
}) => {
  return (
    <button
      className={className}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}

export default PaginationOption
