import styled from 'styled-components'

export const List = styled.ul`
  display: flex;
  background-color: red;
  overflow: scroll;
  width: 100%;
  &::-webkit-scrollbar {
    display: none;
  }
`

export const Item = styled.li`
  background-color: pink;
  padding: 0 8px;
`
