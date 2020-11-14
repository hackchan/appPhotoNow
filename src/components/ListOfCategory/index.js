import React, { useEffect, useState } from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'
import axios from 'axios'
// import { categories as mockCategories } from '../../../api/db/db.json'
export const ListOfCategory = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data, status } = await axios({
          url: 'https://dgotv2-server.vercel.app/categories',
          method: 'GET'
        })
        console.log(status)
        setCategories(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchCategories()
  }, [])

  // useEffect(() => {
  //   const fecthCategories = async () => {
  //     const response = await window.fetch(
  //       'https://dgotv2-server.vercel.app/categories'
  //     )
  //     const data = await response.json()
  //     setCategories(data)
  //   }
  //   fecthCategories()
  // }, [])

  // useEffect(function () {
  //   window
  //     .fetch('https://dgotv2-server.vercel.app/categories')
  //     .then((res) => res.json())
  //     .then((response) => {
  //       setCategories(response)
  //     })
  // }, [])

  return (
    <List>
      {categories.map((category) => (
        <Item key={category.id}>
          <Category {...category} />
        </Item>
      ))}
    </List>
  )
}
