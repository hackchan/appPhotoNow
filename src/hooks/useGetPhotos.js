// import { useQuery } from '@apollo/react-hooks'
import { gql, useQuery } from '@apollo/client'

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
export const useGetPhotos = (categoryId) => {
  console.log('categoryId (H):', categoryId)
  const { loading, error, data } = useQuery(GET_PHOTOS, {
    variables: { categoryId: categoryId }
  })
  console.log('Loading H', loading)
  console.log('Data H', data)
  console.log('error H', error)
  return { loading, error, data }
}
