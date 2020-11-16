import styled, { css } from 'styled-components'

// export const Categoria = styled.div`
//   a {
//     display: flex;
//     flex-direction: column;
//     text-align: center;
//     text-decoration: none;
//     width: 75px;
//   }
//   img {
//     border: 1px solid #ddd;
//     box-shadow: 0px 10px 14px rgba(0, 0, 0, 0.2);
//     border-radius: 50%;
//     height: 75px;
//     width: 75px;
//     overflow: hidden;
//     object-fit: cover;
//   }
// `

export const Anchor = styled.a`
  display: flex;
  flex-direction: column;
  text-align: center;
  text-decoration: none;
  width: 75px;
`
export const Image = styled.img`
  border: 1px solid #ddd;
  box-shadow: 0px 10px 14px rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  height: 75px;
  width: 75px;
  overflow: hidden;
  object-fit: cover;
  ${(props) =>
    props.light &&
    css`
      background: linear-gradient(
        -90deg,
        #c1c1c1 0%,
        #f8f8f8 50%,
        #c1c1c1 100%
      );
      background: linear-gradient(
        -90deg,
        #f0f0f0 0%,
        #f8f8f8 50%,
        #f0f0f0 100%
      );
      background-size: 400% 400%;
    `}
`
