import React from 'react'
import { useNavigate } from 'react-router-dom'
import FirstPage from '../Icons/FirstPage'
import LastPage from '../Icons/LastPage'
import NextPage from '../Icons/NextPage'
import PreviousPage from '../Icons/PreviousPage'
import PaginationNumber from './PaginationNumber'
import PaginationOption from './PaginationOption'

const PaginationContainer = ({ data, category }) => {
  const navigate = useNavigate()
  const { currentPage, totalPages } = data

  const handlePage = (page) => {
    if (page === currentPage) return
    if (page < 1 || page > totalPages) return
    if (page === 1) return navigate(`/${category}`)
    navigate(`/${category}/${page}`)
  }

  const pagination = (currentPage, totalPages) => {
    const pages = []
    if (totalPages <= 3) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      if (currentPage === 1) {
        pages.push(1, 2, 3)
      } else if (currentPage === totalPages) {
        pages.push(totalPages - 2, totalPages - 1, totalPages)
      } else {
        pages.push(currentPage - 1, currentPage, currentPage + 1)
      }
    }
    return pages
  }

  return (
    <section className='my-4 flex w-full items-center justify-center gap-2 overflow-hidden'>
      <PaginationOption handleClick={() => handlePage(1)}>
        <FirstPage />
      </PaginationOption>
      <PaginationOption
        className='hidden sm:flex'
        handleClick={() => handlePage(currentPage - 1)}
      >
        <PreviousPage />
      </PaginationOption>

      {pagination(currentPage, totalPages).map((page) => (
        <PaginationNumber
          key={page}
          handleClick={() => handlePage(page)}
          isActive={page === currentPage}
        >
          {page}
        </PaginationNumber>
      ))}

      <PaginationOption
        className='hidden sm:flex'
        handleClick={() => handlePage(currentPage + 1)}
      >
        <NextPage />
      </PaginationOption>
      <PaginationOption handleClick={() => handlePage(totalPages)}>
        <LastPage />
      </PaginationOption>
    </section>
  )
}

export default PaginationContainer
