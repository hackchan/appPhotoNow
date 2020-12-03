import { useState, useEffect } from 'react'
import axios from 'axios'

export const useFetch = (url, method) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const { data } = await axios({ url, method })
        setData(data)
        setLoading(false)
      } catch (error) {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return [data, loading]
}
