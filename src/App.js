import React from 'react'
import { ListOfCategory } from './components/ListOfCategory'
import { ListOfPhotoCard } from './components/ListOfPhotoCard'
import { GlobalStyle } from './styles/GlobalStyle'
export const App = () => (
  <>
    <GlobalStyle />
    <ListOfCategory />
    <ListOfPhotoCard />
  </>
)
