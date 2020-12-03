import React from 'react'
import { FooterCode, IconContainer, IconTwitter, IconYoutube } from './style'
export const Footer = ({ fixed }) => {
  console.log('fixed:', fixed)
  return (
    <FooterCode fixed={fixed}>
      <IconContainer>
        <a href='https://twitter.com/hackchan77'>
          <IconTwitter size='24px' />
        </a>
        <IconYoutube size='24px' />
      </IconContainer>
    </FooterCode>
  )
}
