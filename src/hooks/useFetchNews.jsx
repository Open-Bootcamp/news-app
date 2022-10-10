import { useEffect, useState } from 'react'

const DOCUMENTS_PER_PAGE = 13
const API_URL = 'https://news-app-api.onrender.com/api/news'

const createQuery = (category, page, search) => {
  let query = `?documentsPerPage=${DOCUMENTS_PER_PAGE}&currentPage=${page}`
  if (category) {
    query += `&category=${category}`
  }
  if (search) {
    query += `&search=${search}`
  }
  return query
}

export const useFetchNews = (
  page = 1,
  category,
  search = undefined
) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const query = createQuery(category, page, search)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await fetch(`${API_URL}${query}`)
        if (!response.ok) {
          throw new Error('Error fetching data')
        }
        const data = await response.json()
        const { articles, meta } = data
        const newsData = articles.map(
          ({ _id, title, description, url, urlToImage }) => {
            return {
              id: _id,
              title,
              description,
              url,
              image: urlToImage
            }
          }
        )
        setData({ newsData, meta })
      } catch (error) {
        console.error(error)
        setData(null)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [category, page, search])
  return { data, loading }
}
