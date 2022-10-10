import React from 'react'
import { useParams } from 'react-router-dom'
import NewsCard from '../components/Cards/NewsCard'
import NewsCardContainer from '../components/Cards/NewsCardContainer'
import { PageTitle } from '../components/Cards/PageTitle'
import PrincipalCard from '../components/Cards/PrincipalCard'
import Loader from '../components/loader/Loader'
import PaginationContainer from '../components/Pagination/PaginationContainer'
import { useFetchNews } from '../hooks/useFetchNews'

const CATEGORY = 'health'

const Health = () => {
  let { page } = useParams()
  page ??= 1
  const { data, loading } = useFetchNews({ page, category: CATEGORY })
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
        <PageTitle>Trending</PageTitle>
        <PrincipalCard
          title={principalNew.title}
          description={principalNew.description}
          image={principalNew.image}
          url={principalNew.url}
        />
        <NewsCardContainer>
          {news.map(({ id, title, description, image, url }) => (
            <NewsCard
              key={id}
              title={title}
              description={description}
              image={image}
              url={url}
            />
          ))}
        </NewsCardContainer>
      </main>
      <PaginationContainer
        data={data.meta}
        category={CATEGORY}
      />
    </>
  )
}

export default Health
