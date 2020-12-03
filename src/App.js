import React from 'react'
import { ListOfCategory } from './components/ListOfCategory'
import { ListOfPhotoCard } from './components/ListOfPhotoCard'
import { GlobalStyle } from './styles/GlobalStyle'
import { Logo } from './components/Logo'
import { Footer } from './components/Footer'
export const App = () => (
  <>
    <Logo />
    <GlobalStyle />
    <ListOfCategory />
    <ListOfPhotoCard categoryId={2} />
    <Footer fixed={false} />
  </>
)
