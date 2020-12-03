import { useEffect, useState, useRef } from 'react'
export const useNearScreen = () => {
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

  return [show, element]
}
