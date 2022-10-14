import React from 'react'
import time from '@/assets/time.svg'
import euro from '@/assets/euro.svg'
import dollar from '@/assets/dollar.svg'
import equals from '@/assets/equals.svg'
import { useNavigate } from 'react-router-dom'

export function Info() {
  const currentDate = new Date().toLocaleString('en-US', {
    dateStyle: 'full'
  })

  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    if (e.target.search.value.length > 0)
      navigate(`/search/${e.target.search.value}`)
  }

  return (
    <div className='grid w-full grid-cols-3 gap-y-2 font-notoSerif text-sm text-black-100 sm:flex sm:justify-between lg:text-base dk:flex dk:w-full dk:justify-between'>
      <p className='col-span-2 self-center sm:col-span-1'>
        {currentDate}
      </p>

      <div className='hidden items-center gap-2 dk:flex'>
        <img
          src={dollar}
          alt='dollar symbol'
        />
        <span className='rounded-2xl border border-black-25 px-3 py-1.5'>
          1.00
        </span>
        <img
          src={equals}
          alt='equals symbol'
        />
        <img
          src={euro}
          alt='euro symbol'
        />
        <span className='rounded-2xl border border-black-25 px-3 py-1.5'>
          0.98
        </span>
      </div>

      <div className='flex items-center justify-end gap-2 sm:justify-center'>
        <img
          src={time}
          alt='time symbol'
          className='h-6 w-6 md:h-8 md:w-8'
        />
        <p>
          <span className='hidden sm:inline-flex'>Trujillo:</span> 28
          °C
        </p>
      </div>

      <form
        className='col-span-full flex w-full gap-4 justify-self-center sm:col-auto sm:w-auto'
        onSubmit={handleSearch}
      >
        <input
          name='search'
          className='w-full rounded-2xl border border-black-25 py-2 px-4'
          placeholder='Search by...'
        />
        <button
          type='submit'
          className='rounded-2xl bg-secondary py-2 px-4 font-bold text-white shadow-md '
        >
          Search
        </button>
      </form>
    </div>
  )
}

export default Info
