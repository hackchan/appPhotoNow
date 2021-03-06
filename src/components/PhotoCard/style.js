import styled from 'styled-components'
import { fadeIn } from '../../styles/animations/animation'
import { MdFavorite } from 'react-icons/md'

export const LikeIcon = styled(MdFavorite)`
  color: #ff277a;
  ${fadeIn({ time: '250ms', type: 'ease-in' })}
`

export const ImgWrapper = styled.div`
  border-radius: 10px;
  display: block;
  height: 0;
  overflow: hidden;
  padding: 56.25% 0 0 0;
  position: relative;
  width: 100%;
`
export const Img = styled.img`
  box-shadow: 0 10px 14px rgba(0, 0, 0, 0.2);
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  object-fit: cover;
  ${fadeIn({ time: '1s' })}
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  padding-top: 8px;
  & svg {
    margin-right: 4px;
  }
`

export const Article = styled.article`
  min-height: 200px;
`
