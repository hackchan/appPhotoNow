/* eslint-disable multiline-ternary */
import React from 'react'
import { ListOfCategory } from './components/ListOfCategory'
import { ListOfPhotoCard } from './components/ListOfPhotoCard'
import { GlobalStyle } from './styles/GlobalStyle'
import { Logo } from './components/Logo'
import { PhotoCardWithQuery } from './components/container/PhotoCardWithQuery'
export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')
  console.log(detailId)
  return (
    <>
      <GlobalStyle />
      <Logo />
      {detailId ? (
        <PhotoCardWithQuery id={detailId} />
      ) : (
        <>
          <ListOfCategory />
          <ListOfPhotoCard categoryId={2} />
        </>
      )}
    </>
  )
}
