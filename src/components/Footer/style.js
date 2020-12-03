import styled, { css } from 'styled-components'
import { FaTwitter, FaYoutube } from 'react-icons/fa'

export const IconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const IconTwitter = styled(FaTwitter)`
  color: white;
  margin: 5px;
`
export const IconYoutube = styled(FaYoutube)`
  color: white;
  margin: 5px;
`

export const FooterCode = styled.footer`
  display: flex;
  background: rgba(2, 2, 2, 0.8);
  justify-content: center;
  flex-direction: column;
  color: white;
  padding: 10px;
  text-align: center;
  ${(props) =>
    props.fixed &&
    css`
      background: red;
    `}
`
