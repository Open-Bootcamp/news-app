import React from 'react'
import { useSearchParams } from 'react-router-dom'

const Search = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get('q'))
  return <div>Search</div>
}

export default Search
