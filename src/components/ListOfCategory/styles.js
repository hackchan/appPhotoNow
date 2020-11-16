import styled, { css } from 'styled-components'
import { appearFromTop } from '../../styles/animations/animation'
export const List = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;
  &::-webkit-scrollbar {
    display: none;
  }
  ${(props) =>
    props.fixed &&
    css`
      ${appearFromTop({ time: '300ms', from: '-25%', to: '-20px' })}
      background: #fff;
      border-radius: 60px;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
      position: fixed;
      left: 0;
      right: 0;
      top: -20px;
      z-index: 1;
      max-width: 400px;
      margin: 0 auto;
      padding: 5px;
      transform: scale(0.5);
    `}
`

export const Item = styled.li`
  padding: 0 8px;
`
