import React from 'react'
import { Categoria } from './styles'
const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg'

export const Category = ({ cover = DEFAULT_IMAGE, path, emoji = '?' }) => (
  <Categoria>
    <a href={path}>
      <img src={cover} />
      {emoji}
    </a>
  </Categoria>
)
