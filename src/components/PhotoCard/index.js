import React, { useRef, useEffect, useState } from 'react'
import { ImgWrapper, Img, Button, Article } from './style'
import { MdFavoriteBorder } from 'react-icons/md'
const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const element = useRef(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const loadPollyFill = async () => {
      try {
        await import('intersection-observer')
      } catch (error) {
        console.log(error)
      }
    }
    if (!window.IntersectionObserver) loadPollyFill()
    const observer = new window.IntersectionObserver(
      function (entries) {
        const { isIntersecting } = entries[0]
        if (isIntersecting) {
          console.log(isIntersecting)
          setShow(true)
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(element.current)
    // console.log(element.current)
  }, [element])

  return (
    <Article ref={element}>
      {show && (
        <>
          <a href={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>
          <Button>
            <MdFavoriteBorder size='32px' />
            {likes} likes!
          </Button>
        </>
      )}
    </Article>
  )
}
