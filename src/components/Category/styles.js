import styled from 'styled-components'

export const Categoria = styled.div`
  a {
    display: flex;
    flex-direction: column;
    text-align: center;
    text-decoration: none;
    width: 75px;
  }
  img {
    border: 1px solid #ddd;
    box-shadow: 0px 10px 14px rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    height: 75px;
    width: 75px;
    overflow: hidden;
    object-fit: cover;
  }
`

export const Anchor = styled.a`
  display: flex;
  flex-direction: column;
  text-align: center;
  text-decoration: none;
  width: 75px;
`
export const Image = styled.img`
  border: 1px solid red;
  box-shadow: 0px 10px 14px rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  height: 75px;
  width: 75px;
  overflow: hidden;
  object-fit: cover;
`