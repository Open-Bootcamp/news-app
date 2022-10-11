import React from 'react'
import { useParams } from 'react-router-dom'
import NewsCard from '../components/Cards/NewsCard'
import NewsCardContainer from '../components/Cards/NewsCardContainer'
import { PageTitle } from '../components/Cards/PageTitle'
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
        <PageTitle>Results: {search}</PageTitle>

        <NewsCardContainer>
          {news.length === 0 ? (
            <h1 className='my-4 text-center font-lora text-2xl'>
              No results found
            </h1>
          ) : (
            news.map(({ id, title, description, image, url }) => (
              <NewsCard
                key={id}
                title={title}
                description={description}
                image={image}
                url={url}
              />
            ))
          )}
        </NewsCardContainer>
      </main>
      <PaginationContainer
        data={data.meta}
        category={CATEGORY.concat(`/${search}`)}
      />
    </>
  )
}

export default Search
