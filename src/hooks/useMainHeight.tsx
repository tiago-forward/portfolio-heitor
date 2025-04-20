import { useEffect, useState } from 'react'

export function useMainHeight(offset = 180) {
  const [mainHeight, setMainHeight] = useState('auto')

  useEffect(() => {
    const viewportHeight = window.innerHeight
    const calculatedHeight = viewportHeight - offset

    setMainHeight(`${calculatedHeight}px`)

    const handleResize = () => {
      const newViewportHeight = window.innerHeight
      const newCalculatedHeight = newViewportHeight - offset
      setMainHeight(`${newCalculatedHeight}px`)
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [offset])

  return mainHeight
}
