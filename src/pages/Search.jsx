import React from 'react'
import { useParams } from 'react-router-dom'
import NewsCard from '../components/Cards/NewsCard'
import Loader from '../components/loader/Loader'
import PaginationContainer from '../components/Pagination/PaginationContainer'
import { useFetchNews } from '../hooks/useFetchNews'

const CATEGORY = 'search'
const DOCUMENTS_PER_PAGE = 12

const Search = () => {
  let { page, search } = useParams()
  page ??= 1
  const { data, loading } = useFetchNews({
    page,
    search,
    documentsPerPage: DOCUMENTS_PER_PAGE
  })
  let news = []
  if (loading) return <Loader />
  if (!loading && data) {
    news = data.newsData
  }
  return (
    <>
      <main className='m-4 font-lora  md:mx-auto md:w-11/12'>
        <h3 className='mb-4 w-max bg-primary px-4 py-2 text-lg font-semibold text-white sm:text-xl md:ml-4 md:px-6  md:py-3 lg:px-8 lg:text-2xl'>
          Results: {search}
        </h3>

        <section className='grid grid-cols-auto-fit md:border-y md:border-y-black-25 '>
          {news.map(({ id, title, description, image, url }) => (
            <NewsCard
              key={id}
              title={title}
              description={description}
              image={image}
              url={url}
            />
          ))}
        </section>
      </main>
      <PaginationContainer
        data={data.meta}
        category={CATEGORY.concat(`/${search}`)}
      />
    </>
  )
}

export default Search
