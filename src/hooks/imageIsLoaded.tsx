import { useEffect, useState } from 'react'

export const imageIsLoaded = (src: string) => {
  const [isLoaded, setIsLoaded] = useState(false)
  useEffect(() => {
    const image = new Image()
    image.src = src
    image.onload = () => setIsLoaded(true)
  }, [src])

  return isLoaded
}
