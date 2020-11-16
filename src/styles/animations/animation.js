import { css, keyframes } from 'styled-components'

const fadeInKeyFrames = keyframes`
   from {
     filter: blur(5px);
     opacity: 0;
   }
   to {
     filter: blur(0);
     opacity: 1; 
   }
`
// const appearFromTopKeyFrames = (from, to) => {
//   return keyframes`
//   from {
//      top:${from};
//   }
//   to {
//     top:${to}
//   }`
// }

const appearFromTopRebotingKeyFrames = keyframes`
0% {
    top: -70px;
  }

  25% {
    top: 0px;
  }

  40%{
    top: 10px
  }

  65%{
    top: -3px
  }

  100% {
    top: 0px;
  }
`

export const appearFromTop = ({ time = '1s', type = 'ease', from, to } = {}) =>
  css`
    animation: ${time} ${appearFromTopRebotingKeyFrames} ${type} forwards;
  `
export const fadeIn = ({ time = '1s', type = 'ease' } = {}) =>
  css`
    animation: ${time} ${fadeInKeyFrames} ${type};
  `
