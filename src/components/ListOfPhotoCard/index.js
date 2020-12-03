import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { gql, useQuery } from '@apollo/client'
// import { useGetPhotos } from '../../hooks/useGetPhotos'
const GET_PHOTOS = gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`

export const ListOfPhotoCard = (categoryId) => {
  console.log(categoryId)
  // const [loading, data, error] = useGetPhotos(categoryId.categoryId)
  const { loading, error, data } = useQuery(GET_PHOTOS, {
    variables: { categoryId: categoryId.categoryId }
  })
  console.log('loading:', loading)
  console.log('data:', data)
  console.log('error:', error)
  if (loading) return '...loading'
  if (error) return <p>Error</p>
  return (
    <ul>
      {data.photos.map((photoCard, id) => (
        <PhotoCard key={id} {...photoCard} />
      ))}
    </ul>
  )
}
