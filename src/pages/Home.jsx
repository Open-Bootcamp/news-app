import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import NewsCard from '../components/Cards/NewsCard'
import PrincipalCard from '../components/Cards/PrincipalCard'
import Loader from '../components/loader/Loader'
import PaginationContainer from '../components/Pagination/PaginationContainer'
import { useFetchNews } from '../hooks/useFetchNews'

const CATEGORY = 'general'

const Home = () => {
  let { page } = useParams()
  page ??= 1
  const { data, loading } = useFetchNews(page)
  let principalNew = [],
    news = []
  if (loading) return <Loader />
  if (!loading && data) {
    principalNew = data.newsData[0]
    news = data.newsData.slice(1)
  }
  return (
    <>
      <main className='m-4 font-lora  md:mx-auto md:w-11/12'>
        <h3 className='mb-4 w-max bg-primary px-4 py-2 text-lg font-semibold text-white sm:text-xl md:ml-4 md:px-6  md:py-3 lg:px-8 lg:text-2xl'>
          Trending
        </h3>
        <PrincipalCard
          title={principalNew.title}
          description={principalNew.description}
          image={principalNew.image}
          url={principalNew.url}
        />
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
        category={CATEGORY}
      />
    </>
  )
}

export default Home
