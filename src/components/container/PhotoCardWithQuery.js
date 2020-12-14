import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { gql, useQuery } from '@apollo/client'

const GET_PHOTO = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`
export const PhotoCardWithQuery = ({ id }) => {
  console.log('la I D: ', id)
  const { loading, error, data } = useQuery(GET_PHOTO, {
    variables: { id }
  })
  console.log('La data Homer>>>', data)
  const { photo = {} } = data
  if (loading) return '...loading'
  if (error) return <p>Error</p>
  return <PhotoCard {...photo} />
}
