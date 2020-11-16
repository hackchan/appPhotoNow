/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React, { useEffect, useState } from 'react'
import { Category } from '../Category'
import { CategorySkeleton } from '../CategorySkeleton'
import { List, Item } from './styles'
import axios from 'axios'
// import { categories as mockCategories } from '../../../api/db/db.json'

const useCategoriesData = () => {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true)
        const { data } = await axios({
          url: 'https://dgotv2-server.vercel.app/categories',
          method: 'GET'
        })

        setCategories(data)
        setLoading(false)
      } catch (error) {
        setLoading(false)
        console.log(error)
      }
    }
    fetchCategories()
  }, [])

  return { categories, loading }
}
export const ListOfCategory = () => {
  const [showFixed, setShowFixed] = useState(false)
  const { categories, loading } = useCategoriesData()
  useEffect(() => {
    const onScroll = (e) => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
      // setShowFixed(newShowFixed)
      console.log('render 1')
      // showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)
    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])
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
  const renderList = (fixed) => (
    <List fixed={fixed}>
      {loading
        ? [1, 2, 3, 4, 5, 6].map((id) => (
            <Item key={id}>
              <CategorySkeleton light={false} />
            </Item>
          ))
        : categories.map((category) => (
            <Item key={category.id}>
              <Category {...category} />
            </Item>
          ))}
    </List>
  )

  // if (loading) {
  //   return 'Cargando...'
  // }
  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}
